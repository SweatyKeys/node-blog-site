
const express = required('express');
const morgan = required('morgan');

const app = express();

const blogPostRouter = require('./blogPostRouter');

app.use(morgan('common'));

// app.get('/'), (req, res) => {
//   res.sendFile(__dirname )
// })

app.use('/blog-post', blogPostRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Your app is listening on port ${process.env.PORT || 8080}`)
})