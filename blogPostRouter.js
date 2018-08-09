const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPost} = require('./models');

function ipsum(){
	return (
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' + 
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
    'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
}

BlogPosts.create(
	'Hey All', lorem(), 'Donny Trails')
BlogPosts.create(
	'Whats up everybody?', lorem(), 'Jimmy Smalls')

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});


router.post('/', (req, res) => {
	const requiredFields = ['title', 'content', 'author'];
	for (let i=0; i < requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`
			console.error(message);
			return res.status(400).send(message);
		}
	}
    const item = BlogPost.create(req.body.title, req.body.content, req.body.author)
    res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
	BlogPost.delete(req.params.id);
	console.log(`Deleted blog post \`${req.params.id}\``);
	res.status(204).end();
});

router.put('/:id', (req, res) => {
	const requiredFields = ['title', 'content', 'author'];
	for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field = req.body)) {
    	const message = `Missing \`${field}\` in request body`
    	console.error(message);
    	return res.status(400).send(message);
      }
	}
	if (req.params.id ! == req.body.id) {
		const message = (
			`Request path id (${req.params.id}) and request body id` +
			`(${req.body.id}) must match`);
		console.error(message);
		return res.status(400).send(message);
	}
	console.log(`Updating blog post \`${req.params.id}\``);
	const updatedItems = BlogPost.update({
		id: req.params.id,
		title: req.params.title,
		content: req.params.content,
		author: req.params.author
	});
	res.status(204).end();
})

module.exports = router;










