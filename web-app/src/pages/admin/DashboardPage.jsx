import { Typography } from 'antd';
import { Title } from 'chart.js';
import React from 'react';
import NumberStatistic from '../../components/admin/dashboard/NumberStatistic';

const DashboardPage = () => {
    return (
        <div>
            <Typography.Text strong className='!text-3xl'>
                Lingo Quiz Management Dashboard
            </Typography.Text>
            <NumberStatistic />
        </div>
    );
};

export default DashboardPage;