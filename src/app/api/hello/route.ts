import { type NextRequest, NextResponse } from 'next/server'

export function GET(_req: NextRequest) {
  return NextResponse.json({
    success: true,
    data: { name: 'John Doe', timestamp: Date.now() },
  })
}
