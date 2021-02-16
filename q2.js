var str = prompt('Enter string to check palindrome');
function check(str)
{
var l=0;
var r=str.length-1;
while(r>l)
{
	if(str[l++]!=str[r--])
	{
		return "not a palindrome";
	}
		
}
return "is a palindrome";
}
var res=check(str);
alert(str+" "+res);	
