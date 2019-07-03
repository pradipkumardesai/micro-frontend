const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/axcess-identity/runtime.js',
        './dist/axcess-identity/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/axcess-identity.all.js')
    console.info('Angular Elements for axcess identity created successfully!')

})()