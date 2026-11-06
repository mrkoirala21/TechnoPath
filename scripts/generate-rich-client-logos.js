import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src/assets/clients');
const pubAssetsDir = path.resolve(__dirname, '../public/assets/clients');
const pubClientsDir = path.resolve(__dirname, '../public/clients');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(srcDir);
ensureDir(pubAssetsDir);
ensureDir(pubClientsDir);

const logos = {
  // 1. Enlight Academy
  'enlight-academy.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#F8FAFC"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#1E3A8A" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="85" r="48" fill="#1E3A8A" fill-opacity="0.08"/>
  <!-- Laurel wreath -->
  <path d="M 64 96 C 58 76 68 56 82 48" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 136 96 C 142 76 132 56 118 48" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Open Book -->
  <path d="M 74 95 Q 100 88 100 102 Q 100 88 126 95 L 126 112 Q 100 105 100 118 Q 100 105 74 112 Z" fill="#1E3A8A"/>
  <path d="M 100 90 L 100 118" stroke="#F59E0B" stroke-width="2"/>
  <!-- Torch of Knowledge -->
  <path d="M 96 52 L 104 52 L 102 78 L 98 78 Z" fill="#D97706"/>
  <path d="M 100 38 Q 108 46 100 52 Q 92 46 100 38 Z" fill="#F59E0B"/>
  <circle cx="100" cy="46" r="3" fill="#EF4444"/>
  <!-- Stars -->
  <circle cx="100" cy="28" r="2.5" fill="#F59E0B"/>
  <circle cx="88" cy="32" r="2" fill="#F59E0B"/>
  <circle cx="112" cy="32" r="2" fill="#F59E0B"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#1E3A8A"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.06em">ENLIGHT ACADEMY</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FDE68A" text-anchor="middle" letter-spacing="0.1em">EXCELLENCE IN EDUCATION</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 2. Soojung Health and Technical Academy
  'soojung-academy.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#F0FDFA"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#0D9488" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Technical Gear Wheel Background -->
  <circle cx="100" cy="80" r="46" fill="#0D9488" fill-opacity="0.08" stroke="#0D9488" stroke-width="1.5" stroke-dasharray="8 4"/>
  <!-- Medical Red/Teal Cross -->
  <rect x="92" y="52" width="16" height="56" rx="3" fill="#0F766E"/>
  <rect x="72" y="72" width="56" height="16" rx="3" fill="#0F766E"/>
  <!-- Heartbeat ECG line through cross -->
  <path d="M 64 80 L 86 80 L 92 68 L 98 92 L 104 74 L 110 84 L 114 80 L 136 80" stroke="#14B8A6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Winged Staff Emblem -->
  <path d="M 80 58 Q 100 48 120 58" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Brand text -->
  <rect x="24" y="132" width="152" height="28" rx="7" fill="#0F766E"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.06em">SOOJUNG ACADEMY</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7" font-weight="700" fill="#99F6E4" text-anchor="middle" letter-spacing="0.08em">HEALTH & TECHNICAL</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 3. Mamata Fertility Hospital
  'mamata-fertility.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FDF2F8"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#DB2777" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#DB2777" fill-opacity="0.08"/>
  <!-- Stylized Loving Mother & Infant Silhouette -->
  <!-- Mother head -->
  <circle cx="94" cy="56" r="11" fill="#BE185D"/>
  <!-- Child head -->
  <circle cx="114" cy="72" r="8" fill="#F43F5E"/>
  <!-- Mother torso & sheltering embrace -->
  <path d="M 82 86 C 80 66 104 64 116 78 C 124 88 120 102 108 106 C 96 110 84 100 82 86 Z" fill="#BE185D"/>
  <path d="M 108 86 C 114 80 126 84 124 94 C 122 100 114 102 108 98 Z" fill="#F43F5E"/>
  <!-- Gentle Lotus Petals Base -->
  <path d="M 72 102 C 84 94 94 106 100 114 C 106 106 116 94 128 102 C 118 116 106 118 100 116 C 94 118 82 116 72 102 Z" fill="#F472B6"/>
  <!-- Spark of life -->
  <circle cx="100" cy="42" r="3" fill="#F59E0B"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#9D174D"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.05em">MAMATA FERTILITY</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FBCFE8" text-anchor="middle" letter-spacing="0.08em">HOSPITAL & IVF CENTER</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · CHITWAN</text>
</svg>`,

  // 4. CBC Lords Chitwan
  'cbc-lords.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#18181B"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#D97706" stroke-width="2.5" stroke-opacity="0.4"/>
  <circle cx="100" cy="80" r="46" fill="#27272A"/>
  <!-- Royal Crown Emblem -->
  <path d="M 76 68 L 84 52 L 100 64 L 116 52 L 124 68 Z" fill="#F59E0B"/>
  <circle cx="84" cy="50" r="3" fill="#FDE68A"/>
  <circle cx="100" cy="62" r="3" fill="#FDE68A"/>
  <circle cx="116" cy="50" r="3" fill="#FDE68A"/>
  <rect x="76" y="70" width="48" height="6" rx="2" fill="#D97706"/>
  <!-- Crossed Cutlery / Hospitality Shield -->
  <path d="M 88 84 L 112 108" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
  <path d="M 112 84 L 88 108" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
  <!-- Laurel sprigs -->
  <path d="M 68 86 C 66 102 78 114 94 118" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
  <path d="M 132 86 C 134 102 122 114 106 118" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
  <!-- Typography Banner -->
  <rect x="24" y="132" width="152" height="28" rx="7" fill="#D97706"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#18181B" text-anchor="middle" letter-spacing="0.1em">CBC LORDS</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="800" fill="#451A03" text-anchor="middle" letter-spacing="0.12em">HOTEL & HOSPITALITY</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#A1A1AA" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 5. Dr. Ramesh Ghimire Clinic & Consultation
  'dr-ramesh-ghimire.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#F0F9FF"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#0284C7" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#0284C7" fill-opacity="0.08"/>
  <!-- Stethoscope forming heart curve -->
  <path d="M 78 54 C 64 68 68 96 92 108 C 100 112 100 112 108 108 C 132 96 136 68 122 54" stroke="#0284C7" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <!-- Stethoscope earpieces -->
  <circle cx="78" cy="54" r="4" fill="#0369A1"/>
  <circle cx="122" cy="54" r="4" fill="#0369A1"/>
  <!-- Chestpiece -->
  <circle cx="100" cy="116" r="8" fill="#0284C7" stroke="#0369A1" stroke-width="2"/>
  <!-- Inner Red Medical Cross -->
  <rect x="96" y="68" width="8" height="26" rx="2" fill="#EF4444"/>
  <rect x="87" y="77" width="26" height="8" rx="2" fill="#EF4444"/>
  <!-- Caduceus staff head -->
  <path d="M 100 46 L 100 62" stroke="#F59E0B" stroke-width="2"/>
  <!-- Typography Banner -->
  <rect x="20" y="132" width="160" height="28" rx="7" fill="#0369A1"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10.5" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.04em">DR. RAMESH GHIMIRE</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#BAE6FD" text-anchor="middle" letter-spacing="0.08em">CLINICAL CONSULTANT</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · NEPAL</text>
</svg>`,

  // 6. Gaidakot Basic Hospital
  'gaidakot-basic-hospital.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FEF2F2"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#DC2626" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#DC2626" fill-opacity="0.08"/>
  <!-- Hospital Cross with circular sun shield -->
  <circle cx="100" cy="80" r="38" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 3"/>
  <!-- Bold Red Cross -->
  <rect x="92" y="56" width="16" height="48" rx="3" fill="#DC2626"/>
  <rect x="76" y="72" width="48" height="16" rx="3" fill="#DC2626"/>
  <!-- Mountain silhouette above cross -->
  <path d="M 76 60 L 88 48 L 100 58 L 112 48 L 124 60" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Caring hands base -->
  <path d="M 74 104 C 84 116 116 116 126 104" stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#DC2626"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10.5" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.04em">GAIDAKOT BASIC</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FEE2E2" text-anchor="middle" letter-spacing="0.1em">MUNICIPAL HOSPITAL</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">GAIDAKOT · NAWALPUR</text>
</svg>`,

  // 7. Gaidakot Municipal Hospital
  'gaidakot-municipal-hospital.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#EFF6FF"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#2563EB" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Municipal Shield Badge -->
  <path d="M 64 50 L 136 50 L 136 84 C 136 108 100 124 100 124 C 100 124 64 108 64 84 Z" fill="#1E3A8A"/>
  <!-- Inner White/Red Medical Cross -->
  <rect x="94" y="60" width="12" height="38" rx="2" fill="#FFFFFF"/>
  <rect x="81" y="73" width="38" height="12" rx="2" fill="#FFFFFF"/>
  <rect x="96" y="62" width="8" height="34" rx="1" fill="#DC2626"/>
  <rect x="83" y="75" width="34" height="8" rx="1" fill="#DC2626"/>
  <!-- Golden Rod of Asclepius & Leaves -->
  <path d="M 54 84 C 54 106 74 122 96 128" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 146 84 C 146 106 126 122 104 128" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Typography Banner -->
  <rect x="20" y="132" width="160" height="28" rx="7" fill="#1E40AF"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.04em">GAIDAKOT MUNICIPAL</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#BFDBFE" text-anchor="middle" letter-spacing="0.08em">HEALTHCARE HOSPITAL</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">GAIDAKOT · NEPAL</text>
</svg>`,

  // 8. Pearl Dental Care
  'pearl-dental-care.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#F0F9FF"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#0284C7" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#E0F2FE"/>
  <!-- Pristine Stylized Tooth Contour -->
  <path d="M 80 54 C 88 50 100 54 100 58 C 100 54 112 50 120 54 C 130 58 132 72 130 84 C 128 98 122 118 114 118 C 108 118 106 104 100 104 C 94 104 92 118 86 118 C 78 118 72 98 70 84 C 68 72 70 58 80 54 Z" fill="#0284C7"/>
  <!-- Radiant Pearl in Center -->
  <circle cx="100" cy="80" r="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="3"/>
  <circle cx="96" cy="76" r="4" fill="#38BDF8"/>
  <!-- Sparkles -->
  <path d="M 124 58 L 126 62 L 130 64 L 126 66 L 124 70 L 122 66 L 118 64 L 122 62 Z" fill="#F59E0B"/>
  <path d="M 74 88 L 75 91 L 78 92 L 75 93 L 74 96 L 73 93 L 70 92 L 73 91 Z" fill="#F59E0B"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#0369A1"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.08em">PEARL DENTAL CARE</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#BAE6FD" text-anchor="middle" letter-spacing="0.1em">SPECIALIZED ORAL CLINIC</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 9. Asian Health Technical College (AHTC)
  'ahtc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FFF1F2"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#BE123C" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Heraldic College Shield -->
  <path d="M 66 52 L 134 52 L 134 86 C 134 110 100 124 100 124 C 100 124 66 110 66 86 Z" fill="#881337"/>
  <!-- Open Book & Red Cross inside Shield -->
  <path d="M 76 74 Q 100 68 100 78 Q 100 68 124 74 L 124 94 Q 100 88 100 98 Q 100 88 76 94 Z" fill="#FFFFFF"/>
  <rect x="96" y="80" width="8" height="14" fill="#DC2626"/>
  <rect x="93" y="83" width="14" height="8" fill="#DC2626"/>
  <!-- College Torch -->
  <path d="M 98 42 L 102 42 L 100 52 Z" fill="#F59E0B"/>
  <circle cx="100" cy="40" r="4" fill="#EF4444"/>
  <!-- Golden Leaves -->
  <path d="M 56 82 C 56 104 74 122 96 128" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 144 82 C 144 104 126 122 104 128" stroke="#D97706" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Typography Banner -->
  <rect x="24" y="132" width="152" height="28" rx="7" fill="#881337"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.12em">AHTC COLLEGE</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7" font-weight="700" fill="#FECDD3" text-anchor="middle" letter-spacing="0.08em">ASIAN HEALTH TECHNICAL</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 10. Pushpanjali Hospital
  'pushpanjali-hospital.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FFF7ED"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#EA580C" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#FFEDD5"/>
  <!-- Sacred Pushpa (Blooming Lotus) with Medical Cross -->
  <path d="M 100 52 C 108 64 116 78 100 96 C 84 78 92 64 100 52 Z" fill="#EA580C"/>
  <path d="M 76 68 C 90 74 94 88 100 96 C 88 96 74 88 76 68 Z" fill="#F97316"/>
  <path d="M 124 68 C 110 74 106 88 100 96 C 112 96 126 88 124 68 Z" fill="#F97316"/>
  <path d="M 68 84 C 82 86 92 94 100 98 C 88 102 70 98 68 84 Z" fill="#FB923C"/>
  <path d="M 132 84 C 118 86 108 94 100 98 C 112 102 130 98 132 84 Z" fill="#FB923C"/>
  <!-- Inset Medical Red Cross in Lotus Base -->
  <circle cx="100" cy="110" r="14" fill="#DC2626"/>
  <rect x="98" y="102" width="4" height="16" fill="#FFFFFF"/>
  <rect x="92" y="108" width="16" height="4" fill="#FFFFFF"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#C2410C"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.05em">PUSHPANJALI</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FED7AA" text-anchor="middle" letter-spacing="0.1em">HOSPITAL PVT. LTD.</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · CHITWAN</text>
</svg>`,

  // 11. Maulakalika Hospital
  'maulakalika-hospital.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FEF2F2"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#991B1B" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#991B1B" fill-opacity="0.08"/>
  <!-- Temple Silhouette on Mountain Top -->
  <!-- Mountain ridges -->
  <path d="M 60 106 L 82 82 L 100 94 L 118 82 L 140 106 Z" fill="#991B1B" fill-opacity="0.2"/>
  <!-- Pagoda Temple -->
  <path d="M 88 80 L 112 80 L 100 68 Z" fill="#991B1B"/>
  <path d="M 92 68 L 108 68 L 100 58 Z" fill="#B91C1C"/>
  <rect x="99" y="52" width="2" height="6" fill="#F59E0B"/>
  <circle cx="100" cy="51" r="2.5" fill="#F59E0B"/>
  <!-- Rising Sun Behind Temple -->
  <circle cx="100" cy="58" r="18" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 2"/>
  <!-- Medical Red Cross Shield -->
  <circle cx="100" cy="108" r="14" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/>
  <rect x="98" y="100" width="4" height="16" fill="#FFFFFF"/>
  <rect x="92" y="106" width="16" height="4" fill="#FFFFFF"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#7F1D1D"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.05em">MAULAKALIKA</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FECACA" text-anchor="middle" letter-spacing="0.1em">HOSPITAL PVT. LTD.</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · CHITWAN</text>
</svg>`,

  // 12. VYCCU Saving & Credit Co-operative
  'vyccu.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#F0FDF4"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#16A34A" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Cooperative Circular Seal -->
  <circle cx="100" cy="80" r="46" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/>
  <!-- Two hands cradling community -->
  <path d="M 68 94 C 74 108 92 116 100 116 C 108 116 126 108 132 94" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
  <!-- Rising Green Sprout / Growth Leaves -->
  <path d="M 100 106 L 100 68" stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
  <path d="M 100 76 C 88 72 84 62 86 54 C 96 54 100 64 100 76 Z" fill="#22C55E"/>
  <path d="M 100 70 C 112 66 116 56 114 48 C 104 48 100 58 100 70 Z" fill="#16A34A"/>
  <!-- Financial safety golden coin -->
  <circle cx="100" cy="56" r="7" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
  <text x="100" y="59" font-family="system-ui, sans-serif" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle">रू</text>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#14532D"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.1em">VYCCU CO-OP</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7" font-weight="700" fill="#BBF7D0" text-anchor="middle" letter-spacing="0.08em">SAVING & CREDIT LTD.</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">GAIDAKOT · CHITWAN</text>
</svg>`,

  // 13. Atharva Saving & Credit Co-operative Limited
  'atharva-saving.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FEFCE8"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#CA8A04" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#FEF08A" fill-opacity="0.3"/>
  <!-- Atharva Sacred Kalash & Golden Coins -->
  <!-- Kalash Pot -->
  <path d="M 88 82 C 86 74 92 70 100 70 C 108 70 114 74 112 82 C 114 96 122 108 100 114 C 78 108 86 96 88 82 Z" fill="#CA8A04"/>
  <!-- Coconut and mango leaves atop Kalash -->
  <path d="M 100 52 C 92 58 94 68 100 70 C 106 68 108 58 100 52 Z" fill="#16A34A"/>
  <circle cx="100" cy="64" r="5" fill="#F59E0B"/>
  <!-- Balance scale bar -->
  <path d="M 74 66 L 126 66" stroke="#1E3A8A" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="100" cy="66" r="3" fill="#1E3A8A"/>
  <!-- Hanging scale pans -->
  <path d="M 78 68 L 72 82 L 84 82 Z" fill="#CA8A04"/>
  <path d="M 122 68 L 116 82 L 128 82 Z" fill="#CA8A04"/>
  <!-- Typography Banner -->
  <rect x="22" y="132" width="156" height="28" rx="7" fill="#1E3A8A"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.08em">ATHARVA SAVING</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7" font-weight="700" fill="#FEF08A" text-anchor="middle" letter-spacing="0.08em">& CREDIT CO-OPERATIVE</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 14. K.K. Bhandar
  'kk-bhandar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#ECFDF5"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#059669" stroke-width="2.5" stroke-opacity="0.3"/>
  <circle cx="100" cy="80" r="46" fill="#D1FAE5"/>
  <!-- Retail Basket & Grain Sheaf -->
  <path d="M 76 78 L 124 78 L 118 112 L 82 112 Z" fill="#059669"/>
  <!-- Handle -->
  <path d="M 84 78 C 84 62 116 62 116 78" stroke="#047857" stroke-width="3" fill="none"/>
  <!-- Basket weave pattern lines -->
  <path d="M 80 92 L 120 92" stroke="#10B981" stroke-width="2"/>
  <path d="M 82 102 L 118 102" stroke="#10B981" stroke-width="2"/>
  <!-- Golden grain stalk emerging -->
  <path d="M 100 50 C 96 56 104 62 100 74" stroke="#F59E0B" stroke-width="2.5"/>
  <circle cx="95" cy="54" r="3" fill="#F59E0B"/>
  <circle cx="105" cy="58" r="3" fill="#F59E0B"/>
  <circle cx="97" cy="64" r="3" fill="#F59E0B"/>
  <!-- Typography Banner -->
  <rect x="24" y="132" width="152" height="28" rx="7" fill="#047857"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.1em">K.K. BHANDAR</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#A7F3D0" text-anchor="middle" letter-spacing="0.12em">GROCERY & RETAIL</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">CHITWAN · NEPAL</text>
</svg>`,

  // 15. Forbes College
  'forbes-college.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#EFF6FF"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#1E3A8A" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Collegiate Shield with Battlement Crown -->
  <path d="M 66 58 L 134 58 L 134 88 C 134 112 100 126 100 126 C 100 126 66 112 66 88 Z" fill="#1E3A8A"/>
  <!-- Battlement Tower -->
  <path d="M 80 50 L 80 58 L 120 58 L 120 50 L 114 50 L 114 54 L 108 54 L 108 50 L 102 50 L 102 54 L 98 54 L 98 50 L 92 50 L 92 54 L 86 54 L 86 50 Z" fill="#D97706"/>
  <!-- Open Academic Book inside Shield -->
  <path d="M 76 78 Q 100 72 100 82 Q 100 72 124 78 L 124 98 Q 100 92 100 102 Q 100 92 76 98 Z" fill="#FFFFFF"/>
  <path d="M 100 74 L 100 102" stroke="#D97706" stroke-width="2"/>
  <!-- Graduation Quill -->
  <path d="M 112 70 L 124 82" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
  <!-- Typography Banner -->
  <rect x="24" y="132" width="152" height="28" rx="7" fill="#1E3A8A"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.08em">FORBES COLLEGE</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7.5" font-weight="700" fill="#FDE68A" text-anchor="middle" letter-spacing="0.1em">HOSPITALITY & IT</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · CHITWAN</text>
</svg>`,

  // 16. Boston International College
  'boston-college.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="32" fill="#FEF2F2"/>
  <rect x="8" y="8" width="184" height="184" rx="26" stroke="#991B1B" stroke-width="2.5" stroke-opacity="0.3"/>
  <!-- Authentic Collegiate Circular Seal & Laurel Wreath -->
  <circle cx="100" cy="80" r="46" fill="#7F1D1D" stroke="#D97706" stroke-width="2"/>
  <!-- Laurel Wreath -->
  <path d="M 64 80 C 64 62 78 50 100 50 C 122 50 136 62 136 80" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 2"/>
  <!-- Central Heraldic Shield -->
  <path d="M 80 64 L 120 64 L 120 86 C 120 100 100 110 100 110 C 100 110 80 100 80 86 Z" fill="#991B1B" stroke="#F59E0B" stroke-width="1.5"/>
  <!-- Open Book inside Shield -->
  <path d="M 86 76 Q 100 72 100 80 Q 100 72 114 76 L 114 90 Q 100 86 100 94 Q 100 86 86 90 Z" fill="#FFFFFF"/>
  <!-- 3 Stars of Excellence -->
  <circle cx="100" cy="68" r="2" fill="#F59E0B"/>
  <circle cx="92" cy="70" r="1.5" fill="#F59E0B"/>
  <circle cx="108" cy="70" r="1.5" fill="#F59E0B"/>
  <!-- Typography Banner -->
  <rect x="20" y="132" width="160" height="28" rx="7" fill="#7F1D1D"/>
  <text x="100" y="148" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.06em">BOSTON COLLEGE</text>
  <text x="100" y="157" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="7" font-weight="700" fill="#FECACA" text-anchor="middle" letter-spacing="0.08em">INTERNATIONAL COLLEGE</text>
  <text x="100" y="174" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8" font-weight="800" fill="#64748B" text-anchor="middle" letter-spacing="0.08em">BHARATPUR · CHITWAN</text>
</svg>`
};

console.log('Writing 16 rich vector client logos...');

for (const [filename, content] of Object.entries(logos)) {
  fs.writeFileSync(path.join(srcDir, filename), content.trim());
  fs.writeFileSync(path.join(pubAssetsDir, filename), content.trim());
  fs.writeFileSync(path.join(pubClientsDir, filename), content.trim());
  console.log(`  ✓ Created & synchronized: ${filename}`);
}

console.log('All 16 rich vector client logos generated successfully!');
