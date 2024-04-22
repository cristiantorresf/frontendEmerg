/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  GoogleAuthProvider,
  getAuth,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import { atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "./store";
import { auth, app } from "./firebase";

export const currentUser = atom(
  new Promise(() => { }),
);

currentUser.debugLabel = "currentUser";

const unsubscribe = auth.onAuthStateChanged((user) => {
  store.set(currentUser, user);
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => unsubscribe());
}

export function useCurrentUser() {
  return useAtomValue(currentUser);
}

export const currentUserLoadable = loadable(currentUser);

export function useCurrentUserLoadable() {
  return useAtomValue(currentUserLoadable);
}

export function useSignIn(
  signInMethod
) {
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);

  const signIn = useCallback(() => {
    let p = null;

    if (signInMethod === "anonymous") {
      const auth = getAuth(app);
      p = signInAnonymously(auth);
    }

    if (signInMethod === "google.com") {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      provider.setCustomParameters({
        // login_hint: ...
        prompt: "consent",
      });
      p = signInWithPopup(auth, provider);
    }

    if (!p) throw new Error(`Not supported: ${signInMethod}`);

    setInFlight(true);
    p.then(() => navigate("/")).finally(() => setInFlight(false));
  }, [signInMethod, navigate]);

  return [signIn, inFlight];
}