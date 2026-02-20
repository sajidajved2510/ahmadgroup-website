import BlogCard from "@/app/blog/sections/blog-card";
import CreateBlogCard from "@/app/blog/sections/create-blog-card";
import { routes } from "@/app/routes";
import Tiptap from "@/components/blogs/tiptap";
import { Separator } from "@/components/tiptap-ui-primitive/separator/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from "fs/promises";
import { redirect } from "next/navigation";
import { SupabaseServerClient } from "@/infra/supabase/supabase-server-client";
import GallerySection from "@/components/galllery/gallery-section";
import BlogGrid from "@/app/blog/sections/blog-grid";
import BlogSection from "@/components/blogs/blogs-section";



export default async function DashboardPage() {

    
        const client = await SupabaseServerClient.create();
        const supabase = client.getClient();
      

     // 🔐 Check authenticated user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // ❌ Not authenticated OR error → redirect
  if (error || !user) {
    redirect(routes.admin.signin);
  }
    
    return (
        // Wrapper assumes parent Navbar exists, so we just add padding top/bottom
        <div className=" pt-24 w-full">
            <main className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 lg:px-8">
                
                {/* Header Area */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">CMS Dashboard</h1>
                    <p className="mt-2 text-gray-500 text-lg">Manage your blogs, media assets, and site pages from one place.</p>
                </div>

                {/* Tab Navigation */}
                <Tabs defaultValue="gallery">
                <TabsList variant="line">
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="blogs">Blogs</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="gallery" className="mt-12"><GallerySection /></TabsContent>
                <TabsContent value="blogs" className="mt-12"><BlogSection /></TabsContent>
                </Tabs>

                <Separator orientation="horizontal" />

            </main>
        </div>
        
    );
}