import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import './sync-screen.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const optionsEnv = [
  { label: 'Production', id: 1 },
  { label: 'QA', id: 2 },
  { label: 'Development', id: 3 }
];

const sourceDb = [
  { label: 'MongoDB', id: 1 },
  { label: 'Oracle DB', id: 2 },
  { label: 'Postgres SQL', id: 3 }
];

const destinationDb = [
  { label: 'MongoDB', id: 1 },
  { label: 'Oracle DB', id: 2 },
  { label: 'Postgres SQL', id: 3 }
];



function SyncScreen() {
  const [showTable, setShowTable] = useState(false);

  const handleCompare = () => {
    setShowTable(true);
  };

  const [sync, setSync] = useState(false);
  const handleSync = () => {
    setSync(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSync(false);
  };

  return (
    <div className="container">
      <Autocomplete
        disablePortal
        options={optionsEnv}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Environment" />}
      />
      <div style={{ display: 'flex', gap: '16px', marginTop: 16 }}>
        <Autocomplete
          disablePortal
          options={sourceDb}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Source Database" />}
        />
        <Autocomplete
          disablePortal
          options={destinationDb}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Destination Database" />}
        />
      </div>
       <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
      noValidate
      autoComplete="off"
    >
      <div style={{ marginTop: 16 }}>
        <TextField
          required
          id="outlined-required"
          label="Organization ID"
          defaultValue="Enter Org ID"
        />
      </div>
    </Box>
    <div style={{ marginTop: 5}}>
      <Button variant="contained" onClick={handleCompare}>Compare</Button>
    </div>
    {showTable && (
      <table style={{ marginTop: 20, width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Column 1</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Column 2</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Row 1 Data 1</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Row 1 Data 2</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>Row 1 Data 3</td>
          </tr>
        </tbody>
      </table>
    )}
    {showTable && (
      <div style={{ marginTop: 16 }}>
        <Button variant="contained" onClick={handleSync}>Sync</Button>
        <Snackbar open={sync} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            This is a success Alert, Destination DB synced with Source DB
          </Alert>
        </Snackbar>
      </div>
      
    )}
  </div>
  );
}

export default SyncScreen;