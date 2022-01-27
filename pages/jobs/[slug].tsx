
import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from './slug.module.sass';
import { GetStaticProps, GetStaticPaths } from 'next'
import { ColorType } from './../../types/color.interface';
import styled from 'styled-components'

import Image from 'next/image'
import urlBuilder from '../../lib/imageUrl'
import client from '../../lib/apollo';
import { GetAllJobsQuery, GetJobBySlugQuery } from '../../graphql/jobsc.query';






// GET STATICS

export const getStaticPaths: GetStaticPaths = async () => {
	const jobsSlugs = await client.query({ query: GetAllJobsQuery })
		.then((result) => result.data.jobs.data);

	if (!jobsSlugs.data) return { paths: [], fallback: true };

	const paths = jobsSlugs.data.jobs.data.map((jobs) => ({
		params: { slug: jobs.id.slug },
	}));
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params;

	const { data } = await client
		.query({ query: GetJobBySlugQuery, variables: { slug } })
		.then((result) => {
			return result.data.postBySlug
		});

	const infos = data && {
		job: data.infos,
		brand: data.attributes.brand.data.attributes.name,
		product: data.attributes.product.data.attributes.name,
		bg_color: data.attributes.bg_color,
	};

	const content = data && {
		hero: data.infos.hero,
		main_content: data.infos.main_content,
		page_content: data.infos.page_content
	};

	const low_brand = infos.brand.toLowerCase().split(" ")[0];

	return { props: { data, slug, infos, content, low_brand } };
	// return { props: { data, slug} };
}







// PROPS

type JobsProps = {
	data: JobSlugProps;
	slug: string;
	low_brand: string;
	infos: {
		bg_color: string;
		job: {
			title: string;
			short_description: string;
			description: string;
			year: string;
		}
		brand: string;
		product: string;
	};
	content: {
		hero: HeroProps;
		main_content: MainContentProps[];
		page_content: PageContentProps[];
	}
	background?: ColorType;
};


type HeroProps = {
	data: {
		attributes: {
			bg_color: string;
			name: string;
			url: string;
			width: string;
			height: string;
		}
	}
}


type MediaProps = {
	bg_color: string;
	media: {
		data: {
			attributes: {
				url: string;
				width: string;
				height: string;
			}
		}
	}
};

type MainContentProps = {
	title: string;
	content:  string;
	main_media: MediaProps;
};

type PageContentProps = {
	title: string;
	content: string;
	content_media: MediaProps[];
};


type Brand = {
	brand: string;
	low_brand: string;
	background?: ColorType;
}








// INTERFACE

export interface JobSlugProps {
	title: string;
	short_description: string;
	description: string;
	brand: string;
	product: string;
	slug: string;
	year: string;
	main_content: MainContentProps[];
	page_content: PageContentProps[];
}



export type HighlightsProps = {
	color?: ColorType;
	bg?: ColorType;
  };







// STYLED

const Highlights = styled.header<HighlightsProps>
	`
	width: 100vw;
	height: 100%;
	display:flex;
	background-color:  ${({ bg }) => (bg ? `var(${bg})` : 'transparent')};width: 100vw;
	height: 100%;
	display:flex;
	transition: all 0.7s ease-out;
	}
	`;








// PAGE

const Page = ({ data, infos, content, low_brand }: JobsProps) => {
	if (!data || data === null) return <div>Experiência não encontrada</div>;

	const {main_content, page_content, hero} = content
	const hero_attr = hero.data.attributes;

	const bg_color = infos.bg_color;	
	return (
		<div id={low_brand}>
			<section key={1} className={styles.job_page}>
				<section className={styles.header_content}>
					<Highlights bg={bg_color}>
						<Image src={urlBuilder(hero_attr.url)} alt={hero_attr.name} objectFit="cover" width={hero_attr.width} height={hero_attr.height} />
					</Highlights>
					<article>
						<header>
							<h2>{infos.brand} / {infos.product}</h2>
							<aside>{infos.job.year}</aside>
						</header>
						<div className={styles.content}>
							<h1>{infos.job.title}</h1>
							<p>{infos.job.description}</p>
						</div>
					</article>
				</section>

				{main_content && (
					<section key={2}  className={styles.main_content}>
						
						{main_content.map(main =>([
							<article>
								<div className={styles.content}>
									
									<ReactMarkdown className={styles.contentMarkdown}>
									{main.content}
									</ReactMarkdown>
								</div>
								<div className={styles.content}>
									<div className={styles.bg_content} style={{ "background": `var(${main.main_media.bg_color})`, "padding": "4em 0" }}>
										<Image src={urlBuilder(main.main_media.media.data.attributes.url)} objectFit="contain" width={main.main_media.media.data.attributes.width} height={main.main_media.media.data.attributes.height} />
									</div>
								</div>

							</article>])
						)}
					</section>
				)}
	
				{page_content && (
					<section  key={3} className={styles.page_content}>
						{page_content.map(page_content => ([
							<article>
								<div className={styles.content}>
								<ReactMarkdown className={styles.contentMarkdown}>
									
								{page_content.content}
									</ReactMarkdown>
								</div>
								<div className={styles.content}>
									{page_content.content_media.map((args,i) => (
										<div key={i} className={styles.bg_content} style={{ "background": `var(${args.bg_color})`, "padding": "4em 0" }}>
											<Image src={urlBuilder(args.media.data.attributes.url)} objectFit="contain" width={args.media.data.attributes.width} height={args.media.data.attributes.height} />
										</div>
									))}
								</div>
							</article>
						])
						)}
					</section>
				)}
			</section>
		</div>
	)
}




export default Page