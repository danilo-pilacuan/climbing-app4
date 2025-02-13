USE [temporal4]
GO
SET IDENTITY_INSERT [dbo].[Categorias] ON 
GO
INSERT [dbo].[Categorias] ([IdCat], [NombreCat]) VALUES (1, N'Infantil')
GO
INSERT [dbo].[Categorias] ([IdCat], [NombreCat]) VALUES (2, N'Under16')
GO
INSERT [dbo].[Categorias] ([IdCat], [NombreCat]) VALUES (3, N'Under18')
GO
INSERT [dbo].[Categorias] ([IdCat], [NombreCat]) VALUES (4, N'Under20')
GO
INSERT [dbo].[Categorias] ([IdCat], [NombreCat]) VALUES (5, N'Over20')
GO
SET IDENTITY_INSERT [dbo].[Categorias] OFF
GO
SET IDENTITY_INSERT [dbo].[Modalidades] ON 
GO
INSERT [dbo].[Modalidades] ([IdMod], [DescripcionMod]) VALUES (1, N'Velocidad')
GO
INSERT [dbo].[Modalidades] ([IdMod], [DescripcionMod]) VALUES (2, N'Bloque')
GO
INSERT [dbo].[Modalidades] ([IdMod], [DescripcionMod]) VALUES (3, N'Vias')
GO
INSERT [dbo].[Modalidades] ([IdMod], [DescripcionMod]) VALUES (4, N'Combinada')
GO
SET IDENTITY_INSERT [dbo].[Modalidades] OFF
GO
SET IDENTITY_INSERT [dbo].[Sedes] ON 
GO
INSERT [dbo].[Sedes] ([IdSede], [NombreSede]) VALUES (1, N'Sede Imbabura')
GO
INSERT [dbo].[Sedes] ([IdSede], [NombreSede]) VALUES (2, N'Sede Pichincha')
GO
SET IDENTITY_INSERT [dbo].[Sedes] OFF
GO
SET IDENTITY_INSERT [dbo].[Provincias] ON 
GO
INSERT [dbo].[Provincias] ([IdPro], [NombrePro]) VALUES (1, N'Imbabura')
GO
INSERT [dbo].[Provincias] ([IdPro], [NombrePro]) VALUES (2, N'Pichincha')
GO
INSERT [dbo].[Provincias] ([IdPro], [NombrePro]) VALUES (3, N'Azuay')
GO
SET IDENTITY_INSERT [dbo].[Provincias] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (1, N'admin', N'admin', CAST(N'2023-02-07T00:00:00.0000000' AS DateTime2), N'Administrador', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (2, N'1003174776', N'1003174776', CAST(N'2023-02-08T00:00:00.0000000' AS DateTime2), N'Deportista', 0)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (3, N'1004550214', N'1004550214', CAST(N'2023-02-08T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (4, N'1724766769', N'1724766769', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (5, N'1050167582', N'1050167582', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (6, N'1050167582', N'1050167582', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (7, N'1005051113', N'1005051113', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (8, N'1050439171', N'1050439171', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (9, N'1050219953', N'1050219953', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (10, N'1050219953', N'1050219953', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (11, N'1050219953', N'1050219953', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (12, N'1050167582', N'1050167582', CAST(N'2023-02-09T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (13, N'1002525846', N'1002525846', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Entrenador', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (14, N'1005051113', N'1005051113', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (15, N'1050439171', N'1050439171', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (16, N'1753165776', N'1753165776', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (17, N'1050219953', N'1050219953', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (18, N'1003754544', N'1003754544', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Entrenador', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (19, N'1004721740', N'1004721740', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (20, N'1755285861', N'1755285861', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (21, N'1723031181', N'1723031181', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (22, N'1004798904', N'1004798904', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (23, N'0550013767', N'0550013767', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (24, N'1050167806', N'1050167806', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (25, N'1050042611', N'1050042611', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (26, N'1050207032', N'1050207032', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (27, N'1004705461', N'1004705461', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (28, N'1005105349', N'1005105349', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (29, N'1754967675', N'1754967675', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (30, N'1050167418', N'1050167418', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (31, N'1004275879', N'1004275879', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (32, N'1050187432', N'1050187432', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (33, N'1005404726', N'1005404726', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (34, N'1003928965', N'1003928965', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (35, N'1004770333', N'1004770333', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (36, N'1005057888', N'1005057888', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (37, N'1005058993', N'1005058993', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (38, N'1750018440', N'1750018440', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (39, N'1004948277', N'1004948277', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (40, N'1004801815', N'1004801815', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (41, N'1751892595', N'1751892595', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (42, N'1005263106', N'1005263106', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (43, N'1005368517', N'1005368517', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (44, N'1004744759', N'1004744759', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (45, N'1050420767', N'1050420767', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (46, N'1004859474', N'1004859474', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (47, N'1750888297', N'1750888297', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (48, N'1003832720', N'1003832720', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (49, N'0503653842', N'0503653842', CAST(N'2023-02-23T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (50, NULL, NULL, CAST(N'2023-03-30T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (51, NULL, NULL, CAST(N'2023-03-30T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (52, N'1005004732', N'1005004732', CAST(N'2023-04-21T00:00:00.0000000' AS DateTime2), N'Juez', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (53, N'1004550214', N'1004550214', CAST(N'2024-03-07T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (54, N'1004108914', N'1004108914', CAST(N'2024-03-10T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (55, N'1005265333', N'1005265333', CAST(N'2024-03-11T00:00:00.0000000' AS DateTime2), N'Deportista', 1)
GO
INSERT [dbo].[Usuarios] ([IdUsu], [NombreUsu], [ClaveUsu], [FechaCreacion], [RolesUsu], [ActivoUsu]) VALUES (56, N'string', N'string', CAST(N'2025-01-22T00:00:00.0000000' AS DateTime2), N'string', 1)
GO
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
SET IDENTITY_INSERT [dbo].[Jueces] ON 
GO
INSERT [dbo].[Jueces] ([IdJuez], [NombresJuez], [ApellidosJuez], [CedulaJuez], [PrincipalJuez], [ActivoJuez], [IdPro], [IdUsuNavigationIdUsu]) VALUES (1, N'Julia', N'Mora', N'1723432578', 1, 1, 1, 8)
GO
INSERT [dbo].[Jueces] ([IdJuez], [NombresJuez], [ApellidosJuez], [CedulaJuez], [PrincipalJuez], [ActivoJuez], [IdPro], [IdUsuNavigationIdUsu]) VALUES (2, N'Mario', N'Flores', N'0939393242', 1, 1, 2, 9)
GO
SET IDENTITY_INSERT [dbo].[Jueces] OFF
GO
SET IDENTITY_INSERT [dbo].[Competencias] ON 
GO
INSERT [dbo].[Competencias] ([IdCom], [NombreCom], [FechaInicioCom], [FechaFinCom], [ActivoCom], [IdJuez], [IdCatNavigationIdCat], [IdSede], [IdMod]) VALUES (1, N'Competencia1', CAST(N'2025-02-11T02:40:44.4300000' AS DateTime2), CAST(N'2025-02-11T02:40:44.4300000' AS DateTime2), 1, 1, 1, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[Competencias] OFF
GO
SET IDENTITY_INSERT [dbo].[Clubs] ON 
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (1, N'FDI')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (2, N'FDC')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (3, N'AEAP')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (4, N'FDM')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (5, N'FDCH')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (6, N'FDG')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (7, N'PICHINCHA')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (8, N'FDT')
GO
INSERT [dbo].[Clubs] ([IdClub], [NombreClub]) VALUES (9, N'Iguana')
GO
SET IDENTITY_INSERT [dbo].[Clubs] OFF
GO
SET IDENTITY_INSERT [dbo].[Generos] ON 
GO
INSERT [dbo].[Generos] ([IdGen], [NombreGen]) VALUES (1, N'Masculino')
GO
INSERT [dbo].[Generos] ([IdGen], [NombreGen]) VALUES (2, N'Femenino')
GO
SET IDENTITY_INSERT [dbo].[Generos] OFF
GO
SET IDENTITY_INSERT [dbo].[Entrenadores] ON 
GO
INSERT [dbo].[Entrenadores] ([IdEnt], [NombresEnt], [ApellidosEnt], [CedulaEnt], [ActivoEnt], [IdPro], [IdUsuNavigationIdUsu]) VALUES (1, N'Juan', N'Molina', N'1724928345', 1, 1, 4)
GO
INSERT [dbo].[Entrenadores] ([IdEnt], [NombresEnt], [ApellidosEnt], [CedulaEnt], [ActivoEnt], [IdPro], [IdUsuNavigationIdUsu]) VALUES (2, N'Tomas', N'Ayala', N'0400423183', 1, 2, 5)
GO
SET IDENTITY_INSERT [dbo].[Entrenadores] OFF
GO
SET IDENTITY_INSERT [dbo].[Deportistas] ON 
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (2, N'Jorge Ramiro', N'Pazos Morillo', N'1003174776', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (3, N'ERICK ANDRES', N'PINEDA CAZARES', N'1004550214', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (4, N'Juan Pablo', N'Castro Arevalo', N'1724766769', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (5, N'Juan Daniel', N'Granja Lopez', N'1050167582', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (6, N'Alan Gael', N'Flores Cañarte', N'1005051113', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (7, N'Said Ignacio ', N'Rueda Fernández ', N'1050439171', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (8, N'Aline Salome', N'Carrillo Aguaisa', N'1753165776', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (9, N'Vitiam Renata', N'Fierro Davila', N'1050219953', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (10, N'Mateo Josue', N'Sarmiento Andrade', N'1004721740', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (11, N'Zoe Eliane', N'Aguirre Vallejo', N'1755285861', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (12, N'María Alejandra ', N'Terán Endara', N'1723031181', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (13, N'Julio Mauricio', N'Rodriguez Zegarra', N'1004798904', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (14, N'Valentina Meiyu', N'Villalba Diaz', N'0550013767', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (15, N'Erick Daniel', N'Ortega Huera', N'1050167806', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (16, N'Amy Nicole', N'bravo benalcazar', N'1050042611', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (17, N'Kristhy Analia', N'Hidrobo Carrillo', N'1050207032', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (18, N'valeria julieth', N'chiluiza rosero', N'1004705461', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (19, N'Ariel Sebastian', N'Rubio Quilca', N'1005105349', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (20, N'Paula Judith', N'Herreria Gordillo', N'1754967675', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (21, N'Karol Sabrina', N'Quel Baez', N'1050167418', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (22, N'Axel Sebastián', N'Subía Barahona', N'1004275879', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (23, N'Leonidas Gabriel', N'Andrade Mora', N'1050187432', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (24, N'Deivid Hugo', N'Paredes Reascos', N'1005404726', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (25, N'Julian', N'Cabezas Osiander', N'1003928965', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (26, N'Samanta Analia', N'Cardenas Vasquez', N'1004770333', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (27, N'Christopher Benjamín', N'López Reyes', N'1005057888', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (28, N'Matias Alexander', N'Loyo Chavarrea', N'1005058993', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (29, N'Anapaula ', N'Dillon Orozco', N'1750018440', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (30, N'Wilmer Andres', N'Padilla Chiriboga', N'1004948277', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (31, N'Derek Alessandro', N'Yépez Narváez', N'1004801815', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (32, N'Thais', N'Romero Terán', N'1751892595', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (33, N'Analia Micaela', N'Benalcazar Cabrera', N'1005263106', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (34, N'Sarah Gissell', N'Hidalgo Olivo', N'1005368517', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (35, N'Angélica Martina', N'Collantes Arias ', N'1004744759', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (36, N'Ingrid Anahí', N'Polo Chalá', N'1050420767', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (37, N'María Victoria ', N'Moya Zurita ', N'1004859474', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (38, N'Danna Mikaela', N'Vaca Chamorro', N'1750888297', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (39, N'Tomás Alejandro', N'Chicaiza Dávila', N'1003832720', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (40, N'Agusta Meiling', N'Villalba Diaz', N'0503653842', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (41, N'Manuel', N'Juarez', N'1004550214', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (42, N'Bryan Josue', N'Obando Ortega', N'1004108914', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (43, N'Naye', N'Cuaker', N'1005265333', 1, 1, 1, 1, 1, 1)
GO
INSERT [dbo].[Deportistas] ([IdDep], [NombresDep], [ApellidosDep], [CedulaDep], [ActivoDep], [IdGen], [IdClub], [IdEnt], [IdProNavigationIdPro], [IdUsuNavigationIdUsu]) VALUES (44, N'Jorge kevin', N'Pazos aldaz', N'1003174576', 1, 1, 1, 1, 1, 1)
GO