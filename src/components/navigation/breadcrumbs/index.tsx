import { Typography, Breadcrumbs, Link } from "@mui/material";

interface Props {
  country: string;
  district: string;
  city: string;
}

function BasicBreadcrumbs(props: Props) {
  return (
    <div role="presentation" onClick={() => {}}>
      <Breadcrumbs separator="›">
        <Link underline="hover" color="inherit" href="#">
          {props.country}
        </Link>
        <Link underline="hover" color="inherit" href="#">
          {props.district}
        </Link>
        <Typography color="#1f5678">{props.city}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs;
