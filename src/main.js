const core = require("@actions/core")
const fs = require("fs-extra")
const path = require("path")
const url = require("url")
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  // async function giveFileNames() {
  //   return await glob("sitemaps/**/*.xml", { ignore: "node_modules/**" })
  // }
  try {
    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    core.debug(new Date().toTimeString())

    // const __filename = url.fileURLToPath(import.meta.url)
    // const __dirname = path.dirname(__filename)
    // Set outputs for other workflow steps to use
    // core.setOutput("time", new Date().toTimeString())
    core.debug(__dirname)
    core.debug(__filename)
    // const xmlPaths = await giveFileNames()
    // let ekbar = true
    // let output
    // let urls = []
    // for await (const path of xmlPaths) {
    //   const xml = await fs.readFile(path, "utf-8")
    //   const result = await xml2js(xml, { ignoreComment: true, compact: true })
    //   if (ekbar === true) {
    //     output = result
    //     ekbar = false
    //   }
    //   urls = urls.concat(result.urlset.url)
    // }

    // core.setOutput(JSON.stringify(output, null, 2))
    // output.urlset.url = urls
    // const result = await js2xml(output, { spaces: 2, compact: true })
    // await fs.watchFile("sitemap.xml", result)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
