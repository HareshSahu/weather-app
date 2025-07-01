let city=document.getElementById('city');
let temp=document.getElementById('temp');
let type=document.getElementById('type');
let input=document.getElementById('inp');
let image=document.getElementById('img');

let API_key='97af05e3653a541c204c47dee0afd8c6';


const data= async function(search){
    let getData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getData);
    let jsonData= await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);
    city.innerHTML=jsonData.name;
    temp.innerHTML= Math.floor(jsonData.main.temp)+" °C"
    type.innerHTML=jsonData.weather[0].main  ;
    if(type.innerHTML=='Clouds'){
        image.src='cloud1.png';
    }
    else if(type.innerHTML=='Clear'){
        image.src='Clear'
    }
}
function myFun(){
    search=input.value;
    data(search);
}
