function adduser()
{
    var username=document.getElementById("input_name").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
}