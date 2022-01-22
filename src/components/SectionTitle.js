import React from 'react'

const SectionTitle = ({title,sect,keta}) => {
    return (
        <div className='a'>
            <div className='ss'>
                <h4>
                    {title}
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
