"use client"

import { Accordion } from "@mui/material";
import {styled} from "@mui/material/styles"

const CustomAccordion = styled(Accordion)(({theme}) => ({
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.common.white
}));

export default CustomAccordion;