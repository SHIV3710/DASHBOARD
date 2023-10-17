import React from 'react'
import {AiOutlinePieChart } from 'react-icons/ai';
import {CgProfile } from 'react-icons/cg';
import {LuTags } from 'react-icons/lu';
import {FiUsers } from 'react-icons/fi';
import {AiOutlineLike } from 'react-icons/ai';
import {AiOutlineCamera } from 'react-icons/ai';
import {AiOutlineSchedule} from 'react-icons/ai';
import {IoSettingsOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function LeftBar({value}) {
  return (
    <Left>
            <h1>Board.</h1>
            <div className="mid">
            <div className="middle">
            <div className="one">
            <AiOutlinePieChart/>
            <LuTags/>
            <AiOutlineSchedule  />
            <CgProfile/>
            <IoSettingsOutline/>
            </div>
            <div className="two">
            <div style={{fontWeight: value===1?"bold":"normal"}}><Link to={"/DashBoard"} >DashBoard</Link></div>
            <div style={{fontWeight: value===2?"bold":"normal"}}><Link to={"/Transactions"} >Transactions</Link></div>
            <div style={{fontWeight: value===3?"bold":"normal"}}><Link to={"/Schedules"} >Schedules</Link></div>
            <div style={{fontWeight: value===4?"bold":"normal"}}><Link to={"/Users"} >Users</Link></div>
            <div style={{fontWeight: value===5?"bold":"normal"}}><Link to={"/Settings"} >Settings</Link></div>
            </div>
        </div>
        <div className="mid2"></div>
            </div>
        <div className="last">
            <p>Help</p>
            <p>Contact Us</p>
        </div>
        </Left>
  )
}

const Left = styled.div`
        padding:0rem 0 0% 3%;   
        width:20vw;
        height:95vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: linear-gradient(#4285F4,#286DE0);
        border-radius: 2vh;
        
        div{
            font-size:1rem;
            font-family: 'Montserrat', sans-serif; 
            font-weight: normal;
            color:white;
        }

        .board{
            padding:2rem;
            font-size:2rem;
            color:white;
            font-family: 'Montserrat', sans-serif; 
            font-weight:bold;
        }
        .middle{
            display: flex;
            /* justify-content: center; */
            height:50%;
            width:20vw;  
            margin-bottom:40%;

        }
        .mid{
            height:70vh;
            display: flex;
            flex-direction: column;
        }
        .mid2{
            height:20vh;
        }
        .one{
            color:white;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width:10%;
        }
        .two {
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            text-align: left;
        }
        .two a{
            text-decoration: none;
            color:white;
        }
        .last{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height:15vh;
            p{
                font-size:0.8rem;
                margin:0;
            }
        }
    `

