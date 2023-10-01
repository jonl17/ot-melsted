'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.error(error)
  return (
    <div>
      <h2>This page does not exist!</h2>
    </div>
  )
}
