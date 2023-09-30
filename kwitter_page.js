//YOUR FIREBASE LINKS
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
var username=localStorage.getItem("username");
var room_name=localStorage.getItem("store_room");
function send()
{
      var inp=document.getElementById("in").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:inp,
            like:0
      });
      document.getElementById("in").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
var messagename=message_data["message"];
var like=message_data["like"];
var nameuser=message_data["name"];
var nametag="<h4>"+nameuser+"<img class='user_tick' src='tick.png'></h4>";
var messagertag="<h4 class='message_h4'>"+messagename+"</h4>";
var liketag="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'>"
var spantag="<span class='glyphicon glyphicon-thumbs-up'>:"+like+"</span></button><hr>";
var row=nametag+messagertag+liketag+spantag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updatelike(messageid)
{
      var fetchlike=document.getElementById(messageid).value;
      var updatedlikes=Number(fetchlike)+1;
      firebase.database().ref(room_name).child(messageid).update({
            like:updatedlikes
      });
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("store_room");
      window.location="index.html";
}
function back()
{
      window.location="kwitter_room.html";
}