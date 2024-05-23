
import  { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        plotOptions: {
                bar: {
                  borderRadius: 10,
                 
                }
              },
        xaxis: {
          categories: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]
        }
      },
      series: [
        {
          name: "doanh thu",
          data: [100, 120, 150, 200, 150, 120, 200, 50, 60, 70, 80 , 70]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart font-manrope">
            <Chart
              options={this.state.options}
              series={this.state.series}
              
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
