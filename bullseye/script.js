var table = 3;             // Unit of table

operator = GetValueFromUser("operator");
table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you? ';
  }
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter a table you would like from 0-10.";
  }
  return prompt(greetingMessage);
}

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '';              // Message  
// Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
