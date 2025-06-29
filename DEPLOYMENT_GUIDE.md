# 🚀 Production Deployment Guide

This guide will help you deploy the Vachon UX Design Studio application with full functionality on your preferred hosting platform.

## 📋 Prerequisites

- Node.js 18+ installed locally
- Git repository (GitHub, GitLab, etc.)
- Supabase account
- Hosting platform account (Vercel recommended)

## 🏗️ Step 1: Set Up Supabase Database

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in project details:
   - **Name**: `vachon-ux-studio`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
4. Click "Create new project" and wait for setup (~2 minutes)

### 1.2 Get Your Credentials

1. Go to **Settings** → **API**
2. Copy these values (you'll need them later):
   ```
   Project URL: https://your-project-ref.supabase.co
   anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6...
   service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6... (keep secret!)
   ```

### 1.3 Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the contents of `/supabase/migrations/001_initial_schema.sql`
3. Click "Run" to create the initial tables
4. Copy and paste the contents of `/supabase/migrations/002_complete_schema.sql`
5. Click "Run" to complete the schema setup

### 1.4 Configure Authentication

1. Go to **Authentication** → **Settings**
2. Configure **Site URL**: `https://your-domain.com` (or your deployment URL)
3. Add **Redirect URLs**:
   ```
   https://your-domain.com
   https://your-domain.com/auth/callback
   ```
4. Enable **Email** provider
5. Optionally configure other providers (Google, GitHub, etc.)

## 🔧 Step 2: Configure Environment Variables

### 2.1 Update Local Configuration

1. Update `/lib/supabase-config.ts` with your real credentials:
   ```typescript
   const DEMO_CONFIG: SupabaseConfig = {
     url: 'https://your-project-ref.supabase.co', // Your actual URL
     anonKey: 'your-actual-anon-key', // Your actual anon key
     serviceRoleKey: 'your-service-role-key' // Your service role key
   }
   ```

### 2.2 Create Environment Files

Create `.env.local` (for local development):
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Vachon UX Design Studio"

# Email Configuration (optional)
NEXT_PUBLIC_SUPPORT_EMAIL=hello@yoursite.com
```

For production, you'll set these same variables in your hosting platform.

## 🌐 Step 3: Deploy to Hosting Platform

### Option A: Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

#### 3.1 Install Vercel CLI
```bash
npm install -g vercel
```

#### 3.2 Deploy from Command Line
```bash
# Login to Vercel
vercel login

# Deploy your project
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? vachon-ux-studio  
# - In which directory is your code located? ./
# - Want to override the settings? No
```

#### 3.3 Set Environment Variables in Vercel
1. Go to your project dashboard on [vercel.com](https://vercel.com)
2. Go to **Settings** → **Environment Variables**
3. Add all the environment variables from your `.env.local` file
4. Update `NEXT_PUBLIC_APP_URL` to your Vercel domain: `https://your-project.vercel.app`

#### 3.4 Deploy from GitHub (Alternative)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Add environment variables in the deployment settings
5. Deploy

### Option B: Deploy to Netlify

#### 3.1 Build Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3.2 Deploy
1. Go to [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Site Settings
6. Deploy

### Option C: Deploy to Railway

#### 3.1 Install Railway CLI
```bash
npm install -g @railway/cli
```

#### 3.2 Deploy
```bash
# Login to Railway
railway login

# Initialize project
railway init

# Add environment variables
railway variables set NEXT_PUBLIC_SUPABASE_URL=your-url
railway variables set NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
# ... add all other variables

# Deploy
railway up
```

## 📧 Step 4: Configure Email Templates (Optional)

### 4.1 Customize Auth Emails
1. Go to **Authentication** → **Templates** in Supabase
2. Customize the email templates:
   - **Confirm signup**: Welcome new users
   - **Magic Link**: For passwordless login
   - **Change Email Address**: Email change confirmation
   - **Reset Password**: Password reset instructions

### 4.2 Set Up Custom SMTP (Optional)
1. Go to **Settings** → **Auth**
2. Configure custom SMTP settings for branded emails

## 👤 Step 5: Set Up Super Admin

### 5.1 Create Your Admin Account
1. Go to your deployed application
2. Sign up with your email address
3. Verify your email

### 5.2 Promote to Super Admin
1. Go to **Authentication** → **Users** in Supabase
2. Find your user and note the UUID
3. Go to **SQL Editor**
4. Run this query to make yourself super admin:
   ```sql
   UPDATE profiles 
   SET role = 'super_admin' 
   WHERE id = 'your-user-uuid-here';
   ```

## 🔒 Step 6: Security Configuration

### 6.1 Row Level Security
The migrations automatically set up RLS policies, but verify:
1. Go to **Database** → **Tables** in Supabase
2. Check that RLS is enabled on all tables
3. Review the policies in the **Authentication** → **Policies** section

### 6.2 API Rate Limiting
1. Go to **Settings** → **API**
2. Configure rate limiting as needed
3. Set up alerts for unusual activity

### 6.3 Database Backups
1. Go to **Settings** → **Database**
2. Enable automatic backups
3. Set backup retention period

## 🚀 Step 7: Production Checklist

### 7.1 Pre-Launch Verification
- [ ] Supabase database is set up and accessible
- [ ] All environment variables are set correctly
- [ ] Authentication works (signup, login, logout)
- [ ] User roles and permissions work
- [ ] Content creation and editing works
- [ ] Search functionality works
- [ ] Email notifications work
- [ ] All pages load correctly
- [ ] Mobile responsiveness works
- [ ] Dark/light mode toggle works

### 7.2 Performance Optimization
- [ ] Images are optimized
- [ ] Database queries are efficient
- [ ] CDN is configured (automatic with Vercel)
- [ ] Caching headers are set

### 7.3 SEO and Analytics
- [ ] Add Google Analytics (optional)
- [ ] Set up sitemap generation
- [ ] Configure meta tags
- [ ] Add Open Graph images

## 🛠️ Step 8: Post-Deployment

### 8.1 Monitor Your Application
1. Set up error tracking (Sentry, LogRocket, etc.)
2. Monitor performance with Vercel Analytics
3. Set up uptime monitoring

### 8.2 Regular Maintenance
1. Update dependencies monthly
2. Monitor Supabase usage and billing
3. Review security settings quarterly
4. Backup database regularly

### 8.3 Domain Setup (Optional)
1. Purchase a custom domain
2. Configure DNS settings
3. Update environment variables with new domain
4. Update Supabase redirect URLs

## 🆘 Troubleshooting

### Common Issues

**Build Errors:**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check environment variables are set correctly

**Database Connection Issues:**
- Verify Supabase URL and keys
- Check if database is accessible from your hosting platform
- Ensure RLS policies allow necessary operations

**Authentication Issues:**
- Check redirect URLs in Supabase settings
- Verify environment variables include correct domain
- Check email template configuration

**Performance Issues:**
- Enable database indexing for frequently queried fields
- Optimize images and assets
- Use Vercel Analytics to identify bottlenecks

## 📞 Support

If you encounter issues:
1. Check the [Supabase Documentation](https://supabase.com/docs)
2. Review [Vercel Documentation](https://vercel.com/docs)
3. Check application logs in your hosting platform
4. Review browser developer console for client-side errors

## 🎉 Success!

Once deployed, your Vachon UX Design Studio will be live with:
- ✅ Full user authentication and role management
- ✅ Dynamic content creation and editing
- ✅ Real-time search across all content
- ✅ Gradient gallery with favorites
- ✅ Blog and portfolio management
- ✅ Responsive design for all devices
- ✅ Production-ready performance and security

Your application URL will be: `https://your-project.vercel.app` (or your custom domain)

Login with your admin account to start managing content and users!