const fs = require("fs")
const glob = require("glob")
const path = require("path")
const urljoin = require("url-join")

// Hacky script atm.

const base_url = process.env.BASE_URL
const api_root = process.env.API_ROOT
const doc_root = process.env.DOC_ROOT

console.log(base_url)
console.log(api_root)
console.log(doc_root)

function absURIToFullURL(uri) {
  return urljoin(base_url, api_root, uri);
}
function makeHAL(self_uri, children) {
  var result = {
    "_links": {
      "self": { "href": absURIToFullURL(self_uri) },
      "curies": [{ "name": "ea", "href": urljoin(base_url, doc_root, "/rels/{rel}"), "templated": true }],
    }
  }
  
  for (const child of children) {
    result["_links"][`ea:${child.name}`] = { "href": absURIToFullURL(child.href) }
  }
  return result;
}

const db = []

const dataFiles = glob.sync(path.join(__dirname, "../src/data/*.json"))
for (const fpath of dataFiles) {
  const fname = path.basename(fpath, path.extname(fpath))
  const content = fs.readFileSync(fpath, { encoding: "utf-8" })
  db.push({ "name": fname, "content": JSON.parse(content), "href": `${fname}.json` })
}

const rootDir = path.join(__dirname, "../public", api_root)
fs.mkdirSync(rootDir, { recursive: true })

const indexPath = path.join(rootDir, "index.json")
const indexData = makeHAL("/index.json", db)
fs.writeFileSync(indexPath, JSON.stringify(indexData))

