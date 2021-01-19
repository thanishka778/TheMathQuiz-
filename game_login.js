function login(){
    player1_name=document.getElementById("input_player_one").value;
    player2_name=document.getElementById("input_player_two").value;
    
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    window.location="quiz_page.html";
    }
