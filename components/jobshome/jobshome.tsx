import React from "react";
import styles from './jobshome.module.sass'
import { ColorType } from './../../types/color.interface';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import {HighlightsProps, styleTheme } from './jobshome.interface';
import urlBuilder from '../../lib/imageUrl'

const HighlightsJobs = ({jobs}) => {
	const j = jobs.infos;
	const year = j.year;
	const title = j.title;
	const brand = jobs.attributes.brand.data.attributes.name;
	const product = jobs.attributes.product.data.attributes.name;
	const description = jobs.infos.short_description;
	const low_brand = jobs.attributes.brand.data.attributes.name.toLowerCase().split(" ")[0];


	const image = j.image_home.data.attributes
	const image_url = image.url

const getBackground = (background, brand) => ([background || (
        brand === low_brand
            ? `theme-${low_brand}-primary`
            : null
    )]);

	const Highlights = styled.header<HighlightsProps>
	`
	background: var(--color-${( {brand, color} ) => getBackground(color, brand)});
	${({ brand }) => styleTheme[brand]};
	`;
	
	return (
		<article  className={styles.card}>
			<Link href="/jobs/[slug]" as={`/jobs/${jobs.infos.slug}`}>
				<a>
					<Highlights brand={low_brand}>
						<Image src={urlBuilder(image_url)} alt={image} width={image.width} height={image.height}/>
					</Highlights>
				</a>
			</Link>
			<label>{`${brand} • ${title}`}</label>
			<Link href="/jobs/[slug]" as={`/jobs/${jobs.infos.slug}`}>
				<a>
					
			<p>{`${description}`}</p>
				</a>
			</Link>
		</article>
		);
}

  
export default HighlightsJobs