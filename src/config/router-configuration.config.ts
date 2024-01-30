import type {RouterMapper} from "./route-mapper.config.ts";
import type {App} from "./app.config.ts";

export class RouterConfiguration {
	constructor( private readonly app: App, private readonly routeMapper: RouterMapper )
	{
		this.app.get('/', () => {
			return new Response('Hello World', { status: 200 });
		} );
		this.routeMapper.mapRoutes( app );
	}

	public init()
	{
		console.log(`Server is running on port ${this.app.port}...`)
		Bun.serve( this.app );
	}

	public setPort( port: number = 3000 )
	{
		this.app.port = port;
		console.log(`Server port is set to ${port}...\n`)
		return this;
	}
}
