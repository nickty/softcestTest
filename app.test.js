/** @format */

const app = require('./app');
const req = require('supertest');

it('Testing the url endpoints working', () => {
  req(app).get('/getBitcoinInfo').expect(200);
});
