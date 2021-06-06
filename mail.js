function checkEmail(prénom)
{
  var atPos = prénom.value.indexOf('@');
  var lastDotPos = prénom.value.lastIndexOf('.');
  if (atPos != -1 && atPos < lastDotPos && lastDotPos < prénom.value.length-1 && lastDotPos-atPos > 1)
    {
      prénom.style.color = "green";
      return true;
    }
  else
  {
  prénom.style.color = "red";
  return false;
  }
}

function conditions()
{
  if ( Email.style.color == "red")
  {
    alert("Veuillez entrez un Email valide");
  }
  else if (prénom.value=="")
  {
    alert ("Veuiller entrez un prénom");
  }
  else
  {
  alert("votre formulaire a bien été envoyer, merci");
  }
}
