const request = require('supertest');
const app = require('./index.js');  // ✅ corrected path

describe('GET /', function () {
  it('should return 200 OK and "Hello, World!"', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done);
  });
});

