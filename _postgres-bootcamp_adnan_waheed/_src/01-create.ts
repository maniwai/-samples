import { createPool, sql } from 'slonik'

const createDB = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432')

  pool.connect(async connection => {
    // Create DB
    const query = await connection.query(sql`CREATE DATABASE bootcamp_movies`)
    console.log(query)
  })
}
const deleteDB = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`DROP DATABASE bootcamp_movies`)
    console.log(query)
  })
}

const createTableActors = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE actors (
      actor_id SERIAL PRIMARY KEY,
      first_name VARCHAR (150),
      last_name VARCHAR (150) NOT NULL,
      gender CHAR(1),
      date_of_birth DATE,
      added_date DATE,
      updated_date DATE
    );`)
    console.log(query)
  })
}

const createTableDirectors = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE directors (
      director_id SERIAL PRIMARY KEY,
      first_name VARCHAR (150),
      last_name VARCHAR (150) NOT NULL,
      date_of_birth DATE,
      nationality VARCHAR (20),
      added_date DATE,
      updated_date DATE
    );`)
    console.log(query)
  })
}

const selectDirectors = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`SELECT * FROM directors;`)
    console.log(query)
  })
}

// Foreign Key
const createTableMovies = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE movies (
      movie_id SERIAL PRIMARY KEY,
      movie_name VARCHAR (100) NOT NULL,
      movie_length INT,
      movie_language VARCHAR(20),
      age_certificate VARCHAR(19),
      release_date DATE,
      director_id INT REFERENCES directors (director_id)
    );`)
    console.log(query)
  })
}
const createTableRevenues = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE movies_revenues (
      revenue_id SERIAL PRIMARY KEY,
      movie_id INT REFERENCES movies (movie_id),
      revenue_domestic NUMERIC (10,2),
      revenue_international NUMERIC (10,2)
    );`)
    console.log(query)
  })
}

// junction table
const createTableMoviesActors = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE movies_actors (
      movie_id INT REFERENCES movies (movie_id),
      actor_id INT REFERENCES actors (actor_id),
      PRIMARY KEY (movie_id, actor_id)
    );`)
    console.log(query)
  })
}

const createTableRoles = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_mydata')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`CREATE TABLE roles (
      role_id SERIAL PRIMARY KEY,
      role_name VARCHAR(100)
    )`)
    console.log(query)
  })
}
