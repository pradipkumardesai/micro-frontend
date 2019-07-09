# Wk-theme
## Create .npmrc file in your project folder

Paste this code into your .npmrc file 

registry=https://wkaxcess.pkgs.visualstudio.com/_packaging/Axcess.Npm/npm/registry
always-auth=true


## Install and run the auth helper

npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false

vsts-npm-auth -config .npmrc

## Use Wk-theme package

npm install wk-theme@latest

Note: you need to include following paths in your style.scss file

@import '../node_modules/wk-theme/assets/main';

$font-path: '../node_modules/wk-theme/assets/fonts/';

$icon-font-path: "../node_modules/wk-theme/assets/fonts/bootstrap/";

Note: you need to include following paths in your main.scss file

@import 'node_modules/wk-theme/assets/main';
Note: wk-theme package is the dependency for all the common and custom components.

#Demo

http://livestyleguide.wkrainier.com/lsg2.0/#/wk_themes/introduction

## Further help

To get more help on installing package contact riyazpasha.shaik@wolterskluwer.com.
