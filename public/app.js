// get user's data
// get user's coordinates                                                              
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
//to acknowledge there is an error on reject, need to make different functions
//for the resolve and reject?
//promise fulfillment status and promise result


// get user's time                                                             
function userTime(){
    const now = new Date()
    return now.getHours()                                                   
}
// *******************helper functions
// check time of day
function mealTime(){
    const tod = userTime()
    //return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner': tod > 11 ? 'lunch' : 'breakfast'

    if(tod > 20){return `late night snack`}
    else if(tod > 16){return 'dinner'}
    else if(tod > 11){return 'lunch'}
    else{return 'breakfast'}
}   
// ******************build ads
// build ad 1
function buildAd1(){
    const eatingTime = mealTime()
    let content = document.querySelector('.ad1')
    let message = document.createElement('p')
    message.innerHTML = `We've got the best <span>${eatingTime}</span> in town!`
    content.append(message)
}
// build ad 2
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let message = document.createElement('p')
    message.innerHTML = `It's time to try our coffee! <span><a href="${href}" target ="_blank">We're this close!</a></span>`
    content.append(message)
}

console.log(buildAd2(getCoords()))

// ******************event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}