import React from 'react'
import {AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

export default function Profile({update}) {
  const handleaddProfile = () => {
        update(true);
  }
  return (
    <Prof>
            
            <div className="icon" onClick={(handleaddProfile)}>
            <AiOutlinePlus/>
            </div>
            Add Profile
    </Prof>
  ) 
}

const Prof = styled.div`
    display: flex;
    height:25vh;
    width:32.5vw;
    background-color:#ffffff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius:1rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);

    .icon{
        height:7vh;
        width:7vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #bab9b9;
        border-radius: 50%;
        cursor: pointer;
    }

    svg{
        font-size:2rem;
    }
    
`
