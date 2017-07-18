DROP DATABASE IF EXISTS carmen;
CREATE DATABASE carmen;

\connect carmen;
\i world.sql;