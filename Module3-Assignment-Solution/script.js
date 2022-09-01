console.log("Hello world!");
let dropDown = document.getElementById("dropDown");
let element = document.getElementById('bottomDrop');
dropDown.addEventListener('click', () => {

    if(element.className == 'dropdown-menu hide'){
        element.classList.remove('hide');
        element.classList.add('show');
    }
    else{
        element.classList.remove('show');
        element.classList.add('hide');
    }
    
    
})