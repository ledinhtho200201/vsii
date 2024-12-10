import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    TextField,
    Typography,
    Checkbox,
    FormLabel,
    Avatar,
} from "@mui/material";
import bodyBg from '../assets/img/body_bg.jpg';
import CustomInput from '../components/Form/Input'


const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        accountType: "company",
        companyName: "",
        businessNumber: "",
        companyAddress: "",
        email: "",
        contactName: "",
        position: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [files, setFiles] = useState<File[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            setErrors({ ...errors, email: "Email không hợp lệ, vui lòng nhập lại" });
        } else {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            if (files.length + newFiles.length > 2) {
                alert("Chỉ được phép upload tối đa 2 ảnh.");
                return;
            }
            setFiles([...files, ...newFiles].slice(0, 2));
        }
    };

    const removeFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    const handleAccountTypeChange = (type: string) => {
        setFormData({ ...formData, accountType: type });
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        alert('submit')
    }

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${bodyBg})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%', minHeight: "100vh", py: 5
            }}>
                <Container maxWidth="sm" sx={{ padding: "10px 0" }}>
                    <Box
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "20px",
                            p: 4,
                            boxShadow: 3,
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            textAlign="left"
                            fontSize="28px"
                        >
                            Bổ sung thông tin
                        </Typography>
                        <Typography textAlign="left" sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "19.36px", margin: "6px 0px 30px" }}>
                            Để có thể mua-bán sản phẩm, bạn cần cung cấp bổ sung các thông tin
                            sau
                        </Typography>

                        {/* Radio buttons */}
                        <FormControl fullWidth>
                            <Typography textAlign="left" sx={{ fontWeight: "600", fontSize: "16px" }}>
                                Bổ sung thông tin cho tài khoản
                            </Typography>
                            <Box display="flex" gap={2}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.accountType === "company"}
                                            onChange={() => handleAccountTypeChange("company")}
                                            sx={{
                                                fontSize: "20px",
                                                color: "#FFA21A",
                                                "&.Mui-checked": { color: "#FFA21A" },
                                            }}
                                        />
                                    }
                                    label="Công ty"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.accountType === "personal"}
                                            onChange={() => handleAccountTypeChange("personal")}
                                            sx={{
                                                fontSize: "20px",
                                                color: "#FFA21A",
                                                "&.Mui-checked": { color: "#FFA21A" },
                                            }}
                                        />
                                    }
                                    label={<Typography sx={{ fontWeight: "500", fontSize: "14px" }}>Cá nhân</Typography>}
                                />
                            </Box>
                        </FormControl>

                        {/* Upload field */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: '30px',
                                padding: "16px 12px",
                                gap: '18px',
                                border: "1px dashed #FFC900",
                                borderRadius: '10px',
                                backgroundColor: files.length === 2 ? "#FFEFD5" : "#FFEFD5",
                                color: files.length === 2 ? "#121110" : "#3F3E3C",
                                cursor: files.length === 2 ? "not-allowed" : "pointer",
                            }}
                        >
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "16.94px",
                                color: "#121110",
                                textAlign: "center"
                            }}>
                                Tải lên ảnh giấy phép kinh doanh
                                <Typography component="div" color="#61605D" sx={{
                                    fontSize: "12px",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    lineHeight: "14.52px",
                                    textAlign: "center",
                                }}>
                                    (Vui lòng chọn tối đa 02 ảnh)
                                </Typography>
                            </Typography>
                            <Button
                                sx={{
                                    backgroundColor: "#FFA21A",
                                    borderRadius: "10px",
                                    border: "none",
                                    outline: "none",
                                    padding: '9px 20px',
                                }}
                                variant="outlined"
                                component="label"
                                disabled={files.length === 2}
                            >
                                <Typography textAlign="left" sx={{ fontWeight: "600", fontSize: "14px", color: "#121110" }}>
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
                        </Box>
                        <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
                            {files.map((file, index) => (
                                <Box
                                    key={index} position="relative" width={80} height={80}
                                    sx={{ borderRadius: "8px", overflow: "hidden" }}
                                >
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
                                        onClick={() => removeFile(index)}
                                        sx={{
                                            position: "absolute",
                                            top: -8,
                                            right: -8,
                                            minWidth: 24,
                                            minHeight: 24,
                                            borderRadius: "50%",
                                            background: "red",
                                            color: "#fff",
                                            fontSize: 12,
                                            "&:hover": { background: "darkred" },
                                        }}
                                    >
                                        x
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                        {[
                            { label: "Tên công ty", name: "companyName" },
                            { label: "Số ĐKKD", name: "businessNumber" },
                            { label: "Địa chỉ công ty", name: "companyAddress" },
                            { label: "Email", name: "email", type: "email" },
                            { label: "Họ tên bạn", name: "contactName" },
                            { label: "Vị trí làm việc trong công ty", name: "position" },
                        ].map((field) => (
                            <CustomInput
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                value={(formData as any)[field.name]}
                                type={field.type}
                                error={errors[field.name]}
                                onChange={handleInputChange}
                            />
                        ))}
                        <Box display="flex" justifyContent="space-between" mt={3}>
                            <Button variant="contained" sx={{ flex: 1, mr: 1, backgroundColor: "#F1F1EF", color: "#121110", fontWeight: 600, size: '16px' }}>
                                Hủy
                            </Button>
                            <Button variant="contained" sx={{ flex: 1, fontWeight: 600, size: '16px', backgroundColor: "#FFA21A", color: "#121110" }}>
                                Gửi yêu cầu
                            </Button>
                        </Box>
                        <Typography variant="body2" textAlign="center" mt={2}>
                            Bạn đang có vấn đề?{" "}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="span"
                            color="primary"
                            sx={{ cursor: "pointer" }}
                        >
                            Yêu cầu hỗ trợ
                        </Typography>
                    </Box>
                </Container >
            </Box >
        </>
    );
};

export default FormComponent;
