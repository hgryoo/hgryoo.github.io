---
layout: post
title:  "PostGIS SFCGAL로 3D 데이터 다뤄보기"
tags: [ GIS, Presentation, SFCGAL, PostGIS, 3D ]
---

## Korean
PostGIS SFCGAL의 함수를 이용해 간단한 3D 데이터를 만들어보고 QGIS 3.4 버전에서 가시화 해보는 내용을 담고 있습니다. 그 외에 여러가지 3D 공간 함수들을 소개합니다. 또한 3D 데이터를 PostGIS를 기반으로 서비스할 때 현재의 한계점과 고려해야할 점들에 대한 논의를 담고 있습니다.

## English
Some PostGIS functions about 3D are introduced. By using the "ST_Extrude" function supported in PostGIS, 3D extruded building data are created from New York building footprints and visualized by 3D map view in QGIS. Other useful functions also introduced such as spatial boolean operations and 3D Intersection, Union and Difference by SFCGAL backend. Finally current limitations (in my view) to deal with 3D data and considerations discussed.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vStDqbTmyUNcDA20VDS5Y1PdfhQuJgWKm1iacbc4ij_js_CAFUFoT_XbOfJfyZldvI8N44PlI3Xa8PV/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
