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
        <div className="flex items-start justify-end w-full py-0 lg:hidden lg:mb-0">
          <Image
            height={image.dimensions?.height}
            width={image.dimensions?.width}
            src={image.url ?? ''}
            alt={image.alt ?? ''}
            className="object-contain w-full pb-6"
          />
        </div>
        <div className="mb-20">
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
      <div className="items-start justify-end hidden w-1/3 lg:flex lg:mb-0">
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
          paragraph: ({ children }) => (
            <Typography className="mb-0">{children}</Typography>
          ),
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
    <footer className="inset-x-0 top-0 h-full min-h-screen overflow-y-scroll lg:fixed bg-lightgray pb-safe">
      <div className="container grid content-between h-full gap-12 py-12 mx-auto lg:py-36 lg:gap-0">
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
