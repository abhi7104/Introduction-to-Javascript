var details=[
{name:"alok verma",age:44,salary:55000,DOB:'03-10-1977'},
{name:"ashok kumar",age:44,salary:35000,DOB:'03-10-1977'},
{name:"shivam sharma",age:24,salary:2500,DOB:'03-01-1997'},
{name:"aman sharma",age:19,salary:500,DOB:'03-01-2001'},
{name:"rajat sharma",age:21,salary:900,DOB:'03-01-1999'}]

console.log(details);

var filtersal = details.filter(function (de){return de.salary>5000});
console.log(filtersal);

function group(objectArray,property){
return objectArray.reduce((acc,obj)=>{
const key = obj[property];
if(!acc[key]){
acc[key]=[];
}
acc[key].push(obj);
return acc;
},{});
}

const groupemp = group(details,'age');
console.log(groupemp);

var inclist= details.filter(function (de){return de.salary<1000 && de.age >20});
console.log(inclist);
for(i in inclist)
{
inclist[i].salary=inclist[i].salary*20;
}

console.log(details);
