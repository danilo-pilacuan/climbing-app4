USE [master]
GO
/****** Object:  Database [ProyectoFDI]    Script Date: 11/2/2025 2:02:46 ******/
CREATE DATABASE [ProyectoFDI]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoFDI', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ProyectoFDI.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoFDI_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\ProyectoFDI_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ProyectoFDI] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProyectoFDI].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProyectoFDI] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProyectoFDI] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProyectoFDI] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProyectoFDI] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProyectoFDI] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProyectoFDI] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ProyectoFDI] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProyectoFDI] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProyectoFDI] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProyectoFDI] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProyectoFDI] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProyectoFDI] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProyectoFDI] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProyectoFDI] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProyectoFDI] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ProyectoFDI] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProyectoFDI] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProyectoFDI] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProyectoFDI] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProyectoFDI] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProyectoFDI] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ProyectoFDI] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProyectoFDI] SET RECOVERY FULL 
GO
ALTER DATABASE [ProyectoFDI] SET  MULTI_USER 
GO
ALTER DATABASE [ProyectoFDI] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProyectoFDI] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProyectoFDI] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProyectoFDI] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProyectoFDI] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ProyectoFDI] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ProyectoFDI', N'ON'
GO
ALTER DATABASE [ProyectoFDI] SET QUERY_STORE = ON
GO
ALTER DATABASE [ProyectoFDI] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ProyectoFDI]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categorias]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categorias](
	[IdCat] [int] IDENTITY(1,1) NOT NULL,
	[NombreCat] [nvarchar](max) NULL,
 CONSTRAINT [PK_Categorias] PRIMARY KEY CLUSTERED 
(
	[IdCat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clubs]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clubs](
	[IdClub] [int] IDENTITY(1,1) NOT NULL,
	[NombreClub] [nvarchar](max) NULL,
 CONSTRAINT [PK_Clubs] PRIMARY KEY CLUSTERED 
(
	[IdClub] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Competencias]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Competencias](
	[IdCom] [int] IDENTITY(1,1) NOT NULL,
	[NombreCom] [nvarchar](max) NULL,
	[FechaInicioCom] [datetime2](7) NULL,
	[FechaFinCom] [datetime2](7) NULL,
	[ActivoCom] [bit] NULL,
	[IdJuez] [int] NULL,
	[IdCat] [int] NULL,
	[IdSede] [int] NULL,
	[IdMod] [int] NULL,
	[CategoriumIdCat] [int] NULL,
 CONSTRAINT [PK_Competencias] PRIMARY KEY CLUSTERED 
(
	[IdCom] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Deportistas]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Deportistas](
	[IdDep] [int] IDENTITY(1,1) NOT NULL,
	[NombresDep] [nvarchar](max) NULL,
	[ApellidosDep] [nvarchar](max) NULL,
	[CedulaDep] [nvarchar](max) NULL,
	[ActivoDep] [bit] NULL,
	[IdGen] [int] NULL,
	[IdClub] [int] NULL,
	[IdEnt] [int] NULL,
	[IdProNavigationIdPro] [int] NULL,
	[IdUsuNavigationIdUsu] [int] NULL,
 CONSTRAINT [PK_Deportistas] PRIMARY KEY CLUSTERED 
(
	[IdDep] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetalleCompetencias]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetalleCompetencias](
	[IdDetalle] [int] IDENTITY(1,1) NOT NULL,
	[ClasRes] [nvarchar](max) NULL,
	[OctavosRes] [nvarchar](max) NULL,
	[CuartosRes] [nvarchar](max) NULL,
	[SemiRes] [nvarchar](max) NULL,
	[FinalRes] [nvarchar](max) NULL,
	[IdComNavigationIdCom] [int] NULL,
 CONSTRAINT [PK_DetalleCompetencias] PRIMARY KEY CLUSTERED 
(
	[IdDetalle] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Entrenadores]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Entrenadores](
	[IdEnt] [int] IDENTITY(1,1) NOT NULL,
	[NombresEnt] [nvarchar](max) NULL,
	[ApellidosEnt] [nvarchar](max) NULL,
	[CedulaEnt] [nvarchar](max) NULL,
	[ActivoEnt] [bit] NULL,
	[IdPro] [int] NULL,
	[IdUsuNavigationIdUsu] [int] NULL,
 CONSTRAINT [PK_Entrenadores] PRIMARY KEY CLUSTERED 
(
	[IdEnt] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Generos]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Generos](
	[IdGen] [int] IDENTITY(1,1) NOT NULL,
	[NombreGen] [nvarchar](max) NULL,
 CONSTRAINT [PK_Generos] PRIMARY KEY CLUSTERED 
(
	[IdGen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Jueces]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Jueces](
	[IdJuez] [int] IDENTITY(1,1) NOT NULL,
	[NombresJuez] [nvarchar](max) NULL,
	[ApellidosJuez] [nvarchar](max) NULL,
	[CedulaJuez] [nvarchar](max) NULL,
	[PrincipalJuez] [bit] NULL,
	[ActivoJuez] [bit] NULL,
	[IdPro] [int] NULL,
	[IdUsuNavigationIdUsu] [int] NULL,
 CONSTRAINT [PK_Jueces] PRIMARY KEY CLUSTERED 
(
	[IdJuez] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Modalidades]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Modalidades](
	[IdMod] [int] IDENTITY(1,1) NOT NULL,
	[DescripcionMod] [nvarchar](max) NULL,
 CONSTRAINT [PK_Modalidades] PRIMARY KEY CLUSTERED 
(
	[IdMod] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincias]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provincias](
	[IdPro] [int] IDENTITY(1,1) NOT NULL,
	[NombrePro] [nvarchar](max) NULL,
 CONSTRAINT [PK_Provincias] PRIMARY KEY CLUSTERED 
(
	[IdPro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RegistroResultado]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegistroResultado](
	[IdRegistroResultado] [int] IDENTITY(1,1) NOT NULL,
	[IdDetalleCompetencia] [int] NULL,
	[IdDep] [int] NULL,
	[Puesto] [int] NULL,
	[Etapa] [nvarchar](max) NULL,
 CONSTRAINT [PK_RegistroResultado] PRIMARY KEY CLUSTERED 
(
	[IdRegistroResultado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sedes]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sedes](
	[IdSede] [int] IDENTITY(1,1) NOT NULL,
	[NombreSede] [nvarchar](max) NULL,
 CONSTRAINT [PK_Sedes] PRIMARY KEY CLUSTERED 
(
	[IdSede] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 11/2/2025 2:02:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[IdUsu] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsu] [nvarchar](max) NULL,
	[ClaveUsu] [nvarchar](max) NULL,
	[FechaCreacion] [datetime2](7) NULL,
	[RolesUsu] [nvarchar](max) NULL,
	[ActivoUsu] [bit] NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[IdUsu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211062857_InitialCreate', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211065139_DeleteGenero', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211065346_DeleteGenero2', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211065611_DeleteGenero3', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211065737_DeleteGenero4', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211065825_DeleteGenero5', N'6.0.36')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250211070159_DeleteGenero6', N'6.0.36')
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
/****** Object:  Index [IX_Competencias_CategoriumIdCat]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Competencias_CategoriumIdCat] ON [dbo].[Competencias]
(
	[CategoriumIdCat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Competencias_IdCat]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Competencias_IdCat] ON [dbo].[Competencias]
(
	[IdCat] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Competencias_IdJuez]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Competencias_IdJuez] ON [dbo].[Competencias]
(
	[IdJuez] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Competencias_IdMod]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Competencias_IdMod] ON [dbo].[Competencias]
(
	[IdMod] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Competencias_IdSede]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Competencias_IdSede] ON [dbo].[Competencias]
(
	[IdSede] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Deportistas_IdClub]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Deportistas_IdClub] ON [dbo].[Deportistas]
(
	[IdClub] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Deportistas_IdEnt]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Deportistas_IdEnt] ON [dbo].[Deportistas]
(
	[IdEnt] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Deportistas_IdGen]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Deportistas_IdGen] ON [dbo].[Deportistas]
(
	[IdGen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Deportistas_IdProNavigationIdPro]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Deportistas_IdProNavigationIdPro] ON [dbo].[Deportistas]
(
	[IdProNavigationIdPro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Deportistas_IdUsuNavigationIdUsu]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Deportistas_IdUsuNavigationIdUsu] ON [dbo].[Deportistas]
(
	[IdUsuNavigationIdUsu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_DetalleCompetencias_IdComNavigationIdCom]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_DetalleCompetencias_IdComNavigationIdCom] ON [dbo].[DetalleCompetencias]
(
	[IdComNavigationIdCom] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Entrenadores_IdPro]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Entrenadores_IdPro] ON [dbo].[Entrenadores]
(
	[IdPro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Entrenadores_IdUsuNavigationIdUsu]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Entrenadores_IdUsuNavigationIdUsu] ON [dbo].[Entrenadores]
(
	[IdUsuNavigationIdUsu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Jueces_IdPro]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Jueces_IdPro] ON [dbo].[Jueces]
(
	[IdPro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Jueces_IdUsuNavigationIdUsu]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_Jueces_IdUsuNavigationIdUsu] ON [dbo].[Jueces]
(
	[IdUsuNavigationIdUsu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RegistroResultado_IdDep]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_RegistroResultado_IdDep] ON [dbo].[RegistroResultado]
(
	[IdDep] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RegistroResultado_IdDetalleCompetencia]    Script Date: 11/2/2025 2:02:46 ******/
CREATE NONCLUSTERED INDEX [IX_RegistroResultado_IdDetalleCompetencia] ON [dbo].[RegistroResultado]
(
	[IdDetalleCompetencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Competencias]  WITH CHECK ADD  CONSTRAINT [FK_Competencias_Categorias_CategoriumIdCat] FOREIGN KEY([CategoriumIdCat])
REFERENCES [dbo].[Categorias] ([IdCat])
GO
ALTER TABLE [dbo].[Competencias] CHECK CONSTRAINT [FK_Competencias_Categorias_CategoriumIdCat]
GO
ALTER TABLE [dbo].[Competencias]  WITH CHECK ADD  CONSTRAINT [FK_Competencias_Categorias_IdCat] FOREIGN KEY([IdCat])
REFERENCES [dbo].[Categorias] ([IdCat])
GO
ALTER TABLE [dbo].[Competencias] CHECK CONSTRAINT [FK_Competencias_Categorias_IdCat]
GO
ALTER TABLE [dbo].[Competencias]  WITH CHECK ADD  CONSTRAINT [FK_Competencias_Jueces_IdJuez] FOREIGN KEY([IdJuez])
REFERENCES [dbo].[Jueces] ([IdJuez])
GO
ALTER TABLE [dbo].[Competencias] CHECK CONSTRAINT [FK_Competencias_Jueces_IdJuez]
GO
ALTER TABLE [dbo].[Competencias]  WITH CHECK ADD  CONSTRAINT [FK_Competencias_Modalidades_IdMod] FOREIGN KEY([IdMod])
REFERENCES [dbo].[Modalidades] ([IdMod])
GO
ALTER TABLE [dbo].[Competencias] CHECK CONSTRAINT [FK_Competencias_Modalidades_IdMod]
GO
ALTER TABLE [dbo].[Competencias]  WITH CHECK ADD  CONSTRAINT [FK_Competencias_Sedes_IdSede] FOREIGN KEY([IdSede])
REFERENCES [dbo].[Sedes] ([IdSede])
GO
ALTER TABLE [dbo].[Competencias] CHECK CONSTRAINT [FK_Competencias_Sedes_IdSede]
GO
ALTER TABLE [dbo].[Deportistas]  WITH CHECK ADD  CONSTRAINT [FK_Deportistas_Clubs_IdClub] FOREIGN KEY([IdClub])
REFERENCES [dbo].[Clubs] ([IdClub])
GO
ALTER TABLE [dbo].[Deportistas] CHECK CONSTRAINT [FK_Deportistas_Clubs_IdClub]
GO
ALTER TABLE [dbo].[Deportistas]  WITH CHECK ADD  CONSTRAINT [FK_Deportistas_Entrenadores_IdEnt] FOREIGN KEY([IdEnt])
REFERENCES [dbo].[Entrenadores] ([IdEnt])
GO
ALTER TABLE [dbo].[Deportistas] CHECK CONSTRAINT [FK_Deportistas_Entrenadores_IdEnt]
GO
ALTER TABLE [dbo].[Deportistas]  WITH CHECK ADD  CONSTRAINT [FK_Deportistas_Generos_IdGen] FOREIGN KEY([IdGen])
REFERENCES [dbo].[Generos] ([IdGen])
GO
ALTER TABLE [dbo].[Deportistas] CHECK CONSTRAINT [FK_Deportistas_Generos_IdGen]
GO
ALTER TABLE [dbo].[Deportistas]  WITH CHECK ADD  CONSTRAINT [FK_Deportistas_Provincias_IdProNavigationIdPro] FOREIGN KEY([IdProNavigationIdPro])
REFERENCES [dbo].[Provincias] ([IdPro])
GO
ALTER TABLE [dbo].[Deportistas] CHECK CONSTRAINT [FK_Deportistas_Provincias_IdProNavigationIdPro]
GO
ALTER TABLE [dbo].[Deportistas]  WITH CHECK ADD  CONSTRAINT [FK_Deportistas_Usuarios_IdUsuNavigationIdUsu] FOREIGN KEY([IdUsuNavigationIdUsu])
REFERENCES [dbo].[Usuarios] ([IdUsu])
GO
ALTER TABLE [dbo].[Deportistas] CHECK CONSTRAINT [FK_Deportistas_Usuarios_IdUsuNavigationIdUsu]
GO
ALTER TABLE [dbo].[DetalleCompetencias]  WITH CHECK ADD  CONSTRAINT [FK_DetalleCompetencias_Competencias_IdComNavigationIdCom] FOREIGN KEY([IdComNavigationIdCom])
REFERENCES [dbo].[Competencias] ([IdCom])
GO
ALTER TABLE [dbo].[DetalleCompetencias] CHECK CONSTRAINT [FK_DetalleCompetencias_Competencias_IdComNavigationIdCom]
GO
ALTER TABLE [dbo].[Entrenadores]  WITH CHECK ADD  CONSTRAINT [FK_Entrenadores_Provincias_IdPro] FOREIGN KEY([IdPro])
REFERENCES [dbo].[Provincias] ([IdPro])
GO
ALTER TABLE [dbo].[Entrenadores] CHECK CONSTRAINT [FK_Entrenadores_Provincias_IdPro]
GO
ALTER TABLE [dbo].[Entrenadores]  WITH CHECK ADD  CONSTRAINT [FK_Entrenadores_Usuarios_IdUsuNavigationIdUsu] FOREIGN KEY([IdUsuNavigationIdUsu])
REFERENCES [dbo].[Usuarios] ([IdUsu])
GO
ALTER TABLE [dbo].[Entrenadores] CHECK CONSTRAINT [FK_Entrenadores_Usuarios_IdUsuNavigationIdUsu]
GO
ALTER TABLE [dbo].[Jueces]  WITH CHECK ADD  CONSTRAINT [FK_Jueces_Provincias_IdPro] FOREIGN KEY([IdPro])
REFERENCES [dbo].[Provincias] ([IdPro])
GO
ALTER TABLE [dbo].[Jueces] CHECK CONSTRAINT [FK_Jueces_Provincias_IdPro]
GO
ALTER TABLE [dbo].[Jueces]  WITH CHECK ADD  CONSTRAINT [FK_Jueces_Usuarios_IdUsuNavigationIdUsu] FOREIGN KEY([IdUsuNavigationIdUsu])
REFERENCES [dbo].[Usuarios] ([IdUsu])
GO
ALTER TABLE [dbo].[Jueces] CHECK CONSTRAINT [FK_Jueces_Usuarios_IdUsuNavigationIdUsu]
GO
ALTER TABLE [dbo].[RegistroResultado]  WITH CHECK ADD  CONSTRAINT [FK_RegistroResultado_Deportistas_IdDep] FOREIGN KEY([IdDep])
REFERENCES [dbo].[Deportistas] ([IdDep])
GO
ALTER TABLE [dbo].[RegistroResultado] CHECK CONSTRAINT [FK_RegistroResultado_Deportistas_IdDep]
GO
ALTER TABLE [dbo].[RegistroResultado]  WITH CHECK ADD  CONSTRAINT [FK_RegistroResultado_DetalleCompetencias_IdDetalleCompetencia] FOREIGN KEY([IdDetalleCompetencia])
REFERENCES [dbo].[DetalleCompetencias] ([IdDetalle])
GO
ALTER TABLE [dbo].[RegistroResultado] CHECK CONSTRAINT [FK_RegistroResultado_DetalleCompetencias_IdDetalleCompetencia]
GO
USE [master]
GO
ALTER DATABASE [ProyectoFDI] SET  READ_WRITE 
GO
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
USE [ProyectoFDI.v2]
GO
/****** Object:  Table [dbo].[deportista]    Script Date: 11/2/2025 2:12:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[deportista](
	[id_dep] [int] IDENTITY(1,1) NOT NULL,
	[nombres_dep] [varchar](50) NULL,
	[apellidos_dep] [varchar](50) NULL,
	[cedula_dep] [varchar](10) NULL,
	[activo_dep] [bit] NULL,
	[id_pro] [int] NULL,
	[id_usu] [int] NULL,
	[id_cat] [int] NULL,
	[id_gen] [int] NULL,
	[id_club] [int] NULL,
	[id_ent] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_dep] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[deportista] ON 
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (1, N'Jorge Ramiro', N'Pazos Morillo', N'1003174776', 1, 12, 2, 5, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (2, N'ERICK ANDRES', N'PINEDA CAZARES', N'1004550214', 1, 11, 3, 5, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (3, N'Juan Pablo', N'Castro Arevalo', N'1724766769', 1, 11, 4, 4, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (12, N'Juan Daniel', N'Granja Lopez', N'1050167582', 1, 11, 13, 2, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (13, N'Alan Gael', N'Flores Cañarte', N'1005051113', 1, 11, 15, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (14, N'Said Ignacio ', N'Rueda Fernández ', N'1050439171', 1, 11, 16, 2, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (15, N'Aline Salome', N'Carrillo Aguaisa', N'1753165776', 1, 11, 17, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (16, N'Vitiam Renata', N'Fierro Davila', N'1050219953', 1, 11, 18, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (17, N'Mateo Josue', N'Sarmiento Andrade', N'1004721740', 1, 11, 20, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (18, N'Zoe Eliane', N'Aguirre Vallejo', N'1755285861', 1, 11, 21, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (19, N'María Alejandra ', N'Terán Endara', N'1723031181', 1, 11, 22, 4, 2, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (20, N'Julio Mauricio', N'Rodriguez Zegarra', N'1004798904', 1, 11, 23, 2, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (21, N'Valentina Meiyu', N'Villalba Diaz', N'0550013767', 1, 11, 24, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (22, N'Erick Daniel', N'Ortega Huera', N'1050167806', 1, 11, 25, 1, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (23, N'Amy Nicole', N'bravo benalcazar', N'1050042611', 1, 11, 26, 2, 2, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (24, N'Kristhy Analia', N'Hidrobo Carrillo', N'1050207032', 1, 11, 27, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (25, N'valeria julieth', N'chiluiza rosero', N'1004705461', 1, 11, 28, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (26, N'Ariel Sebastian', N'Rubio Quilca', N'1005105349', 1, 11, 29, 2, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (27, N'Paula Judith', N'Herreria Gordillo', N'1754967675', 1, 11, 30, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (28, N'Karol Sabrina', N'Quel Baez', N'1050167418', 1, 11, 31, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (29, N'Axel Sebastián', N'Subía Barahona', N'1004275879', 1, 11, 32, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (30, N'Leonidas Gabriel', N'Andrade Mora', N'1050187432', 1, 11, 33, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (31, N'Deivid Hugo', N'Paredes Reascos', N'1005404726', 1, 11, 34, 4, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (32, N'Julian', N'Cabezas Osiander', N'1003928965', 1, 11, 35, 3, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (33, N'Samanta Analia', N'Cardenas Vasquez', N'1004770333', 1, 11, 36, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (34, N'Christopher Benjamín', N'López Reyes', N'1005057888', 1, 11, 37, 2, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (35, N'Matias Alexander', N'Loyo Chavarrea', N'1005058993', 1, 11, 38, 3, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (36, N'Anapaula ', N'Dillon Orozco', N'1750018440', 1, 11, 39, 3, 2, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (37, N'Wilmer Andres', N'Padilla Chiriboga', N'1004948277', 1, 11, 40, 3, 1, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (38, N'Derek Alessandro', N'Yépez Narváez', N'1004801815', 1, 11, 41, 2, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (39, N'Thais', N'Romero Terán', N'1751892595', 1, 11, 42, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (40, N'Analia Micaela', N'Benalcazar Cabrera', N'1005263106', 1, 11, 43, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (41, N'Sarah Gissell', N'Hidalgo Olivo', N'1005368517', 1, 11, 44, 3, 2, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (42, N'Angélica Martina', N'Collantes Arias ', N'1004744759', 1, 11, 45, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (43, N'Ingrid Anahí', N'Polo Chalá', N'1050420767', 1, 11, 46, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (44, N'María Victoria ', N'Moya Zurita ', N'1004859474', 1, 11, 47, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (45, N'Danna Mikaela', N'Vaca Chamorro', N'1750888297', 1, 11, 48, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (46, N'Tomás Alejandro', N'Chicaiza Dávila', N'1003832720', 1, 11, 49, 4, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (47, N'Agusta Meiling', N'Villalba Diaz', N'0503653842', 1, 11, 50, 2, 2, 1, 2)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (48, N'GIULIANA SULAY', N'ONTANEDA MALDONADO', NULL, 1, 19, 51, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (49, N'VALENTINA CAMILA', N' FLORES CORTEZ', NULL, 1, 10, 52, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (50, N'KAREN ABIGAIL', N' CARDENAS MARIÑO', NULL, 1, 5, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (51, N'KEILY AYELEN', N'HORNA CUJANO', NULL, 1, 5, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (52, N'Mercedes Antonella', N'Orbeas Mesías', NULL, 1, 6, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (53, N'RAFAELA', N'LARREA ESCANDON', NULL, 1, 19, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (54, N'Emily Daylen', N'Chuquitarco Martinez', NULL, 1, 6, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (55, N'DOMÉNICA ALEJANDRA', N'CALVOPIÑA RODRIGUEZ', NULL, 1, 19, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (56, N'ALEJANDRA SARAHI', N'CORTEZ GARCIA', NULL, 1, 5, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (57, N'HELEN DANIELA', N'VERDESOTO SANCHEZ', NULL, 1, 10, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (58, N'NATALIA VALERIA', N'OROZCO GARCIA', NULL, 1, 5, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (59, N'ALEJANDRA JIREH ', N'VEGA VIVAS', NULL, 1, 19, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (60, N'LAURA CRISTINA', N'DELGADO GUERRRERO', NULL, 1, 10, NULL, 2, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (61, N'ADRIAN ELI', N'PIN MURILLO', NULL, 1, 14, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (62, N'Kevin Israel', N'Alvares Orbes', NULL, 1, 6, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (63, N'FABIAN ALEJANDRO ', N'GUEVARA ORTIZ', NULL, 1, 5, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (64, N'JAVIER YEJEZKEL', N'MORALES FLORES', NULL, 1, 5, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (65, N'LUCA', N'BUITRON KAMASAKA', NULL, 1, 19, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (66, N'JOSTIN XAVIER', N'GUERRA TRIVIÑO', NULL, 1, 10, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (67, N'JEREMY SEBASTIAN', N'ARTIAGA BRIONES', NULL, 1, 10, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (68, N'DANIEL SEBASTIAN', N'PEÑA RUBIO', NULL, 1, 19, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (69, N'AGUSTIN AMARU', N'JARA TENESACA', NULL, 1, 19, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (70, N'EMILIO DAVID', N'SOSA RODRIGUEZ', NULL, 1, 19, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (71, N'PIERO DAVID', N'LUNA MANRIQUE', NULL, 1, 10, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (72, N'JORGE MIGUEL', N'ZALDUA SALAZAR', NULL, 1, 5, NULL, 2, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (73, N'María Emilia', N'Jimenez Guerrero', NULL, 1, 6, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (74, N'Julexy Jasmin', N'Peña Velez', NULL, 1, 14, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (75, N'Emilia Alejandra', N'Davila Durán', NULL, 1, 6, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (76, N'María José', N'Pazmiño Cherres', NULL, 1, 23, NULL, 3, 2, 9, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (77, N'Esthefanía Gabrielle', N'Ramos Sánchez', NULL, 1, 11, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (78, N'BIANKA MELIZA', N'MERINO PESANTEZ', NULL, 1, 19, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (79, N'CARMEN MARTINA', N'TOLEDO AULESTIA', NULL, 1, 19, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (80, N'FIORELLA NARCISA', N'JAIME BURGOS', NULL, 1, 13, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (81, N'CARLA JANELY', N'GAVILANEZ TIBAMLOMBO', NULL, 1, 5, NULL, 3, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (82, N'Gina Naomi', N'Nabarrete Negron', NULL, 1, 14, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (83, N'Doménica Abigail', N'Ruano Guanoluisa', N'1004554463', 1, 11, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (84, N'AMELIA ARELYS', N'HERNANDES ABRIL', NULL, 1, 13, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (85, N'MICAELA SHUYANA', N'JIMENEZ MENDOZA', NULL, 1, 19, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (86, N'NATALIA ALEJANDRA', N'ORDOÑEZ GUAMAN', NULL, 1, 5, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (87, N'STEPHANY ALEXANDRA', N'MERINO NOLIVOS', NULL, 1, 5, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (88, N'GABRIELA ANAHI', N'ARCOS VALDIVIEZO', NULL, 1, 5, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (89, N'NICOLE EILEEN', N'LOZADA ERAZO', NULL, 1, 19, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (90, N'DANA MAYERLY', N'GARCIA RODRIGUEZ', NULL, 1, 19, NULL, 4, 2, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (91, N'Antonio Jose', N'Polanco Mosquera', NULL, 1, 11, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (92, N'Aarón Marcelo', N'Huertas Bacusoy', NULL, 1, 23, NULL, 3, 1, 9, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (93, N'Juan Pablo', N'Mena Vela', NULL, 1, 6, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (94, N'Estéfano Mateo', N'Ulloa Solorzano', NULL, 1, 23, NULL, 3, 1, 10, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (95, N'JOAQUIN ALEJANDRO', N'GUAMAN SIMBA', NULL, 1, 19, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (96, N'JUAN PABLO', N'DELGADO GUERRERO', NULL, 1, 10, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (97, N'Andrés Alejandro', N'Diáz Villaroel', NULL, 1, 6, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (98, N'Cristopher David', N'Rivas Zambrano', NULL, 1, 14, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (99, N'GABRIEL JEAN', N'CANCEL BOULAY', NULL, 1, 19, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (100, N'CARLOS', N'GONZALEZ OQUENDO', NULL, 1, 19, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (101, N'ANDREAS LUCIANO', N'RIVADENEIRA TORRES', NULL, 1, 19, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (102, N'MARTIN EMILIO', N'VIZCARRA SOLANO', NULL, 1, 19, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (103, N'Sebastián Andrés', N'Iza Yanez', NULL, 1, 23, NULL, 3, 1, 10, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (104, N'Kenu', N'Puerta Wong', NULL, 1, NULL, NULL, 3, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (105, N'Bryan David', N'Arteaga Prado', NULL, 1, 14, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (106, N'SIXTO LUIS', N'FRANCO TELLO', NULL, 1, 13, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (107, N'JEREMY ANDRES', N'ZAÑAY ZAPATA', NULL, 1, 13, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (108, N'CRISTOFER JOSUE', N'MAROTO MAROTO', NULL, 1, 5, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (109, N'NICOLAS ALEJANDRO', N'FLORES ARIAS', NULL, 1, 19, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (110, N'IVAN DAVID', N'PARRA RAMOS', NULL, 1, 5, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (111, N'MISAEL ISAAC', N'MORALES CAJAS', NULL, 1, 19, NULL, 4, 1, NULL, NULL)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (112, N'Manuel', N'Juarez', N'1004550214', 1, 2, 54, 4, 1, 10, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (113, N'Bryan Josue', N'Obando Ortega', N'1004108914', 1, 11, 55, 5, 1, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (116, N'Naye', N'Cuaker', N'1005265333', 1, 1, 58, 5, 2, 1, 1)
GO
INSERT [dbo].[deportista] ([id_dep], [nombres_dep], [apellidos_dep], [cedula_dep], [activo_dep], [id_pro], [id_usu], [id_cat], [id_gen], [id_club], [id_ent]) VALUES (117, N'Jorge kevin', N'Pazos aldaz', N'1003174576', 1, 12, 2, 5, 1, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[deportista] OFF
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_cat])
REFERENCES [dbo].[categoria] ([id_cat])
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_club])
REFERENCES [dbo].[club] ([id_club])
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_ent])
REFERENCES [dbo].[entrenador] ([id_ent])
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_gen])
REFERENCES [dbo].[genero] ([id_gen])
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_pro])
REFERENCES [dbo].[provincia] ([id_pro])
GO
ALTER TABLE [dbo].[deportista]  WITH CHECK ADD FOREIGN KEY([id_usu])
REFERENCES [dbo].[usuario] ([id_usu])
GO
