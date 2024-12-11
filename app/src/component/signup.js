import {useState} from 'react'
function Signup() {
    const initialState = {username:{required:false},email:{required:false},password:{required:false},password_again:{required:false}}
    const [errors,setErrors]=useState(initialState)

    const handleSubmit=(event)=>{
        event.preventDefault()
        const error = initialState;
        if (inputs.username==null){
            error.username.required=true
        }
        if (inputs.email==null){
            error.email.required=true
        }
        if(inputs.password==null){
            error.password.required=true
        }
        if(inputs.password_again==null){
            error.password_again.required=true
        }
        return setErrors(error)


    }


    const [inputs,setInputs]=useState({
        username:null,
        email:null,
        password:null,
        password_again:null

    })
    
    const handleInputs=(event)=>{
       setInputs({...inputs,[event.target.name]:event.target.value})
    }


    
    return(<>
    <div>
        <div id="signup-main">
                
                <form id="signup" onSubmit={handleSubmit}>
                    <h3 id="signup-head">SIGNUP</h3>
                    <div className="div-form">
                        <input className="signup-input" onChange={handleInputs} name="username" type="text" placeholder="Username.."/><br/>
                        {errors.username.required?(
                        <span className="text-danger">please enter username </span>
                        ):(null)
                        }
                    </div>
                    <div className="div-form">
                        <input className="signup-input" type="email" onChange={handleInputs} name="email"  placeholder="Email.."/><br/>
                        {errors.email.required?(
                        <span className="text-danger">please enter email</span>
                        ):null}
                    </div >
                    <div className="div-form">
                        <input className="signup-input" name="password" type="password"placeholder="Password.." onChange={handleInputs}/><br/>
                        {errors.password.required?(
                        <span className="text-danger">please enter password</span>
                        ):null}
                    </div>
                    <div className="div-form">
                        <input className="signup-input" name="password_again" type="password"placeholder="confirm password.."  onChange={handleInputs}/><br/>
                        {errors.password_again.required?(
                        <span className="text-danger">please enter password again</span>
                        ):null}
                    </div>
                    <button id="signup-button">Sign up</button>
                </form>
        </div>
    </div>
    </>)
    
}
export default Signup;