const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjFkZGY1NWMwLTc3NTEtNDRhYi04ZjI4LTEzYWQ3YWRkNTBlOC0xNjkxMDgyMTM5NzA4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTJmYzJlNzMtMzAyMS00NWU3LWIxOTctYzQzYTBjMDE3NDVmIiwidHlwZSI6InQifQ.twfiHCL5f-0s3ybsXkZ0fFf2aIBfrjPsQJskM16G534'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
