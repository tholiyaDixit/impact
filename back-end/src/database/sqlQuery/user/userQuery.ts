// let getLoginDataWithEmailQuery:string = `SELECT * FROM user WHERE email = 'testing123@gmail.com'`
export const getLoginDataWithEmailQuery = () => {
    const dbQuery: string = `SELECT * FROM user WHERE email = 'testing123@gmail.com'`;
    return dbQuery
}

