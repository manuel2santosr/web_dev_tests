const express = require('express')
const app = express()

// app.use((request, response) => {
//     console.log('Welcome to First App!')
//     response.send('<h1>Hello! Welcome!</h1>')
// })

app.get('/', (req, rsp) => {
    rsp.send('<h1>Home Page</h1>')
})

app.get('/r/:subreddit/:postID', (req, rsp) => {
    const {subreddit, postID } = req.params
    rsp.send(`<h1>Post ${postID} on the ${subreddit} subreddit :)</h1>`)
})

app.get('/cats', (req, rsp) => {
    rsp.send('MEOW!')
})

app.post('/cats', (req, rsp) => {
    rsp.send('POST MEOW!')
})

app.get('/dog', (req, rsp) => {
    rsp.send('WOOF!')
})

app.get('/search', (req, rsp) => {
    const { q } = req.query

    if (!q) {
        rsp.send('Nothing found is nothing searched')
    } else {
        rsp.send(`<h1>Searching for ${q}</h1>`)
    }
})

app.get('*', (req, rsp) => {
    rsp.send('Unknown page')
})

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})