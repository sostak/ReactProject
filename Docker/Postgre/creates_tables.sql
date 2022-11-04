CREATE SCHEMA IF NOT EXISTS project;

CREATE TABLE IF NOT EXISTS project.users
(
    name text COLLATE pg_catalog."default" NOT NULL,
    lastName text COLLATE pg_catalog."default" NOT NULL,
	country text COLLATE pg_catalog."default" NOT NULL,
    age bigint NOT NULL,
    id serial NOT NULL,
    CONSTRAINT currencies_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS project.users
    OWNER to postgres;