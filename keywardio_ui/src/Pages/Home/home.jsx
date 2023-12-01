import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import PieChartWithPaddingAngle from "../../Components/PieChart/piechart.jsx";
import ColumnGroupingTable from "../../Components/Table/table.jsx";
import PieChartIcon from "@mui/icons-material/PieChart";
import TableViewIcon from "@mui/icons-material/TableView";
import Style from "./home.module.css";
import { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const Home = () => {
  const [viewOption, setViewOption] = useState("pieChart");
  const columns = [
    { id: "Campaigns", label: "Campaigns", minWidth: 170 },
    { id: "Clicks", label: "Clicks", minWidth: 170 },
    {
      id: "Cost",
      label: "Cost",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Conversions",
      label: "Conversions",
      minWidth: 170,
    },
  ];

  const columnsForPieData = [
    { id: "Group", label: "Group", minWidth: 170 },
    { id: "Clicks", label: "Clicks", minWidth: 170 },
    {
      id: "Cost",
      label: "Cost",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Conversions",
      label: "Conversions",
      minWidth: 170,
    },
  ];

  function createData(Campaigns, Clicks, Cost, Conversions) {
    return { Campaigns, Clicks, Cost, Conversions };
  }
  function createDataPie(Group, Clicks, Cost, Conversions) {
    return { Group, Clicks, Cost, Conversions };
  }
  const rows = [
    createData("Cosmetics", "712", "USD 4,272", 90),
    createData("Serums", "3,961", "USD 27,331", 5),
    createData("Facewash", "9,462", "USD 76,831", 6),
    createData("Shampoos", "439", "USD 2,151", 90),
    createData("Conditioners", "1,680", "USD 3,864", 44),
    createData("Facewash 2", "4,978", "USD 29,370", 22),
    createData("Total", "26,510", "USD 1,43,819 ", 33),
  ];

  const rowsForPie = [
    createDataPie("Male", "712", "USD 4,272", 90),
    createDataPie("Female", "566", "USD 3,454", 8),
    createDataPie("Unknown", "466", "USD 3,272", 70),
    createDataPie("Total", "757", "USD 2,489", 100),
  ];

  return (
    <div className={`flexboxClass ${Style.homeContainer}`}>
      <Card className={Style.mainTableContainer}>
        <div className={Style.tableContainer}>
          <ColumnGroupingTable rows={rows} columns={columns} />
        </div>
      </Card>

      <Card className={Style.mainTableContainer}>
        {viewOption == "pieChart" ? (
          <div className={Style.piChartContainer}>
            <div className="flexboxClass" style={{ padding: "10px" }}>
              <Typography variant="span" className=" fontWeight" fontSize={20}>
                Ad Insights
              </Typography>
              <div
                className="flexboxClass"
                style={{ width: "50%", justifyContent: "center", gap: "10px" }}
              >
                <FormControl style={{ width: "40%" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    defaultValue={"Clicks"}
                  >
                    <MenuItem value={"Clicks"}>Clicks</MenuItem>
                    <MenuItem value={"Cost"}>Cost</MenuItem>
                    <MenuItem value={"Conversions"}>Conversions</MenuItem>
                  </Select>
                </FormControl>
                <div>
                  <HelpOutlineIcon color="#7F858B" fontSize="medium" />
                </div>
              </div>
            </div>
            <PieChartWithPaddingAngle />
          </div>
        ) : (
          <div className={Style.tableContainer}>
            <ColumnGroupingTable
              rows={rowsForPie}
              columns={columnsForPieData}
            />
          </div>
        )}

        <ToggleButtonGroup
          orientation="horizontal"
          className={Style.toggleButtonGroup}
        >
          <ToggleButton
            onClick={() => setViewOption("pieChart")}
            style={{ borderRadius: "20px", border: "none" }}
          >
            <PieChartIcon />
          </ToggleButton>
          <ToggleButton
            onClick={() => setViewOption("table")}
            style={{ borderRadius: "20px", border: "none" }}
          >
            <TableViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Card>
    </div>
  );
};
