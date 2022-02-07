import React, { useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import styles from './slug.module.sass';
import { GetStaticProps, GetStaticPaths } from 'next'
import { ColorType } from './../../types/color.interface';
import styled from 'styled-components'

import Image from 'next/image'
import urlBuilder from '../../lib/imageUrl'
import client from '../../lib/apollo';
import { GetAllJobsQuery, GetJobBySlugQuery } from '../../graphql/jobsc.query';


import { urlBlurred } from './../../components/images/images';




// GET STATICS

export const getStaticPaths: GetStaticPaths = async () => {
	const jobsSlugs = await client.query({ query: GetAllJobsQuery })
		.then((result) => result.data.jobs.data);

	if (!jobsSlugs.data) return { paths: [], fallback: true };

	const paths = jobsSlugs.data.jobs.data.map((jobs) => ({
		params: { slug: jobs.id.slug },
	}));
	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params;

	const { data } = await client
		.query({ query: GetJobBySlugQuery, variables: { slug } })
		.then((result) => {
			return result.data.postBySlug
		});

	// const attributes = data.attributes && {
	// 	job: data.attributes,
	// 	brand: data.attributes.brand.data.attributes.name,
	// 	product: data.attributes.product.data.attributes.name,
	// };

	// const content = data && {
	// 	hero: data.infos.hero,
	// 	main_content: data.infos.main_content,
	// 	page_content: data.infos.page_content
	// };


	const cloudn = process.env.CLOUDINARY_NAME
   return{ props: { data,  slug, cloudn} } ;
	// return { props: { data, slug,attributes, content, low_brand } };
	// return { props: { data, slug} };
}







// PROPS

type JobsProps = {
	data:JobSlugProps;
	slug: string;
	cloudn: string;
	low_brand: string;
};


type HeroProps = {
	data: {
		attributes: {
			bg_color: string;
			name: string;
			url: string;
			width: string;
			height: string;
			hash: string;
		}
	}
}
type ProductProps = {
	data: {
		attributes: {
			name: string;
		}
	}
}
type BrandProps = {
	data: {
		attributes: {
			name: string;
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
				hash: string;
			}
		}
	}
};

type MainContentProps = {
	content:  string;
	main_media: MediaProps;
};

type PageContentProps = {
	content: string;
	content_media: MediaProps[];
};









// INTERFACE
export interface JobSlugProps {
	id: number;
    attributes: {
        title: string;
        bg_color: string;
        description: string;
        year: string;
        brand: BrandProps;
        product: ProductProps;
        hero: HeroProps
        main_content: MainContentProps[];
        page_content: PageContentProps[];
    }
}



export type HighlightsProps = {
	bg?: string;
  };







// STYLED

const Highlights = styled.header<HighlightsProps>
	`
	width: 100vw;
	height: 100%;
	display:flex;
	background-color:  ${({ bg }) => `var(${bg})`};
	width: 100vw;
	height: 100%;
	display:flex;
	transition: all 0.7s ease-out;
	justify-content: center;
	}
	`;








// PAGE

const Page = ({data, slug, cloudn} : JobsProps) => {
    if (!data || data.attributes === null) 
        return <div>Carregando</div>;
	const [image, setImage] = useState(null);
    const {
        title,
        bg_color,
        description,
        year,
        hero,
        brand,
        product,
        main_content,
        page_content
    } = data.attributes
    const hero_attr = hero.data.attributes;
    const brand_name = brand.data.attributes.name
    const product_name = product.data.attributes.name

    useEffect(() => {
		const dataURL = main_content.map(d =>{
			return d.main_media.media.data.attributes.url
		})
		setTimeout(() => {
		  setImage(dataURL );
		}, 2000)
	  }, [])
    return (data && (
        <div>
            <section className={styles.job_page}>
                <section key={`1a`}  className={styles.header_content}>
                    <Highlights bg={bg_color}>
							{image ? <Image src={urlBuilder(hero_attr.url)} width={hero_attr.width} height={hero_attr.height} objectFit='cover'/>:
							
								<Image src={urlBlurred(hero_attr.hash, cloudn)} width={hero_attr.width} height={hero_attr.height} objectFit='cover'/>
							
}
                    </Highlights>
                    <article>
                        <header>
                            <h2>{brand_name}
                                / {product_name}</h2>
                            <aside>{year}</aside>
                        </header>
                        <div className={styles.content}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </article>
                </section>

                {
                    main_content && (
                        <section key={`2s`}  className={styles.main_content}>

                            {
                                main_content.map(
                                    main => ([
										<article>
											<div className={styles.content}>
												<ReactMarkdown className={styles.contentMarkdown}>
													{main.content}
												</ReactMarkdown>
											</div>
											{main.main_media.media.data && (
												<div
													className={styles.bg_content}
													style={{
														"background" : `var(${main.main_media.bg_color})`,
														"padding" : "4em 0"
													}}>
														{image ? <Image src={urlBuilder(main.main_media.media.data.attributes.url)} width={1000} height={1000} objectFit='contain'/>:
														
														<div className={styles.load}>
															<Image src={urlBlurred(main.main_media.media.data.attributes.hash, cloudn)} width={1000} height={1000} objectFit='contain'/>
														</div>
}
												</div>
											)}
										</article>
                                        ])
                                )
                            }
                        </section>
                    )
                }

                {
                    page_content && (
                        <section key={`4d`}  className={styles.page_content}>
                            {
                                page_content.map(
                                    page_content => ([
									<article>
                                        <div className={styles.content}>
                                            <ReactMarkdown className={styles.contentMarkdown}>
                                                {page_content.content}
                                            </ReactMarkdown>
                                        </div>
										
												{
													page_content
														.content_media
														.map((args, i) => (
															args.media.data && (
																<div
																	key={i}
																	className={styles.bg_content}
																	style={{
																		"background" : `var(${args.bg_color})`
																	}}>
																	{image ? <Image src={urlBuilder(args.media.data.attributes.url)} width={args.media.data.attributes.width} height={args.media.data.attributes.height} objectFit='contain'/>:
																	
																	<div className={styles.load}>
																		<Image src={urlBlurred(args.media.data.attributes.hash, cloudn)} width={args.media.data.attributes.width} height={args.media.data.attributes.height} objectFit='contain'/>
																	</div>
																	}
																</div>
															)
														))
												}
                                    </article>
                                        ])
                                )
                            }
                        </section>
                    )
                }
            </section>
        </div>
    ))
}




export default Page