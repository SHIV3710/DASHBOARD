import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import {PiBellBold} from 'react-icons/pi'
import {FiPower} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';

export default function Navbar(props) {
  const [show,setshow] = useState(false);
  const handleprofile = () => {
    setshow(!show);
    console.log(!show)
  }
  const navigate = useNavigate();
    const signout = async () => {
        try {
          await signOut(auth);
          console.log("User signed out successfully");
          navigate("/");
        } catch (error) {
          console.error("Sign-out error:", error);
        }
      };
  return (
    <Nav>
        <div className='DashBoard'>
            Dashboard
        </div>
        <DashRight style={{ minWidth: show ? '20vw' : '15vw'}}>
            <div className="search">
             <input type="text" 
             placeholder='Search...'
             />
             <AiOutlineSearch/>
            </div>
            <PiBellBold />
            <div className="profile" onClick={(handleprofile)}>
            </div>
            {show && (
                <div className="poper" onClick={(signout)}>
                    <FiPower/>
                </div>
            )}
        </DashRight>
    </Nav>
  )
}

const Nav = styled.div`
/* padding:1rem 3rem; */
display: flex;
justify-content: space-between;
font-family: 'Montserrat', sans-serif;  
font-weight: bold;
border-radius:1rem; 
align-items: center;
`
const DashRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;


.search{
    display: flex;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-around;
    width:8rem;
}
input:focus{
    outline:none;
}
input{
    border-radius: 0.5rem;
    height:1.5rem;
    width:6rem;
    border:none;
}
svg{
    font-weight: bold;
    color: #6f6c6c;
    background-color: white;
}
.profile{
    background:url(https://i.pinimg.com/736x/d5/59/bd/d559bd5ffda47d35f8d5ce8de8d6f325.jpg);
    background-size: 100%;
    height:2rem;
    width:2rem;
    border-radius: 50%;
}
.poper{
    font-size: 1.5rem;

}

`
