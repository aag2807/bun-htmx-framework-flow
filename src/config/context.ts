export class Context {
	public path;
	public method;
	public params: URLSearchParams;
	public query;
	public body;
	public redirect: ( url: string, status: number ) => Response;

	constructor( path, method, params, query, body = null )
	{
		this.path = path;
		this.method = method;
		this.params = params;
		this.query = query;
		this.body = body;
	}
}
