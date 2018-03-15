
function insertDash(num) {
  num+=''
  var var1=num.charAt(0);
  let newString= new String;
  newString=num.charAt(0)
  for(var i=1;i<num.length+1;i++)
  {console.log(num.length,i)
  var var2=num.charAt(i);
  console.log(var1%2,var2%2)
  if (var1%2===1&&var2%2===1){
 console.log(`${var1},${var2} line 10`);
  newString=`${newString}-${var2}`;
  var1=var2
  }
  else
  {console.log(`${var1},${var2} line 15`);
  newString=`${newString}${var2}`;
  var1=var2
  }
  }
   return newString;
 }
