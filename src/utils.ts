export function resolveDocumentPagination(currentUid: string, uids: string[]) {
  const currentIndex = uids.indexOf(currentUid)
  const previousUid =
    currentIndex > 0 ? uids[currentIndex - 1] : uids[uids.length - 1]
  const nextUid =
    currentIndex < uids.length - 1 ? uids[currentIndex + 1] : uids[0]

  return { previousUid, nextUid }
}
