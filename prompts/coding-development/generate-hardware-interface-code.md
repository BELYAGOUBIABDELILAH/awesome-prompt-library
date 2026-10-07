# Generate Hardware Interface Code

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Generate hardware interface code for the following:
> 
> Protocol: [I2C / SPI / UART / GPIO / PWM / ADC]
> Target device/sensor: [PART NAME — e.g., MPU-6050, SSD1306, MAX31855]
> Microcontroller: [SPECIFY — e.g., STM32F4, ESP32, Arduino Uno, Raspberry Pi Pico]
> Language: [C / C++ / MicroPython / CircuitPython]
> HAL/Framework: [bare metal / STM32 HAL / Arduino / ESP-IDF]
> 
> ## Interface Code
> 
> ### Initialization
> - Configure GPIO pins and alternate functions
> - Initialize peripheral (I2C/SPI/UART) with correct settings
> - Device-specific initialization sequence
> 
> ### Read Operations
> - Single register read
> - Burst/sequential read
> - With proper error checking and timeout
> 
> ### Write Operations
> - Single register write
> - Burst write
> - With proper error checking
> 
> ### Interrupt Handling
> - Configure interrupt pin (if device has one)
> - ISR (Interrupt Service Routine) — keep it short and fast
> - Main thread processing of interrupt data (use flags/queues, not processing in ISR)
> 
> ### Error Handling
> - Communication timeout
> - Device not responding (NAK)
> - CRC/checksum errors
> - Retry logic with exponential backoff
> 
> ### Example Usage
> Complete working example that initializes the device and reads data in a loop.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)