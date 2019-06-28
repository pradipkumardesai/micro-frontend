const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/axcess-tax/runtime.js',
        './dist/axcess-tax/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/axcess-tax.all.js')
    console.info('Angular Elements created successfully!')

})()