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
    basic(data.basics);
    edu(data.education);
    interest(data.interest);
    lang(data.Languages);
    carrier(data.carrier);
    experience(data.experience);
    declaration(data.Declaration);
    skillsraja(data.skills);
      });
//
      // var main = document.createElement("div");
      // main.classList.add("main");
var wrapper=document.getElementById('wrapper');

      //right div
      var right = document.createElement("div");
       right.classList.add("sidebar-wrapper");
      //r1 div
       var r1=document.createElement("div");
       r1.classList.add("profile-container");
       // r1.textContent="Basic Information";

//  function calling
function basic(basics) {
  //image in dom
      var img = document.createElement("img");
      img.classList.add("profile");
      img.src=("profile.png");
      // r1.appendChild(img);3
      //name&designation in dom
       var h1 = document.createElement("h1");
       h1.classList.add("name");
       h1.textContent=basics.name;

       // r1.appendChild(img);
       // r1.appendChild(h1);
       // right.appendChild(r1);

       var h2 = document.createElement("h2");
       h2.classList.add("tagline");
       h2.textContent=basics.designation;

      //email,address,twitter and phone number in dom
  var ul = document.createElement("ul");
     ul.classList.add("list-unstyled");
     ul.classList.add("contact-list");
     for(k in basics.data){
        var li = document.createElement("li");
        li.textContent = basics.data[k];
         ul.appendChild(li);

     }
    //  console.log(ul);
      r1.appendChild(img);
      r1.appendChild(h1);
      r1.appendChild(h2);
      r1.appendChild(document.createElement("HR"));
      right.appendChild(r1);
      r1.appendChild(ul);
      r1.appendChild(document.createElement("HR"));
}


       //r2 div-education
       var r2=document.createElement("div");
       r2.classList.add("education-container");
       r2.classList.add("container-block");
       r2.textContent="Education Information";



//  function calling
      function edu(education) {

           for(i in education){
             var e1=document.createElement("div");
             e1.classList.add("item");
             e1.textContent=education[i].course;
             r2.appendChild(e1);

             var e2 = document.createElement("ul");
                e2.classList.add("degree");
             for(k in education[i].college){
               var e3=document.createElement("li");
               e3.classList.add("meta");
               e3.textContent=education[i].college[k];
               e1.appendChild(e3);
               r2.appendChild(e2);
               r2.appendChild(e3);
             }
           }
           right.appendChild(r2);
           r2.appendChild(document.createElement("HR"));
// console.log(r2);
}
//r2-education completed

//r3 starting
var r3=document.createElement("div");
r3.classList.add("interests-container");
r3.classList.add("container-block");
r3.textContent="Interest";

//function calling
function interest(interest){

  var ul = document.createElement("ul");
     ul.classList.add("list-unstyled");
     ul.classList.add("interests-list");
     for(k in interest){
        var li = document.createElement("li");
        li.textContent = interest[k].inte;
         ul.appendChild(li);

     }
    r3.appendChild(ul);
    right.appendChild(r3);
    r3.appendChild(document.createElement("HR"));
    // console.log(r3);
}
//r3 completed

//r4 starting
var r4=document.createElement("div");
r4.classList.add("languages-container");
r4.classList.add("container-block");

 var h1=document.createElement("h1");
 h1.setAttribute("id", "Language");
 h1.classList.add("container-block-title")
 h1.textContent="Languages Known";

 //function calling
  function lang(Languages){
    var ul = document.createElement("ul");
       ul.classList.add("list-unstyled");
       ul.classList.add("interests-list");
       for(k in Languages){
          var li = document.createElement("li");
          li.textContent = Languages[k].lang;
           ul.appendChild(li);
       }
       h1.appendChild(ul);
       r4.appendChild(h1);
       right.appendChild(r4);
       // console.log(r4);
  }
  //right div end

//left div start

var left = document.createElement("div");
 left.classList.add("main-wrapper");

//l1 starting
var l1=document.createElement("div");
l1.classList.add("section");
l1.classList.add("summary-section");
//function starting
function carrier(carrier){
  var h2=document.createElement("h2")
  h2.setAttribute("id", "carrier-title");
  h2.classList.add("section-title");
  h2.textContent="carrier Profile";

   var para =document.createElement("p");
   para.classList.add("summary");
   para.textContent=carrier.carr;
   l1.appendChild(h2);
   l1.appendChild(para);
   left.appendChild(l1);
   wrapper.appendChild(right);
   wrapper.appendChild(left);
   l1.appendChild(document.createElement("HR"))
   console.log(wrapper);
}//function ending
//l1 ending

//l2 starting
var l2=document.createElement("div");
l2.classList.add("section");
l2.classList.add("experiences-section");

var h2=document.createElement("h2")
h2.setAttribute("id", "experience-title");
h2.classList.add("section-title");
h2.textContent="Experiences";
l2.appendChild(h2);

 //function starting
function experience(experience){
  for(i in experience){
    var ex1 =document.createElement("div");
    ex1.classList.add("company");
    ex1.textContent=experience[i].organisation;
    l2.appendChild(ex1);
    var ex2 =document.createElement("div");
    ex2.classList.add("location");
    ex2.textContent=experience[i].location;
    l2.appendChild(ex2);
    var ex3 =document.createElement("p");
    ex3.classList.add("details");
    ex3.textContent=experience[i].desc;
    l2.appendChild(ex3);
  }

  left.appendChild(l2);
  l2.appendChild(document.createElement("HR"))
// console.log(l2);
}
//l2 ending

//l3 starting
var l3=document.createElement("div");
l3.classList.add("Declaration");

var h2=document.createElement("h2");
h2.setAttribute("id","desc-title");
h2.textContent="Declaration";
l3.appendChild(h2);
//function starting
function declaration(Declaration){
  var para =document.createElement("p");
  para.setAttribute("id","desc");
  para.textContent=Declaration.decl;
  l3.appendChild(para);
  left.appendChild(l3);
  l3.appendChild(document.createElement("HR"))
}
var l4 = document.createElement("div");
l4.classList.add("raja");

var h2 = document.createElement("h1");
h2.textContent="Skills";
l4.appendChild(h2);
function skillsraja(skills) {
for (i in skills) {
  var h3 = document.createElement("h3");
  h3.textContent=skills[i].name;
  var h4 = document.createElement("h4");
  h4.textContent=skills[i].level;
  var ski = document.createElement("div");
  var ul = document.createElement("ul");
  for (j in skills[i].keywords) {
    var li = document.createElement("li");
    li.textContent=skills[i].keywords[j];
    ul.appendChild(li);
  }
  l4.appendChild(h3);
  l4.appendChild(h4);
  ski.appendChild(ul);
  l4.appendChild(ski);


}
// console.log(l4);
left.appendChild(l4);
}

// console.log(l3);
})();
//
// // var h1=document.createElement("h1");
// // h1.setAttribute("id", "name");
