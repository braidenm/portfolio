import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import { Close, Download } from '@mui/icons-material';

const ResumeViewer = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: { xs: 1.5, sm: 2.5 },
          py: 1.25,
          bgcolor: 'primary.main',
          color: 'common.white',
        }}
      >
        <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
          Resume preview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Button
            href="/resume/Braiden_Miller.pdf"
            download
            startIcon={<Download />}
            sx={{ color: 'common.white', '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' } }}
          >
            Download PDF
          </Button>
          <IconButton onClick={onClose} aria-label="Close resume preview" sx={{ color: 'common.white' }}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      <DialogContent sx={{ p: 0, flex: 1, minHeight: 0 }}>
        <iframe
          src="/resume/Braiden_Miller.pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Braiden Miller resume PDF"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
