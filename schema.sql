create table users (
    id serial primary key,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    email varchar(50) not null,
    phonenumber varchar(12) not null,
    location varchar(50) not null
);

create table events (
    id serial primary key,
    eventname varchar(50) not null,
    eventlocation varchar(150) not null,
    eventstarttime varchar(8) not null,
    eventdiscription varchar(255) not null,
    byob varchar(3) not null
)