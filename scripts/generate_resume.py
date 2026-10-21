"""Canonical resume generator; mirror this source and PDF into Platform Demo."""

import argparse
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Braiden_Miller.pdf"
INK = colors.HexColor("#202C37")
ACCENT = colors.HexColor("#155B75")
MUTED = colors.HexColor("#4D5964")


def build_styles():
    body = ParagraphStyle("Body", fontName="Helvetica", fontSize=10, leading=14, textColor=INK, spaceAfter=6)
    return {
        "name": ParagraphStyle("Name", parent=body, fontName="Helvetica-Bold", fontSize=25, leading=29, spaceAfter=4),
        "title": ParagraphStyle("Title", parent=body, fontName="Helvetica-Bold", fontSize=11, leading=15, textColor=ACCENT),
        "contact": ParagraphStyle("Contact", parent=body, fontSize=9.2, leading=13, textColor=MUTED, spaceAfter=10),
        "section": ParagraphStyle("Section", parent=body, fontName="Helvetica-Bold", fontSize=10.5, leading=14,
                                  textColor=ACCENT, spaceBefore=12, spaceAfter=7, keepWithNext=True),
        "role": ParagraphStyle("Role", parent=body, fontName="Helvetica-Bold", fontSize=10.5, leading=14,
                               spaceAfter=2, keepWithNext=True),
        "company": ParagraphStyle("Company", parent=body, textColor=MUTED, spaceAfter=7, keepWithNext=True),
        "body": body,
        "bullet": ParagraphStyle("Bullet", parent=body, leftIndent=11, firstLineIndent=-9, spaceAfter=7),
        "skill": ParagraphStyle("Skill", parent=body, fontSize=9.6, leading=13.5, spaceAfter=5),
    }


def section(title, styles):
    return Paragraph(title.upper(), styles["section"])


def role(title, company, dates, items, styles):
    return [
        Paragraph(title, styles["role"]),
        Paragraph(f"{company} | {dates}", styles["company"]),
        *[Paragraph(f"- {item}", styles["bullet"]) for item in items],
    ]


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.30 * inch, "Braiden Miller | Backend Engineering")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.30 * inch, f"{doc.page} / 2")
    canvas.restoreState()


def build_resume(output=OUTPUT):
    styles = build_styles()
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output), pagesize=letter, leftMargin=0.65 * inch, rightMargin=0.65 * inch,
        topMargin=0.5 * inch, bottomMargin=0.6 * inch,
        title="Braiden Miller - Senior Backend Software Engineer",
        author="Braiden Miller", subject="Backend engineering, distributed systems and technical leadership",
        invariant=1,
    )
    story = [
        Paragraph("Braiden J. Miller", styles["name"]),
        Paragraph("Senior Software Engineer | Backend &amp; Distributed Systems", styles["title"]),
        Paragraph(
            "Golden, Colorado | (219) 743-2686 | "
            '<link href="mailto:braidenjamesmiller@gmail.com" color="#155B75">braidenjamesmiller@gmail.com</link><br/>'
            '<link href="https://www.braidenmiller.com" color="#155B75">braidenmiller.com</link> | '
            '<link href="https://www.linkedin.com/in/braiden-miller-64173015/" color="#155B75">LinkedIn</link> | '
            '<link href="https://github.com/braidenm" color="#155B75">github.com/braidenm</link>',
            styles["contact"],
        ),
        section("Summary", styles),
        Paragraph(
            "Senior software engineer building Java and Kotlin backend systems since 2019. Delivers API-first services, "
            "event-driven workflows and secure integrations, with hands-on ownership from architecture through production. "
            "Combines technical leadership with 7+ years of prior multi-unit retail management, balancing business needs, "
            "delivery risk and technical debt.", styles["body"],
        ),
        section("Professional Experience", styles),
        *role("Senior Software Engineer II", "Pax8", "2022 - Present", [
            "Extracted multiple domains from a monolith into services and migrated millions of records while keeping "
            "old and new systems synchronized; verified parity and retained tested rollback paths through cutover.",
            "Replaced a search path taking more than 60 seconds with Elasticsearch, "
            "achieving sub-second results and enabling a relaunch.",
            "Designed an idempotent webhook platform using Kafka, DDD and CQRS. Load testing dispatched "
            "10,000 outbound calls in under 30 seconds; backpressure protected downstream services.",
            "Implemented Auth0 authentication and fine-grained authorization (FGA) for multi-tenant services.",
            "Secured sensitive data with tenant-level KMS encryption. Reduced redundant KMS calls by 90% "
            "through more efficient data use and just-in-time access.",
            "Built search capabilities using Lucene-syntax queries and semantic search.",
            "Established API-first standards, documented public APIs, shared libraries and boundary-focused testing patterns.",
            "Applied Axon-based DDD/CQRS and ports and adapters. Used modular monoliths where domain boundaries "
            "were unclear, weighing service extraction against business needs and operational complexity.",
            "Owned production behavior through distributed traces, metrics, SLOs and alerting; improved diagnosis "
            "and resolution of customer-reported defects.",
            "Led technical planning and coached engineers across product and dependent teams, making "
            "architecture tradeoffs, delivery dependencies and technical debt explicit.",
        ], styles),
        PageBreak(),
        section("Professional Experience Continued", styles),
        *role("Software Engineer", "Zen Planner / Daxko", "2020 - 2022", [
            "Built greenfield microservices with CI/CD, contract tests and unit, integration and end-to-end coverage.",
            "Implemented Stripe-backed billing for proration, split funding, multiple locations, partial payments, "
            "refunds and varied subscription schedules.",
            "Integrated Kafka, webhooks, API gateways and documented public APIs across team and vendor boundaries.",
        ], styles),
        Spacer(1, 5),
        *role("Software Developer II", "NexGen Technologies", "2019 - 2020", [
            "Developed and optimized Java/Spring services in a large production application through design reviews "
            "and pair programming.",
            "Reduced monolith coupling by extracting reusable components and adding tests and APIs for incremental delivery.",
        ], styles),
        section("Technical Skills", styles),
        Paragraph("<b>Backend:</b> Java, Kotlin, Spring Boot, Axon Framework, REST, OpenAPI, DDD, CQRS, ports and adapters", styles["skill"]),
        Paragraph("<b>Data and messaging:</b> PostgreSQL, MongoDB, MySQL, Elasticsearch/OpenSearch, Kafka, Lucene, semantic search", styles["skill"]),
        Paragraph("<b>Identity and security:</b> Auth0, fine-grained authorization, tenant-level KMS encryption", styles["skill"]),
        Paragraph("<b>Cloud and delivery:</b> AWS, Terraform, Docker, Kubernetes, GitHub Actions, CI/CD", styles["skill"]),
        Paragraph("<b>Quality and operations:</b> Distributed tracing, metrics, SLOs, alerting, Honeycomb, contract/integration/load testing", styles["skill"]),
        Paragraph("<b>Frontend:</b> React, TypeScript, Angular (AngularJS 1.x and Angular 2+)", styles["skill"]),
        section("Personal Engineering Project", styles),
        KeepTogether([
            Paragraph("Platform App Lab / Media Transfer", styles["role"]),
            Paragraph(
                "Build and operate a self-hosted Kotlin/Spring Boot modular platform with a React client, "
                "Axon-backed domain lifecycles and selected provider ports/adapters. Publish release-matched "
                "OpenAPI, ADRs and diagrams alongside automated tests, deployment and operational tooling.", styles["body"],
            ),
            Paragraph(
                '<link href="https://app.braidenmiller.com/about/developer/overview" color="#155B75">Architecture and APIs</link> | '
                '<link href="https://github.com/braidenm/platform-demo" color="#155B75">Source code</link>', styles["skill"],
            ),
        ]),
        section("Education and Certifications", styles),
        Paragraph("<b>B.S., Business Management</b> | Western Governors University | 2017", styles["skill"]),
        Paragraph("<b>Full Stack Java Program</b> | Skill Distillery | 2019", styles["skill"]),
        Paragraph("Oracle Certified Associate, Java SE 8 Programmer I | CompTIA Project+", styles["skill"]),
    ]
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    args = parser.parse_args()
    build_resume(args.output)
    print(args.output)
