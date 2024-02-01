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
		const headerPartial = await Bun.file( `${import.meta.dir}/../templates/partials/header.partial.html` );
		Sqrl.templates.define( 'header', Sqrl.compile( await headerPartial.text() ) );
		const sidebarPartial = await Bun.file( `${import.meta.dir}/../templates/partials/sidebar.partial.html` );
		Sqrl.templates.define( 'sidebar', Sqrl.compile( await sidebarPartial.text() ) );
		const navbarPartial = await Bun.file( `${import.meta.dir}/../templates/partials/navbar.partial.html` );
		Sqrl.templates.define( 'navbar', Sqrl.compile( await navbarPartial.text() ) );
	}
}
