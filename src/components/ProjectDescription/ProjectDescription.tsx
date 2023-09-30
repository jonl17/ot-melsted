import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import Typography from '../Typography/Typography'

type Props = {
  text: RichTextField
}

export default function ProjectDescription({ text }: Props) {
  return (
    <div className="container max-w-4xl text-center py-16 lg:py-44">
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => (
            <Typography className="mb-5">{children}</Typography>
          ),
        }}
      />
    </div>
  )
}
