
import  { Component } from "react";
import Chart from "react-apexcharts";
import { revenue } from "./Constants";
class BarChart extends Component {
  constructor(props) {
    super(props);

     this.state = {
          
            series: [{
              data: this.props.toprentcar.map((m)=>{
                const tempmoney= m/1000000;
                return tempmoney.toFixed(2);
              }),
              name: "Doanh thu (tr)",
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
                categories: this.props.topcar,
          
          title: {
            text: "Triệu đồng"
          }
        }
              ,
              
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
