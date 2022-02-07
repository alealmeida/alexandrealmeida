import React, { useState,useRef, useMemo,useEffect,createRef } from 'react';
import { useScrollData } from "scroll-data-hook";
import {GetServerSideProps} from "next"
import {GetJobsForHome} from "../graphql/jobs.query";
import HighlightsJobs from "../components/jobshome/jobshome";
import styles from './../styles/main.module.sass';
import client from '../lib/apollo';
import { GetStaticProps, GetStaticPaths } from 'next'

import usePosition from '../lib/usePosition';

interface ref {
    scrollSectionRef: HTMLDivElement;
  }
const Home = ({data, results, cloudn}) => {
const dataLength = data.length;

    const{
        scrolling,
        time,
        speed,
        direction,
        position,
        relativeDistance,
        totalDistance
      } = useScrollData({
        onScrollStart: () => {},
        onScrollEnd: () => {}
      });


    return ( ( 
            [
        <section key={1} className={styles.intro}>
            <header>
                <h1>Alexandre Almeida</h1>
                <h2>Product Designer na <i><s>@Avec</s> @Hyperlocal</i>. Aqui crio novos produtos e experiências digitais que trazem valor e grande
                    impacto na vida das pesssoas.</h2>
            </header>
        </section>,
        data.map((job, i) => 
            <section key={2}>
                <HighlightsJobs key={job.id} data={job} params={{results,cloudn}} />
            </section>
        ),
    ]) 
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await client
        .query({query: GetJobsForHome})
        .then((result) => result.data.jobs);

    const {data} = response;

   const cloudn = process.env.CLOUDINARY_NAME
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image`, {
    headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_KEY + ':' + process.env.CLOUDINARY_SECRET).toString('base64')}`
    }
    }).then(r => r.json());

    if (data) return { props:  {data, results,cloudn}}
    else return ;
}

export default Home;
