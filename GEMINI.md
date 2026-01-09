# GEMINI.md - RISQIANT Project Context

## Project Overview
**RISQIANT** (Risk Compliant Security Manager) is a continuous, autonomous risk and compliance security management platform. It transforms manual, point-in-time security audits into a continuous operating rhythm by automating technical control monitoring, evidence collection, and AI-generated audit narratives.

The project is built upon a modernized, jQuery-free version of the Gentelella Admin Template, utilizing a dashboard architecture to provide high-level visibility into risk posture and compliance ROI.

### Key Features
- **Security & Risk Assessment:** Attack surface scanning and vulnerability management.
- **Compliance Automation:** Native support for SOC 2, PCI DSS, CMMC L2, and ISO 27001.
- **Continuous Monitoring:** Automated data ingestion from Cloud/SaaS connectors.
- **Evidence Vault:** Secure, tamper-evident storage for compliance evidence.
- **Lighthouse AI:** AI-powered narrative generation and remediation planning.

## Technology Stack
- **Frontend:** [Vite](https://vitejs.dev/) (Build tool), [Bootstrap 5](https://getbootstrap.com/) (UI Framework), [Sass](https://sass-lang.com/) (Styling).
- **Charts:** [Chart.js](https://www.chartjs.org/), [ECharts](https://echarts.apache.org/).
- **Data Handling:** [DataTables](https://datatables.net/), [FullCalendar](https://fullcalendar.io/).
- **Deployment:** [Docker](https://www.docker.com/), [Jekyll](https://jekyllrb.com/) (for documentation).
- **Runtime:** Node.js (v20+ recommended).

## Architecture
- **Vite-based Build System:** Handles multi-page application (MPA) routing and optimized asset bundling.
- **Module-based JavaScript:** Located in `src/modules/`, ensuring smart loading of feature-specific code.
- **Modernized UI:** All jQuery dependencies have been removed in favor of modern JavaScript (ES2022) and native browser APIs.
- **Containerization:** Development and production environments are supported via Docker.

## Getting Started

### Local Development (Direct)
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

### Containerized Deployment (Recommended)
Build and run the application using `nerdctl` (or `docker-compose`):

```bash
nerdctl compose up --build
```

The application will be exposed on port `3000`.

## Build and Production
- **Production Build:**
  ```bash
  npm run build
  ```
  Generates optimized assets in the `dist/` directory.
- **Preview Production Build:**
  ```bash
  npm run preview
  ```
- **Bundle Analysis:**
  ```bash
  npm run analyze
  ```

## Project Structure
- `src/`: Core source files (JavaScript, SCSS, Modules).
- `production/`: HTML templates and static assets (used by Vite as public directory).
- `docs/`: Project documentation and Jekyll site.
- `dist/`: Production build output.
- `vite.config.js`: Central configuration for bundling and development.
- `prd.md`: Detailed Product Requirements Document.

## Development Conventions
- **Style:** Adhere to [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) configurations.
- **CSS:** Use Sass with the modern `@use` syntax. Styles are located in `src/scss/` and `src/main.scss`.
- **Components:** Leverage existing Bootstrap 5 components. Custom logic should be encapsulated in `src/modules/`.
- **Vanilla JS:** Do NOT reintroduce jQuery. Use native DOM APIs and the utilities provided in `src/utils/`.
