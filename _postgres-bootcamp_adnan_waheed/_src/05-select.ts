import { createPool, sql } from 'slonik'

const selectAll = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * FROM movies
      `)
    console.log(query)
  })
}
const selectColumn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT first_name FROM actors
      `)
    console.log(query)
  })
}
const selectMultipleColumn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT movie_name, movie_lang FROM movies
      `)
    console.log(query)
  })
}
const selectAlias = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  // note: double quote keeps case sensitive
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT first_name AS "firstName" FROM actors
      `)
    console.log(query)
  })
}

selectAlias()