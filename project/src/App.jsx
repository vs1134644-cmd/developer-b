// import React from 'react'
// import Page2 from './components/page2/page2'
// import Page1 from './components/Page1/Page1'



// const App = () => {
//   return (
//     <div>

//       <Page1/>
//       <Page2/>



//     </div>
//   )
// }

// export default App


import React from 'react'


const App = () => {
  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log('Form Submitted')
  
}
  return (
    <div className='h-screen bg-black text-white'>
      <form
      onSubmit={(e) =>{
        SubmitHandler(e)
      }} 
      className='flex  gap-4 flex-col justify-between items-start  p-10'>
        
        <input type="text"
          placeholder='Enter Notes Heading'
          className=' font-medium  w-full   px-5 py-2  border-2 rounded outline-none '
          />
        <textarea
         type="text"
          placeholder='write Details'
          className='  font-medium px-5 py-2 w-full h-30 flex items-start flex-row border-2 rounded outline-none'
          />
        <button className='  font-medium bg-white w-full outline-none text-black px-5 py-2 rounded'>Add Now</button>
          
      </form>
      <div className='flex flex-wrap p-10'>
        <div className='h-32 w-32 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App
