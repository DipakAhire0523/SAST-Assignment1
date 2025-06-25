# Secure Node.js Application

A production-ready Node.js application with comprehensive security pipeline integration, featuring automated security scanning, dependency checking, and container vulnerability analysis.

## Features

- **Express.js Web Framework** with security-first approach
- **Comprehensive Security Headers** using Helmet.js
- **Rate Limiting** to prevent abuse
- **Input Validation** and sanitization
- **JWT Authentication** with secure password hashing
- **CORS Protection** with configurable origins
- **Security Middleware** for additional protection
- **Automated Security Pipeline** with GitHub Actions

## Security Tools Integrated

- **TruffleHog** - Secret scanning
- **Talisman** - Additional secret detection
- **CodeQL** - Static code analysis
- **Trivy** - Container vulnerability scanning
- **npm audit** - Dependency vulnerability checking
- **ESLint Security Plugin** - Security-focused linting

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

## API Endpoints

### Health Check
- `GET /health` - Application health status

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Protected Routes
- `GET /api/users/profile` - Get user profile (requires authentication)

### Utility
- `POST /api/echo` - Echo service with input validation

## Security Features

### Headers
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection

### Authentication
- Secure password hashing with bcrypt (12 rounds)
- JWT with expiration
- Input validation and sanitization

### Rate Limiting
- 100 requests per 15 minutes per IP
- Configurable via environment variables

### Input Validation
- All inputs validated and sanitized
- Protection against XSS and injection attacks

## Docker Usage

1. **Build the image:**
   ```bash
   npm run docker:build
   ```

2. **Run the container:**
   ```bash
   npm run docker:run
   ```

## Security Pipeline

The GitHub Actions workflow includes:

1. **Dependency Scanning** - Checks for vulnerable npm packages
2. **Secret Scanning** - Multiple tools to detect secrets in code
3. **Static Code Analysis** - CodeQL for finding security vulnerabilities
4. **Container Scanning** - Trivy for Docker image vulnerabilities
5. **Security Linting** - ESLint with security plugins

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |
| `JWT_SECRET` | JWT signing secret | Required in production |
| `ALLOWED_ORIGINS` | CORS allowed origins | `http://localhost:3000` |

## Testing

Run the full test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## Security Best Practices Implemented

- ✅ Secure headers with Helmet.js
- ✅ Rate limiting
- ✅ Input validation and sanitization
- ✅ Secure password hashing
- ✅ JWT with expiration
- ✅ CORS protection
- ✅ Error handling without information leakage
- ✅ Security middleware
- ✅ Automated security scanning
- ✅ Container security
- ✅ Dependency vulnerability checking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run security tests: `npm run lint:security`
5. Submit a pull request

The security pipeline will automatically run on all pull requests.

## License

MIT License - see LICENSE file for details.