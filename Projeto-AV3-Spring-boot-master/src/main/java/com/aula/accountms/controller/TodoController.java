package com.aula.accountms.controller;

import com.aula.accountms.entity.Todo;
import com.aula.accountms.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aula.accountms.DTO.request.requestDadosDto;
import com.aula.accountms.DTO.response.responseDadosDto;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    public TodoController() {
    }

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    List <responseDadosDto> create(@RequestBody @Valid requestDadosDto requestDto){
    return todoService.create(requestDto);
    }

    @GetMapping
    List <responseDadosDto> list(){
    return todoService.list();
    }

    @PutMapping
    List <responseDadosDto> update(@RequestBody requestDadosDto requestDto){
    return todoService.update(requestDto);
    }

    @DeleteMapping("{id}")
    List <responseDadosDto> delete(@PathVariable("id") Long id){
    return todoService.delete(id);
    }
}
