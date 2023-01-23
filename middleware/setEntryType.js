export function setEntryType(entryType) {
    return (req, res, next) => {
        res.locals.entryType = entryType
        next()
    }
}