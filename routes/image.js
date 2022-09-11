import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/:id/images', async function (req, res) {
	try {
		const response = await fetch(`https://dog.ceo/api/breed/${req.params.id}/images`);
		const data = await response.json();
		console.log(data)
		res.status(200).json(data);	
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});

export default router;