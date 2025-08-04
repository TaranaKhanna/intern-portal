
import { useEffect, useState } from "react";
import { getInternByReferralCode } from "../api/internApi";
import { useParams, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [intern, setIntern] = useState(null);
  const [error, setError] = useState(null);

  const { referralCode } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchIntern = async () => {
      try {
        const data = await getInternByReferralCode(referralCode);
        console.log(data);
        setIntern(data.intern);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      }
    };

    fetchIntern();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!intern) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        Loading intern details...
      </div>
    );
  }

  return (
    <div >
      <span
        className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent cursor-pointer absolute top-6 left-6 z-10"
        onClick={() => navigate("/")}
      >
        InternPortal
      </span>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-200 to-indigo-100 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Intern Dashboard</h1>

        <div className="bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-md">
          <p className="text-lg mb-4"><span className="font-semibold">Name:</span> {intern.name}</p>
          <p className="text-lg mb-4"><span className="font-semibold">Referral Code:</span> {intern.referralCode}</p>
          <p className="text-lg"><span className="font-semibold">Total Donations:</span> ₹{intern.donations}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
