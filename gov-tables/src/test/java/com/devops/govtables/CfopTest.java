package com.devops.govtables;

import com.devops.govtables.services.CfopServices;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import static org.junit.Assert.assertTrue;

public class CfopTest {

    private Integer cfop;
    private CfopServices cfopServices;

    @Dado("que eu tenha um {int}")
    public void que_eu_tenha_um(Integer cfop) {
        this.cfop = cfop;
    }

    @Quando("Eu solicitar a listagem destas CFOP's")
    public void eu_solicitar_a_listagem_destas_CFOP_s() {
        cfopServices = new CfopServices();
    }

    @Entao("Eu devo ter como retorno a {string}")
    public void eu_devo_ter_como_retorno_a(String string) {
        String description;
        description = cfopServices.getCfop(cfop).getDescription();
        assertTrue(string.equals(description));
    }

    @Dado("que eu quero uma listagem de CFOP's")
    public void que_eu_quero_uma_listagem_de_CFOP_s() {
        cfopServices = new CfopServices();
    }

    @Entao("Eu devo ter um total de {int} cfops")
    public void eu_devo_ter_um_total_de_cfops(Integer int1) {
        Long count = cfopServices.getListCfops().stream().count();
        assertTrue(count.equals(Long.parseLong(int1.toString())));
    }

}
