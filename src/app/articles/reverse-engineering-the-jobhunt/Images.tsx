import one from './images/Web dev rocket-23 2.jpg'
import two from './images/Web dev rocket-24.jpg'
import three from './images/Web dev rocket-25 2.jpg'
import four from './images/Web dev rocket-26.jpg'

import Image from 'next/image'

export const images = [
  {
    src: one,
    alt: 'The steps: Receive application; Screen for related work experience; Look at your profile; Culture fit interview; Technical interview; Hired',
  },
  { src: two, alt: 'Failure in the either screening or profile review' },
  { src: three, alt: 'Failure in technical interview' },
  { src: four, alt: 'Hired' },
]

export function Img(props: { imageIndex: number }) {
  const image = images[props.imageIndex]
  return <Image src={image.src} alt="" />
}
