import {sqliteTable, text, integer} from "drizzle-orm/sqlite-core";

export const users = sqliteTable( "user", {
	id: text( "id" ).primaryKey(),
	name: text( "name" ),
	role: text( "role" ),
	creationDate: integer( "creation_date" ),
	lastUpdate: integer( "last_update" ),
	email: text( "email" ),
	password: text( "password" )
} );
