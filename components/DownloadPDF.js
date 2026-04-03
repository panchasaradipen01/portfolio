"use client";

import { resumeData } from "@/data/resume";

export default function DownloadPDF() {
  const handleDownloadPDF = () => {
    // Create a printable version of the resume
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
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            @page {
              size: A4;
              margin: 0.35in 0.45in;
            }
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.25;
              color: #333;
              padding: 0;
              max-width: 100%;
              margin: 0;
              background: #fff;
              font-size: 10px;
            }
            .header {
              text-align: center;
              margin-bottom: 10px;
              border-bottom: 2px solid #3b82f6;
              padding-bottom: 6px;
            }
            .header h1 {
              font-size: 22px;
              color: #1e293b;
              margin-bottom: 3px;
              font-weight: 700;
            }
            .header h2 {
              font-size: 13px;
              color: #64748b;
              font-weight: 400;
            }
            .contact-info {
              display: flex;
              justify-content: center;
              gap: 12px;
              margin-top: 5px;
              flex-wrap: wrap;
            }
            .contact-info span {
              font-size: 9px;
              color: #475569;
            }
            .section {
              margin-bottom: 10px;
            }
            .section-title {
              font-size: 13px;
              color: #1e293b;
              margin-bottom: 5px;
              border-bottom: 1.5px solid #e2e8f0;
              padding-bottom: 3px;
              font-weight: 700;
            }
            .section-content {
              margin-left: 4px;
            }
            .section-content p {
              font-size: 10px;
              line-height: 1.3;
              margin-bottom: 0;
            }
            .experience-item, .project-item {
              margin-bottom: 8px;
            }
            .experience-header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 3px;
            }
            .job-title {
              font-size: 11px;
              font-weight: 600;
              color: #1e293b;
            }
            .company {
              font-size: 10px;
              color: #475569;
              margin-bottom: 2px;
            }
            .date-location {
              font-size: 9px;
              color: #64748b;
              text-align: right;
            }
            .responsibilities {
              margin-top: 3px;
              margin-left: 15px;
            }
            .responsibilities li {
              margin-bottom: 1.5px;
              font-size: 9.5px;
              color: #334155;
              line-height: 1.25;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 6px;
              margin-top: 3px;
            }
            .skill-category {
              margin-bottom: 4px;
            }
            .skill-category h4 {
              font-size: 10px;
              color: #1e293b;
              margin-bottom: 3px;
              font-weight: 600;
            }
            .skill-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 3px;
            }
            .skill-tag {
              background: #e2e8f0;
              padding: 2px 6px;
              border-radius: 3px;
              font-size: 8.5px;
              color: #334155;
            }
            .education-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 0;
            }
            .education-details h3 {
              font-size: 11px;
              color: #1e293b;
              margin-bottom: 2px;
              font-weight: 600;
            }
            .education-details p {
              font-size: 9.5px;
              color: #64748b;
              margin-bottom: 0;
            }
            .tech-stack {
              display: flex;
              flex-wrap: wrap;
              gap: 3px;
              margin-top: 3px;
            }
            .tech-tag {
              background: #dbeafe;
              color: #1e40af;
              padding: 2px 5px;
              border-radius: 3px;
              font-size: 8.5px;
            }
            .project-name {
              font-size: 10px;
              color: #334155;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .project-desc {
              margin: 2px 0;
              color: #64748b;
              font-size: 9.5px;
              line-height: 1.25;
            }
            @media print {
              body {
                padding: 0;
                font-size: 10px;
              }
              .no-print {
                display: none;
              }
              .section {
                margin-bottom: 8px;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${personalInfo.name}</h1>
            <h2>${personalInfo.title}</h2>
            <div class="contact-info">
              <span>📧 ${personalInfo.contact.email}</span>
              <span>📱 ${personalInfo.contact.phone}</span>
              <span>🔗 ${personalInfo.contact.linkedin}</span>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <div class="section-content">
              <p style="margin-bottom: 0;">${about.summary}</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Skills</h2>
            <div class="section-content">
              <div class="skills-grid">
                <div class="skill-category">
                  <h4>Languages</h4>
                  <div class="skill-tags">
                    ${skills.languages.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Tools</h4>
                  <div class="skill-tags">
                    ${skills.tools.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Frontend</h4>
                  <div class="skill-tags">
                    ${skills.frontend.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Web</h4>
                  <div class="skill-tags">
                    ${skills.web.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Testing</h4>
                  <div class="skill-tags">
                    ${skills.testing.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Other</h4>
                  <div class="skill-tags">
                    ${skills.other.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Experience</h2>
            <div class="section-content">
              ${experience.map(exp => `
                <div class="experience-item">
                  <div class="experience-header">
                    <div>
                      <div class="job-title">${exp.role}</div>
                      <div class="company">${exp.company}</div>
                    </div>
                    <div class="date-location">
                      <div>${exp.startDate} - ${exp.endDate}</div>
                      <div>${exp.location}</div>
                    </div>
                  </div>
                  ${exp.projects ? exp.projects.map(project => `
                    <div style="margin-top: 3px;">
                      <div class="project-name">${project.name}</div>
                      <p class="project-desc">${project.description}</p>
                      <ul class="responsibilities">
                        ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                      </ul>
                      <div class="tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                      </div>
                    </div>
                  `).join('') : `
                    <ul class="responsibilities">
                      ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                    <div class="tech-stack">
                      ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                  `}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="section-content">
              <div class="education-item">
                <div class="education-details">
                  <h3>${education.degree}</h3>
                  <p>${education.institution}</p>
                  <p>${education.location}</p>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 11px; font-weight: 600; color: #1e293b;">CGPA: ${education.cgpa}</div>
                  <div style="font-size: 9.5px; color: #64748b;">${education.startDate} - ${education.endDate}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">Academic Project</h2>
            <div class="section-content">
              ${projects.map(project => `
                <div class="project-item">
                  <div class="project-name">${project.name}</div>
                  <p class="project-desc">${project.description}</p>
                  <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    
    // Wait for content to load, then print
    setTimeout(() => {
      printWindow.print();
      // Optionally close after printing
      // printWindow.close();
    }, 250);
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900/20"
      aria-label="Download Resume as PDF"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Resume PDF
    </button>
  );
}

