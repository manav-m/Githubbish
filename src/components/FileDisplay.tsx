import React from "react";
import { File } from "../types"

interface FileDisplayProps {
  file: File
}

const FileDisplay = ({ file }: FileDisplayProps) => (
  <li>
    <a href={file.url}>{file.path}</a>
  </li>
);


export default FileDisplay;