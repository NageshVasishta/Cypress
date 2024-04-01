const cypress = require('cypress')
const marge = require('mochawesome-report-generator')
const { merge } = require('mochawesome-merge')
const fsextra = require("fs-extra")

fsextra.emptyDirSync("mochawesome-report")
cypress.run().then(
  () => {
    generateReport()
  },
  error => {
    generateReport()
    console.error(error)
    process.exit(1)
  }
)

function generateReport(options) {
  return merge(options).then(report => marge.create(report, options))
}