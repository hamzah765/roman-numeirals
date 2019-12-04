let arabic2 = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
const arabicInput = document.getElementById("arabicInput");
const romanInput = document.getElementById("romanInput");

arabicInput.addEventListener("input",(e)=>{
  arabicToRoman(e.target.value)

});

const arabicToRoman = (n) => {    
    switch(n){
    case "1": 
      document.getElementById("romanInput").value = "I";
      break;
    case "4": 
      document.getElementById("romanInput").value = "IV";
      break;
    case "5": document.getElementById("romanInput").value = "V";
    break;
    case '9': document.getElementById("romanInput").value = "IX";
    break;
    case '10': document.getElementById("romanInput").value = "X";
    break;
    case '40': document.getElementById("romanInput").value = "XL";
    break;
    case '50': document.getElementById("romanInput").value = "L";
    break;
    case '90': document.getElementById("romanInput").value = "XC";
    break;
    case '100': document.getElementById("romanInput").value = "C";
    break;
    case '400': document.getElementById("romanInput").value = "CD";
    break;
    case '500': document.getElementById("romanInput").value = "D";
    break;
    case '900': document.getElementById("romanInput").value = "CM";
    break;
    case '1000': document.getElementById("romanInput").value = "M";
    break;
    }

  
   

}

