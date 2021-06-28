import { createPool, sql } from 'slonik'

const orderBy = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        ORDER BY 
            release_date ASC
      `)
    console.log(query)
  })
}
const orderByMultiple = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  // note: the order of ORDER column is important
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        ORDER BY 
            movie_name ASC,
            release_date DESC
      `)
    console.log(query)
  })
}
const orderByAlias = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT 
            first_name,
            last_name AS surname
        FROM actors
      `)
    console.log(query)
  })
}
// note: using ALIAS
const orderByExpression = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT 
            first_name,
            LENGTH(first_name) AS len
        FROM actors
        ORDER BY 
            len DESC
      `)
    console.log(query)
  })
}

const orderByColumnNumber = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT 
            first_name,
            last_name,
            date_of_birth
        FROM actors
        ORDER BY 
            1 ASC,
            3 DESC
      `)
    console.log(query)
  })
}

const selectNull = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT *
        FROM demo_sorting
        ORDER BY 
            num DESC NULLS FIRST
      `)
    console.log(query)
  })
}

const selectDistinct = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT
            DISTINCT movie_lang
        FROM movies
        ORDER BY 1
      `)
    console.log(query)
  })
}

const selectDistinctMultiple = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT
            DISTINCT movie_lang, director_id
        FROM movies
        ORDER BY 1
      `)
    console.log(query)
  })
}

selectDistinctMultiple()
