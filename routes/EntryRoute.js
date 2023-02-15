import { Router } from "express";
import { delEntry, getEntries, saveEntry } from "../controllers/Entry.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { setEntryType } from "../middleware/setEntryType.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { entrySchema } from "../model/EntrySchema.js";

const entryRouter = Router()
entryRouter.use(authValidation)
entryRouter.get("/home",getEntries)
entryRouter.delete("/del/:id",delEntry)
entryRouter.use(validateSchema(entrySchema))
entryRouter.post("/nova-entrada",setEntryType('income'),saveEntry)
entryRouter.post("/nova-saida",setEntryType('expense'),saveEntry)


export default entryRouter