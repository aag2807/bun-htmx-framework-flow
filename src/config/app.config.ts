import {Serve} from "bun";
import {Context} from "./context.ts";

type ResponseFunction = ( ctx?: Context ) => Response;

export type Routes = {
	'GET': Record<string, ResponseFunction>,
	'POST': Record<string, ResponseFunction>,
	'PUT': Record<string, ResponseFunction>,
	'DELETE': Record<string, ResponseFunction>,
}

const INITIAL_ROUTE_VALUES: Routes = {
	'GET': {},
	'POST': {},
	'PUT': {},
	'DELETE': {},
}

export class App implements Serve<any> {
	private static routes: Routes = INITIAL_ROUTE_VALUES;
	public port: number = 3000;

	public async fetch( request ): Promise<any>
	{
		const url = new URL( request.url );
		const path = url.pathname;
		const method = request.method;
		const body = !!request.body ? await Bun.readableStreamToJSON( request.body ) : null;
		const cb = App.routes[method][path];
		const ctx = new Context( path, method, url.searchParams, body );
		ctx.redirect = request.redirect

		if( cb )
		{
			return await cb( ctx );
		}
		else
		{
			return new Response( 'Not Found', {status: 404} );
		}
	}

	public get( path: string, callback: ResponseFunction )
	{
		App.routes['GET'][path] = callback;
	}

	public post( path: string, callback: ResponseFunction )
	{
		App.routes['POST'][path] = callback;
	}

	public put( path: string, callback: ResponseFunction )
	{
		App.routes['PUT'][path] = callback;
	}

	public delete( path: string, callback: ResponseFunction )
	{
		App.routes['DELETE'][path] = callback;
	}
}
