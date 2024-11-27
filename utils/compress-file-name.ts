export default function compressFileName(fileName: string): string {
  const maxSubstrLength = 18;

  if (fileName.length > maxSubstrLength) {
    const [fileNameWithoutExtension, fileExtension] = [
      fileName.split(".").slice(0, -1).join("."),
      fileName.split(".").pop() || "",
    ];

    const charsToKeep = maxSubstrLength - (fileExtension.length + 3);

    const compressedFileName =
      fileNameWithoutExtension.substring(0, charsToKeep) +
      "..." +
      fileNameWithoutExtension.slice(-charsToKeep) +
      "." +
      fileExtension;

    return compressedFileName;
  } else {
    return fileName.trim();
  }
}
