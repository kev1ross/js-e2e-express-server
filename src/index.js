const server = require('./server');

const port = process.env.PORT || 3000;

server.create()
    .then(app => {
        app.listen(port, () => {
            console.log(`Server has started on port ${port}!`);
            console.log('Horray');
        });
    }).catch(err => console.log(err));