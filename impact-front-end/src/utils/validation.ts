
export interface IValidation {
    message: string,
    validation: boolean
}

export const nameValidation = (name: string, fieldName: string) => {
    const regex = /^[a-zA-Z]+$/;
    // const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    // const regex = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
    let valid = true;
    let msg = ""
    if (name == "") {
        msg = `${fieldName} is required`
        valid = false;
    }
    if (!regex.test(name)) {
        msg = `enter valid ${fieldName}`
        valid = false;
    }

    return { message: msg, validation: valid }
}

export const emailValidation = (email: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let valid = true;
    let msg = ""
    if (email == "") {
        msg = `Email is required`
        valid = false;
    }
    if (!regex.test(email)) {
        msg = `enter valid Email`
        valid = false;
    }
    return { message: msg, validation: valid }
}

export const passwordValidation = (password: string) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let valid = true;
    let msg = ""
    if (password == "") {
        msg = `Password is required`
        valid = false;
    }
    if (!regex.test(password)) {
        msg = `enter valid Password`
        valid = false;
    }
    return { message: msg, validation: valid }
}

export const phoneNumberValidation = (phoneNumber: any) => {
    let regex = /^[0-9]+[0-9]+$/
    let valid = true;
    let msg = ""
    if (phoneNumber == null) {
        msg = `Phone Number is required`
        valid = false;
    }
    if (!regex.test(phoneNumber)) {
        msg = `enter valid Phone Number`
        valid = false;
    }
    return { message: msg, validation: valid }
}


export const conformPasswordValidation = (conformPassword: string, password: string) => {
    let valid = false;
    let msg = ""
    console.log("conformPassword ---",conformPassword);
    console.log("password ---",password);
    
    if (conformPassword == '') {
        msg = `conform password is required`
        valid = false;
    } else if (conformPassword !== password) {
        msg = `password and conformPassword are not mach`
        valid = false;
    } else {
        valid = conformPassword == password
    }


    return { message: msg, validation: valid }
}
