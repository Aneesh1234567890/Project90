function add_user(){
    p1_name=document.getElementById("p1_name_input").value ;
    p2_name=document.getElementById("p2_name_input").value ;
    localStorage.setItem("p1_name",p1_name);
    localStorage.setItem("p2_name",p2_name);
    window.location="game_page.html";
}