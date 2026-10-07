# Implement Responsive Layout

**Category:** Image & Design  
**Source:** GitLab Duo

## Prompt

> Make this layout fully responsive across all device sizes:
> 
> Current layout: [PASTE HTML/CSS/JSX]
> 
> ## Responsive Requirements
> 
> ### Breakpoints to Support
> - Mobile: 320px–767px
> - Tablet: 768px–1023px
> - Desktop: 1024px–1439px
> - Wide: 1440px+
> 
> ### Layout Changes Per Breakpoint
> Mobile:
> - Single column layout
> - Stack all elements vertically
> - Touch targets minimum 44×44px
> - Font size minimum 16px (prevents iOS zoom)
> 
> Tablet:
> - [describe layout change]
> 
> Desktop:
> - [describe layout change]
> 
> ### Touch Optimization
> - Minimum touch target size: 44×44px
> - Adequate spacing between interactive elements
> - No hover-only interactions
> 
> ### Performance
> - Images: use srcset for different screen densities
> - Avoid layout shifts (CLS): reserve space for dynamic content
> - Avoid render-blocking resources
> 
> ## Responsive Implementation
> Provide the complete responsive code using:
> - CSS Grid / Flexbox (preferred over float)
> - CSS custom properties for consistent spacing
> - Mobile-first approach (min-width media queries)
> 
> ## Testing Checklist
> Test at: 320px, 375px, 768px, 1024px, 1440px

---
[← Back to Image & Design](README.md) · [Main index](../../README.md)