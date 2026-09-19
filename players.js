//TVK   javascript   //
//connected with API //



//---------Players----------//
const players = document.querySelector("#players-container");
//document.getElementById("players-container");

fetch("/players")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(player => {
            //div
            const new_div = document.createElement("div");
            console.log(player);
            
            
            
            players.append(new_div)
            new_div.classList.add("player-card")
             //heading
            const new_heading = document.createElement("h3");
            new_heading.textContent = player.name;
            new_div.append(new_heading)
            //para
            const new_paragraph = document.createElement("p");
            new_paragraph.textContent = player.role;
            
            new_div.append(new_paragraph);
            //img
            const new_img = document.createElement("img");
            new_img.classList.add("player-image")
            new_img.src = player.image;
            new_img.alt= "image of a player"
            new_div.append(new_img);
            let new_paragraph_id = null;


            new_div.addEventListener("click", function () {
        

              if (new_paragraph_id === null) {
                new_paragraph_id = document.createElement("p");
                new_paragraph_id.textContent = player.id;
                new_div.append(new_paragraph_id);
              }
              else {
                new_paragraph_id.remove();
                new_paragraph_id = null;
              }

             new_div.classList.toggle("selected");
            });
            
           


        
            
          
        
        
        
        });
});



