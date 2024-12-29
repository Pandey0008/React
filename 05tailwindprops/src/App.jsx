import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myobj={
    username:"Shivam",
    email:"mailatshivm@gmail.com"
  }
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4'>Hello ! Shivansh Pandey</h1>
     <Card someobj={myobj} />
     <Card username='Shivam' />
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md: rounded-full mx-auto" src="https://imgs.search.brave.com/-5IUyer7ZdGDbdJBVwRiILsPyRsdwqnLg_JoDAZEBEs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rc3Rh/dGljLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9maWxlcy9kNTdi/MjQxMDZjMzRjN2U1/MGVmM2Q5ODQyM2I5/NGRkYWYzNWFkMmRh/NzNhOWI5ZDRkMTJm/NTJkYmI5ZGQ0YzA4/YzI5NTdmNjI1NWFi/ODY5MGQ1ZWYwYjMy/Y2ZmODI4N2UwOTU3/N2QwNWU0NzlkMjYz/ZTg3MjE2MGM0Yzll/ODM2Mw.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      Shivansh translates to "a part of Lord Shiva" or "a fragment of divine energy."

The name signifies qualities associated with Lord Shiva, such as strength, tranquility, wisdom, and spirituality. It conveys a connection to divinity and embodies a sense of purity and righteousness.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Shivansh Pandey
      </div>
      <div className="text-slate-700 dark:text-slate-500">
       Web Developer
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default App
