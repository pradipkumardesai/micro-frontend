const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/axcess-dashboard/runtime.js',
        './dist/axcess-dashboard/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/axcess-dashboard.all.js')
    console.info('Angular Elements created successfully!')

})()