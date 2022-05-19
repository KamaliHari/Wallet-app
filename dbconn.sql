CREATE DATABASE Walletapp;
USE Walletapp;


CREATE TABLE Customer_info(

id int(50) not null  ,
firstname varchar(30) NOT NULL,
lastname varchar(30)NOT NULL,
address varchar(30)NOT NULL
);
show tables;
insert into Customer_info(id,firstname,lastname,address) values('3022','Kamali','H','xyz');
select * from Customer_info;



