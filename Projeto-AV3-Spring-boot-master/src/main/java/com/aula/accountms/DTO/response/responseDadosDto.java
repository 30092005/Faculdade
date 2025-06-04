package com.aula.accountms.DTO.response;

public class responseDadosDto {
    private Long id;
    private String nome;
    private String descricao;
    private boolean realizado;
    private int prioridade;

    public responseDadosDto() {
    }

    public responseDadosDto(Long id, String nome, String descricao, boolean realizado, int prioridade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public boolean isRealizado() {
        return realizado;
    }

    public int getPrioridade() {
        return prioridade;
    }
}
