import React, {FC} from 'react';
import {GetServerSideProps} from "next"
import {GetJobsForHome} from "../graphql/jobs.query";
import HighlightsJobs from "../components/jobshome/jobshome";
import styles from './../styles/main.module.sass'
const Home = ({data}) => {
    return ([
        <section className={styles.intro}>
            <header>
                <h1>Alexandre Almeida</h1>
                <h2>Product Designer na
                    <i>
                        <s>
                            @Avec
                        </s>
                        @Hyperlocal
                    </i>. Aqui crio novos produtos e experiências digitais que trazem valor e grande
                    impacto na vida das pesssoas.</h2>
            </header>
        </section>,
        <section>
            {data.map((job, i) => <HighlightsJobs key={i} data={job}/>)}
        </section>
    ])
}
export const getServerSideProps: GetServerSideProps = async () => {
    const response = await GetJobsForHome();
    const {data} = response;

    return {
        props: {
            data: data || null
        }
    }
}
export default Home;
