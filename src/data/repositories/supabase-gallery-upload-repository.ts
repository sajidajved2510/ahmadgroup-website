import { GalleryUploadRepository } from "@/domain/repositories/gallery-upload-repository";
import { GalleryUploadDataSource } from "@/domain/datasource/gallery-upload-datasource";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

export class SupabaseGalleryUploadRepository
  implements GalleryUploadRepository
{
  constructor(
    private galleryUploadDataSource: GalleryUploadDataSource
  ) {}

  async uploadAndSave(file: File): Promise<UploadedGalleryFile> {
    const fileId = Date.now().toString();
    const fileName = `${fileId}_${file.name}`;

    // Upload file to storage
    const { path, url } =
      await this.galleryUploadDataSource.uploadGalleryImage(
        file,
        fileName
      );

    // Save metadata to database
    const metadata = await this.galleryUploadDataSource.saveGalleryMetadata(
      {
        name: file.name,
        file_name: fileName,
        file_path: path,
        file_size: file.size,
        bucket_path: path,
        mime_type: file.type,
        uploaded_at: new Date().toISOString(),
      }
    );

    return {
      id: metadata?.id || fileId,
      name: file.name,
      size: file.size,
      path,
      url,
      uploadedAt: new Date().toISOString(),
    };
  }
}
