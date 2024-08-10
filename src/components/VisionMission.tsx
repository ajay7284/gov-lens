import React from 'react'
import { Title } from '../components/Title'
import VisionMissionCard from "../components/VisionMissionCard"

const data = [
    {title:"Vision",
    imageUrl:"/img/vision.jpg",
    subtitle:"GovLens envisions a future where decentralized organizations are robust, efficient, and community-centric, powered by a platform that delivers unparalleled governance intelligence."

},
    {title:"Mission",
        imageUrl:"/img/Mission.jpg",
        subtitle:"GovLens empowers DAOs and their communities by providing actionable insights and tools to optimize governance, foster transparency, and drive collective success."
    }

]


export default function VisionMission() {
  return (
    <div className='bg-[#D2DAD9] h-[700px] '>
       <Title title={"Vision Mission "}/>
       <div className='flex items-center justify-center gap-16 mt-16 '>
       <VisionMissionCard  title={data[0].title}           imageUrl={data[0].imageUrl}  subtitle={data[0].subtitle}    />
       <VisionMissionCard  title={data[1].title}           imageUrl={data[1].imageUrl}  subtitle={data[1].subtitle}    />
       </div>
       

    </div>
  )
}
