var table = 3;             // Unit of table

operator = GetValueFromUser("operator");
table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);

function GetValueFromUser(valueType) {
  if (valueType == "operator") {
"Enter addition or multiplication";
  }
  else
  {
"Enter table";
  }
  return prompt("A moment please");
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '';              // Message  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
