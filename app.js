let light = False

function l(){
	if (light == False)
	{
		document.documentElement.style.setProperty('--main-bg', 'rgb(249, 246, 240)')
		document.documentElement.style.setProperty('--borders', 'rgb(0, 0, 0)')
		document.documentElement.style.setProperty('--shadow', 'rgb(0, 0, 0)')
		light = True
	}
	if (light == True){
		 document.documentElement.style.setProperty('--main-bg', 'rgb(33, 31, 31')
		 document.documentElement.style.setProperty('--main-bg', 'wheat')
		 document.documentElement.style.setProperty('--main-bg', 'white')
	}
}
