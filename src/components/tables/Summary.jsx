import React from 'react';
import {List, ListItem, ListItemButton, ListItemContent, ListItemDecorator} from "@mui/joy";
import {TimelineRounded} from "@mui/icons-material";
import {TABLETYPE} from "../../hooks/tables/fetchQuestions";

function Summary({data, tableType}) {
    const calculateMetrics = (data) => {
        // Example of additional metrics calculations
        const metrics = {
            promedio: data.reduce((ac, cv) => ac + cv.score, 0) / data.length,
            total: data.reduce((ac, cv) => ac + cv.score, 0),
            highestScore: Math.max(...data.map(item => item.score)),
            lowestScore: Math.min(...data.map(item => item.score)),
        };
        metrics.percentageAboveThreshold = (data.filter(q => q.score >= 1).length / data.length) * 100;
        return metrics;
    };

    const {promedio, total, highestScore, lowestScore, percentageAboveThreshold} = calculateMetrics(data);

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Promedio: {promedio.toFixed(2)}</ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Total: {total}</ListItemContent>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Highest Score: {highestScore}</ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Lowest Score: {lowestScore}</ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>% Por encima del Umbral: {percentageAboveThreshold.toFixed(2)}%</ListItemContent>
                </ListItemButton>
            </ListItem>

        </List>
    );
}

export default Summary;
