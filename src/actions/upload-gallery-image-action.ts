"use server";

import { SupabaseGalleryUploadDataSource } from "@/data/datasource/supabase-gallery-upload-datasource";
import { SupabaseGalleryUploadRepository } from "@/data/repositories/supabase-gallery-upload-repository";
import { GalleryUploadUseCase } from "@/usecase/gallery/gallery-upload-usecase";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

export async function uploadGalleryImageAction(
  formData: FormData
): Promise<{
  success: boolean;
  data?: UploadedGalleryFile;
  error?: string;
}> {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      return {
        success: false,
        error: "No file provided",
      };
    }

    // Instantiate layers (Dependency Injection)
    const dataSource = new SupabaseGalleryUploadDataSource();
    const repository = new SupabaseGalleryUploadRepository(dataSource);
    const useCase = new GalleryUploadUseCase(repository);

    // Execute usecase
    const uploadedFile = await useCase.execute(file);

    return {
      success: true,
      data: uploadedFile,
    };
  } catch (error) {
    console.error("Gallery upload action error:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unknown error occurred",
    };
  }
}
