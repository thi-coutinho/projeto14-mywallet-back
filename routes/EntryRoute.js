import { Router } from "express";
import { delEntry, getEntries, saveEntry , updateEntry} from "../controllers/Entry.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { setEntryType } from "../middleware/setEntryType.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { entrySchema } from "../model/EntrySchema.js";

const entryRouter = Router()
entryRouter.use(authValidation)
entryRouter.get("/home",getEntries)
entryRouter.delete("/del/:entryId",delEntry)
entryRouter.use(validateSchema(entrySchema))
entryRouter.post("/nova-entrada",setEntryType('income'),saveEntry)
entryRouter.post("/nova-saida",setEntryType('expense'),saveEntry)
entryRouter.put("/update/:entryId",updateEntry)


export default entryRouter