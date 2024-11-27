import {
  CameraIcon,
  File,
  FileBox,
  ImageIcon,
  SpeakerIcon,
} from "lucide-react";

export default function fileToIcon(file_type: string): React.ReactNode {
  if (file_type.includes("video")) return <CameraIcon />;
  if (file_type.includes("audio")) return <SpeakerIcon />;
  if (file_type.includes("text")) return <File />;
  if (file_type.includes("image")) return <ImageIcon />;
  else return <FileBox />;
}
