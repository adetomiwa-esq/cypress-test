import {  } from 'react'
import './App.css'

function App() {

  return (
    <div className='bg-purple-600 min-h-screen'>
      <form action="" className='w-[600px] p-5 mx-auto bg-white' onSubmit={(e) => {
        e.preventDefault()
        alert('form submitted')
      }}>

        <h1 className="text-3xl mb-3">Sign up</h1>
        <p className='mb-3'>Create an account</p>
        <div className="mb-4">
          <label htmlFor="" className="block">Email</label>
          <input type="text" className="border w-full h-10 rounded-md" id="email" />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">Username</label>
          <input type="text" className="border w-full h-10 rounded-md" id="username" />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block">Password</label>
          <input type="password" className="border w-full h-10 rounded-md" id="password" />
        </div>

        <button className="bg-purple-500 text-white w-full h-8 rounded-md" id='btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
