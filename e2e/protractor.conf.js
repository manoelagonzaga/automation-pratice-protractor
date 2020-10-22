const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {

  allScriptsTimeout: 16000,
  directConnect: true,
  specs: [
    './src/specs/example.e2e-spec.ts',
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['lang=pt-BR'],
      prefs: {
        'download': {
          'prompt_for_download': false
        },
        'intl': { accept_languages: "pt-BR" }
      }
    }
  },

  onPrepare: function () {

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    //organiza os resultados no Prompt de Comando
    jasmine.getEnv().addReporter(new SpecReporter(
      {
        displayFailuresSummary: true,
        displayFailedSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));
  },

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    print: function () { }
  }
};


