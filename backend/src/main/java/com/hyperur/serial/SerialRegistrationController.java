package com.hyperur.serial;

import com.hyperur.serial.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SerialRegistrationController {

    private final EmailService emailService;

    public SerialRegistrationController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/register-serial")
    public ResponseEntity<Map<String, Object>> registerSerial(@RequestBody SerialRegistrationRequest request) {
        String activationCode = "HUR-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        String formattedDate = request.getDate();
        try {
            LocalDateTime dt = LocalDateTime.parse(request.getDate().replace("Z", ""));
            formattedDate = dt.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"));
        } catch (Exception ignored) {}

        try {
            emailService.sendRegistrationConfirmation(
                request.getEmail(),
                request.getSerial(),
                request.getSerialDevice(),
                activationCode,
                formattedDate
            );
        } catch (Exception e) {
            System.err.println("Failed to send user email: " + e.getMessage());
        }

        try {
            emailService.sendAdminNotification(
                request.getSerial(),
                request.getSerialDevice(),
                request.getEmail(),
                formattedDate
            );
        } catch (Exception e) {
            System.err.println("Failed to send admin email: " + e.getMessage());
        }

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("activationCode", activationCode);
        response.put("message", "Registration successful");

        return ResponseEntity.ok(response);
    }
}
