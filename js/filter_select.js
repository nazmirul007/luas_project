function filterSubAktiviti(){

    var x = document.getElementById("aktiviti_utama").value;
    var baseUrl_SubAktiviti = "http://175.136.253.77:8181/api/subaktivitirekod/"+ x;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_SubAktiviti,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var sub_aktiviti_api = JSON.parse(xmlhttp.responseText);

            var nama_sub_aktiviti = "";

            for (var i=0; i<sub_aktiviti_api.length; i++) {
                nama_sub_aktiviti += '<option value="'+ sub_aktiviti_api[i].id_sub_aktiviti +'">' + sub_aktiviti_api[i].sub_aktiviti + '</option>';
            }

            document.getElementById("sub_aktiviti").innerHTML = nama_sub_aktiviti;
           
        }
    }

    xmlhttp.send();
}

//------------------------------------Pegawai Hadir-----------------------------------------

function filter_PH_unit_pegawai(){

    var id = $("#utama2_bahagian option:selected").attr("class");
    
    var baseUrl_jawatan = "http://175.136.253.77:8181/api/unit/pegawai/"+ id;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_jawatan,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var unit_api = JSON.parse(xmlhttp.responseText);

            var nama_unit = "";

            if(unit_api.length == 0){
                nama_unit += '<option value="Tidak Berkaitan">Tidak Berkaitan</option>';
                document.getElementById("utama2_jawatan").innerHTML = '<option value="Pengarah">Pengarah</option>';
            }

            for (var i=0; i<unit_api.length; i++) {
                nama_unit += '<option value="'+ unit_api[i].unit +'" class="'+ unit_api[i].id_unit +'">' + unit_api[i].unit + '</option>';
            }

            document.getElementById("utama2_unit").innerHTML = nama_unit;
        }
    }

    xmlhttp.send();



    var baseUrl_pegawai = "http://175.136.253.77:8181/api/pegawai/b/"+ id;

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("GET", baseUrl_pegawai,true);
    xmlhttp2.onreadystatechange = function() {
        if(xmlhttp2.readyState === 4 && xmlhttp2.status === 200){
            var pegawai_api = JSON.parse(xmlhttp2.responseText);

            var nama_pegawai = "";

            for (var i=0; i<pegawai_api.length; i++) {
                nama_pegawai += '<option value="'+ pegawai_api[i].nama +'" class="'+ pegawai_api[i].id_jawatan +'">' + pegawai_api[i].nama + '</option>';
            }

            document.getElementById("utama2_nama_pegawai").innerHTML = nama_pegawai;
           
        }
    }

    xmlhttp2.send();


}

function filter_PH_pegawai(){

    var id = $("#utama2_unit option:selected").attr("class");

    var baseUrl_pegawai = "http://175.136.253.77:8181/api/pegawai/"+ id;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_pegawai,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pegawai_api = JSON.parse(xmlhttp.responseText);

            var nama_pegawai = "";

            for (var i=0; i<pegawai_api.length; i++) {
                nama_pegawai += '<option value="'+ pegawai_api[i].nama +'" class="'+ pegawai_api[i].id_jawatan +'">' + pegawai_api[i].nama + '</option>';
            }

            document.getElementById("utama2_nama_pegawai").innerHTML = nama_pegawai;
           
        }
    }

    xmlhttp.send();

}

function filter_PH_jawatan(){

    var id = $("#utama2_nama_pegawai option:selected").attr("class");

    var baseUrl_jawatan = "http://175.136.253.77:8181/api/jawatan/all";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_jawatan,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jawatan_api = JSON.parse(xmlhttp.responseText);

            for (var i=0; i<jawatan_api.length; i++) {
                if(id == jawatan_api[i].id_jawatan){
                    document.getElementById("utama2_jawatan").innerHTML = '<option value="'+ jawatan_api[i].jawatan +'">' + jawatan_api[i].jawatan + '</option>';
                }
                
            }
        }
    }

    xmlhttp.send();

}


//----------------------------------------Ketua Unit-----------------------------------------

function filter_KU(){

    var id = document.getElementById("utama3_nama_pegawai").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Pegawai_all ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pegawai_all_api = JSON.parse(xmlhttp.responseText);

            for (var i=0; i<pegawai_all_api.length; i++) {

                if(id == pegawai_all_api[i].id){
                    
                    document.getElementById("utama3_jawatan").innerHTML = '<option value="'+ pegawai_all_api[i].jawatan.jawatan +'">'+ pegawai_all_api[i].jawatan.jawatan +'</option>';
                    document.getElementById("utama3_bahagian").innerHTML = '<option value="'+ pegawai_all_api[i].unit.unit +'">'+ pegawai_all_api[i].unit.unit +'</option>';
                }
                
            }
        }
    }

    xmlhttp.send();

}

//------------------------------------Ketua Bahagian-----------------------------------------

function filter_KB(){

    var id = document.getElementById("utama4_nama_pegawai").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Pegawai_all ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pegawai_all_api = JSON.parse(xmlhttp.responseText);

            for (var i=0; i<pegawai_all_api.length; i++) {

                if(id == pegawai_all_api[i].id){
                    
                    document.getElementById("utama4_jawatan").innerHTML = '<option value="'+ pegawai_all_api[i].jawatan.jawatan +'">'+ pegawai_all_api[i].jawatan.jawatan +'</option>';
                    document.getElementById("utama4_unit").innerHTML = '<option value="'+ pegawai_all_api[i].bahagian.bahagian +'">'+ pegawai_all_api[i].bahagian.bahagian +'</option>';
                }
                
            }
        }
    }

    xmlhttp.send();

}


//----------------------------------------Pegawai Semak-----------------------------------------

function filter_Semak(){

    var id = $("#pengesahan_semak_nama_pegawai option:selected").attr("class");
    var baseUrl_jawatan = "http://175.136.253.77:8181/api/jawatan/all";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_jawatan,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jawatan_api = JSON.parse(xmlhttp.responseText);

            for (var i=0; i<jawatan_api.length; i++) {
                if(id == jawatan_api[i].id_jawatan){
                    document.getElementById("pengesahan_semak_jawatan").innerHTML = '<option value="'+ jawatan_api[i].jawatan +'">' + jawatan_api[i].jawatan + '</option>';
                }
            }
        }
    }

    xmlhttp.send();


    var id2 = $("#pengesahan_semak_nama_pegawai option:selected").attr("data");
    var baseUrl_bahagian = "http://175.136.253.77:8181/api/bahagian/all";

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("GET", baseUrl_bahagian,true);
    xmlhttp2.onreadystatechange = function() {
        if(xmlhttp2.readyState === 4 && xmlhttp2.status === 200){
            var bhg_api = JSON.parse(xmlhttp2.responseText);

            for (var i=0; i<bhg_api.length; i++) {
                if(id2 == bhg_api[i].id_bahagian){
                    document.getElementById("pengesahan_semak_bahagian").innerHTML = '<option value="'+ bhg_api[i].bahagian +'">' + bhg_api[i].bahagian + '</option>';
                }

                else{
                    document.getElementById("pengesahan_semak_bahagian").innerHTML = '<option value="Pejabat Pengarah">Pejabat Pengarah</option>';
                }
            }
        }
    }

    xmlhttp2.send();

}

//----------------------------------------Pegawai Sah-----------------------------------------

function filter_Sah(){

    var id = $("#pengesahan_sah_nama_pegawai option:selected").attr("class");

    var baseUrl_jawatan = "http://175.136.253.77:8181/api/jawatan/all";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_jawatan,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jawatan_api = JSON.parse(xmlhttp.responseText);

            for (var i=0; i<jawatan_api.length; i++) {
                if(id == jawatan_api[i].id_jawatan){
                    document.getElementById("pengesahan_sah_jawatan").innerHTML = '<option value="'+ jawatan_api[i].jawatan +'">' + jawatan_api[i].jawatan + '</option>';
                }
            }
        }
    }

    xmlhttp.send();


    var id2 = $("#pengesahan_sah_nama_pegawai option:selected").attr("data");
    var baseUrl_bahagian = "http://175.136.253.77:8181/api/bahagian/all";

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("GET", baseUrl_bahagian,true);
    xmlhttp2.onreadystatechange = function() {
        if(xmlhttp2.readyState === 4 && xmlhttp2.status === 200){
            var bhg_api = JSON.parse(xmlhttp2.responseText);

            for (var i=0; i<bhg_api.length; i++) {
                if(id2 == bhg_api[i].id_bahagian){
                    document.getElementById("pengesahan_sah_bahagian").innerHTML = '<option value="'+ bhg_api[i].bahagian +'">' + bhg_api[i].bahagian + '</option>';
                }

                else{
                    document.getElementById("pengesahan_sah_bahagian").innerHTML = '<option value="Pejabat Pengarah">Pejabat Pengarah</option>';
                }
            }
        }
    }

    xmlhttp2.send();

}