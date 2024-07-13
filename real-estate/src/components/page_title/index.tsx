import * as React from "react";
import { Typography, Divider, AppBar, Box } from "@mui/material";
import "./styles.scss";

interface Props {
  title: string;
}

function PageTitle(props: Props) {
  return (
    <AppBar position="static" className="appBar">
      <Typography variant="h6" className="appBar__title">
        {props.title}
      </Typography>
      <Divider className="appBar__divider" />
    </AppBar>
  );
}

export default PageTitle;
