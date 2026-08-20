"use client";

import { resumeData } from "@/data/resume";

export default function DownloadPDF() {
  const handleDownloadPDF = () => {
    const printWindow = window.open("", "_blank");
    const { personalInfo, about, skills, experience, education, projects } = resumeData;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${personalInfo.name} - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            @page { size: A4; margin: 0.35in 0.45in; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.3;
              color: #1e293b;
              background: #fff;
              font-size: 10px;
            }
            .header {
              text-align: center;
              margin-bottom: 8px;
              border-bottom: 1.5px solid #0f172a;
              padding-bottom: 6px;
            }
            .header h1 {
              font-size: 20px;
              color: #0f172a;
              margin-bottom: 2px;
              font-weight: 700;
            }
            .header h2 {
              font-size: 11.5px;
              color: #475569;
              font-weight: 600;
              margin-bottom: 4px;
            }
            .contact-info {
              display: flex;
              justify-content: center;
              gap: 12px;
              flex-wrap: wrap;
              font-size: 9px;
              color: #64748b;
            }
            .section {
              margin-bottom: 8px;
            }
            .section-title {
              font-size: 11.5px;
              color: #0f172a;
              margin-bottom: 4px;
              border-bottom: 1px solid #cbd5e1;
              padding-bottom: 2px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            .section-content {
              margin-left: 2px;
            }
            .item {
              margin-bottom: 6px;
            }
            .item-header {
              display: flex;
              justify-content: space-between;
              font-weight: 600;
              color: #0f172a;
              font-size: 10px;
            }
            .item-sub {
              display: flex;
              justify-content: space-between;
              color: #0f766e;
              font-size: 9.5px;
              font-weight: 500;
              margin-bottom: 2px;
            }
            ul {
              margin-left: 14px;
              color: #334155;
            }
            li {
              margin-bottom: 2px;
              font-size: 9px;
              line-height: 1.35;
            }
            .skills-category {
              margin-bottom: 2px;
              font-size: 9px;
            }
            .skills-category strong {
              color: #0f172a;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${personalInfo.name}</h1>
            <h2>${personalInfo.title}</h2>
            <div class="contact-info">
              <span>📍 ${personalInfo.location}</span>
              <span>📱 ${personalInfo.contact.phone}</span>
              <span>✉️ ${personalInfo.contact.email}</span>
              <span>🔗 LinkedIn</span>
              <span>💻 LeetCode</span>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <div class="section-content">
              <p style="font-size: 9.5px; line-height: 1.35; color: #334155;">${about.summary}</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Technical Skills</h2>
            <div class="section-content">
              <div class="skills-category"><strong>Languages:</strong> ${skills.languages.join(", ")}</div>
              <div class="skills-category"><strong>Frontend / MERN:</strong> ${skills.frontend.join(", ")}</div>
              <div class="skills-category"><strong>Backend:</strong> ${skills.backend.join(", ")}</div>
              <div class="skills-category"><strong>Database:</strong> ${skills.database.join(", ")}</div>
              <div class="skills-category"><strong>Authentication & Security:</strong> ${skills.authAndSecurity.join(", ")}</div>
              <div class="skills-category"><strong>Cloud & DevOps:</strong> ${skills.cloudAndDevOps.join(", ")}</div>
              <div class="skills-category"><strong>AI Integration:</strong> ${skills.aiIntegration.join(", ")}</div>
              <div class="skills-category"><strong>Tools & Testing:</strong> ${skills.toolsAndTesting.join(", ")}</div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Professional Experience</h2>
            <div class="section-content">
              ${experience
                .map(
                  (exp) => `
                <div class="item">
                  <div class="item-header">
                    <span>${exp.role}</span>
                    <span>${exp.startDate} – ${exp.endDate}</span>
                  </div>
                  <div class="item-sub">
                    <span>${exp.company}</span>
                    <span>${exp.location}</span>
                  </div>
                  <ul>
                    ${exp.responsibilities.map((r) => `<li>${r}</li>`).join("")}
                  </ul>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Projects</h2>
            <div class="section-content">
              ${projects
                .map(
                  (proj) => `
                <div class="item">
                  <div class="item-header">
                    <span>${proj.name} – ${proj.tagline}</span>
                  </div>
                  <ul>
                    <li>${proj.description}</li>
                    ${proj.responsibilities ? proj.responsibilities.map((r) => `<li>${r}</li>`).join("") : ""}
                  </ul>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="section-content">
              <div class="item-header">
                <span>${education.degree} – ${education.institution}</span>
                <span>${education.startDate} – ${education.endDate}</span>
              </div>
              <div style="font-size: 9px; color: #475569; margin-top: 1px;">
                CGPA: ${education.cgpa} · ${education.location}
              </div>
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="btn solid font-mono"
      aria-label="Download Resume"
    >
      Resume ↓
    </button>
  );
}
