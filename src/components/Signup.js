import React,{useState} from 'react'
import { signup } from '../api';
import "./Signup.css"

function Signup() {
 
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",


    });

    const {name, email, password} = values;

    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values});
        const user = {name, email,password}
        signup(user).then(data  => {
            if(data.error) {
                setValues({...values});
                
            } else {
                setValues({...values, name: '', email: '', password: '',});
            }

        })

    }

    const handleChange = name => e => {
        setValues({...values, [name]: e.target.value})
    }

    return (
        <div className="signup">
        <form onSubmit= {handleSubmit}>

       
            <div className="input">
            <input value={name} onChange={handleChange("name")} type="text" placeholder="Name" />
            </div>
            <div className="input">
            <input  value={email} onChange={handleChange("email")} type="email" placeholder="email" />
            </div>
            <div className="input">
            <input  value={password} onChange={handleChange("password")} type="password" placeholder="password"/>
            </div>
               
        <button className="submit">Submit</button>

        </form>
            
        </div>
    )
}

export default Signup
