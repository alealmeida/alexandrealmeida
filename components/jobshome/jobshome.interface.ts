import React from "react";
import styles from './jobshome.module.sass'
import { ColorType } from './../../types/color.interface';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import urlBuilder from '../../lib/imageUrl'

export type HighlightsProps = {
	background?: ColorType;
	brand: 'avec' | 'natura' | 'veloe' | 'mars' | 'credicard';
}

export const styleTheme = {
	avec: {'justify-content':'center'},
	credicard: {'justify-content':'center'},
	mars: {'justify-content':'center'},
	natura:{'justify-content':'center'},
	veloe: {'justify-content':'center'},
}

  