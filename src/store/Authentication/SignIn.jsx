
import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import './signin.css'

const SignIn = ({dataFromSigninChildren}) => {

    const closePopup=()=>{
        dataFromSigninChildren(false);
    }

  return (
    <>
        <div className='signIn_popup'>
            <div className='signin_popup_form'>
                <div className='signin_from_title'>
                    <h1>Sign In</h1>
                    <button onClick={()=>{closePopup()}}>
                        <HiMiniXMark/>
                    </button>
                </div>
                <form action='' method='post' className='form'>
                    <div className='signin_name'>
                        <label>E-mail: </label>
                        <input type='email' placeholder='Enter the email:'></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' placeholder='Enter the Password:'></input>
                    </div>
                    <div className="signin_frogetpassword">
                        <a href=''>Forgot Password ?</a>
                    </div>
                    <div className='signin_button'>
                        <div className='signin_submit_button'>
                            <button>Submit</button>
                        </div>
                        <div className='signin_signup_button'>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignIn