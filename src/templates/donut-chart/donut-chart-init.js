import DonutChart from './donut-chart';

$(() => {
  $('.js-donut-chart').each((i, val) => {
    new DonutChart(val, {
      options: {
        textInside: 'голосов'
      },
      size: {
        width: 120,
        height: 120,
        margin: 0,
        radius: {
          inside: 90
        }
      },
      data: [
        {id: 'a', value: 130, label: 'Великолепно',
          colors: {
            start: {
              color: '#FFE39C',
            },
            end: {
              color: '#FFBA9C'
            }
          }
        },
        {id: 'b', value: 65, label: 'Хорошо',
          colors: {
            start: {
              color: '#6FCF97',
              offset: '70%'
            },
            end: {
              color: '#66D2EA'
            }
          }
        },
        {id: 'c', value: 65, label: 'Удовлетворительно',
          colors: {
            start: {
              color: '#BC9CFF'
            },
            end: {
              color: '#8BA4F9'
            }
          }
        },
        {id: 'd', value: 0, label: 'Разочарован',
          colors: {
            start: {
              color: '#919191'
            },
            end: {
              color: '#3D4975'
            }
          }
        }
      ]
    });
  });
});