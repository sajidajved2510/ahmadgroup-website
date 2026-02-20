"use server";

import { SupabaseServerClient } from "@/infra/supabase/supabase-server-client";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

/**
 * Fetch all gallery files from Supabase
 */
export async function fetchGalleryFilesAction(): Promise<{
  success: boolean;
  data?: UploadedGalleryFile[];
  error?: string;
}> {
  try {
    console.log("🔍 Starting fetchGalleryFilesAction...");
    
    const supabaseClient = await SupabaseServerClient.create();
    const client = supabaseClient.getClient();

    console.log("✅ Supabase client created successfully");

    const { data, error } = await client
      .from("gallery")
      .select("*")
      .order("uploaded_at", { ascending: false });

    console.log("📊 Supabase response:", { data, error });

    if (error) {
      console.error("❌ Supabase error:", error);
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data || data.length === 0) {
      console.log("📭 No gallery files found");
      return {
        success: true,
        data: [],
      };
    }

    console.log(`📷 Found ${data.length} gallery files`);

    // Map database records to domain model
    const galleryFiles: UploadedGalleryFile[] = (data || []).map((record) => ({
      id: record.id,
      name: record.file_name,
      size: record.file_size,
      path: record.file_path,
      url: record.file_url,
      uploadedAt: record.uploaded_at,
    }));

    console.log("✅ Successfully mapped gallery files:", galleryFiles.length);

    return {
      success: true,
      data: galleryFiles,
    };
  } catch (error) {
    console.error("❌ Error in fetchGalleryFilesAction:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch gallery files",
    };
  }
}

/**
 * Delete gallery file from Supabase Storage and remove record from database
 */
export async function deleteGalleryFileAction(
  fileId: string,
  filePath: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    console.log("🗑️ Starting deleteGalleryFileAction...", { fileId, filePath });

    const supabaseClient = await SupabaseServerClient.create();
    const client = supabaseClient.getClient();

    console.log("✅ Supabase client created for delete");

    // Extract just the filename from the path (in case it includes folder prefix)
    const fileNameToDelete = filePath.includes("/") 
      ? filePath.split("/").pop() || filePath
      : filePath;

    console.log("📄 File to delete:", { fileNameToDelete, originalPath: filePath });

    // Delete from storage first
    const { error: storageError } = await client.storage
      .from("gallery")
      .remove([fileNameToDelete]);

    console.log("📦 Storage delete response:", { storageError });

    if (storageError) {
      console.error("❌ Storage delete failed:", storageError);
      // Continue even if storage delete fails, try to remove from DB
    } else {
      console.log("✅ File deleted from storage");
    }

    // Delete from database
    console.log("🔄 Attempting database delete for fileId:", fileId);
    const { error: dbError } = await client
      .from("gallery")
      .delete()
      .eq("id", fileId);

    console.log("📋 Database delete response:", { dbError });

    if (dbError) {
      console.error("❌ Database delete failed:", dbError);
      return {
        success: false,
        error: `Failed to delete record: ${dbError.message}`,
      };
    }

    console.log("✅ Record deleted from database");

    return {
      success: true,
    };
  } catch (error) {
    console.error("❌ Error in deleteGalleryFileAction:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete file",
    };
  }
}
