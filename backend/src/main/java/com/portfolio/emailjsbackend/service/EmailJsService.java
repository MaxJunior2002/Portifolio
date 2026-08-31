package com.portfolio.emailjsbackend.service;

import com.portfolio.emailjsbackend.config.EmailJsProperties;
import com.portfolio.emailjsbackend.dto.ContactRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class EmailJsService {

    private final EmailJsProperties emailJsProperties;
    private final RestTemplate restTemplate;

    public EmailJsService(EmailJsProperties emailJsProperties) {
        this.emailJsProperties = emailJsProperties;
        this.restTemplate = new RestTemplate();
    }

    public void sendEmail(ContactRequest request) {
        String url = "https://api.emailjs.com/api/v1.0/email/send";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> payload = Map.of(
                "service_id", emailJsProperties.getServiceId(),
                "template_id", emailJsProperties.getTemplateId(),
                "user_id", emailJsProperties.getPublicKey(),
                "accessToken", emailJsProperties.getPrivateKey(),
                "template_params", Map.of(
                        "from_name", request.getName(),
                        "from_email", request.getEmail(),
                        "subject", request.getSubject(),
                        "message", request.getMessage()
                )
        );

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

            if (!response.getStatusCode().is2xxSuccessful()) {
                throw new IllegalStateException("Erro ao enviar para EmailJS: " + response.getBody());
            }
        } catch (RestClientException e) {
            throw new IllegalStateException("Falha na comunicação com o EmailJS", e);
        }
    }
}
