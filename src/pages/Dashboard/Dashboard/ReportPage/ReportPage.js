import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportCard from './ReportCard';

const ReportPage = () => {
    const { data: userReport, refetch } = useQuery({
        queryKey: ["report"],
        queryFn: async () => {
            const res = await fetch(" https://resale-furniture-server-abu-saleh-rony.vercel.app/report");
            const data = await res.json();
            return data;
        },
    });
    //   console.log(userReport)

    return (
        <div className='w-[800px] mx-auto'>
            {userReport?.map(rep => <ReportCard report={rep} />)}
        </div>
    );
};

export default ReportPage;
