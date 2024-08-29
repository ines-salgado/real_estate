import {
  Box,
  Drawer,
  Link,
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
  const page_url: string = window.location.pathname;

  const mainPages: Array<{}> = [
    { id: 0, text: "Dashboard", icon: <TrendingUpIcon />, url: "/" },
    {
      id: 1,
      text: "Market Analysis",
      icon: <FlashOnIcon />,
      url: "/market-analysis"
    },
    {
      id: 2,
      text: "Investment Analysis",
      icon: <PeopleOutlineIcon />,
      url: "/investment-analysis"
    }
  ];

  const secondaryPages: Array<{}> = [
    {
      id: 4,
      text: "Get Started",
      icon: <LightbulbIcon />,
      url: "/get-started"
    },
    { id: 5, text: "Settings", icon: <SettingsIcon />, url: "/settings" }
  ];

  return (
    <Box component="nav">
      <Drawer variant="permanent" className="drawer" open>
        <div className="drawer__header">
          <BarChartIcon />
          <Typography variant="h5" fontWeight={800}>
            <strong>RE</strong>analysis
          </Typography>
        </div>
        <List>
          {mainPages.map((page: any) => (
            <ListItem key={page.id} className="list__item">
              <ListItemButton
                component={Link}
                href={page.url}
                underline="none"
                color="inherit"
                className={
                  page_url === page.url
                    ? "list__item__btn activeBtn"
                    : "list__item__btn"
                }
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText
                  primary={page.text}
                  className={
                    page_url === page.url
                      ? "list__item__text activeText"
                      : "list__item__text"
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" className="drawer__subheader">
          Support
        </Typography>
        <List>
          {secondaryPages.map((page: any) => (
            <ListItem key={page.id} className="list__item">
              <ListItemButton
                component={Link}
                href={page.url}
                underline="none"
                color="inherit"
                className="list__item__btn"
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText
                  primary={page.text}
                  className="list__item__text"
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SideDrawer;
