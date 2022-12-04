// alert("hello");
var date=document.querySelector('#date').value;
var output=[];
for(i=0;i<date.length;i++){
  var temp=date.charAt(i);
  if(temp!=="0")
  {
    output.push(temp);
  }
}
var month=document.querySelector('#month').value;
for(i=0;i<month.length;i++)
{
  var temp=month.charAt(i);
  if(temp!==0 && !output.includes(temp))
  {
    output.push(temp);
  }
}
var year=document.querySelector('#year').value;
for(i=0;i<year.length;i++)
{
  var temp=year.charAt(i);
  if(temp!==0 && !output.includes(temp))
  {
    output.push(temp);
  }
}
