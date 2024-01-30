import type {App} from "../config/app.config.ts";
import type {Context} from "../config/context.ts";
import {BaseRouter} from "./Base.router.ts";

export class AuthRouter extends BaseRouter {
	private static readonly BASE_PATH = '/auth';

	public mapRoutes( app: App ): void
	{
		app.get( AuthRouter.BASE_PATH + '/login', ( ctx: Context ) =>
		{
			return this.json( {register: 'login'}, 200 );
		} );

		app.get( AuthRouter.BASE_PATH + '/register', ( ctx: Context ) =>
		{
			return this.json( {register: 'login'}, 200 );
		} );
	}
}
