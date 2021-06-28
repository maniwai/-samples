import { Client } from 'pg'

const { createDatabase } = require('./sql')

const client = new Client({
  user: 'bootcamp',
  host: '127.0.0.1',
  database: 'bootcamp',
  password: 'bootcamp',
  port: 5432
})

const main = async () => {
  client.query(createDatabase)
}

main()
