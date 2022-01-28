import {GetStaticProps,GetServerSideProps,GetStaticPaths} from "next"
import {GetJobsForHome} from "../graphql/jobs.query";
import {GetAllJobsQuery} from "../graphql/jobsc.query";
// import {getJobsForHome,} from "../graphql/jobs.query";
import HighlightsJobs from "../components/jobshome/jobshome";
import styles from './../styles/main.module.sass'

import client from '../lib/apollo';
const Home = ({jobs}) => {
    return ([
        <section className={styles.intro}>
            <header>
                <h1>Alexandre Almeida</h1>
                <h2>Product Designer na
                <i><s> @Avec</s>  @Hyperlocal</i>. Aqui crio novos produtos e experiências digitais que impactam na vida
                    das pesssoas.</h2>
            </header>
        </section>,
        <section>
            {jobs.map((j, i) => <HighlightsJobs key={i} jobs={j}/>)}
            
        </section>
    ])
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const jobs = await GetJobsForHome();

    return {
        props: {
            jobs: jobs
        }
    };
  }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const jobsSlugs = await client.query({ query: GetAllJobsQuery })
// 		.then((result) => result.data.jobs.data);

// 	if (!jobsSlugs.data) return { paths: [], fallback: true };

// 	const paths = jobsSlugs.data.jobs.data.map((jobs) => ({
// 		params: { slug: jobs.id.slug },
// 	}));
// 	return { paths, fallback: false }
// }
// export const getStaticProps: GetStaticProps = async () => {
//     const jobs = await GetJobsForHome();

//     return {
//         props: {
//             jobs: jobs
//         }
//     };
// }

export default Home;