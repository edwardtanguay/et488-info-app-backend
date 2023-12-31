import express from 'express';

const app = express();

const getPort = (): number => {
	return 4888;
}

app.get('/', (req, res) => {
	res.json({
		appName: "et488-info-app-backend"
	});
});

app.listen(getPort(), () => {
	console.log(`listening at http://localhost:${getPort()}`);
});