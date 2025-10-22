import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { MdCreditScore } from "react-icons/md";
import StatisticCard from './StatisticCard';

const NumberStatistic = () => {
    const statistic = [
        {
            title: "Total User",
            logo: <div className='rounded-full bg-purple-100 statisticCard w-13 h-13'>
                <FaUserAlt className='text-purple-500 text-2xl' />
            </div>,
            number: 40469,
            trend: 8.5,

        },
        {
            title: "Total Quiz",
            logo: <div className='rounded-full bg-yellow-100 statisticCard w-13 h-13'>
                <FaNoteSticky className='text-yellow-500 text-2xl' />
            </div>,
            number: 40469,
            trend: 8.5,

        },
        {
            title: "Total Attempt",
            logo: <div className='rounded-full bg-yellow-100 statisticCard w-13 h-13'>
                <span className="far fa-user-edit mr-1 text-2xl text-yellow-500"></span>
            </div>,
            number: 40469,
            trend: 0.7,

        },
        {
            title: "Average Score",
            logo: <div className='rounded-full bg-red-100 statisticCard w-13 h-13'>
                <MdCreditScore className='text-red-500 text-2xl' />
            </div>,
            number: 600,
            trend: 0.7,

        },
    ]
    return (
        <div className='flex justify-between items-center gap-6 mt-6'>
            {statistic.map((data, index) => (
                <React.Fragment key={index}>
                    <StatisticCard
                        title={data.title}
                        logo={data.logo}
                        number={data.number}
                        trend={data.trend}
                        trendPeriod={data.trend > 1 ? "Up from last month" : "Down from last month"}
                    />
                </React.Fragment>
            ))}
        </div>
    );
};

export default NumberStatistic;