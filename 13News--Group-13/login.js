function validasi(url){
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
        if( username == "username" && password == "pass123"){
            return window.location = url;
        }
            else if(username =="" || password ==""){
                alert("Masukan username dan password Anda");
            return false;
        }
            else{
            alert("Username atau password yang Anda masukan SALAH");
            return false;
        }
}