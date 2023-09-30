console.log("spotify")

// initializing the variables
let songIndex = 0
let audioElement = new Audio('bgm/main.mp3')
let masterplay = document.getElementById('masterplay')
let myrange = document.getElementById('myrange')
let gif = document.getElementById('gif')
let songitem = Array.from(document.getElementsByClassName('songitem'))

let songs = [
    {songName : "Song name", filepath: "song/path.mp3", coverpath:"pic.jpg"},
    {songName : "Song name", filepath: "song/path.mp3", coverpath:"img2.jpg"},
    {songName : "Song name", filepath: "song/path.mp3", coverpath:"img1.jpg"},
    {songName : "song name", filepath: "song/path.mp3", coverpath:"img1.jpg"},
    {songName : "song name", filepath: "song/path.mp3", coverpath:"img1.jpg"},
]

// songitem.forEach((element,i)=> {
//     // console.log(element ,i)
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath
//     element.getElementsByClassName("songsname")[0].innerText = songs[i].songName
    
// })
// Handling the play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listening to Event
audioElement.addEventListener('timeupdate',()=>{
    // console.log("add event")
     // updaing seekbars
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
     // console.log(progress)
     myrange.value = progress
 })

 myrange.addEventListener('change',()=>{
     audioElement.currentTime = myrange.value*audioElement.duration/100
 })

 const allplays=()=>{
     Array.from(document.getElementsByClassName('songitemclass')).forEach((element)=>{
         element.classList.remove('fa-circle-pause')
         element.classList.add('fa-circle-play')
     })
 } 

    Array.from(document.getElementsByClassName('songitemclass')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
           allplays()
           songIndex = parseInt(e.target.id)
           e.target.classList.remove('fa-circle-play')
           e.target.classList.add('fa-circle-pause')
           audioElement.src = `bgm/${songIndex+1}.mp3`
           audioElement.currentTime=0
           audioElement.play()
           masterplay.classList.remove('fa-circle-play')
           masterplay.classList.add('fa-circle-pause')     })
})
