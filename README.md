<div align="center">
  <br />
  <h1>🌿 Ethanol India</h1>
  <p align="center">
    <strong>Open‑data dashboard tracking India's ethanol blending programme</strong>
    <br />
    Petrol consumption · water footprint · fuel prices · vehicle compatibility · distillery directory · global policy
  </p>
  <br />
  <p>
    <strong>Live demo:</strong> <em>[link will be added soon]</em>
  </p>
  <br />
</div>

---

<br />

## ✦ Features

<br />

### 🗺️ Visual & UX

| | |
|---|---|
| **Interactive India Map** | SVG choropleth with 3 layers — ethanol production, water stress index, distillery count. Click any state for detailed data. |
| **Command Palette** | Press `⌘K` / `Ctrl+K` to fuzzy‑search across all sections, stats, and topics. Powered by Fuse.js. |
| **Animated Charts** | Recharts area, bar, and line charts with smooth 1.2s animations, tooltips, and gradient fills. |
| **Scroll Storytelling** | 5‑chapter deep‑dive with a sticky sidebar that tracks your position, shows a progress bar, and displays the current stat. |
| **Shareable Charts** | Hover any chart card for Tweet and copy‑link buttons. |
| **Dark / Light Mode** | Persistent theme toggle using localStorage. |

<br />

### 📊 Data Depth

| Section | What it does |
|---|---|
| **Overview** | Blending trajectory, petrol consumption, ethanol volume, feedstock donut chart, key impact stats |
| **Ethanol Simulator** | Drag E0→E100, pick 7 feedstocks, see live water / land / CO₂ / forex numbers |
| **Water Cost** | Per‑feedstock water footprint with irrigation breakdown |
| **Cost Calculator** | E0 vs E20 vehicle running costs — km/month, mileage, fuel price sliders |
| **State Price Breakdown** | Select any state/UT to see petrol price, VAT %, excise, and the 4‑part breakdown with bars |
| **Price History** | Multi‑line chart comparing petrol prices across states over 12 months |
| **Vehicle Guide** | Search 40+ models across 12 makes for E20 compatibility, mileage drop %, and detailed notes |
| **Distillery Directory** | 40+ distilleries — filterable by state, feedstock; sortable table with expandable details |
| **Global Comparison** | Blend mandates, feedstocks, flex‑fuel adoption across India, Brazil, US, EU, China |
| **Policy Timeline** | 12 milestones from 2003 EBP launch to 2030 E30 horizon |
| **Water Stress Overlay** | Groundwater decline rates and stress indices linked to ethanol‑producing states |

<br />

### 📁 Data Sources

All figures tagged to their sources. Primary references:

- **PPAC** — Snapshot of India's Oil & Gas Data
- **PIB / Ministry of Petroleum & Natural Gas**
- **NITI Aayog** — Ethanol Roadmap
- **MoPNG** — Ethanol Portal

<br />

---

<br />

## ✦ Tech Stack

<br />

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (`@import "tailwindcss"`, CSS‑only dark mode) |
| **Charts** | Recharts |
| **Search** | Fuse.js |
| **Font** | Geist (Vercel) |

<br />

---

<br />

## ✦ Getting Started

<br />

```bash
# Clone the repository
git clone https://github.com/Rudra202/ethanol-india.git
cd ethanol-india

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

<br />

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Next.js dev server with Turbopack |
| `npm run build` | Create an optimised production build |
| `npm run lint` | Run ESLint across the codebase |
| `npm start` | Start the production server |

<br />

---

<br />

## ✦ Project Structure

<br />

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── OverviewSection.tsx
│   ├── IndiaMapSection.tsx
│   ├── ScrollStorySection.tsx
│   ├── SimulatorSection.tsx
│   ├── WaterSection.tsx
│   ├── CostCalculatorSection.tsx
│   ├── PricesSection.tsx
│   ├── PriceHistorySection.tsx
│   ├── VehiclesSection.tsx
│   ├── VehicleGuide.tsx
│   ├── SuppliersSection.tsx
│   ├── DistilleryDirectory.tsx
│   ├── NewsSection.tsx
│   ├── CountryComparisonSection.tsx
│   ├── IssuesSection.tsx
│   ├── PolicyTimelineSection.tsx
│   ├── ChartCard.tsx
│   ├── Charts.tsx
│   ├── CommandPalette.tsx
│   ├── ThemeToggle.tsx
│   └── SubscribeSection.tsx
├── lib/
│   ├── theme-provider.tsx
│   └── useScrollReveal.ts
└── data/
    ├── indiaMap.ts
    ├── distilleries.ts
    ├── vehicles.ts
    ├── prices.ts
    └── waterStress.ts
```

<br />

---

<br />

## ✦ Deployment

<br />

The site is fully static and can be deployed to any static host:

```bash
npm run build
# Output in .next/ — deploy with Vercel, Netlify, Cloudflare Pages, etc.
```

<br />

---

<br />

## ✦ Contributing

<br />

Found a bug, have a suggestion, or want to add a feature? Open an issue or pull request on [GitHub](https://github.com/Rudra202/ethanol-india).

<br />

---

<br />

<div align="center">
  <p>Built by <strong>Rudy</strong> ♥</p>
  <p>Open data. Open source.</p>
  <br />
</div>
