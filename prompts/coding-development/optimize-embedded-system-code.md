# Optimize Embedded System Code

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Optimize this embedded system code for a resource-constrained device:
> 
> [PASTE CODE]
> 
> Target hardware:
> - Processor: [SPECIFY — e.g., Cortex-M0, AVR, ESP32]
> - Flash: [N KB/MB available]
> - RAM: [N KB available]
> - Clock speed: [N MHz]
> - Power budget: [battery-powered / always-on / sleep mode needed]
> 
> ## Optimization Goals (rank them)
> 1. [ ] Reduce RAM usage
> 2. [ ] Reduce Flash size
> 3. [ ] Improve execution speed
> 4. [ ] Reduce power consumption
> 5. [ ] Reduce interrupt latency
> 
> ## Optimization Analysis
> 
> ### Memory Usage
> Current: [N bytes RAM / N bytes Flash]
> - Variables that can be smaller types (use uint8_t not int where possible)
> - String literals that should be in Flash (PROGMEM / const)
> - Buffers that can be shared
> - Stack usage analysis
> 
> ### CPU Usage
> - Tight loops that can be unrolled
> - Floating point → fixed point conversions
> - Division → bit-shift equivalents
> - Lookup tables for expensive calculations
> 
> ### Power Optimization
> - Sleep modes when idle
> - Peripheral shutdown when not in use
> - Clock frequency reduction
> - DMA for transfers (frees CPU)
> 
> ## Optimized Code
> Provide the complete optimized version with:
> - Memory usage comparison: before vs. after
> - Performance comparison: before vs. after
> - Explanation of each optimization decision

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)