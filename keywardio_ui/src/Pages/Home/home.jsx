import OutlinedCard from "../../Components/Card/card.jsx";
import ColumnGroupingTable from "../../Components/Table/table.jsx";
import Style from "./home.module.css";

export const Home = () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
  ];
  return (
    <div className={`flexboxClass ${Style.homeContainer}`}>
      <div className={Style.tableContainer}>
        <OutlinedCard>
          <ColumnGroupingTable rows={rows} columns={columns} />
        </OutlinedCard>
      </div>
      <div className={Style.tableContainer}>
        <OutlinedCard>
          <ColumnGroupingTable rows={rows} columns={columns} />
        </OutlinedCard>
      </div>
    </div>
  );
};