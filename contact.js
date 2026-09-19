//----------contact----------//


const contact_form = document.querySelector("#contact-form")

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const address = document.querySelector("#address")
const desc = document.querySelector("#desc");


const submit_btn = document.querySelector(".submit-btn")


contact_form.addEventListener("submit", function (event) {


  console.log("successfully sent");

  

  event.preventDefault();

  const name_val = name.value;
  const email_val = email.value;
  const age_val = age.value;
  const address_val = address.value;
  const desc_val = desc.value;
 
  const contact_form_data = {
    name: name_val,
    email: email_val,
    age: age_val,
    address: address_val,
    desc:desc_val

  }
  fetch("/contact-forms", {
    method: "post",
    headers:
      { "Content-Type": "application/json"
    
      },
    body : JSON.stringify(contact_form_data)
    
  })
    .then(success => {
      if (success.ok) {
        console.log("form submission is successful");

        name.value = "";
        email.value = "";
        age.value = "";
        address.value = "";
        desc.value = "";
 

      }
      else{
        console.log("Error");
        
 
      }
    }
     
   )
  



  }
  
);
