import { ProjectDocument } from '~prismicio-types-d'

export function resolveDocumentPagination(
  currentUid: string,
  documents: ProjectDocument[]
) {
  const uids = documents.map((doc) => doc.uid)
  const currentIndex = uids.indexOf(currentUid)
  const nextDocument =
    currentIndex < uids.length - 1 ? documents[currentIndex + 1] : documents[0]

  return { nextDocument }
}
