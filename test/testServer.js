const chai = require('chai');
const request = require('request');
const { expect } = chai;

const baseUrl = 'http://localhost:3000/api/cats';

describe('GET / - Test Endpoint', function () {
    it('should return a JSON response with GET', function (done) {
        request.get(
            {
                url: `${baseUrl}/`, // Correct URL for the GET endpoint
                json: true, // Expecting JSON response
            },
            function (error, response, body) {
                if (error) {
                    return done(error);
                }

                try {
                    expect(response.statusCode).to.equal(200); // HTTP 200 OK

                    // Ensure the response has expected structure
                    expect(body).to.have.property('statusCode', 200);
                    expect(body).to.have.property('message', 'success');
                    expect(body).to.have.property('data');
                    expect(body.data).to.be.an('array'); // Expecting an array

                    done(); // Test successful
                } catch (assertionError) {
                    console.error('Unexpected response:', body); // Debugging assistance
                    done(assertionError);
                }
            }
        );
    });
});

// Test for POST request
// Data for the POST request

describe('POST /api/cats - Add a new cat', function () {
    it('should create a new cat with POST', function (done) {
        const newCat = {
            title: 'Cat in the Hat',
            path: 'path/to/image.jpg',
            link: 'http://example.com',
            description: 'A description of the cat',
        };

        request.post(
            {
                url: baseUrl,
                json: true, // Indicates the request body is JSON
                body: newCat, // The data to send in the POST request
            },
            function (error, response, body) {
                if (error) {
                    return done(error); // Handle errors
                }

                try {
                    console.log('Response:', response.statusCode, body); // Debugging

                    // Check for the correct HTTP status code
                    expect(response.statusCode).to.equal(201); // Expecting 201 Created

                    // Check the response structure
                    expect(body).to.have.property('statusCode', 201);
                    expect(body).to.have.property('message', 'success');
                    expect(body).to.have.property('data'); // Data for the created cat

                    done(); // Complete the test
                } catch (assertionError) {
                    done(assertionError); // Handle assertion errors
                }
            }
        );
    });
});