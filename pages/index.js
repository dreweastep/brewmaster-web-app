import { useEffect, useState } from 'react'
import react from 'react'
import MaterialTable from "material-table";

const columns = [
  { title: "Type", field: "type" },
  { title: "Brew Start Date", field: "brewStartDate" }
];

const data = [
  { type: "Beer", brewStartDate: "2/4/20" },
  { type: "Wine", brewStartDate: "2/5/20" },
  { type: "Cider", brewStartDate: "2/6/20" },
  { type: "Kombucha", brewStartDate: "2/7/20" },

];
function HomePage() {

  const [filter, setFilter] = useState(false)
  const [group, setGroup] = useState(false)

  return (
    <>
      <MaterialTable
        columns={columns}
        data={data}
        options={{
          filtering: filter,
          grouping: group
        }}
        title="Demo Title"
      />
    </>
  );
}

export default HomePage;
