import React from 'react';

const Signup = () => {
    return (
        <div>
            <h2>SIGN up</h2>
            <form className="form">
                    <input type="text" required className=""  name="email" placeholder="Enter Your Email"/>
                    <input type="text" required  name="name" placeholder="Enter Your First Name "/>
                    <input type="text" required placeholder="Enter Your Last Name "/>
                    <input type="password" required   name="password" placeholder="Enter Your Password"/>
                    <input type="password" required   name="confirm-password" placeholder="Confirm Password"/>
                    <input type="submit" value="Submit"/>
                </form>
        </div>
    );
};

export default Signup;