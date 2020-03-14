function odliczanie()
	{
		var dzisiaj = new Date();
		
		
		var dzien = dzisiaj.getDay();
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		var ms = dzisiaj.getMilliseconds();
		if(ms<10)ms="0"+ms;
		
		if(dzien==1)
		{
			dzien="poniedziałek";
		}
		else if(dzien==2)
			{
			dzien="wtorek";
		}
		else if(dzien==3)
			{
			dzien="środa";
		}
		else if(dzien==4)
			{
			dzien="czwartek";
		}
		else if(dzien==5)
			{
			dzien="piątek";
		}
		else if(dzien==6)
			{
			dzien="sobota";
		}
		else if(dzien==7)
			{
			dzien="niedziela";
		}
		
		
		
		document.getElementById("zegar").innerHTML = dzien+", "+godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",10);
	}