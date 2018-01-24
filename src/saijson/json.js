
function jsonResume1() {
  window.open ('src/saijson/json.html','_self',false)

}
function newpage1() {
  window.open ('page21.html','_self',false)
}


function results() {
  fname = document.getElementById("fname").value;
}
// window.onload = function() {
//     /* Add your logic here */
function newpage1() {
  window.open ('page21.html','_self',false)
}
function jsonResume1() {
  window.open ('src/saijson/json.html','_self',false)
}

function results() {
  fname = document.getElementById("fname").value;
}
// window.onload = function() {
//     /* Add your logic here */
//     document.getElementById('name').innerHTML=fname;
//
// }

(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    Phone(data.basics.phone);
    name(data.basics.name);
    label(data.basics.label);
    sonof(data.basics.sonof);
    email(data.basics.email);
    address(data.basics.location.address);
    career(data.basics.co);
    expe(data.basics.expe);
    expe1(data.basics.expe1);
    expe2(data.basics.expe2);
    Graduation(data.basics.Graduation);
    inter(data.basics.Intermediate);
    ssc(data.basics.ssc);
    os(data.basics.technicalSkil.os);
    lang(data.basics.technicalSkil.lang);
    tools(data.basics.technicalSkil.tools);
    wt(data.basics.technicalSkil.wt);
      });

  var resumeDiv = document.getElementById('profile');

  // function creatingSummary(summary){
  //   // var section = document.createElement("section");
  //   // section.classList.add("section", "main-summary");
  //   // var summary_section = document.createElement("section")
  //   var div = document.getElementById("f2");
  //   div.innerHTML = summary;
  //   // summary_section.appendChild(div);
  //   // section.appendChild(summary_section);
  //   // resumeDiv.appendChild(section);
  // }
function Phone(phone) {
  var div=document.getElementById('phone');
  div.innerHTML=phone;

}

  function name(name) {
    var div=document.getElementById('name');
    div.innerHTML=name;
  }

  function label(label) {
    var div=document.getElementById('label');
    div.innerHTML=label;
  }

  function sonof(sonof) {
    var div=document.getElementById('sonof');
    div.innerHTML=sonof;
  }

  function email(email) {
    var div=document.getElementById('email');
    div.innerHTML=email;
  }
  function address(address) {
    var div=document.getElementById('address');
    div.innerHTML=address;
  }

  function career(co) {
    var div=document.getElementById('co');
    div.innerHTML=co;
  }
  function expe(expe) {
    var div=document.getElementById('expe');
    div.innerHTML=expe;
  }
  function expe1(expe1) {
    var div=document.getElementById('expe1');
    div.innerHTML=expe1;
  }
  function expe2(expe2) {
    var div=document.getElementById('expe2');
    div.innerHTML=expe2;
  }
  function Graduation(Graduation) {
    var div=document.getElementById('Graduation');
    div.innerHTML=Graduation;
  }
    function inter(Intermediate) {
    var div=document.getElementById('inter');
    div.innerHTML=Intermediate;
  }
  function ssc(ssc) {
    var div=document.getElementById('ssc');
    div.innerHTML=ssc;
  }

  function os(os) {
    var div=document.getElementById('os');
    div.innerHTML=os;
  }
  function lang(lang) {
    var div=document.getElementById('lang');
    div.innerHTML=lang;
  }
  function tools(tools) {
    var div=document.getElementById('tools');
    div.innerHTML=tools;
  }
  function wt(wt) {
    var div=document.getElementById('wt');
    div.innerHTML=wt;
  }

})();

//     document.getElementById('name').innerHTML=fname;
//
// }
