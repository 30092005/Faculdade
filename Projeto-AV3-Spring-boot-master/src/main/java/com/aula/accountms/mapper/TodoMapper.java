package com.aula.accountms.mapper;

import com.aula.accountms.DTO.request.requestDadosDto;
import com.aula.accountms.DTO.response.responseDadosDto;
import com.aula.accountms.entity.Todo;

public class TodoMapper {

    public TodoMapper() {
    }

    public static Todo toEntity(requestDadosDto requestDto) {
        Todo todo = new Todo();
        todo.setId(requestDto.getId());
        todo.setNome(requestDto.getNome());
        todo.setDescricao(requestDto.getDescricao());
        todo.setRealizado(requestDto.isRealizado());
        todo.setPrioridade(requestDto.getPrioridade());
        return todo;
    }

    public static responseDadosDto toDto(Todo todo) {
        return new responseDadosDto(
                todo.getId(),
                todo.getNome(),
                todo.getDescricao(),
                todo.isRealizado(),
                todo.getPrioridade()
        );
    }
}
