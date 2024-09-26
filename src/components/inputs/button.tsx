import { Button } from '@mui/material';
import { GetApp as GetAppIcon } from '@mui/icons-material';
import './styles.scss';

function ReportButton() {
  return (
    <Button
      className="reportBtn"
      variant="contained"
      startIcon={<GetAppIcon />}
    >
      Create Report
    </Button>
  );
}

export default ReportButton;
