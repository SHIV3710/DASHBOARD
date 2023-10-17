import React from 'react'
import {AiOutlineYoutube   } from 'react-icons/ai';
import {AiOutlineWhatsApp } from 'react-icons/ai';

import {FiInstagram } from 'react-icons/fi';

import {AiOutlineMail } from 'react-icons/ai';

import styled from 'styled-components';
export default function NewProfile({object}) {
  console.log(object)
  return (
    <Prof>
      <div className="name">
       {object.name}
      </div>
       <div className="last">
       <div className="one">
        <span className='icon'>
        <AiOutlineWhatsApp style={{color:"green"}}/>
        <div className="item">+91 {object.phone}</div>
        </span>
        <span className='icon'>
        <FiInstagram style={{color:"red"}}/>
        <div className="item">{object.insta}</div>
        </span>
       </div>
       <div className="two">
          <span className='icon'>
          <AiOutlineYoutube style={{color:"red"}}/>
          <div className="item">{object.email}</div>
          </span>
          <span className='icon'>
          <AiOutlineMail style={{color:"purple"}}/>
          <div className="item">{object.youtube}</div>
          </span>
       </div>
       </div>
    </Prof>
   
  )
}

const Prof = styled.div`
    display: flex;
    height:25vh;
    width:32.5vw;
    background-color:#ffffff;
    flex-direction: column;
    justify-content: space-around;
    border-radius:1rem;
    font-family: 'Figtree', sans-serif;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
    padding: 0 1rem;
    .name{
      display: flex;
      padding: 1rem;
      font-weight: bold;
      font-size:1.5rem;
    }
    .last{
      height:90%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .icon{
      min-width:50%;
      display: flex;
      justify-content: space-evenly;
      text-align:left;
    }
    .one{
      
      display: flex;
      align-items: center;
    }
    .two{
      display: flex;
      justify-content: space-around;
    }

    svg{
        color:green;
        font-size:1.5rem;
    }
    .item{
      font-size:1rem;
      text-decoration: underline  ;
      /* min-width:40%; */
    }
    
`

