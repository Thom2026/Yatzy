var NumberOfRolls = 0;
var NumberOfRounds = 0;
var DicesToRoll = [
		"d1",
		"d2",
		"d3",
		"d4",
		"d5",
];
var DiceValues = [
		"?",
		"?",
		"?",
		"?",
		"?",
]

function DiceRoll() {
	if(NumberOfRolls < 3) {
		for(var index = 0; index < DicesToRoll.length; index++) {
			if (NumberOfRolls == 0 || document.getElementById(DicesToRoll[index]).className == "reroll") {
				DiceValues[index] = Math.floor(Math.random() * 6) + 1
				document.getElementById(DicesToRoll[index]).value = DiceValues[index];
				document.getElementById(DicesToRoll[index]).className = "dice";
			}
		}
		NumberOfRolls++;
	}
	var elms = document.getElementsByClassName('scoreSelect')
	for (var i = 0; i < elms.length; i++) {
   		elms[i].style.display = 'inline';
	}	
}
function GetValueSame(StartValue, id) {
	var Value = 0;
	for(index = 0; index < DiceValues.length; index++) {
		if(DiceValues[index] == StartValue){
			Value = Value + DiceValues[index];
		}
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function GetValuePairs(NumberOfPairs, id) {
	var Value = 0;
	var pairs = 0;
	var PairValue = 0;
	for(index = 0; index < DiceValues.length - 1; index++) {
		for(i = index + 1; i < DiceValues.length; i++) {
			if(DiceValues[index] == DiceValues[i]){
				if(PairValue < DiceValues[i] * 2){
					PairValue = DiceValues[i] * 2;
				}
				if(PairValue != Value && NumberOfPairs > pairs){
					Value = Value + PairValue;
					i = DiceValues.length;
					pairs++;
				}
				if(PairValue > Value && NumberOfPairs == pairs){
					Value = PairValue;
				}
			}
		}
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function GetValueLikes(NumberOf, id) {
	var Value = 0;
	var alikeValue = 0;
	for(index = 0; index < DiceValues.length; index++) {
		var alikes = 1;
		var tempValue = DiceValues[index];
		if(DiceValues[index] > alikeValue) {
			for(i = index + 1; i < DiceValues.length; i++) {
				if(DiceValues[index] == DiceValues[i] && alikes < NumberOf ) {
					tempValue = tempValue + DiceValues[i];
					alikes++;
				}
				if(alikes == NumberOf){
					alikeValue = DiceValues[i];
					Value = tempValue;
				}
			}
		}
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function GetValueStraight(StartValue, id) {
	var straight = true;
	var Value = 0;
	DiceValues.sort(function(a, b) {return a-b});
	if (DiceValues[0] == StartValue) {
		for(i = 0; i < DiceValues.length - 1; i++) {
			if (DiceValues[i] != DiceValues[i+1] - 1){
				var straight = false;
			}
			else {
				Value = Value + DiceValues[i];
			}
		}
	}
	if(straight == true) {
		id.innerText = Value + DiceValues[i];		
	}
	else {
		id.innerText = 0;
	}
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function GetValueHouse(id) {
	var Value = 0;
	var twoAlike = 0;
	var threeAlike = 0;
	var sortedDice = DiceValues.sort(function(a, b) {return b-a});
	if (DiceValues[0] == DiceValues[1] && DiceValues[0] == DiceValues[2]) {
		threeAlike = DiceValues[0];
		if (DiceValues[3] == DiceValues[4]) {
			twoAlike = DiceValues[3];
		}
	}
	else if (DiceValues[0] == DiceValues[1]) {
		twoAlike = DiceValues[0];
		if (DiceValues[2] == DiceValues[3] && DiceValues[2] == DiceValues[4]) {
			threeAlike = DiceValues[2];
		}
	}
	if (twoAlike != 0 && threeAlike != 0) {
		Value = twoAlike*2 + threeAlike*3;
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function GetValueChance(id) {
	var Value = 0;
	for (index = 0; index < DiceValues.length; index++) {
		Value = Value + DiceValues[index];
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function YATZY(id) {
	Value = 0;
	if (DiceValues[0] == DiceValues[1] && DiceValues[0] == DiceValues[2] && DiceValues[0] == DiceValues[3] && DiceValues[0] == DiceValues[4]) {
		Value = 50;
	}
	id.innerText = Value;
	GetSum();
	RoundsCounter()
	ScoreSelected();
}
function diceToReroll(id) {
	if(NumberOfRolls != 0) {
		id.className = id.className == 'dice' ? 'reroll' : 'dice';
	}
}
function ScoreSelected() {
	
	var elms = document.getElementsByClassName('scoreSelect')
	for (var i = 0; i < elms.length; i++) {

   		elms[i].style.display = elms[i].style.display == 'inline' ? 'none' : 'inline';

	}
	NumberOfRolls = 0;
	var dices = document.getElementsByClassName('dice')
	for (var index = 0; index < dices.length; index++) {
		dices[index].value = "?";
	}
}
function hideButton(id) {
	id.style.visibility = "hidden";
}
function RoundsCounter() {
	NumberOfRounds++;
	if(NumberOfRounds == 15) {
		changeButton();
	}
}
function changeButton() {
	document.getElementById("RB").style.display = document.getElementById("RB").style.display == 'none' ? 'inline' : 'none';
	document.getElementById("SB").style.display = document.getElementById("SB").style.display == 'inline' ? 'none' : 'inline';
}
function StartGame() {
	var reset = document.getElementsByClassName("scoreSelect");
	for(index = 0; index < reset.length; index++) {
		reset[index].style.visibility = "visible";
	}var newStart = document.getElementsByClassName("Player");
	for(i = 0; i < newStart.length; i++) {
		newStart[i].innerText = "";
		NumberOfRounds = 0;
	}

	changeButton();
}