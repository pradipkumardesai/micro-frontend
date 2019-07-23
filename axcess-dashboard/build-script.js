const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/axcess-dashboard/runtime-es2015.js',
        './dist/axcess-dashboard/main-es2015.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/axcess-dashboard.all.js')
    console.info('Angular Elements created successfully!')

})()