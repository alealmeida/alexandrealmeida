import {GetStaticProps} from "next"
import {getJobsForHome} from "../graphql/jobs.query";
import HighlightsJobs from "../components/jobshome/jobshome";
import styles from './../styles/main.module.sass'

const Home = ({jobs}) => {
    return ([
        <section className={styles.intro}>
            <header>
                <h1>Alexandre Almeida</h1>
                <h2>Product Designer na
                <i><s> @Avec</s>  @Hyperlocal</i>. Lá crio novos produtos e experiências digitais que impactam na vida
                    das pesssoas.</h2>
            </header>
        </section>,
        <section>
            {jobs.map((j, i) => <HighlightsJobs key={i} jobs={j}/>)}
        </section>
    ])
}

export const getStaticProps: GetStaticProps = async () => {
    const jobs = await getJobsForHome();

    return {
        props: {
            jobs: jobs
        }
    };
}

export default Home;