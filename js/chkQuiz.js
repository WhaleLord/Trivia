/**
	Author:Destiny Roberts (WhaleLord3.0)
    Created: 1/21/16
    Updated: 1/21/16
**/

function chkQuiz()
{
		
		var amountCorrect = 0;
		var amountWrong = 0;
		var score;
		
		for(i = 0; i < 11; i++)
		{
			var choices = document.getElementsByName('q'+i);
			
			for(j = 0; j < choices.length; j++)
			{
				var selection = choices[j];
					if(selection.value == "correct" && selection.checked)
					{
						amountCorrect++;
					}
					else if(selection.value == "wrong" && selection.checked)
					{
						amountWrong++;
					}
			}
		}
		
		score = 5 * amountCorrect;
		window.alert("Amount Correct: " + amountCorrect
					+ "\nAmount Wrong: " + amountWrong
					+ "\nScore: " + score);
		
}