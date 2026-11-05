import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  GitBranch, 
  ShieldCheck, 
  AlertTriangle,
  Terminal,
  FileCode,
  ArrowRight
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { COMPANY_INFO } from '../data/companyData';

export const DeploymentGuidePage: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="GitHub → Vercel → technopath.com.np Deployment Guide"
        subtitle="Step-by-step instructions to connect your existing domain technopath.com.np to Vercel with automatic SSL and SPA routing."
        badgeText="Production Deployment & Domain Connection"
        breadcrumbs={[{ label: 'Deployment Guide' }]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Critical Notice */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold">Domain Ownership Confirmed:</span> You already own <strong className="font-mono text-amber-950">technopath.com.np</strong>. Do not purchase or register another domain. Follow the exact steps below to attach this custom domain to Vercel.
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="p-8 rounded-3xl bg-[#202329] text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4510B] mb-2">
              Deployment Pipeline
            </div>
            <h2 className="text-2xl font-bold mb-6">
              Three-Stage Seamless Pipeline
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <div className="font-mono text-[#F4510B] font-bold text-lg mb-1">01. GitHub</div>
                <div className="font-bold text-white mb-2">Source Code Push</div>
                <p className="text-neutral-400 text-xs">
                  All production React, TypeScript, and Tailwind code committed to your GitHub repository.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <div className="font-mono text-[#F4510B] font-bold text-lg mb-1">02. Vercel</div>
                <div className="font-bold text-white mb-2">Automated Build & Edge Hosting</div>
                <p className="text-neutral-400 text-xs">
                  Vercel auto-detects Vite, executes <code className="font-mono text-neutral-300">npm run build</code>, and serves static assets with global CDN caching.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <div className="font-mono text-[#F4510B] font-bold text-lg mb-1">03. Custom Domain</div>
                <div className="font-bold text-white mb-2">technopath.com.np</div>
                <p className="text-neutral-400 text-xs">
                  Connected via your domain DNS provider with automated Let's Encrypt SSL and HTTP-to-HTTPS redirect.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#F4510B] text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  Step 1: Push Code to GitHub
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
                Initialize git (if not already done) and push the complete project into a new private or public GitHub repository.
              </p>
              <div className="bg-[#202329] p-4 rounded-xl text-neutral-200 text-xs font-mono overflow-x-auto relative">
                <div>git add .</div>
                <div>git commit -m "feat: complete Techno Path production corporate website"</div>
                <div>git branch -M main</div>
                <div>git remote add origin https://github.com/YOUR_USERNAME/technopath-website.git</div>
                <div>git push -u origin main</div>
                <button
                  onClick={() => copyToClipboard('git add .\ngit commit -m "feat: complete Techno Path production corporate website"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/technopath-website.git\ngit push -u origin main', 'git')}
                  className="absolute top-3 right-3 p-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs flex items-center gap-1"
                >
                  {copiedItem === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedItem === 'git' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#F4510B] text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  Step 2: Import Project in Vercel
                </h3>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <p>1. Go to <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-[#F4510B] font-semibold underline">vercel.com/new</a> and log in with your GitHub account.</p>
                <p>2. Select the repository <strong className="font-semibold text-neutral-900">technopath-website</strong> and click <strong>Import</strong>.</p>
                <p>3. Framework Preset: Vercel will automatically detect <strong>Vite</strong>.</p>
                <p>4. Build Command: <code className="px-1.5 py-0.5 bg-white border rounded font-mono text-neutral-800">npm run build</code></p>
                <p>5. Output Directory: <code className="px-1.5 py-0.5 bg-white border rounded font-mono text-neutral-800">dist</code></p>
                <p>6. Click <strong>Deploy</strong>. Within ~45 seconds, your project will be live on a temporary <code className="font-mono text-neutral-800">*.vercel.app</code> preview URL.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#F4510B] text-white font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  Step 3: Add Custom Domain <span className="font-mono text-[#F4510B]">technopath.com.np</span>
                </h3>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <p>1. In your Vercel Project Dashboard, navigate to <strong>Settings → Domains</strong>.</p>
                <p>2. Enter <strong className="font-mono text-neutral-900">technopath.com.np</strong> and click <strong>Add</strong>.</p>
                <p>3. Vercel will ask whether to also add <strong className="font-mono text-neutral-900">www.technopath.com.np</strong> and redirect to the canonical domain. Select <strong>Yes (Recommended)</strong> so both root and www resolve cleanly!</p>
              </div>

              {/* DNS Verification Details */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-300 space-y-3">
                <div className="font-bold text-neutral-900 text-xs uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>DNS Configuration from Vercel</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Vercel will display the exact DNS records to add at your .np domain registrar (e.g., Mercantile Communications / register.com.np DNS control panel):
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#202329] text-white">
                      <tr>
                        <th className="p-2 rounded-l">Type</th>
                        <th className="p-2">Name / Host</th>
                        <th className="p-2">Value (As shown in Vercel UI)</th>
                        <th className="p-2 rounded-r">TTL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-neutral-800">
                      <tr>
                        <td className="p-2 font-bold text-[#F4510B]">A</td>
                        <td className="p-2">@ (root)</td>
                        <td className="p-2">76.76.21.21 <span className="text-[10px] text-neutral-500 font-sans">(Verify in your Vercel screen)</span></td>
                        <td className="p-2">Automatic / 3600</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-[#F4510B]">CNAME</td>
                        <td className="p-2">www</td>
                        <td className="p-2">cname.vercel-dns.com</td>
                        <td className="p-2">Automatic / 3600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-[11px] text-neutral-500 italic">
                  Note: Do not guess or overwrite existing internal NS/MX records without checking. Vercel will display a green checkmark as soon as DNS propagation completes (~15 minutes to 24 hours depending on ISP caching).
                </div>
              </div>
            </div>

            {/* Step 4: SPA Fallback & Routing */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F5F7] border border-neutral-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#F4510B] text-white font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  Step 4: SPA Routing & Reload Persistence (<code className="font-mono text-sm">vercel.json</code>)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
                To guarantee that refreshing the browser on deep routes like <code className="font-mono text-neutral-800">/services/it-infrastructure</code> or <code className="font-mono text-neutral-800">/about</code> never returns a 404 error, we have already pre-configured <code className="font-mono text-[#F4510B]">vercel.json</code> in the root directory:
              </p>
              <pre className="p-4 bg-[#202329] text-neutral-200 rounded-xl text-xs font-mono overflow-x-auto">
{`{
  "version": 2,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`}
              </pre>
            </div>
          </div>

          <div className="pt-4 text-center">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
            >
              <span>Open Vercel Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
