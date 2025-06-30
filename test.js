// test.js
const request = require('supertest');
const { app, server } = require('./index'); // Adjust path if needed

describe('GET /', function () {
  // Close the server after tests to prevent open handles
  after(() => {
    server.close();
  });

  it('should return 200 OK and "Hello, World!"', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done);
  });
});

