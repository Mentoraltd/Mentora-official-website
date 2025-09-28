import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup, maxWidth = 'sm', actions } = props;

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      fullWidth
      maxWidth={maxWidth}
      
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px',
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      {actions && (
        <DialogActions>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}




/*import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export default function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props

    return(
        <>
            <div>
                <Dialog open={openPopup}>
                    <DialogTitle>
                        <div>title goes here</div>
                    </DialogTitle>
                    <DialogContent>
                        <div>Content goes here</div>
                    </DialogContent>
                </Dialog>

            </div>
        </>
    )
}*/