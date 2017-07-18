var chiffre = "";
var total = "";
var final = [];
var test = [];
var result = 0;


function calculate(chiffre) {

  if (total == "" && chiffre == "-") {
    total += chiffre;
    console.log(total);
    document.getElementById("total").innerHTML = total;
  } else if (chiffre == "reset") {
    total = "";
    final = [];
    chiffre = "";
    document.getElementById("total").innerHTML = total;

  } else if (chiffre == "C") {
    test = total.split("");
    test.pop();

    total = test.join("");

    document.getElementById("total").innerHTML = total;

  } else if (chiffre == "=") {
    final.push(total);

  } else if (chiffre == "-" || chiffre == "+" || chiffre == "/" || chiffre == "x") {
    if (final.length < 1) {
      final.push(total);
      total = "";
      final.push(chiffre);

      document.getElementById("total").innerHTML = "";
    } else if (final.length == 2) {
      final.push(total);
      total = "";


    } else {


      total = "";
      final.push(chiffre);
      console.log(chiffre);
      console.log(final);
      document.getElementById("total").innerHTML = "";


    }

  } else {
    total += chiffre;


    document.getElementById("total").innerHTML = total;

  }

  if (final.length == 3) {

    switch (final[1]) {
      case "-": result = Number(final[0]) - Number(final[2]);

        break;

        case "x": result = Number(final[0]) * Number(final[2]);

          break;

          case "/": result = Number(final[0]) / Number(final[2]);

            break;
      default: result = Number(final[0]) + Number(final[2]);

    }

    // if (final[1] == "-") {
    //   result = Number(final[0]) - Number(final[2]);
    // } else if (final[1] == "x") {
    //
    //   result = Number(final[0]) * Number(final[2]);
    // } else if (final[1] == "/") {
    //   result = Number(final[0]) / Number(final[2]);
    // } else {
    //   result = Number(final[0]) + Number(final[2]);
    // }


if (result.toString().length >7) { result = result.toPrecision(7);}

    document.getElementById("total").innerHTML = result;
    final = [result];
    if (chiffre == "-" || chiffre == "+" || chiffre == "/" || chiffre == "x") {

      final.push(chiffre);
      chiffre = "";
    } else {
      chiffre = "";
    }

    total = "";


  }

}
