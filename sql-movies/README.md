# Databases Homework!

### Create a database

We're just going to use a starter sql file to create our database and tables, and get some seed data set up.

- In this lab directory, there is a `movie_db` directory. In there there's a `seed.sql` file. In your terminal, **MAKE SURE** you are in the `HW_U02_D02_SQL_APIs/sql-movies` directory (maybe by running `pwd`??) and then run:

  ```bash
  psql -f seed.sql
  ```

- After that you should see this output:

  ```bash
  DROP DATABASE
  CREATE DATABASE
  You are now connected to database "intro_movies_db" as user [your username].
  CREATE TABLE
  CREATE TABLE
  INSERT 0 16
  ```

### Check to make sure everything is connected!

Follow these steps:

1. Type `psql` in the terminal. You should see the alternate command prompt.
2. Type `\connect intro_movies_db`. You should see the prompt change to `intro_movies_db=#`
3. Type `SELECT * FROM movies;`

You should see this result:

```bash

 id |          title          | release_year |          director           | awards 
----+-------------------------+--------------+-----------------------------+--------
  1 | Birdman                 |         2014 | Alejandro Gonzáles Iñárritu | 
  2 | Guardians of the Galaxy |         2014 | James Gunn                  | 
  3 | Mad Max: Fury Road      |         2015 | George Miller               | 
  4 | Ex Machina              |         2015 | Alex Garland                | 
  5 | Arrival                 |         2016 | Denis Villeneuve            | 
  6 | 2001: A Space Odyssey   |         1968 | Stanley Kubrick             | 
  7 | District 9              |         2009 | Neill Blomkamp              | 
  8 | The Godfather           |         1972 | Francis Ford Coppola        | 
  9 | Moonlight               |         2016 | Barry Jenkins               | 
 10 | Rogue One               |         2016 | Gareth Edwards              | 
 11 | The Red Shoes           |         1948 | Michael Powell              | 
 12 | Taxi Driver             |         1976 | Martin Scorsese             | 
 13 | The Shining             |         1980 | Stanley Kubrick             | 
 14 | Pulp Fiction            |         1994 | Quentin Tarantino           | 
 15 | Fargo                   |         1996 | The Coen Brothers           | 
 16 | There Will Be Blood     |         2007 | Paul Thomas Anderson        | 
```


### Add some movies!

Refer to the w3school sql cheatsheet section on [insert into](http://www.w3schools.com/Sql/sql_insert.asp). Add the `title`, `release_year`, and `director` of the last 5 movies you've seen that aren't already in the movies table. 

Put your SQL here: 

```sql

# SQL goes here!

```


### Update some movies!

As you can see, there is a column for `awards` in the `movies` table that hasn't been filled in yet. Refer to the w3school sql section on [update](http://www.w3schools.com/Sql/sql_update.asp) to add an award for five movies in the movies table.

Put your SQL here: 

```sql

# SQL goes here!

```

### Delete some movies!

Refer to the w3school sql section on [delete](http://www.w3schools.com/Sql/sql_delete.asp) and delete 5 movies from the list you don't like. Like them all? Add 5 shit movies and then delete those suckers 😝.

Put your SQl here: 

```sql

# SQL goes here!

```