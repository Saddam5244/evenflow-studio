# evenflow-studio
# Evenflow Studio — Landing Page

A responsive Next.js 14 + React + TypeScript landing page inspired by the supplied Evenflow Studio reference design and development brief.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
5. Visit http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Project structure

```text
evenflow-studio/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/              # App Router, layout and global styles
│   ├── components/       # Reusable page sections
│   └── data/             # Editable portfolio, services, blog and testimonial content
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```
