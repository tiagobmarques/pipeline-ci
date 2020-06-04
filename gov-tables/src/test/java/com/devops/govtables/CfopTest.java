package com.devops.govtables;

import com.devops.govtables.services.CfopServices;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.assertTrue;

public class CfopTest {

    private Integer cfop;
    private CfopServices cfopServices;

    // Scenario 1 - See the CFOP counting
    @Given("que eu tenha um {int}")
    public void que_eu_tenha_um(Integer cfop) {
        this.cfop = cfop;
    }

    @When("Eu solicitar a listagem destas CFOP's")
    public void eu_solicitar_a_listagem_destas_CFOP_s() {
        cfopServices = new CfopServices();
    }

    @Then("Eu devo ter como retorno a {string}")
    public void eu_devo_ter_como_retorno_a(String string) {
        String description;
        description = cfopServices.getCfop(cfop).getDescription();
        assertTrue(string.equals(description));
    }

    // Scenario 2 - Search a CFOP by code
    @Given("que eu quero uma listagem de CFOP's")
    public void que_eu_quero_uma_listagem_de_CFOP_s() {
        cfopServices = new CfopServices();
    }

    @Then("Eu devo ter um total de {int} cfops")
    public void eu_devo_ter_um_total_de_cfops(Integer int1) {
        Long count = cfopServices.getListCfops().stream().count();
        assertTrue(count.equals(Long.parseLong(int1.toString())));
    }

    // Scenario 3 - Search a invalid CFOP
//    @Given("que eu busco por uma CFOP inválida {int}")
//    public void que_eu_busco_por_uma_CFOP_inválida(Integer cfop) {
//        this.cfop = cfop;
//    }
//
//    @When("Eu solicitar a busca desta CFOP")
//    public void eu_solicitar_a_busca_desta_CFOP() {
//        cfopServices = new CfopServices();
//    }
//
//    @Then("Eu devo retornar que a CFOP não existe")
//    public void eu_devo_retornar_que_a_CFOP_não_existe() {
//        assertTrue(cfopServices.getCfop(cfop).getCode().equals(Integer.parseInt("0")));
//    }
}
