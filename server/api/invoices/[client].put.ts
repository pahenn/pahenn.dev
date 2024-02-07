import YAML from "yaml"
import fs from "fs"

export default defineEventHandler(async (event) => {
  const client = getRouterParam(event, "client")
  const invoice = await readBody(event)

  const yaml = YAML.stringify([invoice])
  try {
    fs.appendFileSync(
      `/Users/pahenn/Desktop/invoices/${client}.yaml`,
      yaml,
      "utf8"
    )
  } catch (err) {
    console.error(err)
  }
})
