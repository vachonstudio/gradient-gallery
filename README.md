# Vachon UX Design Studio

A modern UX design studio website built with Next.js, Supabase, and Tailwind CSS.

## 🚀 Demo Mode Quick Start

**Get started immediately with demo data:**

1. `npm install && npm run dev`
2. Open http://localhost:3000  
3. Explore as guest or login with demo admin: `vachon@demo.com`

The app runs in demo mode by default with mock authentication and data. To connect your real Supabase project, see the setup instructions below.

## Features

- **Portfolio Management**: Showcase UX/UI design projects with public/private access levels
- **Blog System**: Stories and articles with rich content blocks
- **Gradient Gallery**: Create, share, and favorite gradient collections
- **User Management**: Role-based access control (Subscriber, Editor, Admin, Super Admin)
- **Search**: Powerful search across all content types
- **Authentication**: Secure authentication with Supabase Auth
- **Responsive Design**: Mobile-first design with dark/light mode support

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **UI Components**: Radix UI, shadcn/ui
- **Deployment**: Vercel

## Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd vachon-ux-studio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials

### 4. Run database migrations
```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### 5. Start the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Database Schema

The application uses the following main tables:

- `profiles` - User profiles and roles
- `projects` - Portfolio projects
- `blog_posts` - Blog articles and stories
- `gradients` - Gradient collections
- `favorites` - User favorites across content types
- `role_requests` - Role upgrade requests
- `contact_submissions` - Contact form submissions

## Role System

- **Subscriber**: Basic access, can view public content
- **Editor**: Can create and edit content
- **Admin**: Can manage users and all content
- **Super Admin**: Full system access (vachon@gmail.com)

## Environment Variables

See `.env.local.example` for all required environment variables.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Database Setup for Production

1. Ensure your Supabase project is set up for production
2. Run migrations: `supabase db push`
3. Set up Row Level Security policies (included in migrations)
4. Configure email templates in Supabase Auth settings

## Content Management

### Adding Projects

1. Sign in as Editor or above
2. Navigate to Portfolio section
3. Use the inline editing features to create new projects

### Managing Users

1. Sign in as Admin or Super Admin
2. Navigate to User Management dashboard
3. Review and approve role requests

### Content Access Levels

- **Public**: Visible to everyone
- **Private**: Requires authentication
- **Premium**: Requires paid subscription (future feature)

## Development

### Project Structure
```
├── app/                  # Next.js app directory
├── components/           # React components
├── contexts/            # React contexts
├── lib/                 # Utility libraries
├── styles/              # Global styles
├── types/               # TypeScript types
├── utils/               # Utility functions
└── supabase/            # Database migrations
```

### Key Components

- `AuthContext`: Handles authentication and role management
- `SearchModal`: Global search functionality
- `GradientGallery`: Gradient creation and management
- `ProjectCard`: Portfolio project display
- `BlogPage`: Blog and stories management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, contact vachon@gmail.com