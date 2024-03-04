const esValidEmail = (email) =>{
    return require('valid-email')(email)
}

export default {
    esValidEmail
}