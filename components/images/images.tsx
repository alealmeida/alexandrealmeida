import React, { FC ,useEffect, useState} from 'react';
import styles from './jobshome.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import urlBuilder from '../../lib/imageUrl'
import { buildUrl } from 'cloudinary-build-url';



export const urlBlurred = (hash, cloudn) => buildUrl(hash , {
  cloud: {
    cloudName:  cloudn,
  },
  transformations: {
    effect: {
      name: 'blur',
      value: 1000
    },
    quality: 1
  }
});
