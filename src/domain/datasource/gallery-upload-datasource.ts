export interface GalleryUploadDataSource {
  uploadGalleryImage(
    file: File,
    fileName: string
  ): Promise<{
    path: string;
    url: string;
  }>;

  saveGalleryMetadata(data: {
    name: string;
    file_name: string;
    file_path: string;
    file_size: number;
    bucket_path: string;
    mime_type: string;
    uploaded_at: string;
  }): Promise<any>;
}
