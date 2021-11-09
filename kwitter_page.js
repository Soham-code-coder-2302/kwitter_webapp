//YOUR FIREBASE LINKS
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
    
    var user_name=localStorage.getItem("User Name");
    var room_name=localStorage.getItem("Room Name");

    function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
var name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
var like_button="<button class='btn btn-warning' value="+like+" id="+firebase_message_id+" onclick='update_like(this.id)'>";
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
var row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function update_like(message_id){
console.log("clicked on like button"+message_id);
var button_id=message_id;
var likes=document.getElementById(button_id).value;
var update_likes=Number(likes)+1;
console.log(update_like);
firebase.database().ref(room_name).child(message_id).update({
like: update_likes
});
}

function logout(){
localStorage.removeItem("User Name");
localStorage.removeItem("room_name");
window.location="index.html";
}