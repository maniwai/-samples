import { createPool, sql } from 'slonik'

const whereAnd = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE 
            movie_lang = 'English'
            AND age_certificate = '18'
      `)
    console.log(query)
  })
}

const whereOr = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE 
            movie_lang = 'English'
            OR movie_lang = 'Chinese'
        ORDER BY movie_lang
      `)
    console.log(query)
  })
}

const whereAndOr = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  // note: use parentheses when combining operators
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE 
            (movie_lang = 'English'
            OR movie_lang = 'Chinese')
            AND age_certificate = '12'
        ORDER BY movie_lang
      `)
    console.log(query)
  })
}

const logicalOperator = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  // note: use parentheses when combining operators
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE 
            movie_length > 100
        ORDER BY movie_length
      `)
    console.log(query)
  })
}

const logicalOperatorWithDate = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  // note: use quote to evaluate date
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE 
            release_date > '1999-12-31'
      `)
    console.log(query)
  })
}
const limit = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        ORDER BY movie_length DESC
        LIMIT 5
      `)
    console.log(query)
  })
}

const offset = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        ORDER BY movie_id DESC
        LIMIT 2 OFFSET 2
      `)
    console.log(query)
  })
}

const whereIn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM movies
        WHERE
          movie_lang IN ('Japanese', 'Chinese')
          ORDER BY movie_lang
      `)
    console.log(query)
  })
}
const whereBetween = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT * 
        FROM actors
        WHERE
          date_of_birth BETWEEN '1991-01-01' AND '1995-12-31'
          ORDER BY date_of_birth
      `)
    console.log(query)
  })
}

/**
 * LIKE (ILIKE) slow performances, but it can be improved using `indexes`
 */

// % match any character, _ match a single character
const whereLike1 = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT 'hello' LIKE '%ll_'
      `)
    console.log(query)
  })
}

const whereLike2 = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT *
        FROM actors
        WHERE first_name LIKE '%A'
        ORDER BY first_name
      `)
    console.log(query)
  })
}
// ILIKE is case Insensitive (LIKE is case sensitive)
const whereIlike = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT *
        FROM actors
        WHERE first_name ILIKE 'a%'
        ORDER BY first_name
      `)
    console.log(query)
  })
}
const isNull = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')
  pool.connect(async connection => {
    const query = await connection.query(sql`
        SELECT *
        FROM actors
        WHERE date_of_birth IS NULL
        OR first_name IS NULL
      `)
    console.log(query)
  })
}

isNull()
// 