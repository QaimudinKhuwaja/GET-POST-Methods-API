// "use client"
// import React from 'react'
// import {useState} from 'react'
//  import {useRouter} from 'next/navigation'
// const Form = () => {
//     const router = useRouter()
//     const [name, setName] =useState("")
//     const [email, setEmail] =useState("")
//     const handleSubmit= async (e:any)=>{
//     e.preventDefault();
//         setName('')
//         setEmail('')
        
//         const res = await fetch('/api/hello',{
//             method:'POST',
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({name , email})        
//         })
//         router.refresh();
//         await res.json()

//         }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
// <div>
// <input
//     type="text"
//     value={name}
//     onChange={(e)=> {setName(e.target.value)}}
//     placeholder='enter list item'
//     className='border-blue-950 shadow-black shadow-lg w-[400px] h-[80px]'
//     />
//     <input
//     type="text"
//     value={email}
//     onChange={(e)=> {setEmail(e.target.value)}}
//     placeholder='enter list item'
//     className='border-blue-950 shadow-black shadow-lg w-[400px] h-[80px]'
//     />
//     <button type='submit'>submit</button>
// </div>
//     </form>
 
//     </>
//   )
// }

// export default Form





"use client"
import { useState } from'react'
import React from 'react'
import {useRouter} from 'next/navigation'

const Form = () => {
    let [name, setName] = useState('')
    let [mobileno, setMobileno] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [rollno, setRollno] = useState('')
    let [education, setEducation] = useState('')
    let [skill, setSkill] = useState('')
    const router = useRouter()

    const handleSubmit =async (e:any)=>{
         e.preventDefault()
         setName('')
          setMobileno('')
          setEmail('')
          setPassword('')
          setRollno('')
          setEducation('')
          setSkill('')

          const res = await fetch('/api/hello',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name,mobileno,email,password,rollno,education,skill})
          })
           router.refresh()
           await res.json()
    }

  return (
   <>
   <div className='text-center'>
    <h1 className='p-2 font-[600] text-xl underline'>Fill The Form</h1>
   <form onSubmit={handleSubmit}>
   <div>
   <input
    type="text"
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    placeholder='Enter your name'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
    <br />
    <br />
    <input
    type="number"
    value={mobileno}
    onChange={(e)=>{setMobileno(e.target.value)}}
    placeholder='Enter your phone'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
    <br />
    <br />
    <input
    type="email"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    placeholder='Enter your email'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
    <br />
    <br />
    <input
    type="password"
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    placeholder='Enter your password'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
     <br />
    <br />
    <input
    type="number"
    value={rollno}
    onChange={(e)=>{setRollno(e.target.value)}}
    placeholder='Enter your rollNo'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
     <br />
    <br />
    <input
    type="text"
    value={education}
    onChange={(e)=>{setEducation(e.target.value)}}
    placeholder='Enter your education'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
     <br />
    <br />
    <input
    type="text"
    value={skill}
    onChange={(e)=>{setSkill(e.target.value)}}
    placeholder='Enter your skill'
    className='border border-gray-400 rounded w-[200px] h-[40px] shadow-black '
    />
     <br />
 <button className='mt-5 text-black bg-red-500 hover:bg-red-600  px-6 py-2 font-[500] rounded ' type='submit'>Submit</button>
   </div>
   </form>
   </div>
   </>
  )
}

export default Form