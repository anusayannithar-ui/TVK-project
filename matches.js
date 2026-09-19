//------matches---------

const matches = document.querySelector("#matches");

//get
fetch("/matches")
  .then(
    response =>
    {return response.json()}
)
  .then(data =>
  {
    console.log(data)
    data.forEach(match => {
      //section
      if (match.winner == "") {
        const new_section_upcoming = document.querySelector(".upcoming-matches");
        //new_section.classList.add("upcoming-matches");
        

        //main_div

        const main_div = document.createElement("div");
        main_div.classList.add("match-card")
        new_section_upcoming.append(main_div);
       

        main_div.addEventListener("click", function () {
          
         main_div.classList.toggle("selected-matches")
        })

        //sub_div1

        const sub_div1 = document.createElement("div");
        sub_div1.classList.add("match-teams");
        main_div.append(sub_div1);


        //sub_div2
        const sub_div2 = document.createElement("div");
        main_div.append(sub_div2);

        //h2

        const h2_1 = document.createElement("h2");
        const h2_2 = document.createElement("h2");
        sub_div1.append(h2_1)
        h2_1.append(match.match_teamA)
        h2_2.append(match.match_teamB)
          

          
          

        
          


      
      
        //span
      
        const span = document.createElement("span");
        span.append("VS")
        sub_div1.append(span)
        sub_div1.append(h2_2);
       



        //ul

        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");

        sub_div2.append(ul);
        ul.append(li1)
        ul.append(li2)
        ul.append(li3)

        //li_div

        const li_div1 = document.createElement("div");
        const li_div2 = document.createElement("div");
        const li_div3 = document.createElement("div");

        li_div2.classList.add("captains")
        li_div3.classList.add("sponsor")

        li1.append(li_div1)
        li2.append(li_div2)
        li3.append(li_div3)
      

        //li_div_p
        const li_div_p1 = document.createElement("p");
        li_div_p1.classList.add("place")
        //const li_div_p2 = document.createElement("p");
        //li_div_p2.classList.add("winner")
        const li_div_p3 = document.createElement("p");
        li_div_p3.classList.add("time")
        const li_div_p4 = document.createElement("p");
        li_div_p4.classList.add("toss")
        const li_div_p5 = document.createElement("p");
        li_div_p5.classList.add("date")



        li_div1.append(li_div_p1)
        //li_div1.append(li_div_p2)
        li_div1.append(li_div_p3)
        li_div1.append(li_div_p4)
        li_div1.append(li_div_p5)
        li_div_p1.append(match.avenue)
        li_div_p3.append(match.match_time)
        li_div_p4.append(match.toss_time)
        li_div_p5.append(match.date)

        const captainA = document.createElement("p");
        captainA.textContent = match.match_teamA + " : " + match.teamA_captain;

       const captainB = document.createElement("p");
       captainB.textContent = match.match_teamB + " : " + match.teamB_captain;

       li_div2.append(captainA);
       li_div2.append(captainB);
        li_div3.append("Sponsor : "+match.sponsor)
          
          
          

          


        

      }

      else {
        const new_section_recent = document.querySelector(".recent-results");
        //new_section.classList.add("upcoming-matches");
     

        //main_div

        const main_div = document.createElement("div");
        main_div.classList.add("match-card")
        new_section_recent.append(main_div);

        main_div.addEventListener("click", function () {
         
         main_div.classList.toggle("selected-matches")
        })


        //sub_div1

        const sub_div1 = document.createElement("div");
        sub_div1.classList.add("match-teams");
        main_div.append(sub_div1);


        //sub_div2
        const sub_div2 = document.createElement("div");
        main_div.append(sub_div2);

        //h2

        const h2_1 = document.createElement("h2");
        const h2_2 = document.createElement("h2");
        sub_div1.append(h2_1)
        h2_1.append(match.match_teamA)
        h2_2.append(match.match_teamB)
      
      
      
        //span
      
        const span = document.createElement("span");
        span.append("VS");
        sub_div1.append(span);
        sub_div1.append(h2_2);
        



        //ul

        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");

        sub_div2.append(ul);
        ul.append(li1)
        ul.append(li2)
        ul.append(li3)

        //li_div

        const li_div1 = document.createElement("div");
        const li_div2 = document.createElement("div");
        const li_div3 = document.createElement("div");

        li_div2.classList.add("captains")
        li_div3.classList.add("sponsor")

        li1.append(li_div1)
        li2.append(li_div2)
        li3.append(li_div3)
      

        //li_div_p
        const li_div_p1 = document.createElement("p");
        li_div_p1.classList.add("place")
        const li_div_p2 = document.createElement("p");
        li_div_p2.classList.add("winner")
        const li_div_p3 = document.createElement("p");
        li_div_p3.classList.add("time")
        const li_div_p4 = document.createElement("p");
        li_div_p4.classList.add("toss")
        const li_div_p5 = document.createElement("p");
        li_div_p5.classList.add("date")



        li_div1.append(li_div_p1)
        li_div1.append(li_div_p2)
        li_div1.append(li_div_p3)
        li_div1.append(li_div_p4)
        li_div1.append(li_div_p5)
          


        li_div_p1.append(match.avenue)
        li_div_p2.append(match.winner)
        li_div_p3.append(match.match_time)
        li_div_p4.append(match.toss_time)
        li_div_p5.append(match.date)

        const captainA = document.createElement("p");
       captainA.textContent = match.match_teamA + " : " + match.teamA_captain;

       const captainB = document.createElement("p");
       captainB.textContent = match.match_teamB + " : " + match.teamB_captain;

       li_div2.append(captainA);
       li_div2.append(captainB);
        li_div3.append("Sponsor : "+match.sponsor)
          
      }

      
      


       


      









      





      
      
    })
  }
)
  









  
  
