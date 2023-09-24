'use client'
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Typography from '../Typography'
import { FooterDocument } from '../../../prismicio-types'

function ContentBox({
  about,
  image,
}: {
  about: FooterDocument['data']['about']
  image: FooterDocument['data']['image']
}) {
  return (
    <div className="flex flex-col-reverse justify-between h-full lg:flex-row">
      <div className="lg:pr-24 lg:w-2/3">
        <PrismicRichText
          field={about}
          components={{
            paragraph: ({ children }) => (
              <Typography type="large" className="mb-10">
                {children}
              </Typography>
            ),
          }}
        />
      </div>
      <div className="flex items-start justify-end mb-12 lg:w-1/3 lg:mb-0">
        <Image
          height={image.dimensions?.height}
          width={image.dimensions?.width}
          src={image.url ?? ''}
          alt={image.alt ?? ''}
          className="object-contain w-full"
        />
      </div>
    </div>
  )
}

type ContactBoxProps = {
  title: string
  content: RichTextField
}

function ContactBox({ title, content }: ContactBoxProps) {
  return (
    <div>
      <Typography className="mb-8">{title}</Typography>
      <div>
        <PrismicRichText
          field={content}
          components={{
            paragraph: ({ children }) => <Typography>{children}</Typography>,
          }}
        />
      </div>
    </div>
  )
}

export default function Footer({
  about,
  address_box,
  contact_box,
  image,
}: FooterDocument['data']) {
  return (
    <footer className="inset-x-0 h-full min-h-screen overflow-y-scroll lg:fixed bg-lightgray pb-safe top-0">
      <div className="container grid content-between h-full gap-12 py-12 mx-auto lg:py-24 lg:gap-0">
        <div className="lg:flex">
          <div className="lg:w-2/3">
            <Typography type="large" className="mb-12 lg:mb-0">
              OT.melsted
            </Typography>
          </div>
          <div className="flex gap-12 lg:gap-24 lg:w-1/3">
            <ContactBox title="Contact" content={contact_box} />
            <ContactBox title="Address" content={address_box} />
          </div>
        </div>
        <ContentBox about={about} image={image} />
      </div>
    </footer>
  )
}
