import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                mt: 5,
                py: 3,
                textAlign: "center",
                backgroundColor: "#FFF",
                color: "#757575",
                borderTop: "1px solid #E0E0E0",
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                © 2024 comacPro. Ltd. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
