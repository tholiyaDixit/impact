import { dbConn } from "../database/dbConnect";
import {getLoginDataWithEmailQuery} from '../database/sqlQuery/user/userQuery'

class UserService {
    constructor() { }

    static async getLoginDataWithEmail(res:any) {
        // let query = `SELECT * FROM user WHERE email = 'testing123@gmail.com'`
        // let query = getLoginDataWithEmailQuery()
        // let result:any
        // dbConn.query(query, async function (error: any, results: any, fields: any) {
        //     if (error) throw error;
        //     console.log("data",results);
        //     result = results
        //     // res.send({ data: results })
        //   });
        // return result
        console.log("res ---",res[0].email);
        return false
        
    }
}
export default UserService