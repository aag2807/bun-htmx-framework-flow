import {Serve} from 'bun'
import {RouterMapper} from "./src/config/route-mapper.config.ts";
import {RouterConfiguration} from "./src/config/router-configuration.config.ts";
import {App} from "./src/config/app.config.ts";

const routeConfig = new RouterConfiguration( new App(), new RouterMapper() );
routeConfig
	.init();

