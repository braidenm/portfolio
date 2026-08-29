from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Braiden_Miller.pdf"

NAVY = colors.HexColor("#16213D")
BLUE = colors.HexColor("#1769AA")
TEAL = colors.HexColor("#16806F")
INK = colors.HexColor("#243043")
MUTED = colors.HexColor("#556173")
RULE = colors.HexColor("#D7DEE8")
PALE_BLUE = colors.HexColor("#EDF5FC")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=27,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=BLUE,
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=NAVY,
            spaceBefore=7,
            spaceAfter=4,
            borderWidth=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12.2,
            textColor=INK,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=NAVY,
        ),
        "company": ParagraphStyle(
            "Company",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=11,
            textColor=MUTED,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.5,
            leftIndent=10,
            firstLineIndent=-8,
            textColor=INK,
            spaceAfter=3,
        ),
        "metric_value": ParagraphStyle(
            "MetricValue",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=12,
            textColor=TEAL,
            alignment=TA_LEFT,
        ),
        "metric_label": ParagraphStyle(
            "MetricLabel",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=9.5,
            textColor=MUTED,
            alignment=TA_LEFT,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=11,
            textColor=INK,
            spaceAfter=3,
        ),
    }


def section(title, styles):
    return [
        Paragraph(title.upper(), styles["section"]),
        Table([[""]], colWidths=[7.3 * inch], rowHeights=[1], style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), BLUE),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])),
        Spacer(1, 4),
    ]


def role_header(role, company, dates, styles):
    table = Table(
        [[Paragraph(role, styles["role"]), Paragraph(dates, styles["company"])],
         [Paragraph(company, styles["company"]), ""]],
        colWidths=[5.85 * inch, 1.45 * inch],
    )
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return table


def bullets(items, styles):
    return [Paragraph(f"- {item}", styles["bullet"]) for item in items]


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.42 * inch, letter[0] - doc.rightMargin, 0.42 * inch)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.27 * inch, "Braiden Miller - Senior Software Engineer")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.27 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_resume():
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.6 * inch,
        leftMargin=0.6 * inch,
        topMargin=0.46 * inch,
        bottomMargin=0.55 * inch,
        title="Braiden Miller - Senior Software Engineer Resume",
        author="Braiden Miller",
        subject="Senior software engineering, product partnership, and platform delivery",
    )

    story = [
        Paragraph("Braiden J. Miller", styles["name"]),
        Paragraph("Senior Software Engineer | Product Partner | Platform Builder", styles["title"]),
        Paragraph(
            "Golden, Colorado | (219) 743-2686 | "
            '<link href="mailto:braidenjamesmiller@gmail.com" color="#1769AA">braidenjamesmiller@gmail.com</link> | '
            '<link href="https://www.braidenmiller.com" color="#1769AA">Portfolio</link> | '
            '<link href="https://www.linkedin.com/in/braiden-miller-64173015/" color="#1769AA">LinkedIn</link> | '
            '<link href="https://github.com/braidenm" color="#1769AA">GitHub</link>',
            styles["contact"],
        ),
    ]

    story.extend(section("Summary", styles))
    story.append(Paragraph(
        "Senior software engineer with 7+ years delivering distributed platforms and 6 years of prior people leadership. "
        "Partners with product managers, architects, and dependent teams to turn ambiguous goals into testable plans, "
        "clear contracts, and reliable releases. Hands-on Java/Kotlin engineer known for diagnosing hard performance "
        "problems, de-risking migrations, mentoring through practical examples, and leaving teams with better systems "
        "and a faster way of working.",
        styles["body"],
    ))

    story.extend(section("Selected outcomes", styles))
    metrics = [
        ("Under 1 second", "Search latency reduced from more than 60 seconds"),
        ("10,000 calls", "Webhook dispatch completed in under 30 seconds"),
        ("More than 99%", "Daily KMS calls reduced from over 10,000 to under 100"),
    ]
    metric_values = [Paragraph(value, styles["metric_value"]) for value, _ in metrics]
    metric_labels = [Paragraph(label, styles["metric_label"]) for _, label in metrics]
    metric_table = Table(
        [metric_values, metric_labels],
        colWidths=[2.38 * inch, 2.38 * inch, 2.38 * inch],
    )
    metric_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE_BLUE),
        ("BOX", (0, 0), (-1, -1), 0.6, RULE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, RULE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 6),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 1),
        ("TOPPADDING", (0, 1), (-1, 1), 0),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 6),
    ]))
    story.extend([metric_table, Spacer(1, 2)])

    story.extend(section("Experience", styles))
    story.append(role_header("Senior Software Engineer II", "Pax8", "2022 - Present", styles))
    story.extend(bullets([
        "Partner with product managers, architecture, and dependent teams to turn ambiguous platform goals into ADRs, phased plans, and services that meet aggressive launch dates.",
        "Migrated millions of records from a monolith while old and new systems remained synchronized; used observability and rollback paths to complete cutover without customer disruption and remove legacy code.",
        "Replaced a search path that exceeded 60 seconds with Elasticsearch in one two-week sprint, restoring sub-second results and enabling a safe relaunch.",
        "Designed and load-tested a webhook platform with DDD, CQRS, Kafka, and backpressure; dispatched 10,000 outbound calls in under 30 seconds while protecting downstream services.",
        "Diagnosed redundant encryption work that was rate-limiting requests and reduced daily KMS calls from more than 10,000 to fewer than 100.",
        "Created API-first standards, shared libraries, testing patterns, and practical coaching that helped frontend, backend, analytics, and partner teams deliver against clearer contracts.",
        "Delivered cloud AI provisioning and LLM gateway foundations under an aggressive launch timeline, coordinating with vendor and internal specialists to close authentication and ownership gaps.",
    ], styles))

    story.append(Spacer(1, 4))
    story.append(role_header("Software Engineer", "ZenPlanner / Daxko", "2020 - 2022", styles))
    story.extend(bullets([
        "Collaborated on a greenfield microservices platform supported by CI/CD, contract tests, and unit, service, integration, and end-to-end test suites.",
        "Built complex Stripe-backed subscription and billing flows covering prorates, split funding, multiple locations, partial payments, refunds, and varied billing schedules.",
        "Used Kafka, API gateways, webhooks, and documented public APIs to deliver reliable financial workflows across team and vendor boundaries.",
    ], styles))
    story.append(PageBreak())
    story.extend(section("Experience continued", styles))
    story.append(role_header("Software Developer II", "NexGen Technologies", "2019 - 2020", styles))
    story.extend(bullets([
        "Developed and optimized microservices in a large production application while collaborating through design reviews and pair programming.",
        "Reduced monolith coupling by extracting reusable components and added tests, services, and APIs for incremental delivery.",
    ], styles))

    story.extend(section("Selected engineering work", styles))
    project = [
        Paragraph("<b>Platform App Lab</b> | Current", styles["role"]),
        Paragraph("Self-hosted portfolio", styles["company"]),
        *bullets([
            "Build and operate a full-stack Kotlin/Spring and React platform that connects product framing, architecture decisions, implementation, tests, releases, and real-device feedback.",
            "Designed Media Transfer for resilient photo and video batches, guest-friendly share links, media derivatives, retention, and reliable original-quality downloads across desktop, Android, and iPhone.",
            "Publish release-matched OpenAPI contracts, ADRs, module diagrams, operational risks, and source evidence so reviewers can follow decisions without relying on a private code tour.",
        ], styles),
        Paragraph(
            '<link href="https://app.braidenmiller.com" color="#1769AA">Live app</link> | '
            '<link href="https://github.com/braidenm/platform-demo" color="#1769AA">Source</link>',
            styles["small"],
        ),
    ]
    story.append(KeepTogether(project))

    story.extend(section("Technical profile", styles))
    story.append(Paragraph(
        "<b>Languages and frameworks:</b> Java, Kotlin, TypeScript, React, Spring Boot, Axon Framework, Playwright",
        styles["small"],
    ))
    story.append(Paragraph(
        "<b>Architecture and data:</b> Event-driven systems, Kafka, CQRS, DDD, REST/OpenAPI, PostgreSQL, MongoDB, MySQL, Elasticsearch/OpenSearch",
        styles["small"],
    ))
    story.append(Paragraph(
        "<b>Delivery and quality:</b> Docker, Kubernetes, CI/CD, GitHub Actions, AWS, Azure, Honeycomb, contract testing, integration testing, load testing, end-to-end testing",
        styles["small"],
    ))

    story.extend(section("Education and certifications", styles))
    education_table = Table([
        [Paragraph("<b>Bachelor of Science, Business Management</b><br/>Western Governors University, 2017", styles["small"]),
         Paragraph("<b>Full Stack Java Program</b><br/>Skill Distillery, 2019", styles["small"])],
        [Paragraph("<b>Oracle Certified Associate</b><br/>Java SE 8 Programmer I", styles["small"]),
         Paragraph("<b>CompTIA Project+</b><br/>Project planning and stakeholder communication", styles["small"])],
    ], colWidths=[3.65 * inch, 3.65 * inch])
    education_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(education_table)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)


if __name__ == "__main__":
    build_resume()
    print(OUTPUT)
