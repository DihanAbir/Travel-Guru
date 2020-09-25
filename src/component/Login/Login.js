import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(userContext)

    const  history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


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


    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser = { name: displayName, email}
            setLoggedInUser(signInUser);
            history.replace(from)
     
          }).catch(function(error) {    
      
            var errorCode = error.code;
            var errorMessage = error.message;
            var credential = error.credential;
          
          });
    }


    const handleFacebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser = { name: displayName, email}
            setLoggedInUser(signInUser);
            history.replace(from)
     
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    
    const handleGithubSignIn = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            const {displayName, email} = result.user;
            const signInUser = { name: displayName, email}
            setLoggedInUser(signInUser);
            history.replace(from)

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <div className="loging-form">
            <div className="login">
                <h1>Login User</h1>
                
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" required className="" onBlur={handleBlur} name="email" placeholder="Enter Your Email"/> <br></br>
                    <input type="text" required onBlur={handleBlur} name="name" placeholder="Enter Your First Name "/> <br></br>
                    <input type="text" required placeholder="Enter Your Last Name "/><br></br>
                    <input type="password" required onBlur={handleBlur}  name="password" placeholder="Enter Your Password"/> <br></br>
                    <input type="password" required onBlur={handleBlur}  name="confirm-password" placeholder="Confirm Password"/> <br></br>
                    <input type="submit" className="submit" value="Submit"/>
                </form>

               <div className="social-login">
                    <button onClick={handleGoogleSignIn}>google sign in</button>
                    <button  onClick={handleGithubSignIn}>Github</button>
                    <button  onClick={handleFacebookSignIn}>facebook</button>
               </div>
            </div>
        </div>
    );
};

export default Login;