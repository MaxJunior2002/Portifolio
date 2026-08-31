package com.portfolio.emailjsbackend.controller;

import com.portfolio.emailjsbackend.dto.ContactRequest;
import com.portfolio.emailjsbackend.service.EmailJsService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {

    private final EmailJsService emailJsService;

    public ContactController(EmailJsService emailJsService) {
        this.emailJsService = emailJsService;
    }

    @PostMapping("/contact")
    public ResponseEntity<?> sendContact(@Valid @RequestBody ContactRequest request) {
        emailJsService.sendEmail(request);
        return ResponseEntity.ok().body("Mensagem enviada com sucesso");
    }
}
