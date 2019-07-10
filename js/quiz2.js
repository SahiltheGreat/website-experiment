answer=["clock","short","Yesterday, Today, and Tomorrow",
		"A bottle","A towel",
		"Because the batteries died","C",
		"One was bald","A table","The letter M"];
divNames=["hidden1","hidden2","hidden3","hidden4","hidden5","hidden6","hidden7","hidden8","hidden9","hidden10"];
function showAnswer(i)
{
	var ansIndex=i-1
	var str=answer[ansIndex];
	str+="<br />";
	// console.log(str);
	document.getElementById(divNames[ansIndex]).innerHTML=str+"<br />";
}