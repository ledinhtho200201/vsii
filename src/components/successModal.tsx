import { Box, Typography, Button, Container } from "@mui/material";
import successIcon from '../assets/img/logoSuccess.png';
const SuccessModal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFE082",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        pt: 2,
      }}
    >
      {/* Main Content */}
      <Container
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "16px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          py: 4,
          px: 4,
          maxWidth: "600px",
          mt: 5,
        }}
      >
        <Box
          component="img"
          src={successIcon}
          alt="Success Illustration"
          sx={{
            maxWidth: "100%",
            height: "auto",
            mb: 3,
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Gửi thành công
        </Typography>
        <Typography variant="body1" sx={{ color: "#757575", mb: 4 }}>
          Cảm ơn bạn đã bổ sung thông tin tài khoản. Chúng tôi sẽ liên hệ lại
          trong 24h để xác minh tài khoản của bạn.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF9800",
            color: "#FFF",
            fontWeight: "bold",
            px: 4,
            py: 1,
            "&:hover": { backgroundColor: "#FB8C00" },
          }}
        >
          Quay về trang chủ
        </Button>
      </Container>
    </Box>
  );
};

export default SuccessModal;
