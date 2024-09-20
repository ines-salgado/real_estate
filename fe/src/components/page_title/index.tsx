import { Typography, Divider, AppBar } from '@mui/material';
import './styles.scss';

interface Props {
  title: string;
}

function PageTitle(props: Props) {
  return (
    <AppBar position="fixed" className="appBar">
      <Typography variant="h6" className="appBar__title">
        {props.title}
      </Typography>
      <Divider className="appBar__divider" />
    </AppBar>
  );
}

export default PageTitle;
