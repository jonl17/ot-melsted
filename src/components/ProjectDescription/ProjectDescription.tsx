import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import Typography from '../Typography/Typography'

type Props = {
  text: RichTextField
  smallText: string
}

export default function ProjectDescription({ text, smallText }: Props) {
  return (
    <div className="container max-w-6xl text-center md:py-44">
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <Typography type="large" className="mb-5">
              {children}
            </Typography>
          ),
        }}
      />
      <Typography>{smallText}</Typography>
    </div>
  )
}
