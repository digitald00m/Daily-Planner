// elements to var
var planText = $("[data-type='plan-text']")
var planTime = $("[data-type='plan-time']")
var planSaveBtn = $("[data-type='plan-save-btn']")
var currentDay = moment().format('LLLL')
var currentHour = moment().format('HH')
var clearForm = $("#clear-form")
// day setter
$('#currentDay').text(currentDay)
// varablies set
var startTime = 7;
var endTime = 20;


// for loop to monitor the time and adjust color for those future, past, present
for (i=startTime; i <= endTime; i++){
  if(i < currentHour){
    //past
    $('#'+i).attr("style", "background: grey")
    
  }else if(i == currentHour){
    //present
    $('#'+i).attr("style",'background: red')
    $('#'+i).addClass("h4")
    $('#'+i).addClass("mb-0")
    $('#'+(i+1)).addClass("h4")
    $('#'+(i+1)).addClass("mb-0") 
  }else{
    //future
    $('#'+i).attr("style", "background: green")
  }
// sets the info to a its own key based on time
  var keyToGet = ""

  if(i<12){
    keyToGet = i + ":00am"
  }else if(i==12){
    keyToGet = "12:00pm"
  }else {
    keyToGet = i-12 + ":00pm"
  }
  $("#"+i).val(localStorage.getItem(keyToGet))
  // console.log($("#"+i).val())
}

// Save task to local storage so on refresh they stay on page
function saveToLocal(){
  //  because text area its the val
  var infoToSave = $(this).prev().val()
  // because div its the text
  var keyToSave = $(this).prev().prev().text().trim()
  localStorage.setItem(keyToSave, infoToSave)
}


// save button
$(document).on("click", "button", saveToLocal)

// clear tasks for end of day or next day use
$(clearForm).click(function(){
    var theReset = confirm("Are you sure you wish to Clear page?");
    if( theReset == true) {
      console.log("hello");
      localStorage.clear();
     window.location.reload();
    }
})
