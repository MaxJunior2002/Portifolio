package com.portfolio.emailjsbackend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class ContactRequest {

    @NotBlank(message = "Nome é obrigatório")
    private String name;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;

    @NotBlank(message = "Assunto é obrigatório")
    private String subject;

    @NotBlank(message = "Mensagem é obrigatória")
    private String message;

    public ContactRequest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @JsonProperty("name")
    public String getNameJson() {
        return name;
    }

    @JsonProperty("email")
    public String getEmailJson() {
        return email;
    }

    @JsonProperty("subject")
    public String getSubjectJson() {
        return subject;
    }

    @JsonProperty("message")
    public String getMessageJson() {
        return message;
    }
}
