import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Configuracion } from 'src/app/models/configuracion';

@Component({
  selector: 'app-gprincipal',
  templateUrl: './gprincipal.component.html',
  styleUrls: ['./gprincipal.component.css']
})
export class GprincipalComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() configuracion: Configuracion = new Configuracion();

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
  labels: ['Period'],
    datasets: [
      { data: [54], label: 'GUADALAJARA_899_MX' },
      { data: [10], label: 'TIJUANA_808' },
      { data: [63], label: 'MCI_REYNOSA_130' },
      { data: [65], label: 'AUTOMOTIVE_14_MX' },
      { data: [36], label: 'AGM_QUERETARO_7072' },
      { data: [45], label: 'AGM_QUERETARO_7071_MX' },
      { data: [25], label: 'AUTOMOTIVE_24_MX' },
      { data: [70], label: 'GDL_SOUTH_US' },
      { data: [33], label: 'TIJUANA_890' },
      { data: [50], label: 'JUAREZ_SOUTH_US' },
      { data: [40], label: 'JUAREZ_NORTH_US' },
      { data: [100], label: 'GDL_NORTH_US' },
      { data: [98], label: 'SAN_LUIS_BOSE_MX' },
      { data: [40], label: 'MCI_REYNOSA_MX' },
      { data: [33], label: 'MCI_REYNOSA_394' },
      { data: [98], label: 'AGUASCALIENTES_US' },
      { data: [50], label: 'GUADALAJARA_784_MX' },
      { data: [40], label: 'JPCBA_PLASTICS_US' },
      { data: [50], label: 'GUADALAJARA_874_MX' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.chart?.update();
  }
}
