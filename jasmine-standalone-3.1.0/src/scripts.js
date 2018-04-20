$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature_display').text(thermostat.temperature);

  $('#powersavemode').text(thermostat.powerSaving === true? "On" : "Off");

  $('#energy_display').text(thermostat.energy);

  $('.btn.btn-danger').click(function() {
    thermostat.increase();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
  });

  $('.btn.btn-primary').click(function() {
    thermostat.decrease();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
  });

  $('.btn.btn-info').click(function() {
    thermostat.tempReset();
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
  });

  $('.btn.btn-success').click(function() {
    thermostat.powerSavingToggle();
    $('#powersavemode').text(thermostat.powerSaving === true? "On" : "Off");
    $('#temperature_display').text(thermostat.temperature);
    $('#energy_display').text(thermostat.energy);
  });

});
