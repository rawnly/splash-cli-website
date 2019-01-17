#! /usr/local/bin node

const express   = require('express');
const next      = require('next');
const got       = require('got');
const { JSDOM } = require('jsdom')

const dev    = process.env.NODE_ENV !== 'production'
const app    = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.port || 3000;

const picOfTheDay = () => new Promise((resolve, reject) => {
    got('https://unsplash.com')
    .then(({ body: html }) => {
        const { window: { document } } = new JSDOM(html);
        const links = document.querySelectorAll("a");

        const picture = Object.keys(links)
            .map(key => links[key])
            .filter(el => /Photo of the Day/i.test(el.innerHTML))
            .map(link => link.href)
            .shift()
            .match(/[a-zA-Z0-9_-]{11}/g)[0];

        resolve(picture)
    })
    .catch(reject)
})



app.prepare()
    .then(() => {
        const server = express()

        server.get('/download', (req, res) => res.redirect('https://github.com/splash-cli/splash-cli/releases/latest'))
        
        server.get('/api/day', (req, res) => {
            picOfTheDay()
            .then(id => {
                got(`https://api.unsplash.com/photos/${id}?client_id=a70f2ffae3634a7bbb5b3f94998e49ccb2e85922fa3215ccb61e022cf57ca72c`)
                .then(({ body: data }) => res.send(JSON.parse(data)))
                .catch(error => {
                    console.error(error.stack);
                    res.send(error).withStatus(500);    
                })
            })
            .catch(error => {
                console.error(error.stack);
                res.send(error).withStatus(500);
            })
        })

        server.get('*', (req, res) => handle(req, res))


        server.listen(3002, (err) => {
            if (err) throw err
            console.log(`Ready on port ${3002}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

