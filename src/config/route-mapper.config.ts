import type {App} from "./app.config.ts";
import {AuthRouter} from "../router/Auth.router.ts";

export class RouterMapper {
	public mapRoutes( app: App ): void
	{
		new AuthRouter().mapRoutes( app );
	}
}
