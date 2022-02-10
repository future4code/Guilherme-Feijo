import ChartData from "../../components/ChartData/ChartPie";
import Header from "../../components/Header/Header";
import TableData from "../../components/TableData/TableData";
import TitleData from "../../components/TitleData/TitleData";
import { DataSection } from "./styled";

const Home = () => {
  return (
    <div>
      <Header />
      <TitleData />
      <DataSection>
        <TableData />
        <ChartData />
      </DataSection>
    </div>
  );
};

export default Home;
