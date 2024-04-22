/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {Box, GlobalStyles} from "@mui/joy";
import {Fragment, Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Logo} from "./logo";
import {Sidebar} from "./sidebar";
import {Toolbar} from "./toolbar";
import {useToggleSidebar} from "../hooks/navigation/sidebarHooks";
import RightArrowIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import {useTheme} from "@mui/material/styles";

/**
 * The main application layout.
 */
export function MainLayout() {
    const [isSidebarOpen, toggleSidebar] = useToggleSidebar()
    const theme = useTheme();
    const secondaryColor = theme.vars.palette.primary.main;
    const toggle = () => toggleSidebar((s) => !s)

    const rightArrowStyle = {
        position: "fixed", background:secondaryColor,borderRadius:'55%', left: 2, transition:'all .2s ease',top: '50%', width: "2rem", cursor: "pointer", '&:hover': {
            color: 'blue',
            transform: 'scale(1.1)'
        },
        '&:active': {
            transform: 'scale(0.9)'
        }
    };

    return (
        <Fragment>
            <GlobalStyles
                styles={{
                    ...(isSidebarOpen ? {
                        "#root": {
                            display: "grid",
                            gridTemplateColumns: "1fr 4fr",
                            gridTemplateRows: "auto 1fr",
                            height: "100vh",
                        }
                    } : {})

                }}
            />
            <Toolbar sx={{gridArea: "1 / 2 / 2 / -1"}}/>
            {isSidebarOpen ? <>

                <Sidebar sx={{gridArea: "1 / 1 / -1 / 2", height: "100vh"}}/>
            </> : <RightArrowIcon sx={rightArrowStyle} onClick={toggle} fontSize="xl2" />}

            <Box sx={{gridArea: "1 / 2 / -1 / -1", pt: "50px"}}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </Box>
        </Fragment>
    );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout() {
    return (
        <Fragment>
            <GlobalStyles
                styles={{
                    "#root": {
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        minHeight: "100vh",
                    },
                }}
            />

            <Box sx={{gridArea: "1 / 1 / 2 / 2 "}}>
                <Logo/>
            </Box>

            <Box sx={{gridArea: "1 / 1 / -1 / -1", pt: "60px"}}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </Box>
        </Fragment>
    );
}
