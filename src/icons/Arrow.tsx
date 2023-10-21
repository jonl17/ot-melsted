import clsx from 'clsx'

type Props = {
  className?: string
}

export default function Arrow({ className }: Props) {
  return (
    <svg
      className={clsx('w-6 h-6 text-gray-800 dark:text-white', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  )
}
