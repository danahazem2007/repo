function signuploction (){
  location.href="#formsignup"
}
function signinloction (){
  location.href="#formsignin"
}
function signinloction1 (){
  location.href="Re.html"
}
function forgetloction (){
  location.href="#formsignup"
}

var login_Users = [ { 
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890" 
  }, 
  { 
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210" 
  } 
];
  
  function signup() {

            var Username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var Age = document.getElementById('age').value;
            var Phonenumber = document.getElementById('phonenumber').value;
            var radio = document.getElementById('.radio').value;
            var formsignup = document.getElementById("formsignup").value
            var patarn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

           
         for(var i=0; i<login_Users.length;i++){
         if(login_Users[i].username ==Username){
            window. alert("enter unq user name");
            return false;
      }

}
            if (!patarn.test(password)) {
                window. alert(" Password  composed of char and integers and less than 8 characters ");
                return false;
            }
            else if(age <18 || age>=60){
            window.alert("Age is in between 18 and 60");
            return true;
         }

            else if(Phonenumber.length >11 &&Phonenumber.length<11 )
           {
                window.alert("Phone Number is 11");
                 return false;

            }
            else{
                login_Users.push({Username,password,Age,Phonenumber,radio});
                window.alert('successful!');
                console.log( login_Users);
            }
           
        }
    
          function signin()   {
         var Username=document.getElementById("username").value;
         var password=document.getElementById("password").value;
         var form = document.getElementById('formsignin').value;
        for(i=0; i<login_Users.length ;i++)
          {
            if(login_Users[i].username===Username && login_Users[i].pass===password)
            {
               window. alert("signin Successfully");
               window.location.href=("Re.html");
                return true;
        
        }
        else{
          window.alert("signin failed!");
          return false;
        }
        }
          }
          
          function forget()
          {
            var Username = document.getElementById('username').value;
            var Password = document.getElementById('password').value;
            for(var i=0; i<login_Users.length;i++)
            {
                      if(login_Users[i].username==Username)
                      {
                        login_Users[i].pass== Password;
                        window.alert("update is done");
                        return true;
                      }
                      else
                      {
                        window.alert("chack username");  
                        return false;
                      }
            }



          }

       