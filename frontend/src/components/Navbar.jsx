import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between top-0 py-6 px-8 bg-gray-100 border border-gray-300 fixed left-0 w-full shadow-md'>

        <span className='text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent cursor-pointer'>InternPortal</span>

        <ul className='flex gap-6'>
            <li className='cursor-pointer transition-all duration-200 hover:underline hover:decoration-red-500 hover:font-semibold underline-offset-4 text-gray-700'>Home</li>
            <li className='cursor-pointer transition-all duration-200 hover:underline hover:decoration-red-500 hover:font-semibold underline-offset-4 text-gray-700'>About</li>
            <li className='cursor-pointer transition-all duration-200 hover:underline hover:decoration-red-500 hover:font-semibold underline-offset-4 text-gray-700' onClick={() => navigate('/dashboard/tarana19')}>Dashboard</li>
            <li className='cursor-pointer transition-all duration-200 hover:underline hover:decoration-red-500 hover:font-semibold underline-offset-4 text-gray-700' onClick={() => navigate('/leaderboard')}>LeaderBoard</li>
        </ul>

        <span className='cursor-pointer text-blue-600 font-medium text-lg text-shadow-2xs text-shadow-sky-300 hover:underline underline-offset-4 hover:decoration-blue-400' onClick={() => navigate("/login")}>login</span>
    </div>
  )
}

export default Navbar