const securityMiddleware = (req, res, next) => {
  // Remove sensitive headers
  res.removeHeader('X-Powered-By');
  
  // Add custom security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Log security-relevant requests
  if (req.path.includes('auth') || req.path.includes('admin')) {
    console.log(`Security-relevant request: ${req.method} ${req.path} from ${req.ip}`);
  }
  
  next();
};

module.exports = { securityMiddleware };