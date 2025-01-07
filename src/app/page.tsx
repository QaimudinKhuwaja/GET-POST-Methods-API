// import React from 'react'
// import Form from './components/Form'
// const page =async () => {
//   let res= await fetch('http://localhost:3000/api/hello',{
//     cache:'no-store'
//   })
//   let data= await res.json()
//   console.log(data)
//   return (
    
//     <>
//     <div> 
//       <Form />
//     </div>
// {data.map((item:{name:string,email:string},index:number)=>{
//   return(
//     <div key={index}>
//       {item.name}
//       {item.email}
//     </div>
//   )
// })}

//     </>
//   )
// }

// export default page















import React from 'react'
import Form from './components/Form'
const home =async () => {
    const res = await fetch('/api/hello',{
        cache: 'no-store'
    })
    const data = await res.json()
    console.log(data)
  return (
    <>
    <div>
      <Form />
    </div>       
 {data.map((item:{name:string,mobileno:number,email:string,password:string,rollno:string,education:string,skill:string},index:number )=>{
    return(
        <div className='py-4 px-3 text-center' key={index}>
         <h1 className='font-[400] text-xl p-1 text-blue-950'>{item.name}</h1>
         <h1 className='font-[400] text-xl p-1 text-blue-950'>{item.mobileno}</h1>
         <h1 className='font-[400] text-xl p-1 text-blue-950'> {item.email}</h1>
         <h1 className='font-[400] text-xl p-1 text-blue-950'> {item.password}</h1>
         <h1 className='font-[400] text-xl p-1 text-blue-950'> {item.rollno}</h1>
          <h1 className='font-[400] text-xl p-1 text-blue-950'> {item.education}</h1>
          <h1 className='font-[400] text-xl p-1 text-blue-950'> {item.skill}</h1>
        </div>
    )
 })}
    </>
  )
}

export default home



