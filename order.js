function order() {
  var n = "Name: "+document.form1.salutation.value+" "+form1.name.value;
  var ad = "Address: "+document.form1.address.value;
  var ph = "Phone: "+document.form1.phone.value;
  var d = "Date: "+document.form1.date.value;

  document.getElementById("name").innerHTML = n;
  document.getElementById("add").innerHTML = ad;
  document.getElementById("phone").innerHTML = ph;
  document.getElementById("date").innerHTML = d;

  

}

