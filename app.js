let light = false;
function l(){
    if (light == false){
        document.documentElement.style.setProperty('--main-bg', 'rgb(249, 246, 240)')
        document.documentElement.style.setProperty('--borders', 'rgb(0, 0, 0)')
        document.documentElement.style.setProperty('--shadow', 'rgb(0, 0, 0)')
        light = true
    }
    else
    if (light == true){
        document.documentElement.style.setProperty('--shadow', 'white')
        document.documentElement.style.setProperty('--main-bg', 'rgb(33, 31, 31)')
        document.documentElement.style.setProperty('--borders', 'wheat')
        light = false
    }
}