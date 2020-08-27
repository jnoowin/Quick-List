import React from 'react';
import "./Login.css";
import clientId from "./clientId";
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

export default function Login() {
    const onSuccess = response => {
        console.log(response);
    }

    const onFailure = response => {
        console.log(response);
    }

    return(
        <div className = "loginPage">
            <div className = "loginCard">
                <h3>Login:</h3>
                <GoogleLogin 
                    clientId = {clientId} 
                    onSuccess = {onSuccess}
                    onFailure = {onFailure}
                />
                <p>or try it without logging in here</p>
            </div>
        </div>
    );
}