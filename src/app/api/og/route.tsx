import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const imgSrc = searchParams.get('imgSrc')
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundImage: `url(${imgSrc})`,
        }}
      />
    ),
    {
      width: 1920,
      height: 1080,
    }
  )
}
