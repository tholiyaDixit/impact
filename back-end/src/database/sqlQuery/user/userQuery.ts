// let getLoginDataWithEmailQuery:string = `SELECT * FROM user WHERE email = 'testing123@gmail.com'`
export const getLoginDataWithEmailQuery = (email: string) => {
    const dbQuery: string = `SELECT * FROM user WHERE email = '${email}'`;
    return dbQuery
}

export const insertQuery = (obj: any) => {
    console.log("obj ---", obj);
    let query = `INSERT INTO user 
                (${Object.keys(obj)})`
}

export const userDataInsertQuery = (body:any) => {
   return `INSERT INTO USER
            (
                        firstname,
                        email,
                        password,
                        isactive,
                        isdelete,
                        deviceid,
                        rollid,
                        createdon
            )
            VALUES
            (
                        '${body.firstName}',
                        '${body.email}',
                        '${body.password}',
                        true,
                        false,
                        ${body.deviceId},
                        2,
                        curdate()
            )`
}

