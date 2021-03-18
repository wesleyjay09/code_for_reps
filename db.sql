CREATE DATABASE chat;

CREATE TABLE username(
    id SERIAL NOT NULL,
    username TEXT,
    PRIMARY KEY  (id)
);

CREATE TABLE messages(
    id SERIAL NOT NULL,
    messages text,
    FOREIGN KEY (id) REFERENCES username (id)
);


INSERT INTO username (username) VALUES ('dude1');
INSERT INTO username (username) VALUES ('dude2');
INSERT INTO username (username) VALUES ('dude3');
INSERT INTO username (username) VALUES ('dude4');
INSERT INTO username (username) VALUES ('dude5');
INSERT INTO username (username) VALUES ('dude6');
INSERT INTO username (username) VALUES ('dude7');
INSERT INTO username (username) VALUES ('dude8');
INSERT INTO username (username) VALUES ('dude9');
INSERT INTO username (username) VALUES ('dude10');
INSERT INTO username (username) VALUES ('dude11');
INSERT INTO username (username) VALUES ('dude12');
INSERT INTO username (username) VALUES ('dude13');
INSERT INTO username (username) VALUES ('dude14');
INSERT INTO username (username) VALUES ('dude15');

INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');
INSERT INTO messages (messages) VALUES ('dude1');

