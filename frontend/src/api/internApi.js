import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getLeaderboard = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/intern/leaderboard`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Unknown error occurred" };
  }
};

export const getInternByReferralCode = async (referralCode) => {
  try {
    const res = await axios.get(`${baseUrl}/api/intern/${referralCode}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Referral lookup failed" };
  }
};