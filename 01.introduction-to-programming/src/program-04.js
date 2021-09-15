function checkTypeAndValue(variable) {
    console.log(`the variable type is '${typeof variable}' and its value is '${variable}'`);
}

checkTypeAndValue(10);                  // integer number
checkTypeAndValue(3.1415);              // floating-point number
checkTypeAndValue(true);                // boolean
checkTypeAndValue("Hello World");       // string literal
checkTypeAndValue(new Date());          // Date object
checkTypeAndValue([]);                  // array
checkTypeAndValue({});                  // object
checkTypeAndValue(function () {});      // function

checkTypeAndValue(undefined);           // undefined content
checkTypeAndValue(null);                // null content
checkTypeAndValue(NaN);                 // Not a number
checkTypeAndValue(Infinity);            // Infinity