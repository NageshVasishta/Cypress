const cypress = require('cypress')
const marge = require('mochawesome-report-generator')
const { merge } = require('mochawesome-merge')
const fsextra = require("fs-extra")

fsextra.emptyDirSync("mochawesome-report")
cypress.run({
  record : true,
  key : "d72e0988-8f03-4194-acae-4dd6a5e6a1c1"
  
  }).then(
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