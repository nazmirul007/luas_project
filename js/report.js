window.onload = function(){
  // loadAPI_Report_all();

  onlineCheck();

  loadAPI_Bahagian();
  loadAPI_Unit();
  loadAPI_KategoriLaporan();

  table = $('#table_report').DataTable({
  paging: true
  });
}

var baseUrl_Report_all = "http://175.136.253.77:8181/api/report/all";


function onlineCheck(){

  var x = navigator.onLine;

  if(navigator.onLine === false){
    document.getElementById("alert").style.display = "block";
  } 
}


function displayTable(){

  //$("#report_table_body tr").remove();

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_Report_all ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

          var kategori_laporan = document.getElementById("utama_kategori").value;
          var utama_bahagian = document.getElementById("utama_bahagian").value;
          var utama_unit = document.getElementById("utama_unit").value;

          document.getElementById("report_content").innerHTML = "";
          document.getElementById("report_content").innerHTML = "<table id='table_report'> <thead style='text-align: center;'> <tr> <th>Kategori Laporan</th> <th>Bahagian</th> <th>Unit</th> <th>No.<br>Rujukan</th> <th>Lawatan Tapak</th> <th>Tarikh Mula</th> <th>Tarikh Akhir</th> <th>Papar PDF</th> </tr> </thead> <tbody id='report_table_body'>  </tbody> </table>";

          var report_all_api = JSON.parse(xmlhttp.responseText);

          var report_all="";

          for (var i=0; i<report_all_api.length; i++) {
            
              if(report_all_api[i].tarikh_mula != null && report_all_api[i].tarikh_akhir != null && report_all_api[i].bahagian != null && report_all_api[i].unit != null){

                var time_date1 = report_all_api[i].tarikh_mula.split(" ");
                var time_date2 = time_date1[0];
                var dArr = time_date2.split("-");
                var date_start = dArr[2]+ "/" +dArr[1]+ "/" +dArr[0];

                var time_dateA = report_all_api[i].tarikh_akhir.split(" ");
                var time_dateB = time_dateA[0];
                var dArr2 = time_dateB.split("-");
                var date_end = dArr2[2]+ "/" +dArr2[1]+ "/" +dArr2[0];

                  if(report_all_api[i].kategori_laporan === kategori_laporan && report_all_api[i].id_bahagian == utama_bahagian && report_all_api[i].id_unit == utama_unit)
                  {
                      report_all += "<tr> <td>"+ report_all_api[i].kategori_laporan +"</td> <td>"+ report_all_api[i].bahagian.bahagian +"</td> <td>"+ report_all_api[i].unit.unit +"</td> <td>"+ report_all_api[i].no_rujukan +"</td> <td>"+ report_all_api[i].lawatan_tapak +"</td> <td>"+ date_start + "<br>" + time_date1[1] + "</td> <td>"+ date_end + "<br>" + time_dateA[1] +"</td> <td>" + 
                      "<button class='popup' onclick='showTemplate(`myPopup"+i+"`)'>" +
                      "<i class='fa fa-file-pdf-o' style='font-size:18px;color:#45a049;'></i>" + 
                      "<div class='popuptext' id='myPopup"+i+"' style='display:inline-block'>" +
                      "<a href='javascript:void(0)' class='closebtn2'>&times;</a> <br><br>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=1`)' src='img/Image1.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=2`)' src='img/Image2.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=3`)' src='img/Image3.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=4`)' src='img/Image4.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=5`)' src='img/Image5.jpg' width='140' height='100'>" +
                      "</div>" +
                      "</button>" + 
                      "</td></tr>"; 
                  }

                  if(report_all_api[i].kategori_laporan === kategori_laporan && utama_bahagian == "all" && utama_unit == "all")
                  {
                      report_all += "<tr> <td>"+ report_all_api[i].kategori_laporan +"</td> <td>"+ report_all_api[i].bahagian.bahagian +"</td> <td>"+ report_all_api[i].unit.unit +"</td> <td>"+ report_all_api[i].no_rujukan +"</td> <td>"+ report_all_api[i].lawatan_tapak +"</td> <td>"+ date_start + "<br>" + time_date1[1] + "</td> <td>"+ date_end + "<br>" + time_dateA[1] +"</td> <td>" + 
                      "<button class='popup' onclick='showTemplate(`myPopup"+i+"`)'>" +
                      "<i class='fa fa-file-pdf-o' style='font-size:18px;color:#45a049;'></i>" + 
                      "<div class='popuptext' id='myPopup"+i+"' style='display:inline-block'>" +
                      "<a href='javascript:void(0)' class='closebtn2'>&times;</a> <br><br>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=1`)' src='img/Image1.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=2`)' src='img/Image2.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=3`)' src='img/Image3.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=4`)' src='img/Image4.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=5`)' src='img/Image5.jpg' width='140' height='100'>" +
                      "</div>" +
                      "</button>" + 
                      "</td></tr>"; 
                  }

                  if(report_all_api[i].kategori_laporan === kategori_laporan && report_all_api[i].id_bahagian == utama_bahagian && utama_unit == "all")
                  {
                      report_all += "<tr> <td>"+ report_all_api[i].kategori_laporan +"</td> <td>"+ report_all_api[i].bahagian.bahagian +"</td> <td>"+ report_all_api[i].unit.unit +"</td> <td>"+ report_all_api[i].no_rujukan +"</td> <td>"+ report_all_api[i].lawatan_tapak +"</td> <td>"+ date_start + "<br>" + time_date1[1] + "</td> <td>"+ date_end + "<br>" + time_dateA[1] +"</td> <td>" + 
                      "<button class='popup' onclick='showTemplate(`myPopup"+i+"`)'>" +
                      "<i class='fa fa-file-pdf-o' style='font-size:18px;color:#45a049;'></i>" + 
                      "<div class='popuptext' id='myPopup"+i+"' style='display:inline-block'>" +
                      "<a href='javascript:void(0)' class='closebtn2'>&times;</a> <br><br>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=1`)' src='img/Image1.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=2`)' src='img/Image2.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=3`)' src='img/Image3.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=4`)' src='img/Image4.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=5`)' src='img/Image5.jpg' width='140' height='100'>" +
                      "</div>" +
                      "</button>" + 
                      "</td></tr>"; 
                  }

                  if(report_all_api[i].kategori_laporan === kategori_laporan && utama_bahagian == "all" && report_all_api[i].id_unit == utama_unit)
                  {
                      report_all += "<tr> <td>"+ report_all_api[i].kategori_laporan +"</td> <td>"+ report_all_api[i].bahagian.bahagian +"</td> <td>"+ report_all_api[i].unit.unit +"</td> <td>"+ report_all_api[i].no_rujukan +"</td> <td>"+ report_all_api[i].lawatan_tapak +"</td> <td>"+ date_start + "<br>" + time_date1[1] + "</td> <td>"+ date_end + "<br>" + time_dateA[1] +"</td> <td>" + 
                      "<button class='popup' onclick='showTemplate(`myPopup"+i+"`)'>" + 
                      "<i class='fa fa-file-pdf-o' style='font-size:18px;color:#45a049;'></i>" + 
                      "<div class='popuptext' id='myPopup"+i+"' style='display:inline-block'>" +
                      "<a href='javascript:void(0)' class='closebtn2'>&times;</a> <br><br>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=1`)' src='img/Image1.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=2`)' src='img/Image2.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=3`)' src='img/Image3.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=4`)' src='img/Image4.jpg' width='140' height='100'>" +
                      "<img onclick='showPDF(`http://175.136.253.77:8181/ereport/pdf?id="+ report_all_api[i].id +"&simpanan_fail="+ report_all_api[i].simpanan_fail +"&template=5`)' src='img/Image5.jpg' width='140' height='100'>" +
                      "</div>" +
                      "</button>" + 
                      "</td></tr>"; 
                  }
              }
          }

          document.getElementById("report_table_body").innerHTML = report_all;
          initTable();
         
      }

      else{
        document.getElementById("report_content").innerHTML = "";
        document.getElementById("report_content").innerHTML = "<table id='table_report'> <thead style='text-align: center;'> <tr> <th>Kategori Laporan</th> <th>Bahagian</th> <th>Unit</th> <th>No.<br>Rujukan</th> <th>Lawatan Tapak</th> <th>Tarikh Mula</th> <th>Tarikh Akhir</th> <th>Papar PDF</th> </tr> </thead> <tbody id='report_table_body'>  </tbody> </table>";
      }
  }

  xmlhttp.send();


}

function initTable(){

  table = $('#table_report').DataTable({
    paging: true,
    responsive: true
  });
  
}

// function open_pdf(pdf_link) {
// 	window.open(pdf_link,'_blank');
// }

function showTemplate(popupID){
  var popup = document.getElementById(popupID);
  popup.classList.toggle("show");
}

function showPDF(pdf_link) {
	window.open(pdf_link,'_blank');
}

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "200px";
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

        if(result.total_rows>0){

          var badge = document.createElement("SPAN");
          badge.className = 'badge';
          badge.innerHTML = result.total_rows;
          document.getElementById("noti_badge").appendChild(badge);

            for(var i=0;i<result.total_rows;i++){

                var lab = document.createElement("LABEL");

                lab.innerHTML = "<label>"+ result.rows[i].doc._id +"<br>"+ result.rows[i].doc.current_date +"</label> <label style='background-color: orange;color: white; float: right;'>Pending</label> <hr>";
                document.getElementById("noti_list").appendChild(lab);
            }
        }

        else{
            
        }
    
    }).catch(function (err) { console.log(err); });




//---------------------------------API-----------------------------------------//

var baseUrl_Bahagian = "http://175.136.253.77:8181/api/bahagian/all";
var baseUrl_Unit = "http://175.136.253.77:8181/api/unit/all";
var baseUrl_KategoriLaporan = "http://175.136.253.77:8181/api/kategorilaporan/all";

function loadAPI_Report_all(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_Report_all ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

          var report_all_api = JSON.parse(xmlhttp.responseText);

          var report_all="";

          for (var i=0; i<report_all_api.length; i++) {
            report_all += "<tr> <td>"+ report_all_api[i].kategori_laporan +"</td> <td>"+ report_all_api[i].id_bahagian +"</td> <td>"+ report_all_api[i].id_unit +"</td> <td>"+ report_all_api[i].no_rujukan +"</td> <td>"+ report_all_api[i].lawatan_tapak +"</td> <td>"+ report_all_api[i].tarikh_mula +"</td> <td>"+ report_all_api[i].tarikh_akhir +"</td> <td><button class='table_edit_button'><i class='far fa-edit' style='font-size:18px;color:white;'></i></button></td> <td>View</td> <td><button class='table_delete_button'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button></td> </tr>";

          }

          document.getElementById("report_table_body").innerHTML = report_all;
         
      }
  }

  xmlhttp.send();
}

function loadAPI_KategoriLaporan(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_KategoriLaporan ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
          var kategorilaporan_api = JSON.parse(xmlhttp.responseText);

          var nama_kategorilaporan = "";

          for (var i=0; i<kategorilaporan_api.length; i++) {
              nama_kategorilaporan += "<option value='"+ kategorilaporan_api[i].kategori_laporan +"'>" + kategorilaporan_api[i].kategori_laporan + "</option>";
          }

          document.getElementById("utama_kategori").innerHTML = nama_kategorilaporan;
      }
  }

  xmlhttp.send();
}

function loadAPI_Bahagian(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_Bahagian ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
          var bahagian_api = JSON.parse(xmlhttp.responseText);

          var bahagian = "<option value='all'>Pilih Semua</option>";

          for (var i=0; i<bahagian_api.length; i++) {
              bahagian += "<option value='"+ bahagian_api[i].id_bahagian +"' class='"+ bahagian_api[i].id_bahagian +"'>" + bahagian_api[i].bahagian + "</option>";
          }

          document.getElementById("utama_bahagian").innerHTML = bahagian;
      }
  }

  xmlhttp.send();
}

function loadAPI_Unit(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_Unit ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
          var unit_api = JSON.parse(xmlhttp.responseText);

          // var unit="<option value='All'>All</option>";
          var unit = "<option value='all'>Pilih Semua</option>";

          for (var i=0; i<unit_api.length; i++) {
              unit += "<option value='"+ unit_api[i].id_unit +"' data-pub='"+ unit_api[i].id_bahagian +"'>" + unit_api[i].unit + "</option>";
          }

          document.getElementById("utama_unit").innerHTML = unit;
      }
  }

  xmlhttp.send();
}



function filterUnit(){

  var x = document.getElementById("utama_bahagian").value;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", baseUrl_Unit ,true);
  xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
          var unit_api = JSON.parse(xmlhttp.responseText);

          var unit = "<option value='all'>Pilih Semua</option>";

          for (var i=0; i<unit_api.length; i++) {

              if(x == unit_api[i].id_bahagian || x === "all"){
                unit += "<option value='"+ unit_api[i].id_unit +"'>" + unit_api[i].unit + "</option>";
              }
              
          }

          document.getElementById("utama_unit").innerHTML = unit;
      }
  }

  xmlhttp.send();

}













// var kategori_laporan = localStorage.getItem("kategori_laporan");
// document.getElementById("utama_kategori").innerHTML = kategori_laporan;

// var bahagian = localStorage.getItem("bahagian");
// document.getElementById("utama_bahagian").innerHTML = bahagian;

// var unit = localStorage.getItem("unit");
// document.getElementById("utama_unit").innerHTML = unit;


// $(document).ready(function() {

  // setTimeout(function(){ 

    // table = $('#table_report').DataTable( {
    //   paging: true
    // } );

  // }, 500);

  //-------------------on click method-----------------------------

  // $( "#displayTable" ).click(function() {

  //     table.destroy();

  //     $('#table_report').DataTable({
  //       "columns": [
  //           { "data": "kategori_laporan" },
  //           { "data": "bahagian" },
  //           { "data": "unit" },
  //           { "data": "No_rujukan" },
  //           { "data": "lawatan_tapak" },
  //           { "data": "tarikh_mula" },
  //           { "data": "tarikh_akhir" },
  //           { "data": "edit" },
  //           { "data": "pdf" },
  //           { "data": "padam" }
  //       ]
  //     });
    
  // });

  //------------normal method------------------------------

  // var columns = [
  //   [ "kategori_laporan"],
  //   [ "bahagian"],
  //   [ "unit"],
  //   [ "no_rujukan"],
  //   [ "lawatan_tapak"],
  //   [ "tarikh_mula"],
  //   [ "tarikh_akhir"],
  //   [ "edit"],
  //   [ "pdf"],
  //   [ "padam"],
  // ];

    // setTimeout(function(){ 

    //   $('#table_report').DataTable({
        // "columns": [
        //     { "data": "kategori_laporan" },
        //     { "data": "bahagian" },
        //     { "data": "unit" },
        //     { "data": "No_rujukan" },
        //     { "data": "lawatan_tapak" },
        //     { "data": "tarikh_mula" },
        //     { "data": "tarikh_akhir" },
        //     { "data": "edit" },
        //     { "data": "pdf" },
        //     { "data": "padam" }
        // ]
    //     columns: columns,
    //   });
    // }, 1000);

// });