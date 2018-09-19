$( document ).ready(function() {

  $("#emotions").hide();
  
  var options = {
  strings: ["E^500motica"],
  typeSpeed: 600,
  contentType: 'html',
  showCursor: false,
  autoInsertCss: false
}

  var typed = new Typed("#emoticaBig", options);

  setTimeout(function() {$("#emotions").fadeIn(3000)},5500);

  
var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll('#about, #coachig, #contact')
 
editBtn.addEventListener('click', function(e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
    editables[2].contentEditable = 'true';
    //editables[3].contentEditable = 'true';

    editBtn.innerHTML = 'Save Changes';
    editBtn.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    editables[2].contentEditable = 'false';
    //editables[3].contentEditable = 'false';
    // Change Button Text and Color
    editBtn.innerHTML = 'Enable Editing';
    editBtn.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});  

if (typeof(Storage) !== "undefined") {
 
  if (localStorage.getItem('about') !== null) {
    editables[0].innerHTML = localStorage.getItem('about');
  }
   
  if (localStorage.getItem('coaching') !== null) {
    editables[1].innerHTML = localStorage.getItem('coaching');
  }
   
  if (localStorage.getItem('contact') !== null) {
    editables[2].innerHTML = localStorage.getItem('contact');
  } 
 // if (localStorage.getItem('mainText') !== null) {
  //  editables[3].innerHTML = localStorage.getItem('mainText');
//  } 
  
}


});

