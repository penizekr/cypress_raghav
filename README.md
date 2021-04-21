# cypress_raghav


    Web page
    https://www.cypress.io/

    Install on Ubuntu
    https://github.com/nodesource/distributions/blob/master/README.md#deb
    sudo apt install npm
    npm install cypress
    Visual Studio Code
    install into VSC extension: Cypress Snippets, Cypress Helper
    https://docs.cypress.io/guides/tooling/IDE-integration#Writing-Tests -> jsconfig.json


    You can now open Cypress by running: 
    node_modules/.bin/cypress open

    Your first test
    https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file


    https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell
    
    Cypress commands:
    https://docs.cypress.io/api/commands/
    
    Trainings:
    https://www.youtube.com/watch?v=yM38NmF-LC4&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp
        command line run
        integration with Jenkins
        
    https://testersdock.com/html-reports-cypress/
        cypress reports
    
Prehled skoleni

Virtualbox: cypress\

Cypress\
        vseobecne - HOTOVO\
        Raghav Pav https://www.youtube.com/watch?v=CYcdT-tOvB0&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo

Cypress\
        command line run - HOTOVO\
	https://www.youtube.com/watch?v=QnmlDr037d8&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=6 \
        integration with Jenkins - TODO\
        https://www.youtube.com/watch?v=UIlknGqAoiE&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=20

Cypress\
	reporting (Mochawsome)- HOTOVO\
	https://testersdock.com/html-reports-cypress/
    
    
    
Vseobecne Raghav Pal

https://www.youtube.com/watch?v=CYcdT-tOvB0&list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo

Folder with project: /home/rp/cypress_raghav

npm init -y

npx cypress open

testing page:
example.cypress.io

Assertions:
https://docs.cypress.io/guides/references/assertions
Assertions describe the desired state of your elements, your objects, and your application.
should contain
should have.

Cypress reporting\
https://testersdock.com/html-reports-cypress/
\
do souboru package.json pridan radek "pust_a_vygeneruj": "npm run test:cli; npm run create:html:report" -> spusti testy a vygeneruje html mochawsome report.\
report je v adresari TestReport\

command line run\
npx cypress run -> spusteni v command line\
npx cypress run -> spusteni v command line + otevre GUI\
npx cypress run -spec "/home/rp/cypress_raghav/cypress/integration/my_firs_test.js" -> spusti specificky test\
npx cypress run --browser chrome --headless -> pusti s Chrome
npx cypress open - > spusteni gui\
\
npm run test -> spusti script "test", ktery je definovany v package.json\

vic informaci: https://docs.cypress.io/guides/guides/command-line#cypress-run\

integration with Jenkins\
https://www.youtube.com/watch?v=UIlknGqAoiE&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=20 \
\
v souboru package.json jsou scripty, ktere je mozne poustet. Napr. npm run test\






