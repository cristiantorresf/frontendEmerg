/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {BrightnessAutoRounded} from "@mui/icons-material";
import {Box, IconButton, Sheet, Typography} from "@mui/joy";
import {Link} from "react-router-dom";
import { useTheme } from '@mui/material/styles';
export function Logo(props) {
    const {sx, ...other} = props;
    const theme = useTheme();
    return (
        <Sheet
            sx={{
                py: 1,
                px: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
                backgroundColor: theme.palette.background.default,
                ...sx,
            }}
            {...other}
        >
            <IconButton component={Link} to="/" color="primary" variant="soft">
                <BrightnessAutoRounded/>
            </IconButton>
            <Typography sx={{fontSize: "1.25rem"}} level="h4" component="div">
                {import.meta.env.VITE_APP_COMPANY_NAME}
            </Typography>
        </Sheet>
    );
}


