function loadUtama(){
    document.getElementById("utama").style.display = "block";
    document.getElementById("aduan_kes").style.display = "none";
    document.getElementById("pelaporan_bertulis").style.display = "none";
    document.getElementById("pengadu").style.display = "none";
    document.getElementById("pelaku").style.display = "none";

    document.getElementById("tab1").className = "active";
    document.getElementById("tab2").className = "tablinks";
    document.getElementById("tab3").className = "tablinks";
    document.getElementById("tab4").className = "tablinks";
    document.getElementById("tab5").className = "tablinks";
}

function loadAduan(){
    document.getElementById("utama").style.display = "none";
    document.getElementById("pengadu").style.display = "none";
    document.getElementById("aduan_kes").style.display = "block";
    document.getElementById("pelaporan_bertulis").style.display = "none";
    document.getElementById("pelaku").style.display = "none";

    document.getElementById("tab1").className = "tablinks";
    document.getElementById("tab2").className = "active";
    document.getElementById("tab3").className = "tablinks";
    document.getElementById("tab4").className = "tablinks";
    document.getElementById("tab5").className = "tablinks";
}


function loadPengadu(){
    document.getElementById("aduan_kes").style.display = "none";
    document.getElementById("utama").style.display = "none";
    document.getElementById("pelaku").style.display = "none";
    document.getElementById("pengadu").style.display = "block";
    document.getElementById("pelaporan_bertulis").style.display = "none";

    document.getElementById("tab1").className = "tablinks";
    document.getElementById("tab2").className = "tablinks";
    document.getElementById("tab3").className = "active";
    document.getElementById("tab4").className = "tablinks";
    document.getElementById("tab5").className = "tablinks";
}

function loadPelaku(){
    document.getElementById("aduan_kes").style.display = "none";
    document.getElementById("utama").style.display = "none";
    document.getElementById("pelaku").style.display = "block";
    document.getElementById("pengadu").style.display = "none";
    document.getElementById("pelaporan_bertulis").style.display = "none";

    document.getElementById("tab1").className = "tablinks";
    document.getElementById("tab2").className = "tablinks";
    document.getElementById("tab3").className = "tablinks";
    document.getElementById("tab4").className = "active";
    document.getElementById("tab5").className = "tablinks";
}

function loadLaporanBertulis(){
    document.getElementById("aduan_kes").style.display = "none";
    document.getElementById("utama").style.display = "none";
    document.getElementById("pelaku").style.display = "none";
    document.getElementById("pengadu").style.display = "none";
    document.getElementById("pelaporan_bertulis").style.display = "block";

    document.getElementById("tab1").className = "tablinks";
    document.getElementById("tab2").className = "tablinks";
    document.getElementById("tab3").className = "tablinks";
    document.getElementById("tab4").className = "tablinks";
    document.getElementById("tab5").className = "active";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav2").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "200px";
    document.getElementById("mySidenav").style.width = "0";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav2").style.width = "0";
}

function logOut(){
    localStorage.removeItem("no_ic"); 
    window.location.href = "index.html";
}


    var db = new PouchDB('luas');

    db.allDocs({
        include_docs: true,
        attachments: true
    }).then(function (result) {

        //console.log(result.total_rows);
        //console.log(result);
        //console.log(result.rows);
        //console.log(result.rows[0].doc);

        if(result.total_rows>0){

            var badge = document.createElement("SPAN");
            badge.className = 'badge';
            badge.innerHTML = result.total_rows;
            document.getElementById("noti_badge").appendChild(badge);

            for(var i=0;i<result.total_rows;i++){

                var div = document.createElement('div');
                var br = document.createElement('br');
                div.className = 'status_container';
                div.innerHTML = "<table style='width: 100%;text-align: center;'>" +
                "<tr> <td style='width: 33%;text-align: center;'> <img style='height: 60px; width: 60px;' src='img/avatar.png'> </td>" +
                "<td style='width: 33%;text-align: center;'> <label style='background-color: orange;color: white; float: right;width:60px; border-radius: 20%;'>Pending</label> </td>" +
                "<td style='width: 33%;text-align: right;'> "+ result.rows[i].doc.current_date +" </td> </table>" +
    
                "<b>No. Fail Rujukan: </b> "+ result.rows[i].doc._id +
                "<br> <b>Tajuk: </b> "+ result.rows[i].doc.utama_tajuk + 
                "<br> <b>Kategori: </b> "+ result.rows[i].doc.kategori_laporan + 
                "<br> <b>Sumber Air: </b> " + result.rows[i].doc.sumber_air + 
    
                "<br><br> <table style='width: 100%;text-align: center;color: #2E86C1;'>" +
                "<tr> <td style='width: 33%;'> <a href='javascript:void(0)' onclick='deleteDB(`"+ result.rows[i].doc._id +"`)'> <i class='far fa-trash-alt'></i> PADAM </a></td>" +
                "<td style='width: 33%;'> <i class='far fa-edit'></i> <a href='edit_report.html?a="+ result.rows[i].doc._id +"'>EDIT </a> </td>" +
                "<td style='width: 33%;'> <i class='far fa-paper-plane'></i> <a href='send_report.html?a="+ result.rows[i].doc._id +"'>HANTAR </a> </td> </tr> </table>";
    
                document.getElementById("container").appendChild(div);
                document.getElementById("container").appendChild(br);

                var lab = document.createElement("LABEL");

                lab.innerHTML = "<label>"+ result.rows[i].doc._id +"<br>"+ result.rows[i].doc.current_date +"</label> <label style='background-color: orange;color: white; float: right;'>Pending</label> <hr>";
                document.getElementById("noti_list").appendChild(lab);

                
            }
        }

        else{
            var para = document.createElement("P");
            var text = document.createTextNode("Tiada rekod.");

            para.appendChild(text);
            document.getElementById("container").appendChild(para);
        }
    
    }).catch(function (err) { console.log(err); });


    // db.get("CD-Project-114").then(function (doc) {
    //     console.log(doc.sumber_air);
    //     console.log(doc);
    // });

function deleteDB(params_id){

    if (confirm('Are you sure you want to delete this report?')) {
        
        db.get(params_id).then(function (doc) {
            console.log(doc);
            return db.remove(doc);
        });

        setTimeout(function(){ 
            location.reload();
        }, 100);
    } 
    
    else {
        alert('Data was not deleted from the database.');
    }

}




  
  






