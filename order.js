function display() {


  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')

  message = "<p>Your form has been submitted! </p>"

  message += "<b>Name: </b>" + document.form1.salutation.value +" "+ document.form1.yourname.value;
  message += "<p><b>Address: </b>" + document.form1.address.value;
  message += "<p><b>Phone: </b>" + document.form1.phone.value;

  DispWin.document.write(message);
}