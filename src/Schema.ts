import * as yup from 'yup'

export const schemaSignUp = yup.object().shape({
    email : yup.string().email().required() ,
    password : yup.string().min(8).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/[0-9]+/).required() ,
    confirmPassword : yup.string().oneOf([yup.ref('password')]).required()
})

export const schemaLogin = yup.object().shape({
    email : yup.string().email().required() ,
    password : yup.string().min(8).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/[0-9]+/).required()
})