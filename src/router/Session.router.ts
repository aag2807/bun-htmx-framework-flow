import {BaseRouter} from "./Base.router.ts";
import type {App} from "../config/app.config.ts";
import type {Context} from "../config/context.ts";

export class SessionRouter extends BaseRouter {
	private static readonly BASE_PATH = '/session';

	public mapRoutes( app: App ): void
	{
		app.get( SessionRouter.BASE_PATH + '/home', async( ctx: Context ) =>
		{
			const htmlPage = await this.renderer.renderFile( "home.template.html", {} );
			return this.html( htmlPage );
		} );
	}
}
