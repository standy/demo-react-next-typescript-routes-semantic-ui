import {createServer} from 'http';
import routes from './routes';
import * as next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

app.prepare()
	.then(() => {
		createServer(routes.getRequestHandler(app))
			.listen(port, (err) => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${port}`)
			})
	});
