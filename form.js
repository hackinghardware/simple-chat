function sendmessage(){
    var message = document.getElementById("messagebox").value;
    var chatbox = document.getElementById("chatbox");
    var li = document.createElement("li");
    li.setAttribute("class", "comment author-comment");
    var info = document.createElement("div");
    info.setAttribute("class", "message-info");
    var name = document.createElement('a')

    name.appendChild(document.createTextNode("KorKux"));

    info.appendChild(name);
    var time = document.createElement("span")
    time.appendChild(document.createTextNode("Hace unos segundos"))
    info.appendChild(time);

    var avatar = document.createElement("a");
    avatar.innerHTML = '<img src="img/avatar.png" alt="User Avatar" title="KorKux">'
    avatar.setAttribute("class", "avatar");

    var p = document.createElement("p");
    p.innerHTML = message


    li.appendChild(info);
    li.appendChild(avatar);
    li.appendChild(p);

    chatbox.appendChild(li);

    
   // '<div class="message-info"><a href="#">KorKux</a><span>Hace 2 horas</span></div><a class="avatar" href="#"><img src="img/avatar.png" alt="User Avatar" title="KorKux"></a><p>'+messagebox.textContent+'</p>'

}


