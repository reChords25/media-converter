"use client";

import { FileSymlink, UploadCloud } from "lucide-react";
import { useState } from "react";
import ReactDropzone from "react-dropzone";
import { toast } from "sonner";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/constants";

interface DropzoneInputProps {
  onUpload: (files: File[]) => void;
  accepted_files: {
    [key: string]: string[];
  };
}

export default function DropzoneInput({ onUpload, accepted_files }: DropzoneInputProps) {
  const { language } = useLanguage();
  const t = translations[language].dropzone;
  
  const handleHover = () => setIsHover(true);
  const handleExitHover = () => setIsHover(false);
  const [is_hover, setIsHover] = useState<boolean>(false);

  return (
    <ReactDropzone
      onDrop={(files) => {
        handleExitHover();
        onUpload(files);
      }}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      accept={accepted_files}
      onDropRejected={() => {
        handleExitHover();
        toast.error(t.error);
      }}
      onError={() => {
        handleExitHover();
        toast.error(t.error);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className="bg-background h-72 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <div className="space-y-4 text-foreground">
            {is_hover ? (
              <>
                <div className="justify-center flex text-6xl">
                  <FileSymlink />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  {t.is_hover}
                </h3>
              </>
            ) : (
              <>
                <div className="justify-center flex text-6xl">
                  <UploadCloud />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  {t.display}
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </ReactDropzone>
  );
}
