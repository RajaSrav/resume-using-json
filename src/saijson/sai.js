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
    skills(data.technicalskils);
    Acheivements(data.Acheivements);
    declaration(data.Declaration);
      });
//
      // var main = document.createElement("div");
      // main.classList.add("main");
var main=document.getElementById('main');

      //right div
      var right = document.createElement("div");
       right.classList.add("right");
      //r1 div
       var r1=document.createElement("div");
       r1.classList.add("profile");
       // r1.textContent="Basic Information";

//  function calling
function basic(basics) {
  //image in dom
      var img = document.createElement("img");
      img.classList.add("image");
      img.src=basics.picture;
      // r1.appendChild(img);3
      //name&designation in dom
       var h1 = document.createElement("h1");
       h1.classList.add("name");
       h1.textContent=basics.name;

       var h2 = document.createElement("h2");
       h2.classList.add("designation");
       h2.textContent=basics.designation;
      //email,address,twitter and phone number in dom
  var ul = document.createElement("ul");
     ul.classList.add("data");
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
      // r1.appendChild(document.createElement("HR"));
}
       //r2 div-education
       var r2=document.createElement("div");
       r2.classList.add("education");
       r2.textContent="Education Information :";
       r2.appendChild(document.createElement("HR"));
       // //for break
       // var mybr = document.createElement("Br");
       // r2.appendChild(mybr);

//  function calling
      function edu(education) {

           for(i in education){
             var e1=document.createElement("div");
             e1.classList.add("edu1");
             e1.textContent=education[i].course;
             r2.appendChild(e1);

             var e2 = document.createElement("ul");
                e2.classList.add("edu2");
             for(k in education[i].college){
               var e3=document.createElement("li");
               e3.classList.add("edu3");
               e3.textContent=education[i].college[k];
               e2.appendChild(e3);
               e1.appendChild(e2);
               r2.appendChild(e1);
             }
           }
           right.appendChild(r2);
           // r2.appendChild(document.createElement("HR"));
// console.log(r2);
}
//r2-education completed

//r3 starting
var r3=document.createElement("div");
r3.classList.add("interest");
r3.textContent="Hobbies :";
r3.appendChild(document.createElement("HR"));

//function calling
function interest(interest){

  var ul = document.createElement("ul");
     ul.classList.add("inte");
     for(k in interest){
        var li = document.createElement("li");
        li.textContent = interest[k].inte;
         ul.appendChild(li);
     }
    r3.appendChild(ul);
    right.appendChild(r3);
    // r3.appendChild(document.createElement("HR"));
    // console.log(r3);
}
//r3 completed

//r4 starting
var r4=document.createElement("div");
r4.classList.add("Languages");

 var h1=document.createElement("div");
 h1.setAttribute("id", "Language");
 h1.textContent="Languages Known :";
 h1.appendChild(document.createElement("HR"));
 //function calling
  function lang(Languages){
    var ul = document.createElement("ul");
       ul.classList.add("lang");
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
 left.classList.add("left");

//l1 starting
var l1=document.createElement("div");
l1.classList.add("carrier");
//function starting
function carrier(carrier){
  var h2=document.createElement("h2")
  h2.setAttribute("id", "carrier-title");
  h2.textContent="Career Objective:";
  h2.appendChild(document.createElement("HR"))

   var para =document.createElement("p");
   para.classList.add("carr");
   para.textContent=carrier.carr;
   l1.appendChild(h2);
   l1.appendChild(para);
   left.appendChild(l1);

   console.log(main);
}//function ending
//l1 ending

//l2 starting
var l2=document.createElement("div");
l2.classList.add("experience");

var h2=document.createElement("h2")
h2.setAttribute("id", "experience-title");
h2.textContent="Experiences";
h2.appendChild(document.createElement("HR"))
l2.appendChild(h2);

 //function starting
function experience(experience){
  for(i in experience){
    var ex1 =document.createElement("div");
    ex1.classList.add("organisation");
    ex1.textContent=experience[i].organisation;
    l2.appendChild(ex1);
    var ex2 =document.createElement("div");
    ex2.classList.add("location");
    ex2.textContent=experience[i].location;
    l2.appendChild(ex2);
    var ex3 =document.createElement("p");
    ex3.classList.add("desc");
    ex3.textContent=experience[i].desc;
    l2.appendChild(ex3);
  }
  left.appendChild(l2);

// console.log(l2);
}
//l2 ending
// l3 starting
var l3=document.createElement("div");
l3.classList.add("Tech-skills");

function skills(technicalskils){
 var skills=document.createElement("div");
 skills.classList.add("skills");
 var h2=document.createElement("h2");
 h2.textContent="Technical Skills :";
 var h4=document.createElement("h4");
 h4.textContent="Operating Systems";
 var p=document.createElement("p");
 p.textContent=technicalskils.os;
 skills.appendChild(h2);
 skills.appendChild(document.createElement("HR"))
 skills.appendChild(h4);
 skills.appendChild(p);
 var h4=document.createElement("h4");
 h4.textContent="Languages";
 var p=document.createElement("p");
 p.textContent=technicalskils.lang;
 skills.appendChild(h4);
 skills.appendChild(p);
 var h4=document.createElement("h4");
 h4.textContent="Tools";
 var p=document.createElement("p");
 p.textContent=technicalskils.tools;
 skills.appendChild(h4);
 skills.appendChild(p);
 l2.appendChild(skills);
 l3.appendChild(skills);
 left.appendChild(l3);

 }
 //l3 ending
//l4 starting
var l4=document.createElement("div");
l4.classList.add("Acheivements");
l4.textContent="Acheivements";
l4.appendChild(document.createElement("HR"))

function Acheivements(Acheivements){
var h1=document.createElement("div");
h1.classList.add("Ache1");
  var ul=document.createElement("ul");
  ul.classList.add("Ache2");
  for(i in Acheivements){
    var li=document.createElement("li");
    li.classList.add("Ache-li");
    li.textContent=Acheivements[i];
    ul.appendChild(li);
  }
  h1.appendChild(ul);
  l4.appendChild(h1);
  left.appendChild(l4);
}
// console.log(l4);
//l4 ending

//l5 starting
var l5=document.createElement("div");
l5.classList.add("Declaration");

var h2=document.createElement("div");
h2.setAttribute("id","desc-title");
h2.textContent="Declaration";
h2.appendChild(document.createElement("HR"))

//function starting
function declaration(Declaration){
  var para =document.createElement("p");
  para.setAttribute("id","desc");
  para.textContent=Declaration.decl;
  h2.appendChild(para);
  l5.appendChild(h2);
  left.appendChild(l5);
}
console.log(l5);
//l5 ending
main.appendChild(right);
main.appendChild(left);
})();
//
// // var h1=document.createElement("h1");
// // h1.setAttribute("id", "name");
