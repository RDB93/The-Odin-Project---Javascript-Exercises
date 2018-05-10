var leapYears = function(leapYears) {
	if (leapYears % 100 === 0 && leapYears % 400 !== 0) {
		return(false);
	} else if (leapYears % 4 === 0) {
		return(true);
	} else {
		return(false);
		}
	}


module.exports = leapYears
