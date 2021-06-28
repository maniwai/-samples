import { createPool, sql } from 'slonik'

const insertRow = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`
      INSERT INTO customers (first_name, last_name, email, age)
      VALUES ('Mani', 'Golara', 'a@b.com', 40)
    `)
    console.log(query)
  })
}
const insertMultipleRow = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`
      INSERT INTO customers (first_name, last_name)
      VALUES ('MANI', 'GOLARA'), ('JOHN', 'ADAMS'), ('LINDA', 'ABE');
    `)
    console.log(query)
  })
}

const returningQuery = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`
      INSERT INTO customers (first_name)
      VALUES ('MANI') RETURNING *;
    `)
    console.log(query)
  })
}
const returningId = () => {
  const pool = createPool('postgresql://postgres:postgres@localhost:5432/bootcamp_movies')

  pool.connect(async connection => {
    // Delete DB
    const query = await connection.query(sql`
      INSERT INTO customers (first_name)
      VALUES ('MANI2') RETURNING customer_id;
    `)
    console.log(query)
  })
}

returningId()
