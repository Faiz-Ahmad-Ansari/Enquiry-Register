function newEnquiry() {

    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    var trLength = tr.length;

    var row = table.insertRow(trLength);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var enqNum = document.getElementById("Enquiry no.").value;
    cell1.innerHTML=enqNum;

    var enqDt = document.getElementById("Enquiry Date").value;
    var enqDate = enqDt.substr(8,2);
    var enqMonth = enqDt.substr(5,2);
    var enqYear = enqDt.substr(0,4);
    var enqDateInput = enqDate + "/" + enqMonth + "/" + enqYear ;

    cell2.innerHTML=enqDateInput;
    
    var clientName = document.getElementById("Client Name").value;
    cell3.innerHTML=clientName;

    var dueDt = document.getElementById("Due Date").value;
    var dDate = dueDt.substr(8,2);
    var dMonth = dueDt.substr(5,2);
    var dYear = dueDt.substr(0,4);
    var dueDate = dDate + "/" + dMonth + "/" + dYear ;
    cell4.innerHTML=dueDate;

//}

// For highlight row as per todays date
    var fullDate = new Date();

    var date = fullDate.getDate();
    var month = fullDate.getMonth()+1;
    var year = fullDate.getFullYear();
    
    if (date<10) {
        var myDate = "0"+date; 
    }else{
        var myDate = date; 
    }

    if (month<10) {
        var myMonth = "0"+month;
    }else{
        var myMonth = month;
    }
    
    var myDate1 = myDate + "/" + myMonth + "/" + year ;
    
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
 
    for (i=0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.innerText;
        
                if (txtValue == myDate1) {
                    tr[i].style.backgroundColor="yellow";    
                }
        }
    }
    document.getElementById("myForm").style.display="none";
}

  // For highlight row as per todays date
  var fullDate = new Date();

  var date = fullDate.getDate();
  var month = fullDate.getMonth()+1;
  var year = fullDate.getFullYear();
  
  if (date<10) {
      var myDate = "0"+date; 
  }else{
      var myDate = date; 
  }

  if (month<10) {
      var myMonth = "0"+month;
  }else{
      var myMonth = month;
  }
  
  var myDate1 = myDate + "/" + myMonth + "/" + year ;
  
  var table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");

  for (i=0; i < tr.length; i++){
      td = tr[i].getElementsByTagName("td")[3];
          if (td) {
              txtValue = td.innerText;
      
              if (txtValue == myDate1) {
                  tr[i].style.backgroundColor="yellow";    
              }
      }
  }
//open form button
function openForm() {
    document.getElementById("myForm").style.display="block";
}