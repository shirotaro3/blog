import fs from 'fs'

export function listDir(baseDir: string): string[] {
  return fs.readdirSync(baseDir, { withFileTypes: true }).flatMap((dirent) => {
    return dirent.isDirectory() ? [dirent.name] : []
  })
}