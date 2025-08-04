import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LeaderBoard from './pages/LeaderBoard'
import Home from './pages/Home'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard/:referralCode" element={<Dashboard />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
      </Routes>
    </Router>
  )
}

export default App