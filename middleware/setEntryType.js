export function setEntryType(entryType) {
    return (_, res, next) => {
        res.locals.entryType = entryType
        next()
    }
}