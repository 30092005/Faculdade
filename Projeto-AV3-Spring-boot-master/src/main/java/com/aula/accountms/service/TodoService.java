package com.aula.accountms.service;
import com.aula.accountms.mapper.TodoMapper;
import com.aula.accountms.repository.TodoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.aula.accountms.DTO.response.responseDadosDto;
import com.aula.accountms.DTO.request.requestDadosDto;
import java.util.List;
import java.util.stream.Collectors;

import com.aula.accountms.entity.Todo;

    @Service
    public class TodoService {
        private TodoRepository todoRepository;

        public TodoService(TodoRepository todoRepository) {
            this.todoRepository = todoRepository;
        }

        public List<responseDadosDto> create(requestDadosDto requestDto){
            Todo todo = TodoMapper.toEntity(requestDto);
            todoRepository.save(todo);
            return list();
    }
    public List<responseDadosDto> list(){
       Sort sort = Sort.by( "prioridade").descending().and(
          Sort.by("nome").ascending());
       List<Todo> todos = todoRepository.findAll(sort);
           return todos.stream()
                   .map(TodoMapper::toDto)
                   .collect(Collectors.toList());
        }
        public List<responseDadosDto> update(requestDadosDto requestDto){
            Todo todo = TodoMapper.toEntity(requestDto);
            todoRepository.save(todo);
            return list();
        }
        public List<responseDadosDto> delete(Long id){
            todoRepository.deleteById(id);
            return list();
        }
    }

