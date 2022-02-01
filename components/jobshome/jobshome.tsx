import React, { FC } from 'react';
import styles from './jobshome.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import urlBuilder from '../../lib/imageUrl'

type ImgType =  {
	bg_color: string;
	data:{attributes :{
		name: string;
		url: string;
		width: number;
		height: number;
		}}
}

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
			image_home:ImgType;
		}}
  };


type HighlightsProps = {
	bg: string;
  };
  
const Highlights = styled.header<HighlightsProps>`
	background-color:  ${({ bg }) => `var(${bg}-op)`};
	transition: all 0.7s ease-out;
	justify-content:flex-end;
  	:hover { 
		background-color:  ${({ bg }) => `var(${bg})`};
	}
	`;




const HighlightsJobs = ({data} : HighlightsJobsProps) => {
    const {id, attributes} = data
    const {
        title,
        bg_color,
        slug,
        short_description,
        product,
        brand,
        image_home
    } = attributes

    const brand_name = brand.data.attributes.name
    const brand_slug = brand_name
        .toLowerCase()
        .split(" ")[0]

    const {url, name, width, height} = image_home.data.attributes
    return (
        <article className={styles.card}>
            <Link href="/jobs/[slug]" as={`/jobs/${slug}`}>
                <a>
                    <Highlights bg={bg_color}>
                        <Image src={urlBuilder(url)} alt={name} width={width} height={height}/>
                    </Highlights>
                </a>
            </Link>
            <label>{`${brand_name} • ${title}`}</label>
            <Link href="/jobs/[slug]" as={`/jobs/${slug}`}>
                <a>

                    <p>{`${short_description}`}</p>
                </a>
            </Link>
        </article>
    );
}


export default HighlightsJobs;