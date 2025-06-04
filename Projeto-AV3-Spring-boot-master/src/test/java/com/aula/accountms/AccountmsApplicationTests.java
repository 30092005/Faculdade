package com.aula.accountms;

import com.aula.accountms.entity.Todo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application.yaml")
class AccountmsApplicationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void TesteSucesso() {
        var todo = new Todo("todo 1", "desc todo 1", false, 1);

        // Faz a requisição POST
        ResponseEntity<Todo[]> response = restTemplate.postForEntity("/todos", todo, Todo[].class);

        // Verifica o status da resposta
        assertEquals(HttpStatus.OK, response.getStatusCode());

        // Verifica o corpo da resposta
        Todo[] todos = response.getBody();
        assertNotNull(todos);
        assertEquals(1, todos.length);
        assertEquals(todo.getNome(), todos[0].getNome());
        assertEquals(todo.getDescricao(), todos[0].getDescricao());
        assertEquals(todo.isRealizado(), todos[0].isRealizado());
        assertEquals(todo.getPrioridade(), todos[0].getPrioridade());
    }

    @Test
    void TesteErro() {
        var todo = new Todo("", "", false, 0);

        // Faz a requisição POST
        ResponseEntity<String> response = restTemplate.postForEntity("/todos", todo, String.class);

        // Verifica o status da resposta
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }
}