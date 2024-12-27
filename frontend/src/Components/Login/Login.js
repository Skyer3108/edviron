import { StoreContext } from '../../Context/StoreContext'
import './login.css'
import { useContext, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


const Login = ({handleToken}) => {


    console.log("function",handleToken)

    const [currentState, setCurrentState] = useState('Login')

    const navigate=useNavigate()
const {url}=useContext(StoreContext)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',

    })

    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }))

    }

        const onLogin=async(event)=>{

            event.preventDefault()

            let newUrl=url

            if(currentState==='Login'){

                newUrl+='/api/user/login'


            }else{
      newUrl+='/api/user/register'
            }

            const response=await axios.post(newUrl,data)
            console.log(response)

            if(response.data.status==200){

                const token = response.data.token
                handleToken(token);

                alert('Login Sucessfully')
                navigate('/transactions');



            }else{
                alert(response.data.message)
            }

        }

    return (
        <div className="login">
            <div className="login-container">

               
                   

                    <div className='login-form'>


                        <p className='heading'>{currentState==='Login'?"Login":"Register"}</p>
                        <form onSubmit={onLogin}  className='login-input'>

                            {
                                currentState === 'Login' ? <></> : <div>
                                    <label>Full name</label>
                                    <input onChange={onChangeHandler} name='name' value={data.name} placeholder='Full name' />
                                </div>
                            }



                            <div>
                                <label>EmailAddress</label>
                                <input onChange={onChangeHandler} name='email' value={data.email} placeholder='Email Address' />
                            </div>
                            <div>

                                <label for='password'>Password</label>
                                <input onChange={onChangeHandler} type='password' name='password' value={data.password} id='password' placeholder='Password' />
                            </div>

                            <button type='submit' className='btn'>{currentState === 'Sign Up' ? "Register" : "Login"}</button>

                            {
                                currentState === 'Login' ? <p className='mes'>Create a new account ? <span onClick={() => setCurrentState('Sign Up')}>Click Here</span></p>
                                    : <p className='mes'>Already have a account ? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
                            }



                        </form>


                    </div>


                </div>
         
        </div>
    )
}

export default Login