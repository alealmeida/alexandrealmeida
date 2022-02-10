import React, {useEffect, useState,useRef} from 'react';
import Document from 'next/document'
import { useScrollData } from "scroll-data-hook";
import styles from './jobshome.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


import { ImgType } from '../images/images.interface';

import urlBuilder from '../../lib/imageUrl'
import { urlBlurred } from './../images/images';



// VARIABLES

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.map(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
const getData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant

// const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data

// const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function

// const applyGradient = async(url, callback) => {
//   const data = await getData(url);
//   const gradient = buildGradient(data[randNumInRange(data.length)]);
//   callback(gradient);
// }

// RESULT

// applyGradient(gradientAPI, addBackgroundToUnderlines);





const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
const applyGradient = async(url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
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
    params : {
    results: {
        resources: any[];
    };cloudn: string
}
	data: {
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
        key: number;
  };


type HighlightsProps = {
	bg?: string;
  };



  export const HighlightsHome = styled.header<HighlightsProps>`
	background-color:  ${({ bg }) => `var(${bg}-op)`};
	transition: all 0.7s ease-out;
	justify-content:flex-end;
  	:hover { 
		background-color:  ${({ bg }) => `var(${bg})`};
	}
	`;

    // background-image: linear-gradient(120deg, ${({ bg }) => `var(${bg})`} 0%, ${({ bg }) => `var(${bg}-op)`} 100%);
  export const LinkToPages = styled.a<HighlightsProps>`
    :hover { 
        color: var(--color-grey-darker)
    }
	`;



const HighlightsJobs = ({data, params, key} : HighlightsJobsProps) => {



    const linkRef = useRef<HTMLLinkElement>();
    const h1Ref = useRef<HTMLHeadingElement>();
    const sectionRef = useRef<HTMLHeadingElement>();

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

    console.log(sectionRef)

// RESULT
    useEffect(() => {
        
        setTimeout(() => {
            setImage(url );
        }, 1000)
    }
    , [data])
    
    useEffect(() => {
        
        setTimeout(() => {

            

            
        }, 1000)
    }
    , [])


    const onSub = (e) => {

        if(h1Ref?.current) {
            const linkUnderline = Array.from(linkRef[0], a=>React.createRef());
            const h3Underline = Array.from(h1Ref[0], a=>React.createRef());

            const addBackgroundToLink = addBackground(linkUnderline);
            const addBackgroundToH3 = addBackground(h3Underline);
            applyGradient(gradientAPI, addBackgroundToLink);
            applyGradient(gradientAPI, addBackgroundToH3);
        }
        
    }
        
        

    
    // results.resources.map(res=>console.log('results', res.url, url, cloudn))
    // console.log(image, url)

    return (
        <article  className={styles.card} ref={sectionRef} >
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
                    <LinkToPages ref={linkRef[key]} bg={bg_color}onMouseOver={onSub} className={styles.link_to_pages}>
                    <h3 ref={h1Ref[key]} >
                    {`${short_description}`}</h3>
                    </LinkToPages>
            </Link>
        </article>
    );
}


export default HighlightsJobs;

