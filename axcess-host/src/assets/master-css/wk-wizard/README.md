# Wk-wizard
# Create .npmrc file in your project folder
Paste this code into your .npmrc file

registry=https://wkaxcess.pkgs.visualstudio.com/_packaging/Axcess.Npm/npm/registry always-auth=true

# Install and run the auth helper
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false

vsts-npm-auth -config .npmrc

# Install Wk-wizard package
npm install wk-wizard@latest

# Dependencies

1) Wk-theme: Install via npm install wk-theme@latest

Note: you need to include following paths in your style.scss and main.scss file

# main.scss:
	@import 'node_modules/wk-theme/assets/main';

# style.scss:
	@import '../node_modules/wk-theme/assets/main';
	$font-path: '../node_modules/wk-theme/assets/fonts/';
	$icon-font-path: "../node_modules/wk-theme/assets/fonts/bootstrap/";

2) 	NG-Bootstrap : For Angular 5.0+ Install ng-bootstrap via: npm install --save @ng-bootstrap/ng-bootstrap
	NG-Bootstrap : For Angular 4.0 Install ng-bootstrap via: npm install --save @ng-bootstrap/ng-bootstrap@1.0.0-beta.2

# How to use wk-wizard package:

1) Install wk-wizard package

2) Install Dependencies

3) Use the "html" and "ts" code from code highlighter : http://livestyleguide.wkrainier.com/lsg2.0/#/wk-wizard/introduction

4) Import wizard module through node modules in your app.module.ts file : import WizardTabsetModule from 'node_modules/wk-wizard'
<br/>
imports: [
    WizardTabsetModule.forRoot()
  ]

#Demo

http://livestyleguide.wkrainier.com/lsg2.0/#/wk-wizard/introduction

# Further help
To get more help on installing package contact riyazpasha.shaik@wolterskluwer.com.