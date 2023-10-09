function convertToRoman(num) {
    var number = num;
    var roman = "";
    var cant = 0;
    
    while (number > 0) {
      if(number >= 1000) {
        cant = parseInt(number/1000);
        for (var i = 0; i < cant; i++) {
          roman += "M";
          number -= 1000;
        }
      } else  if (number >= 900) {
        roman += "CM";
        number -= 900;
      } else if (number >= 500) {
        roman += "D";
        number -= 500;
      } else if (number >= 400) {
        roman += "CD";
        number -= 400;
      } else if (number >= 100) {
        cant = parseInt(number/100);
        for (var i = 0; i < cant; i++) {
          roman += "C";
          number -= 100;
        }
      } else if (number >= 90) {
        roman += "XC";
        number -= 90;
      } else if (number >= 50) {
        roman += "L";
        number -= 50;
      } else if (number >= 40) {
        roman += "XL";
        number -= 40;
      } else if (number >= 10) {
        cant = parseInt(number/10);
        for (var i = 0; i < cant; i++) {
          roman += "X";
          number -= 10;
        }
      } else if (number == 9) {
        roman += "IX";
        number -= 9;
      } else if (number >= 5) {
        roman += "V";
        number -= 5;
      } else if (number == 4) {
        roman += "IV";
        number -= 4;
      } else {
        for (var i = 0; i < number; i++) {
          roman += "I";
        }
        number = 0;
      }
    }
      return roman 
    }
    
    
    convertToRoman(36);