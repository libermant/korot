import React from 'react'

const Header = ({header1,header2, image}) => {
    return (
        <header>
            <h1>{header1}</h1>
            <h2>{header2}</h2>
            <img src={image}/> 
        </header>
      
    )
}

export default Header
