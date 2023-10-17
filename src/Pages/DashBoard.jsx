    import React, { useState, useSyncExternalStore } from 'react'
    import styled from 'styled-components'
    import {AiOutlinePieChart } from 'react-icons/ai';
    import {CgProfile } from 'react-icons/cg';
    import {LuTags } from 'react-icons/lu';
    import {FiUsers } from 'react-icons/fi';
    import {AiOutlineLike } from 'react-icons/ai';
    import {AiOutlineCamera } from 'react-icons/ai';
    import {AiOutlineSchedule} from 'react-icons/ai';
    import {IoSettingsOutline } from 'react-icons/io5';
    import { useNavigate } from 'react-router-dom';
    import { auth } from '../Firebase';
    import { signOut } from 'firebase/auth';
    import Navbar from '../Components/Navbar';
    import Card from '../Components/Card';
    import Chart from '../Components/Chart';
    import DonutChart from '../Components/DonutChart';
    import Profile from '../Components/Profile';
    import AddProfile from '../Components/AddProfile';
    import NewProf from '../Components/NewProf';
    import LeftBar from '../Components/LeftBar';

    export const DashBoard = () => {
        const navigate = useNavigate();
        const [flag,setflag] = useState(false);
        const [pro,setpro] = useState(true);
        
        const [obj,setobj] = useState();
        const flagset = (value) =>{
            setflag(value);
        }
        const flagreset = (value) =>{
            setflag(value);
        }

        const setobject = (value) => {
              setobj(value);
              setpro(false);
              console.log(obj);
        }
        
        
    return (
        <Main>
        <div className={flag ? "Container1":"Container2"}>
        <LeftBar value={1}/>
        <Right>
            <Navbar/>
            <Cardholder>
                <Card icon='camera' title='Total Revenues' amount='$2,129,430' percent='+2.5%' color='color1'/>
                <Card icon='tags' title='Total Transactions' amount='1520' percent='+1.7%'color='color2'/>
                <Card icon='like' title='Total Likes' amount='9721' percent='+1.4%'color='color3'/>
                <Card icon='users' title='Total Users' amount='9721' percent='+4.2%'color='color4'/>
            </Cardholder>
            <div className="char">
            <div className="char1">
            <h4>Activities</h4>
            <span>May-June 2021</span>

                </div>
            <Chart/>
            </div>
            <div className="bottom">
                <div className="pie">
                    <DonutChart/>
                </div>
                <div className="newProfile">
                {pro ? (<Profile update ={flagset}/>):(<NewProf object={obj}/>)}
                
                </div>
            </div>
        </Right>
        </div>
        <NewProfile>
           {flag ? (<AddProfile update={flagreset} setprof={setobject} className="newprof"/>):(<></>)}
        </NewProfile>
        </Main>
    )
    }
    const Main = styled.div`
    .Container1{
        opacity: 0.4;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem 0rem;
        h1{
            font-size:2rem;
            font-family: 'Montserrat', sans-serif; 
            color:white;
            width:100%;
        }
    }
    .Container2{
        /* position: absolute; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem 0rem;
        h1{
            font-size:2rem;
            font-family: 'Montserrat', sans-serif; 
            color:white;
            width:100%;
        }
    }
    `
    const Right = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width:70vw;
        height:89vh;
        background: #ffffff;
        
        h4{
            font-size:1rem;
            margin:0;
        }
        span{
            font-size: 0.7rem;
        }
        .char1{
            padding:1rem;
        }
        .char{
            
            display: flex;
            flex-direction: column;
            font-family:'Montserrat', sans-serif; 
            justify-content: space-between;
            min-height: 35vh;
            border-radius: 0.5rem;
            padding:0rem 0.5rem;
            background-color:  #ffffff;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            height:20vh;
            width:100%;
            position: relative; 
            
        }
        .pie{
            display: flex;
            height:25vh;
            width:32.5vw;
            background-color:#ffffff;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius:1rem;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
        }
`

        
    const Cardholder = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const NewProfile = styled.div`
        position: absolute;
        top:20%;
        left: 40%;
    `