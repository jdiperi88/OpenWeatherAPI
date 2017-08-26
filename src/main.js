console.log('main.js is connected!');

/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/


    
  
$('.btn').on('click',function(){
     let zip = parseInt($('.zip').val());
      getWeather(zip);
      $('#container2').css('display','block')
      $('#container2').css('display','flex')
      $('#pic').css('display','block')
    })



// $('#btn2').on('click',function(){
//      let number = parseInt($('#zip').val());
//       getWeather(number);
// })


   

function getWeather(zip) {
    
    console.log(zip);
    var weather = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=f065210a08e2910822646f8b726f6333`;
    $.ajax({
      method: "GET",
      url: weather,
      success: function(data){
        console.log(data);
        let currentTemp = data.main.temp;
        let max = data.main.temp_max;
        let min = data.main.temp_min;
        let city = data.name;
        let description = data.weather[0].description;
        let image = data.weather[0].icon;  
        $('#pic').attr('src',`http://openweathermap.org/img/w/${image}.png`);
        $(".city").text(city);
        $(".row3").text(`${Math.floor(currentTemp)}° degrees`);
        $(".row4").text(`${description}`);
        $(".minMax1").text(`Max: ${max}°`);
        $(".minMax2").text(`Min: ${min}°`);
   
      //  let max = temperature;
   
      }
      
    });
}






