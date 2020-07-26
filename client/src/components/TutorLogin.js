import React from "react";
import "../css/login.css";
import { ToastProvider, useToasts } from 'react-toast-notifications'
import {Link} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';

const SigninButton = () => {
  const { addToast } = useToasts()
 
  const onSubmit = async value => {
   
      addToast('Saved Successfully', { appearance: 'success' })
    
  }
 
  return <div> <Link to="/Tutor/" className="tutor">Sign In</Link></div>
}
const SignUpButton = () => {
  const { addToast } = useToasts()
 
  const onSubmit = async value => {
   
      addToast('Saved Successfully', { appearance: 'success' })
    
  }
 
  return<div> <a href="./TutorLogin"> 
    <button onClick={onSubmit}  className="student">Sign Up</button> 
  </a></div>
}
class TutorLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
  };

  onFailure = (error) => {
      alert(error);
  }

  onSubmit=()=>{
    const { addToast } = useToasts()
    addToast('Saved Successfully', { appearance: 'success' })
  }
  render() {
    return (
          <div data-layer="097a4e4f-f9a2-4cfc-a180-fbf34cac993e" className="login">        <div data-layer="fb6bd486-1cbf-4078-bac2-4094a594d6c5" className="background"></div>
        <div data-layer="7b7489e6-d2f4-4276-a04d-3d717f5ee76a" className="header"></div>
        <div data-layer="41c1d55d-084a-4281-8d0e-562e88d0ade1" className="loginBox"></div>
        <div> 
          <ToastProvider>
            <SigninButton/>
          </ToastProvider>
        </div>
        <div>
        {/* <ToastProvider>
          <SignUpButton/>
          </ToastProvider> */}
          <GoogleLogin
            className="google-button"
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
          />
        </div>
        <div data-layer="68ffe7aa-e32c-4b43-aa63-d4f8e43aad56" className="login2d0827ef">Tutor Login</div>
        <div data-layer="32a32d8a-64de-46a5-a6ea-2ea9650b1791" className="digiAcharya"></div>
</div>

    );
  }
}


export default  (TutorLogin);
          