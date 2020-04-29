const express = require('express');
const bodyParser = require('body-parser');
const graphQLHttp = require('express-graphql');
const mongoose = require('mongoose');

const isAuth = require('./middleware/is-auth');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('request received');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(isAuth);

app.use('/graphql',
    graphQLHttp({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
);

// mongoose.connect(
//     'mongodb+srv://dev:mef6GkY9ujTVYU0o@cluster0-wkbh7.mongodb.net/test?retryWrites=true&w=majority',
//     { useNewUrlParser: true }
// ).then(() => {
//     const PORT = process.env.PORT || 8000;
//     console.log(`Started server at port ${PORT}`);
//     app.listen(PORT);
// }).catch(err => {
//     console.log('Could not connect to mongo db');
//     console.log(err);
// });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(PORT, () => {
    console.log(`Started server at port ${PORT}`);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            statusCode: error.status
        }
    });
});