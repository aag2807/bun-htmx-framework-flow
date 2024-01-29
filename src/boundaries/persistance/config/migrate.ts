import {migrate} from "drizzle-orm/bun-sqlite/migrator";
import {db} from "./db.ts";

await migrate( db, {migrationsFolder: "./drizzle"} );
