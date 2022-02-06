import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SectionTitle = ({title,icon,sect,keta}) => {
    return (
        <div className='a'>
            <div className='ss'>
                <h4>
                    <FontAwesomeIcon icon={icon} /> 
                    {title }                    
                </h4>
                <div>
                    {sect}
                </div>
                <div>
                    {keta}
                </div>
            
            </div>
        </div>
    )
}

export default SectionTitle
