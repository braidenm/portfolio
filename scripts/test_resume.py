import re
import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader

from generate_resume import OUTPUT, build_resume


class ResumeTest(unittest.TestCase):
    def test_published_pdf_matches_source_and_preserves_confirmed_facts(self):
        with tempfile.TemporaryDirectory() as directory:
            regenerated = Path(directory) / "resume.pdf"
            build_resume(regenerated)
            self.assertEqual(regenerated.read_bytes(), OUTPUT.read_bytes())
        pdf = PdfReader(OUTPUT)
        self.assertEqual(len(pdf.pages), 2)
        text = " ".join(" ".join(page.extract_text().split()) for page in pdf.pages)
        for phrase in [
            "Senior Software Engineer II", "Pax8 | 2022 - Present", "Zen Planner / Daxko | 2020 - 2022",
            "NexGen Technologies | 2019 - 2020", "7+ years of prior multi-unit retail management",
            "Auth0", "fine-grained authorization", "tenant-level KMS", "Lucene", "semantic search",
            "Terraform", "GitHub Actions", "AngularJS 1.x", "Angular 2+", "Personal", "B.S., Business Management",
            "Load testing dispatched 10,000 outbound calls in under 30 seconds",
            "daily KMS calls from more than 10,000 to fewer than 100",
        ]:
            self.assertIn(phrase.lower(), text.lower())
        self.assertIsNone(re.search(r"\b(AI|LLM)\b|artificial intelligence|6 years of prior", text, re.I))
        links = []
        for page in pdf.pages:
            self.assertEqual(tuple(float(v) for v in page.mediabox), (0, 0, 612, 792))
            for ref in page.get("/Annots", []):
                annotation = ref.get_object()
                links.append(annotation.get("/A", {}).get("/URI"))
                left, bottom, right, top = map(float, annotation["/Rect"])
                self.assertTrue(0 <= left < right <= 612 and 0 <= bottom < top <= 792)
        self.assertIn("mailto:braidenjamesmiller@gmail.com", links)
        self.assertIn("https://app.braidenmiller.com/about/developer/overview", links)
        self.assertIn("https://github.com/braidenm/platform-demo", links)


if __name__ == "__main__":
    unittest.main()
