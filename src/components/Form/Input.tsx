import { Box, TextField, Typography } from "@mui/material";


interface InputProps {
    label: string;
    placeholder: string;
    optional?: boolean;
    name: string;
    value: string;
    type?: string;
    error?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
    label,
    placeholder,
    optional = false,
    name,
    value,
    type = "text",
    error,
    onChange,
}) => (
    <Box>
        <Typography variant="body2" component="label" htmlFor={name}>
            {label}{" "}
            {optional && (
                <Typography
                    component="span"
                    sx={{
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#61605D",
                    }}
                >
                    (Tùy chọn)
                </Typography>
            )}
        </Typography>
        <TextField
            id={name}
            fullWidth
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{
                "& .MuiInputBase-root": {
                    background: "#F3F3F3",
                    border: 'none',
                    outline: 'none'
                },
                "& .MuiOutlinedInput-root.Mui-error": {
                    borderColor: "red",
                },
                "& .MuiFormHelperText-root": {
                    color: "red",
                    fontWeight: 500,
                },
            }}
        />
    </Box>
);

export default CustomInput;