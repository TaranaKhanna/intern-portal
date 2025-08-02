import Intern from "../models/intern.model.js";

const getInternData = async (req, res) => {
    try {
        const { referralCode } = req.params;

        const intern = await Intern.findOne({ referralCode });

        if (!intern) {
            return res
                .status(404).json({
                    success: false,
                    message: "Intern not found"
                })
        }

        return res
            .status(200).json({
                success: true,
                intern
            })

    } catch (error) {
        return res
            .status(500).json({
                success: false,
                message: "Server error"
            })
    }
}

const getLeaderBoard = async (req, res) => {
    try {
        const leaderBoard = await Intern.find({}).sort({ donations: -1})
        console.log("leaderboard: ", leaderBoard);
        

        return res
        .status(200).json({
            success: true,
            leaderBoard
        })
    } catch (error) {
        return res
        .status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export {
    getInternData,
    getLeaderBoard
}