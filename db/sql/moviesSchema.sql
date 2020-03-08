

DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE faves (id INT(11), title VARCHAR(140), poster_path VARCHAR(200), vote_average DECIMAL(3, 1), release_date DATE )

INSERT INTO faves (id, title, poster_path, vote_average, release_date) VALUES(481084, "The Addams Family", "/q1epO0eO8DWu8Vo8tPfvVlzW48T.jpg", 6.2, "2019-10-10")


--  {
--       "popularity": 51.013,
--       "vote_count": 619,
--       "video": false,
--       "poster_path": "/q1epO0eO8DWu8Vo8tPfvVlzW48T.jpg",
--       "id": 481084,
--       "adult": false,
--       "backdrop_path": "/ur4NTeFGZmQ6Hz5uEkAMgPI3WRg.jpg",
--       "original_language": "en",
--       "original_title": "The Addams Family",
--       "genre_ids": [
--         16,
--         35,
--         14,
--         10751
--       ],
--       "title": "The Addams Family",
--       "vote_average": 6.2,
--       "overview": "The Addams family's lives begin to unravel when they face-off against a treacherous, greedy crafty reality-TV host while also preparing for their extended family to arrive for a major celebration.",
--       "release_date": "2019-10-10"
--     },