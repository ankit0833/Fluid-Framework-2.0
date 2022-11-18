/**
* register
*/

class register extends HTMLElement{
  constructor() {
    super(); 
    let register_btn = this.querySelector(".custom_check[register-btn]");
    
    if(register_btn!= null){
      this.datasubmit(register_btn);
    }
  }  

  datasubmit(register_btn){
    register_btn.addEventListener("click", (event)=>{
      event.preventDefault();
      let first_name = this.querySelector("[data-first-name]").value;
      let last_name = this.querySelector("[data-last-name]").value;
      let email = this.querySelector("[data-email]").value;
      let password = this.querySelector("[data-password]").value;
      let confirm_password = this.querySelector("[data-confirm-password]").value;
      var error_message1 = this.querySelector("[error_message1]");
      var error_message2 = this.querySelector("[error_message2]");
      var error_message3 = this.querySelector("[error_message3]");
      var error_message4 = this.querySelector("[error_message4]");
      var error_message5 = this.querySelector("[error_message5]");
      

      var letters = /^[A-Za-z]+$/;
      var err1;
      var err2; 
      var err3; 
      var err4;
      var err5;
      
      if(first_name=="" || first_name.length < 3 ){
        err1 = "Invalid First Name";
        error_message1.innerHTML=err1;
      }else{
        error_message1.innerHTML="";
      } 
      
      if(last_name=="" || last_name.length < 3 ){
        err2 = "Invalid Last Name";
        error_message2.innerHTML=err2;
      }else{
        error_message2.innerHTML="";
      } 
      
      if(email==""){
        err3 = "Invalid Email";
        error_message3.innerHTML=err3;
      }else{
        error_message3.innerHTML="";
      } 
      
      if(password=="" || password.length < 5){
        err4 = "Invalid password";
        error_message4.innerHTML=err4;
      }else{
        error_message4.innerHTML="";
      }
      
      if(confirm_password=="" || confirm_password.length < 5){
        err5 = "Invalid confirm password";
        error_message5.innerHTML=err5;
      }else{
        error_message5.innerHTML="";
      }
      
    })
  }
  
  
}

customElements.define('custom-register', register);



class login extends HTMLElement{
    constructor() {
             super(); 
             let login_btn = this.querySelector("[login-btn]");
             login_btn.addEventListener("click", (event)=>{

             let email = this.querySelector("[data-login-email]").value;
             let password = this.querySelector("[data-login-password]").value;
             var error_message6 = this.querySelector("[error_message6]");
             var error_message7 = this.querySelector("[error_message7]");
             var err6;
             var err7; 
             var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

             if(email==""){
                err6 = "Invalid Email";
                 error_message6.innerHTML=err6;
             }else{
                error_message6.innerHTML="";
             } 

             if(password=="" || password.length < 5){
                err7 = "Invalid password";
                error_message7.innerHTML=err7;
             }else{
                error_message7.innerHTML="";
             }

        })
    }   
 }

 customElements.define('custom-login', login);