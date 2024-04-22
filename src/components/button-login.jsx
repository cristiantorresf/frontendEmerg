/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Button } from "@mui/joy";
// import { useSignIn } from "../core/auth";
import { AnonymousIcon, GoogleIcon } from "../icons";

export function LoginButton(props) {
  const { signInMethod, ...other } = props;
  // const [signIn, inFlight] = useSignIn(signInMethod);
  const [signIn, inFlight] = [() => 'signIn', () => 'inFlight']

  const icon =
    signInMethod === "google.com" ? (
      <GoogleIcon />
    ) : signInMethod === "anonymous" ? (
      <AnonymousIcon />
    ) : null;

  return (
    <Button
      startDecorator={icon}
      variant="outlined"
      onClick={signIn}
      loading={inFlight}
      children={
        signInMethod === "google.com"
          ? "Continue via Google"
          : signInMethod === "anonymous"
            ? "Continue as anonymous"
            : "unknown"
      }
      {...other}
    />
  );
}