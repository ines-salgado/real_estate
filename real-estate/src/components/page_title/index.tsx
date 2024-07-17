import { Typography, Divider, AppBar } from "@mui/material";
import "./styles.scss";

function PageTitle({ title }: { title: string }) {
  return (
    <AppBar position="fixed" className="appBar">
      <Typography variant="h6" className="appBar__title">
        {title}
      </Typography>
      <Divider className="appBar__divider" />
    </AppBar>
  );
}

export default PageTitle;
