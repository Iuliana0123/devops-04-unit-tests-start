/*eslint linebreak-style: ["error", "windows"]*/
const request = require('supertest');
const app = require('../../app');
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');

describe('Product routes test', () => {

    it("should return with body products", async () => {

        const products = [{ id: 1 }, { id: 2 }, { id: 3 }];

        fetch.mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(products))));  //promesse (asyncrone à 100%)
        const response = await request(app).get('/products');
        expect(response.body).toEqual(products);
        expect(response.statusCode).toBe(200);
    });
});