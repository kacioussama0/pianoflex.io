// Start All Variables
let menu = document.querySelector('.menu');
let bpm = document.querySelector('.number');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let tick = document.querySelector('.play');
let virtualPiano = document.querySelector('.virtual-piano')
let saying = document.querySelector('#saying')
let author = document.querySelector('#author');
let copyied = document.querySelector('span.copyied');
let btn = document.querySelector('#send');
let div = document.querySelector('.default');
let img = document.querySelector("#myVideo");
// End All Variables
setInterval(()=> {
    let imgArr = ['images/bg.png' , 'images/bg1.png' , 'images/bg2.png'];
    img.src = imgArr[Math.floor(Math.random()* imgArr.length)];
},10000)
btn.addEventListener('click' , (event)=> {
    event.preventDefault();
    div.style.display = 'flex';
})

document.querySelector('.exit').onclick = function () {
    div.style.display = 'none';
}


// Start All Functions
document.body.oncopy = document.body.oncut = function () {
    copyied.style.display = 'flex';
    setTimeout(()=> {
        copyied.style.display = 'none';
    },2000)
}

setInterval(()=> {
    let saying_arr = ["''Music is the moonlight in the gloomy night of life.''","''If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.''","''Love is friendship set to music.''","''Music is the literature of the heart; it commences where speech ends.''","''Music is the art which is most nigh to tears and memory.''","''Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.''","''Music produces a kind of pleasure which human nature cannot do without.''","'' Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife ''"];
    let author_arr = ['John Paul Friedrich Richter','Vera Nazarin', 'Jackson Pollock' , 'Alphonse de Lamartine','Oscar Wilde','Charlie Parker','Confucius' , 'Kahlil Gibran']
    let random = Math.floor((Math.random()*saying_arr.length));
    saying.innerHTML = saying_arr[random];
    author.innerHTML = author_arr[random];

},5000)
menu.onclick = function () {
    if(document.querySelector('.nav-bar').style.display == 'none'){
        document.querySelector('.nav-bar').style.display = 'flex';
    }
    else {
        document.querySelector('.nav-bar').style.display = 'none'; 
    }
}

increase.onclick = function () {
    if(Number(bpm.innerHTML) >= 0)
    bpm.innerHTML = Number(bpm.innerHTML) + 1; 
    
}
decrease.onclick = function () {
    if(Number(bpm.innerHTML) <= 250)
    bpm.innerHTML = Number(bpm.innerHTML) - 1;
}

tick.onclick = function () {
    let calc = 1000 / (Number(bpm.innerHTML) / 60);
   
    if(this.innerHTML == ' <i class="fas fa-pause"></i>')
        this.innerHTML = ' <i class="fas fa-play"></i>';
    else {
        this.innerHTML = ' <i class="fas fa-pause"></i>';
        var sound = setInterval(()=> {
            if(this.innerHTML == ' <i class="fas fa-play"></i>'){
                document.querySelector('#tick').pause();
                document.querySelector('#tick').currentTime = 0;
                calc = 0;
            }
            else{
                
                document.querySelector('#tick').play();
            }
            
},calc)
    }
    
}
function play() {
    
}
bpm.onchange = function () {
    let calc = 1000 / (Number(bpm.innerHTML) / 60);
    var sound = setInterval(()=> {
                document.querySelector('#tick').pause();
                document.querySelector('#tick').currentTime = 0 ;
                document.querySelector('#tick').play();
            },calc)
}
virtualPiano.addEventListener('mousedown',(event)=> {
    if((event.target.dataset.note == 'do-sharp') || (event.target.dataset.note == 're-sharp') || (event.target.dataset.note == 'fa-sharp')|| (event.target.dataset.note == 'sol-sharp')|| (event.target.dataset.note == 'la-sharp' || (event.target.dataset.note == 'do-sharp-two') || (event.target.dataset.note == 're-sharp-two') )){
        event.target.style.backgroundImage =    'linear-gradient(to bottom, #000 30% , rgba(255,255,255,0.5))';

    }
    else
   event.target.style.backgroundColor = "rgb(165, 168, 162)";
   
   document.querySelector(`#${event.target.dataset.note}`).play();
   document.querySelector(`#${event.target.dataset.note}`).currentTime = 0;

})
document.body.addEventListener('keydown',(event)=> {
   
    
    // document.querySelector(`#${event.target.dataset.note}`).play();
    // document.querySelector(`#${event.target.dataset.note}`).currentTime = 0;
    switch(event.code){
        case 'KeyQ':
            document.querySelector(`#do`).play();
            document.querySelector(`#do`).currentTime = 0;
            document.querySelector('.do').style.backgroundColor = "rgb(165, 168, 162)";
            break;
        case 'Digit2':
            document.querySelector(`#do-sharp`).play();
            document.querySelector(`#do-sharp`).currentTime = 0;
            document.querySelector('.do-sharp').style.backgroundColor = "rgb(165, 168, 162)";
            break;
        case 'Digit3':
            document.querySelector(`#re-sharp`).play();
            document.querySelector(`#re-sharp`).currentTime = 0;
            document.querySelector('.re-sharp').style.backgroundColor = "rgb(165, 168, 162)";
            break;
        case 'KeyW':
            document.querySelector(`#re`).play();
            document.querySelector(`#re`).currentTime = 0;
            document.querySelector('.re').style.backgroundColor = "rgb(165, 168, 162)";
            break;
            case 'KeyE':
                document.querySelector(`#mi`).play();
                document.querySelector(`#mi`).currentTime = 0;
                document.querySelector('.mi').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyR':
                document.querySelector(`#fa`).play();
                document.querySelector(`#fa`).currentTime = 0;
                document.querySelector('.fa').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'Digit5':
                document.querySelector(`#fa-sharp`).play();
                document.querySelector(`#fa-sharp`).currentTime = 0;
                document.querySelector('.fa-sharp').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyT':
                document.querySelector(`#sol`).play();
                document.querySelector(`#sol`).currentTime = 0;
                document.querySelector('.sol').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'Digit6':
                document.querySelector(`#sol-sharp`).play();
                document.querySelector(`#sol-sharp`).currentTime = 0;
                document.querySelector('.sol-sharp').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyY':
                document.querySelector(`#la`).play();
                document.querySelector(`#la`).currentTime = 0;
                document.querySelector('.la').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'Digit7':
                document.querySelector(`#la-sharp`).play();
                document.querySelector(`#la-sharp`).currentTime = 0;
                document.querySelector('.la-sharp').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyU':
                document.querySelector(`#si`).play();
                document.querySelector(`#si`).currentTime = 0;
                document.querySelector('.si').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyI':
                document.querySelector(`#do-two`).play();
                document.querySelector(`#do-two`).currentTime = 0;
                document.querySelector('.do-two').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'Digit9':
                document.querySelector(`#do-sharp-two`).play();
                document.querySelector(`#do-sharp-two`).currentTime = 0;
                document.querySelector('.do-sharp-two').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyO':
                document.querySelector(`#re-two`).play();
                document.querySelector(`#re-two`).currentTime = 0;
                document.querySelector('.re-two').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'Digit0':
                document.querySelector(`#re-sharp-two`).play();
                document.querySelector(`#re-sharp-two`).currentTime = 0;
                document.querySelector('.re-sharp-two').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            case 'KeyP':
                document.querySelector(`#mi-two`).play();
                document.querySelector(`#mi-two`).currentTime = 0;
                document.querySelector('.mi-two').style.backgroundColor = "rgb(165, 168, 162)";
                break;
            
    }
    console.log(event.code)
 })
 document.body.addEventListener('keyup',(event)=> {
   
    
    // document.querySelector(`#${event.target.dataset.note}`).play();
    // document.querySelector(`#${event.target.dataset.note}`).currentTime = 0;
    switch(event.code){
        case 'KeyQ':
   
            document.querySelector('.do').style.backgroundColor = "rgb(255, 255, 255)";
            break;
        case 'Digit2':

            document.querySelector('.do-sharp').style.backgroundColor = "rgb(0, 0, 0)";
            break;
        case 'KeyW':
        
            document.querySelector('.re').style.backgroundColor = "rgb(255, 255, 255)";
            break;
            case 'KeyE':
             
                document.querySelector('.mi').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyR':
          
                document.querySelector('.fa').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyT':
              
                document.querySelector('.sol').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyY':
              
                document.querySelector('.la').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyU':
            
                document.querySelector('.si').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyI':
           
                document.querySelector('.do').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyO':
             
                document.querySelector('.re-two').style.backgroundColor = "rgb(255, 255, 255)";
                break;
            case 'KeyP':
         
                document.querySelector('.mi-two').style.backgroundColor = "rgb(255, 255, 255)";
                break;
    }
 
 })
virtualPiano.addEventListener('mouseup',(event)=> {
    if((event.target.dataset.note == 'do-sharp') || (event.target.dataset.note == 're-sharp') || (event.target.dataset.note == 'fa-sharp')|| (event.target.dataset.note == 'sol-sharp')|| (event.target.dataset.note == 'la-sharp' || (event.target.dataset.note == 'do-sharp-two') || (event.target.dataset.note == 're-sharp-two') )){
     
        event.target.style.backgroundImage =    'linear-gradient(to bottom, #000 100% , rgba(255,255,255,0.5))';

    }
    else {
    event.target.style.backgroundColor = "rgb(255, 255, 255)";
}

 })
// End All Functions