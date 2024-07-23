export const getSqlDataByOneField = (tableName:string, fieldName:string ,id:any) => {
    return `SELECT * FROM ${tableName} WHERE ${fieldName} = '${id}'`
 }