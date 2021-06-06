import 'air-datepicker';

class AirCalendar {
  
  constructor(container, doubleInputs, firstInput, secondInput){
    console.log("Proverochka");

    this.isDI = doubleInputs;
    this.calendarContainer = container;
    
    // Проверка: сколько инпутов есть для вывода даты
    if(doubleInputs){
      this.arrivalInput = firstInput;
      this.depatureInput = secondInput;
    }
    if(!(doubleInputs)){
      this.singleInput = firstInput;
    }

    // Если не передан ни один инпут, то datepicker присвоется this.calendarContainer
    if(!(firstInput == undefined & firstInput == null)){
      this.calendarContainer = $(this.calendarContainer).find(".js-date-picker-calendar");
    } else if(!(secondInput == undefined & secondInput == null)){
      this.calendarContainer = $(this.calendarContainer).find(".js-date-picker-calendar");
    }
    this.transformToAirDatepicker();
    this.addCalendarButtons();

    this.clearCalendarButton();
    this.confirmCalendarButton();
  }

  transformToAirDatepicker(){

    const calendar1 = {
      isDouble: this.isDI,
      containerArrival: $(this.arrivalInput),
      containerDepature: $(this.depatureInput),
      containerSingle: $(this.singleInput),
      options: {
        toggleSelected: true,
        range: true,
        multipleDates: 2,
        multipleDatesSeparator : '-',
        navTitles: {
            days: '<span>MM yyyy</span>'
        },
        dateFormat: "dd.mm.yyyy",
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onSelect: function onSelect(selectedDates) {
                if(selectedDates !== undefined && selectedDates != '' && selectedDates.indexOf('-') > -1){
                    var mdy = selectedDates.split('-');

                    console.log("Data: "+mdy);

                    //Если значение true, задействованы два инпута. Если false, то задействован один.
                    if(calendar1.isDouble == true){
                      calendar1.containerArrival.attr('placeholder', mdy[0]);
                      calendar1.containerDepature.attr('placeholder', mdy[1]);  
                    } else if(calendar1.isDouble == false){
                      calendar1.containerSingle.attr('placeholder', mdy[0]+" - "+mdy[1]);
                    }
                    
                }
                
        }
      },
    };

    //Если doubleInputs == false, то меняется формат даты на "День Месяц"
    if(!(this.isDI)){
      calendar1.options.dateFormat = "d M";
    }

    var myD = $(this.calendarContainer).datepicker(calendar1.options).data('datepicker');

  }

  addCalendarButtons(){
    $(this.calendarContainer).find('.datepicker').append('<div class="date-picker-calendar__buttons"></div>');

    var buttonsContainer = $(this.calendarContainer).find('.date-picker-calendar__buttons');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-clear js-calendar-clear">Очистить</div>');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-confirm js-calendar-confirm">Применить</div>');
  }

  clearCalendarButton(){
    var clearb = $(this.calendarContainer).find('.js-calendar-clear');

    var myD = $(this.calendarContainer).data('datepicker');

    const inputsPlaceholder = {
      isDouble: this.isDI,
      arr: $(this.arrivalInput),
      dep: $(this.depatureInput),
      containerSingle: $(this.singleInput),
    };
    
    clearb.on("click", function() {
      if(inputsPlaceholder.isDouble){
        inputsPlaceholder.arr.attr('placeholder', 'ДД.ММ.ГГГГ');
        inputsPlaceholder.dep.attr('placeholder', 'ДД.ММ.ГГГГ');
      }
      if(!(inputsPlaceholder.isDouble)){
        inputsPlaceholder.containerSingle.attr('placeholder', 'Выберите даты');
      }
      
      myD.clear();
    });
  }

  confirmCalendarButton(){
    
  }
}

export default AirCalendar;