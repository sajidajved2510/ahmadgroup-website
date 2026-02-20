"use client";

import { Upload, X, CheckCircle, Loader } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { uploadGalleryImageAction } from "@/actions/upload-gallery-image-action";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";

interface UploadingFile {
  id: string;
  name: string;
  size: number;
  progress: number;
}

interface GalleryUploadAreaProps {
  onUploadSuccess?: () => void;
}

export default function GalleryUploadArea({ onUploadSuccess }: GalleryUploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedGalleryFile[]>([]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    const MAX_SIZE = 1 * 1024 * 1024; // 1MB
    const fileArray = Array.from(files);

    // Validate all files first
    const validFiles = fileArray.filter(file => {
      if (file.type !== "image/png") {
        toast.error(`"${file.name}" is not a PNG image. Only PNG images are allowed.`);
        return false;
      }
      if (file.size > MAX_SIZE) {
        toast.error(`File "${file.name}" exceeds 1MB limit`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) {
      toast.error("Please select valid PNG images under 1MB");
      return;
    }

    // Upload each file sequentially
    for (const file of validFiles) {
      await uploadFile(file);
    }
  };

  const uploadFile = async (file: File) => {
    const uploadId = Date.now().toString();

    // Add to uploading list
    setUploadingFiles(prev => [
      ...prev,
      {
        id: uploadId,
        name: file.name,
        size: file.size,
        progress: 0,
      },
    ]);

    const toastId = toast.loading(`Uploading ${file.name}...`);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Call server action
      const result = await uploadGalleryImageAction(formData);

      if (!result.success || !result.data) {
        toast.error(
          result.error || "Upload failed",
          { id: toastId }
        );
        setUploadingFiles(prev => prev.filter(f => f.id !== uploadId));
        return;
      }

      // Add to uploaded list
      setUploadedFiles(prev => [result.data!, ...prev]);

      // Remove from uploading list
      setUploadingFiles(prev => prev.filter(f => f.id !== uploadId));

      // Update progress
      setUploadingFiles(prev =>
        prev.map(f =>
          f.id === uploadId ? { ...f, progress: 100 } : f
        )
      );

      toast.success(
        `${file.name} uploaded successfully!`,
        { id: toastId }
      );

      // Log upload
      console.log(`✅ File uploaded: ${result.data.name}`, result.data);

      // Trigger parent refresh
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        `Failed to upload ${file.name}`,
        { id: toastId }
      );
      setUploadingFiles(prev => prev.filter(f => f.id !== uploadId));
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ${
        isDragging
          ? "border-black bg-black/5"
          : "border-gray-300 bg-gray-50 hover:border-gray-400"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="px-6 py-12 sm:px-8 sm:py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-md ring-1 ring-gray-900/10">
          <Upload className={`h-8 w-8 transition-colors ${isDragging ? "text-black" : "text-gray-600"}`} />
        </div>

        <h3 className="mb-3 text-lg font-semibold text-gray-900">Upload Images</h3>
        <p className="mb-2 text-sm text-gray-600">
          Drag and drop PNG images here, or click to browse.
        </p>
        <p className="mb-6 text-xs text-gray-500">PNG images only • Max size 1MB per file</p>

        <button
          onClick={handleButtonClick}
          disabled={uploadingFiles.length > 0}
          className={`flex items-center justify-center mx-auto gap-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
            uploadingFiles.length > 0
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 active:scale-95"
          }`}
        >
          {uploadingFiles.length > 0 ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              Uploading... ({uploadingFiles.length})
            </>
          ) : (
            <>
              <Upload className="h-4 w-4" />
              Select Files
            </>
          )}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/png"
        onChange={handleFileInputChange}
        className="hidden"
        disabled={uploadingFiles.length > 0}
      />

      {(uploadingFiles.length > 0 || uploadedFiles.length > 0) && (
        <div className="border-t border-gray-200 px-6 py-6 sm:px-8">
          {uploadingFiles.length > 0 && (
            <div className="mb-6">
              <h4 className="mb-4 flex items-center text-sm font-semibold text-gray-900">
                <Loader className="mr-2 h-5 w-5 animate-spin text-blue-600" />
                Uploading Files ({uploadingFiles.length})
              </h4>
              <div className="space-y-3">
                {uploadingFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-start justify-between rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4 text-sm border border-blue-200"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Loader className="h-4 w-4 animate-spin text-blue-600" />
                        <p className="font-medium text-gray-900 truncate">{file.name}</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-blue-300 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                          style={{ width: "50%" }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-blue-700">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {uploadedFiles.length > 0 && (
            <div>
              <h4 className="mb-4 flex items-center text-sm font-semibold text-gray-900">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                Uploaded Files ({uploadedFiles.length})
              </h4>
              <div className="space-y-3">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-start justify-between rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-4 text-sm border border-gray-200 transition-all hover:shadow-md"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <p className="font-medium text-gray-900 truncate">{file.name}</p>
                      </div>
                      <p className="mt-1 text-xs text-gray-600 break-all truncate">{file.url}</p>
                      <p className="mt-2 text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB • {new Date(file.uploadedAt).toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedFiles(prev =>
                          prev.filter(f => f.id !== file.id)
                        );
                        toast.success(`${file.name} removed from list`);
                      }}
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors hover:bg-red-50 p-1 rounded"
                      title="Remove"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}