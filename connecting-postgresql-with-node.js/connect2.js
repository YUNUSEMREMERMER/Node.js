import pkg from 'pg';
const { Pool, Client } = pkg;

const credentials = {
    user: 'postgres',
  host: 'localhost',
  database: 'hrms',
  password: '12345',
  port: 5432,
  };
  
  // Connect with a connection pool.
  
  export const poolDemo = async () => {
    const pool = new Pool(credentials);
    const now = await pool.query('SELECT * from cities');
    await pool.end();
  
    return now;
  }
  
  // Connect with a client.
  
  export const clientDemo = async() => {
    const client = new Client(credentials);
    await client.connect();
    const now = await client.query('SELECT * from cities');
    await client.end();
  
    return now;
  }