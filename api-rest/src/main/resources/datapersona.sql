create table persona(
	id int auto_increment,
    nombre varchar(255),
    apellidos varchar(255),
    direccion varchar(100),
    dni integer,
    fecha date
);

insert into persona(nombre, apellidos, direccion, dni, fecha) values('Andrew', 'Ramirez', 'Calle 100', 1234569879, '2019-02-01'),
																	('Steeve', 'Guzman', 'Calle 13', 1234568736, '2018-06-06');