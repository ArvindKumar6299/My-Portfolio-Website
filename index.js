let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

let sidemeu = document.getElementById("sidemenu");

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

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwl1Z7Y5BCV3JYyYJQu6ICGHbej9YMZTs_HAraRwpDc-og3E0TFO7GvT2kLQYJ76ze_Gg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(()=>{
            msg.innerHTML = ""
        
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
