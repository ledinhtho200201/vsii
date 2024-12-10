import * as React from 'react';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    '.MuiSvgIcon-root': {
        fontSize: 24,
    },
    '.Mui-checked': {
        color: 'orange',

        '& .MuiSvgIcon-root': {
            fontSize: 24,
        },
    },
    '.MuiCheckbox-root': {
        padding: 0,
        '& .MuiSvgIcon-root': {
        },
    },
}));

export default CustomCheckbox;
