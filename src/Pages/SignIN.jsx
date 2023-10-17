// import React, { useEffect, useState } from 'react'
// import styled from "styled-components";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import {FaDiscord } from 'react-icons/fa';
// import {FcGoogle } from 'react-icons/fc';
// import {AiFillApple} from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../Firebase';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { FirebaseApp } from 'firebase/app';
// export const SignIN = () => {
//     const navigate = useNavigate();
//     const [email,setemail]= useState();
//     const [password,setpassword] = useState();
//     let [show, setshow] = useState(false);

//     const doSignin = async () => {
//         try{
//             await createUserWithEmailAndPassword(auth, email, password);
//             setshow(true);
//          }
//          catch(error){
//             setshow(true);
//              console.log(error) 
//          }
//     };
//     onAuthStateChanged(auth, (currentUser) => {
//         if (currentUser) navigate("/DashBoard");
//     });

//     const handleGoogle = async () => {
//       try {
//         const provider = new GoogleAuthProvider();
//         const result = await signInWithPopup(auth, provider);
//         console.log(result);
//         // Handle the signed-in user here
//       } catch (error) {
//         console.error(error);
//         // Handle errors here
//       }
//     };
//     const handleApple = () => {

//     }
//     return (
//     <Container>
//     <Left>
//         <div className="l1">
//         <h3>LOGO</h3>
//         </div>
//         <div className="l2">
//         <h1>Board.</h1>
//         </div>
//         <div className="l3">
//         <ul>
//         <li><GitHubIcon/></li>
//         <li><TwitterIcon/></li>
//         <li><LinkedInIcon/></li>
//         <li><FaDiscord/></li>
//         </ul>
//         </div>
//     </Left>
//     <Right>
//         <Rightmain>
//         <h2>Sign In</h2>
//         <p>Sign in to your account</p>
//         <div className="signin">
//         <Google onClick={(handleGoogle)}>
//          <FcGoogle/>Sign in with Google
//         </Google>
//         <Apple onClick={(handleApple)}>
//          <AiFillApple/>Sign in with Applex
//         </Apple>
//         </div>
//         <Credential>
//        <p>Email address</p>
//         <input type="text" 
//         placeholder='Email'
//         onChange={(e) => setemail(e.target.value)}
//         value={email}
//         required
//         />
//          <p>Password</p>
//         <input type="password"
//             placeholder='Password'
//             onChange={(e) => setpassword(e.target.value)}
//             value={password}
//             required
//             />
//         <h1>Forget password?</h1>

//         <button className="SIGNIN" onClick={(doSignin)}>
//             Sign In
//         </button>
//        </Credential>
//          <div className="register">
//             Don't have an account? <span>Register here</span>
//          </div>
//         </Rightmain>
        
//     </Right>
//     </Container>
//   )
// }
// const Container = styled.div`
//     height: 100vh;
//     display: flex;
//     width:100vw;
// `
// const Left = styled.div`    
//     width:50vw;
//     background: linear-gradient(#4285F4,#286DE0);
//     clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     .l1{
//        height:5vh;
//        h3{
//            margin-left:3rem;
//            color:white;    
//            font-family: 'Poppins', sans-serif;
//        }
//     }
//     .l2{
//         padding:0 25%;
//         h1{
//             font-size:65px;
//             color:white;
//             font-family: 'Montserrat', sans-serif;  
//         }
//     }
//     .l3{
//         display: flex;
//         justify-content: space-evenly;
//         padding-right:30vh;
//     }
//     .l3 ul{
//         display: flex;
//         justify-content: space-around;
//         width:15rem;
//         list-style:none;
//         margin-bottom:5vh;
//     }
//     .l3 svg{
//         font-size:5vh;
//         color:white;
//     }
// `
// const Right = styled.div`
//    width:50vw;
//    padding:10vh 30vh;
//    background-color: rgb(255, 255, 255);
    
  
// `
// const Google = styled.button`
//   width:45%;
//   height:5vh;
//   border-radius: 0.5em;
//   border:none;
//   /* background-color: #e3e3e2; */
//   text-align: center;
//   align-items: center;
//   align-self:center;
//   display: flex;
//   justify-content: space-around;
//   color:#858585;
//   cursor: pointer;
//   svg{
//     font-size:3vh;
//   }
    
// `
// const Apple  = styled.button`
//   border:none;
//   width:45%;
//   height:5vh;
//   border-radius: 0.5em;
//   /* background-color: yellow; */
//   text-align: center;
//   align-items: center;
//   align-self:center;
//   display: flex;
//   justify-content: space-around;
//   color:#858585;
//   cursor: pointer;
//   svg{
//     font-size:3vh;
//   }
    
// `
// const Credential = styled.div`
//   display: flex;
//   flex-direction: column;   
//   background-color: #fafafa;
//   padding:7vh;
//   border-radius: 3vh;
//   text-align: left;

  
//   input{
//     height: 2rem;
//     border: 0;
//     border-radius: 1vh;
//     background-color: rgba(245, 245, 245, 1);
//     margin-bottom:1em;
//     padding-left:1rem;
    
    
//   }
//   input:focus{
//     outline:none;
//   }
//   p{
//     font-family: 'Lato', sans-serif;
//   }

//   h1{
//     color:rgba(52, 107, 212, 1);
//     font-size:1rem;
//     font-weight: normal;

//   }
//   .SIGNIN{
//     display: flex;
//     width:100%;
//     height:6vh;
//     justify-content: space-evenly;
//     align-items: center;
//     background-color: rgba(66, 133, 244, 1);
//     font-family: 'Montserrat', sans-serif;  
//     color: white;
//     border-radius: 1rem;
//     cursor: pointer;

//   }
  
// `
// const Rightmain = styled.div`
// width:75%;
// display: flex;
// flex-direction: column;
// h2{
//     margin: 0px;
//     font-family: 'Montserrat', sans-serif;  
//     margin-bottom:1rem;
//   }
//   p{
//     margin:0;
//     font-family: 'Lato', sans-serif;
//     margin-bottom:1rem;
//   }
//   .signin{
//     width:27vw;
//     display: flex;
//     margin-bottom:1rem;
//     justify-content: space-between;
//   }
//   .register{
//     cursor: pointer;
//     text-align: center;
//     color:grey;
//     span{
//       color:blue;
//     }
//   }
  
// `



import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaDiscord } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

export const SignIN = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  let [show, setshow] = useState(false);

  const doSignin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setshow(true);
    return;
  } catch (signInError) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setshow(true);
      return;
    } catch (signUpError) {
      console.error("Error signing up:", signUpError);
    }
    console.error("Error signing in:", signInError);
  }
};



  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) navigate('/DashBoard');
  });

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApple = () => {};

  return (
    <Container>
      <Left>
        <div className="l1">
          <h3>LOGO</h3>
        </div>
        <div className="l2">
          <h1>Board.</h1>
        </div>
        <div className="l3">
          <ul>
            <a href="https://github.com/SHIV3710">
            <li>
              <GitHubIcon/>
            </li>
            </a>
            <a href="https://twitter.com/HellBoy09543668">
            <li>
              <TwitterIcon />
            </li>
            </a>
            <a href="https://www.linkedin.com/in/shiv-kumar-448759229/">
            <li>
              <LinkedInIcon />
            </li>
            </a>
            <a href="https://discord.com/login">
            <li>
              <FaDiscord />
            </li>
            </a>
          </ul>
        </div>
      </Left>
      <Right>
        <Rightmain>
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <div className="signin">
            <Google onClick={handleGoogle}>
              <FcGoogle />
              Sign in with Google
            </Google>
            <Apple onClick={handleApple}>
              <AiFillApple />
              Sign in with Apple
            </Apple>
          </div>
          <Credential>
            <p>Email address</p>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              required
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
            <h1>Forget password?</h1>

            <button className="SIGNIN" onClick={doSignin}>
              Sign In
            </button>
          </Credential>
          <div className="register">
            Don't have an account? <span>Register here</span>
          </div>
        </Rightmain>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
`;

const Left = styled.div`
  width: 50vw;
  background: linear-gradient(#4285F4, #286DE0);
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .l1 {
    height: 5vh;
    h3 {
      margin-left: 3rem;
      color: white;
      font-family: 'Poppins', sans-serif;
    }
  }

  .l2 {
    padding: 0 25%;
    h1 {
      font-size: 65px;
      color: white;
      font-family: 'Montserrat', sans-serif;
    }
  }

  .l3 {
    display: flex;
    justify-content: space-evenly;
    padding-right: 30vh;
  }

  .l3 ul {
    display: flex;
    justify-content: space-around;
    width: 15rem;
    list-style: none;
    margin-bottom: 5vh;
  }

  .l3 svg {
    cursor: pointer;
    font-size: 5vh;
    color: white;
  }
  .l3 svg:hover{
    color:rgb(0, 0, 0);
  }
`;

const Right = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* padding: 10vh 30vh; */
  background-color: rgb(255, 255, 255);
`;

const Google = styled.button`
  width: 45%;
  height: 5vh;
  border-radius: 0.5em;
  border: none;
  text-align: center;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-around;
  color: #858585;
  cursor: pointer;
  svg {
    font-size: 3vh;
  }
`;

const Apple = styled.button`
  border: none;
  width: 45%;
  height: 5vh;
  border-radius: 0.5em;
  text-align: center;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-around;
  color: #858585;
  
  cursor: pointer;
  svg {
    font-size: 3vh;
  }
`;

const Credential = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 7vh;
  border-radius: 3vh;
  text-align: left;

  input {
    height: 2rem;
    border: 0;
    border-radius: 1vh;
    background-color: rgba(245, 245, 245, 1);
    margin-bottom: 1em;
    padding-left: 1rem;
  }
  input:focus {
    outline: none;
  }
  
  p {
    font-family: 'Lato', sans-serif;
  }

  h1 {
    color: rgba(52, 107, 212, 1);
    font-size: 1rem;
    font-weight: normal;
  }

  .SIGNIN {
    display: flex;
    width: 100%;
    height: 6vh;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(66, 133, 244, 1);
    font-family: 'Montserrat', sans-serif;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const Rightmain = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content:center;

  h2 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    font-family: 'Lato', sans-serif;
    margin-bottom: 1rem;
  }

  .signin {
    width: 27vw;
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
  }

  .register {
    cursor: pointer;
    text-align: center;
    color: grey;
    span {
      color: blue;
    }
  }
`;

export default SignIN;

