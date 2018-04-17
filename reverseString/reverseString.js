
function reverseString(str) {
 var array = str.split("");
 var reverse = array.reverse(str);
 var join = reverse.join('');
 return join;
}

module.exports = reverseString