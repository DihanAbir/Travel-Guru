import React, { useContext } from 'react';
import { userContext } from '../../App';



const SignIn = () => {

    

const [loggedInUser , setLoggedInUser] = useContext(userContext)

const handleSubmit = (e) => {
    if(loggedInUser.email && loggedInUser.password){
        console.log('submit',loggedInUser.name)
        const newUserInfo = {...loggedInUser};
        newUserInfo[e.target.name] = e.target.value;
        setLoggedInUser(newUserInfo)
    }
    e.preventDefault();

}

const handleBlur = (e) => {
    let isFormValid = true;
    if(e.target.name === 'email'){
        isFormValid =  /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === "password"){
        const isPasswordValid =  e.target.value >6 ;
        const isPasswordHasValid =  /\d{1}/.test(e.target.value);
        isFormValid = isPasswordValid && isPasswordHasValid ;
        
    }
    if(isFormValid){
        const newUserInfo = {...loggedInUser};
        newUserInfo[e.target.name] = e.target.value;
        setLoggedInUser(newUserInfo)
    }
    
}



    return (
        <div>
            <h2>SIGN IN</h2>
            <form onSubmit={handleSubmit} className="form">
                    <input type="text" required className="" onBlur={handleBlur} name="email" placeholder="Enter Your Email"/>
                    <input type="text" required onBlur={handleBlur} name="name" placeholder="Enter Your First Name "/>
                    <input type="text" required placeholder="Enter Your Last Name "/>
                    <input type="password" required onBlur={handleBlur}   name="password" placeholder="Enter Your Password"/>
                    <input type="password" required onBlur={handleBlur} name="confirm-password" placeholder="Confirm Password"/>
                    <input type="submit" value="Submit"/>
                </form>
        </div>
    );
};

export default SignIn;