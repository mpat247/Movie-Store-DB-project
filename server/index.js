const oracledb = require('oracledb')
oracledb.autoCommit = true;
const config = {
    user: 'mviannie',
    password: '01104623',
    connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CON' +
            'NECT_DATA=(SID=orcl)))'
}
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
var jsonParser = bodyParser.json()
const port = 3010

var cors = require('cors');
app.use(cors());

app.post('/Queery', jsonParser, async(req, res) => {
    try {
        conn = await oracledb.getConnection(config)
        console.log(req.body)
        const result = await conn.execute(req.body.value)

        console.log(result.rows[0])
        res.send(result.rows)
    } catch (err) {
      res.status(400).send(err)
    }

})

app.get('/getTables', async(req, res) => {
    try {
        conn = await oracledb.getConnection(config)

        const result = await conn.execute(`SELECT 
      table_name
  FROM
      user_tables`, [])

        console.log(result.rows[0])
        res.send(result.rows)
    } catch (err) {
        console.log('Ouch!', err)
    }

    res.send()
})

app.post('/drop', async(req, res) => {

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
    }

})

app.put('/populateTables', async(req, res) => {
    try {
        conn = await oracledb.getConnection(config)
        let promises = [];
        promises.push(conn.execute(`INSERT INTO CUSTOMER VALUES ('MARIO','ASDF','CANADA','MAR@ASD.COM','416 990 4664')`).catch(e => {
            console.log("1", e);
        }));

        promises.push(conn.execute(`INSERT INTO CUSTOMER
        VALUES ('JAMES','ASDF','CANADA','J@ASD.COM','416 552 5967')`).catch(e => {
            console.log("2", e);
        }));

        promises.push(conn.execute(`INSERT INTO CUSTOMER
        VALUES ('KELLY','ASDF','CANADA','K@ASD.COM','905 548 6894')`).catch(e => {
            console.log("3", e);
        }));

        promises.push(conn.execute(`INSERT INTO TITLE 
        VALUES ('1','The Purge',2012, 'https://flxt.tmsimg.com/assets/p9622770_p_v10_ab.jpg')`).catch(e => {
            console.log("4", e);
        }));

        promises.push(conn.execute(`INSERT INTO TITLE 
        VALUES
        ('2','south park', 2002,'https://m.media-amazon.com/images/M/MV5BOTg5MjczMzQtZTA0Ny00OWQ1LThjNTMtYzQzYTliNzJhNjlmXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg')`).catch(e => {
            console.log("5", e);
        }));

        promises.push(conn.execute(`INSERT INTO TITLE 
        VALUES
        ('3','wolf of wall street', 2017,'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg')`).catch(e => {
            console.log("6", e);
        }));

        promises.push(conn.execute(`INSERT INTO TITLE 
        VALUES
        ('4','django',2011,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lEjHjW-akcoeM6U_1Rl0VUCZ9MPUgMRzjg&usqp=CAU')`).catch(e => {
            console.log("7", e);
        }));

        promises.push(conn.execute(`INSERT INTO TITLE 
        VALUES
        ('5','simpsons',1999,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_6701TZFOpAvLmwZvNeR4Pnl0iuM81j_rg&usqp=CAU')`).catch(e => {
            console.log("8", e);
        }));

        promises.push(conn.execute(`INSERT INTO FAMOUSNAMES
        VALUES('DICAPRIO','ACTOR')`).catch(e => {
            console.log("9", e);
        }));

        promises.push(conn.execute(`INSERT INTO FAMOUSNAMES
        VALUES ('FOXX','ACTOR')`).catch(e => {
            console.log("10", e);
        }));

        promises.push(conn.execute(`INSERT INTO CONTRIBUTES
        VALUES('1','3','DICAPRIO')`).catch(e => {
            console.log("11", e);
        }));

        promises.push(conn.execute(`INSERT INTO CONTRIBUTES
        VALUES ('2','4','FOXX')`).catch(e => {
            console.log("12", e);
        }));

        promises.push(conn.execute(`INSERT INTO CONTRIBUTES
        VALUES ('3','4','DICAPRIO')`).catch(e => {
            console.log("13", e);
        }));

        promises.push(conn.execute(`INSERT INTO TVSHOW
        VALUES
        ('2','SOUTH PARK', '2')`).catch(e => {
            console.log("14", e);
        }));

        promises.push(conn.execute(`INSERT INTO TVSHOW
        VALUES
        ('5','SIMPSONS', '4')`).catch(e => {
            console.log("15", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON(TITLE_ID, SEASON_ID, SEASON_NUM) 
        VALUES ('2','1','1')`).catch(e => {
            console.log("16", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON
        VALUES ('2','2','2')`).catch(e => {
            console.log("17", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON
        VALUES ('5','3','1')`).catch(e => {
            console.log("18", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON
        VALUES ('5','4','2')`).catch(e => {
            console.log("19", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON
        VALUES ('5','5','3')`).catch(e => {
            console.log("20", e);
        }));

        promises.push(conn.execute(`INSERT INTO SEASON 
        VALUES ('5','6','4')`).catch(e => {
            console.log("21", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE (SEASON_ID,EPISODE_ID,EPISODE_NUM)
        VALUES ('1','1','1')`).catch(e => {
            console.log("22", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE 
        VALUES ('1','2','2')`).catch(e => {
            console.log("23", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE
        VALUES ('1','3','3')`).catch(e => {
            console.log("24", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE 
        VALUES ('2','4','1')`).catch(e => {
            console.log("25", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE
        VALUES ('3','5','1')`).catch(e => {
            console.log("26", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE
        VALUES ('4','6','1')`).catch(e => {
            console.log("27", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE
        VALUES ('5','7','1')`).catch(e => {
            console.log("28", e);
        }));

        promises.push(conn.execute(`INSERT INTO EPISODE
        VALUES ('6','8','1')`).catch(e => {
            console.log("29", e);
        }));

        promises.push(conn.execute(`INSERT INTO MOVIE
        VALUES ('1','THE PURGE','90')`).catch(e => {
            console.log("30", e);
        }));

        promises.push(conn.execute(`INSERT INTO MOVIE
        VALUES ('3','wolf of wall street','160')`).catch(e => {
            console.log("31", e);
        }));

        promises.push(conn.execute(`INSERT INTO MOVIE
        VALUES ('4','django','80')`).catch(e => {
            console.log("32", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('1','HORROR')`).catch(e => {
            console.log("33", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('2', 'ACTION')`).catch(e => {
            console.log("34", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('3','COMEDY')`).catch(e => {
            console.log("35", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('4','HALLOWEEN')`).catch(e => {
            console.log("36", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('5','CHRISTMAS')`).catch(e => {
            console.log("37", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE
        VALUES ('6','THRILLER')`).catch(e => {
            console.log("38", e);
        }));

        promises.push(conn.execute(`INSERT INTO GENRE 
        VALUES ('7','DRAMA')`).catch(e => {
            console.log("39", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES 
        VALUES ('1','1')`).catch(e => {
            console.log("40", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES ('2','3')`).catch(e => {
            console.log("41", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES ('6','1')`).catch(e => {
            console.log("42", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES ('7','3')`).catch(e => {
            console.log("43", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES('3','3')`).catch(e => {
            console.log("44", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES ('2','4')`).catch(e => {
            console.log("45", e);
        }));

        promises.push(conn.execute(`INSERT INTO FEATURES
        VALUES ('3','5')`).catch(e => {
            console.log("46", e);
        }));

        promises.push(conn.execute(`INSERT INTO POINTOFSALE
        VALUES ('1','MARIO','1','VISA',DATE'2021-07-01')`).catch(e => {
            console.log("47", e);
        }));

        promises.push(conn.execute(`INSERT INTO PRICE
        VALUES ('1', '5.00')`).catch(e => {
            console.log("48", e);
        }));

        promises.push(conn.execute(`INSERT INTO PRICE
        VALUES ('3', '7.00')`).catch(e => {
            console.log("49", e);
        }));

        promises.push(conn.execute(`INSERT INTO PRICE
        VALUES ('4', '4.00')`).catch(e => {
            console.log("50", e);
        }));

        promises.push(conn.execute(`INSERT INTO OWN_PERIOD
        VALUES(DATE '2021-07-01', DATE '2021-07-15')`).catch(e => {
            console.log("51", e);
        }));

        await Promise.all(promises);

        res.send("populated sucessfully ")
    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) { // conn assignment worked, need to close
            await conn.close()

        }
    }
})

app.put('/createTables', async(req, res) => {

    let promises = []
    try {
        conn = await oracledb.getConnection(config)
        promises.push(conn.execute(`CREATE TABLE CUSTOMER(
                    User_Name VARCHAR2(25) PRIMARY KEY,
                    User_password VARCHAR2(25),
                    Region VARCHAR2(20),
                    User_Email VARCHAR2(25),
                    User_phone_number VARCHAR2(20)
                )`).catch(e => {
            console.log("customer", e);
        }));

        promises.push(conn.execute(`    
                CREATE TABLE TITLE(
                    Title_id VARCHAR2(30) PRIMARY KEY,
                    TitleName VARCHAR2(30),
                    Titleyear NUMBER,
                    BoxArt VARCHAR2(1024)
                )
                `).catch(e => {
            console.log("title", e);
        }));
        promises.push(conn.execute(`
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
        promises.push(conn.execute(`
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
        promises.push(conn.execute(`
                CREATE TABLE SEASON(
                    Title_id VARCHAR2(30) REFERENCES TVSHOW(Title_id)
                                                                    ON DELETE CASCADE,
                    Season_id VARCHAR2(30) PRIMARY KEY,
                    Season_Num VARCHAR2(30)
                )
                `).catch(e => {
            console.log("season", e);
        }));
        promises.push(conn.execute(`
                CREATE TABLE EPISODE(
                    Season_id VARCHAR2(30) REFERENCES SEASON(Season_id)
                                                                    ON DELETE CASCADE,
                    Episode_id VARCHAR2(30) PRIMARY KEY,
                    Episode_Num VARCHAR2(30)
                )
                `).catch(e => {
            console.log("episode", e);
        }));

        promises.push(conn.execute(`
                CREATE TABLE POINTOFSALE(
                    TransactionNO NUMBER PRIMARY KEY,
                    User_Name VARCHAR2(25) REFERENCES CUSTOMER(User_Name),
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    PayMethod VARCHAR2(10),
                    startdate DATE 
                )`).catch(e => {
            console.log("pos", e);
        }));
        promises.push(conn.execute(`
                CREATE TABLE PRICE(
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    Price NUMBER,
                    
                    PRIMARY KEY(Title_id)
                )
                `).catch(e => {
            console.log("price", e);
        }));

        promises.push(conn.execute(`
                CREATE TABLE OWN_PERIOD(
                    startdate DATE PRIMARY KEY ,
                    enddate DATE
                )
                `).catch(e => {
            console.log("ownperiod", e);
        }));
        promises.push(conn.execute(`
                CREATE TABLE FAMOUSNAMES(
                    FamousName VARCHAR2(30) PRIMARY KEY,
                    FamousProfession VARCHAR2(30)
                )
                `).catch(e => {
            console.log("fn", e);
        }));
        promises.push(conn.execute(`
                CREATE TABLE CONTRIBUTES(
                    Con_ID VARCHAR(10) PRIMARY KEY,
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                    FamousName VARCHAR2(30) REFERENCES FAMOUSNAMES(FamousName)
                )
                `).catch(e => {
            console.log("contri", e);
        }));

        promises.push(conn.execute(`
                CREATE TABLE GENRE(
                    Category_id VARCHAR2(30) PRIMARY KEY,
                    CategoryName VARCHAR2(30)
                )
                `).catch(e => {
            console.log("genre", e);
        }));
        promises.push(conn.execute(`
                CREATE TABLE FEATURES(
                    Category_id VARCHAR2(30),
                    Title_id VARCHAR2(30) REFERENCES TITLE(Title_id),
                        PRIMARY KEY(Category_id, Title_id)
                )
                `).catch(e => {
            console.log("feat", e);
        }));

        await Promise.all(promises);
        res.send("Creation sucess");
    } catch (err) {
        console.log('its here!', err)
    }

})

app.get('/getTitles', async(req, res) => {
    let conn;
    try {
        conn = await oracledb.getConnection(config)

        const result = await conn.execute('select * from Title', [])
        conn.close();
        console.log(result.rows[0])
        res.send(result.rows)
    } catch (err) {
        if (conn) {
            conn.close();

        }
        console.log('error in get titles! make sure you are in vpn', err)
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})