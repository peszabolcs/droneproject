# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for EyeSky, an autonomous aircraft inspection drone company. The project showcases the company's technology, mission, and services through a modern, responsive web interface.

## Development Commands

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Architecture

### Technology Stack

- **Frontend**: React 19+ with Vite as build tool
- **Styling**: Tailwind CSS with custom color palette
- **Configuration**: ES modules throughout (package.json has `"type": "module"`)

### Project Structure

- `src/main.jsx` - React app entry point
- `src/App.jsx` - Main landing page component (single-page application)
- `src/index.css` - Global styles and Tailwind imports
- `public/` - Static assets
- Configuration files use ES module syntax due to `"type": "module"` in package.json

### Key Features

The landing page includes:

- Hero section with company mission
- Company timeline (2019-2025)
- Technology overview (autonomous navigation, computer vision, AI reports)
- Target audience sections (maintenance crews, compliance officers, ground ops, OEM partners)
- Competitive advantage comparison table
- Team overview
- Contact form with state management

### Custom Styling

Tailwind config includes custom colors:

- `light-blue`: #e6f0ff
- `blue-200`: #d0e7ff
- `blue-50`: #f9fbfd
- `blue-300`: #b2d7ff
- Font family: Inter sans-serif

### State Management

Uses React hooks for form state management. Contact form captures name, email, and message with controlled inputs.

## Configuration Notes

### ES Modules

All configuration files must use ES module syntax (`export default` instead of `module.exports`) due to `"type": "module"` in package.json.

### PostCSS

Uses `@tailwindcss/postcss` plugin for Tailwind CSS processing with autoprefixer.

### ESLint

Custom ESLint configuration with React-specific rules and unused variable pattern matching for constants.

Context:
We are developing a public-facing website for a high-tech startup project called EyeSky. The project focuses on autonomous drone-based aircraft inspection, leveraging onboard computer vision and cloud-based diagnostics. The goal of the website is to position EyeSky as a trustworthy, research-driven, professional, and technically robust startup.

Technical Stack:
• Framework: React + Vite
• Styling: TailwindCSS
• Language: English
• Design: Clean, modern, expert-level
• Color Palette: Light blue, white, and subtle gray-blue shades (e.g., #e6f0ff, #d0e7ff, #f9fbfd, #b2d7ff)
• Typography: Professional sans-serif (e.g., Inter, Open Sans)

⸻

🧩 Website Structure

1. Landing Section (Hero)
   • Full screen, clean layout
   • Background: Subtle gradient or video loop of a drone inspecting an aircraft in a hangar
   • Title: "Revolutionizing Aircraft Inspection with Autonomous Drones"
   • Subtitle: "AI-powered, precision-driven visual assessment for aviation safety."
   • CTA Button: "Discover EyeSky" and "Contact Us"

2. About the Project
   • Title: "Our Mission"
   • Paragraph:
   "Since the inception of EyeSky, our mission has been to enhance aviation safety and operational efficiency through fully autonomous drone inspections. We’ve spent years validating our technology, conducting market research, and refining our systems in real-world environments."
   • Timeline-style visual:
   2019 – Idea born
   2020–2022 – Research & feasibility studies
   2023 – Closed-environment validations
   2024–2025 – Pilot programs, partnership building

3. Technology Overview
   • Split section with illustrations and brief explanations:
   • Autonomous navigation in geo-fenced areas
   • Onboard computer vision: anomaly detection (scratches, dents, missing parts)
   • Automated data capture & upload
   • AI-generated technical reports

4. Use Cases
   • Title: "Designed for Aviation Professionals"
   • Cards for:
   • Aircraft maintenance crews
   • Safety compliance officers
   • Airport ground operations
   • OEM partners

5. Competitive Advantage
   • Comparison table with traditional manual inspections
   • Emphasize:
   • Time-saving
   • Precision
   • 24/7 reliability
   • Cloud integration
   • Regulatory compliance-ready

6. Team Section
   • If team not yet public: "Backed by a multidisciplinary team of aerospace engineers, AI researchers, and aviation professionals."
   • Optionally: Include anonymous silhouette icons + fields (e.g., “PhD in Computer Vision”)

7. Get Involved / Contact
   • "Want to collaborate, partner or test EyeSky?"
   • Contact form (Name, Email, Message)
   • Email fallback: hello@eyesky.ai or placeholder

⸻

🎨 UI/UX Guidelines
• Consistent spacing, large padding, grid-based layout
• Rounded cards with xl radius, soft shadow
• Animated transitions (e.g., CTA hover effects, scroll reveal)
• Mobile-first responsiveness
• Accessibility support (WCAG-compliant contrast and nav)
• CTA buttons and links should be clear, inviting, and branded

⸻

✍️ Tone of Voice & Copywriting
• Professional but not overly corporate
• Clarity > Buzzwords
• Sentences like:
• “We’re redefining inspection reliability in aviation.”
• “Built on years of field research and validated in real hangar environments.”

⸻

✅ Output Goals
• A homepage (single-page or multipage) that:
• Looks like a mature, well-funded startup
• Instantly signals credibility and technical expertise
• Clearly communicates the problem-solution narrative
• Is ready for investors, airport partners, and aviation stakeholders
• Includes future-proof sections for roadmap updates, blog, whitepapers
