import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';

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
          position: 'relative',
          overflow: 'visible',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: -15,
          top: -15,
          color: 'white',
          zIndex: 10,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          boxShadow: 2,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <Close />
      </IconButton>
      <DialogContent sx={{ p: 0, height: '100%' }}>
        <iframe
          src="/resume/Braiden_Miller.pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Resume PDF"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
