-- scripts to be executed by superuser after creating the database
------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";

CREATE TABLE IF NOT EXISTS customer(
    "id"            serial PRIMARY KEY, 
    "name"          VARCHAR(32), 
    "website"       VARCHAR(64), 
    "established"   INT);

INSERT INTO customer(name, website, established) VALUES('Apple', 'www.apple.com', 1976);
INSERT INTO customer(name, website, established) VALUES('Google', 'www.google.com', 1998);
INSERT INTO customer(name, website, established) VALUES('Tesla', 'www.tesla.com', 2003);



