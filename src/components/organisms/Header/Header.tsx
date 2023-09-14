import React from 'react'
import './index.scss'

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        width: '85vw',
        height: '10vh',
        color: 'white',
        position: 'fixed',
        marginLeft: '15vw',
        zIndex: '1',
        top: '0%',
        left: '0%',
      }}
      className="header"
    >
      Header
    </div>
  )
}
