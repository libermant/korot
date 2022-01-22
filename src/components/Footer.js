import React from 'react'


const Footer = ({names,tel,email}) => {
    return (
        <footer>
            <div>{names}</div>
            <div>{tel}</div>
            <div id='flex'>{email}</div>
        </footer>
    )
}

export default Footer
