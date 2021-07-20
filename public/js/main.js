const submitbtn = document.getElementById('submit');
const cityname = document.getElementById('inp');
const inside_cityname = document.getElementById('country');
const temp = document.getElementById("temp");
const temp_con = document.getElementById("temp_con"); const area = document.getElementById("area");
const locat = document.getElementById("locat");
const date_time = document.getElementById("date_time");
const month_time = document.getElementById("month");
const day_time = document.getElementById("day");
const datahide1 = document.querySelector('.hider1');
const datahide2 = document.querySelector('.hider2');
const datahide3 = document.querySelector('.hider3');

const getinfo =async(event)=>{
    event.preventDefault()
    let city_value = cityname.value;
    if(city_value===""){
        inside_cityname.innerText=`please write down the name of the country`
        datahide1.classList.add("datahide");
        datahide2.classList.add("datahide");
        datahide3.classList.add("datahide");
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=1b251cba26d30382343d6fc676f09b59&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temp.innerText=arrdata[0].main.temp;
            area.innerText=city_value;
            locat.innerText=arrdata[0].sys.country;
            
          const temp_style=arrdata[0].weather[0].main;
            if(temp_style=="Clear"){
             temp_con.innerHTML='<i class="fas fa-sun" style="color:#eccc68"></i>'
            }
            else if(temp_style=="Clouds"){
             temp_con.innerHTML='<i class="fas fa-cloud" style="color:#a0cfff"></i>'
            }
           else if(temp_style=="Rain"){
            temp_con.innerHTML='<i class="fas fa-cloud-showers-heavy" style="color:#007eff"></i>'
            }
            else{
            temp_con.innerHTML='<i class="fas fa-sun" style="color:#eccc68"></i>'
           }
           datahide1.classList.remove("datahide");
           datahide2.classList.remove("datahide");
           datahide3.classList.remove("datahide");
           
        }
        catch{
            city_value.innerText=`sorry there was a problem please try again`
            datahide1.classList.add("datahide");
            datahide2.classList.add("datahide");
            datahide3.classList.add("datahide");
        }
    }


}

submitbtn.addEventListener('click',getinfo)
submitbtn.addEventListener('enter',getinfo)
/*day*/
const date = new Date();
var allday = ['sunday','monday','tuesday','wednesday','thusday','friday','satday'];
var day = allday[ date.getDay()];
day_time.innerText=day;
/*month*/
const allmonth=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var month =allmonth[ date.getMonth()];
month_time.innerText=month;
/*date*/
date_time.innerText=date.getDate();

