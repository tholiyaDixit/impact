// import testService from '../../service/test.service'
// export default class testApi {
//     testService = require("../../service/test.service");
//     constructor() {
//         this.testService = new this.testService();
//     }

//     async sendEmail(req:any, res:any) {
//         const { to, subject, text } = req.body;
//         try {
//         //   const result = await this.mailSenderService.send(to, subject, text);
//             const result = await this.testService.PasswordGeneratorService()
            
//           res.status(200).json({ message: "Email sent successfully", result });
//         } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Error sending email", error });
//         }
//       }
// }