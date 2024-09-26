import * as React from "react";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { DashboardData } from "../models";
import { PageTitle, CustomTable, Links } from "../components";
import { KeyIndicatores } from "./sections";
import jsonData from "../data/data.json";
import "./styles.scss";

function Dashboard() {
  const [keys, setKeys] = React.useState<DashboardData["keyInd"] | null>(null);
  const [comparTable, setComparTable] = React.useState<
    DashboardData["comparTable"] | null
  >(null);
  const [afforTable, setAfforTable] = React.useState<
    DashboardData["afforTable"] | null
  >(null);
  const [profTable, setProfTable] = React.useState<
    DashboardData["profTable"] | null
  >(null);

  React.useEffect(() => {
    if (window.location.origin === "http://localhost:3000") {
      fetch("http://127.0.0.1:5000/data")
        .then((response) => response.json())
        .then((json) => {
          setKeys(json.Dashboard?.KeyIndicators || null);
          setComparTable(json.Dashboard?.ComparativeTable || null);
          setProfTable(json.Dashboard?.ProfitableCities || null);
          setAfforTable(json.Dashboard?.AffordabilityTable || null);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      setKeys((jsonData as any).Dashboard?.KeyIndicators || null);
      setComparTable((jsonData as any).Dashboard?.ComparativeTable || null);
      setProfTable((jsonData as any).Dashboard?.ProfitableCities || null);
      setAfforTable((jsonData as any).Dashboard?.AffordabilityTable || null);
    }
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="pageContainer">
        {keys && (
          <KeyIndicatores
            page="dashboard"
            title="Real Estate Price Index"
            dashboardData={keys}
          />
        )}
        <br />
        <br />
        {comparTable && (
          <CustomTable data={comparTable} tableType="comparTable" />
        )}
        <br />
        <br />
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            {afforTable && (
              <CustomTable
                data={afforTable}
                tableType="afforTable"
                isSmallTable
              />
            )}
          </Grid>
          <Grid xs={6}>
            {profTable && (
              <CustomTable
                data={profTable}
                tableType="profTable"
                isSmallTable
              />
            )}
          </Grid>
        </Grid>
        <br />
        <br />
        <Links />
        <br />
        <br />
      </Box>
    </>
  );
}

export default Dashboard;
