import React from 'react';
import { Box, Button, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import { Close, Download, OpenInNew } from '@mui/icons-material';

const RESUME_URL = '/resume/Braiden_Miller.pdf?v=20261127-1';

const ResumeViewer = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} aria-labelledby="resume-preview-title" maxWidth="lg" fullWidth
    PaperProps={{ sx: { height: '90dvh', maxHeight: 'calc(100dvh - 32px)', m: 2, width: 'calc(100% - 32px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' } }}>
    <Box sx={{ px: { xs: 1.5, sm: 2.5 }, py: 1.25, bgcolor: 'primary.main', color: 'common.white', flexShrink: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Typography variant="h6" component="h2" id="resume-preview-title" sx={{ fontWeight: 700 }}>Resume preview</Typography>
        <IconButton onClick={onClose} aria-label="Close resume preview" sx={{ color: 'common.white' }}><Close /></IconButton>
      </Box>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        <Button href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Open resume PDF in a new tab" startIcon={<OpenInNew />} sx={{ color: 'common.white', px: 1.5 }}>Open PDF</Button>
        <Button href={RESUME_URL} download startIcon={<Download />} sx={{ color: 'common.white', px: 1.5 }}>Download PDF</Button>
      </Stack>
    </Box>
    <DialogContent sx={{ p: 0, flex: 1, minHeight: 0, display: 'flex', overflow: 'hidden' }}>
      <iframe src={`${RESUME_URL}#zoom=page-width`} style={{ display: 'block', flex: '1 1 auto', width: '100%', height: '100%', minHeight: 0, border: 'none' }} title="Braiden Miller resume PDF" />
    </DialogContent>
  </Dialog>
);

export default ResumeViewer;
