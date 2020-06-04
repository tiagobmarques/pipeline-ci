package com.devops.govtables.services;

import java.time.LocalDate;

public class Cfop {

    private Integer code;
    private String description;
    private String type;
    private LocalDate startDate;
    private LocalDate endDate;

    public Cfop(Integer code, String description, String type) {
        this.code = code;
        this.description = description;
        this.type = type;
        this.startDate = LocalDate.of(2009,1,1);
        this.endDate = LocalDate.of(2009,1,1);
    }

    public Integer getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

}
