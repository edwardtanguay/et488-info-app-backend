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

app.get('/frameworks', (req, res) => {
	res.json([
		{
			name: 'React',
			url: 'https://reactjs.org/',
			description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
		},
		{
			name: 'Angular',
			url: 'https://angular.io/',
			description: 'A platform and framework for building client-side applications with HTML, CSS, and JavaScript/TypeScript.'
		},
		{
			name: 'Vue.js',
			url: 'https://vuejs.org/',
			description: 'A progressive JavaScript framework for building user interfaces. It is incrementally adaptable and integrates well with other libraries.'
		},
		{
			name: 'Next.js',
			url: 'https://nextjs.org/',
			description: 'A React-based framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.'
		},
		{
			name: 'Svelte',
			url: 'https://svelte.dev/',
			description: 'A radical new approach to building user interfaces. It shifts the work from the browser to the build step, resulting in faster runtime performance.'
		},
	])
});

app.listen(config.getPort(), () => {
	console.log(`listening at http://localhost:${config.getPort()}`);
});