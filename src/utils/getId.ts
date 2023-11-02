export const getId = (url: string): string => {
  const urlChunks = url.split('/')
  const id = urlChunks[urlChunks.length -2]
  return id
}