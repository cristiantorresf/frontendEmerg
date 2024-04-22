/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { LogoutRounded, SettingsRounded } from "@mui/icons-material";
import {
  Avatar,
  Dropdown,
  IconButton,
  ListItemContent,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem, Sheet,
} from "@mui/joy";
import {getUsername, logOutUser} from "../hooks/auth/auth";


const { getAuth, signOut, useCurrentUser } = {
  getAuth: () => 'getAuth',
  signOut: () => 'signOut',
  useCurrentUser: () => ({displayName: 'testUser'})
}
export function UserAvatarButton(props) {
  const { sx, ...other } = props;
  const user = getUsername();

  const handleLogout = () => {
    logOutUser();
  }

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{
          root: {
            sx: { borderRadius: "50%", p: "2px", ...sx },
            ...other,
          },
        }}
      >
        <Sheet>
          {user}
        </Sheet>
      </MenuButton>

      <Menu size="sm">
        <MenuItem>
          <ListItemDecorator sx={{ ml: 0.5 }}>
            <SettingsRounded />
          </ListItemDecorator>
          <ListItemContent sx={{ mr: 2 }}>Settings</ListItemContent>
        </MenuItem>
        <MenuItem onClick={() => signOut(getAuth())}>
          <ListItemDecorator sx={{ ml: 0.5 }}>
            <LogoutRounded />
          </ListItemDecorator>
          <ListItemContent sx={{ mr: 2 }} onClick={handleLogout}>Logout</ListItemContent>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}


