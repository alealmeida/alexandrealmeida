import React, {FC} from 'react';
import {GetServerSideProps} from "next"
import {GetJobsForHome} from "../graphql/jobs.query";
import HighlightsJobs from "../components/jobshome/jobshome";
import styles from './../styles/main.module.sass';
import client from '../lib/apollo';
const Home = ({data}) => {
    return ([
        <section key={1} className={styles.intro}>
            <header>
                <h1>Alexandre Almeida</h1>
                <h2>Product Designer na <i><s>@Avec</s> @Hyperlocal</i>. Aqui crio novos produtos e experiências digitais que trazem valor e grande
                    impacto na vida das pesssoas.</h2>
            </header>
        </section>,
        <section key={2} >
            {data.map((job, i) => <HighlightsJobs key={job.id} data={job}/>)}
        </section>
    ])
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await client
        .query({query: GetJobsForHome})
        .then((result) => result.data.jobs);

    const {data} = response;
    if (data) return { props: { data: data ||null} };
    else return ;
}

export default Home;
