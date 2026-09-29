import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { schemaSignUp, schemaLogin } from '../Schema'
import { useNavigate } from 'react-router-dom'


const Account =()=>{
    const {register : registerSignUp , handleSubmit :handleSubmitSignUp , formState : {errors : errorsSignUp}} = useForm({resolver : yupResolver(schemaSignUp)})
    const {register : registerLogin , handleSubmit : handleSubmitLogin , formState : {errors : errorsLogin}} =useForm({resolver : yupResolver(schemaLogin)})
    const [rotate, setRotate] = useState(false);
    let navigate = useNavigate()


    const onFormSubmitSignUP = (data : any)=>{
        console.log(data)
        localStorage.setItem("newUser" , JSON.stringify(data))
        navigate(`/users/${data.email}`)
    }
    const onFormSubmitLogin = (data : any)=>{
        console.log(data)
        let userString = localStorage.getItem('newUser')
        if(userString !== null){
            let userObject = JSON.parse(userString) 
            if(userObject.email === data.email && userObject.password === data.password){
                console.log("hello old user")
                navigate(`/users/${data.email}`)
            }
            else
                alert('No user with these details has been registered.')
        }
    }
    return(
        <div className={`card ${rotate ? "is-flipped" : ""}`}>
            <div className='cardInner'>
                <div className='cardFront'>
                    <h1 style={{color: '#6c502a'}}>Sign Up</h1>
                    <form onSubmit={handleSubmitSignUp(onFormSubmitSignUP)}>
                        <input className='inputBox' type="text" placeholder='Email...' {...registerSignUp('email')}/><br/>
                        {errorsSignUp.email && (
                        <p>{errorsSignUp.email?.message}</p>
                        )}
                        <input className='inputBox' type="password" placeholder='Password...' {...registerSignUp('password')}/><br/>
                        {errorsSignUp.password && (
                        <p>{errorsSignUp.password?.message}</p>
                        )}
                        <input className='inputBox' type="password" placeholder='Confirm Password...' {...registerSignUp('confirmPassword')}/><br/>
                        {errorsSignUp.confirmPassword && (
                        <p>{errorsSignUp.confirmPassword?.message}</p>
                        )}
                        <input className='inputBox' type="submit" value='Create Account' style={{cursor: 'pointer', backgroundColor: '#82653c'}}/>
                    </form>
                    <p>Already have an account?{' '}
                        <span onClick={()=>setRotate(!rotate)}>Login</span>
                    </p>
                </div>
                <div className='cardBack'>
                    <h1 style={{color: '#6c502a'}}>Login</h1>
                    <form onSubmit={handleSubmitLogin(onFormSubmitLogin)}>
                        <input className='inputBox' type="text" placeholder='Email...' {...registerLogin('email')}/><br/>
                        {errorsLogin.email && (
                        <p>{errorsLogin.email?.message}</p>
                        )}
                        <input className='inputBox' type="password" placeholder='Password...' {...registerLogin('password')}/><br/>
                        {errorsLogin.password && (
                        <p>{errorsLogin.password?.message}</p>
                        )}
                        <input className='inputBox' type="submit" value='Login' style={{cursor: 'pointer', backgroundColor: '#82653c'}}/>
                    </form>
                    <p>Don't have an account?{' '}
                        <span onClick={()=>setRotate(!rotate)}>Sign Up</span><br/>
                    </p>
                    <p>Forget your Password?{' '}
                        <span onClick={()=>setRotate(!rotate)}>Recovery</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Account ;