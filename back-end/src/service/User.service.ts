import { dbConn } from "../database/dbConnect";
import { getLoginDataWithEmailQuery } from '../database/sqlQuery/user/userQuery'

class UserService {
    constructor() { }

    static async getLoginDataWithEmail(email?: any, res?: any) {
        let query = `SELECT * FROM user WHERE email = '${email}'`
        console.log("query ---", query);

        let result: any
        try {
           return dbConn.query(query, async function (error: any, results: any, fields: any) {
                console.log("results ---", results[0]);
                if (error) throw error;
                // result = await results[0]
                !!res && res.send({ data: results[0] })
                // return results
            });
            
        } catch (error) {
            console.log("error ---", error);

        }
        console.log("datassss ---", result);


        return await result

    }
}
export default UserService