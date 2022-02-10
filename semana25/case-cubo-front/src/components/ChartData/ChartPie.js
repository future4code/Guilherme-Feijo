import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../../contexts/global/GlobalContext";
import { ContainerChartData, SubtitleItem, Subtitle } from "./styled";

const colors = [
  "#4f7bd3",
  "#ff9900",
  "#109618",
  "#990099",
  "#0099c6",
  "#dd4477",
  "#66aa00",
  "#b82e2e",
  "#316395",
  "#994499",
];

const options = {
  pieHole: 0.4,
  is3D: false,
  legend: "none",
  colors,
};

const ChartData = () => {
  const { states } = useContext(GlobalContext);

  const dataUsers = states.users.map((user) => {
    return [`${user.firstName} ${user.lastName}`, user.participation];
  });
  const totalParticipation = states.users.reduce((total, user) => {
    return total + user.participation;
  }, 0);
  return (
    <ContainerChartData>
      <Chart
        chartType="PieChart"
        width="300px"
        height="300px"
        data={[
          ["Name", "Participation"],
          ...dataUsers,
          ["Ownerless", 100 - totalParticipation],
        ]}
        options={options}
      />
      <Subtitle>
        {states.users.map((user, index) => {
          const indexColor = index % colors.length;
          return (
            <SubtitleItem color={colors[indexColor]}>
              <div></div>
              <p>{`${user.firstName} ${user.lastName}`}</p>
            </SubtitleItem>
          );
        })}
        <SubtitleItem color={colors[states.users.length % colors.length]}>
          <div></div>
          <p>Ownerles</p>
        </SubtitleItem>
      </Subtitle>
    </ContainerChartData>
  );
};

export default ChartData;
