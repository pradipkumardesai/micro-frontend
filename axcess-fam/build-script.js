const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/axcess-fam/runtime.js',
        './dist/axcess-fam/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/axcess-fam.all.js')
    console.info('Angular Elements created successfully!')

})()