
import {Container} from "@mui/joy";
import {useToggleSidebar} from "../hooks/navigation/sidebarHooks";
import {useTheme} from "@mui/material/styles";
// import ErrorBoundary from "../components/errorBoundaty";
import React from "react";
import {SuperGenericTable} from "../components/tables/superGenericTable";
import {TABLETYPE, useCheckServerHealthCheck} from "../hooks/tables/fetchQuestions";


export const Component = function AnalisisR() {
    const [open] = useToggleSidebar()

    const theme = useTheme();


    return (
        <Container sx={{
            ...(!open && {
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: 5,
                    paddingRight: 5,
                    maxWidth: 'none'
                },
                [theme.breakpoints.up('xl')]: {
                    maxWidth: 'none',
                },
            }),
        }}>
         <SuperGenericTable tableType={TABLETYPE.PERSON} />
        </Container>

    );
};
