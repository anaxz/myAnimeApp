const request = require("supertest")
const server = require("../server")


describe('API server', () => {
    let api
    let testAnime = {
        "id": 1,
        "title": "Bleach",
        "genre": "shounen"
    }

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () => console.log('Test server running on port 5000'))
    })

    

    // afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
    //     // close the server, then run done
    //     console.log('Gracefully stopping test server');
    //     api.close(done) // `done` will be invoked when the `api.close` function is complete
    // })

    test('it responds to post /anime with status 201 and returns a new anime with an ID', done => {
        let testAnime = { "id":4, "title": "Haikyu!!", "genre": "sports" } // Create some data to pass
        request(api)
            .post('/anime') // start a post request via supertest
            .send(testAnime) // send the testCat data as the request body 
            // .expect(201) // assert that the response status will be 201
            .expect({id: 4, ...testAnime}, done) // assert that the response body will include an object with the passed data and an added ID
    })
})
