export class Context {
	public path;
	public method;
	public params;
	public query;
	public body;
	constructor( path, method, params, query, body = null )
	{
		this.path = path;
		this.method = method;
		this.params = params;
		this.query = query;
		this.body = body;
	}
}
