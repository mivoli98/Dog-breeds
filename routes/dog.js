import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

// const fetch = (...args) =>
// 	import('node-fetch').then(({default: fetch}) => fetch(...args));

// router for all dog
router.get(`/`, async function (req, res) {
	try {
		const response = await fetch('https://dog.ceo/api/breeds/list/all');
		const data = await response.json();
		console.log(data)
		res.status(200).json(data);	
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});



export default router;