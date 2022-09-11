import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import cors from 'cors';

import dogRoutes from './routes/dog.js';
import imageRouters from './routes/image.js'

const app = express();
const port = 3011;

// app.use(bodyParser.json({ limit: "30mb", extend: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extend: true }));
// app.use(cors());

app.use(cors({origin: '*'}));

app.use('/', dogRoutes);
app.use('/breed', imageRouters);

// app.use(async (ctx, next) => {
// 	await next();
// 	const rt = ctx.response.get('X-Response-Time');
// 	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// app.use(async (ctx, next) => {
// 	const start = Date.now();
// 	await next();
// 	const ms = Date.now() - start;
// 	ctx.set('X-Response-Time', `${ms}ms`);
// });

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
