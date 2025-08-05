import React from 'react'

const Header = () => {
  return (
    <div className='my-32 flex flex-col items-center gap-8'>
      <img src="https://media.istockphoto.com/id/846843116/photo/female-ux-architect-has-discussion-with-male-design-engineer-they-work-on-mobile-application.jpg?s=612x612&w=0&k=20&c=bmKuOSVmGa4WIkHDFWSnbpgrg5EhX2t4GxT-Vk6t1U8=" alt="" className='w-full h-128'/>

      <h1 className='font-bold text-3xl bg-linear-to-r from-indigo-800 via-purple-600 to-pink-500 bg-clip-text text-transparent'>Welcome To Intern Portal.</h1>
    </div>
  )
}

export default Header