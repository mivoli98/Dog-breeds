import express from 'express';
import cors from 'cors';

import dogRoutes from './routes/dog.js';
import imageRouters from './routes/image.js'

const app = express();
const port = 3011;


app.use(cors({origin: '*'}));

app.use('/', dogRoutes);
app.use('/breed', imageRouters);


app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
