import {List, ListItem, ListItemButton, ListItemContent, ListItemDecorator} from "@mui/joy";
import {TimelineRounded} from "@mui/icons-material";


function CustomList({promedio='promedio', total = 'total'}) {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Promedio {promedio}</ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemDecorator><TimelineRounded/></ListItemDecorator>
                    <ListItemContent>Total {total}</ListItemContent>
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default CustomList;
