// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   const { signInWithGoogle, setUser, setIsLoading } = useAuth();

   const history = useHistory();
   const location = useLocation();

   const url = location.state?.from || '/home';

   // const Login = () => {
   //     const {signInWithGoogle} = useAuth();

   const handleGoogleLogin = () => {
      signInWithGoogle()
         .then(res => {
            setIsLoading(true);
            setUser(res.user);
            // sessionStorage.setItem('email', res.user.email);
            history.push(url);
         })
         .catch(err => console.log(err))
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <div style={{ height: '80vh' }}>
         <h2 className="tours p-4">- Please Login -</h2>
         <button onClick={handleGoogleLogin} className="btn btn-warning">
            Google Sign In
         </button>
      </div>
   );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';

// const Login = () => {
//   const { signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = useAuth();

// const history= useHistory()
// const location = useLocation()

// const url= location.state?.from || "/booking/:id"

// const [email , setEmail]= useState("")
// const [password , setPassword] = useState("")

// const handleGetEmail = (e) =>{
//   setEmail(e.target.value);
// }

// const handleGetPassword = (e)=> {
//     setPassword(e.target.value);
// }

// const handleLoginWithEmailAndPassword=(e)=>{
//     e.preventDefault();

//     loginWithEmailAndPassword(email,password)
//     .then((res) => {
//       setIsLoading(true)
//         setUser(res.user);
//         history.push(url)
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       })
//       .finally(() => {
//         setIsLoading(false)
//       })
// }

//   const handleGoogleLogin = () => {
//     signInWithGoogle()
//       .then((res) =>
//         {
//           setIsLoading(true)
//           setUser(res.user)
//           history.push(url)
//         }
//           )
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setIsLoading(false)
//       })
//   };

//   return (
// <div className="text-center">
//   <h2>This is Login </h2>
//   <form onSubmit={handleLoginWithEmailAndPassword}>
//       <input type="email" onBlur={handleGetEmail} placeholder="Email"/>
//       <br/>
//       <input type="password" onBlur={handleGetPassword} placeholder="Password"/>
//       <br/>
//       <br/>
//       <input type="submit" value ="login"/>

//   </form>
//   <button onClick={handleGoogleLogin}>Google Sign In</button>
//   <p> New User ?<Link to="/register">Please register</Link ></p>

// </div>
//   );
// };

// export default Login;
