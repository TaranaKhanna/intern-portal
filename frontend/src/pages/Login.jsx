import { useState } from "react"
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/leaderboard');
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-b from-indigo-300 to-purple-100">
      <div
  className="absolute top-6 left-6"
  onClick={() => navigate('/')}
>
  <span className='text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent cursor-pointer'>
    InternPortal
  </span>
</div>


    <div className="bg-gray-200 flex flex-col px-12 items-center bg-gradient-to-b from-blue-500 to-purple-100 rounded-lg py-12">
      {
        isLoggedIn ? (<h1 className="text-3xl font-semibold text-gray-900 mb-8">LogIn</h1>) : (<h1 className="text-3xl font-semibold text-gray-900 mb-8">Create new Account</h1>)
      }

      <form onSubmit={handleFormSubmit}>
        {
          !isLoggedIn && (
            <div className="text-gray-600 flex items-center gap-2 border border-gray-400 bg-gray-200 text-sm px-2 mb-6 rounded-full py-2 w-64">
              <BsFillPersonFill className="text-lg" />
              <input type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-gray-700"
                required />
            </div> 
          )
        }

        <div className="text-gray-600 flex items-center gap-2 border border-gray-400 bg-gray-200 text-sm px-2 mb-6 rounded-full py-2 w-64">
          <MdEmail className="text-lg" />
          <input type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-700"
            required />
        </div>

        <div className="text-gray-600 flex items-center gap-2 border border-gray-400 bg-gray-200 text-sm px-2 mb-6 rounded-full py-2 w-64">
          <RiLockPasswordFill className="text-lg" />
          <input type="text"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="text-gray-700"
            required />
        </div>

        <div className="text-white flex items-center justify-center font-semibold cursor-pointer bg-gray-700 text-sm px-2 mb-6 rounded-full py-2 w-64 mt-8">
        {
          isLoggedIn ? 
          (<button>Get Started</button>) : (<button>Sign up</button>)
        }
        </div>
        {
          !isLoggedIn ? (<p className="text-gray-900">already have account? login <span className="text-blue-700 cursor-pointer"
        onClick={() => setIsLoggedIn(true)}>here</span></p>)
        :
        
        <div>
        <p className="flex justify-center cursor-pointer text-blue-900 mb-2">Forget Password</p>
        <p className="text-gray-900">don't have account? Sign Up <span className="text-blue-700 cursor-pointer"
        onClick={() => setIsLoggedIn(false)}>here</span></p>
        </div>
        
        }
        
      </form>

    </div>
    </div>
  )
}

export default Login;