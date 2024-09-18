
// // async function getProfile(accessToken) {
// //   let accessToken = localStorage.getItem('access_token');

// //   const response = await fetch('https://api.spotify.com/v1/me', {
// //     headers: {
// //       Authorization: 'Bearer ' + accessToken
// //     }
// //   });

// //   const data = await response.json();
// // }
// // Example function to fetch song data from the Spotify API
// async function fetchSongs() {
//     const accessToken = '11dFghVXANMlKmJXsNCbNl'; // Replace this with your actual access token
  
//     // Endpoint to fetch a list of featured playlists from Spotify
//     const endpoint = '';
  
//     try {
//       // Make a GET request to the Spotify API
//       const response = await fetch(endpoint, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       });
  
//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error('Failed to fetch song data');
//       }
  
//       // Parse the response JSON
//       const data = await response.json();
  
//       // Extract song data from the response
//       const songs = data.playlists.items.map(playlist => ({
//         name: playlist.name,
//         description: playlist.description,
//         tracks: playlist.tracks.total
//       }));
  
//       // Do something with the fetched song data
//       console.log(songs);
//     } catch (error) {
//       console.error('Error fetching song data:', error.message);
//     }
//   }
  
//   // Call the fetchSongs function to fetch song data
//   fetchSongs();
  
const apiKey = 'https://places.googleapis.com/v1/places/GyuEmsRBfy61i59si0?fields=addressComponents&key=YOUR_API_KEY';
const apiUrl = '';
function music(){
    //   const url = `${apiUrl}?q=${int}&appid=${apiKey}&units=metric`;
    const url = 'https://api.spotify.com/v1/tracks/{id}';
    
      fetch(url)
        .then(response => response.json())
        // .then(data => {
        //   // Update UI with weather data
        //   console.log(data)
        //   var season = (data.weather[0].main);
        //   var temp = (data.main.temp)
        //   var name = data.name
        //   var humidity = data.main.humidity;
        //   var pressure = data.main.pressure;
        //   var wind = data.wind.speed;
        //   var cloud = data.clouds.all;
        //   var time = data.sys.sunrise;
        //   const t = new Date(time)
        //   const st = t.toLocaleTimeString('en-US',{
        //     hour12:true,
        //     hour:"2-digit",
        //     minute:"2-digit"
        //   });
        //   console.log(st)
        //   var emo = document.getElementById("emo");
        //   var back = document.getElementById("back");
        //   if(season=='Clear')
        //   {
        //     emo.src = 'sunny-emo.png';
        //       back.classList.add("sunny")
        //       back.classList.remove("winter")
        //       back.classList.remove("haze")
        //       back.classList.remove("rain")
        //       back.classList.remove("cloud")
        //   }
        //   else if(season=='Haze')
        //   {
        //     emo.src = 'haze-emo.png'
        //       back.classList.add("haze");
        //       back.classList.remove("winter")
        //       back.classList.remove("sunny")
        //       back.classList.remove("rain")
        //       back.classList.remove("cloud")
        //   }
        //   else if(season=='Rain' && temp>1)
        //   {
        //     emo.src = 'rain-emo.png';
        //         back.classList.add("rain")
        //         back.classList.remove("winter")
        //         back.classList.remove("sunny")
        //         back.classList.remove("haze")
        //         back.classList.remove("cloud")
        //   }
        //   else if(season=='Rain' && temp<1)
        //   {
        //     emo.src = 'rain-emo.png';
        //     back.classList.remove("rain")
        //     back.classList.add("winter")
        //     back.classList.remove("sunny")
        //     back.classList.remove("haze")
        //     back.classList.remove("cloud")
        //   }
        //   else if(season=='Clouds' && temp>=1)
        //   {
        //     emo.src = 'cloud.png'
        //         back.classList.add("cloud")
        //         back.classList.remove("sunny")
        //         back.classList.remove("haze")
        //         back.classList.remove("rain")
        //         back.classList.remove("winter")
        //   }
        //   else if(season=='Clouds' && temp<1)
        //   {
        //     emo.src = 'snow-emo.png'
        //         back.classList.remove("cloud")
        //         back.classList.remove("sunny")
        //         back.classList.remove("haze")
        //         back.classList.remove("rain")
        //         back.classList.add("winter")
        //   }
        //   else if(season=='Snow' && temp<1)
        //   {
        //     emo.src = 'snow-emo.png';
        //           back.classList.add("winter")
        //           back.classList.remove("sunny")
        //           back.classList.remove("haze")
        //           back.classList.remove("rain")
        //           back.classList.remove("cloud")
        //         // back.classList.remove("winter")
        //   }
        //   document.getElementById("temp").innerHTML = temp;
        //   document.getElementById("name").innerHTML = name;
        //   document.getElementById("season").innerHTML = season;
        //   document.getElementById("humi").innerHTML = humidity;
        //   document.getElementById("press").innerHTML = pressure;
        //   document.getElementById("wind").innerHTML = wind;
        //   document.getElementById("cloud").innerHTML = cloud;
        //   console.log(season)
        // })
        .catch(error => {
          console.error('Error fetching weather:', error);
        });
    }  
    music()