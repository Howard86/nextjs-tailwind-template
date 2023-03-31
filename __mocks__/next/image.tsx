import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export default function Image(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="" {...props} />
}
