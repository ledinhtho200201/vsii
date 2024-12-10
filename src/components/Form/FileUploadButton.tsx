import React from "react";
import { Button, Typography } from "@mui/material";

interface FileUploadButtonProps {
    onFileUpload: (files: File[]) => void;
    disabled?: boolean;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileUpload, disabled }) => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            onFileUpload(newFiles);
        }
    };

    return (
        <Button
            sx={{
                backgroundColor: "#FFA21A",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                padding: "9px 20px",
                cursor: disabled ? "not-allowed" : "pointer",
            }}
            variant="outlined"
            component="label"
            disabled={disabled}
        >
            <Typography
                textAlign="left"
                sx={{ fontWeight: "600", fontSize: "14px", color: "#121110" }}
            >
                Chọn ảnh
            </Typography>
            <input
                type="file"
                multiple
                hidden
                onChange={handleFileUpload}
                accept="image/*"
            />
        </Button>
    );
};

export default FileUploadButton;