const request = require('supertest');
const app = require('../src/app');

describe('App Tests', () => {
  describe('Health Check', () => {
    test('GET /health should return 200', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
    });
  });

  describe('API Routes', () => {
    test('GET /api should return API info', async () => {
      const response = await request(app)
        .get('/api')
        .expect(200);
      
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('endpoints');
    });

    test('POST /api/echo should validate and echo message', async () => {
      const testMessage = 'Hello, World!';
      
      const response = await request(app)
        .post('/api/echo')
        .send({ message: testMessage })
        .expect(200);
      
      expect(response.body.echo).toBe(testMessage);
    });

    test('POST /api/echo should reject invalid input', async () => {
      await request(app)
        .post('/api/echo')
        .send({ message: '' })
        .expect(400);
    });
  });

  describe('Authentication', () => {
    const testUser = {
      email: 'test@example.com',
      password: 'Test123456'
    };

    test('POST /api/auth/register should create new user', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);
      
      expect(response.body.email).toBe(testUser.email);
    });

    test('POST /api/auth/login should authenticate user', async () => {
      // First register the user
      await request(app)
        .post('/api/auth/register')
        .send(testUser);

      // Then login
      const response = await request(app)
        .post('/api/auth/login')
        .send(testUser)
        .expect(200);
      
      expect(response.body).toHaveProperty('token');
    });
  });

  describe('Security Headers', () => {
    test('Should include security headers', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.headers).toHaveProperty('x-content-type-options');
      expect(response.headers).toHaveProperty('x-frame-options');
    });
  });

  describe('404 Handler', () => {
    test('Should return 404 for non-existent routes', async () => {
      const response = await request(app)
        .get('/non-existent-route')
        .expect(404);
      
      expect(response.body).toHaveProperty('error', 'Endpoint not found');
    });
  });
});