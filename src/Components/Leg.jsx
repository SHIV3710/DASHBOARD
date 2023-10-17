import React from 'react'
import styled from 'styled-components'
export default function Leg () {
  return (
    <Legs>
        <div className="one">
            <div className="icon"></div>
            <div className="name">Basic Tees</div>
            <div className="per">55%</div>
        </div>
        <div className="two">
            <div className="icon"></div>
            <div className="name">Custom Short Pants</div>
            <div className="per">31%</div>
        </div>
        <div className="three">
            <div className="icon"></div>
            <div className="name">Super Hoodies</div>
            <div className="per">14%</div>
        </div>
    </Legs>
  )
}

const Legs = styled.div`
    
`
