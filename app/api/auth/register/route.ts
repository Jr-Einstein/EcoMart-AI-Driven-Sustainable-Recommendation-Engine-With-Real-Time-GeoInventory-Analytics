import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import { generateToken, generateEmailVerificationToken } from '@/lib/auth';
import { sendEmail, generateWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { username, email, password, firstName, lastName, role = 'customer' } = await request.json();

    // Validation
    if (!username || !email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email or username already exists' },
        { status: 400 }
      );
    }

    // Generate email verification token
    const emailVerificationToken = generateEmailVerificationToken();

    // Create new user
    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      role,
      emailVerificationToken,
      isEmailVerified: true // Auto-verify for demo purposes
    });

    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    // Send welcome email
    try {
      await sendEmail({
        to: email,
        subject: `Welcome to Walmart X EcoMart - Your ${role === 'admin' ? 'Admin' : 'Customer'} Account is Ready!`,
        html: generateWelcomeEmail(firstName, role)
      });
      console.log('Welcome email sent successfully to:', email);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail registration if email fails
    }

    // Return success response
    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        isEmailVerified: user.isEmailVerified
      },
      token
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}