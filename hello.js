function newEnquiry() {

    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    var trLength = tr.length;

    var row = table.insertRow(trLength);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var enqNum = document.getElementById("Enquiry no.").value;
    cell1.innerHTML=enqNum;

    var enqDt = document.getElementById("Enquiry Date").value;
    cell2.innerHTML=enqDt;
    
    var clientName = document.getElementById("Client Name").value;
    cell3.innerHTML=clientName;
    

}


