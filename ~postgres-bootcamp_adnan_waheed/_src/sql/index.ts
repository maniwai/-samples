import path from 'path'
import fs from 'fs'

export const createDatabase = fs.readFileSync(path.join(__dirname, './createDatabase.sql')).toString();