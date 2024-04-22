/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { extendTheme, ThemeProvider as Provider } from "@mui/joy/styles";
import { createElement } from "react";

/**
 * Customized Joy UI theme.
 * @see https://mui.com/joy-ui/customization/approaches/
 */
const configuration = {
  colorSchemes: {
    light: {},
    dark: {},
  },
  shadow: {},
  typography: {},
  components: {},
}
export const theme = extendTheme(configuration);

export function ThemeProvider(props) {
  return createElement(Provider, { theme, ...props });
}