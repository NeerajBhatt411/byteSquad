"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TECH_KEYS = ["flutter", "react", "nodejs", "express", "kotlin", "java", "wordpress", "figma"];

const ICONS = {
  overview: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
  enquiries: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  products: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  footer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  site: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

const NAV = [
  { key: "overview", label: "Overview", icon: ICONS.overview },
  { key: "enquiries", label: "Enquiries", icon: ICONS.enquiries },
  { key: "services", label: "Services", icon: ICONS.services },
  { key: "products", label: "White-Label", icon: ICONS.products },
  { key: "projects", label: "Projects", icon: ICONS.projects },
  { key: "footer", label: "Footer", icon: ICONS.footer },
];

const TITLES = {
  overview: ["Overview", "A quick pulse of your website content."],
  enquiries: ["Enquiries", "Messages submitted through the contact form."],
  services: ["Services", "Manage the services shown on the website."],
  products: ["White-Label Products", "Manage the products shown on the homepage and /white-label."],
  projects: ["Projects", "Portfolio items shown in the “Our Work” section on the homepage."],
  footer: ["Footer", "Contact details and social links shown in the site footer."],
};

async function api(path, options = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (res.status === 401) {
    window.location.reload();
    throw new Error("unauthorized");
  }
  return res.json();
}

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  return isNaN(d) ? "" : d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}

export default function AdminDashboard({ adminEmail }) {
  const router = useRouter();
  const [tab, setTab] = useState("overview");

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  const [title, subtitle] = TITLES[tab];

  return (
    <div className="bsa-layout">
      {/* Sidebar */}
      <aside className="bsa-sidebar">
        <div className="bsa-brand">
          <img src="/brand/byteSquad-icon-tight.svg" alt="" />
          <span>byte<b>Squad</b></span>
        </div>
        <nav className="bsa-nav">
          {NAV.map((item) => (
            <button
              key={item.key}
              className={`bsa-nav-item ${tab === item.key ? "active" : ""}`}
              onClick={() => setTab(item.key)}
            >
              <span className="bsa-nav-ic">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="bsa-sidebar-foot">
          <a href="/" target="_blank" className="bsa-nav-item">
            <span className="bsa-nav-ic">{ICONS.site}</span>
            View Website
          </a>
          <button className="bsa-nav-item" onClick={handleLogout}>
            <span className="bsa-nav-ic">{ICONS.logout}</span>
            Log out
          </button>
          <p className="bsa-user" title={adminEmail}>{adminEmail}</p>
        </div>
      </aside>

      {/* Main */}
      <div className="bsa-main">
        <header className="bsa-topbar">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </header>
        <div className="bsa-content">
          {tab === "overview" && <OverviewTab onNavigate={setTab} />}
          {tab === "enquiries" && <EnquiriesTab />}
          {tab === "services" && <ServicesTab />}
          {tab === "products" && <ProductsTab />}
          {tab === "projects" && <ProjectsTab />}
          {tab === "footer" && <FooterTab />}
        </div>
      </div>
    </div>
  );
}

/* ---------- Charts (inline SVG, single-series blue) ---------- */

const CHART_BLUE = "#2563EB";
const CHART_BLUE_DARK = "#1D4ED8";

// Column path: 4px rounded data-end (top), square at the baseline.
function columnPath(x, y, w, baseY) {
  const r = Math.min(4, Math.max(0, baseY - y), w / 2);
  return `M ${x} ${baseY} L ${x} ${y + r} Q ${x} ${y} ${x + r} ${y} L ${x + w - r} ${y} Q ${x + w} ${y} ${x + w} ${y + r} L ${x + w} ${baseY} Z`;
}

// Horizontal bar path: 4px rounded data-end (right), square at the left baseline.
function hBarPath(x, y, w, h) {
  const r = Math.min(4, w, h / 2);
  return `M ${x} ${y} L ${x + w - r} ${y} Q ${x + w} ${y} ${x + w} ${y + r} L ${x + w} ${y + h - r} Q ${x + w} ${y + h} ${x + w - r} ${y + h} L ${x} ${y + h} Z`;
}

function DailyColumnChart({ days }) {
  const [tip, setTip] = useState(null);
  const W = 560, H = 200;
  const pad = { top: 14, right: 8, bottom: 26, left: 30 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const baseY = pad.top + plotH;
  const maxVal = Math.max(1, ...days.map((d) => d.value));
  const yMax = Math.max(2, Math.ceil(maxVal / 2) * 2);
  const ticks = [0, yMax / 2, yMax];
  const band = plotW / days.length;
  const barW = Math.min(24, band - 4);
  const maxIdx = days.reduce((best, d, i) => (d.value > days[best].value ? i : best), 0);

  return (
    <div className="bsa-chart" onMouseLeave={() => setTip(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Enquiries per day, last 14 days">
        {ticks.map((t) => {
          const y = baseY - (t / yMax) * plotH;
          return (
            <g key={t}>
              <line x1={pad.left} x2={W - pad.right} y1={y} y2={y} stroke="#EEF2F7" strokeWidth="1" />
              <text x={pad.left - 7} y={y + 3.5} textAnchor="end" className="bsa-axis-txt">{t}</text>
            </g>
          );
        })}
        {days.map((d, i) => {
          const x = pad.left + i * band + (band - barW) / 2;
          const h = (d.value / yMax) * plotH;
          const y = baseY - h;
          return (
            <g key={d.key}>
              {d.value > 0 && (
                <path
                  d={columnPath(x, y, barW, baseY)}
                  fill={tip?.i === i ? CHART_BLUE_DARK : CHART_BLUE}
                />
              )}
              {/* hit target wider than the mark */}
              <rect
                x={pad.left + i * band} y={pad.top} width={band} height={plotH} fill="transparent"
                onMouseEnter={() => setTip({ i, xPct: ((pad.left + i * band + band / 2) / W) * 100, yPct: (y / H) * 100, text: `${d.full} — ${d.value} enquir${d.value === 1 ? "y" : "ies"}` })}
              />
              {i === maxIdx && d.value > 0 && (
                <text x={x + barW / 2} y={y - 5} textAnchor="middle" className="bsa-axis-txt strong">{d.value}</text>
              )}
              {i % 2 === 0 && (
                <text x={pad.left + i * band + band / 2} y={H - 8} textAnchor="middle" className="bsa-axis-txt">{d.label}</text>
              )}
            </g>
          );
        })}
        <line x1={pad.left} x2={W - pad.right} y1={baseY} y2={baseY} stroke="#E2E8F0" strokeWidth="1" />
      </svg>
      {tip && <div className="bsa-tip" style={{ left: `${tip.xPct}%`, top: `${tip.yPct}%` }}>{tip.text}</div>}
    </div>
  );
}

function InterestBarChart({ rows }) {
  const [hover, setHover] = useState(-1);
  const W = 560;
  const rowH = 34, barH = 14;
  const pad = { top: 6, right: 44, left: 150 };
  const H = pad.top + rows.length * rowH + 6;
  const plotW = W - pad.left - pad.right;
  const maxVal = Math.max(1, ...rows.map((r) => r.value));

  return (
    <div className="bsa-chart" onMouseLeave={() => setHover(-1)}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Enquiries by service interest">
        {rows.map((r, i) => {
          const y = pad.top + i * rowH;
          const w = Math.max(2, (r.value / maxVal) * plotW);
          const label = r.label.length > 22 ? `${r.label.slice(0, 21)}…` : r.label;
          return (
            <g key={r.label}
              onMouseEnter={() => setHover(i)}
              style={{ cursor: "default" }}>
              <rect x="0" y={y} width={W} height={rowH} fill="transparent" />
              <text x={pad.left - 10} y={y + rowH / 2 + 4} textAnchor="end" className="bsa-axis-txt dark">{label}</text>
              <path d={hBarPath(pad.left, y + (rowH - barH) / 2, w, barH)} fill={hover === i ? CHART_BLUE_DARK : CHART_BLUE} />
              <text x={pad.left + w + 8} y={y + rowH / 2 + 4} className="bsa-axis-txt strong">{r.value}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ---------- Overview ---------- */

function OverviewTab({ onNavigate }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    Promise.all([
      api("/api/admin/enquiries").catch(() => null),
      api("/api/admin/services").catch(() => null),
      api("/api/admin/products").catch(() => null),
      api("/api/admin/projects").catch(() => null),
    ]).then(([enq, svc, prod, proj]) => {
      const enquiries = enq?.enquiries || [];

      // Daily counts for the last 14 days (local-date keys on both sides,
      // so entries never shift buckets across the UTC boundary).
      const localKey = (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const days = [];
      const now = new Date();
      for (let i = 13; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
        days.push({
          key: localKey(d),
          label: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
          full: d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
          value: 0,
        });
      }
      const byKey = new Map(days.map((d) => [d.key, d]));
      for (const e of enquiries) {
        const day = e.createdAt && byKey.get(localKey(new Date(e.createdAt)));
        if (day) day.value += 1;
      }

      // Top service interests (subject field), top 5.
      const counts = new Map();
      for (const e of enquiries) {
        const subject = (e.subject || "Not specified").trim() || "Not specified";
        counts.set(subject, (counts.get(subject) || 0) + 1);
      }
      const interests = [...counts.entries()]
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

      setStats({
        enquiries: enquiries.length,
        unread: enquiries.filter((e) => !e.read).length,
        services: svc?.services?.length ?? 0,
        products: prod?.products?.length ?? 0,
        projects: proj?.projects?.length ?? 0,
        latest: enquiries.slice(0, 5),
        days,
        interests,
        last14: days.reduce((sum, d) => sum + d.value, 0),
      });
    });
  }, []);

  if (!stats) return <p className="bsa-muted">Loading…</p>;

  const cards = [
    { key: "enquiries", label: "Enquiries", value: stats.enquiries, hint: stats.unread ? `${stats.unread} unread` : "All read" },
    { key: "services", label: "Services", value: stats.services, hint: "Live on website" },
    { key: "products", label: "White-Label Products", value: stats.products, hint: "Live on website" },
    { key: "projects", label: "Projects", value: stats.projects, hint: stats.projects ? "Shown on homepage" : "Section hidden" },
  ];

  return (
    <>
      <div className="bsa-stats">
        {cards.map((c) => (
          <button key={c.key} className="bsa-stat" onClick={() => onNavigate(c.key)}>
            <span className="bsa-stat-v">{c.value}</span>
            <span className="bsa-stat-l">{c.label}</span>
            <span className="bsa-stat-h">{c.hint}</span>
          </button>
        ))}
      </div>

      <div className="bsa-charts">
        <div className="bsa-panel">
          <div className="bsa-panel-head">
            <h3>Enquiries — last 14 days</h3>
            <span className="bsa-muted sm">{stats.last14} total</span>
          </div>
          <DailyColumnChart days={stats.days} />
        </div>
        <div className="bsa-panel">
          <div className="bsa-panel-head"><h3>Enquiries by interest</h3></div>
          {stats.interests.length === 0
            ? <p className="bsa-muted">No enquiries yet — the breakdown appears once messages come in.</p>
            : <InterestBarChart rows={stats.interests} />}
        </div>
      </div>

      <div className="bsa-panel">
        <div className="bsa-panel-head">
          <h3>Latest enquiries</h3>
          <button className="bsa-btn ghost sm" onClick={() => onNavigate("enquiries")}>View all</button>
        </div>
        {stats.latest.length === 0 ? (
          <p className="bsa-muted">No enquiries yet — contact form submissions will appear here.</p>
        ) : (
          <table className="bsa-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Subject</th><th>Received</th></tr>
            </thead>
            <tbody>
              {stats.latest.map((e) => (
                <tr key={e.id} className={e.read ? "" : "is-new"}>
                  <td>{e.name}</td>
                  <td><a href={`mailto:${e.email}`}>{e.email}</a></td>
                  <td>{e.subject || "—"}</td>
                  <td>{formatDate(e.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

/* ---------- Enquiries ---------- */

function EnquiriesTab() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const data = await api("/api/admin/enquiries");
      if (data.status === "success") setItems(data.enquiries);
      else setError(data.message || "Could not load enquiries.");
    } catch {
      setError("Could not load enquiries.");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function toggleRead(item) {
    await api("/api/admin/enquiries", { method: "PATCH", body: JSON.stringify({ id: item.id, read: !item.read }) });
    load();
  }

  async function remove(item) {
    if (!confirm(`Delete enquiry from ${item.name}?`)) return;
    await api("/api/admin/enquiries", { method: "DELETE", body: JSON.stringify({ id: item.id }) });
    load();
  }

  if (error) return <div className="bsa-msg err">{error}</div>;
  if (!items) return <p className="bsa-muted">Loading…</p>;
  if (!items.length) return <div className="bsa-panel"><p className="bsa-muted">No enquiries yet. Submissions from the contact form will appear here.</p></div>;

  return (
    <div className="bsa-cards">
      {items.map((item) => (
        <div key={item.id} className={`bsa-panel enquiry ${item.read ? "is-read" : ""}`}>
          <div className="bsa-enq-head">
            <div>
              <b>{item.name}</b>
              {!item.read && <span className="bsa-badge">New</span>}
              <div className="bsa-muted sm">
                <a href={`mailto:${item.email}`}>{item.email}</a>
                {item.phone ? <span> · {item.phone}</span> : null}
                {item.subject ? <span> · {item.subject}</span> : null}
              </div>
            </div>
            <span className="bsa-date">{formatDate(item.createdAt)}</span>
          </div>
          <p className="bsa-enq-msg">{item.message}</p>
          <div className="bsa-row-actions">
            <button className="bsa-btn ghost sm" onClick={() => toggleRead(item)}>
              {item.read ? "Mark unread" : "Mark read"}
            </button>
            <button className="bsa-btn danger sm" onClick={() => remove(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Services ---------- */

function ServicesTab() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ title: "", desc: "", href: "", tech: [] });
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const data = await api("/api/admin/services");
      if (data.status === "success") setItems(data.services);
      else setError(data.message || "Could not load services.");
    } catch {
      setError("Could not load services.");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  function toggleTech(key) {
    setForm((f) => ({
      ...f,
      tech: f.tech.includes(key) ? f.tech.filter((t) => t !== key) : [...f.tech, key],
    }));
  }

  async function add(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const data = await api("/api/admin/services", { method: "POST", body: JSON.stringify(form) });
      if (data.status === "success") {
        setForm({ title: "", desc: "", href: "", tech: [] });
        load();
      } else {
        alert(data.message || "Could not add service.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function remove(item) {
    if (!confirm(`Remove service "${item.title}" from the website?`)) return;
    await api("/api/admin/services", { method: "DELETE", body: JSON.stringify({ id: item.id }) });
    load();
  }

  if (error) return <div className="bsa-msg err">{error}</div>;
  if (!items) return <p className="bsa-muted">Loading…</p>;

  return (
    <div className="bsa-split">
      <div className="bsa-panel">
        <div className="bsa-panel-head"><h3>Live services ({items.length})</h3></div>
        <div className="bsa-rows">
          {items.map((item) => (
            <div key={item.id} className="bsa-row">
              <div className="bsa-row-body">
                <b>{item.title}</b>
                <p className="bsa-muted sm">{item.desc}</p>
                {item.tech?.length ? (
                  <div className="bsa-chips">{item.tech.map((t) => <span key={t}>{t}</span>)}</div>
                ) : null}
              </div>
              <button className="bsa-btn danger sm" onClick={() => remove(item)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <form className="bsa-panel bsa-form" onSubmit={add}>
        <div className="bsa-panel-head"><h3>Add a service</h3></div>
        <label>Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. AI Solutions" required /></label>
        <label>Description<textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="One or two lines shown on the card" required /></label>
        <label>Link (optional)<input value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="/services or https://…" /></label>
        <span className="bsa-label">Technologies</span>
        <div className="bsa-checks">
          {TECH_KEYS.map((key) => (
            <label key={key} className={form.tech.includes(key) ? "checked" : ""}>
              <input type="checkbox" checked={form.tech.includes(key)} onChange={() => toggleTech(key)} />
              {key}
            </label>
          ))}
        </div>
        <button className="bsa-btn" disabled={busy}>{busy ? "Adding…" : "Add Service"}</button>
      </form>
    </div>
  );
}

/* ---------- White-Label products ---------- */

function ProductsTab() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", desc: "", href: "" });
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const data = await api("/api/admin/products");
      if (data.status === "success") setItems(data.products);
      else setError(data.message || "Could not load products.");
    } catch {
      setError("Could not load products.");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function add(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const data = await api("/api/admin/products", { method: "POST", body: JSON.stringify(form) });
      if (data.status === "success") {
        setForm({ name: "", desc: "", href: "" });
        load();
      } else {
        alert(data.message || "Could not add product.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function remove(item) {
    if (!confirm(`Remove "${item.name}" from the website listings?`)) return;
    await api("/api/admin/products", { method: "DELETE", body: JSON.stringify({ id: item.id }) });
    load();
  }

  if (error) return <div className="bsa-msg err">{error}</div>;
  if (!items) return <p className="bsa-muted">Loading…</p>;

  return (
    <div className="bsa-split">
      <div className="bsa-panel">
        <div className="bsa-panel-head"><h3>Live products ({items.length})</h3></div>
        <div className="bsa-rows">
          {items.map((item) => (
            <div key={item.id} className="bsa-row">
              <div className="bsa-row-body">
                <b>{item.name}</b>
                <p className="bsa-muted sm">{item.desc}</p>
              </div>
              <button className="bsa-btn danger sm" onClick={() => remove(item)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      <form className="bsa-panel bsa-form" onSubmit={add}>
        <div className="bsa-panel-head"><h3>Add a product</h3></div>
        <p className="bsa-muted sm">New products appear on the homepage and /white-label listings. The link can point to a page or to /contact.</p>
        <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Food Delivery App" required /></label>
        <label>Description<textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="One or two lines shown on the card" required /></label>
        <label>Link (optional)<input value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="/contact or https://…" /></label>
        <button className="bsa-btn" disabled={busy}>{busy ? "Adding…" : "Add Product"}</button>
      </form>
    </div>
  );
}

/* ---------- Projects ---------- */

function ProjectsTab() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", client: "", link: "", desc: "" });
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      const data = await api("/api/admin/projects");
      if (data.status === "success") setItems(data.projects);
      else setError(data.message || "Could not load projects.");
    } catch {
      setError("Could not load projects.");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function add(e) {
    e.preventDefault();
    setBusy(true);
    try {
      let image = "";
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        const up = await res.json().catch(() => ({}));
        if (up.status !== "success") {
          alert(up.message || "Image upload failed.");
          return;
        }
        image = up.url;
      }
      const data = await api("/api/admin/projects", {
        method: "POST",
        body: JSON.stringify({ ...form, image }),
      });
      if (data.status === "success") {
        setForm({ name: "", client: "", link: "", desc: "" });
        setFile(null);
        e.target.reset?.();
        load();
      } else {
        alert(data.message || "Could not add project.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function remove(item) {
    if (!confirm(`Delete project "${item.name}"?`)) return;
    await api("/api/admin/projects", { method: "DELETE", body: JSON.stringify({ id: item.id }) });
    load();
  }

  if (error) return <div className="bsa-msg err">{error}</div>;
  if (!items) return <p className="bsa-muted">Loading…</p>;

  return (
    <div className="bsa-split">
      <div className="bsa-panel">
        <div className="bsa-panel-head"><h3>Live projects ({items.length})</h3></div>
        {items.length === 0 && <p className="bsa-muted">No projects yet — add your first one and it will appear in “Our Work” on the homepage.</p>}
        <div className="bsa-rows">
          {items.map((item) => (
            <div key={item.id} className="bsa-row">
              <div className="bsa-proj">
                {item.image ? <img src={item.image} alt="" /> : <span className="bsa-noimg">No image</span>}
                <div className="bsa-row-body">
                  <b>{item.name}</b>
                  <p className="bsa-muted sm">
                    {item.client || "—"}
                    {item.link ? <> · <a href={item.link} target="_blank" rel="noreferrer">Visit</a></> : null}
                  </p>
                </div>
              </div>
              <button className="bsa-btn danger sm" onClick={() => remove(item)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      <form className="bsa-panel bsa-form" onSubmit={add}>
        <div className="bsa-panel-head"><h3>Add a project</h3></div>
        <label>Project name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. QuickRide Taxi Platform" required /></label>
        <label>Client (optional)<input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="e.g. QuickRide Pvt Ltd" /></label>
        <label>Live link (optional)<input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://…" /></label>
        <label>Image<input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} /></label>
        <label>Short description (optional)<textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="One line about the project" /></label>
        <button className="bsa-btn" disabled={busy}>{busy ? "Saving…" : "Add Project"}</button>
      </form>
    </div>
  );
}

/* ---------- Footer ---------- */

function FooterTab() {
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api("/api/admin/settings")
      .then((data) => {
        if (data.status === "success") setForm(data.footer);
        else setError(data.message || "Could not load footer settings.");
      })
      .catch(() => setError("Could not load footer settings."));
  }, []);

  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setSaved(false);
    try {
      const data = await api("/api/admin/settings", { method: "PUT", body: JSON.stringify(form) });
      if (data.status === "success") setSaved(true);
      else alert("Could not save footer settings.");
    } finally {
      setBusy(false);
    }
  }

  if (error) return <div className="bsa-msg err">{error}</div>;
  if (!form) return <p className="bsa-muted">Loading…</p>;

  function field(key, label, placeholder) {
    return (
      <label>
        {label}
        <input value={form[key] || ""} onChange={(e) => { setForm({ ...form, [key]: e.target.value }); setSaved(false); }} placeholder={placeholder} />
      </label>
    );
  }

  return (
    <form className="bsa-panel bsa-form bsa-form-wide" onSubmit={save}>
      <div className="bsa-panel-head"><h3>Footer content</h3></div>
      {saved && <div className="bsa-msg ok">Saved — the live site is updated.</div>}
      <div className="bsa-form-row">
        {field("address", "Address", "B-48, Sector 48, Noida")}
        {field("email", "Email", "info@bytesquad.in")}
      </div>
      <div className="bsa-form-row">
        {field("phone", "Phone", "+91 70422 32923")}
        {field("copyright", "Copyright line", "© 2026 byteSquad. All rights reserved.")}
      </div>
      <div className="bsa-form-row">
        {field("linkedin", "LinkedIn URL", "https://linkedin.com/company/…")}
        {field("instagram", "Instagram URL", "https://instagram.com/…")}
      </div>
      {field("youtube", "YouTube URL", "https://youtube.com/@…")}
      <button className="bsa-btn" disabled={busy}>{busy ? "Saving…" : "Save Footer"}</button>
    </form>
  );
}
