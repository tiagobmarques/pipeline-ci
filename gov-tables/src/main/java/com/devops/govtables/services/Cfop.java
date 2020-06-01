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

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Cfop{" +
                "code=" + code +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
