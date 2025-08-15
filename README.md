# Diego Surita's Personal Website

This is the personal website of Diego Surita, built with **Next.js 15** and **Payload CMS 3.5** using TypeScript and PostgreSQL.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router
- **Headless CMS**: Payload CMS for content management
- **Database**: PostgreSQL with connection pooling
- **Type Safety**: Full TypeScript implementation
- **Security**: Built-in security headers and CSP
- **Performance**: Optimized builds with code splitting
- **Testing**: E2E and integration tests with Playwright and Vitest
- **Docker**: Complete containerization setup

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **CMS**: Payload CMS 3.5 with Lexical editor
- **Database**: PostgreSQL
- **Styling**: CSS with custom properties
- **Testing**: Playwright (E2E), Vitest (Integration)
- **Deployment**: Docker, Vercel-ready

## 📋 Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- pnpm 9+ (recommended) or npm
- PostgreSQL 17+ (or use Docker)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/diegosurita/diegosurita.github.io.git
cd diegosurita.github.io
pnpm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Update the `.env` file with your values:
```env
DATABASE_URI=postgresql://postgres:postgres@localhost:5432/diegosurita-dev
PAYLOAD_SECRET=your-very-secure-secret-key-here
```

### 3. Database Setup

**Option A: Local PostgreSQL**
```bash
# Make sure PostgreSQL is running
# Create database: diegosurita-dev
```

**Option B: Docker (Recommended)**
```bash
pnpm run docker:up
```

### 4. Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.
Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Integration tests only
pnpm run test:int

# E2E tests only  
pnpm run test:e2e
```

## 🏗 Building

```bash
# Production build
pnpm build

# Start production server
pnpm start
```

## 🐳 Docker Development

The project includes a complete Docker setup:

```bash
# Start all services (app + PostgreSQL)
pnpm run docker:up

# Stop services
pnpm run docker:down

# View logs
pnpm run docker:logs

# Restart services
pnpm run docker:restart
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public website pages
│   ├── (payload)/           # Payload CMS admin
│   └── my-route/           # Custom API routes
├── collections/            # Payload collections
│   ├── Users.ts
│   └── Media.ts
├── components/             # Reusable components
└── payload.config.ts       # Payload configuration
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run all tests
- `pnpm docker:up` - Start Docker services

## 🔒 Security Features

- **Security Headers**: CSP, HSTS, X-Frame-Options, etc.
- **Environment Validation**: Required env vars validation
- **Type Safety**: Strict TypeScript configuration
- **Content Security Policy**: Configured CSP headers
- **HTTPS Enforcement**: HSTS headers for production

## 🚀 Deployment

The project is configured for deployment on:

- **Vercel**: Zero-config deployment
- **Docker**: Production-ready containers
- **Any Node.js hosting**: Standard Next.js build

### Vercel Deployment

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Docker Deployment

```bash
# Build production image
docker build -t diegosurita-website .

# Run container
docker run -p 3000:3000 diegosurita-website
```

## 📝 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URI` | PostgreSQL connection string | Yes | - |
| `PAYLOAD_SECRET` | Secret key for Payload CMS | Yes | - |
| `PAYLOAD_PUBLIC_SERVER_URL` | Public URL for the app | No | `http://localhost:3000` |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or issues, please:

1. Check the [Payload CMS documentation](https://payloadcms.com/docs)
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Open an issue in this repository

---

Built with ❤️ by [Diego Surita](https://github.com/diegosurita)