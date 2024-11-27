// imports
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

export default async function loadFfmpeg(): Promise<FFmpeg> {
  const ffmpeg = new FFmpeg();
  
  // Check if we're running in the browser
  if (typeof window !== "undefined") {
    try {
      // Load directly from CDN URLs
      await ffmpeg.load({
        coreURL: "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd/ffmpeg-core.js",
        wasmURL: "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd/ffmpeg-core.wasm",
      });
    } catch (error) {
      console.error("Error loading FFmpeg:", error);
      throw new Error("Failed to load FFmpeg");
    }
  }
  
  return ffmpeg;
}
