import fs from "node:fs"
import nunjucks from "nunjucks"

const template = fs.readFileSync("index.njk", 'utf-8')
nunjucks.configure({ autoescape: true })
const html = nunjucks.renderString(template, { siapa: process.env.SIAPA })
fs.writeFileSync("index.html", html);
