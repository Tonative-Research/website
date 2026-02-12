import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.json()
    const SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_APPSCRIPT_URL

    const googleResponse = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await googleResponse.text()
    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
