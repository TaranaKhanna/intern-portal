import { useEffect, useState } from "react";
import { getLeaderboard } from "../api/internApi";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        if (data.success) {
          setLeaderboard(data.leaderBoard);
        } else {
          setError("Could not fetch leaderboard");
        }
      } catch (err) {
        setError(err.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);
  return (

    <div>
      <span
        className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent cursor-pointer absolute top-6 left-6"
        onClick={() => navigate("/")}
      >
        InternPortal
      </span>
    
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏆 Leaderboard</h1>

      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-2xl">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-purple-300 text-gray-800 font-semibold">
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Donations</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((intern, index) => (
                <tr
                  key={intern._id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  }`}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{intern.name}</td>
                  <td className="py-2 px-4">₹{intern.donations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default Leaderboard;
