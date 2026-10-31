# DocenKroma
Modular web workspace for pedagogical planning, competency rubrics, and student trajectory monitoring in secondary education. 
Plataforma modular para planificaciones pedagógicas, matrices de rúbricas por competencias y seguimiento de trayectorias escolares.

# DocenKroma

Modular web workspace for pedagogical planning, competency rubrics, and student trajectory monitoring in secondary and vocational education.

## Overview
DocenKroma addresses the structural and administrative overhead faced by secondary and technical educators. It provides a specialized environment to create, align, and maintain didactic sequences and curriculum plans compliant with educational standards, while facilitating longitudinal tracking of student competencies.

## Tech Stack
- Frontend: Next.js (App Router), React, Tailwind CSS
- Backend: Node.js, Next.js Route Handlers
- Database & Auth: Supabase / PostgreSQL (Row-Level Security)
- Document Export: PDFKit / Puppeteer for institutional PDF reporting

## Architecture & Core Modules
- Curriculum Planning Engine: Dynamic builders for annual and unit-based educational programs.
- Rubrics Matrix: Criteria and competency evaluation tables mapped to grading scales.
- Trajectory Tracker: Monitoring tools for individual student progress and interventions.
- Institutional Export: Automated formatting pipeline to render standard school documentation.

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm or yarn

### Installation
1. Clone the repository:
git clone https://github.com/Lila-pv/DocenKroma.git
cd DocenKroma

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open http://localhost:3000 in your browser.

## Roadmap & Claude Code Integration
- Initial project scaffolding and architecture design.
- Implement schema validations for educational competencies (Zod / JSON Schema).
- Connect Supabase client with RLS for multi-teacher workspaces.
- Develop automated unit tests for curriculum parsing routines.
- Implement headless PDF rendering for official administrative templates.

## License
This project is open-source software licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
