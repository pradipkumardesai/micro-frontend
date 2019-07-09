# Wk-common-components
# Create .npmrc file in your project folder
Paste this code into your .npmrc file

registry=https://wkaxcess.pkgs.visualstudio.com/_packaging/Axcess.Npm/npm/registry always-auth=true

# Install and run the auth helper
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false

vsts-npm-auth -config .npmrc

# Use Wk-common-components package
npm install wk-common-components@latest

Note: You need to include following paths in your main.scss file

# main.scss:
	@import 'node_modules/wk-common-components/src/assets/main';


#Dependencies

1) Install Wk-theme package via: npm install wk-theme@latest and add the following paths into your styles.scss file

Note: You need to include following paths in your style.scss and main.scss file

# main.scss:
	 @import 'node_modules/wk-theme/assets/main'

# style.scss:
	@import '../node_modules/wk-theme/assets/main';
	$font-path: '../node_modules/wk-theme/assets/fonts/';
	$icon-font-path: "../node_modules/wk-theme/assets/fonts/bootstrap/";

2) Install ng bootstrap

For Angular 5.0+ Install ng-bootstrap via: npm install --save @ng-bootstrap/ng-bootstrap
For Angular 4.0 Install ng-bootstrap via:npm install --save @ng-bootstrap/ng-bootstrap@1.0.0-beta.2




# Further help
To get more help on installing package contact riyazpasha.shaik@wolterskluwer.com.