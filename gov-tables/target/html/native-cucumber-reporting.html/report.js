$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/cfop.feature");
formatter.feature({
  "name": "Consulta de CFOP\u0027S",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Ver a quantidade de CFOP cadastradas",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que eu quero uma listagem de CFOP\u0027s",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_quero_uma_listagem_de_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter um total de 692 cfops",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_um_total_de_cfops(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um \u003ccfop\u003e",
  "keyword": "Dado "
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.step({
  "name": "Eu devo ter como retorno a \u003cdescricao\u003e",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "cfop",
        "descricao"
      ]
    },
    {
      "cells": [
        "1102",
        "\"Compra para comercialização\""
      ]
    },
    {
      "cells": [
        "2151",
        "\"Transferência para industrialização\""
      ]
    },
    {
      "cells": [
        "3251",
        "\"Compra de energia elétrica para distribuição ou comercialização\""
      ]
    },
    {
      "cells": [
        "5102",
        "\"Venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "6101",
        "\"Venda de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "7101",
        "\"Venda de produção do estabelecimento\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 1102",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Compra para comercialização\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 2151",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Transferência para industrialização\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 3251",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica para distribuição ou comercialização\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 5102",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 6101",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 7101",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_tenha_um(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a listagem destas CFOP\u0027s",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_listagem_destas_CFOP_s()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});