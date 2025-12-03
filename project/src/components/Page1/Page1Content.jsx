import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 items-center flex gap-10 h-[90vh] bg-amber-950'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1Content
