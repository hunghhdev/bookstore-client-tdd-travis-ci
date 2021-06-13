const environmentUrls = new Map()

environmentUrls.set('localhost', 'http://localhost:8080')
environmentUrls.set('book-store-client-tdd-travis.herokuapp.com', 'https://book-store-tdd-travis.herokuapp.com/')

export default environmentUrls.get(window.location.hostname)
