import fs from 'fs'
import path from 'path'

export function listFiles(baseDir: string, ext?: string): string[] {
  const pathname = path.dirname(baseDir)
  console.log('path', pathname)
  console.log(__dirname)
  return []
  return fs.readdirSync(baseDir, { withFileTypes: true }).flatMap((dirent) => {
    const path = `${baseDir}/${dirent.name}`
    if (dirent.isFile()) {
      return ext && !dirent.name.endsWith(ext) ? [] : [path]
    }
    return listFiles(path, ext)
  })
}
