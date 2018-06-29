$(document).ready(function() {
  var thermostat = new Thermostat();

  var city = "Bournemouth";

  $.ajax("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1ca7d6930958d6a2e884317713344dbe&units=metric")
    .done(function(data){
      $('#outsideTemp').text(data.main.temp);
      $('#weather').text(data.weather[0].description);
    });

  $('#temperature_display').text(thermostat.temperature);

  $('#powersavemode').text(thermostat.powerSaving === true? "On" : "Off");

  $('#energy_display').text(thermostat.energy);

  $('#city').text(city);



  $('.btn.btn-danger').click(function() {
    thermostat.increase();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
    if (thermostat.energy === "High") {
      $('#energy_display').css("color", "red");
    } else if (thermostat.energy === 'Low') {
      $('#energy_display').css("color", "green");
    } else {
      $('#energy_display').css("color", "#78898B");
    };
  });

  $('.btn.btn-primary').click(function() {
    thermostat.decrease();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
    if (thermostat.energy === "High") {
      $('#energy_display').css("color", "red");
    } else if (thermostat.energy === 'Low') {
      $('#energy_display').css("color", "green");
    } else {
      $('#energy_display').css("color", "#78898B");
    };
  });

  $('.btn.btn-info').click(function() {
    thermostat.tempReset();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy).css("color", "#78898B");
  });

  $('.btn.btn-success').click(function() {
    thermostat.powerSavingToggle();
    $('#powersavemode').text(thermostat.powerSaving === true? "On" : "Off");
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
    if (thermostat.energy === "Medium"){
      $('#energy_display').css("color", "#78898B")
    }
  });

  $('#cityButton').click(function() {
    city = $("#cityName").val();
    $('#city').text(city);
    $.ajax("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1ca7d6930958d6a2e884317713344dbe&units=metric")
      .done(function(data){
        $('#outsideTemp').text(data.main.temp);
        $('#weather').text(data.weather[0].description);
      });
  });

});
