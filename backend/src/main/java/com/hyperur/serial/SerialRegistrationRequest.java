package com.hyperur.serial;

public class SerialRegistrationRequest {
    private String serial;
    private String serialDevice;
    private String email;
    private String date;

    public String getSerial() { return serial; }
    public void setSerial(String serial) { this.serial = serial; }

    public String getSerialDevice() { return serialDevice; }
    public void setSerialDevice(String serialDevice) { this.serialDevice = serialDevice; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}
