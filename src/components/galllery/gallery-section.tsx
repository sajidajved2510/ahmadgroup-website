"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import GalleryUploadArea from "./gallery-upload";
import GalleryData from "./gallery-data";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";
import { fetchGalleryFilesAction, deleteGalleryFileAction } from "@/actions/gallery-operations-action";
import { Loader } from "lucide-react";

export default function GallerySection() {
  const [galleryFiles, setGalleryFiles] = useState<UploadedGalleryFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch gallery files on mount and set up refresh interval
  useEffect(() => {
    loadGalleryFiles();

    // Poll for new files every 5 seconds
    const interval = setInterval(loadGalleryFiles, 5000);
    return () => clearInterval(interval);
  }, []);

  // Load gallery files from Supabase
  const loadGalleryFiles = async () => {
    try {
      console.log("📥 Loading gallery files...");
      const result = await fetchGalleryFilesAction();

      console.log("📦 Fetch result:", result);

      if (!result.success) {
        console.error("❌ Failed to fetch gallery:", result.error);
        if (isLoading) {
          toast.error(result.error || "Failed to load gallery");
        }
        setIsLoading(false);
        return;
      }

      console.log(`✅ Loaded ${result.data?.length || 0} images`);
      setGalleryFiles(result.data || []);
      setIsLoading(false);
    } catch (error) {
      console.error("❌ Exception loading gallery:", error);
      toast.error("Error loading gallery files");
      setIsLoading(false);
    }
  };

  // Handle copy to clipboard
  const handleCopy = (fileId: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(fileId);
    setTimeout(() => setCopiedId(null), 2000);
    toast.success("URL copied to clipboard!");
  };

  // Handle delete file
  const handleDelete = async (fileId: string, filePath: string) => {
    console.log("🗑️ Delete initiated:", { fileId, filePath });
    setDeletingId(fileId);
    const toastId = toast.loading("Deleting image...");

    try {
      console.log("📤 Calling deleteGalleryFileAction...", { fileId, filePath });
      const result = await deleteGalleryFileAction(fileId, filePath);

      console.log("📥 Delete response:", result);

      if (!result.success) {
        console.error("❌ Delete failed:", result.error);
        toast.error(result.error || "Failed to delete image", { id: toastId });
        setDeletingId(null);
        return;
      }

      console.log("✅ Delete successful, removing from local state");
      // Remove from local state
      setGalleryFiles((prev) => {
        const updated = prev.filter((img) => img.id !== fileId);
        console.log(`📊 Gallery updated: ${updated.length} images remaining`);
        return updated;
      });
      
      toast.success("Image deleted successfully", { id: toastId });
    } catch (error) {
      console.error("❌ Exception during delete:", error);
      toast.error("Error deleting image", { id: toastId });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <GalleryUploadArea onUploadSuccess={loadGalleryFiles} />

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader className="h-8 w-8 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600">Loading gallery...</span>
        </div>
      ) : galleryFiles.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">No images yet. Start uploading!</p>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-sm text-gray-600">
            {galleryFiles.length} image{galleryFiles.length !== 1 ? "s" : ""} in gallery
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {galleryFiles.map((img) => (
              <GalleryData
                key={img.id}
                img={img}
                copiedId={copiedId}
                onCopy={handleCopy}
                onDelete={handleDelete}
                isDeleting={deletingId === img.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}