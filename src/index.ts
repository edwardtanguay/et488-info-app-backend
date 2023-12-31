import express from 'express';
import * as config from './config';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName()
	});
});

app.listen(config.getPort(), () => {
	console.log(`listening at http://localhost:${config.getPort()}`);
});