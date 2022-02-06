import React from 'react'

import SectionTitle from './SectionTitle'


let section=[
    {
        title:"EXPERIENCE", 
        icon:['fab','microsoft'],                  
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"FORMATION",
        icon:['fas','book-open'],
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"HOBBIES",
        icon:['fas','crown'],
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
        icon:['fab','flower'],
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"EXPERIENCE",
        icon:['fas','circle'],
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"LANGUAGES",
        sect:"ASPNET 5 | TEAMLEADER | 2020-2021",
        keta:"Explain the job that you have done and the resiltes that you have got!",
        circle:['fas','circle']
    }
]
for(let i=0;i<8;i++){

}

const Section = () => {
    return (        
        <div id='sect'>
            {section.map((sect,index)=>
                <SectionTitle key={index} title={sect.title}icon={sect.icon} sect={sect.sect} keta={sect.keta}/>          
            )}                          
        </div>
    )
}

export default Section
