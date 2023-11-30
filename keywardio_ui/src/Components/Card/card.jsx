import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function OutlinedCard({ children, width }) {
  return (
    <Box >
      <Card variant="outlined">{children}</Card>
    </Box>
  );
}
