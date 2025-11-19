package com.lingo.chatbot.httpClient;

import com.lingo.chatbot.model.ResPaginationDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "test-service",url = "http://localhost:8080/api/v1/test")
public interface TestClient {
    @GetMapping("/all")
    ResponseEntity<ResPaginationDTO> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    );



}

