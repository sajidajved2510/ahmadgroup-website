import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from '@supabase/supabase-js'
import { hasEnvVars } from "@/lib/utils";
import { routes } from "@/app/routes";

export class SupabaseProxy {
    private request: NextRequest;
    private supabaseResponse: NextResponse;

    constructor(request: NextRequest) {
        this.request = request;

        // Initial response
        this.supabaseResponse = NextResponse.next({ request });
    }

    /**
     * Create Supabase client for middleware
     */
    private getClient(): SupabaseClient {
        return createServerClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => this.request.cookies.getAll(),

                    setAll: (cookiesToSet) => {
                        cookiesToSet.forEach(({ name, value }) =>
                            this.request.cookies.set(name, value),
                        );

                        this.supabaseResponse = NextResponse.next({ request: this.request });

                        cookiesToSet.forEach(({ name, value, options }) =>
                            this.supabaseResponse.cookies.set(name, value, options),
                        );
                    },
                },
            },
        );
    }

    /**
     * Main session update + redirect logic
     */
    async update() {
        if (!hasEnvVars) {
            return this.supabaseResponse;
        }

        const supabase = this.getClient();

        // MUST NOT add logic here — Supabase auth is sensitive
        const { data } = await supabase.auth.getClaims();
        const user = data?.claims;

        const urlPath = this.request.nextUrl.pathname;

        const isPublic =
            urlPath === routes.admin.signin ||
            urlPath == routes.ahmadgroup.root; // dynamic course pages

        if (!user && !isPublic) {
            const url = this.request.nextUrl.clone();
            url.pathname = routes.ahmadgroup.root;
            return NextResponse.redirect(url);
        }

        return this.supabaseResponse;
    }
}