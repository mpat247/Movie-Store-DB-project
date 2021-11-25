const oracledb = require('oracledb')
const config = {
  user: 'mviannie',
  password: '01104623',
  connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))'
}
const express = require('express')
const app = express()
const port = 3010

var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/drop', async (req, res) => {
    try {
        conn = await oracledb.getConnection(config)
    
        const result = await conn.execute(
            `			DROP TABLE CUSTOMER CASCADE CONSTRAINTS;
			DROP TABLE EPISODE CASCADE CONSTRAINTS;
			DROP TABLE FAMOUSNAMES CASCADE CONSTRAINTS;
			DROP TABLE FEATURES CASCADE CONSTRAINTS;
			DROP TABLE GENRE CASCADE CONSTRAINTS;
			DROP TABLE MOVIE CASCADE CONSTRAINTS;
			DROP TABLE RENTALLOG CASCADE CONSTRAINTS;
			DROP TABLE SEASON CASCADE CONSTRAINTS;
			DROP TABLE TITLE CASCADE CONSTRAINTS;
			DROP TABLE TVSHOW CASCADE CONSTRAINTS;
			DROP TABLE CONTRIBUTES CASCADE CONSTRAINTS;
			DROP TABLE POINTOFSALE CASCADE CONSTRAINTS;`
            )
    
        console.log(result.rows[0])
        res.send("dropped sucessfully ")
      } catch (err) {
        console.log('Ouch!', err)
      } finally {
        if (conn) { // conn assignment worked, need to close
          await conn.close()
          
        }
      }
  })


app.put('/populateTables', async (req, res) => {
    try {
        conn = await oracledb.getConnection(config)
    
        const result = await conn.execute(
            
            )
    
        console.log(result.rows[0])
        res.send("populated sucessfully ")
      } catch (err) {
        console.log('Ouch!', err)
      } finally {
        if (conn) { // conn assignment worked, need to close
          await conn.close()
          
        }
      }
  })

app.put('/createTables', async (req, res) => {
    try {
        conn = await oracledb.getConnection(config)
    
        const result = await conn.execute(
            `CREATE TABLE CUSTOMER(
                User_Name VARCHAR2(25) PRIMARY KEY,
                User_password VARCHAR2(25),
                Region VARCHAR2(20),
                User_Email VARCHAR2(25),
                User_phone_number VARCHAR2(20)
            );
            
            CREATE TABLE TITLE(
                Title_id VARCHAR2(30) PRIMARY KEY,
                TitleName VARCHAR2(30)
            );
            
            CREATE TABLE MOVIE(
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id)
                                                            ON DELETE CASCADE,
                MovieName VARCHAR2(30),
                MovieRuntime VARCHAR2(8),
                PRIMARY KEY (Title_id)
            );
            CREATE TABLE TVSHOW(
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id)
                                                            ON DELETE CASCADE,
                TV_name VARCHAR2(30),
                NumOfSeasons VARCHAR2(3),
                PRIMARY KEY (Title_id)
            );
            
            CREATE TABLE SEASON(
                Title_id VARCHAR2(30) REFERENCES TVSHOW(Title_id)
                                                                ON DELETE CASCADE,
                Season_id VARCHAR2(30) PRIMARY KEY,
                Season_Num VARCHAR2(30)
            );
            
            CREATE TABLE EPISODE(
                Season_id VARCHAR2(30) REFERENCES SEASON(Season_id)
                                                                ON DELETE CASCADE,
                Episode_id VARCHAR2(30) PRIMARY KEY,
                Episode_Num VARCHAR2(30),
                Episode_Name VARCHAR2(30)
            );
            
            
            
            
            CREATE TABLE POINTOFSALE(
                TransactionNO NUMBER PRIMARY KEY,
                User_Name VARCHAR2(25) REFERENCES CUSTOMER(User_Name),
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                PayMethod VARCHAR2(10),
                startdate DATE 
            );
            
            CREATE TABLE PRICE(
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                Price NUMBER,
                
                PRIMARY KEY(Title_id)
            );
            
            CREATE TABLE OWN_PERIOD(
                Startdate DATE REFERENCES POINTOFSALE(startdate),
                enddate DATE DEFAULT Startdate + 14
            )
            
            CREATE TABLE RENTALLOG(
                User_Name VARCHAR2(30),
                Title_id VARCHAR2(30),
                StartDate VARCHAR2(10),
                EndDate VARCHAR2(10),
                PRIMARY KEY (User_Name, Title_id),
                FOREIGN KEY (User_Name, Title_id) REFERENCES POINTOFSALE(User_name ,Title_id)
            );
            
            CREATE TABLE FAMOUSNAMES(
                FamousName VARCHAR2(30) PRIMARY KEY,
                FamousProfession VARCHAR2(30)
            );
            
            CREATE TABLE CONTRIBUTES(
                Con_ID VARCHAR(10) PRIMARY KEY,
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                FamousName VARCHAR2(30) REFERENCES FAMOUSNAMES(FamousName)
            );
            
            
            
            
            
            CREATE TABLE GENRE(
                Category_id VARCHAR2(30) PRIMARY KEY,
                CategoryName VARCHAR2(30)
            );
            
            CREATE TABLE FEATURES(
                Category_id VARCHAR2(30),
                Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    PRIMARY KEY(Category_id, Title_id)
            );
            `,
            []

        )
    
        console.log(result.rows[0])
        res.send("created tables sucessfully")
      } catch (err) {
        console.log('Ouch!', err)
      } finally {
        if (conn) { // conn assignment worked, need to close
          await conn.close()
          
        }
      }
    
  })

app.get('/getTitles', async (req, res) => {

    try {
        conn = await oracledb.getConnection(config)
    
        const result = await conn.execute(
          'select * from Title',
          []
          
        )
    
        console.log(result.rows[0])
        res.send(result.rows)
      } catch (err) {
        console.log('Ouch!', err)
      } finally {
        if (conn) { // conn assignment worked, need to close
          await conn.close()
          
        }
      }

    res.send()
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}")
})