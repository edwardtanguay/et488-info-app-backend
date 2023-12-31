import express from 'express';
import * as config from './config';

const app = express();

app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName()
	});
});

app.listen(config.getPort(), () => {
	console.log(`listening at http://localhost:${config.getPort()}`);
});