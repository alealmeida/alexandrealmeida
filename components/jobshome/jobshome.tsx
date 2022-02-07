import React, { useEffect, useState,useRef} from 'react';
import { useScrollData } from "scroll-data-hook";
import styles from './jobshome.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


import { ImgType } from '../images/images.interface';

import urlBuilder from '../../lib/imageUrl'
import { urlBlurred } from './../images/images';


type ProductType =  {
	data:{attributes :{
	name: string;
	}}
}
type BrandType = {
	data:{attributes :{
	name: string;
	}}
}

type HighlightsJobsProps= {
    params : {
    results: {
        resources: any[];
    };cloudn: string
}
	data: {
		key: number;
		id: number;
		attributes: {
			bg_color: string;
			slug: string;
			short_description: string;
			title: string;
			brand:BrandType;
			product:ProductType;
			image_for_home:ImgType;
		}}
  };


type HighlightsProps = {
	bg: string;
  };

  export const HighlightsHome = styled.header<HighlightsProps>`
	background-color:  ${({ bg }) => `var(${bg}-op)`};
	transition: all 0.7s ease-out;
	justify-content:flex-end;
  	:hover { 
		background-color:  ${({ bg }) => `var(${bg})`};
	}
	`;


const HighlightsJobs = ({data, params} : HighlightsJobsProps) => {



  const [image, setImage] = useState(null);

    const {id, attributes} = data
    const {results,cloudn} = params
    const {
        title,
        bg_color,
        slug,
        short_description,
        product,
        brand,
        image_for_home
    } = attributes
    const brand_name = brand.data.attributes.name
    const brand_slug = brand_name
        .toLowerCase()
        .split(" ")[0]

    const {url, name, width, height, hash} = image_for_home.data.attributes


    useEffect(() => {
      setTimeout(() => {
        setImage(url );
      }, 1000)
        }
    , [data])
  
    // results.resources.map(res=>console.log('results', res.url, url, cloudn))
    // console.log(image, url)

    return (
        <article  className={styles.card}>
            <Link href="/jobs/[slug]" as={`/jobs/${slug}`}>
                <a>
                    <HighlightsHome bg={bg_color}>  
                      {image && <Image src={urlBuilder(url)} alt={name} width={width} layout='responsive' height={height} objectFit='contain'/> }
                      {
                          !image && (<div className={styles.load} style={{
                                  backgroundImage: `url(${urlBlurred(hash, cloudn)})`
                              }}/>)
                      }
                    </HighlightsHome>
                </a>
            </Link>
            <label>{`${brand_name} • ${title}`}</label>
            <Link href="/jobs/[slug]" as={`/jobs/${slug}`}>
                <a>
                    <h3>{`${short_description}`}</h3>
                </a>
            </Link>
        </article>
    );
}


export default HighlightsJobs;