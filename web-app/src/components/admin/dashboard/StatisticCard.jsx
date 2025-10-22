import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const StatisticCard = ({ title, logo, number, trend, trendPeriod }) => {
    const [trendDesc, setTrendDesc] = useState();

    useEffect(() => {
        setTrendDesc(
            <div className='flex gap-2 items-center text-sm'>
                {trend > 1 ? (
                    <span className='text-green-600 flex items-center gap-1'>
                        <FaArrowTrendUp />
                        <span>{Math.round(trend * 10) / 10} %</span>
                    </span>
                ) : (
                    <span className='text-red-600 flex items-center gap-1'>
                        <FaArrowTrendDown />
                        <span>{Math.round((1 / trend) * 10) / 10} %</span>
                    </span>
                )}
                <span className='text-black'>{trendPeriod}</span>
            </div>
        );
    }, [trend, trendPeriod]);


    return (

        <Card className='rounded-xl shadow-md border w-full'>

            <div className='flex justify-between p-3 items-start'>
                <div className='flex flex-col'>

                    <p className='text-gray-500 font-semibold'>{title}</p>

                    <span className='font-bold text-2xl'>{number.toLocaleString()}</span>
                </div>
                <div className=''>
                    {logo}
                </div>
            </div>

            <div className='p-3 pt-0'>
                {trendDesc}
            </div>
        </Card>
    );
};

export default StatisticCard;