var table = 3; 

operator = GetValueFromUser("operator");
table = GetValueFromUser("table")


var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var websiteQuery = "Enter a number from 0-10 to generate table";
  valueType == ("operator") 
  

  }
  prompt(websiteQuery);
  

function GetTableContent(operator, table) {
  var i = 1;                
  var msg = '';              
  if (operator === 'number') {

    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  } else {

    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
