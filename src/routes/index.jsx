/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { BaseLayout, MainLayout, RootError } from "../components";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */

export const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      { path: "login", lazy: () => import("./login") },
      {path:'customLogin', lazy: () => import("./customLogin") },
      {path:'register', lazy: () => import("./register") },
      { path: "privacy", lazy: () => import("./privacy") },
      { path: "terms", lazy: () => import("./terms") },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", lazy: () => import("./dashboard") },
      { path: "analisisVSP", lazy: () => import("./analisisVSP") },
      { path: "georeferenciacion", lazy: () => import("./georeferenciacion") },
      { path: "frmempresa", lazy: () => import("./frmempresa") },
      { path: "analisisriesgos", lazy: () => import("./analisisriesgos") },
      { path: "Tamenazas", lazy: () => import("./Tamenazas") },
      { path: "analisisV", lazy: () => import("./analisisV") },
      { path: "analisisVR", lazy: () => import("./analisisVR") },
      { path: "consolidadoR", lazy: () => import("./consolidadoR") },
      { path: "inventarioR", lazy: () => import("./inventarioR") },
      { path: "inventarioRC", lazy: () => import("./inventarioRC") },
      { path: "formacionB", lazy: () => import("./formacionB") },
      { path: "simulacros", lazy: () => import("./simulacros") },
      { path: "comites", lazy: () => import("./comites") },
      { path: "comitesE", lazy: () => import("./comiteExtra") },
      { path: "procedimientosO", lazy: () => import("./procedimientosO") },
      { path: "planAccion", lazy: () => import("./planAccion") },
      { path: "tareas", lazy: () => import("./tareas") },
      { path: "mensajes", lazy: () => import("./mensajes") },
    ],
  },
]);

export function Router() {
  return createElement(RouterProvider, { router });
}
