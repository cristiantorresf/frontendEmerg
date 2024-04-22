/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  AssignmentTurnedInRounded,
  ChatRounded,
  Dashboard,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";
import { memo } from "react";
import { Link, useMatch } from "react-router-dom";

export const Navigation = memo(function Navigation(
  props
) {
  const { sx, ...other } = props;

  return (
    <List
      sx={{ "--ListItem-radius": "4px", ...sx }}
      size="sm"
      role="navigation"
      {...other}
    >
      <NavItem path="/dashboard" 
       label="Dashboard" 
       icon={<Dashboard />} />

      <NavItem path="/frmempresa" 
       label="Empresa" 
       icon={<Dashboard />} />

      <NavItem
        path="/Georeferenciacion"
        label="Georeferencia"
        icon={<Dashboard />} />

      <NavItem
        path="/analisisriesgos"
        label="Análisis de Riesgos"
        icon={<Dashboard />} />

      <NavItem path="/Tamenazas" 
       label="Tabla de Amenazas" 
       icon={<Dashboard />} />

      <NavItem path="/analisisV" 
       label=" Vulnerabilidad de Personas" 
       icon={<Dashboard />} />

      <NavItem
        path="/analisisVR"
        label=" Vulnerabilidad de Recursos"
        icon={<Dashboard />}  />
 
      <NavItem
        path="/analisisVSP"
        label="Vulnerabilidad de Sistema y Procesos"
        icon={<Dashboard />}  />

      <NavItem
        path="/consolidadoR"
        label="Consolidado de Riesgo"
        icon={<Dashboard />}   />
 
      <NavItem path="/inventarioR" 
        label="Inventario de Recursos (Brigadistas - Extintores)" 
        icon={<Dashboard />} />

      <NavItem path="/inventarioRC"
        label="Inventario de Recursos (Camillas - Botiquines) "
        icon={<Dashboard />} />

      <NavItem path="/formacionB" 
       label="Formación de Brigadistas" 
       icon={<Dashboard />} />

      <NavItem path="/simulacros" 
       label="Simulácros" 
       icon={<Dashboard />} />

      <NavItem path="/comites" 
       label="Comités" 
       icon={<Dashboard />} />

      <NavItem path="/comitesE" 
       label="Comités Extra" 
       icon={<Dashboard />} /> 
      <NavItem
        path="/procedimientosO"
        label="Procedimientos Operativos"
        icon={<Dashboard />}  />
 
      <NavItem path="/planAccion" 
       label="Plan de Acción" 
       icon={<Dashboard />} />

      <NavItem
        path="/tareas"
        label="Tareas"
        icon={<AssignmentTurnedInRounded />}  />

      <NavItem path="/mensajes" 
       label="Mensajes" 
       icon={<ChatRounded />} />
    </List>
  );
});

function NavItem(props) {
  return (
    <ListItem>
      <ListItemButton
        component={Link}
        selected={!!useMatch(props.path)}
        to={props.path}
        aria-current="page"
      >
        <ListItemDecorator children={props.icon} />
        <ListItemContent>{props.label}</ListItemContent>
      </ListItemButton>
    </ListItem>
  );
}