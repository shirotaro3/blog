import fs from 'fs'
import matter from 'gray-matter'

export function getFileContent(filePath: string): { data: any, content: string } {
  const fileContent = fs.readFileSync(filePath)
  return matter(fileContent)
}