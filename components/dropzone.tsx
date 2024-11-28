"use client";

import convertFile from "@/utils/convert";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { useCallback, useEffect, useRef, useState } from "react";
import loadFfmpeg from "../utils/load-ffmpeg";
import { Action } from "./dropzone/types";
import ConversionActions from "./dropzone/ConversionActions";
import DropzoneInput from "./dropzone/DropzoneInput";
import FileItem from "./dropzone/FileItem";

export default function Dropzone() {
  const [actions, setActions] = useState<Action[]>([]);
  const [is_ready, setIsReady] = useState<boolean>(false);
  const [files, setFiles] = useState<Array<File>>([]);
  const [is_loaded, setIsLoaded] = useState<boolean>(false);
  const [is_converting, setIsConverting] = useState<boolean>(false);
  const [is_done, setIsDone] = useState<boolean>(false);
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const [defaultValues, setDefaultValues] = useState<{ [key: string]: string }>({});
  const [selected, setSelected] = useState<{ [key: string]: string }>({});

  const accepted_files = {
    "image/*": [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".ico",
      ".tif",
      ".tiff",
      ".raw",
      ".tga",
    ],
    "audio/*": [".mp3", ".wav", ".ogg", ".m4a", ".aac", ".flac"],
    "video/*": [".mp4", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".webm"],
  };

  // functions
  const reset = () => {
    setIsDone(false);
    setActions([]);
    setFiles([]);
    setIsReady(false);
    setIsConverting(false);
  };

  const downloadAll = (): void => {
    for (const action of actions) {
      if (!action.is_error) {
        download(action);
      }
    }
  };

  const download = (action: Action) => {
    if (!action.url || !action.output) return;
    
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = action.url;
    
    // Use the original output filename if it's a string, or get it from the File object
    let filename = '';
    if (typeof action.output === 'string') {
      filename = action.output;
    } else if (action.output instanceof File) {
      filename = action.file_name.replace(/\.[^/.]+$/, '') + '.' + action.to;
    } else {
      filename = 'converted_file.' + action.to;
    }
    
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // Clean up after download
    URL.revokeObjectURL(action.url);
    document.body.removeChild(a);
  };

  const convert = async (): Promise<void> => {
    let tmp_actions = actions.map((elt) => ({
      ...elt,
      is_converting: true,
    }));
    setActions(tmp_actions);
    setIsConverting(true);
    for (const action of tmp_actions) {
      try {
        if (ffmpegRef.current) {
          const { url, output } = await convertFile(ffmpegRef.current, action);
          const outputFile = new File([output], "output_filename");
          tmp_actions = tmp_actions.map((elt) =>
            elt === action
              ? {
                  ...elt,
                  is_converted: true,
                  is_converting: false,
                  url,
                  output: outputFile,
                }
              : elt
          );
          setActions(tmp_actions);
        }
      } catch (err) {
        console.log(err);
        tmp_actions = tmp_actions.map((elt) =>
          elt === action
            ? {
                ...elt,
                is_converted: false,
                is_converting: false,
                is_error: true,
              }
            : elt
        );
        setActions(tmp_actions);
      }
    }
    setIsDone(true);
    setIsConverting(false);
  };

  const handleUpload = (data: File[]): void => {
    setFiles(data);
    const tmp: Action[] = [];
    data.forEach((file: File) => {
      tmp.push({
        file_name: file.name,
        file_size: file.size,
        from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
        to: null,
        file_type: file.type,
        file,
        is_converted: false,
        is_converting: false,
        is_error: false,
      });
    });
    setActions(tmp);
  };

  const updateAction = (file_name: string, to: string) => {
    setActions(
      actions.map((action): Action => {
        if (action.file_name === file_name) {
          return {
            ...action,
            to,
          };
        }
        return action;
      })
    );
  };

  const deleteAction = (action: Action): void => {
    setActions(actions.filter((elt) => elt !== action));
    setFiles(files.filter((elt) => elt.name !== action.file_name));
  };

  const checkIsReady = useCallback((): void => {
    let tmp_is_ready = true;
    actions.forEach((action: Action) => {
      if (!action.to) tmp_is_ready = false;
    });
    setIsReady(tmp_is_ready);
  }, [actions]);
  
  useEffect(() => {
    if (!actions.length) {
      setIsDone(false);
      setFiles([]);
      setIsReady(false);
      setIsConverting(false);
    } else checkIsReady();
  }, [actions, checkIsReady]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const ffmpeg_response: FFmpeg = await loadFfmpeg();
    ffmpegRef.current = ffmpeg_response;
    setIsLoaded(true);
  };


  if (actions.length) {
    return (
      <div className="space-y-6">
        {actions.map((action: Action, i) => (
          <FileItem
            key={i}
            action={action}
            is_loaded={is_loaded}
            onDelete={deleteAction}
            onConversionChange={updateAction}
            onDownload={download}
            defaultValues={defaultValues}
            selected={selected}
            setDefaultValues={setDefaultValues}
            setSelected={setSelected}
          />
        ))}
        <ConversionActions
          is_done={is_done}
          is_ready={is_ready}
          is_converting={is_converting}
          actions={actions}
          onDownloadAll={downloadAll}
          onReset={reset}
          onConvert={convert}
        />
      </div>
    );
  }

  return (
    <DropzoneInput
      onUpload={handleUpload}
      accepted_files={accepted_files}
    />
  );
}
