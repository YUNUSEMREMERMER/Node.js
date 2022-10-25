import pkg from 'pg';
const { Pool, Client } = pkg;

//Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hrms',
  password: '12345',
  port: 5432,
})

pool.query('SELECT * from cities', (err, res) => {
  console.log(res.rows)
  pool.end()
})

//Client
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'hrms',
    password: '12345',
    port: 5432,
})
client.connect()
client.query('SELECT * from cities', (err, res) => {
  //console.log(err, res)
  console.log(res.rows)
  client.end()
})