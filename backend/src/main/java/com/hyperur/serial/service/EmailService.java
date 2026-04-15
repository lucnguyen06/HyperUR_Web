package com.hyperur.serial.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.from}")
    private String fromEmail;

    @Value("${app.mail.admin}")
    private String adminEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendRegistrationConfirmation(String toEmail, String device, String serialDevice,
                                             String activationCode, String date) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("[HyperUR] Xác nhận đăng ký Activation Serial - " + activationCode);

            String htmlContent = buildUserEmailHtml(device, serialDevice, activationCode, date);
            helper.setText(htmlContent, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }

    public void sendAdminNotification(String device, String serialDevice, String userEmail, String date) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(adminEmail);
            helper.setSubject("[HyperUR Admin] Đăng ký Serial mới - " + device);

            String htmlContent = buildAdminEmailHtml(device, serialDevice, userEmail, date);
            helper.setText(htmlContent, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send admin email", e);
        }
    }

    private String buildUserEmailHtml(String device, String serialDevice, String activationCode, String date) {
        String html = "<!DOCTYPE html>\n" +
            "<html lang=\"vi\">\n" +
            "<head>\n" +
            "<meta charset=\"UTF-8\">\n" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
            "<title>HyperUR - Xác nhận đăng ký</title>\n" +
            "</head>\n" +
            "<body style=\"margin:0;padding:0;background:#0a0e17;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#0a0e17;padding:40px 20px;\">\n" +
            "<tr>\n" +
            "<td align=\"center\">\n" +
            "<table width=\"600\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#111827;border-radius:20px;overflow:hidden;border:1px solid #1e3a5f;box-shadow:0 20px 60px rgba(0,0,0,0.5);\">\n" +
            "\n" +
            "<!-- Header Banner -->\n" +
            "<tr>\n" +
            "<td style=\"background:linear-gradient(135deg,#0a0e17 0%,#1a1f35 50%,#0a0e17 100%);padding:50px 40px;text-align:center;position:relative;\">\n" +
            "<!-- Glowing orbs -->\n" +
            "<div style=\"position:absolute;top:-20px;left:50%;transform:translateX(-50%);width:300px;height:200px;background:radial-gradient(ellipse,rgba(0,212,255,0.15) 0%,transparent 70%);pointer-events:none;\"></div>\n" +
            "<div style=\"position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);width:400px;height:150px;background:radial-gradient(ellipse,rgba(0,255,136,0.1) 0%,transparent 70%);pointer-events:none;\"></div>\n" +
            "\n" +
            "<!-- Logo Area -->\n" +
            "<div style=\"display:inline-block;background:linear-gradient(135deg,#00d4ff,#00ff88);padding:15px 35px;border-radius:15px;margin-bottom:25px;box-shadow:0 0 30px rgba(0,212,255,0.3);\">\n" +
            "<span style=\"font-family:'Segoe UI',sans-serif;font-size:32px;font-weight:900;color:#0a0e17;letter-spacing:3px;\">HYPERUR</span>\n" +
            "</div>\n" +
            "<h1 style=\"color:#ffffff;font-size:28px;font-weight:700;margin:0 0 10px 0;letter-spacing:1px;\">Activation Serial</h1>\n" +
            "<p style=\"color:#00d4ff;font-size:14px;margin:0;letter-spacing:2px;text-transform:uppercase;\">Registration Confirmed</p>\n" +
            "\n" +
            "<!-- Status Badge -->\n" +
            "<div style=\"margin-top:25px;display:inline-block;background:linear-gradient(135deg,rgba(0,255,136,0.15),rgba(0,212,255,0.1));border:1px solid rgba(0,255,136,0.4);border-radius:50px;padding:10px 30px;\">\n" +
            "<span style=\"color:#00ff88;font-size:14px;font-weight:600;\">&#10003; Đang ký thành công</span>\n" +
            "</div>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Greeting -->\n" +
            "<tr>\n" +
            "<td style=\"padding:35px 40px 0 40px;\">\n" +
            "<p style=\"color:#e2e8f0;font-size:16px;margin:0;line-height:1.8;\">Chào bạn,</p>\n" +
            "<p style=\"color:#94a3b8;font-size:15px;margin:15px 0 0 0;line-height:1.8;\">\n" +
            "Cảm ơn bạn đã đăng ký <strong style=\"color:#00d4ff;\">Activation Serial</strong> cho thiết bị HyperUR. Dưới đây là thông tin đăng ký của bạn:\n" +
            "</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Info Card -->\n" +
            "<tr>\n" +
            "<td style=\"padding:25px 40px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#1a2332;border-radius:16px;border:1px solid #1e3a5f;overflow:hidden;\">\n" +
            "<!-- Serial Code Highlight -->\n" +
            "<tr>\n" +
            "<td style=\"padding:30px 35px;background:linear-gradient(135deg,rgba(0,212,255,0.08),rgba(0,255,136,0.05));text-align:center;border-bottom:1px solid #1e3a5f;\">\n" +
            "<p style=\"color:#64748b;font-size:12px;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:3px;\">Mã kích hoạt</p>\n" +
            "<div style=\"display:inline-block;background:#0a0e17;border:2px solid #00d4ff;border-radius:12px;padding:15px 40px;box-shadow:0 0 25px rgba(0,212,255,0.2);\">\n" +
            "<span style=\"font-family:'Consolas','Monaco',monospace;font-size:28px;font-weight:700;color:#00d4ff;letter-spacing:4px;\">" + escapeHtml(activationCode) + "</span>\n" +
            "</div>\n" +
            "<p style=\"color:#00ff88;font-size:12px;margin:12px 0 0 0;\">\n" +
            "<span style=\"color:#00ff88;\">&#9679;</span> Có hiệu lực trong 30 ngày\n" +
            "</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "<!-- Info Rows -->\n" +
            "<tr>\n" +
            "<td style=\"padding:20px 35px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n" +
            "<tr>\n" +
            "<td style=\"padding:12px 0;border-bottom:1px solid rgba(30,58,95,0.5);\"><span style=\"color:#64748b;font-size:13px;\">Thiết bị</span></td>\n" +
            "<td style=\"padding:12px 0;border-bottom:1px solid rgba(30,58,95,0.5);text-align:right;\"><span style=\"color:#e2e8f0;font-size:14px;font-weight:600;\">" + escapeHtml(device) + "</span></td>\n" +
            "</tr>\n" +
            "<tr>\n" +
            "<td style=\"padding:12px 0;border-bottom:1px solid rgba(30,58,95,0.5);\"><span style=\"color:#64748b;font-size:13px;\">Serial thiết bị</span></td>\n" +
            "<td style=\"padding:12px 0;border-bottom:1px solid rgba(30,58,95,0.5);text-align:right;\"><span style=\"color:#00ff88;font-family:'Consolas','Monaco',monospace;font-size:14px;\">" + escapeHtml(serialDevice) + "</span></td>\n" +
            "</tr>\n" +
            "<tr>\n" +
            "<td style=\"padding:12px 0;\"><span style=\"color:#64748b;font-size:13px;\">Ngày đăng ký</span></td>\n" +
            "<td style=\"padding:12px 0;text-align:right;\"><span style=\"color:#e2e8f0;font-size:14px;\">" + escapeHtml(date) + "</span></td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Notice -->\n" +
            "<tr>\n" +
            "<td style=\"padding:0 40px 25px 40px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:rgba(255,193,7,0.08);border:1px solid rgba(255,193,7,0.25);border-radius:12px;\">\n" +
            "<tr>\n" +
            "<td style=\"padding:18px 22px;\">\n" +
            "<p style=\"color:#ffc107;font-size:14px;font-weight:600;margin:0 0 5px 0;\">&#9888; Lưu ý quan trọng</p>\n" +
            "<p style=\"color:#94a3b8;font-size:13px;margin:0;line-height:1.7;\">\n" +
            "Mã kích hoạt chỉ có hiệu lực trong <strong style=\"color:#ffc107;\">01 tháng</strong> kể từ ngày đăng ký. Khi hết hạn, vui lòng đăng ký lại để tiếp tục nhận thông báo cập nhật.\n" +
            "</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Support -->\n" +
            "<tr>\n" +
            "<td style=\"padding:0 40px 30px 40px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#1a2332;border-radius:12px;border:1px solid #1e3a5f;\">\n" +
            "<tr>\n" +
            "<td style=\"padding:20px 25px;\" align=\"center\">\n" +
            "<p style=\"color:#94a3b8;font-size:14px;margin:0 0 15px 0;\">Cần hỗ trợ? Liên hệ đội ngũ phát triển</p>\n" +
            "<a href=\"https://t.me/Usagi79\" style=\"display:inline-block;background:linear-gradient(135deg,#0088cc,#00d4ff);color:#ffffff;text-decoration:none;padding:12px 30px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:1px;\">Liên hệ Telegram</a>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Footer -->\n" +
            "<tr>\n" +
            "<td style=\"background:#0d1117;padding:30px 40px;text-align:center;\">\n" +
            "<p style=\"color:#475569;font-size:12px;margin:0 0 8px 0;\">HyperUR — Hybrid ROM</p>\n" +
            "<p style=\"color:#334155;font-size:11px;margin:0;\">Dev ROM: @Usagi79 &bull; @lcnguy06</p>\n" +
            "<p style=\"color:#1e293b;font-size:10px;margin:15px 0 0 0;\">&copy; 2025 HyperUR Hub. All rights reserved.</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</body>\n" +
            "</html>";

        return html;
    }

    private String buildAdminEmailHtml(String device, String serialDevice, String userEmail, String date) {
        String html = "<!DOCTYPE html>\n" +
            "<html lang=\"vi\">\n" +
            "<head>\n" +
            "<meta charset=\"UTF-8\">\n" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
            "<title>HyperUR - Thông báo Admin</title>\n" +
            "</head>\n" +
            "<body style=\"margin:0;padding:0;background:#0a0e17;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#0a0e17;padding:40px 20px;\">\n" +
            "<tr>\n" +
            "<td align=\"center\">\n" +
            "<table width=\"600\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#111827;border-radius:20px;overflow:hidden;border:1px solid #1e3a5f;box-shadow:0 20px 60px rgba(0,0,0,0.5);\">\n" +
            "\n" +
            "<!-- Header -->\n" +
            "<tr>\n" +
            "<td style=\"background:linear-gradient(135deg,#0a0e17,#1a1f35);padding:40px;text-align:center;\">\n" +
            "<div style=\"display:inline-block;background:linear-gradient(135deg,#00d4ff,#00ff88);padding:12px 30px;border-radius:12px;margin-bottom:20px;\">\n" +
            "<span style=\"font-size:24px;font-weight:900;color:#0a0e17;letter-spacing:3px;\">HYPERUR</span>\n" +
            "</div>\n" +
            "<h1 style=\"color:#ffffff;font-size:22px;font-weight:700;margin:0 0 5px 0;\">&#128196; Đăng ký Serial mới</h1>\n" +
            "<p style=\"color:#00d4ff;font-size:13px;margin:0;\">Admin Notification</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Info -->\n" +
            "<tr>\n" +
            "<td style=\"padding:30px 40px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"background:#1a2332;border-radius:16px;border:1px solid #1e3a5f;\">\n" +
            "<tr>\n" +
            "<td style=\"padding:25px 30px;\">\n" +
            "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n" +
            "<tr>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);\"><span style=\"color:#64748b;font-size:13px;\">Thiết bị</span></td>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);text-align:right;\"><span style=\"color:#00d4ff;font-size:14px;font-weight:600;\">" + escapeHtml(device) + "</span></td>\n" +
            "</tr>\n" +
            "<tr>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);\"><span style=\"color:#64748b;font-size:13px;\">Serial thiết bị</span></td>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);text-align:right;\"><span style=\"color:#00ff88;font-family:monospace;font-size:14px;\">" + escapeHtml(serialDevice) + "</span></td>\n" +
            "</tr>\n" +
            "<tr>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);\"><span style=\"color:#64748b;font-size:13px;\">Email người dùng</span></td>\n" +
            "<td style=\"padding:14px 0;border-bottom:1px solid rgba(30,58,95,0.5);text-align:right;\"><span style=\"color:#e2e8f0;font-size:14px;\">" + escapeHtml(userEmail) + "</span></td>\n" +
            "</tr>\n" +
            "<tr>\n" +
            "<td style=\"padding:14px 0;\"><span style=\"color:#64748b;font-size:13px;\">Ngày đăng ký</span></td>\n" +
            "<td style=\"padding:14px 0;text-align:right;\"><span style=\"color:#e2e8f0;font-size:14px;\">" + escapeHtml(date) + "</span></td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "<!-- Footer -->\n" +
            "<tr>\n" +
            "<td style=\"background:#0d1117;padding:25px 40px;text-align:center;\">\n" +
            "<p style=\"color:#334155;font-size:11px;margin:0;\">&copy; 2025 HyperUR Hub</p>\n" +
            "</td>\n" +
            "</tr>\n" +
            "\n" +
            "</table>\n" +
            "</td>\n" +
            "</tr>\n" +
            "</table>\n" +
            "</body>\n" +
            "</html>";

        return html;
    }

    private String escapeHtml(String input) {
        if (input == null) return "";
        return input
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;")
            .replace("'", "&#x27;");
    }
}
