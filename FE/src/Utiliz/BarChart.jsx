
import  { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

     this.state = {
          
            series: [{
              data: [1380, 1200, 1100, 690, 580, 540, 470, 448, 430, 400]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  borderRadiusApplication: 'end',
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: [
  "Toyota Vios",
  "Toyota Innova",
  "Toyota Fortuner",
  "Hyundai Accent",
  "Kia Morning",
  "Hyundai Grand i10",
  "VinFast Lux A2.0",
  "Honda CR-V",
  "Mazda CX-5",
  "Toyota Camry"
],
              }
            },
          
          
          };
        }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart font-manrope">
            <Chart
              options={this.state.options} series={this.state.series} type="bar" height={350} width={800}
            />
          </div>
        </div>
      </div>
    );s
  }
}

export default BarChart;
