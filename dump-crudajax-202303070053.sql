--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12
-- Dumped by pg_dump version 12.12

-- Started on 2023-03-07 00:53:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 48085)
-- Name: control_de_usuarios; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA control_de_usuarios;


ALTER SCHEMA control_de_usuarios OWNER TO postgres;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2826 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 48091)
-- Name: usuarios; Type: TABLE; Schema: control_de_usuarios; Owner: postgres
--

CREATE TABLE control_de_usuarios.usuarios (
    id integer NOT NULL,
    usuario character varying(100) NOT NULL,
    pass character varying(256) NOT NULL,
    creado_en timestamp without time zone DEFAULT now(),
    actualizado_en timestamp without time zone DEFAULT now(),
    eliminado_en timestamp without time zone
);


ALTER TABLE control_de_usuarios.usuarios OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 48094)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: control_de_usuarios; Owner: postgres
--

CREATE SEQUENCE control_de_usuarios.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE control_de_usuarios.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 2827 (class 0 OID 0)
-- Dependencies: 204
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: control_de_usuarios; Owner: postgres
--

ALTER SEQUENCE control_de_usuarios.usuarios_id_seq OWNED BY control_de_usuarios.usuarios.id;


--
-- TOC entry 2688 (class 2604 OID 48096)
-- Name: usuarios id; Type: DEFAULT; Schema: control_de_usuarios; Owner: postgres
--

ALTER TABLE ONLY control_de_usuarios.usuarios ALTER COLUMN id SET DEFAULT nextval('control_de_usuarios.usuarios_id_seq'::regclass);


--
-- TOC entry 2819 (class 0 OID 48091)
-- Dependencies: 203
-- Data for Name: usuarios; Type: TABLE DATA; Schema: control_de_usuarios; Owner: postgres
--

COPY control_de_usuarios.usuarios (id, usuario, pass, creado_en, actualizado_en, eliminado_en) FROM stdin;
1	Bluesummers	$2y$10$ydKF8opJY5sw6XEfkiQQme5eBy3Zxu1PErrAkhwvzQZcOULjp7XuC	2023-02-06 19:33:59	2023-02-06 19:48:56	\N
2	wallshapel	$2y$10$NimUaNZO.yvQ6I/3NULy.ODh.pRqrdpJ6yAkn9q7xcYOsLfz2PDhq	2023-02-06 22:31:57	2023-02-16 23:19:14	2023-02-16 23:19:14
\.


--
-- TOC entry 2828 (class 0 OID 0)
-- Dependencies: 204
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: control_de_usuarios; Owner: postgres
--

SELECT pg_catalog.setval('control_de_usuarios.usuarios_id_seq', 2, true);


--
-- TOC entry 2692 (class 2606 OID 48101)
-- Name: usuarios usuarios_pk; Type: CONSTRAINT; Schema: control_de_usuarios; Owner: postgres
--

ALTER TABLE ONLY control_de_usuarios.usuarios
    ADD CONSTRAINT usuarios_pk PRIMARY KEY (id);


-- Completed on 2023-03-07 00:53:57

--
-- PostgreSQL database dump complete
--

