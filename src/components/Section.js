import React from 'react'

import SectionTitle from './SectionTitle'


let section=[
    {
        title:"EXPERIENCE",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"FORMATION",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"HOBBIES",
        sect:"Explain the formation spesiicities: your degry,options,...",
        keta:""
    },

    {
        title:"PROFILE",
        sect:"Explain in few lines your professional traninig, your capabilities and your carrer objectives",
        keta:""
    },
    {
        title:"SKILL",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"EXPERIENCE",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"LANGUAGES",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    }
]

const Section = () => {
    return (        
        <div id='sect'>
            {section.map((sect,index)=>
                <SectionTitle key={index} title={sect.title} sect={sect.sect} keta={sect.keta}/>          
            )}                          
        </div>
    )
}

export default Section
