const request = require("supertest");
const server = require("../server");


describe('API server', () => {
    let api;
    let testAnime = {
        'title': 'Bleach'
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(3000, () => console.log('Test server running on port 3000'))
    })

    afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })

    test('it responds to get /cats with status 200', done => { // we will want to call `done` when the test is complete so make sure you name it
        request(api) // let supertest know the server it is requesting to (note we assigned our server to the variable `api` in the setup)
            .get('/anime') // perform a get request to the endpoint of '/anime'
            .expect(200, done) // assert that the response status will be 200 and pass `done` so expect can call it when it is... done!
    })    
});
