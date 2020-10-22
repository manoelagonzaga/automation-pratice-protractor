# automation-pratice-protractor

## Dicas

1 - Para execução dos seus testes, inclue o path da sua spec no arquivo protractor.conf.js no item 'specs':

    Exemplo:
        specs: [
            './src/specs/meu-primeiro-teste.e2e-spec.ts'
        ]

2 - Execute o comando abaixo, através da linha de comando para rodar os testes:

    npx webdriver-manager update // atualiza os drivers para comunicação com o browser
    npm run e2e // executa as configurações do arquivo protractor.conf.js

3 - Quando automatizamos uma página que não é feita em angular, com o protractor, o parâmetro abaixo deve ser configurado como 'false' no início do teste, para que o framework não espere pelo carregamento dessas páginas.

    browser.waitForAngularEnabled(false);

4 - Utilize as funções de wait do protractor para aguardar uma página carregar.

5 - Caso tenha dúvidas sobre alguma função do protractor, utilize a documentação abaixo:

    https://www.protractortest.org/#/api

4 - Caso tenha dúvidas sobre os asserts do jasmine, utlize a documentação abaixo:

    https://jasmine.github.io/api/edge/matchers.html

5 - Caso precise consultar os seletores css que podem ser usados, utilize a documentação abaixo:

    https://developer.mozilla.org/pt-BR/docs/Web/CSS/:nth-of-type
