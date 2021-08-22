const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// configuration

const port = process.env.PORT || 3000;
const mongoConnection = require('./connection');

const connection = () => {
	mongoConnection()

	.then(result => {
		app.listen(port, () => {
			console.log('The server is running');

		})
	})

	.catch(err => {
		console.log('No Database Connection')
	})
}

connection();


// middle wares

const rootRouter = require('./routes/rootRouter');
const trackorderRouter = require('./routes/trackorderRouter');
const customersRouter = require('./routes/customersRouter');
const staffsRouter = require('./routes/staffsRouter');

// routes

app.use(rootRouter);
app.use(trackorderRouter);
app.use(customersRouter);
app.use(staffsRouter);
app.use((req,res) => {
	res.status(404).render('404', { tabTitle: 'Page 404' });
})

