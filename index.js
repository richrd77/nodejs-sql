/**
 * 1. Enable TCPIP
 * 2. Create User
 * 3. properties of instance and change to windows auth and sql auth
 */

const sql = require('mssql');


// IIFE -> Immeditely invoked Function Expression
// ()()
const sqlConfig = {
    database: 'mydb',
    server: 'RIC-PC',
    user:'code-user',
    password:'test',
    port: 54050,
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER01'
    }
};

async function CallDB(){
    const pool = await sql.connect(sqlConfig);
    // const result = await pool.request().query('INSERT INTO [Student] ([Name]) VALUES (\'Student from NodeJS App\')');
    // const result = await pool.request().query('UPDATE [Student] SET [Name]=\'Student from NodeJS App UPDATE\'');
    const result = await pool.request().query('DELETE FROM [Student]');

    console.log(result.recordset);
}

// async function CallDB(){
//     const pool = await sql.connect(sqlConfig);
//     const result = await pool.request().query(`INSERT INTO Student ([NAME]) VALUES ('rrrrrrR')`);

//     console.log(result.recordset);
// }
// async function CallDB(){
//     const pool = await sql.connect(sqlConfig);
//     const result = await pool.request().query(`DELETE FROM Student WHERE [NAME]='rrrrrrR'`);

//     console.log(result.recordset);
// }


CallDB();