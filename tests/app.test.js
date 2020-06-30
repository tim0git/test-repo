process.env.NODE_ENV = 'test';
const request = require('supertest');
const knex = require('../db/connection');
const app = require('../app');

describe('app', () => {
  beforeEach(() => knex.seed.run());

  afterAll(() => knex.destroy());

  describe('/venue', () => {
    it('status: 201 - responds with a venue object', () => {
      return request(app)
        .post('/api/venue')
        .send({
          venue_name: 'The Fox and Hound',
          venue_logo:
            'https://www.logolynx.com/images/logolynx/s_b6/b623e7a11bc1a3f606bcfd925ef8e409.png'
        })
        .expect(201)
        .then(({ body }) => {
          expect(body.venue).toHaveProperty('venue_id');
          expect(body.venue).toHaveProperty('venue_name');
          expect(body.venue).toHaveProperty('venue_logo');
        });
    });

    it('status: 201 - responds with the venue object that was posted and a generated venue_id', () => {
      return request(app)
        .post('/api/venue')
        .send({
          venue_name: 'The Fox and Hound',
          venue_logo:
            'https://www.logolynx.com/images/logolynx/s_b6/b623e7a11bc1a3f606bcfd925ef8e409.png'
        })
        .expect(201)
        .then(({ body }) => {
          expect(body.venue).toHaveProperty('venue_id', 3);
          expect(body.venue).toHaveProperty('venue_name', 'The Fox and Hound');
          expect(body.venue).toHaveProperty(
            'venue_logo',
            'https://www.logolynx.com/images/logolynx/s_b6/b623e7a11bc1a3f606bcfd925ef8e409.png'
          );
        });
    });

    it('status: 400 - responds with bad request when posted an invalid request body', () => {
      return request(app)
        .post('/api/venue')
        .send({
          venue_logo:
            'https://www.logolynx.com/images/logolynx/s_b6/b623e7a11bc1a3f606bcfd925ef8e409.png'
        })
        .expect(400)
        .then(({ body }) => {
          expect(body).toHaveProperty('errors', [
            {
              location: 'body',
              msg: 'venue_name is required',
              param: 'venue_name'
            }
          ]);
        });
    });
  });

  describe('/management', () => {
    it('status: 201 - responds with a admin object', () => {
      return request(app)
        .post('/api/management')
        .send({
          admin_email: 'james.bob@gmail.com',
          venue_id: 2
        })
        .expect(201)
        .then(({ body }) => {
          expect(body.admin).toHaveProperty('admin_id');
          expect(body.admin).toHaveProperty('admin_email');
          expect(body.admin).toHaveProperty('venue_id');
        });
    });

    it('status: 400 - responds with bad request when posted an invalid email', () => {
      return request(app)
        .post('/api/management')
        .send({
          admin_email: 'james.bob',
          venue_id: 2
        })
        .then(({ body }) => {
          expect(body).toHaveProperty('errors', [
            {
              location: 'body',
              msg: 'Please provide a valid email address',
              param: 'admin_email',
              value: 'james.bob'
            }
          ]);
        });
    });

    it('status: 400 - responds with bad request when posted an invalid request body', () => {
      return request(app)
        .post('/api/management')
        .send({
          admin_email: 'james.bob@gmail.com'
        })
        .expect(400)
        .then(({ body }) => {
          expect(body).toHaveProperty('errors', [
            { location: 'body', msg: 'venue_id is required', param: 'venue_id' }
          ]);
        });
    });
  });
});
