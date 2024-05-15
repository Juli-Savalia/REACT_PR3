import { useState } from "react";
import { Data, category } from "./Data";
import Filter from "./Filter";

function App() {
  const [data, setData] = useState(Data);

  const FilterTodo = (val) => {
    console.log(val);
    if (val == "all") {
      setData(Data);
    } else {
      let juli = Data.filter((fil) => {
        console.log(fil);
        return fil.cat == val;
      });
      setData(juli);
    }
  };

  return (
    <>
      <Filter data={data} cat={category} Filterbtn={FilterTodo} />
    </>
  );
}

export default App;
