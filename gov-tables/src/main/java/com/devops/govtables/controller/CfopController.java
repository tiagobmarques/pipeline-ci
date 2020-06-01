package com.devops.govtables.controller;

import com.devops.govtables.services.Cfop;
import com.devops.govtables.services.CfopServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("escrita")
public class CfopController {

    @Autowired
    private CfopServices cfopServices;

    @GetMapping("v1/cfops")
    public List<Cfop> getCfop() {
        return cfopServices.getListCfops();
    }

    @GetMapping("v1/cfop")
    public Cfop getCfop(@RequestParam(required = false, name = "code") Integer id) {
        return cfopServices.getCfop(id);
    }
}
