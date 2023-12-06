let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(event,tabname){
    for(let tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tabb');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tabb');

}