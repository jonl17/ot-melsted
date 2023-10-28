'use client'
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Typography from '../Typography'
import { FooterDocument } from '../../../prismicio-types'

function ContentBox({
  about,
  image,
  contact_box,
  address_box,
}: {
  about: FooterDocument['data']['about']
  image: FooterDocument['data']['image']
  contact_box: FooterDocument['data']['contact_box']
  address_box: FooterDocument['data']['address_box']
}) {
  return (
    <div className="flex justify-between h-full">
      <div className="lg:pr-24 lg:w-2/3">
        <div className="flex lg:hidden items-start justify-end py-0 w-full lg:mb-0">
          <Image
            height={image.dimensions?.height}
            width={image.dimensions?.width}
            src={image.url ?? ''}
            alt={image.alt ?? ''}
            className="object-contain w-full"
          />
        </div>
        <div>
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
        <div className="flex gap-12 lg:gap-24">
          <ContactBox title="Contact" content={contact_box} />
          <ContactBox title="Address" content={address_box} />
        </div>
      </div>
      <div className="hidden lg:flex items-start justify-end py-0 w-1/3 lg:mb-0">
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
      <PrismicRichText
        field={content}
        components={{
          paragraph: ({ children }) => <Typography>{children}</Typography>,
        }}
      />
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
      <div className="container grid content-between h-full gap-12 py-12 lg:py-36 mx-auto lg:gap-0">
        <ContentBox
          about={about}
          image={image}
          contact_box={contact_box}
          address_box={address_box}
        />
      </div>
    </footer>
  )
}
