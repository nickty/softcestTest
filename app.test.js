/** @format */

const app = require('./app');
const req = require('supertest');

it('Testing to see if Jest works', () => {
  req(app).get('/getBitcoinInfo').expect(200);
});
