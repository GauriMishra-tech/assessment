# assessment
npm init -y
npm install cypress
npm install typescript
npx tsc --init --types cypress --lib dom,es6
npx cypress open

## What is Cypress?
 
- A testing tool focused on making end-to-end tests easier to build
- Cypress makes setting up, writing, running and debugging tests easy
- Fast, easy and reliable testing for anything that runs in a browser
 
## How to Install
 
Clone the repo to a local folder and run:
 
```npm
npm install cypress --save-dev
```
 
## How to Run
 
```npm
npm run cy:test
```
 
## How to open
 
```npm
npm run cy:start
```
 
## Enviroment info
 
All setings in the common enviroment will be overridden by enviroment, tenant and country specific settings.
 
enviroment = system, where the tests are run (prd, stg, dev)
tenant = device which should be used (mobile, desktop)
country = country specific settings/testdata
 
- common.general < common.tenant < common.country < enviroment.general < enviroment.tenant < enviroment.country
 
### Prettier in Visual Studio Code
 
run in VS Code command console - open with CTRL + P
 
```
ext install esbenp.prettier-vscode