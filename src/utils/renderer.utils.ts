import * as Sqrl from 'squirrelly'
import type {HTML} from "./type.utils.ts";

export class TemplateRenderer {

	constructor()
	{
		this.setPartials()
			.then()
			.catch( console.error )
	}

	public render<T extends any>( template: HTML, data: T ): HTML
	{
		return Sqrl.render( template, data );
	}

	public async renderFile<T = any>( fileName: string, data: any = {} ): Promise<HTML>
	{
		const file = await Bun.file( `${import.meta.dir}/../templates/${fileName}` );
		const content = await file.text()
		return Sqrl.render( content, data );
	}

	private async setPartials()
	{
		const file = await Bun.file( `${import.meta.dir}/../templates/partials/header.partial.html` );
		const content = await file.text()
		Sqrl.templates.define( 'header', Sqrl.compile( content ) );
	}
}
