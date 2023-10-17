import React from 'react'
import styled from 'styled-components'
import {AiOutlineCamera } from 'react-icons/ai';
import {LuTags } from 'react-icons/lu';
import {AiOutlineLike } from 'react-icons/ai';
import {FiUsers } from 'react-icons/fi';

export default function Card(props) {
    const iconMap = {
        camera: <AiOutlineCamera />,
        tags: <LuTags />,
        like: <AiOutlineLike />,
        users: <FiUsers />,
      };
      
  return (
    <Cards>
     <div className={props.color}>
        {iconMap[props.icon]}
     </div>
     <div className="two">
        <div className="title">
          {props.title}
        </div>
        <div className="amount">
            <span className="big">
                {props.amount}
            </span>
            <span className='small'>
                {props.percent}
            </span>
        </div>
     </div>
    </Cards>
  )
}
const Cards = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height:4rem;
    width:12rem;
    background-color: #fdfeff;
    padding:1rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
    .color1{
        display: flex;
        font-size:1rem;
        height:2rem;
        width:2rem;
        border-radius:50%; 
        align-items: center;
        justify-content: center;
        background-color:  #7FCD93;
    }
    .color2{
        display: flex;
        font-size:1rem;
        height:2rem;
        width:2rem;
        border-radius:1rem; 
        align-items: center;
        justify-content: center;
        background-color:  #DEBF85;
    }
    .color3{
        display: flex;
        font-size:1rem;
        height:2rem;
        width:2rem;
        border-radius:1rem; 
        align-items: center;
        justify-content: center;
        background-color: #ECA4A4;
    }
    .color4{
        display: flex;
        font-size:1rem;
        height:2rem;
        width:2rem;
        border-radius:1rem; 
        align-items: center;
        justify-content: center;
        background-color: #A9B0E5;
    }
    .two{
        font-size:0.8rem;
        height:3rem;
    }
    .big{
        font-weight: bold;
        font-size:1rem;
    }
    .small{
        background-color:rgb(60, 201, 82,0.3);
        font-size:0.6rem;
        height:1rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.4rem;
        color:rgb(60, 201, 82)
    }
    .amount{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`