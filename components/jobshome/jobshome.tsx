import React from "react";
import styles from './jobshome.module.sass'
import { ColorType } from './../../types/color.interface';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

// import {HighlightsProps, styleTheme } from './jobshome.interface';
import urlBuilder from '../../lib/imageUrl'

export type HighlightsProps = {
	color?: ColorType;
	bg?: ColorType;
  };


const Highlights = styled.header<HighlightsProps>
	`
	background-color:  ${({ bg }) => (bg ? `var(${bg}-op)` : 'transparent')};
	transition: all 0.7s ease-out;
  	:hover { 
		background-color:  ${({ bg }) => (bg ? `var(${bg}-op-hover)` : 'transparent')};
	}
	`;


const HighlightsJobs = ({jobs}) => {
	const j = jobs.attributes;
	const year = j.year;
	const title = j.title;
	const brand = jobs.attributes.brand.data.attributes.name;
	const product = j.product.data.attributes.name;
	const description = j.short_description;
	const low_brand = brand.toLowerCase().split(" ")[0];

	const bg_color = j.bg_color;

	const image = j.image_home.data.attributes
	const image_url = image.url

	
	return (
		<article  className={styles.card}>
			<Link href="/jobs/[slug]" as={`/jobs/${j.slug}`}>
				<a>
					<Highlights bg={bg_color}>
						<Image src={urlBuilder(image_url)} alt={image} width={image.width} height={image.height}/>
					</Highlights>
				</a>
			</Link>
			<label>{`${brand} • ${title}`}</label>
			<Link href="/jobs/[slug]" as={`/jobs/${j.slug}`}>
				<a>
					
			<p>{`${description}`}</p>
				</a>
			</Link>
		</article>
		);
}

  
export default HighlightsJobs