const firebaseConfig = {
    apiKey: "AIzaSyBgVU5Dvtwi26xEodaU1PNCfIVXaN8GiRM",
    authDomain: "kwitter-7a7a0.firebaseapp.com",
    databaseURL: "https://kwitter-7a7a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-7a7a0",
    storageBucket: "kwitter-7a7a0.appspot.com",
    messagingSenderId: "3435391347",
    appId: "1:3435391347:web:5a7af430645cec5d6afd06"
  };
  
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var store_user=localStorage.getItem("username");
var store_room;
document.getElementById("user_display").innerHTML="Welcome "+store_user+"!!";
function createroom()
{
      store_room=document.getElementById("addroom").value;
      firebase.database().ref().child(store_room).update({
      purpose:"adding room name"
      });
      localStorage.setItem("store_room", store_room);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      var room_name=childKey;
      var  row="<div class='room_name' id='"+room_name+"' onclick='redirectroom(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectroom(name)
{
      localStorage.setItem("store_room", name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("store_room");
      window.location="index.html";
}