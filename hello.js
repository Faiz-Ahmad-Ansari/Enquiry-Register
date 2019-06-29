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
    console.log(enqDt);
    cell2.innerHTML=enqDt;
    
    var clientName = document.getElementById("Client Name").value;
    cell3.innerHTML=clientName;

    var dueDate = document.getElementById("Due Date").value;
    cell4.innerHTML=dueDate;

}

// For highlight row as per todays date
    var fullDate = new Date();

    var date = fullDate.getDate();
    var month = fullDate.toISOString().substr(5,2);
    var year = fullDate.getFullYear();

    var myDate = date + "/" + month + "/" + year ;
    
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
 
    for (i=0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.innerText;
             //   console.log(td);
        
                if (txtValue == myDate) {
                    tr[i].style.backgroundColor="yellow";    
                }
        }
    }        
