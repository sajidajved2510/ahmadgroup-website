import { AuthDataSource } from "@/domain/datasource/auth-datasource";
import { SupabaseServerClient } from "@/infra/supabase/supabase-server-client";

export class SupabaseAuthDataSource implements AuthDataSource {
 

  private async getSupabase() {
    const client = await SupabaseServerClient.create();
    return client.getClient();
  }

  async signInWithEmailAndPasssword(
    email: string,
    password: string
  ): Promise<void> {

    const supabase = await this.getSupabase();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  }
}