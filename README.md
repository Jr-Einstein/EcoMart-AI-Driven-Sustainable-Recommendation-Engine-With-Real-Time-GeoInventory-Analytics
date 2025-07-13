# Walmart-Sparkathon

This project now includes a complete authentication system with MongoDB integration and email notifications.
## Authentication System Setup
### Features
- User registration and login
- Role-based access (Customer/Admin)
- JWT token authentication
- Email notifications with Nodemailer
- Admin dashboard for inventory management
- Secure password hashing with bcrypt
### Setup Instructions
1. **Environment Variables**
   Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/walmart-ecomart
   JWT_SECRET=your-super-secret-jwt-key
   EMAIL_USER=amankumarsingh.org@gmail.com
   EMAIL_PASS=your-app-specific-password
   SESSION_SECRET=your-session-secret-key
   BASE_URL=http://localhost:3000
   ```
2. **MongoDB Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update the MONGODB_URI in your .env.local file
3. **Email Setup**
   - Enable 2-factor authentication on your Gmail account
   - Generate an app-specific password for nodemailer
   - Update EMAIL_PASS with your app-specific password
4. **Install Dependencies**
   ```bash
   npm install
   ```
5. **Run the Application**
   ```bash
   npm run dev
   ```
### Usage
1. **Registration**: Visit `/auth/register` to create a new account
2. **Login**: Visit `/auth/login` to sign in
3. **Admin Access**: Create an account with role "admin" to access `/admin/dashboard`
4. **Customer Access**: Regular users can access the main shopping interface
### API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification
### Email Notifications
Users receive welcome emails upon successful registration with:
- Account confirmation
- Role-specific welcome message
- Feature overview
- Getting started guide