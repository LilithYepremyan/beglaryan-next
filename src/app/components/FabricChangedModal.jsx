import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LengthInput from './LengthInput';
import CloseIcon from '../../icons/CloseIcon';
import WarningIcon from '../../icons/WarningIcon';
import { events, Track } from '../../metrics';

export default function FabricChangedModal(props) {
  const { t } = useTranslation(['modals']);

  const {
    isOpen,
    close,
    onAddClick,
    fabricChangedInfo: { min: minCount, max: maxCount, maxSamplesReached },
  } = props;

  const [length, setLength] = useState(Math.max(Math.min(10, maxCount), minCount));

  const isError = length < minCount || length > maxCount;

  return (
    <Modal disableAutoFocus={true} disableEnforceFocus={true} open={isOpen} onClose={close}>
      <Paper
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          p: '32px',
          transform: 'translate(-50%, -50%)',
          maxWidth: '516px',
          width: '90%',
          borderRadius: '8px',
        }}
      >
        <CloseIcon
          onClick={() => close()}
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'colors.almostBlack',
            cursor: 'pointer',
          }}
        />
        <WarningIcon sx={{ color: 'colors.almostBlack', fontSize: '48px', mb: '32px' }} />

        {!maxSamplesReached && (
          <>
            <Typography variant="h3" sx={{ mb: '8px' }}>
              {maxCount ? t('fabricChanged.title') : t('fabricChanged.titleSold')}
            </Typography>

            <Typography variant="body2">{maxCount ? t('fabricChanged.text') : t('fabricChanged.textSold')}</Typography>
          </>
        )}

        {!!maxSamplesReached && (
          <>
            <Typography variant="h3">{t('maxSamplesReached.title')}</Typography>
          </>
        )}

        {!!maxCount && (
          <LengthInput
            length={length}
            setLength={setLength}
            min={minCount}
            max={maxCount}
            isError={isError}
            sx={{
              mt: '32px',
            }}
          />
        )}

        <Box
          sx={{
            mt: '32px',
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
          }}
        >
          {!!maxCount && (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                onAddClick(length);
              }}
            >
              {t('fabricChanged.add')}
            </Button>
          )}

          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={() => {
              close();
            }}
          >
            {t('fabricChanged.close')}
          </Button>
        </Box>

        <Track eventName={events.modals.fabricChanged.shown} />
      </Paper>
    </Modal>
  );
}
