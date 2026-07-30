import { NextResponse } from 'next/server';
import { ContactFormSchema } from '@/schemas/common';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validation
    const parsed = ContactFormSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Validation failed.", 
          issues: parsed.error.issues 
        }, 
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;

    // 2. Spam Protection / Honeypot (Example: Check for hidden fields if added to UI)
    // if (body.honeypot) { return NextResponse.json({ success: true }, { status: 200 }); }

    // 3. Email Service Integration
    // In production, use process.env.RESEND_API_KEY or similar to send the email.
    console.log(`[CONTACT API] Received message from ${name} (${email}) at ${company || 'No Company'}: ${message}`);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // 4. Confirmation
    return NextResponse.json(
      { 
        success: true, 
        message: "Request completed. I'll get back to you shortly." 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('[CONTACT API] Server error:', error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
