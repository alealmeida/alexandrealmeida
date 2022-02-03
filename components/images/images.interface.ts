import React from "react";
import styles from './jobshome.module.sass'
import { ColorType } from '../../types/color.interface';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'



import urlBuilder from '../../lib/imageUrl'

import { buildUrl } from 'cloudinary-build-url';

export type ImgType =  {
	bg_color: string;
	data:{attributes :{
		name: string;
		url: string;
		width: number;
		height: number;
		hash: string;
		}}
}
