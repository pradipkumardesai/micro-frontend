const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/wk-admin-manager/runtime.js',
        './dist/wk-admin-manager/polyfills.js',
        './dist/wk-admin-manager/main.js'
    ]

    await fs.ensureDir('angularElements')

    await concat(files, 'angularElements/wk-component.js')
    console.info('Angular Elements created successfully!')

})()