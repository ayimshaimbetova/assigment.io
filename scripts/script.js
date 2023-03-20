let imgjs = document.querySelector('img');
imgjs.onclick = () => {
    if (document.querySelector('img').getAttribute('src') === 'alatoologo.png') {
        document.querySelector('img').setAttribute('src', 'aucalogo.png');
    } else {
        document.querySelector('img').setAttribute('src', 'alatoologo.png');
    }
}

let button = document.querySelector('button');
button.onclick = function(){
    let name = prompt('Enter your name:');
    if (name != null){
        document.querySelector('h1').innerHTML = 'Welcome '+ name+'!';
    }
}
