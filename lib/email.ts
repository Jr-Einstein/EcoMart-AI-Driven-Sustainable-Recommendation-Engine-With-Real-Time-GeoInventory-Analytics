import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Walmart X EcoMart" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });

    console.log('Email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed: ', error);
    return { success: false, error: error.message };
  }
}

export function generateWelcomeEmail(firstName: string, role: 'customer' | 'admin'): string {
  const roleTitle = role === 'admin' ? 'Admin' : 'Customer';
  const welcomeMessage = role === 'admin' 
    ? 'You now have access to the admin dashboard where you can manage inventories, view analytics, and oversee the EcoMart platform.'
    : 'Welcome to our sustainable shopping platform! Discover eco-friendly products, track your carbon footprint, and make a positive impact on the environment.';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f0f6ff; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background-color: #0071ce; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; }
        .footer { background-color: #004c91; color: white; padding: 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; }
        .welcome-badge { background-color: #ffc220; color: #000; padding: 10px 20px; border-radius: 20px; display: inline-block; margin: 20px 0; font-weight: bold; }
        .features { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .feature-item { margin: 10px 0; padding: 10px; border-left: 4px solid #ffc220; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🛒 Walmart X EcoMart</div>
          <h1>Welcome to Sustainable Shopping!</h1>
        </div>
        
        <div class="content">
          <h2>Hello ${firstName}! 👋</h2>
          
          <div class="welcome-badge">
            🎉 Successfully Created Your ${roleTitle} Account!
          </div>
          
          <p>Congratulations! You've successfully joined the Walmart X EcoMart community. ${welcomeMessage}</p>
          
          <div class="features">
            <h3>🌱 What Makes EcoMart Special:</h3>
            
            <div class="feature-item">
              <strong>🏷️ Eco-Friendly Badges:</strong> Every product is rated with our 5-leaf sustainability system
            </div>
            
            <div class="feature-item">
              <strong>📊 Carbon Tracking:</strong> Monitor your environmental impact with every purchase
            </div>
            
            <div class="feature-item">
              <strong>♻️ Box Return System:</strong> Participate in our zero-waste packaging initiative
            </div>
            
            <div class="feature-item">
              <strong>🎁 Green Rewards:</strong> Earn Green Bits for sustainable shopping choices
            </div>
            
            ${role === 'admin' ? `
            <div class="feature-item">
              <strong>📈 Admin Dashboard:</strong> Access comprehensive analytics and inventory management
            </div>
            
            <div class="feature-item">
              <strong>🛠️ Product Management:</strong> Add, edit, and manage eco-friendly product listings
            </div>
            ` : `
            <div class="feature-item">
              <strong>🛍️ Sustainable Products:</strong> Browse thousands of eco-certified products
            </div>
            
            <div class="feature-item">
              <strong>📚 Educational Resources:</strong> Learn about sustainable living and environmental impact
            </div>
            `}
          </div>
          
          <p><strong>Ready to start your sustainable journey?</strong></p>
          <p>Log in to your account and explore our wide range of eco-friendly products that help reduce your carbon footprint while maintaining the quality you expect from Walmart.</p>
          
          <p>Thank you for choosing to shop sustainably with us!</p>
          
          <p>Best regards,<br>
          <strong>The Walmart X EcoMart Team</strong> 🌍</p>
        </div>
        
        <div class="footer">
          <p>© 2025 Walmart X EcoMart | Making Sustainable Shopping Accessible</p>
          <p>Save Money. Live Better. Shop Sustainably.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}