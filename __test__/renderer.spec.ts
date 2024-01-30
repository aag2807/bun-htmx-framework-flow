import {it, describe, expect, beforeEach} from 'bun:test';
import {TemplateRenderer} from "../src/utils/renderer.utils.ts";

describe( 'template renderer', () =>
{
	let renderer: TemplateRenderer;

	beforeEach( () =>
	{
		renderer = new TemplateRenderer();
	} );

	it( 'should instantiate properly', () =>
	{
		expect( new TemplateRenderer() ).toBeTruthy();
	} )

	it( 'should parse properly with data', () =>
	{
		const template = 'Hello, {{it.name}}';
		const data = {name: 'world'};

		const result = renderer.render( template, data );

		expect( result ).toBe( 'Hello, world' );
	} )

	it( 'should parse properly for file and parse it with data', async() =>
	{
			const fileName = 'test.template.html';
			const data = { name: 'Alvaro' };

			const result = await renderer.renderFile( fileName, data );

			expect( result ).toInclude( 'my name is Alvaro' );
	} );
} )
