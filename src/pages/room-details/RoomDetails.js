import RoomInfoCard from '../../templates/room-info-card/room-info-card';
import DonutChart from '../../templates/donut-chart/donut-chart';
import UserComment from '../../templates/user-comment/user-comment';
import dataDonutChartOptions from './utils/dataDonutChartOptions.json';
import './room-details.scss';

class RoomDetails {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { donutChart, roomInfoCard, userComment } = this._getDOMElements();
    const chartOptions = JSON.parse(JSON.stringify(dataDonutChartOptions));
    this.donutCharts = [];
    this.roomInfoCards = [];
    this.userComments = [];

    this.donutCharts.push(new DonutChart(donutChart, chartOptions));
    roomInfoCard.forEach((item) => {
      this.roomInfoCards.push(new RoomInfoCard(item));
    });
    userComment.forEach((item) => {
      this.userComments.push(new UserComment(item));
    });
  }

  _getDOMElements() {
    return {
      donutChart: document.querySelector('.js-donut-chart-item'),
      roomInfoCard: document.querySelectorAll('.js-room-info-card-item'),
      userComment: document.querySelectorAll('.js-user-comment-item'),
    };
  }
}

export default new RoomDetails();
