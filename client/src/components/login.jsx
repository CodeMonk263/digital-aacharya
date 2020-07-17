
import React from "react";
import "../css/login.css";
import { ToastProvider, useToasts } from 'react-toast-notifications'
import {Link} from "react-router-dom"

const TutorButton = () => {
  const { addToast } = useToasts()
 
  const onSubmit = async value => {
   
      addToast('Saved Successfully', { appearance: 'success' })
      
  }
 
  return <div>
      <Link to="/TutorLogin" className="tutor">I am a Tutor</Link>
   </div>
}
const StudentButton = () => {
  const { addToast } = useToasts()
 
  const onSubmit = async value => {
   
      addToast('Saved Successfully', { appearance: 'success' })
    
  }
 
  return<div> <Link to="/StudentLogin" className="student">I am a Student</Link></div>
}
class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  render() {
    return (
          <div data-layer="097a4e4f-f9a2-4cfc-a180-fbf34cac993e" className="login"> 
        <div data-layer="7b7489e6-d2f4-4276-a04d-3d717f5ee76a" className="header"></div>
        <div data-layer="41c1d55d-084a-4281-8d0e-562e88d0ade1" className="loginBox"></div>
        <div  > <ToastProvider>
              <TutorButton/>
          </ToastProvider></div>
        <div >
        <ToastProvider>
          <StudentButton/>
          </ToastProvider></div>
        <div data-layer="68ffe7aa-e32c-4b43-aa63-d4f8e43aad56" className="login2d0827ef">Login</div>
        <div data-layer="32a32d8a-64de-46a5-a6ea-2ea9650b1791" className="digiAcharya"></div>
</div>

    );
  }
}


export default  (Login);
          