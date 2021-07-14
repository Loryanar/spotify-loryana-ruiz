CREATE DATABASE stream;

USE stream;

CREATE TABLE suser (
    id_us INT NOT NULL  PRIMARY KEY,
    nameus VARCHAR(20),
    lastn VARCHAR(20),
    email VARCHAR(30),
    pass VARCHAR(80)
   
);


CREATE TABLE sadmin (
    id_ad INT NOT NULL  PRIMARY KEY,
    namea VARCHAR(20),
    lastna VARCHAR(20),
    emaila VARCHAR(30),
    passa VARCHAR(80)
   
);
