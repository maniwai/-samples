import { createPool, sql } from 'slonik'

const updateSingleColumn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        UPDATE customers
        SET email = 'a2@b.com'
        WHERE customer_id = 1
      `)
    console.log(query)
  })
}
const updateMultipleColumn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        UPDATE customers
        SET email = 'a4@b.com', age = 30
        WHERE customer_id = 1
      `)
    console.log(query)
  })
}

const updateAllColumn = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // skip WHERE
    const query = await connection.query(sql`
        UPDATE customers
        SET is_enable = 'Y'
        RETURNING *
      `)
    console.log(query)
  })
}

const deleteRow = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    const query = await connection.query(sql`
        DELETE FROM customers 
        WHERE customer_id = 6
      `)
    console.log(query)
  })
}

const upsertRowDoNothing = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Skip WHERE
    const query = await connection.query(sql`
        INSERT INTO t_tags (tag)
        VALUES ('Pen')
        ON CONFLICT (tag)
        DO
          NOTHING
      `)
    console.log(query)
  })
}

const upsertRowUpdate = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Skip WHERE
    // note: EXCLUDED refer to the column returned ON CONFLICT
    // note: || is used to concatenate
    const query = await connection.query(sql`
        INSERT INTO t_tags (tag)
        VALUES ('Pen')
        ON CONFLICT (tag)
        DO
          UPDATE SET 
            tag = EXCLUDED.tag || '1',
            update_date = NOW() 
      `)
    console.log(query)
  })
}
