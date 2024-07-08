import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import {
  TrendingUpOutlined as TrendingUpIcon,
  FlashOnOutlined as FlashOnIcon,
  PeopleOutlineOutlined as PeopleOutlineIcon,
  BarChartOutlined as BarChartIcon,
  SettingsOutlined as SettingsIcon,
  LightbulbOutlined as LightbulbIcon,
  FactCheckOutlined as FactCheckIcon
} from "@mui/icons-material";
import "./styles.scss";

function SideDrawer() {
  const drawerContents = (
    <>
      <div className="drawer__header">
        <BarChartIcon />
        <Typography variant="h5" fontWeight={800}>
          <strong>RE</strong>analysis
        </Typography>
      </div>
      <List>
        {[
          "Dashboard",
          "Market Analysis",
          "Investment Analysis",
          "Activities"
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <TrendingUpIcon htmlColor="black" />
                ) : index === 1 ? (
                  <FlashOnIcon htmlColor="black" />
                ) : index === 2 ? (
                  <PeopleOutlineIcon />
                ) : (
                  index === 3 && <FactCheckIcon htmlColor="black" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" className="drawer__subheader">
        Support
      </Typography>
      <List>
        {["Get Started", "Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <LightbulbIcon htmlColor="black" />
                ) : (
                  <SettingsIcon htmlColor="black" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box>
      <CssBaseline />
      <Box component="nav" aria-label="menu">
        <Drawer variant="permanent" className="drawer" open>
          {drawerContents}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideDrawer;
