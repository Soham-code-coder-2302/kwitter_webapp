
var firebaseConfig = {
      apiKey: "AIzaSyBSl-vhDCSsDZKQ3RWl2FXlP2ZJ_dwEMGw",
      authDomain: "kwitter-f8e4d.firebaseapp.com",
      databaseURL: "https://kwitter-f8e4d.firebaseio.com",
      projectId: "kwitter-f8e4d",
      storageBucket: "kwitter-f8e4d.appspot.com",
      messagingSenderId: "577876366648",
      appId: "1:577876366648:web:c4a1e5598e50c459399dcd"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
var user_name=localStorage.getItem("User Name")
document.getElementById("user_name").innerHTML="Welcome "+user_name; 

function add_room(){
room_name=document.getElementById("room_name").value;
localStorage.setItem("Room Name",room_name);

firebase.database().ref("/").child(room_name).update({
purpose : " adding room name"
});
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
row="<div id="+Room_names+" class='room_name' onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("User Name");
window.location="index.html";
}
