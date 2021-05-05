# cypress_raghav

# Cypress

Web page
- https://www.cypress.io/

Install on Ubuntu
- https://github.com/nodesource/distributions/blob/master/README.md#deb
- sudo apt install npm
- npm install cypress (v adresari, kde chci poustet testy -> “/home/rp/cypress_raghav")
- install Visual Studio Code pres Ubuntu software
- install into VSC extension: Cypress Snippets, Cypress Helper
- https://docs.cypress.io/guides/tooling/IDE-integration#Writing-Tests -> jsconfig.json
.-
- You can now open Cypress by running: 
node_modules/.bin/cypress open (v adresari “/home/rp/cypress_raghav")

Your first test
- https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file
- https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell
 
 Cypress commands:
- https://docs.cypress.io/api/commands/
    
## Trainings:

### Cypress - introduction, command line run, integration with Jenkins
 https://www.youtube.com/watch?v=yM38NmF-LC4&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp


### Cypress - vseobecne Raghav Pal - HOTOVO
 Raghav Pav https://www.youtube.com/watch?v=CYcdT-tOvB0&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo
 

- Folder with project: /home/rp/cypress_raghav
- npm init -y
- npx cypress open -> otevreni cypress GUI
- testing page: example.cypress.io
- v souboru package.json jsou scripty, ktere je mozne poustet. Napr. npm run test
- Informace o package.json souboru: https://www.vzhurudolu.cz/prirucka/package-json

.-
- Assertions:
https://docs.cypress.io/guides/references/assertions
Assertions describe the desired state of your elements, your objects, and your application.
should contain
should have.

- Cypress reporting
https://testersdock.com/html-reports-cypress/
do souboru package.json pridan radek "pust_a_vygeneruj": "npm run test:cli; npm run create:html:report" -> spusti testy a vygeneruje html mochawsome report.
report je v adresari TestReport
spusteni: npm run pust_a_vygeneruj

- command line run
	- npx cypress run -> spusteni v command line
	- npx cypress run -spec "/home/rp/cypress_raghav/cypress/integration/my_firs_test.js" -> spusti specificky test
	- npx cypress run --browser chrome --headless -> pusti s Chrome
	- npx cypress open - > spusteni gui
	- npm run test -> spusti script "test", ktery je definovany v package.json
	- vic informaci: https://docs.cypress.io/guides/guides/command-line#cypress-run


### Cypress  command line run - HOTOVO
	https://www.youtube.com/watch?v=QnmlDr037d8&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=6 
	
### Cypress reporting (Mochawsome)- HOTOVO
	https://testersdock.com/html-reports-cypress/
       
###  Cypress  integration with Jenkins - HOTOVO
        https://www.youtube.com/watch?v=UIlknGqAoiE&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=20
- Jenkins GUI: http://127.0.0.1:8080/ 
- Admin user: rp 
- Admin password l..m.. 
- sudo chmod -R 757 /home/rp/cypress_raghav -> aby mohl Jenkins zapisovat do /home/rp/cypress_raghav/
- install NodeJS plugin into Jenkins
- Jenkins -> New item -> Freestyle project -> Advance -> Use custom workspace (/home/rp/cypress_raghav) -> Provide Node & npm bin/ folder to PATH -> Add a build step->Execute shell (cypress run - spusti Cypress testy, npm run pust_a_vygeneruj - spusti Cypress testy a vygeneruje Mochawsome report)

###  Cypress integration with GitHub/Lab - TODO 

- integration with GitHub/Lab
- simple web server: 
- https://github.com/http-party/http-server 
- npx http-server -p 5555 -> web na 127.0.0.1, v adresari odkus se web server spousti udelat soubor index.html

.....

- explanation of GitHub Actions
https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions

- explanation Cypress GitHub Actions
https://docs.cypress.io/guides/continuous-integration/introduction

		- Official Cypress Github Action
		https://github.com/marketplace/actions/cypress-io
		
- Action file
	- cypress_raghav/.github/workflows/cypresse_CI.yml

- disable video saving to run via Actions
	- "video": false -> cypress.json
	-  cypress run --record false

- upload mochawsome report -> upload Artifacts
 	- https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts
	- https://github.com/actions/upload-artifact

	
https://docs.cypress.io/guides/continuous-integration/introduction#Setting-up-CI
https://docs.cypress.io/guides/continuous-integration/github-actions#Basic-Setup

https://github.com/cypress-io/
https://github.com/cypress-io/github-action
