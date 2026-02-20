import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

export interface GalleryUploadRepository {
  uploadAndSave(file: File): Promise<UploadedGalleryFile>;
}
