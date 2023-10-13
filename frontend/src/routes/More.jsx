import React from 'react'
import Aside from '../components/Aside'
import Container from '../components/Header'
import Documentation from './ComponentsMore/Documentation'
import './More.css'

const More = () => {
  return (
    <div id='conte'>
        <div>
            <Aside />
        </div>
        <div id='main'>
            <Container/>
            <div id='docu'>
                <Documentation/>
            </div>
        </div>
    </div>
  )
}

export default More