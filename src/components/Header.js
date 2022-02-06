import React from 'react'
import prototypes from 'prop-types'

const Header = ({header1,header2, image}) => {
    return (
        <header>
           
            <h1>{header1}</h1>
            <h2>{header2}</h2>
            <img src={image}/> 
        </header>
      
    )
}
Header.defaultProps={
    header1:'Microsoft Corporation',
    header2:"Herzliya, Israel"
}
Header.prototypes={
    header1:prototypes.string
}

export default Header
