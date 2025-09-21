import React, { useEffect, useState } from "react";
import { Button, Progress } from "antd";
import { useSelector } from "react-redux";
import { IoIosExit } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const TimeFrame = ({ editMode, setEditMode }) => {
    const [timeRemaining, setTimeRemaining] = useState(7200);
    const [timeLimitFormat, setTimeLimitFormat] = useState("120:00");
    const { userAnswers, questions } = useSelector((state) => state.questions);
    const numOfQues = 100
    useEffect(() => {

        const countDownInterval = setInterval(() => {
            const minutes = (timeRemaining / 60).toFixed();
            const seconds = timeRemaining % 60;
            setTimeRemaining(timeRemaining - 1);
            setTimeLimitFormat(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`)
            if (timeRemaining === "00:00") {
                clearInterval(countDownInterval);
                alert("Time out!!!!!!!!");
            }
        }, 1000);
        return () => clearInterval(countDownInterval);
    }, [timeRemaining]);
    return (
        <div className="w-full h-30 px-14 py-4 bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">

            <div className="flex justify-between items-center ">

                <div className="flex gap-3 items-center">
                    <p className="bg-white rounded-lg w-8 h-8 flex justify-center items-center text-lg">
                        📚
                    </p>
                    <p className="text-white font-semibold text-lg">
                        English Proficiency Test
                    </p>
                </div>

                <Button className={`!text-xl ! !border-0 !text-white !p-5 ${editMode ? "!bg-red-500 hover:!bg-red-600" : "!bg-amber-500 hover:!bg-amber-600"}`}
                    onClick={() => setEditMode(!editMode)}>
                    {editMode ? <p className="flex items-center gap-2"><IoIosExit className="text-2xl" /> Exit Edit</p> : <p className="flex items-center gap-2"><FaEdit /> Edit Mode</p>}
                </Button>
                <div className="flex gap-4 items-center">
                    <p className="text-white text-base ">Time: <span className="font-bold">{timeLimitFormat}</span></p>
                    <Button className="!bg-red-600 !h-8 !w-24 !text-white !border-none !px-4 !text-sm hover:!bg-red-700">
                        Exit Test
                    </Button>
                </div>
            </div>


            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <p className="text-gray-200 text-[14px] mb-1 font-semibold">Overall Progress</p>
                    <p className="text-white text-[14px] font-semibold">{userAnswers.length}% Complete</p>
                </div>

                <Progress
                    percent={userAnswers.length}
                    showInfo={false}
                    strokeColor="#ffffff33"
                    trailColor="#ffffff22"
                />

            </div>
        </div>
    );
};

export default TimeFrame;
