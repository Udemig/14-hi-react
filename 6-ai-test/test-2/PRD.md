# Product Requirements Document: Didiyos Landing Page

## Project Overview
Create a premium, responsive landing page for Didiyos - a social event platform that helps people discover and join real-life activities to build community.

## Product Information
- **App Name**: Didiyos
- **Type**: Social event platform (mobile + web)
- **Core Value Proposition**: Help people find real-life activities and build community through events

### Key Features
- Create and share events
- Discover and join events
- Add friends and see what events friends attend

## Brand Guidelines
- **Logo**: Green lowercase "d" (simple mark)
- **Brand Personality**: Fresh, social, trustworthy, energetic
- **Visual Style**: iOS-like softness, clean spacing, subtle glass/blur touches (performant and accessible)
- **Primary Color**: Modern green (tasteful selection)
- **Secondary Colors**: Neutral grays for text and surfaces

## Technical Requirements

### Technology Stack
- **HTML5**: Semantic markup only
- **CSS3**: Modern CSS features (variables, flex/grid, clamp(), prefers-reduced-motion, prefers-color-scheme)
- **No Dependencies**: No JavaScript, no frameworks, no Tailwind, no Bootstrap, no external fonts
- **Output Format**: Single self-contained HTML file with embedded CSS

### Responsive Design
- **Approach**: Mobile-first
- **Breakpoints**: 
  - Base: Mobile (< 768px)
  - Tablet: >= 768px
  - Desktop: >= 1024px

### Design System
- **Spacing**: 8px rhythm system
- **Typography**: Use clamp() for responsive typography
- **Accessibility**: 
  - Clear focus states
  - Semantic HTML structure
  - Proper heading hierarchy
  - Dark mode support via prefers-color-scheme
  - Reduced motion support via prefers-reduced-motion

### Component Standards
- **Buttons**: Hover, active, and focus styles required
- **Cards**: Consistent border-radius and subtle shadows
- **Micro-interactions**: CSS-only hover/focus states

## Content Requirements

### Language
- All content must be in Turkish

### Tone & Style
- Confident, friendly, modern startup tone
- No emojis
- Avoid buzzword spam - be concrete
- Short paragraphs
- Scannable bullet points

## Page Sections (Required)

### 1. Sticky Top Navigation
- Logo (green lowercase "d")
- Navigation links
- Primary CTA button

### 2. Hero Section
- Headline
- Subheadline
- Primary CTA button
- Secondary CTA button
- Trust line/badge

### 3. Social Proof Strip
- Mock statistics or short trust bullets
- Display user count, event count, or similar metrics

### 4. Features Section
- 3-6 feature cards
- Icons made from CSS or simple inline SVG
- Clear value propositions

### 5. How It Works Section
- 3-step process explanation
- Visual flow showing user journey

### 6. Event Discovery Section
- Example event cards layout
- Showcase event browsing experience

### 7. Friends / Social Graph Section
- Explanation of adding friends
- Showcase seeing friends' activity
- Social connection benefits

### 8. Testimonials Section
- 3 short testimonials
- User quotes with names/context

### 9. Pricing Section
- Free tier
- Pro tier
- Simple comparison table/cards

### 10. FAQ Section
- 5 frequently asked questions
- Expandable or simple Q&A format

### 11. Final CTA Section
- Strong call-to-action
- Conversion-focused messaging

### 12. Footer
- Navigation links
- Social media placeholders
- Legal/company links

## Design Quality Standards
- Apple-level cleanliness
- Stripe-level clarity
- Conversion-focused
- Readable and accessible
- No generic filler content
- Modern, elegant, restrained styling
- Every section must add value

## Implementation Phases

### Phase 1: Foundation
- Set up HTML structure with semantic elements
- Create CSS variables for colors, spacing, typography
- Implement responsive base styles
- Add dark mode support

### Phase 2: Core Sections
- Navigation (sticky header)
- Hero section
- Social proof strip
- Features section

### Phase 3: Content Sections
- How it works
- Event discovery showcase
- Friends/social section
- Testimonials

### Phase 4: Conversion Sections
- Pricing comparison
- FAQ
- Final CTA
- Footer

### Phase 5: Polish & Refinement
- Micro-interactions
- Accessibility enhancements
- Responsive refinements
- Cross-browser testing considerations

## Success Criteria
- Fully responsive across all breakpoints
- Accessible (keyboard navigation, focus states, semantic HTML)
- Premium visual design matching Apple/Stripe quality
- All 12 required sections implemented
- Turkish language content throughout
- Zero external dependencies
- Single self-contained HTML file

