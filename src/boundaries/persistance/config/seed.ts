import {db} from "./db";
import * as schema from "./schema";
import {GuidV4} from "../../../utils/function.utils.ts";

await db.insert( schema.users ).values( [
	{
		id: GuidV4(),
		name: "Admin",
		role: "admin",
		creationDate: Date.now(),
		lastUpdate: Date.now(),
		email: "admin@root.com",
		password: "admin",
	},
] );

console.log( `Seeding complete.` );
