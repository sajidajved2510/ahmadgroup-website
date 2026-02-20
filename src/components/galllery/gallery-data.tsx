"use client";

import { Check, Copy, Trash2, Loader, AlertCircle } from "lucide-react";
import { useState } from "react";
import { UploadedGalleryFile } from "@/domain/models/gallery-upload";
import Image from "next/image";

interface GalleryDataProps {
  img: UploadedGalleryFile;
  copiedId: string | null;
  onCopy: (fileId: string, url: string) => void;
  onDelete: (fileId: string, filePath: string) => void;
  isDeleting?: boolean;
}

export default function GalleryData({
  img,
  copiedId,
  onCopy,
  onDelete,
  isDeleting = false,
}: GalleryDataProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleDelete = () => {
    if (confirm(`Delete "${img.name}"? This cannot be undone.`)) {
      onDelete(img.id, img.path);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    console.log(`✅ Image loaded successfully: ${img.name}`, img.url);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
    console.error(`❌ Failed to load image: ${img.name}`, {
      url: img.url,
      path: img.path,
      name: img.name,
    });
  };

  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 border border-gray-200 transition-all duration-300">
      {imageLoading && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Loader className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      )}

      {imageError ? (
        <div className="h-full w-full bg-red-50 flex flex-col items-center justify-center gap-2 p-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <p className="text-xs text-red-600 text-center font-medium">
            Failed to load image
          </p>
          <p className="text-[10px] text-red-500 text-center truncate w-full">
            {img.name}
          </p>
        </div>
      ) : (
        <Image
          src={img.url || "https://zknedevbqiwefmzmvnlp.supabase.co/storage/v1/object/public/gallery/1769260286830_1.png"}
          alt={img.name}
          width={100}
          height={100}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`h-full w-full object-cover transition-all duration-500 ${
            isDeleting ? "opacity-50" : "group-hover:scale-105"
          }`}
        />
      )}

      {/* Metadata Badge */}
      <div className="absolute top-2 left-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
        {typeof img.size === 'number' ? (img.size / 1024).toFixed(1) + ' KB' : img.size}
      </div>

      {/* Upload Time Badge */}
      <div className="absolute top-2 right-2 rounded-md bg-blue-500/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
        {new Date(img.uploadedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </div>

      {/* Deleting Overlay */}
      {isDeleting && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <Loader className="h-6 w-6 animate-spin text-white" />
        </div>
      )}

      {/* Hover Overlay */}
      {!imageError && (
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex flex-col items-center justify-center gap-2 p-4 z-5">
          <span className="text-xs text-white/90 font-medium truncate w-full text-center">
            {img.name}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onCopy(img.id, img.url)}
              disabled={isDeleting}
              className="flex items-center gap-1 rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {copiedId === img.id ? (
                <>
                  <Check className="h-3 w-3 text-green-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  Copy
                </>
              )}
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="rounded-md bg-red-500/80 p-1.5 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500/80"
              title="Delete image"
            >
              {isDeleting ? (
                <Loader className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
