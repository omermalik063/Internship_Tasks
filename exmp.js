function IsEmail() {
    var email = document.getElementById("eml").value;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function Isnum() {
    var p = document.getElementById("num").value;
    if(!p.match(/^\d+/))
        {
         return false;
        }
        else 
          return true;
}
function IsPnum() {
    var p = document.getElementById("pnum").value;
    if(!p.match(/^([0-9+])+/))
        {
         return false;
        }
        else 
          return true;
}
function checkall() {
  var e = IsEmail();
  var n = Isnum();
  var p = IsPnum();
  if(e==true && n==true && p==true)
  { alert("All Correct"); }
    else if(e==false && n==false && p==false)
    { alert("All Incorrect"); document.getElementById('eml').value = ""; document.getElementById('num').value = ""; document.getElementById('pnum').value = ""; }
      else if(e==true && n==false && p==false)
        { alert("Correct Email Only"); document.getElementById('num').value = ""; document.getElementById('pnum').value = ""; }
        else if(e==false && n==true && p==false)
          { alert("Correct Number only");  document.getElementById('eml').value = ""; document.getElementById('pnum').value = ""; }
          else if(e==false && n==false && p==true)
            { alert("Correct Phone Number Only"); document.getElementById('eml').value = ""; document.getElementById('num').value = ""; }
            else if(e==false && n==true && p==true)
              { alert("Correct Number and Phone Number"); document.getElementById('eml').value = ""; }
              else if(e==true && n==true && p==false)
                { alert("Correct Email and Number"); document.getElementById('pnum').value = ""; } 
                else if(e==true && n==false && p==true)
                  { alert("Correct Email and Phone Number"); document.getElementById('num').value = ""; }
  }