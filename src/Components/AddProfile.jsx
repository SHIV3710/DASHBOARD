import React, { useState } from 'react'
import styled from 'styled-components'
import {RxCross1 } from 'react-icons/rx';

export default function AddProfile({update,setprof}) {
  const [email,setemail] = useState();
  const [phone,setphone] = useState();
  const [name,setname] = useState();
  const [insta,setInsta] = useState();
  const [youtube,setYoutube] = useState();
  const [flag,setflag] = useState(true);
  const handleBasis = () =>{
    setflag(true);
  }
  const handleSocial = () =>{
    setflag(false);
  }
  const handlecross = () => {
    update(false);
  }
  const handlenext = () => {
    setflag(false);
  }
  const handleBack = () =>{
    setflag(true);
  }
  const handleDone = () =>{
      
      setprof({name,email,phone,insta,youtube});
      update(false);
  }
  return (
    <Main>

    <ADDP>
        <div className="top">
            Add New Profile
            <button onClick={(handlecross)}><RxCross1/></button>
            </div>
        <div className="middle">
            <div className="Basic" onClick={(handleBasis)}>
                Basic
               <span className={flag?"bar1":"bar2"}></span>
            </div>
            <div className="Social" onClick={(handleSocial)}>
                Social
                <span className={flag?"bar2":"bar1"}></span>
            </div>
        </div>
        <div className="lastb">     
        {flag ? (
  <Credential>
    <p>Enter Name*</p>
    <input
      type="text"
      placeholder="Eg. John Doe"
      onChange={(e) => setname(e.target.value)}
      value={name}
      required
      />
    <p>Enter Email*</p>
    <input
      type="text"
      placeholder="Eg. John@xyz.com"
      onChange={(e) => setemail(e.target.value)}
      value={email}
      required
      />
    <p>Enter Phone*</p>
    <input
      type="text"
      placeholder="Eg. 9123456789"
      onChange={(e) => setphone(e.target.value)}
      value={phone}
      required
      />
  </Credential>
) : (
  <Lasts>
    <p>Instagram Link<p class="grey">(Optional)</p></p>
    <input
      type="text"
      placeholder="Eg. ..instagram.com/username"
      onChange={(e) => setInsta(e.target.value)}
      value={insta}
      required
      />
    <p>Youtube Link<p class="grey">(Optional)</p></p>
    <input
      type="text"
      placeholder="Eg. ..youtube/username"
      onChange={(e) => setYoutube(e.target.value)}
      value={youtube}
      required
      />  
  </Lasts>
)}
          </div>    
        <div className="lastpart">
            {flag ? (
            <span className="next" onClick={(handlenext)}>
                Next </span>
                ):(
                  <div className="lst">
                <span className='back' onClick={(handleBack)}>Back</span><span onClick={handleDone}>Done</span>
            </div>
            )}
        </div>
    </ADDP>
    </Main>
  )
}
const Main = styled.div`
   position: relative; 
   box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`
const ADDP = styled.div` 
    box-shadow: 100% 100% 100% 100% rgba(0, 0, 0, 0.3);
    position: absolute;
    width:30vw;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    border-radius:1rem;
    font-family: 'Figtree', sans-serif;
    justify-content: space-between;
    
    .top{
        display: flex;
        background-color: transparent  ;
        align-items: center;
        height:10vh;
        border-radius: 1rem;
        padding-left:1rem;
        font-weight: bold;
        justify-content: space-between;


        button{
            margin-right:1rem;
            background-color: transparent;
            border: none;
            font-size:1rem;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
    .middle{
        display: flex;
        justify-content: space-around;
        font-weight:bold;
        cursor: pointer;
        .Basic{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .Social{
            display: flex;
            flex-direction: column;
            align-items: center;

        }
        .bar1{
            height:0.2rem;
            width: 10vw;
            background-color: #3F84F8;
            border-radius: 1rem;
        }
        .bar2{
            height:0.2rem;
            width:10vw;
            background-color:#D9D9D9;
            border-radius: 1rem;
        }
    }
    .lastpart{
        display:flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding:1rem;
        
        
        span{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height:2rem;
            width:3.5rem;
            background-color: #3F84F8;
            border-radius:0.5rem;
            color:white; 
        }
        
        .lst{
            display: flex;
            width:8rem;
            justify-content: space-between;
        }
        .back{
            color:black;    
            border: 1px solid black;
           background-color: transparent;
        }
    } 

    `
const Credential = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:1rem;   

    input{
        border-radius: 0.2rem;
        height:2rem;
        border: none;
        padding-left:1rem;
    }
    input:focus{
        outline:none;
    }
`

const Lasts = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:1rem;   

    input{
        border-radius: 0.2rem;
        height:2rem;
        border: none;
        padding-left:1rem;
    }
    input:focus{
        outline:none;
    }

    p{
      display: inline;
    }

    .grey{
        color:#999CA0;
    }
`