// ==============Promise====================
//  async function getData(){
//     console.log("isko chaloa")
//     console.log("dusra promise chaly ga mery baad")
//    let myAwait = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//            resolve("I love you Jav!")
//                 },3000)
//     })
//     let anotherAwait = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("mein dusra wala hun")
//         },5000)
//     })
//     console.log(await anotherAwait)
    
//     console.log("ab pehla wala promise")
//     console.log(await myAwait)

//     console.log("aik or")
    
//  }


//  getData()
// let cityName = prompt("enter city")
//  function getWeatherData() {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1818bdc7b4b77ef30d448a7e2ea8b141`
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         setWeather(res);
//         console.log(res);
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong! Please try again",
//         });
//         console.log(err);
//       });
//   }
//   getWeatherData()

// ============== fetch data =================
// console.log(fetching)
// github fetch  
// let div = document.getElementById('div')
// async function getData(username) {
//     try{
//         let fetching = await fetch(`https://api.github.com/users/${username}`)
//         let formatFetch = await fetching.json()
//         div.innerHTML = `<img src=${formatFetch.avatar_url} alt=""></img>`
//         console.log(formatFetch)
//     }
//     catch(e){
//         console.log(e)
//     }
    
  
    // console.log(formatFetch)
//     for (let key of formatFetch) {
// console.log(key.body)
//     }
// formatFetch.forEach(object =>{
//     console.log(object.body)
// })

// }
// getData("JaveriyaSaleem")


