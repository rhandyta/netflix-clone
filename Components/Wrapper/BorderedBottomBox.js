"use client"
import {styled} from "@mui/system";
import {Box} from "@mui/material"
import { grey } from "@mui/material/colors";


const BorderedBottomBox = styled(Box)(() => ({
    borderBottom: `8px solid ${grey[800]}`
}));

export default BorderedBottomBox