import type {RouterMapper} from "./route-mapper.config.ts";
import type {App} from "./app.config.ts";
import chalk from 'chalk'

export class RouterConfiguration {
	constructor( private readonly app: App, private readonly routeMapper: RouterMapper )
	{
		this.mapStaticRoutes();
		this.routeMapper.mapRoutes( app );
	}

	public init()
	{
		//@ts-ignore
		console.log( chalk.yellow( `Server is running on port ${this.app.port}...` ) )
		Bun.serve( this.app );
	}

	public setPort( port: number = 3000 )
	{
		this.app.port = port;
		//@ts-ignore
		console.log( chalk.yellow( `Server port set to ${port}` ) )
		return this;
	}

	private mapStaticRoutes()
	{
		// TODO: need to implement static files;
	}
}
