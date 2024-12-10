import React from "react";
import { Box, FormControlLabel, Checkbox, Typography } from "@mui/material";

interface CheckboxGroupProps {
    value: string;
    onChange: (value: string) => void;
}

const CustomCheckboxGroup: React.FC<CheckboxGroupProps> = ({ value, onChange }) => (
    <Box display="flex" gap={2} mb={2}>
        <FormControlLabel
            control={
                <Checkbox
                    checked={value === "company"}
                    onChange={() => onChange("company")}
                    sx={{
                        color: "#FFA21A",
                        "&.Mui-checked": { color: "#FFA21A" },
                    }}
                />
            }
            label={<Typography>Công ty</Typography>}
        />
        <FormControlLabel
            control={
                <Checkbox
                    checked={value === "personal"}
                    onChange={() => onChange("personal")}
                    sx={{
                        color: "#FFA21A",
                        "&.Mui-checked": { color: "#FFA21A" },
                    }}
                />
            }
            label={<Typography>Cá nhân</Typography>}
        />
    </Box>
);

export default CustomCheckboxGroup;
