import type {App} from "../config/app.config.ts";
import type {Context} from "../config/context.ts";
import {BaseRouter} from "./Base.router.ts";

export class AuthRouter extends BaseRouter {
	private static readonly BASE_PATH = '/auth';

	public mapRoutes( app: App ): void
	{
		app.get('/', async (ctx: Context) => {
			return this.vanillaRedirect( '/auth/login' );
		})

		app.get( AuthRouter.BASE_PATH + '/login', async( ctx: Context ) =>
		{
			const htmlPage = await this.renderer.renderFile( "login.template.html", {} );
			return this.html( htmlPage );
		} );

		app.post( AuthRouter.BASE_PATH + '/login', async( ctx: Context ) =>
		{
			// TODO: login logic
			return this.htmxRedirect( '/auth/home' );
		} );

		app.get( AuthRouter.BASE_PATH + '/home', async( ctx: Context ) =>
		{
			const htmlPage = await this.renderer.renderFile( "home.template.html", {} );
			return this.html( htmlPage );
		} );

		app.get( AuthRouter.BASE_PATH + '/forgot-password', async( ctx: Context ) =>
		{
			const htmlPage = await this.renderer.renderFile( "/partials/forgot-password.partial.html", {} );
			return this.html( htmlPage );
		} );

		app.post( AuthRouter.BASE_PATH + '/forgot-password', async( ctx: Context ) =>
		{

			return this.htmxRedirect( '/auth/login' );
		});

		app.get( AuthRouter.BASE_PATH + '/register', async( ctx: Context ) =>
		{
			const htmlPage = await this.renderer.renderFile( "/partials/register.partial.html", {} );
			return this.html( htmlPage );
		} );
	}
}
