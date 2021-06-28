import { Pool, Client } from 'pg'

const bootcamp = new Pool({
  user: 'bootcamp',
  host: '127.0.0.1',
  database: 'bootcamp',
  password: 'bootcamp',
  port: 5432,
})

const main = async () => {
  bootcamp
    .query({
      text: 'INSERT INTO customers(customer_id, first_name, last_name) VALUES($1, $2, $3)',
      values: [6, 'test', 'test@gmail.com'],
    })
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))
}
main()
