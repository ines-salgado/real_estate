import {
  Box,
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
  return (
    <Box>
      <Box component="nav" aria-label="menu">
        <Drawer variant="permanent" className="drawer" open>
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
              <ListItem key={text} className="list__item" disablePadding>
                <ListItemButton className="list__item__btn">
                  <ListItemIcon>
                    {index === 0 ? (
                      <TrendingUpIcon />
                    ) : index === 1 ? (
                      <FlashOnIcon />
                    ) : index === 2 ? (
                      <PeopleOutlineIcon />
                    ) : (
                      index === 3 && <FactCheckIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} className="list__item__text" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" className="drawer__subheader">
            Support
          </Typography>
          <List>
            {["Get Started", "Settings"].map((text, index) => (
              <ListItem key={text} className="list__item" disablePadding>
                <ListItemButton className="list__item__btn">
                  <ListItemIcon>
                    {index === 0 ? <LightbulbIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} className="list__item__text" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideDrawer;
