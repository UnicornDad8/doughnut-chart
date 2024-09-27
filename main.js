const chartData = {
  labels: ["Python", "Java", "JavaScript", "C#", "Others"],
  data: [30, 17, 10, 7, 36],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
        backgroundColor: [
          "#87A2FF",
          "#15B392",
          "#F05A7E",
          "#FCCD2A",
          "#874CCC",
        ],
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.map((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `<div class="circle bg-${i}"></div>${l}: <span class="percentage ml-1 color-${i}">${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();
