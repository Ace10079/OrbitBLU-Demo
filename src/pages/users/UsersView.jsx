import React, { useState } from 'react'
import UserBoard from './UserBoard'
import Resume from './Resume'
import UpcomingInterview from './UpcomingInterview'
import Reports from './Reports'

const UsersView = () => {
    const[activeTab,setActiveTab]=useState(1)
     const handleTab=(id)=>{
     setActiveTab(id)
     }
     
  return (
    
    <>
    <div className='font-exo font-bold text-2xl text-[#2C3E50]'>
        <h1>Users/view</h1>
    </div>
    <div className='flex gap-6 my-6 text-grey text-base font-semibold '>
        <h1 className={`cursor-pointer ${activeTab===1 ? "text-orange border-b-[6px] pb-2 border-orange " :"text-grey"}`} onClick={()=>handleTab(1)}>User Dashboard</h1>
        <h1  className={`cursor-pointer ${activeTab===2 ? "text-orange border-b-4 pb-2 border-orange" :"text-grey"}`}onClick={()=>handleTab(2)}>Resume</h1>
        <h1  className={`cursor-pointer ${activeTab===3 ? "text-orange border-b-4 pb-2 border-orange" :"text-grey"}`}onClick={()=>handleTab(3)}>Upcoming interviews</h1>
        <h1 className={`cursor-pointer ${activeTab===4 ? "text-orange border-b-4 pb-2 border-orange" :"text-grey"}`} onClick={()=>handleTab(4)}>Reports</h1>
    </div>
      {activeTab===1 && <UserBoard/>}
      {activeTab===2 && <Resume/>}
      {activeTab===3 && <UpcomingInterview/>}
      {activeTab===4 && <Reports/>}
    </>
  )
}

export default UsersView