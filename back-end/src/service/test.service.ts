 class TestService {
    constructor(dbConn:any) { 
        
    }
    // static 
    static PasswordGeneratorService() {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        return password;
    }

}
export default TestService
// module.exports = new TestService()