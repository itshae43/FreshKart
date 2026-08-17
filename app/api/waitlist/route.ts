import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, zipCode, dietaryFocus } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('[Waitlist Registration]', {
      email,
      zipCode: zipCode || 'Unspecified',
      dietaryFocus: dietaryFocus || 'General',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully joined early access waitlist',
      priorityRank: Math.floor(4800 + Math.random() * 50),
    });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
