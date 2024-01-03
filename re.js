
    function submit(){
      var radio = document.querySelectorAll(".radio:checked")
        var yes =0;
        var No =0;
        radio.forEach(function(r)
        {
                  if( r.value=="yes")
                  {
                    yes++;
                  }
                  else 
                  {
                    No++;
                  }
        })
        window.alert(`The answers with yes = ${yes++} the answers with no = ${No++}`);
        }
