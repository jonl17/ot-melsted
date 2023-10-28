import clsx from 'clsx'
import { ReactHTML, createElement } from 'react'

type ElementType = 'large' | 'medium' | 'nav' | 'small'

type ElementProps = {
  children: React.ReactNode
  element: keyof ReactHTML
  className?: string
}

function Element({ children, element, className }: ElementProps) {
  return createElement(element, { className }, children)
}

type TypeProps = {
  children: React.ReactNode
  element: keyof ReactHTML
  className?: string
}

function Small({ children, className, element }: TypeProps) {
  return (
    <Element
      element={element}
      className={clsx('font-normal text-small font-untitled', className)}
    >
      {children}
    </Element>
  )
}

function Medium({ children, className, element }: TypeProps) {
  return (
    <Element
      element={element}
      className={clsx(
        'font-normal text-small lg:text-medium font-untitled',
        className
      )}
    >
      {children}
    </Element>
  )
}

function Large({ children, element, className }: TypeProps) {
  return (
    <Element
      element={element}
      className={clsx(
        'font-normal text-medium lg:text-large font-untitledMedium',
        className
      )}
    >
      {children}
    </Element>
  )
}

function Nav({ children, element, className }: TypeProps) {
  return (
    <Element
      className={clsx(
        'font-normal text-medium lg:text-largeMobile font-untitledMedium',
        className
      )}
      element={element}
    >
      {children}
    </Element>
  )
}

type Props = {
  children: React.ReactNode
  element?: keyof ReactHTML
  type?: ElementType
  className?: string
}

export default function Typography({
  children,
  element = 'p',
  type = 'medium',
  className,
}: Props) {
  switch (type) {
    case 'large':
      return (
        <Large element={element} className={className}>
          {children}
        </Large>
      )
    case 'nav':
      return (
        <Nav element={element} className={className}>
          {children}
        </Nav>
      )
    case 'small':
      return (
        <Small element={element} className={className}>
          {children}
        </Small>
      )
    default:
      return (
        <Medium element={element} className={className}>
          {children}
        </Medium>
      )
  }
}
