import * as Sqrl from 'squirrelly'
import type {HTML} from "./type.utils.ts";

export class TemplateRenderer {
	public render<T extends any>( template: HTML, data: T ): HTML
	{
		return Sqrl.render( template, data );
	}

	public async renderFile( fileName: string, data: any ): Promise<HTML>
	{
		const file = await Bun.file( `${import.meta.dir}/../templates/${fileName}` );
		const content = await file.text()
		return Sqrl.render( content, data );
	}
}
