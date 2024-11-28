"use client";

import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { extensions, translations } from "@/constants";
import bytesToSize from "@/utils/bytes-to-size";
import compressFileName from "@/utils/compress-file-name";
import fileToIcon from "@/utils/file-to-icon";
import { CheckIcon, Loader2, LucideMessageCircleWarning, X } from "lucide-react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useLanguage } from "@/context/language-context";
import { FileItemProps } from "./types";

export default function FileItem({
  action,
  is_loaded,
  onDelete,
  onConversionChange,
  onDownload,
  defaultValues,
  selected,
  setDefaultValues,
  setSelected,
}: FileItemProps) {
  const { language } = useLanguage();
  const t = translations[language].dropzone;

  return (
    <div className="w-full py-4 space-y-2 lg:py-0 relative cursor-pointer rounded-xl border h-fit lg:h-20 px-4 lg:px-10 flex flex-wrap lg:flex-nowrap items-center justify-between">
      {!is_loaded && (
        <Skeleton className="h-full w-full -ml-10 cursor-progress absolute rounded-xl" />
      )}
      <div className="flex gap-4 items-center">
        <span className="text-2xl text-orange-600">
          {fileToIcon(action.file_type)}
        </span>
        <div className="flex items-center gap-1 w-96">
          <span className="text-md font-medium overflow-x-hidden">
            {compressFileName(action.file_name)}
          </span>
          <span className="text-muted-foreground text-sm">
            ({bytesToSize(action.file_size)})
          </span>
        </div>
      </div>

      {action.is_error ? (
        <Badge variant="destructive" className="flex gap-2">
          <span>{t.error}</span>
          <LucideMessageCircleWarning />
        </Badge>
      ) : action.is_converted ? (
        <Badge variant="default" className="flex gap-2 bg-green-500">
          <span>{t.converted}</span>
          <CheckIcon />
        </Badge>
      ) : action.is_converting ? (
        <Badge variant="default" className="flex gap-2">
          <span>{t.converting}</span>
          <span className="animate-spin">
            <Loader2 />
          </span>
        </Badge>
      ) : (
        <div className="text-muted-foreground text-md flex items-center gap-4">
          <span>Convert to</span>
          <Select
            onValueChange={(value) => {
              if (extensions.audio.includes(value)) {
                setDefaultValues(prev => ({ ...prev, [action.file_name]: "audio" }));
              } else if (extensions.video.includes(value)) {
                setDefaultValues(prev => ({ ...prev, [action.file_name]: "video" }));
              }
              setSelected(prev => ({ ...prev, [action.file_name]: value }));
              onConversionChange(action.file_name, value);
            }}
            value={selected[action.file_name] || "..."}
          >
            <SelectTrigger className="w-32 outline-none focus:outline-none focus:ring-0 text-center text-muted-foreground bg-background text-md font-medium">
              <SelectValue placeholder="..." />
            </SelectTrigger>
            <SelectContent className="h-fit">
              {action.file_type.includes("image") && (
                <div className="grid grid-cols-2 gap-2 w-fit">
                  {extensions.image.map((elt, i) => (
                    <div key={i} className="col-span-1 text-center">
                      <SelectItem value={elt} className="mx-auto">
                        {elt}
                      </SelectItem>
                    </div>
                  ))}
                </div>
              )}
              {action.file_type.includes("video") && (
                <Tabs defaultValue={defaultValues[action.file_name] || "video"} className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="video" className="w-full">
                      Video
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="w-full">
                      Audio
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="video">
                    <div className="grid grid-cols-3 gap-2 w-fit">
                      {extensions.video.map((elt, i) => (
                        <div key={i} className="col-span-1 text-center">
                          <SelectItem value={elt} className="mx-auto">
                            {elt}
                          </SelectItem>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="audio">
                    <div className="grid grid-cols-3 gap-2 w-fit">
                      {extensions.audio.map((elt, i) => (
                        <div key={i} className="col-span-1 text-center">
                          <SelectItem value={elt} className="mx-auto">
                            {elt}
                          </SelectItem>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              )}
              {action.file_type.includes("audio") && (
                <div className="grid grid-cols-2 gap-2 w-fit">
                  {extensions.audio.map((elt, i) => (
                    <div key={i} className="col-span-1 text-center">
                      <SelectItem value={elt} className="mx-auto">
                        {elt}
                      </SelectItem>
                    </div>
                  ))}
                </div>
              )}
            </SelectContent>
          </Select>
        </div>
      )}

      {action.is_converted ? (
        <Button
          size="sm"
          variant="outline"
          onClick={() => onDownload(action)}
          className="p-2 hover:bg-background"
        >
          <span>{t.download}</span>
        </Button>
      ) : (
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(action)}
          className="p-2 hover:bg-background"
        >
          <X />
        </Button>
      )}
    </div>
  );
}
