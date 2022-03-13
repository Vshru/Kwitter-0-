
var firebaseConfig = {
      apiKey: "AIzaSyCffKt5zpfQEyqmXXFGLTzY2B-zR-k1SL8",
      authDomain: "social-website-2.firebaseapp.com",
      databaseURL: "https://social-website-2-default-rtdb.firebaseio.com",
      projectId: "social-website-2",
      storageBucket: "social-website-2.appspot.com",
      messagingSenderId: "711902133425",
      appId: "1:711902133425:web:984b8ca6fb778b8b47f690"
    };
    
    
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name -"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_room.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
    
}