/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {Sheet} from "@mui/joy";
import {Navigation} from "./navigation";
import LeftArrowIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined"
import RightArrowIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined"
import {useToggleSidebar} from "../hooks/navigation/sidebarHooks";
import {Logo} from "./logo";

const width = 17;

export function Sidebar(props) {
    const {sx, ...other} = props;
    const [isSidebarOpen, toggleSidebar] = useToggleSidebar()
    const toggle = () => toggleSidebar((s) => !s)
    const leftArrowStyle = {
        position: "absolute", right: 2, transition:'all .2s ease',bottom: 10, width: "2rem", cursor: "pointer", '&:hover': {
            color: 'blue',
            transform: 'scale(1.1)'
        },
        '&:active': {
            transform: 'scale(0.9)'
        }
    };

    return (
        <>
            <Logo sx={{gridArea: "1 / 1 / 2 / 2",position:'fixed', zIndex: 100, width:`${width - 2}rem`}}/>
            <Sheet
                sx={{
                    pt: "60px",
                    px: 2,
                    m:0,
                    borderRight: ({palette}) => `1px solid ${palette.divider}`,
                    overflow: "auto",
                    position: isSidebarOpen ?'fixed' : 'relative',
                    width:`${width}rem`,
                    ...sx,
                }}
                aria-label="Sidebar"
                {...other}
            >
                <div>
                    <Navigation/>
                    {isSidebarOpen ? <LeftArrowIcon onClick={toggle} sx={leftArrowStyle} fontSize="xl2"/> :
                        <RightArrowIcon onClick={toggle} fontSize="xl2" sx={{cursor: 'pointer'}}/>}
                </div>
            </Sheet>
        </>
    );
}
