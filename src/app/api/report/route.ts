// app/api/report/route.ts

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { API_URL } from '@/constants'
import { EnumTokens } from '@/services/auth/auth.service'

export async function GET() {
  // Получаем cookie с access token на сервере
  const cookie = await cookies()
  const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value

  if (!accessToken) {
    return NextResponse.json({ error: 'No access token found' }, { status: 401 })
  }

  try {
    const response = await fetch(`${API_URL}/report/download`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch report' }, { status: 500 })
    }

    const buffer = await response.arrayBuffer()
    return new NextResponse(buffer, { status: 200, headers: { 'Content-Type': 'application/pdf' } })
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching the report' }, { status: 500 })
  }
}
