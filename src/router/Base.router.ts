import {TemplateRenderer} from "../utils/renderer.utils.ts";

export class BaseRouter {
	protected readonly renderer: TemplateRenderer = new TemplateRenderer();

	public json<T>( data: T, status: number = 200 ): Response
	{
		return new Response( JSON.stringify( data ), {status, headers: {'Content-Type': 'application/json'}} );
	}

	public html( data: string, status: number = 200 ): Response
	{
		return new Response( data, {status, headers: {'Content-Type': 'text/html'}} );
	}
}
