const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

mongoose.connect(
	'mongodb+srv://risyardi:test@cluster0.rw7we.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(port, () => {
	console.log(`now listening for request on port ${port}`);
});
