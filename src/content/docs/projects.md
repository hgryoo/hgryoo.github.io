---
title: Projects
description: Open-source projects and contributions — 3D GIS, spatial data, indoor mapping.
---

A short list of open-source work I've authored or contributed to. The 3D-GIS pieces date from my Pusan National University · STEMLab years; the DBMS work is happening on private branches and lands upstream into [CUBRID](https://github.com/CUBRID/cubrid).

## 3D Spatial · GeoServer / GeoTools

A pair of extensions that lift the WFS → GeoTools → store stack to first-class 3D — see the [FOSS4G 2017 talk](https://hgryoo.dev/knowledge-slides-site/) for the design.

- [**geotools-3d-extension**](https://github.com/STEMLab/geotools-3d-extension) — ISO 19107-aligned 3D types for GeoTools (Solid, CompositeSurface, Triangle, TIN).
- [**geoserver-3d-extension**](https://github.com/STEMLab/geoserver-3d-extension) — WFS 2.0 handlers and GML 3.2 output bindings that preserve 3D end-to-end.

## SFCGAL · 3D operations

- [**SFCGAL4J**](https://github.com/hgryoo/SFCGAL4J) — Java wrapper for [SFCGAL](http://www.sfcgal.org/) packaged for the Maven ecosystem. The Java side of using CGAL/SFCGAL from a JVM-based GIS server. See also the [PostGIS SFCGAL talk](https://hgryoo.dev/knowledge-slides-site/) for what SFCGAL gets you from SQL.

## Indoor space · OGC IndoorGML

A small ecosystem around the OGC [IndoorGML](http://www.opengeospatial.org/standards/indoorgml) standard for representing indoor space.

- [**InViewer**](https://github.com/STEMLab/InViewer) — Three.js-based viewer for visualizing IndoorGML.
- [**InFactory**](https://github.com/STEMLab/InFactory) — RESTful server and library to create / manage IndoorGML instances.
- [**InEditor**](https://github.com/STEMLab/InEditor) — Web-based editor for drawing IndoorGML data.

## Moving objects

- [**SIMOGen**](https://github.com/STEMLab/SIMOGen) — Synthetic Moving Objects Generator for indoor spaces. Used for benchmarking and seeding test data for indoor trajectory queries.

## Current — CUBRID DBMS

CUBRID is an open-source object-relational DBMS. My contributions land in the upstream repo:

- [**CUBRID/cubrid**](https://github.com/CUBRID/cubrid) — main repo.
- Code analyses on the storage engine live on the [docs site ↗](https://hgryoo.dev/knowledge-docs-site/).
