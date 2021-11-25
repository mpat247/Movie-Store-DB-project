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

      let promises = [];

      promises.push(conn.execute('DROP TABLE CUSTOMER CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE EPISODE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE FAMOUSNAMES CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE FEATURES CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE GENRE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE POINTOFSALE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE MOVIE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE PRICE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE OWN_PERIOD CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE SEASON CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE TVSHOW CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE TITLE CASCADE CONSTRAINTS').catch(e => console.log(e)));
      promises.push(conn.execute('DROP TABLE CONTRIBUTES CASCADE CONSTRAINTS').catch(e => console.log(e)));

      await Promise.all(promises);
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
      `INSERT INTO CUSTOMER
      VALUES ('MARIO','ASDF','CANADA','MAR@ASD.COM','416 990 4664');
      
      INSERT INTO CUSTOMER
      VALUES ('JAMES','ASDF','CANADA','J@ASD.COM','416 552 5967');
      
      INSERT INTO CUSTOMER
      VALUES ('KELLY','ASDF','CANADA','K@ASD.COM','905 548 6894');
      
      
      INSERT INTO TITLE 
      VALUES ('1','The Purge',2012);
      
      INSERT INTO TITLE 
      VALUES
      ('2','south park', 2002);
      
      INSERT INTO TITLE 
      VALUES
      ('3','wolf of wall street', 2017);
      
      INSERT INTO TITLE 
      VALUES
      ('4','django',2011);
      
      INSERT INTO TITLE 
      VALUES
      ('5','simpsons',1999);
      
      INSERT INTO FAMOUSNAMES
      VALUES('DICAPRIO','ACTOR');
      
      INSERT INTO FAMOUSNAMES
      VALUES ('FOXX','ACTOR');
      
      INSERT INTO CONTRIBUTES
      VALUES('1','3','DICAPRIO');
      
      INSERT INTO CONTRIBUTES
      VALUES ('2','4','FOXX');
      
      INSERT INTO CONTRIBUTES
      VALUES ('3','4','DICAPRIO');
      
      
      
      
      
      INSERT INTO TVSHOW
      VALUES
      ('2','SOUTH PARK', '2');
      
      INSERT INTO TVSHOW
      VALUES
      ('5','SIMPSONS', '4');
      
      
      INSERT INTO SEASON(TITLE_ID, SEASON_ID, SEASON_NUM) 
      VALUES ('2','1','1');
      
      INSERT INTO SEASON
      VALUES ('2','2','2');
      
      INSERT INTO SEASON
      VALUES ('5','3','1');
      
      INSERT INTO SEASON
      VALUES ('5','4','2');
      
      INSERT INTO SEASON
      VALUES ('5','5','3');
      
      INSERT INTO SEASON 
      VALUES ('5','6','4');
      
      
      INSERT INTO EPISODE (SEASON_ID,EPISODE_ID,EPISODE_NUM)
      VALUES ('1','1','1');
      
      INSERT INTO EPISODE 
      VALUES ('1','2','2');
      
      INSERT INTO EPISODE
      VALUES ('1','3','3');
      
      INSERT INTO EPISODE 
      VALUES ('2','4','1');
      
      INSERT INTO EPISODE
      VALUES ('3','5','1');
      
      INSERT INTO EPISODE
      VALUES ('4','6','1');
      
      INSERT INTO EPISODE
      VALUES ('5','7','1');
      
      INSERT INTO EPISODE
      VALUES ('6','8','1');
      
      INSERT INTO MOVIE
      VALUES ('1','THE PURGE','90');
      
      
      INSERT INTO MOVIE
      VALUES ('3','wolf of wall street','160');
      
      INSERT INTO MOVIE
      VALUES ('4','django','80');
      
      
      
      INSERT INTO GENRE
      VALUES ('1','HORROR');
      
      INSERT INTO GENRE
      VALUES ('2', 'ACTION');
      
      INSERT INTO GENRE
      VALUES ('3','COMEDY');
      
      INSERT INTO GENRE
      VALUES ('4','HALLOWEEN');
      
      INSERT INTO GENRE
      VALUES ('5','CHRISTMAS');
      
      INSERT INTO GENRE
      VALUES ('6','THRILLER')
      
      INSERT INTO GENRE 
      VALUES ('7','DRAMA')
      
      
      INSERT INTO FEATURES 
      VALUES ('1','1');
      
      INSERT INTO FEATURES
      VALUES ('2','3');
      
      INSERT INTO FEATURES
      VALUES ('6','1');
      
      INSERT INTO FEATURES
      VALUES ('7','3');
      
      INSERT INTO FEATURES
      VALUES('3','3');
      
      INSERT INTO FEATURES
      VALUES ('2','4');
      
      INSERT INTO FEATURES
      VALUES ('3','5');
      
      INSERT INTO POINTOFSALE
      VALUES ('1','MARIO','1','VISA',DATE'2021-07-01');
      
      INSERT INTO PRICE
      VALUES ('1', '5.00');
      
      INSERT INTO PRICE
      VALUES ('3', '7.00');
      
      INSERT INTO PRICE
      VALUES ('4', '4.00');
      
      INSERT INTO OWN_PERIOD
      VALUES(DATE'2021-07-01', StartDate+14);
      

      `
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

        conn = await oracledb.getConnection(config)

        let promises = []

        promises.push(conn.execute(
          `CREATE TABLE CUSTOMER(
                    User_Name VARCHAR2(25) PRIMARY KEY,
                    User_password VARCHAR2(25),
                    Region VARCHAR2(20),
                    User_Email VARCHAR2(25),
                    User_phone_number VARCHAR2(20)
                )`).catch(e => {
                  console.log("customer", e);
                }));

        promises.push(conn.execute(
          `    
                CREATE TABLE TITLE(
                    Title_id VARCHAR2(30) PRIMARY KEY,
                    TitleName VARCHAR2(30),
                    ART VARCHAR2(2048)
                )
                `).catch(e => {
                  console.log("title", e);
                }));
        promises.push(conn.execute(
          `
                CREATE TABLE MOVIE(
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id)
                                                                ON DELETE CASCADE,
                    MovieName VARCHAR2(30),
                    MovieRuntime VARCHAR2(8),
                    PRIMARY KEY (Title_id)
                )
                `).catch(e => {
                  console.log("movie", e);
                }));
        promises.push(conn.execute(
          `
                CREATE TABLE TVSHOW(
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id)
                                                                ON DELETE CASCADE,
                    TV_name VARCHAR2(30),
                    NumOfSeasons VARCHAR2(3),
                    PRIMARY KEY (Title_id)
                )
                `).catch(e => {
                  console.log("tvshow", e);
                }));
        promises.push(conn.execute(
          `
                CREATE TABLE SEASON(
                    Title_id VARCHAR2(30) REFERENCES TVSHOW(Title_id)
                                                                    ON DELETE CASCADE,
                    Season_id VARCHAR2(30) PRIMARY KEY,
                    Season_Num VARCHAR2(30)
                )
                `).catch(e => {
                  console.log("season", e);
                }));
                promises.push(conn.execute(
          `
                CREATE TABLE EPISODE(
                    Season_id VARCHAR2(30) REFERENCES SEASON(Season_id)
                                                                    ON DELETE CASCADE,
                    Episode_id VARCHAR2(30) PRIMARY KEY,
                    Episode_Num VARCHAR2(30),
                    Episode_Name VARCHAR2(30)
                )
                `).catch(e => {
                  console.log("episode", e);
                }));
    
    
    
                promises.push( conn.execute(
          `
                CREATE TABLE POINTOFSALE(
                    TransactionNO NUMBER PRIMARY KEY,
                    User_Name VARCHAR2(25) REFERENCES CUSTOMER(User_Name),
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    PayMethod VARCHAR2(10),
                    startdate DATE 
                )`).catch(e => {
                  console.log("pos", e);
                }));
                promises.push( conn.execute(
           `
                CREATE TABLE PRICE(
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    Price NUMBER,
                    
                    PRIMARY KEY(Title_id)
                )
                `).catch(e => {
                  console.log("price", e);
                }));
    
                promises.push( conn.execute(
          `
                CREATE TABLE OWN_PERIOD(
                    startdate DATE PRIMARY KEY ,
                    enddate DATE
                )
                `).catch(e => {
                  console.log("ownperiod", e);
                }));
                promises.push( conn.execute(
          `
                CREATE TABLE FAMOUSNAMES(
                    FamousName VARCHAR2(30) PRIMARY KEY,
                    FamousProfession VARCHAR2(30)
                )
                `).catch(e => {
                  console.log("fn", e); 
                }));
                promises.push( conn.execute(
          `
                CREATE TABLE CONTRIBUTES(
                    Con_ID VARCHAR(10) PRIMARY KEY,
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    FamousName VARCHAR2(30) REFERENCES FAMOUSNAMES(FamousName)
                )
                `).catch(e => {
                  console.log("contri", e);
                }));
    
    
    
    
                promises.push( conn.execute(
          `
                CREATE TABLE GENRE(
                    Category_id VARCHAR2(30) PRIMARY KEY,
                    CategoryName VARCHAR2(30)
                )
                `).catch(e => {
                  console.log("genre", e);
                }));
                promises.push( conn.execute(
          `
                CREATE TABLE FEATURES(
                    Category_id VARCHAR2(30),
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                        PRIMARY KEY(Category_id, Title_id)
                )
                `).catch(e => {
                  console.log("feat", e);
                }));
    
    
                await Promise.all(promises);

            
           

        
    
                await conn.close()
       
       
                res.send("created tables sucessfully")
       
         
          
        
      
    
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