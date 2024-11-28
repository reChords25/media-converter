export interface Action {
  file_name: string;
  file_size: number;
  from: string;
  to: string | null;
  file_type: string;
  file: File;
  is_converted: boolean;
  is_converting: boolean;
  is_error: boolean;
  url?: string;
  output?: File | string;
}

export interface FileItemProps {
  action: Action;
  is_loaded: boolean;
  onDelete: (action: Action) => void;
  onConversionChange: (file_name: string, to: string) => void;
  onDownload: (action: Action) => void;
  defaultValues: { [key: string]: string };
  selected: { [key: string]: string };
  setDefaultValues: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setSelected: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}
