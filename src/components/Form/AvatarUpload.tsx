import React from "react";
import { Avatar, Box, Button } from "@mui/material";

interface FileUploadProps {
    files: File[];
    onRemove: (index: number) => void;
}

const AvatarPerview: React.FC<FileUploadProps> = ({ files, onRemove }) => (
    <Box display="flex" gap={2} flexWrap="wrap" mt={2}>
        {files.map((file, index) => (
            <Box key={index} position="relative" width={80} height={80} sx={{ borderRadius: "8px", overflow: "hidden" }}>
                <Avatar
                    variant="square"
                    src={URL.createObjectURL(file)}
                    alt={`file-preview-${index}`}
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "8px",
                    }}
                />
                <Button
                    onClick={() => onRemove(index)}
                    sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        minWidth: 24,
                        minHeight: 24,
                        borderRadius: "5px",
                        background: "#3D3D3D",
                        "&:hover": { background: "darkred" },
                    }}
                >
                    <Box sx={{
                        borderRadius: "50%",
                        background: "#FFA21A",
                        color: "#3D3D3D",
                        fontSize: 12,
                        padding: 0.2,
                    }}>x</Box>
                </Button>
            </Box>
        ))}
    </Box>
);

export default AvatarPerview;
