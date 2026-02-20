import { GalleryUploadDataSource } from "@/domain/datasource/gallery-upload-datasource";
import { SupabaseServerClient } from "@/infra/supabase/supabase-server-client";

export class SupabaseGalleryUploadDataSource
  implements GalleryUploadDataSource
{
  private async getSupabase() {
    const client = await SupabaseServerClient.create();
    return client.getClient();
  }

  async uploadGalleryImage(
    file: File,
    fileName: string
  ): Promise<{
    path: string;
    url: string;
  }> {
    const supabase = await this.getSupabase();

    // Upload to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error(
        `Storage upload failed: ${uploadError.message}`
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("gallery")
      .getPublicUrl(fileName);

    const publicUrl = urlData?.publicUrl || "";

    return {
      path: `gallery/${fileName}`,
      url: publicUrl,
    };
  }

  async saveGalleryMetadata(data: {
    name: string;
    file_name: string;
    file_path: string;
    file_size: number;
    bucket_path: string;
    mime_type: string;
    uploaded_at: string;
  }): Promise<any> {
    const supabase = await this.getSupabase();

    const { data: dbData, error: dbError } = await supabase
      .from("gallery")
      .insert([data])
      .select();

    if (dbError) {
      throw new Error(`Database insert failed: ${dbError.message}`);
    }

    return dbData?.[0] || null;
  }
}
