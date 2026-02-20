import { GalleryUploadRepository } from "@/domain/repositories/gallery-upload-repository";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ALLOWED_MIME_TYPE = "image/png";

export class GalleryUploadUseCase {
  constructor(
    private readonly galleryUploadRepository: GalleryUploadRepository
  ) {}

  async execute(file: File): Promise<UploadedGalleryFile> {
    // Validation
    this.validateFile(file);

    // Execute upload
    const uploadedFile = await this.galleryUploadRepository.uploadAndSave(
      file
    );

    return uploadedFile;
  }

  private validateFile(file: File): void {
    // Check file type
    if (file.type !== ALLOWED_MIME_TYPE) {
      throw new Error(
        `Invalid file type. Expected ${ALLOWED_MIME_TYPE}, got ${file.type}`
      );
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(
        `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit. Current: ${(file.size / 1024 / 1024).toFixed(2)}MB`
      );
    }

    // Check file name
    if (!file.name || file.name.trim().length === 0) {
      throw new Error("File name is required");
    }
  }
}
