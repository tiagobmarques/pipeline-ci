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
        "1000",
        "\"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO ESTADO\""
      ]
    },
    {
      "cells": [
        "1100",
        "\"COMPRAS PARA INDUTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "1101",
        "\"Compra para industrialização\""
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
        "1111",
        "\"Compra para industrialização de mercadoria recebida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "1113",
        "\"Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "1116",
        "\"Compra para industrialização originada de encomenda para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "1117",
        "\"Compra para comercialização originada de encomenda para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "1118",
        "\"Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "1120",
        "\"Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\""
      ]
    },
    {
      "cells": [
        "1121",
        "\"Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\""
      ]
    },
    {
      "cells": [
        "1122",
        "\"Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente\""
      ]
    },
    {
      "cells": [
        "1124",
        "\"Industrialização efetuada por outra empresa\""
      ]
    },
    {
      "cells": [
        "1125",
        "\"Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria\""
      ]
    },
    {
      "cells": [
        "1126",
        "\"Compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "1128",
        "\"Compra para utilização na prestação de serviço sujeita ao ISSQN\""
      ]
    },
    {
      "cells": [
        "1131",
        "\"Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "1132",
        "\"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização\""
      ]
    },
    {
      "cells": [
        "1135",
        "\"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização.\""
      ]
    },
    {
      "cells": [
        "1150",
        "\"TRANSFERÊNCIAS PARA INDUSTRIAZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "1151",
        "\"Transferência para industrialização\""
      ]
    },
    {
      "cells": [
        "1152",
        "\"Transferência para comercialização\""
      ]
    },
    {
      "cells": [
        "1153",
        "\"Transferência de energia elétrica para distribuição\""
      ]
    },
    {
      "cells": [
        "1154",
        "\"Transferência para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "1159",
        "\"Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "1200",
        "\"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO, DE TERCEIROS OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "1201",
        "\"Devolução de venda de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "1202",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "1203",
        "\"Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "1204",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "1205",
        "\"Anulação de valor relativo à prestação de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "1206",
        "\"Anulação de valor relativo à prestação de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "1207",
        "\"Anulação de valor relativo à venda de energia elétrica\""
      ]
    },
    {
      "cells": [
        "1208",
        "\"Devolução de produção do estabelecimento, remetida em transferência\""
      ]
    },
    {
      "cells": [
        "1209",
        "\"Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência\""
      ]
    },
    {
      "cells": [
        "1212",
        "\"Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "1213",
        "\"Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "1214",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "1215",
        "\"Devolução de fornecimento de produção do estabelecimento de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "1216",
        "\"Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "1250",
        "\"COMPRAS DE ENERGIA ELÉTRICA\""
      ]
    },
    {
      "cells": [
        "1251",
        "\"Compra de energia elétrica para distribuição ou comercialização\""
      ]
    },
    {
      "cells": [
        "1252",
        "\"Compra de energia elétrica por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "1253",
        "\"Compra de energia elétrica por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "1254",
        "\"Compra de energia elétrica por estabelecimento prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "1255",
        "\"Compra de energia elétrica por estabelecimento prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "1256",
        "\"Compra de energia elétrica por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "1257",
        "\"Compra de energia elétrica para consumo por demanda contratada\""
      ]
    },
    {
      "cells": [
        "1300",
        "\"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "1301",
        "\"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "1302",
        "\"Aquisição de serviço de comunicação por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "1303",
        "\"Aquisição de serviço de comunicação por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "1304",
        "\"Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "1305",
        "\"Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "1306",
        "\"Aquisição de serviço de comunicação por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "1350",
        "\"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "1351",
        "\"Aquisição de serviço de transporte para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "1352",
        "\"Aquisição de serviço de transporte por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "1353",
        "\"Aquisição de serviço de transporte por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "1354",
        "\"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "1355",
        "\"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "1356",
        "\"Aquisição de serviço de transporte por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "1360",
        "\"Aquisição de serviço de transporte por contribuinte substituto em relação ao serviço de transporte.\""
      ]
    },
    {
      "cells": [
        "1400",
        "\"ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\""
      ]
    },
    {
      "cells": [
        "1401",
        "\"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1403",
        "\"Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1406",
        "\"Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1407",
        "\"Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1408",
        "\"Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1409",
        "\"Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1410",
        "\"Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1411",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1414",
        "\"Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1415",
        "\"Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "1450",
        "\"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\""
      ]
    },
    {
      "cells": [
        "1451",
        "\"Entrada de animal - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1452",
        "\"Entrada de insumo - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1453",
        "\"Retorno do animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1454",
        "\"Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1455",
        "\"Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1456",
        "\"Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "1500",
        "\"ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\""
      ]
    },
    {
      "cells": [
        "1501",
        "\"Entrada de mercadoria recebida com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "1503",
        "\"Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "1504",
        "\"Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "1505",
        "\"Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\""
      ]
    },
    {
      "cells": [
        "1506",
        "\"Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação\""
      ]
    },
    {
      "cells": [
        "1550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\""
      ]
    },
    {
      "cells": [
        "1551",
        "\"Compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "1552",
        "\"Transferência de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "1553",
        "\"Devolução de venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "1554",
        "\"Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "1555",
        "\"Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\""
      ]
    },
    {
      "cells": [
        "1556",
        "\"Compra de material para uso ou consumo\""
      ]
    },
    {
      "cells": [
        "1557",
        "\"Transferência de material para uso ou consumo\""
      ]
    },
    {
      "cells": [
        "1600",
        "\"CRÉDITOS E RESSARCIMENTOS DE ICMS\""
      ]
    },
    {
      "cells": [
        "1601",
        "\"Recebimento, por transferência, de crédito de ICMS\""
      ]
    },
    {
      "cells": [
        "1602",
        "\"Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS\""
      ]
    },
    {
      "cells": [
        "1603",
        "\"Ressarcimento de ICMS retido por substituição tributária\""
      ]
    },
    {
      "cells": [
        "1604",
        "\"Lançamento do crédito relativo à compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "1605",
        "\"Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa.\""
      ]
    },
    {
      "cells": [
        "1650",
        "\"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "1651",
        "\"Compra de combustível ou lubrificante para industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "1652",
        "\"Compra de combustível ou lubrificante para comercialização\""
      ]
    },
    {
      "cells": [
        "1653",
        "\"Compra de combustível ou lubrificante por consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "1657",
        "\"Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "1658",
        "\"Transferência de combustível e lubrificante para industrialização\""
      ]
    },
    {
      "cells": [
        "1659",
        "\"Transferência de combustível e lubrificante para comercialização\""
      ]
    },
    {
      "cells": [
        "1660",
        "\"Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "1661",
        "\"Devolução de venda de combustível ou lubrificante destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "1662",
        "\"Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "1663",
        "\"Entrada de combustível ou lubrificante para armazenagem\""
      ]
    },
    {
      "cells": [
        "1664",
        "\"Retorno de combustível ou lubrificante remetido para armazenagem\""
      ]
    },
    {
      "cells": [
        "1900",
        "\"OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES E SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "1901",
        "\"Entrada para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "1902",
        "\"Retorno de mercadoria remetida para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "1903",
        "\"Entrada de mercadoria remetida para industrialização e não aplicada no referido processo\""
      ]
    },
    {
      "cells": [
        "1904",
        "\"Retorno de remessa para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "1905",
        "\"Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "1906",
        "\"Retorno de mercadoria remetida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "1907",
        "\"Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "1908",
        "\"Entrada de bem por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "1909",
        "\"Retorno de bem remetido por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "1910",
        "\"Entrada de bonificação, doação ou brinde\""
      ]
    },
    {
      "cells": [
        "1911",
        "\"Entrada de amostra grátis\""
      ]
    },
    {
      "cells": [
        "1912",
        "\"Entrada de mercadoria ou bem recebido para demonstração\""
      ]
    },
    {
      "cells": [
        "1913",
        "\"Retorno de mercadoria ou bem remetido para demonstração\""
      ]
    },
    {
      "cells": [
        "1914",
        "\"Retorno de mercadoria ou bem remetido para exposição ou feira\""
      ]
    },
    {
      "cells": [
        "1915",
        "\"Entrada de mercadoria ou bem recebido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "1916",
        "\"Retorno de mercadoria ou bem remetido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "1917",
        "\"Entrada de mercadoria recebida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "1918",
        "\"Devolução de mercadoria remetida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "1919",
        "\"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "1920",
        "\"Entrada de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "1921",
        "\"Retorno de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "1922",
        "\"Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "1923",
        "\"Entrada de mercadoria recebida do vendedor remetente, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "1924",
        "\"Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "1925",
        "\"Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "1926",
        "\"Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação\""
      ]
    },
    {
      "cells": [
        "1931",
        "\"Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (Ajuste SINIEF 03/04)\""
      ]
    },
    {
      "cells": [
        "1932",
        "\"Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "1933",
        "\"Aquisição de serviço tributado pelo ISSQN.(ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "1934",
        "\"Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "1949",
        "\"Outra entrada de mercadoria ou prestação de serviço não especificada\""
      ]
    },
    {
      "cells": [
        "2000",
        "\"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DE OUTROS ESTADOS\""
      ]
    },
    {
      "cells": [
        "2100",
        "\"COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "2101",
        "\"Compra para industrialização\""
      ]
    },
    {
      "cells": [
        "2102",
        "\"Compra para comercialização\""
      ]
    },
    {
      "cells": [
        "2111",
        "\"Compra para industrialização de mercadoria recebida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "2113",
        "\"Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "2116",
        "\"Compra para industrialização originada de encomenda para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "2117",
        "\"Compra para comercialização originada de encomenda para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "2118",
        "\"Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "2120",
        "\"Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\""
      ]
    },
    {
      "cells": [
        "2121",
        "\"Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\""
      ]
    },
    {
      "cells": [
        "2122",
        "\"Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente\""
      ]
    },
    {
      "cells": [
        "2124",
        "\"Industrialização efetuada por outra empresa\""
      ]
    },
    {
      "cells": [
        "2125",
        "\"Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria\""
      ]
    },
    {
      "cells": [
        "2126",
        "\"Compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "2128",
        "\"Compra para utilização na prestação de serviço sujeita ao ISSQN\""
      ]
    },
    {
      "cells": [
        "2131",
        "\"Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "2132",
        "\"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização.\""
      ]
    },
    {
      "cells": [
        "2135",
        "\"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização.\""
      ]
    },
    {
      "cells": [
        "2150",
        "\"TRANSFERÊNCIAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\""
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
        "2152",
        "\"Transferência para comercialização\""
      ]
    },
    {
      "cells": [
        "2153",
        "\"Transferência de energia elétrica para distribuição\""
      ]
    },
    {
      "cells": [
        "2154",
        "\"Transferência para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "2159",
        "\"Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "2200",
        "\"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "2201",
        "\"Devolução de venda de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "2202",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "2203",
        "\"Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "2204",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "2205",
        "\"Anulação de valor relativo à prestação de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "2206",
        "\"Anulação de valor relativo à prestação de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "2207",
        "\"Anulação de valor relativo à venda de energia elétrica\""
      ]
    },
    {
      "cells": [
        "2208",
        "\"Devolução de produção do estabelecimento, remetida em transferência\""
      ]
    },
    {
      "cells": [
        "2209",
        "\"Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência\""
      ]
    },
    {
      "cells": [
        "2212",
        "\"Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "2213",
        "\"Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "2214",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "2215",
        "\"Devolução de fornecimento de produção do estabelecimento de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "2216",
        "\"Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "2250",
        "\"COMPRAS DE ENERGIA ELÉTRICA\""
      ]
    },
    {
      "cells": [
        "2251",
        "\"Compra de energia elétrica para distribuição ou comercialização\""
      ]
    },
    {
      "cells": [
        "2252",
        "\"Compra de energia elétrica por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "2253",
        "\"Compra de energia elétrica por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "2254",
        "\"Compra de energia elétrica por estabelecimento prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "2255",
        "\"Compra de energia elétrica por estabelecimento prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "2256",
        "\"Compra de energia elétrica por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "2257",
        "\"Compra de energia elétrica para consumo por demanda contratada\""
      ]
    },
    {
      "cells": [
        "2300",
        "\"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "2301",
        "\"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "2302",
        "\"Aquisição de serviço de comunicação por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "2303",
        "\"Aquisição de serviço de comunicação por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "2304",
        "\"Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "2305",
        "\"Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "2306",
        "\"Aquisição de serviço de comunicação por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "2350",
        "\"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "2351",
        "\"Aquisição de serviço de transporte para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "2352",
        "\"Aquisição de serviço de transporte por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "2353",
        "\"Aquisição de serviço de transporte por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "2354",
        "\"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "2355",
        "\"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "2356",
        "\"Aquisição de serviço de transporte por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "2400",
        "\"ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUÇÃO TRIBUTÁRIA\""
      ]
    },
    {
      "cells": [
        "2401",
        "\"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2403",
        "\"Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2406",
        "\"Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2407",
        "\"Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2408",
        "\"Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2409",
        "\"Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2410",
        "\"Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2411",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2414",
        "\"Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2415",
        "\"Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "2450",
        "\"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\""
      ]
    },
    {
      "cells": [
        "2451",
        "\"Entrada de animal - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2452",
        "\"Entrada de insumo - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2453",
        "\"Retorno do animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2454",
        "\"Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2455",
        "\"Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2456",
        "\"Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "2500",
        "\"ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\""
      ]
    },
    {
      "cells": [
        "2501",
        "\"Entrada de mercadoria recebida com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "2503",
        "\"Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "2504",
        "\"Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "2505",
        "\"Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento\""
      ]
    },
    {
      "cells": [
        "2506",
        "\"Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação\""
      ]
    },
    {
      "cells": [
        "2550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\""
      ]
    },
    {
      "cells": [
        "2551",
        "\"Compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "2552",
        "\"Transferência de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "2553",
        "\"Devolução de venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "2554",
        "\"Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "2555",
        "\"Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\""
      ]
    },
    {
      "cells": [
        "2556",
        "\"Compra de material para uso ou consumo\""
      ]
    },
    {
      "cells": [
        "2557",
        "\"Transferência de material para uso ou consumo\""
      ]
    },
    {
      "cells": [
        "2600",
        "\"CRÉDITOS E RESSARCIMENTO DE ICMS\""
      ]
    },
    {
      "cells": [
        "2603",
        "\"Ressarcimento de ICMS retido por substituição tributária\""
      ]
    },
    {
      "cells": [
        "2650",
        "\"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETROLÉO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "2651",
        "\"Compra de combustível ou lubrificante para industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "2652",
        "\"Compra de combustível ou lubrificante para comercialização\""
      ]
    },
    {
      "cells": [
        "2653",
        "\"Compra de combustível ou lubrificante por consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "2657",
        "\"Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "2658",
        "\"Transferência de combustível e lubrificante para industrialização\""
      ]
    },
    {
      "cells": [
        "2659",
        "\"Transferência de combustível e lubrificante para comercialização\""
      ]
    },
    {
      "cells": [
        "2660",
        "\"Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "2661",
        "\"Devolução de venda de combustível ou lubrificante destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "2662",
        "\"Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "2663",
        "\"Entrada de combustível ou lubrificante para armazenagem\""
      ]
    },
    {
      "cells": [
        "2664",
        "\"Retorno de combustível ou lubrificante remetido para armazenagem\""
      ]
    },
    {
      "cells": [
        "2900",
        "\"OUTRAS ENTRADAS DE MERCADORIA OU AQUISIÇÕES DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "2901",
        "\"Entrada para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "2902",
        "\"Retorno de mercadoria remetida para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "2903",
        "\"Entrada de mercadoria remetida para industrialização e não aplicada no referido processo\""
      ]
    },
    {
      "cells": [
        "2904",
        "\"Retorno de remessa para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "2905",
        "\"Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "2906",
        "\"Retorno de mercadoria remetida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "2907",
        "\"Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "2908",
        "\"Entrada de bem por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "2909",
        "\"Retorno de bem remetido por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "2910",
        "\"Entrada de bonificação, doação ou brinde\""
      ]
    },
    {
      "cells": [
        "2911",
        "\"Entrada de amostra grátis\""
      ]
    },
    {
      "cells": [
        "2912",
        "\"Entrada de mercadoria ou bem recebido para demonstração\""
      ]
    },
    {
      "cells": [
        "2913",
        "\"Retorno de mercadoria ou bem remetido para demonstração\""
      ]
    },
    {
      "cells": [
        "2914",
        "\"Retorno de mercadoria ou bem remetido para exposição ou feira\""
      ]
    },
    {
      "cells": [
        "2915",
        "\"Entrada de mercadoria ou bem recebido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "2916",
        "\"Retorno de mercadoria ou bem remetido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "2917",
        "\"Entrada de mercadoria recebida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "2918",
        "\"Devolução de mercadoria remetida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "2919",
        "\"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "2920",
        "\"Entrada de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "2921",
        "\"Retorno de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "2922",
        "\"Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\""
      ]
    },
    {
      "cells": [
        "2923",
        "\"Entrada de mercadoria recebida do vendedor remetente, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "2924",
        "\"Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "2925",
        "\"Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "2931",
        "\"Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "2932",
        "\"Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "2933",
        "\"Aquisição de serviço tributado pelo ISSQN. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "2934",
        "\"Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "2949",
        "\"Outra entrada de mercadoria ou prestação de serviço não especificado\""
      ]
    },
    {
      "cells": [
        "3000",
        "\"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO EXTERIOR\""
      ]
    },
    {
      "cells": [
        "3100",
        "\"COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "3101",
        "\"Compra para industrialização\""
      ]
    },
    {
      "cells": [
        "3102",
        "\"Compra para comercialização\""
      ]
    },
    {
      "cells": [
        "3126",
        "\"Compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "3127",
        "\"Compra para industrialização sob o regime de drawback\""
      ]
    },
    {
      "cells": [
        "3128",
        "\"Compra para utilização na prestação de serviço sujeita ao ISSQN\""
      ]
    },
    {
      "cells": [
        "3129",
        "\"Compra para industrialização sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "3200",
        "\"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "3201",
        "\"Devolução de venda de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "3202",
        "\"Devolução de venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "3205",
        "\"Anulação de valor relativo à prestação de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "3206",
        "\"Anulação de valor relativo à prestação de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "3207",
        "\"Anulação de valor relativo à venda de energia elétrica\""
      ]
    },
    {
      "cells": [
        "3211",
        "\"Devolução de venda de produção do estabelecimento sob o regime de drawback\""
      ]
    },
    {
      "cells": [
        "3212",
        "\"Devolução de venda no mercado externo de mercadoria industrializada sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "3250",
        "\"COMPRAS DE ENERGIA ELÉTRICA\""
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
        "3300",
        "\"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "3301",
        "\"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "3350",
        "\"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "3351",
        "\"Aquisição de serviço de transporte para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "3352",
        "\"Aquisição de serviço de transporte por estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "3353",
        "\"Aquisição de serviço de transporte por estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "3354",
        "\"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "3355",
        "\"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "3356",
        "\"Aquisição de serviço de transporte por estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "3500",
        "\"ENTRADAS DE MERCADORIAS REMETIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\""
      ]
    },
    {
      "cells": [
        "3503",
        "\"Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "3550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO E CONSUMO\""
      ]
    },
    {
      "cells": [
        "3551",
        "\"Compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "3553",
        "\"Devolução de venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "3556",
        "\"Compra de material para uso ou consumo\""
      ]
    },
    {
      "cells": [
        "3650",
        "\"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "3651",
        "\"Compra de combustível ou lubrificante para industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "3652",
        "\"Compra de combustível ou lubrificante para comercialização\""
      ]
    },
    {
      "cells": [
        "3653",
        "\"Compra de combustível ou lubrificante por consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "3900",
        "\"OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "3930",
        "\"Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária\""
      ]
    },
    {
      "cells": [
        "3949",
        "\"Outra entrada de mercadoria ou prestação de serviço não especificado\""
      ]
    },
    {
      "cells": [
        "5000",
        "\"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O ESTADO\""
      ]
    },
    {
      "cells": [
        "5100",
        "\"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\""
      ]
    },
    {
      "cells": [
        "5101",
        "\"Venda de produção do estabelecimento\""
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
        "5103",
        "\"Venda de produção do estabelecimento, efetuada fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5104",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5105",
        "\"Venda de produção do estabelecimento que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "5106",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "5109",
        "\"Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "5110",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "5111",
        "\"Venda de produção do estabelecimento remetida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "5112",
        "\"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "5113",
        "\"Venda de produção do estabelecimento remetida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "5114",
        "\"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "5115",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "5116",
        "\"Venda de produção do estabelecimento originada de encomenda para entrega futura\""
      ]
    },
    {
      "cells": [
        "5117",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura\""
      ]
    },
    {
      "cells": [
        "5118",
        "\"Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "5119",
        "\"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "5120",
        "\"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "5122",
        "\"Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "5123",
        "\"Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "5124",
        "\"Industrialização efetuada para outra empresa\""
      ]
    },
    {
      "cells": [
        "5125",
        "\"Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria\""
      ]
    },
    {
      "cells": [
        "5129",
        "\"Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped\""
      ]
    },
    {
      "cells": [
        "5131",
        "\"Remessa de produção do estabelecimento, com previsão de posterior ajuste ou fixação de preço, de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "5132",
        "\"Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "5150",
        "\"TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\""
      ]
    },
    {
      "cells": [
        "5151",
        "\"Transferência de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5152",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "5153",
        "\"Transferência de energia elétrica\""
      ]
    },
    {
      "cells": [
        "5155",
        "\"Transferência de produção do estabelecimento, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "5156",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "5159",
        "\"Fornecimento de produção do estabelecimento de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "5160",
        "\"Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "5200",
        "\"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "5201",
        "\"Devolução de compra para industrialização\""
      ]
    },
    {
      "cells": [
        "5202",
        "\"Devolução de compra para comercialização\""
      ]
    },
    {
      "cells": [
        "5205",
        "\"Anulação de valor relativo a aquisição de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "5206",
        "\"Anulação de valor relativo a aquisição de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "5207",
        "\"Anulação de valor relativo à compra de energia elétrica\""
      ]
    },
    {
      "cells": [
        "5208",
        "\"Devolução de mercadoria recebida em transferência para industrialização\""
      ]
    },
    {
      "cells": [
        "5209",
        "\"Devolução de mercadoria recebida em transferência para comercialização\""
      ]
    },
    {
      "cells": [
        "5210",
        "\"Devolução de compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "5213",
        "\"Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "5214",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização.\""
      ]
    },
    {
      "cells": [
        "5215",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para industrialização.\""
      ]
    },
    {
      "cells": [
        "5216",
        "\"Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "5250",
        "\"VENDAS DE ENERGIA ELÉTRICA\""
      ]
    },
    {
      "cells": [
        "5251",
        "\"Venda de energia elétrica para distribuição ou comercialização\""
      ]
    },
    {
      "cells": [
        "5252",
        "\"Venda de energia elétrica para estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "5253",
        "\"Venda de energia elétrica para estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "5254",
        "\"Venda de energia elétrica para estabelecimento prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "5255",
        "\"Venda de energia elétrica para estabelecimento prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "5256",
        "\"Venda de energia elétrica para estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "5257",
        "\"Venda de energia elétrica para consumo por demanda contratada\""
      ]
    },
    {
      "cells": [
        "5258",
        "\"Venda de energia elétrica a não contribuinte\""
      ]
    },
    {
      "cells": [
        "5300",
        "\"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "5301",
        "\"Prestação de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "5302",
        "\"Prestação de serviço de comunicação a estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "5303",
        "\"Prestação de serviço de comunicação a estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "5304",
        "\"Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "5305",
        "\"Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "5306",
        "\"Prestação de serviço de comunicação a estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "5307",
        "\"Prestação de serviço de comunicação a não contribuinte\""
      ]
    },
    {
      "cells": [
        "5350",
        "\"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "5351",
        "\"Prestação de serviço de transporte para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "5352",
        "\"Prestação de serviço de transporte a estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "5353",
        "\"Prestação de serviço de transporte a estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "5354",
        "\"Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "5355",
        "\"Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "5356",
        "\"Prestação de serviço de transporte a estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "5357",
        "\"Prestação de serviço de transporte a não contribuinte\""
      ]
    },
    {
      "cells": [
        "5359",
        "\"Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "5360",
        "\"Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte.\""
      ]
    },
    {
      "cells": [
        "5400",
        "\"SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\""
      ]
    },
    {
      "cells": [
        "5401",
        "\"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto\""
      ]
    },
    {
      "cells": [
        "5402",
        "\"Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto\""
      ]
    },
    {
      "cells": [
        "5403",
        "\"Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituto\""
      ]
    },
    {
      "cells": [
        "5405",
        "\"Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituído\""
      ]
    },
    {
      "cells": [
        "5408",
        "\"Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5409",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5410",
        "\"Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5411",
        "\"Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5412",
        "\"Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5413",
        "\"Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária.\""
      ]
    },
    {
      "cells": [
        "5414",
        "\"Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5415",
        "\"Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "5450",
        "\"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\""
      ]
    },
    {
      "cells": [
        "5451",
        "\"Remessa de animal - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5452",
        "\"Remessa de insumo - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5453",
        "\"Retorno de animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5454",
        "\"Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5455",
        "\"Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5456",
        "\"Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "5500",
        "\"REMESSAS PARA FORMAÇÃO DE LOTE E COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVETUAIS DEVOLUÇÕES\""
      ]
    },
    {
      "cells": [
        "5501",
        "\"Remessa de produção do estabelecimento, com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "5502",
        "\"Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "5503",
        "\"Devolução de mercadoria recebida com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "5504",
        "\"Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\""
      ]
    },
    {
      "cells": [
        "5505",
        "\"Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\""
      ]
    },
    {
      "cells": [
        "5550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\""
      ]
    },
    {
      "cells": [
        "5551",
        "\"Venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "5552",
        "\"Transferência de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "5553",
        "\"Devolução de compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "5554",
        "\"Remessa de bem do ativo imobilizado para uso fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5555",
        "\"Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento\""
      ]
    },
    {
      "cells": [
        "5556",
        "\"Devolução de compra de material de uso ou consumo\""
      ]
    },
    {
      "cells": [
        "5557",
        "\"Transferência de material de uso ou consumo\""
      ]
    },
    {
      "cells": [
        "5600",
        "\"CRÉDITOS E RESSARCIMENTOS DE ICMS\""
      ]
    },
    {
      "cells": [
        "5601",
        "\"Transferência de crédito de ICMS acumulado\""
      ]
    },
    {
      "cells": [
        "5602",
        "\"Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS\""
      ]
    },
    {
      "cells": [
        "5603",
        "\"Ressarcimento de ICMS retido por substituição tributária\""
      ]
    },
    {
      "cells": [
        "5605",
        "\"Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "5606",
        "\"Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais.\""
      ]
    },
    {
      "cells": [
        "5650",
        "\"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "5651",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "5652",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "5653",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "5654",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "5655",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "5656",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "5657",
        "\"Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5658",
        "\"Transferência de combustível ou lubrificante de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5659",
        "\"Transferência de combustível ou lubrificante adquirido ou recebido de terceiro\""
      ]
    },
    {
      "cells": [
        "5660",
        "\"Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "5661",
        "\"Devolução de compra de combustível ou lubrificante adquirido para comercialização\""
      ]
    },
    {
      "cells": [
        "5662",
        "\"Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "5663",
        "\"Remessa para armazenagem de combustível ou lubrificante\""
      ]
    },
    {
      "cells": [
        "5664",
        "\"Retorno de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "5665",
        "\"Retorno simbólico de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "5666",
        "\"Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "5667",
        "\"Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação\""
      ]
    },
    {
      "cells": [
        "5900",
        "\"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "5901",
        "\"Remessa para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "5902",
        "\"Retorno de mercadoria utilizada na industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "5903",
        "\"Retorno de mercadoria recebida para industrialização e não aplicada no referido processo\""
      ]
    },
    {
      "cells": [
        "5904",
        "\"Remessa para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "5905",
        "\"Remessa para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "5906",
        "\"Retorno de mercadoria depositada em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "5907",
        "\"Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "5908",
        "\"Remessa de bem por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "5909",
        "\"Retorno de bem recebido por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "5910",
        "\"Remessa em bonificação, doação ou brinde\""
      ]
    },
    {
      "cells": [
        "5911",
        "\"Remessa de amostra grátis\""
      ]
    },
    {
      "cells": [
        "5912",
        "\"Remessa de mercadoria ou bem para demonstração\""
      ]
    },
    {
      "cells": [
        "5913",
        "\"Retorno de mercadoria ou bem recebido para demonstração\""
      ]
    },
    {
      "cells": [
        "5914",
        "\"Remessa de mercadoria ou bem para exposição ou feira\""
      ]
    },
    {
      "cells": [
        "5915",
        "\"Remessa de mercadoria ou bem para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "5916",
        "\"Retorno de mercadoria ou bem recebido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "5917",
        "\"Remessa de mercadoria em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "5918",
        "\"Devolução de mercadoria recebida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "5919",
        "\"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "5920",
        "\"Remessa de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "5921",
        "\"Devolução de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "5922",
        "\"Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\""
      ]
    },
    {
      "cells": [
        "5923",
        "\"Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado\""
      ]
    },
    {
      "cells": [
        "5924",
        "\"Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "5925",
        "\"Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "5926",
        "\"Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação\""
      ]
    },
    {
      "cells": [
        "5927",
        "\"Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração\""
      ]
    },
    {
      "cells": [
        "5928",
        "\"Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa\""
      ]
    },
    {
      "cells": [
        "5929",
        "\"Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também acobertada por documento fiscal do varejo\""
      ]
    },
    {
      "cells": [
        "5931",
        "\"Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço\""
      ]
    },
    {
      "cells": [
        "5932",
        "\"Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador\""
      ]
    },
    {
      "cells": [
        "5933",
        "\"Prestação de serviço tributado pelo ISSQN. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "5934",
        "\"Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado\""
      ]
    },
    {
      "cells": [
        "5949",
        "\"Outra saída de mercadoria ou prestação de serviço não especificado\""
      ]
    },
    {
      "cells": [
        "6000",
        "\"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA OUTROS ESTADOS\""
      ]
    },
    {
      "cells": [
        "6100",
        "\"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\""
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
        "6102",
        "\"Venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "6103",
        "\"Venda de produção do estabelecimento, efetuada fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6104",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6105",
        "\"Venda de produção do estabelecimento que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "6106",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "6107",
        "\"Venda de produção do estabelecimento, destinada a não contribuinte\""
      ]
    },
    {
      "cells": [
        "6108",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte\""
      ]
    },
    {
      "cells": [
        "6109",
        "\"Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "6110",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\""
      ]
    },
    {
      "cells": [
        "6111",
        "\"Venda de produção do estabelecimento remetida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "6112",
        "\"Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial\""
      ]
    },
    {
      "cells": [
        "6113",
        "\"Venda de produção do estabelecimento remetida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "6114",
        "\"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "6115",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil\""
      ]
    },
    {
      "cells": [
        "6116",
        "\"Venda de produção do estabelecimento originada de encomenda para entrega futura\""
      ]
    },
    {
      "cells": [
        "6117",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura\""
      ]
    },
    {
      "cells": [
        "6118",
        "\"Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "6119",
        "\"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "6120",
        "\"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\""
      ]
    },
    {
      "cells": [
        "6122",
        "\"Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "6123",
        "\"Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "6124",
        "\"Industrialização efetuada para outra empresa\""
      ]
    },
    {
      "cells": [
        "6125",
        "\"Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria\""
      ]
    },
    {
      "cells": [
        "6129",
        "\"Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "6131",
        "\"Remessa de produção de estabelecimento, com previsão de posterior ajuste ou fixação de preço de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "6132",
        "\"Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço ou fixação de preço de ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "6150",
        "\"TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\""
      ]
    },
    {
      "cells": [
        "6151",
        "\"Transferência de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6152",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "6153",
        "\"Transferência de energia elétrica\""
      ]
    },
    {
      "cells": [
        "6155",
        "\"Transferência de produção do estabelecimento, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "6156",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "6159",
        "\"Fornecimento de produção do estabelecimento de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "6160",
        "\"Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "6200",
        "\"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "6201",
        "\"Devolução de compra para industrialização\""
      ]
    },
    {
      "cells": [
        "6202",
        "\"Devolução de compra para comercialização\""
      ]
    },
    {
      "cells": [
        "6205",
        "\"Anulação de valor relativo a aquisição de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "6206",
        "\"Anulação de valor relativo a aquisição de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "6207",
        "\"Anulação de valor relativo à compra de energia elétrica\""
      ]
    },
    {
      "cells": [
        "6208",
        "\"Devolução de mercadoria recebida em transferência para industrialização\""
      ]
    },
    {
      "cells": [
        "6209",
        "\"Devolução de mercadoria recebida em transferência para comercialização\""
      ]
    },
    {
      "cells": [
        "6210",
        "\"Devolução de compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "6213",
        "\"Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\""
      ]
    },
    {
      "cells": [
        "6214",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização.\""
      ]
    },
    {
      "cells": [
        "6215",
        "\"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo para industrialização.\""
      ]
    },
    {
      "cells": [
        "6216",
        "\"Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\""
      ]
    },
    {
      "cells": [
        "6250",
        "\"VENDAS DE ENERGIA ELÉTRICA\""
      ]
    },
    {
      "cells": [
        "6251",
        "\"Venda de energia elétrica para distribuição ou comercialização\""
      ]
    },
    {
      "cells": [
        "6252",
        "\"Venda de energia elétrica para estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "6253",
        "\"Venda de energia elétrica para estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "6254",
        "\"Venda de energia elétrica para estabelecimento prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "6255",
        "\"Venda de energia elétrica para estabelecimento prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "6256",
        "\"Venda de energia elétrica para estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "6257",
        "\"Venda de energia elétrica para consumo por demanda contratada\""
      ]
    },
    {
      "cells": [
        "6258",
        "\"Venda de energia elétrica a não contribuinte\""
      ]
    },
    {
      "cells": [
        "6300",
        "\"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "6301",
        "\"Prestação de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "6302",
        "\"Prestação de serviço de comunicação a estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "6303",
        "\"Prestação de serviço de comunicação a estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "6304",
        "\"Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "6305",
        "\"Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "6306",
        "\"Prestação de serviço de comunicação a estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "6307",
        "\"Prestação de serviço de comunicação a não contribuinte\""
      ]
    },
    {
      "cells": [
        "6350",
        "\"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "6351",
        "\"Prestação de serviço de transporte para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "6352",
        "\"Prestação de serviço de transporte a estabelecimento industrial\""
      ]
    },
    {
      "cells": [
        "6353",
        "\"Prestação de serviço de transporte a estabelecimento comercial\""
      ]
    },
    {
      "cells": [
        "6354",
        "\"Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "6355",
        "\"Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica\""
      ]
    },
    {
      "cells": [
        "6356",
        "\"Prestação de serviço de transporte a estabelecimento de produtor rural\""
      ]
    },
    {
      "cells": [
        "6357",
        "\"Prestação de serviço de transporte a não contribuinte\""
      ]
    },
    {
      "cells": [
        "6359",
        "\"Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "6360",
        "\"Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte\""
      ]
    },
    {
      "cells": [
        "6400",
        "\"SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\""
      ]
    },
    {
      "cells": [
        "6401",
        "\"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto\""
      ]
    },
    {
      "cells": [
        "6402",
        "\"Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto\""
      ]
    },
    {
      "cells": [
        "6403",
        "\"Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto\""
      ]
    },
    {
      "cells": [
        "6404",
        "\"Venda de mercadoria sujeita ao regime de substituição tributária, cujo imposto já tenha sido retido anteriormente\""
      ]
    },
    {
      "cells": [
        "6408",
        "\"Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6409",
        "\"Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6410",
        "\"Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6411",
        "\"Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6412",
        "\"Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6413",
        "\"Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6414",
        "\"Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6415",
        "\"Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária\""
      ]
    },
    {
      "cells": [
        "6450",
        "\"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\""
      ]
    },
    {
      "cells": [
        "6451",
        "\"Remessa de animal - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6452",
        "\"Remessa de insumo - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6453",
        "\"Retorno de animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6454",
        "\"Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6455",
        "\"Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6456",
        "\"Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural\""
      ]
    },
    {
      "cells": [
        "6500",
        "\"REMESSAS PARA FORMAÇÃO DE LOTE E COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\""
      ]
    },
    {
      "cells": [
        "6501",
        "\"Remessa de produção do estabelecimento, com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "6502",
        "\"Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "6503",
        "\"Devolução de mercadoria recebida com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "6504",
        "\"Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\""
      ]
    },
    {
      "cells": [
        "6505",
        "\"Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\""
      ]
    },
    {
      "cells": [
        "6550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\""
      ]
    },
    {
      "cells": [
        "6551",
        "\"Venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "6552",
        "\"Transferência de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "6553",
        "\"Devolução de compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "6554",
        "\"Remessa de bem do ativo imobilizado para uso fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6555",
        "\"Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento\""
      ]
    },
    {
      "cells": [
        "6556",
        "\"Devolução de compra de material de uso ou consumo\""
      ]
    },
    {
      "cells": [
        "6557",
        "\"Transferência de material de uso ou consumo\""
      ]
    },
    {
      "cells": [
        "6600",
        "\"CRÉDITOS E RESSARCIMENTOS DE ICMS\""
      ]
    },
    {
      "cells": [
        "6603",
        "\"Ressarcimento de ICMS retido por substituição tributária\""
      ]
    },
    {
      "cells": [
        "6650",
        "\"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "6651",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "6652",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "6653",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "6654",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "6655",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização\""
      ]
    },
    {
      "cells": [
        "6656",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "6657",
        "\"Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6658",
        "\"Transferência de combustível ou lubrificante de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6659",
        "\"Transferência de combustível ou lubrificante adquirido ou recebido de terceiro\""
      ]
    },
    {
      "cells": [
        "6660",
        "\"Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "6661",
        "\"Devolução de compra de combustível ou lubrificante adquirido para comercialização\""
      ]
    },
    {
      "cells": [
        "6662",
        "\"Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "6663",
        "\"Remessa para armazenagem de combustível ou lubrificante\""
      ]
    },
    {
      "cells": [
        "6664",
        "\"Retorno de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "6665",
        "\"Retorno simbólico de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "6666",
        "\"Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem\""
      ]
    },
    {
      "cells": [
        "6667",
        "\"Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação diferente a da que ocorrer o consumo\""
      ]
    },
    {
      "cells": [
        "6900",
        "\"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "6901",
        "\"Remessa para industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "6902",
        "\"Retorno de mercadoria utilizada na industrialização por encomenda\""
      ]
    },
    {
      "cells": [
        "6903",
        "\"Retorno de mercadoria recebida para industrialização e não aplicada no referido processo\""
      ]
    },
    {
      "cells": [
        "6904",
        "\"Remessa para venda fora do estabelecimento\""
      ]
    },
    {
      "cells": [
        "6905",
        "\"Remessa para depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "6906",
        "\"Retorno de mercadoria depositada em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "6907",
        "\"Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral\""
      ]
    },
    {
      "cells": [
        "6908",
        "\"Remessa de bem por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "6909",
        "\"Retorno de bem recebido por conta de contrato de comodato ou locação\""
      ]
    },
    {
      "cells": [
        "6910",
        "\"Remessa em bonificação, doação ou brinde\""
      ]
    },
    {
      "cells": [
        "6911",
        "\"Remessa de amostra grátis\""
      ]
    },
    {
      "cells": [
        "6912",
        "\"Remessa de mercadoria ou bem para demonstração\""
      ]
    },
    {
      "cells": [
        "6913",
        "\"Retorno de mercadoria ou bem recebido para demonstração\""
      ]
    },
    {
      "cells": [
        "6914",
        "\"Remessa de mercadoria ou bem para exposição ou feira\""
      ]
    },
    {
      "cells": [
        "6915",
        "\"Remessa de mercadoria ou bem para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "6916",
        "\"Retorno de mercadoria ou bem recebido para conserto ou reparo\""
      ]
    },
    {
      "cells": [
        "6917",
        "\"Remessa de mercadoria em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "6918",
        "\"Devolução de mercadoria recebida em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "6919",
        "\"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial\""
      ]
    },
    {
      "cells": [
        "6920",
        "\"Remessa de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "6921",
        "\"Devolução de vasilhame ou sacaria\""
      ]
    },
    {
      "cells": [
        "6922",
        "\"Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\""
      ]
    },
    {
      "cells": [
        "6923",
        "\"Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado\""
      ]
    },
    {
      "cells": [
        "6924",
        "\"Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "6925",
        "\"Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente\""
      ]
    },
    {
      "cells": [
        "6929",
        "\"Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF\""
      ]
    },
    {
      "cells": [
        "6931",
        "\"Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço\""
      ]
    },
    {
      "cells": [
        "6932",
        "\"Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador\""
      ]
    },
    {
      "cells": [
        "6933",
        "\"Prestação de serviço tributado pelo ISSQN (ajuste sinief 03/04)\""
      ]
    },
    {
      "cells": [
        "6934",
        "\"Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado\""
      ]
    },
    {
      "cells": [
        "6949",
        "\"Outra saída de mercadoria ou prestação de serviço não especificado\""
      ]
    },
    {
      "cells": [
        "7000",
        "\"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O EXTERIOR\""
      ]
    },
    {
      "cells": [
        "7100",
        "\"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\""
      ]
    },
    {
      "cells": [
        "7101",
        "\"Venda de produção do estabelecimento\""
      ]
    },
    {
      "cells": [
        "7102",
        "\"Venda de mercadoria adquirida ou recebida de terceiros\""
      ]
    },
    {
      "cells": [
        "7105",
        "\"Venda de produção do estabelecimento, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "7106",
        "\"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\""
      ]
    },
    {
      "cells": [
        "7127",
        "\"Venda de produção do estabelecimento sob o regime de drawback\""
      ]
    },
    {
      "cells": [
        "7129",
        "\"Venda de produção do estabelecimento ao mercado externo de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "7200",
        "\"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\""
      ]
    },
    {
      "cells": [
        "7201",
        "\"Devolução de compra para industrialização\""
      ]
    },
    {
      "cells": [
        "7202",
        "\"Devolução de compra para comercialização\""
      ]
    },
    {
      "cells": [
        "7205",
        "\"Anulação de valor relativo à aquisição de serviço de comunicação\""
      ]
    },
    {
      "cells": [
        "7206",
        "\"Anulação de valor relativo a aquisição de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "7207",
        "\"Anulação de valor relativo à compra de energia elétrica\""
      ]
    },
    {
      "cells": [
        "7210",
        "\"Devolução de compra para utilização na prestação de serviço\""
      ]
    },
    {
      "cells": [
        "7211",
        "\"Devolução de compras para industrialização sob o regime de drawback\""
      ]
    },
    {
      "cells": [
        "7212",
        "\"Devolução de compras para industrialização sob o regime de Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\""
      ]
    },
    {
      "cells": [
        "7250",
        "\"VENDAS DE ENERGIA ELÉTRICA\""
      ]
    },
    {
      "cells": [
        "7251",
        "\"Venda de energia elétrica para o exterior\""
      ]
    },
    {
      "cells": [
        "7300",
        "\"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\""
      ]
    },
    {
      "cells": [
        "7301",
        "\"Prestação de serviço de comunicação para execução de serviço da mesma natureza\""
      ]
    },
    {
      "cells": [
        "7350",
        "\"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\""
      ]
    },
    {
      "cells": [
        "7358",
        "\"Prestação de serviço de transporte\""
      ]
    },
    {
      "cells": [
        "7500",
        "\"EXPORTAÇÃO DE MERCADORIAS RECEBIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO\""
      ]
    },
    {
      "cells": [
        "7501",
        "\"Exportação de mercadorias recebidas com fim específico de exportação\""
      ]
    },
    {
      "cells": [
        "7504",
        "\"Exportação de mercadoria que foi objeto de formação de lote de exportação\""
      ]
    },
    {
      "cells": [
        "7550",
        "\"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\""
      ]
    },
    {
      "cells": [
        "7551",
        "\"Venda de bem do ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "7553",
        "\"Devolução de compra de bem para o ativo imobilizado\""
      ]
    },
    {
      "cells": [
        "7556",
        "\"Devolução de compra de material de uso ou consumo\""
      ]
    },
    {
      "cells": [
        "7650",
        "\"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\""
      ]
    },
    {
      "cells": [
        "7651",
        "\"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "7654",
        "\"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\""
      ]
    },
    {
      "cells": [
        "7667",
        "\"Venda de combustível ou lubrificante a consumidor ou usuário final\""
      ]
    },
    {
      "cells": [
        "7900",
        "\"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\""
      ]
    },
    {
      "cells": [
        "7930",
        "\"Lançamento efetuado a título de devolução de bem cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária\""
      ]
    },
    {
      "cells": [
        "7949",
        "\"Outra saída de mercadoria ou prestação de serviço não especificado\""
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
  "name": "que eu tenha um 1000",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO ESTADO\"",
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
  "name": "que eu tenha um 1100",
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
  "name": "Eu devo ter como retorno a \"COMPRAS PARA INDUTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\"",
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
  "name": "que eu tenha um 1101",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização\"",
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
  "name": "que eu tenha um 1111",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização de mercadoria recebida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 1113",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 1116",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização originada de encomenda para recebimento futuro\"",
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
  "name": "que eu tenha um 1117",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização originada de encomenda para recebimento futuro\"",
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
  "name": "que eu tenha um 1118",
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
  "name": "Eu devo ter como retorno a \"Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\"",
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
  "name": "que eu tenha um 1120",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\"",
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
  "name": "que eu tenha um 1121",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\"",
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
  "name": "que eu tenha um 1122",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente\"",
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
  "name": "que eu tenha um 1124",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada por outra empresa\"",
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
  "name": "que eu tenha um 1125",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria\"",
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
  "name": "que eu tenha um 1126",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 1128",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço sujeita ao ISSQN\"",
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
  "name": "que eu tenha um 1131",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo.\"",
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
  "name": "que eu tenha um 1132",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização\"",
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
  "name": "que eu tenha um 1135",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização.\"",
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
  "name": "que eu tenha um 1150",
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
  "name": "Eu devo ter como retorno a \"TRANSFERÊNCIAS PARA INDUSTRIAZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\"",
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
  "name": "que eu tenha um 1151",
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
  "name": "que eu tenha um 1152",
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
  "name": "Eu devo ter como retorno a \"Transferência para comercialização\"",
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
  "name": "que eu tenha um 1153",
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
  "name": "Eu devo ter como retorno a \"Transferência de energia elétrica para distribuição\"",
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
  "name": "que eu tenha um 1154",
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
  "name": "Eu devo ter como retorno a \"Transferência para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 1159",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\"",
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
  "name": "que eu tenha um 1200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO, DE TERCEIROS OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 1201",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento\"",
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
  "name": "que eu tenha um 1202",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 1203",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 1204",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 1205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de comunicação\"",
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
  "name": "que eu tenha um 1206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de transporte\"",
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
  "name": "que eu tenha um 1207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à venda de energia elétrica\"",
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
  "name": "que eu tenha um 1208",
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
  "name": "Eu devo ter como retorno a \"Devolução de produção do estabelecimento, remetida em transferência\"",
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
  "name": "que eu tenha um 1209",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência\"",
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
  "name": "que eu tenha um 1212",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 1213",
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
  "name": "Eu devo ter como retorno a \"Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\"",
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
  "name": "que eu tenha um 1214",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo.\"",
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
  "name": "que eu tenha um 1215",
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
  "name": "Eu devo ter como retorno a \"Devolução de fornecimento de produção do estabelecimento de ato cooperativo\"",
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
  "name": "que eu tenha um 1216",
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
  "name": "Eu devo ter como retorno a \"Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\"",
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
  "name": "que eu tenha um 1250",
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
  "name": "Eu devo ter como retorno a \"COMPRAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 1251",
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
  "name": "que eu tenha um 1252",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento industrial\"",
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
  "name": "que eu tenha um 1253",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento comercial\"",
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
  "name": "que eu tenha um 1254",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 1255",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 1256",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 1257",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica para consumo por demanda contratada\"",
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
  "name": "que eu tenha um 1300",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 1301",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 1302",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento industrial\"",
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
  "name": "que eu tenha um 1303",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento comercial\"",
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
  "name": "que eu tenha um 1304",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 1305",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 1306",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 1350",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 1351",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 1352",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento industrial\"",
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
  "name": "que eu tenha um 1353",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento comercial\"",
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
  "name": "que eu tenha um 1354",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 1355",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 1356",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 1360",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por contribuinte substituto em relação ao serviço de transporte.\"",
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
  "name": "que eu tenha um 1400",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\"",
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
  "name": "que eu tenha um 1401",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1403",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1406",
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
  "name": "Eu devo ter como retorno a \"Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1407",
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
  "name": "Eu devo ter como retorno a \"Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1408",
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
  "name": "Eu devo ter como retorno a \"Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1409",
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
  "name": "Eu devo ter como retorno a \"Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1410",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1411",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1414",
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
  "name": "Eu devo ter como retorno a \"Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1415",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 1450",
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
  "name": "Eu devo ter como retorno a \"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\"",
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
  "name": "que eu tenha um 1451",
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
  "name": "Eu devo ter como retorno a \"Entrada de animal - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1452",
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
  "name": "Eu devo ter como retorno a \"Entrada de insumo - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1453",
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
  "name": "Eu devo ter como retorno a \"Retorno do animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1454",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1455",
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
  "name": "Eu devo ter como retorno a \"Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1456",
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
  "name": "Eu devo ter como retorno a \"Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 1500",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\"",
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
  "name": "que eu tenha um 1501",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida com fim específico de exportação\"",
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
  "name": "que eu tenha um 1503",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento\"",
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
  "name": "que eu tenha um 1504",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 1505",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\"",
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
  "name": "que eu tenha um 1506",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação\"",
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
  "name": "que eu tenha um 1550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\"",
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
  "name": "que eu tenha um 1551",
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
  "name": "Eu devo ter como retorno a \"Compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 1552",
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
  "name": "Eu devo ter como retorno a \"Transferência de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 1553",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 1554",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento\"",
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
  "name": "que eu tenha um 1555",
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
  "name": "Eu devo ter como retorno a \"Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\"",
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
  "name": "que eu tenha um 1556",
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
  "name": "Eu devo ter como retorno a \"Compra de material para uso ou consumo\"",
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
  "name": "que eu tenha um 1557",
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
  "name": "Eu devo ter como retorno a \"Transferência de material para uso ou consumo\"",
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
  "name": "que eu tenha um 1600",
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
  "name": "Eu devo ter como retorno a \"CRÉDITOS E RESSARCIMENTOS DE ICMS\"",
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
  "name": "que eu tenha um 1601",
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
  "name": "Eu devo ter como retorno a \"Recebimento, por transferência, de crédito de ICMS\"",
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
  "name": "que eu tenha um 1602",
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
  "name": "Eu devo ter como retorno a \"Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS\"",
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
  "name": "que eu tenha um 1603",
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
  "name": "Eu devo ter como retorno a \"Ressarcimento de ICMS retido por substituição tributária\"",
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
  "name": "que eu tenha um 1604",
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
  "name": "Eu devo ter como retorno a \"Lançamento do crédito relativo à compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 1605",
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
  "name": "Eu devo ter como retorno a \"Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa.\"",
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
  "name": "que eu tenha um 1650",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 1651",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para industrialização subseqüente\"",
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
  "name": "que eu tenha um 1652",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para comercialização\"",
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
  "name": "que eu tenha um 1653",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante por consumidor ou usuário final\"",
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
  "name": "que eu tenha um 1657",
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
  "name": "Eu devo ter como retorno a \"Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 1658",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível e lubrificante para industrialização\"",
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
  "name": "que eu tenha um 1659",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível e lubrificante para comercialização\"",
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
  "name": "que eu tenha um 1660",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 1661",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado à comercialização\"",
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
  "name": "que eu tenha um 1662",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 1663",
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
  "name": "Eu devo ter como retorno a \"Entrada de combustível ou lubrificante para armazenagem\"",
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
  "name": "que eu tenha um 1664",
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
  "name": "Eu devo ter como retorno a \"Retorno de combustível ou lubrificante remetido para armazenagem\"",
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
  "name": "que eu tenha um 1900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES E SERVIÇOS\"",
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
  "name": "que eu tenha um 1901",
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
  "name": "Eu devo ter como retorno a \"Entrada para industrialização por encomenda\"",
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
  "name": "que eu tenha um 1902",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para industrialização por encomenda\"",
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
  "name": "que eu tenha um 1903",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria remetida para industrialização e não aplicada no referido processo\"",
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
  "name": "que eu tenha um 1904",
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
  "name": "Eu devo ter como retorno a \"Retorno de remessa para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 1905",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 1906",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 1907",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 1908",
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
  "name": "Eu devo ter como retorno a \"Entrada de bem por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 1909",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem remetido por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 1910",
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
  "name": "Eu devo ter como retorno a \"Entrada de bonificação, doação ou brinde\"",
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
  "name": "que eu tenha um 1911",
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
  "name": "Eu devo ter como retorno a \"Entrada de amostra grátis\"",
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
  "name": "que eu tenha um 1912",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria ou bem recebido para demonstração\"",
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
  "name": "que eu tenha um 1913",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para demonstração\"",
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
  "name": "que eu tenha um 1914",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para exposição ou feira\"",
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
  "name": "que eu tenha um 1915",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria ou bem recebido para conserto ou reparo\"",
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
  "name": "que eu tenha um 1916",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para conserto ou reparo\"",
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
  "name": "que eu tenha um 1917",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 1918",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria remetida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 1919",
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
  "name": "Eu devo ter como retorno a \"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 1920",
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
  "name": "Eu devo ter como retorno a \"Entrada de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 1921",
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
  "name": "Eu devo ter como retorno a \"Retorno de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 1922",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"",
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
  "name": "que eu tenha um 1923",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida do vendedor remetente, em venda à ordem\"",
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
  "name": "que eu tenha um 1924",
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
  "name": "Eu devo ter como retorno a \"Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 1925",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 1926",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação\"",
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
  "name": "que eu tenha um 1931",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (Ajuste SINIEF 03/04)\"",
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
  "name": "que eu tenha um 1932",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 1933",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço tributado pelo ISSQN.(ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 1934",
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
  "name": "Eu devo ter como retorno a \"Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 1949",
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
  "name": "Eu devo ter como retorno a \"Outra entrada de mercadoria ou prestação de serviço não especificada\"",
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
  "name": "que eu tenha um 2000",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DE OUTROS ESTADOS\"",
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
  "name": "que eu tenha um 2100",
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
  "name": "Eu devo ter como retorno a \"COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\"",
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
  "name": "que eu tenha um 2101",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização\"",
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
  "name": "que eu tenha um 2102",
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
  "name": "que eu tenha um 2111",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização de mercadoria recebida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 2113",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 2116",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização originada de encomenda para recebimento futuro\"",
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
  "name": "que eu tenha um 2117",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização originada de encomenda para recebimento futuro\"",
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
  "name": "que eu tenha um 2118",
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
  "name": "Eu devo ter como retorno a \"Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem\"",
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
  "name": "que eu tenha um 2120",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização, em venda à ordem, já recebida do vendedor remetente\"",
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
  "name": "que eu tenha um 2121",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização, em venda à ordem, já recebida do vendedor remetente\"",
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
  "name": "que eu tenha um 2122",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente\"",
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
  "name": "que eu tenha um 2124",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada por outra empresa\"",
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
  "name": "que eu tenha um 2125",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria\"",
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
  "name": "que eu tenha um 2126",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 2128",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço sujeita ao ISSQN\"",
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
  "name": "que eu tenha um 2131",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, decorrente de operação de ato cooperativo.\"",
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
  "name": "que eu tenha um 2132",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para comercialização.\"",
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
  "name": "que eu tenha um 2135",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, em ato cooperativo, para industrialização.\"",
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
  "name": "que eu tenha um 2150",
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
  "name": "Eu devo ter como retorno a \"TRANSFERÊNCIAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\"",
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
  "name": "que eu tenha um 2152",
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
  "name": "Eu devo ter como retorno a \"Transferência para comercialização\"",
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
  "name": "que eu tenha um 2153",
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
  "name": "Eu devo ter como retorno a \"Transferência de energia elétrica para distribuição\"",
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
  "name": "que eu tenha um 2154",
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
  "name": "Eu devo ter como retorno a \"Transferência para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 2159",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\"",
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
  "name": "que eu tenha um 2200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 2201",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento\"",
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
  "name": "que eu tenha um 2202",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 2203",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 2204",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 2205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de comunicação\"",
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
  "name": "que eu tenha um 2206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de transporte\"",
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
  "name": "que eu tenha um 2207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à venda de energia elétrica\"",
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
  "name": "que eu tenha um 2208",
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
  "name": "Eu devo ter como retorno a \"Devolução de produção do estabelecimento, remetida em transferência\"",
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
  "name": "que eu tenha um 2209",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência\"",
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
  "name": "que eu tenha um 2212",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda no mercado interno de mercadoria industrializada e insumo importado sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 2213",
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
  "name": "Eu devo ter como retorno a \"Devolução de remessa de produção do estabelecimento com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\"",
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
  "name": "que eu tenha um 2214",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, de ato cooperativo.\"",
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
  "name": "que eu tenha um 2215",
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
  "name": "Eu devo ter como retorno a \"Devolução de fornecimento de produção do estabelecimento de ato cooperativo\"",
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
  "name": "que eu tenha um 2216",
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
  "name": "Eu devo ter como retorno a \"Devolução de fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\"",
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
  "name": "que eu tenha um 2250",
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
  "name": "Eu devo ter como retorno a \"COMPRAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 2251",
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
  "name": "que eu tenha um 2252",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento industrial\"",
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
  "name": "que eu tenha um 2253",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento comercial\"",
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
  "name": "que eu tenha um 2254",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 2255",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 2256",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 2257",
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
  "name": "Eu devo ter como retorno a \"Compra de energia elétrica para consumo por demanda contratada\"",
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
  "name": "que eu tenha um 2300",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 2301",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 2302",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento industrial\"",
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
  "name": "que eu tenha um 2303",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento comercial\"",
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
  "name": "que eu tenha um 2304",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 2305",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 2306",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 2350",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 2351",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 2352",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento industrial\"",
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
  "name": "que eu tenha um 2353",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento comercial\"",
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
  "name": "que eu tenha um 2354",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 2355",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 2356",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 2400",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUÇÃO TRIBUTÁRIA\"",
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
  "name": "que eu tenha um 2401",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2403",
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
  "name": "Eu devo ter como retorno a \"Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2406",
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
  "name": "Eu devo ter como retorno a \"Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2407",
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
  "name": "Eu devo ter como retorno a \"Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2408",
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
  "name": "Eu devo ter como retorno a \"Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2409",
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
  "name": "Eu devo ter como retorno a \"Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2410",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2411",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2414",
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
  "name": "Eu devo ter como retorno a \"Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2415",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 2450",
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
  "name": "Eu devo ter como retorno a \"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\"",
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
  "name": "que eu tenha um 2451",
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
  "name": "Eu devo ter como retorno a \"Entrada de animal - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2452",
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
  "name": "Eu devo ter como retorno a \"Entrada de insumo - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2453",
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
  "name": "Eu devo ter como retorno a \"Retorno do animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2454",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico do animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2455",
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
  "name": "Eu devo ter como retorno a \"Retorno de insumo não utilizado na produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2456",
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
  "name": "Eu devo ter como retorno a \"Entrada referente a remuneração do produtor no Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 2500",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\"",
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
  "name": "que eu tenha um 2501",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida com fim específico de exportação\"",
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
  "name": "que eu tenha um 2503",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento\"",
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
  "name": "que eu tenha um 2504",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 2505",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento\"",
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
  "name": "que eu tenha um 2506",
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
  "name": "Eu devo ter como retorno a \"Entrada decorrente de devolução de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação\"",
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
  "name": "que eu tenha um 2550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\"",
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
  "name": "que eu tenha um 2551",
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
  "name": "Eu devo ter como retorno a \"Compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 2552",
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
  "name": "Eu devo ter como retorno a \"Transferência de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 2553",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 2554",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento\"",
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
  "name": "que eu tenha um 2555",
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
  "name": "Eu devo ter como retorno a \"Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento\"",
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
  "name": "que eu tenha um 2556",
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
  "name": "Eu devo ter como retorno a \"Compra de material para uso ou consumo\"",
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
  "name": "que eu tenha um 2557",
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
  "name": "Eu devo ter como retorno a \"Transferência de material para uso ou consumo\"",
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
  "name": "que eu tenha um 2600",
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
  "name": "Eu devo ter como retorno a \"CRÉDITOS E RESSARCIMENTO DE ICMS\"",
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
  "name": "que eu tenha um 2603",
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
  "name": "Eu devo ter como retorno a \"Ressarcimento de ICMS retido por substituição tributária\"",
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
  "name": "que eu tenha um 2650",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETROLÉO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 2651",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para industrialização subseqüente\"",
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
  "name": "que eu tenha um 2652",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para comercialização\"",
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
  "name": "que eu tenha um 2653",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante por consumidor ou usuário final\"",
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
  "name": "que eu tenha um 2657",
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
  "name": "Eu devo ter como retorno a \"Retorno de remessa de combustível ou lubrificante para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 2658",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível e lubrificante para industrialização\"",
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
  "name": "que eu tenha um 2659",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível e lubrificante para comercialização\"",
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
  "name": "que eu tenha um 2660",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 2661",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado à comercialização\"",
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
  "name": "que eu tenha um 2662",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 2663",
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
  "name": "Eu devo ter como retorno a \"Entrada de combustível ou lubrificante para armazenagem\"",
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
  "name": "que eu tenha um 2664",
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
  "name": "Eu devo ter como retorno a \"Retorno de combustível ou lubrificante remetido para armazenagem\"",
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
  "name": "que eu tenha um 2900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS ENTRADAS DE MERCADORIA OU AQUISIÇÕES DE SERVIÇOS\"",
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
  "name": "que eu tenha um 2901",
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
  "name": "Eu devo ter como retorno a \"Entrada para industrialização por encomenda\"",
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
  "name": "que eu tenha um 2902",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para industrialização por encomenda\"",
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
  "name": "que eu tenha um 2903",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria remetida para industrialização e não aplicada no referido processo\"",
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
  "name": "que eu tenha um 2904",
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
  "name": "Eu devo ter como retorno a \"Retorno de remessa para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 2905",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 2906",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 2907",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 2908",
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
  "name": "Eu devo ter como retorno a \"Entrada de bem por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 2909",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem remetido por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 2910",
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
  "name": "Eu devo ter como retorno a \"Entrada de bonificação, doação ou brinde\"",
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
  "name": "que eu tenha um 2911",
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
  "name": "Eu devo ter como retorno a \"Entrada de amostra grátis\"",
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
  "name": "que eu tenha um 2912",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria ou bem recebido para demonstração\"",
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
  "name": "que eu tenha um 2913",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para demonstração\"",
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
  "name": "que eu tenha um 2914",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para exposição ou feira\"",
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
  "name": "que eu tenha um 2915",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria ou bem recebido para conserto ou reparo\"",
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
  "name": "que eu tenha um 2916",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem remetido para conserto ou reparo\"",
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
  "name": "que eu tenha um 2917",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 2918",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria remetida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 2919",
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
  "name": "Eu devo ter como retorno a \"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 2920",
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
  "name": "Eu devo ter como retorno a \"Entrada de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 2921",
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
  "name": "Eu devo ter como retorno a \"Retorno de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 2922",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro\"",
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
  "name": "que eu tenha um 2923",
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
  "name": "Eu devo ter como retorno a \"Entrada de mercadoria recebida do vendedor remetente, em venda à ordem\"",
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
  "name": "que eu tenha um 2924",
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
  "name": "Eu devo ter como retorno a \"Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 2925",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 2931",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 2932",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 2933",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço tributado pelo ISSQN. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 2934",
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
  "name": "Eu devo ter como retorno a \"Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 2949",
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
  "name": "Eu devo ter como retorno a \"Outra entrada de mercadoria ou prestação de serviço não especificado\"",
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
  "name": "que eu tenha um 3000",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO EXTERIOR\"",
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
  "name": "que eu tenha um 3100",
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
  "name": "Eu devo ter como retorno a \"COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS\"",
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
  "name": "que eu tenha um 3101",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização\"",
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
  "name": "que eu tenha um 3102",
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
  "name": "que eu tenha um 3126",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 3127",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização sob o regime de drawback\"",
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
  "name": "que eu tenha um 3128",
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
  "name": "Eu devo ter como retorno a \"Compra para utilização na prestação de serviço sujeita ao ISSQN\"",
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
  "name": "que eu tenha um 3129",
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
  "name": "Eu devo ter como retorno a \"Compra para industrialização sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 3200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 3201",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento\"",
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
  "name": "que eu tenha um 3202",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de mercadoria adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 3205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de comunicação\"",
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
  "name": "que eu tenha um 3206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à prestação de serviço de transporte\"",
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
  "name": "que eu tenha um 3207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à venda de energia elétrica\"",
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
  "name": "que eu tenha um 3211",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de produção do estabelecimento sob o regime de drawback\"",
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
  "name": "que eu tenha um 3212",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda no mercado externo de mercadoria industrializada sob o Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 3250",
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
  "name": "Eu devo ter como retorno a \"COMPRAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 3300",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 3301",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 3350",
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
  "name": "Eu devo ter como retorno a \"AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 3351",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 3352",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento industrial\"",
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
  "name": "que eu tenha um 3353",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento comercial\"",
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
  "name": "que eu tenha um 3354",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 3355",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 3356",
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
  "name": "Eu devo ter como retorno a \"Aquisição de serviço de transporte por estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 3500",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE MERCADORIAS REMETIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\"",
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
  "name": "que eu tenha um 3503",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação\"",
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
  "name": "que eu tenha um 3550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO E CONSUMO\"",
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
  "name": "que eu tenha um 3551",
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
  "name": "Eu devo ter como retorno a \"Compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 3553",
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
  "name": "Eu devo ter como retorno a \"Devolução de venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 3556",
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
  "name": "Eu devo ter como retorno a \"Compra de material para uso ou consumo\"",
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
  "name": "que eu tenha um 3650",
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
  "name": "Eu devo ter como retorno a \"ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 3651",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para industrialização subseqüente\"",
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
  "name": "que eu tenha um 3652",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante para comercialização\"",
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
  "name": "que eu tenha um 3653",
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
  "name": "Eu devo ter como retorno a \"Compra de combustível ou lubrificante por consumidor ou usuário final\"",
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
  "name": "que eu tenha um 3900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS\"",
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
  "name": "que eu tenha um 3930",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária\"",
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
  "name": "que eu tenha um 3949",
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
  "name": "Eu devo ter como retorno a \"Outra entrada de mercadoria ou prestação de serviço não especificado\"",
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
  "name": "que eu tenha um 5000",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O ESTADO\"",
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
  "name": "que eu tenha um 5100",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\"",
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
  "name": "que eu tenha um 5101",
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
  "name": "que eu tenha um 5103",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, efetuada fora do estabelecimento\"",
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
  "name": "que eu tenha um 5104",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento\"",
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
  "name": "que eu tenha um 5105",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento que não deva por ele transitar\"",
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
  "name": "que eu tenha um 5106",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 5109",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 5110",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 5111",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 5112",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 5113",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 5114",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 5115",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 5116",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento originada de encomenda para entrega futura\"",
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
  "name": "que eu tenha um 5117",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura\"",
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
  "name": "que eu tenha um 5118",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"",
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
  "name": "que eu tenha um 5119",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"",
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
  "name": "que eu tenha um 5120",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\"",
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
  "name": "que eu tenha um 5122",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 5123",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 5124",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada para outra empresa\"",
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
  "name": "que eu tenha um 5125",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria\"",
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
  "name": "que eu tenha um 5129",
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
  "name": "Eu devo ter como retorno a \"Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped\"",
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
  "name": "que eu tenha um 5131",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção do estabelecimento, com previsão de posterior ajuste ou fixação de preço, de ato cooperativo.\"",
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
  "name": "que eu tenha um 5132",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço de ato cooperativo.\"",
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
  "name": "que eu tenha um 5150",
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
  "name": "Eu devo ter como retorno a \"TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\"",
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
  "name": "que eu tenha um 5151",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento\"",
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
  "name": "que eu tenha um 5152",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 5153",
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
  "name": "Eu devo ter como retorno a \"Transferência de energia elétrica\"",
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
  "name": "que eu tenha um 5155",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 5156",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 5159",
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
  "name": "Eu devo ter como retorno a \"Fornecimento de produção do estabelecimento de ato cooperativo\"",
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
  "name": "que eu tenha um 5160",
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
  "name": "Eu devo ter como retorno a \"Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\"",
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
  "name": "que eu tenha um 5200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 5201",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para industrialização\"",
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
  "name": "que eu tenha um 5202",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para comercialização\"",
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
  "name": "que eu tenha um 5205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo a aquisição de serviço de comunicação\"",
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
  "name": "que eu tenha um 5206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo a aquisição de serviço de transporte\"",
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
  "name": "que eu tenha um 5207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à compra de energia elétrica\"",
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
  "name": "que eu tenha um 5208",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em transferência para industrialização\"",
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
  "name": "que eu tenha um 5209",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em transferência para comercialização\"",
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
  "name": "que eu tenha um 5210",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 5213",
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
  "name": "Eu devo ter como retorno a \"Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\"",
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
  "name": "que eu tenha um 5214",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização.\"",
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
  "name": "que eu tenha um 5215",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para industrialização.\"",
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
  "name": "que eu tenha um 5216",
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
  "name": "Eu devo ter como retorno a \"Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\"",
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
  "name": "que eu tenha um 5250",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 5251",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para distribuição ou comercialização\"",
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
  "name": "que eu tenha um 5252",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento industrial\"",
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
  "name": "que eu tenha um 5253",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento comercial\"",
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
  "name": "que eu tenha um 5254",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 5255",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 5256",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 5257",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para consumo por demanda contratada\"",
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
  "name": "que eu tenha um 5258",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica a não contribuinte\"",
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
  "name": "que eu tenha um 5300",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 5301",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 5302",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento industrial\"",
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
  "name": "que eu tenha um 5303",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento comercial\"",
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
  "name": "que eu tenha um 5304",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 5305",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 5306",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 5307",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a não contribuinte\"",
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
  "name": "que eu tenha um 5350",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 5351",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 5352",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento industrial\"",
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
  "name": "que eu tenha um 5353",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento comercial\"",
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
  "name": "que eu tenha um 5354",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 5355",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 5356",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 5357",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a não contribuinte\"",
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
  "name": "que eu tenha um 5359",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 5360",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte.\"",
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
  "name": "que eu tenha um 5400",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\"",
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
  "name": "que eu tenha um 5401",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto\"",
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
  "name": "que eu tenha um 5402",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto\"",
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
  "name": "que eu tenha um 5403",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituto\"",
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
  "name": "que eu tenha um 5405",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituído\"",
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
  "name": "que eu tenha um 5408",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5409",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5410",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5411",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5412",
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
  "name": "Eu devo ter como retorno a \"Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5413",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária.\"",
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
  "name": "que eu tenha um 5414",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5415",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 5450",
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
  "name": "Eu devo ter como retorno a \"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\"",
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
  "name": "que eu tenha um 5451",
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
  "name": "Eu devo ter como retorno a \"Remessa de animal - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5452",
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
  "name": "Eu devo ter como retorno a \"Remessa de insumo - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5453",
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
  "name": "Eu devo ter como retorno a \"Retorno de animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5454",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5455",
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
  "name": "Eu devo ter como retorno a \"Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5456",
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
  "name": "Eu devo ter como retorno a \"Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 5500",
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
  "name": "Eu devo ter como retorno a \"REMESSAS PARA FORMAÇÃO DE LOTE E COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVETUAIS DEVOLUÇÕES\"",
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
  "name": "que eu tenha um 5501",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção do estabelecimento, com fim específico de exportação\"",
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
  "name": "que eu tenha um 5502",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\"",
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
  "name": "que eu tenha um 5503",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida com fim específico de exportação\"",
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
  "name": "que eu tenha um 5504",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\"",
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
  "name": "que eu tenha um 5505",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\"",
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
  "name": "que eu tenha um 5550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\"",
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
  "name": "que eu tenha um 5551",
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
  "name": "Eu devo ter como retorno a \"Venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 5552",
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
  "name": "Eu devo ter como retorno a \"Transferência de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 5553",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 5554",
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
  "name": "Eu devo ter como retorno a \"Remessa de bem do ativo imobilizado para uso fora do estabelecimento\"",
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
  "name": "que eu tenha um 5555",
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
  "name": "Eu devo ter como retorno a \"Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento\"",
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
  "name": "que eu tenha um 5556",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de material de uso ou consumo\"",
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
  "name": "que eu tenha um 5557",
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
  "name": "Eu devo ter como retorno a \"Transferência de material de uso ou consumo\"",
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
  "name": "que eu tenha um 5600",
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
  "name": "Eu devo ter como retorno a \"CRÉDITOS E RESSARCIMENTOS DE ICMS\"",
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
  "name": "que eu tenha um 5601",
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
  "name": "Eu devo ter como retorno a \"Transferência de crédito de ICMS acumulado\"",
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
  "name": "que eu tenha um 5602",
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
  "name": "Eu devo ter como retorno a \"Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS\"",
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
  "name": "que eu tenha um 5603",
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
  "name": "Eu devo ter como retorno a \"Ressarcimento de ICMS retido por substituição tributária\"",
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
  "name": "que eu tenha um 5605",
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
  "name": "Eu devo ter como retorno a \"Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 5606",
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
  "name": "Eu devo ter como retorno a \"Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais.\"",
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
  "name": "que eu tenha um 5650",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 5651",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 5652",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização\"",
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
  "name": "que eu tenha um 5653",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 5654",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 5655",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização\"",
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
  "name": "que eu tenha um 5656",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 5657",
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
  "name": "Eu devo ter como retorno a \"Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 5658",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível ou lubrificante de produção do estabelecimento\"",
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
  "name": "que eu tenha um 5659",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível ou lubrificante adquirido ou recebido de terceiro\"",
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
  "name": "que eu tenha um 5660",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente\"",
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
  "name": "que eu tenha um 5661",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido para comercialização\"",
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
  "name": "que eu tenha um 5662",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final\"",
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
  "name": "que eu tenha um 5663",
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
  "name": "Eu devo ter como retorno a \"Remessa para armazenagem de combustível ou lubrificante\"",
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
  "name": "que eu tenha um 5664",
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
  "name": "Eu devo ter como retorno a \"Retorno de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 5665",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 5666",
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
  "name": "Eu devo ter como retorno a \"Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 5667",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação\"",
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
  "name": "que eu tenha um 5900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\"",
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
  "name": "que eu tenha um 5901",
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
  "name": "Eu devo ter como retorno a \"Remessa para industrialização por encomenda\"",
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
  "name": "que eu tenha um 5902",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria utilizada na industrialização por encomenda\"",
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
  "name": "que eu tenha um 5903",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria recebida para industrialização e não aplicada no referido processo\"",
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
  "name": "que eu tenha um 5904",
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
  "name": "Eu devo ter como retorno a \"Remessa para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 5905",
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
  "name": "Eu devo ter como retorno a \"Remessa para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 5906",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria depositada em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 5907",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 5908",
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
  "name": "Eu devo ter como retorno a \"Remessa de bem por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 5909",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem recebido por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 5910",
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
  "name": "Eu devo ter como retorno a \"Remessa em bonificação, doação ou brinde\"",
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
  "name": "que eu tenha um 5911",
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
  "name": "Eu devo ter como retorno a \"Remessa de amostra grátis\"",
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
  "name": "que eu tenha um 5912",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para demonstração\"",
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
  "name": "que eu tenha um 5913",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem recebido para demonstração\"",
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
  "name": "que eu tenha um 5914",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para exposição ou feira\"",
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
  "name": "que eu tenha um 5915",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para conserto ou reparo\"",
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
  "name": "que eu tenha um 5916",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem recebido para conserto ou reparo\"",
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
  "name": "que eu tenha um 5917",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 5918",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 5919",
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
  "name": "Eu devo ter como retorno a \"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 5920",
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
  "name": "Eu devo ter como retorno a \"Remessa de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 5921",
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
  "name": "Eu devo ter como retorno a \"Devolução de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 5922",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"",
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
  "name": "que eu tenha um 5923",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado\"",
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
  "name": "que eu tenha um 5924",
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
  "name": "Eu devo ter como retorno a \"Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 5925",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 5926",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação\"",
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
  "name": "que eu tenha um 5927",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração\"",
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
  "name": "que eu tenha um 5928",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa\"",
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
  "name": "que eu tenha um 5929",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também acobertada por documento fiscal do varejo\"",
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
  "name": "que eu tenha um 5931",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço\"",
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
  "name": "que eu tenha um 5932",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador\"",
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
  "name": "que eu tenha um 5933",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço tributado pelo ISSQN. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 5934",
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
  "name": "Eu devo ter como retorno a \"Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado\"",
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
  "name": "que eu tenha um 5949",
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
  "name": "Eu devo ter como retorno a \"Outra saída de mercadoria ou prestação de serviço não especificado\"",
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
  "name": "que eu tenha um 6000",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA OUTROS ESTADOS\"",
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
  "name": "que eu tenha um 6100",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\"",
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
  "name": "que eu tenha um 6102",
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
  "name": "que eu tenha um 6103",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, efetuada fora do estabelecimento\"",
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
  "name": "que eu tenha um 6104",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento\"",
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
  "name": "que eu tenha um 6105",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento que não deva por ele transitar\"",
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
  "name": "que eu tenha um 6106",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 6107",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, destinada a não contribuinte\"",
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
  "name": "que eu tenha um 6108",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte\"",
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
  "name": "que eu tenha um 6109",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 6110",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio\"",
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
  "name": "que eu tenha um 6111",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 6112",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial\"",
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
  "name": "que eu tenha um 6113",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 6114",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 6115",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil\"",
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
  "name": "que eu tenha um 6116",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento originada de encomenda para entrega futura\"",
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
  "name": "que eu tenha um 6117",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura\"",
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
  "name": "que eu tenha um 6118",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"",
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
  "name": "que eu tenha um 6119",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem\"",
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
  "name": "que eu tenha um 6120",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem\"",
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
  "name": "que eu tenha um 6122",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 6123",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 6124",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada para outra empresa\"",
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
  "name": "que eu tenha um 6125",
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
  "name": "Eu devo ter como retorno a \"Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria\"",
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
  "name": "que eu tenha um 6129",
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
  "name": "Eu devo ter como retorno a \"Venda de insumo importado e de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 6131",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção de estabelecimento, com previsão de posterior ajuste ou fixação de preço de ato cooperativo.\"",
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
  "name": "que eu tenha um 6132",
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
  "name": "Eu devo ter como retorno a \"Fixação de preço de produção do estabelecimento, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço ou fixação de preço de ato cooperativo.\"",
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
  "name": "que eu tenha um 6150",
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
  "name": "Eu devo ter como retorno a \"TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\"",
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
  "name": "que eu tenha um 6151",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento\"",
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
  "name": "que eu tenha um 6152",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros\"",
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
  "name": "que eu tenha um 6153",
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
  "name": "Eu devo ter como retorno a \"Transferência de energia elétrica\"",
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
  "name": "que eu tenha um 6155",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 6156",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 6159",
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
  "name": "Eu devo ter como retorno a \"Fornecimento de produção do estabelecimento de ato cooperativo\"",
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
  "name": "que eu tenha um 6160",
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
  "name": "Eu devo ter como retorno a \"Fornecimento de mercadoria adquirida ou recebida de terceiros de ato cooperativo\"",
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
  "name": "que eu tenha um 6200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 6201",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para industrialização\"",
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
  "name": "que eu tenha um 6202",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para comercialização\"",
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
  "name": "que eu tenha um 6205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo a aquisição de serviço de comunicação\"",
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
  "name": "que eu tenha um 6206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo a aquisição de serviço de transporte\"",
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
  "name": "que eu tenha um 6207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à compra de energia elétrica\"",
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
  "name": "que eu tenha um 6208",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em transferência para industrialização\"",
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
  "name": "que eu tenha um 6209",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em transferência para comercialização\"",
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
  "name": "que eu tenha um 6210",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 6213",
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
  "name": "Eu devo ter como retorno a \"Devolução de entrada de mercadoria com previsão de posterior ajuste ou fixação de preço, em ato cooperativo.\"",
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
  "name": "que eu tenha um 6214",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo, para comercialização.\"",
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
  "name": "que eu tenha um 6215",
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
  "name": "Eu devo ter como retorno a \"Devolução de fixação de preço de produção do estabelecimento produtor, inclusive quando remetidas anteriormente com previsão de posterior ajuste ou fixação de preço, de ato cooperativo para industrialização.\"",
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
  "name": "que eu tenha um 6216",
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
  "name": "Eu devo ter como retorno a \"Devolução de entrada decorrente do fornecimento de produto ou mercadoria de ato cooperativo\"",
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
  "name": "que eu tenha um 6250",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 6251",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para distribuição ou comercialização\"",
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
  "name": "que eu tenha um 6252",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento industrial\"",
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
  "name": "que eu tenha um 6253",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento comercial\"",
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
  "name": "que eu tenha um 6254",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 6255",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 6256",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 6257",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para consumo por demanda contratada\"",
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
  "name": "que eu tenha um 6258",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica a não contribuinte\"",
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
  "name": "que eu tenha um 6300",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 6301",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 6302",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento industrial\"",
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
  "name": "que eu tenha um 6303",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento comercial\"",
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
  "name": "que eu tenha um 6304",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte\"",
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
  "name": "que eu tenha um 6305",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 6306",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 6307",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação a não contribuinte\"",
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
  "name": "que eu tenha um 6350",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 6351",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 6352",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento industrial\"",
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
  "name": "que eu tenha um 6353",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento comercial\"",
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
  "name": "que eu tenha um 6354",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação\"",
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
  "name": "que eu tenha um 6355",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica\"",
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
  "name": "que eu tenha um 6356",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a estabelecimento de produtor rural\"",
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
  "name": "que eu tenha um 6357",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a não contribuinte\"",
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
  "name": "que eu tenha um 6359",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 6360",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte\"",
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
  "name": "que eu tenha um 6400",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA\"",
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
  "name": "que eu tenha um 6401",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto\"",
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
  "name": "que eu tenha um 6402",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto\"",
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
  "name": "que eu tenha um 6403",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto\"",
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
  "name": "que eu tenha um 6404",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria sujeita ao regime de substituição tributária, cujo imposto já tenha sido retido anteriormente\"",
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
  "name": "que eu tenha um 6408",
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
  "name": "Eu devo ter como retorno a \"Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6409",
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
  "name": "Eu devo ter como retorno a \"Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6410",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6411",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6412",
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
  "name": "Eu devo ter como retorno a \"Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6413",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6414",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6415",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária\"",
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
  "name": "que eu tenha um 6450",
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
  "name": "Eu devo ter como retorno a \"SISTEMAS DE INTEGRAÇÃO E PARCERIA RURAL\"",
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
  "name": "que eu tenha um 6451",
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
  "name": "Eu devo ter como retorno a \"Remessa de animal - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6452",
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
  "name": "Eu devo ter como retorno a \"Remessa de insumo - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6453",
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
  "name": "Eu devo ter como retorno a \"Retorno de animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6454",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de animal ou da produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6455",
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
  "name": "Eu devo ter como retorno a \"Retorno de insumos não utilizados na produção - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6456",
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
  "name": "Eu devo ter como retorno a \"Saída referente a remuneração do produtor - Sistema de Integração e Parceria Rural\"",
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
  "name": "que eu tenha um 6500",
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
  "name": "Eu devo ter como retorno a \"REMESSAS PARA FORMAÇÃO DE LOTE E COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES\"",
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
  "name": "que eu tenha um 6501",
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
  "name": "Eu devo ter como retorno a \"Remessa de produção do estabelecimento, com fim específico de exportação\"",
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
  "name": "que eu tenha um 6502",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação\"",
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
  "name": "que eu tenha um 6503",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida com fim específico de exportação\"",
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
  "name": "que eu tenha um 6504",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.\"",
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
  "name": "que eu tenha um 6505",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação\"",
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
  "name": "que eu tenha um 6550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\"",
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
  "name": "que eu tenha um 6551",
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
  "name": "Eu devo ter como retorno a \"Venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 6552",
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
  "name": "Eu devo ter como retorno a \"Transferência de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 6553",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 6554",
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
  "name": "Eu devo ter como retorno a \"Remessa de bem do ativo imobilizado para uso fora do estabelecimento\"",
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
  "name": "que eu tenha um 6555",
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
  "name": "Eu devo ter como retorno a \"Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento\"",
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
  "name": "que eu tenha um 6556",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de material de uso ou consumo\"",
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
  "name": "que eu tenha um 6557",
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
  "name": "Eu devo ter como retorno a \"Transferência de material de uso ou consumo\"",
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
  "name": "que eu tenha um 6600",
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
  "name": "Eu devo ter como retorno a \"CRÉDITOS E RESSARCIMENTOS DE ICMS\"",
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
  "name": "que eu tenha um 6603",
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
  "name": "Eu devo ter como retorno a \"Ressarcimento de ICMS retido por substituição tributária\"",
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
  "name": "que eu tenha um 6650",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 6651",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 6652",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização\"",
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
  "name": "que eu tenha um 6653",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 6654",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 6655",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização\"",
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
  "name": "que eu tenha um 6656",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 6657",
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
  "name": "Eu devo ter como retorno a \"Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 6658",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível ou lubrificante de produção do estabelecimento\"",
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
  "name": "que eu tenha um 6659",
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
  "name": "Eu devo ter como retorno a \"Transferência de combustível ou lubrificante adquirido ou recebido de terceiro\"",
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
  "name": "que eu tenha um 6660",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente\"",
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
  "name": "que eu tenha um 6661",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido para comercialização\"",
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
  "name": "que eu tenha um 6662",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final\"",
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
  "name": "que eu tenha um 6663",
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
  "name": "Eu devo ter como retorno a \"Remessa para armazenagem de combustível ou lubrificante\"",
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
  "name": "que eu tenha um 6664",
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
  "name": "Eu devo ter como retorno a \"Retorno de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 6665",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 6666",
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
  "name": "Eu devo ter como retorno a \"Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem\"",
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
  "name": "que eu tenha um 6667",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação diferente a da que ocorrer o consumo\"",
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
  "name": "que eu tenha um 6900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\"",
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
  "name": "que eu tenha um 6901",
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
  "name": "Eu devo ter como retorno a \"Remessa para industrialização por encomenda\"",
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
  "name": "que eu tenha um 6902",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria utilizada na industrialização por encomenda\"",
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
  "name": "que eu tenha um 6903",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria recebida para industrialização e não aplicada no referido processo\"",
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
  "name": "que eu tenha um 6904",
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
  "name": "Eu devo ter como retorno a \"Remessa para venda fora do estabelecimento\"",
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
  "name": "que eu tenha um 6905",
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
  "name": "Eu devo ter como retorno a \"Remessa para depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 6906",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria depositada em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 6907",
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
  "name": "Eu devo ter como retorno a \"Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral\"",
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
  "name": "que eu tenha um 6908",
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
  "name": "Eu devo ter como retorno a \"Remessa de bem por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 6909",
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
  "name": "Eu devo ter como retorno a \"Retorno de bem recebido por conta de contrato de comodato ou locação\"",
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
  "name": "que eu tenha um 6910",
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
  "name": "Eu devo ter como retorno a \"Remessa em bonificação, doação ou brinde\"",
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
  "name": "que eu tenha um 6911",
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
  "name": "Eu devo ter como retorno a \"Remessa de amostra grátis\"",
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
  "name": "que eu tenha um 6912",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para demonstração\"",
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
  "name": "que eu tenha um 6913",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem recebido para demonstração\"",
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
  "name": "que eu tenha um 6914",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para exposição ou feira\"",
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
  "name": "que eu tenha um 6915",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria ou bem para conserto ou reparo\"",
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
  "name": "que eu tenha um 6916",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria ou bem recebido para conserto ou reparo\"",
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
  "name": "que eu tenha um 6917",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 6918",
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
  "name": "Eu devo ter como retorno a \"Devolução de mercadoria recebida em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 6919",
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
  "name": "Eu devo ter como retorno a \"Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial\"",
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
  "name": "que eu tenha um 6920",
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
  "name": "Eu devo ter como retorno a \"Remessa de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 6921",
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
  "name": "Eu devo ter como retorno a \"Devolução de vasilhame ou sacaria\"",
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
  "name": "que eu tenha um 6922",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura\"",
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
  "name": "que eu tenha um 6923",
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
  "name": "Eu devo ter como retorno a \"Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado\"",
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
  "name": "que eu tenha um 6924",
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
  "name": "Eu devo ter como retorno a \"Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 6925",
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
  "name": "Eu devo ter como retorno a \"Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente\"",
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
  "name": "que eu tenha um 6929",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF\"",
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
  "name": "que eu tenha um 6931",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço\"",
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
  "name": "que eu tenha um 6932",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador\"",
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
  "name": "que eu tenha um 6933",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço tributado pelo ISSQN (ajuste sinief 03/04)\"",
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
  "name": "que eu tenha um 6934",
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
  "name": "Eu devo ter como retorno a \"Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado\"",
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
  "name": "que eu tenha um 6949",
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
  "name": "Eu devo ter como retorno a \"Outra saída de mercadoria ou prestação de serviço não especificado\"",
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
  "name": "que eu tenha um 7000",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O EXTERIOR\"",
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
  "name": "que eu tenha um 7100",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS\"",
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
formatter.scenario({
  "name": "Pesquisar uma CFOP pelo código",
  "description": "",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "name": "que eu tenha um 7102",
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
  "name": "que eu tenha um 7105",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 7106",
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
  "name": "Eu devo ter como retorno a \"Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar\"",
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
  "name": "que eu tenha um 7127",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento sob o regime de drawback\"",
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
  "name": "que eu tenha um 7129",
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
  "name": "Eu devo ter como retorno a \"Venda de produção do estabelecimento ao mercado externo de mercadoria industrializada sob o amparo do Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 7200",
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
  "name": "Eu devo ter como retorno a \"DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES\"",
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
  "name": "que eu tenha um 7201",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para industrialização\"",
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
  "name": "que eu tenha um 7202",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para comercialização\"",
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
  "name": "que eu tenha um 7205",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à aquisição de serviço de comunicação\"",
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
  "name": "que eu tenha um 7206",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo a aquisição de serviço de transporte\"",
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
  "name": "que eu tenha um 7207",
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
  "name": "Eu devo ter como retorno a \"Anulação de valor relativo à compra de energia elétrica\"",
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
  "name": "que eu tenha um 7210",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra para utilização na prestação de serviço\"",
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
  "name": "que eu tenha um 7211",
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
  "name": "Eu devo ter como retorno a \"Devolução de compras para industrialização sob o regime de drawback\"",
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
  "name": "que eu tenha um 7212",
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
  "name": "Eu devo ter como retorno a \"Devolução de compras para industrialização sob o regime de Regime Aduaneiro Especial de Entreposto Industrial sob Controle Informatizado do Sistema Público de Escrituração Digital (Recof-Sped)\"",
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
  "name": "que eu tenha um 7250",
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
  "name": "Eu devo ter como retorno a \"VENDAS DE ENERGIA ELÉTRICA\"",
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
  "name": "que eu tenha um 7251",
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
  "name": "Eu devo ter como retorno a \"Venda de energia elétrica para o exterior\"",
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
  "name": "que eu tenha um 7300",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO\"",
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
  "name": "que eu tenha um 7301",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de comunicação para execução de serviço da mesma natureza\"",
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
  "name": "que eu tenha um 7350",
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
  "name": "Eu devo ter como retorno a \"PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE\"",
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
  "name": "que eu tenha um 7358",
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
  "name": "Eu devo ter como retorno a \"Prestação de serviço de transporte\"",
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
  "name": "que eu tenha um 7500",
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
  "name": "Eu devo ter como retorno a \"EXPORTAÇÃO DE MERCADORIAS RECEBIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO\"",
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
  "name": "que eu tenha um 7501",
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
  "name": "Eu devo ter como retorno a \"Exportação de mercadorias recebidas com fim específico de exportação\"",
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
  "name": "que eu tenha um 7504",
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
  "name": "Eu devo ter como retorno a \"Exportação de mercadoria que foi objeto de formação de lote de exportação\"",
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
  "name": "que eu tenha um 7550",
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
  "name": "Eu devo ter como retorno a \"OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO\"",
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
  "name": "que eu tenha um 7551",
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
  "name": "Eu devo ter como retorno a \"Venda de bem do ativo imobilizado\"",
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
  "name": "que eu tenha um 7553",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de bem para o ativo imobilizado\"",
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
  "name": "que eu tenha um 7556",
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
  "name": "Eu devo ter como retorno a \"Devolução de compra de material de uso ou consumo\"",
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
  "name": "que eu tenha um 7650",
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
  "name": "Eu devo ter como retorno a \"SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO E LUBRIFICANTES\"",
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
  "name": "que eu tenha um 7651",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 7654",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente\"",
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
  "name": "que eu tenha um 7667",
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
  "name": "Eu devo ter como retorno a \"Venda de combustível ou lubrificante a consumidor ou usuário final\"",
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
  "name": "que eu tenha um 7900",
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
  "name": "Eu devo ter como retorno a \"OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS\"",
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
  "name": "que eu tenha um 7930",
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
  "name": "Eu devo ter como retorno a \"Lançamento efetuado a título de devolução de bem cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária\"",
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
  "name": "que eu tenha um 7949",
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
  "name": "Eu devo ter como retorno a \"Outra saída de mercadoria ou prestação de serviço não especificado\"",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_ter_como_retorno_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Busca de um CFOP inexistente",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que eu busco por uma CFOP inválida 5217",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.que_eu_busco_por_uma_CFOP_inválida(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu solicitar a busca desta CFOP",
  "keyword": "Quando "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_solicitar_a_busca_desta_CFOP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Eu devo retornar que a CFOP não existe",
  "keyword": "Então "
});
formatter.match({
  "location": "com.devops.govtables.CfopTest.eu_devo_retornar_que_a_CFOP_não_existe()"
});
formatter.result({
  "status": "passed"
});
});