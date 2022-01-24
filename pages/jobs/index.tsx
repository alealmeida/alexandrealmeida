import React, {useEffect, useState} from 'react';
import {Navbar} from "../../components/navbar/navbar";
import {Topbar} from "../../components/topbar/topbar";
import {getAll} from '../../graphql/jobs.query';
import {GetAllJobsQuery, GetJobBySlugQuery} from '../../graphql/jobsc.query';
import {useQuery} from '@apollo/client';

const JobsPage = () => {
    const {loading, error, data} = useQuery(GetAllJobsQuery);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

    return (
        data.jobs && <ul>
            {
                data
                    .jobs
                    .data
                    .map((job, i) => (
                        <li key={i}>
                            <Navbar job={job}/>
                        </li>
                    ))
            }
        </ul>
    )
}

export default JobsPage;