var ftoc = function(fahrenheit) {
  var celsius = ((fahrenheit -32)*5/9);
  return(Math.round(celsius*10)/10);
  }
  	

var ctof = function(celsius) {
  var fahrenheit = ((celsius * 9)/5 + 32);
  return(Math.round(fahrenheit*10)/10);
} 

module.exports = {
  ftoc,
  ctof
}
