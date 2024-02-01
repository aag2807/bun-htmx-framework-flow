import type {App} from "./app.config.ts";
import {AuthRouter} from "../router/Auth.router.ts";
import {SessionRouter} from "../router/Session.router.ts";

export class RouterMapper {
	public mapRoutes( app: App ): void
	{
		new AuthRouter().mapRoutes( app );
		new SessionRouter().mapRoutes( app );
	}
}
