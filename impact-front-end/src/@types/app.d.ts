namespace App {
    namespace User {
        interface UserSignUp {
            firstName: string;
            email: string;
            password: string;
            conformPassword: string;
        }
        interface UserFormValidation {
            firstName: string;
            email: string;
            password: string;
            conformPassword: string;
        }
    }
}