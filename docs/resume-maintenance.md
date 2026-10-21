# Backend Resume Maintenance

Updated 2026-10-20. The owner confirmed Auth0/FGA, tenant-level KMS, Lucene/semantic search and the supplied
architecture/observability work belong to Pax8. Prior multi-unit retail management is seven-plus years, replacing
the older six-year wording. No retail employer or dates are invented. AI/LLM content is excluded from the resume
at the owner's request. This is not a change to the site's separate AI-assisted development description.

The resume is two US Letter pages with selectable, single-column text and clickable contact/evidence links.
Existing employer titles, chronology, qualifications and numerical results are retained. Webhook timing describes
dispatch in a load test, not a production SLA or remote-delivery completion. Personal work is separately labeled.

## Generate And Verify

`scripts/generate_resume.py` is the canonical source; `public/resume/Braiden_Miller.pdf` is the published output.
Use a development virtual environment, not the production application runtime:

```text
python -m pip install -r scripts/resume-requirements.txt
python scripts/generate_resume.py
python scripts/test_resume.py
pdftoppm -png public/resume/Braiden_Miller.pdf tmp/resume
```

Inspect both rendered pages for clipping, collisions, readable type and balanced spacing. The automated test checks
two-page letter format, confirmed text, links, absence of AI content and byte-for-byte regeneration of the PDF.
Pinned ReportLab and invariant metadata keep checked-in output reproducible. PR CI runs this test as well as the
frontend content tests/build; it does not prove native PDF-viewer rendering on a phone.

## Synchronize The App

Mirror the generator, `test_resume.py`, `resume-requirements.txt` and generated PDF to the corresponding
`web/apps/platform-web/scripts/` and `public/resume/` paths in `braidenm/platform-demo`. Run the Python test there
and compare source/PDF SHA-256 values across both repos. Each remains independently buildable.

Update the revision query on every public resume link together with its assertions. This revision is
`v=20261020-1` in `ResumeViewer.jsx` and the app's `BraidenAboutPage.tsx`; the actual PDF path remains compatible.
Use separate reviewed PRs, wait for their exact-head checks, and compare deployed PDF hashes after publication.
The platform owns Spec 103 for this work. No new architecture ADR or domain/API change is introduced.
