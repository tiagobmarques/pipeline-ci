#language: pt
Funcionalidade: Consulta de CFOP'S

  Cenário: Ver a quantidade de CFOP cadastradas
    Dado que eu quero uma listagem de CFOP's
    Quando Eu solicitar a listagem destas CFOP's
    Então Eu devo ter um total de 692 cfops

  Delineação do Cenário: Pesquisar uma CFOP pelo código
    Dado que eu tenha um <cfop>
    Quando Eu solicitar a listagem destas CFOP's
    Então Eu devo ter como retorno a <descricao>

    Exemplos:
      |cfop       |descricao                                                          |
      |1102       |"Compra para comercialização"                                      |
      |2151       |"Transferência para industrialização"                              |
      |3251       |"Compra de energia elétrica para distribuição ou comercialização"  |
      |5102       |"Venda de mercadoria adquirida ou recebida de terceiros"           |
      |6101       |"Venda de produção do estabelecimento"                             |
      |7101       |"Venda de produção do estabelecimento"                             |
