var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
var modeBtn=document.querySelectorAll(".mode");
colorDisplay.innerHTML=pickedcolor;

//modeBtn[1].addEventListener("click",function(){alert("CONN");});
	
		for(var i=0;i<modeBtn.length;i++)
		{
			modeBtn[i].addEventListener("click",function()
				{
						modeBtn[0].classList.remove("selected");
					modeBtn[1].classList.remove("selected");
					this.classList.add("selected");
					if(this.textContent==="Easy")
						numSquares=3;
					else
						numSquares=6;
					Reset();
		
				});
		}

function Reset()
{

		colors=generateRandomColors(numSquares);
		pickedcolor=pickColor();
		for(var i=0;i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.backgroundColor=colors[i];
				squares[i].style.display="block";
				
			}
			else
				squares[i].style.display="none";
		}
		colorDisplay.innerHTML=pickedcolor;
		h1.style.backgroundColor="steelblue";
		message.textContent="";
		this.textContent="New Colors";

}

reset.addEventListener("click",function()
	{

		colors=generateRandomColors(numSquares);
		pickedcolor=pickColor();
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=colors[i];
		}
		colorDisplay.innerHTML=pickedcolor;
		h1.style.backgroundColor="steelblue";
		message.textContent="";
		this.textContent="New Colors";
	});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function()
		{
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedcolor)
			{
				message.textContent="Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				reset.textContent="Play Again?";
			}
			else
			{
				message.textContent="Wrong";
				this.style.backgroundColor="#232323";
			}
		});
}
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

//to genrate random color
function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);

	return colors[random];
}


function generateRandomColors(num)
{
	var arr =[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}