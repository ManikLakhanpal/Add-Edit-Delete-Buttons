-- CREATE TABLE--

CREATE TABLE msg (
	id SERIAL PRIMARY KEY UNIQUE,
	title VARCHAR(40),
	content VARCHAR(120),
	by VARCHAR(30),
	date VARCHAR(11)
);


-- INSERT POST --

INSERT INTO msg (title, content, by, date) 
VALUES ('1st Post', 'This is the 1st ever post to be posted here', 'Manik', '15-03-2024');
