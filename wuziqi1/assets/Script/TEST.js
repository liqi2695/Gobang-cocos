function register(m1,m2){
    var url = "http://192.168.0.117/insert_information.php"
   var temp_response;
    var param_str=
    {
        "personal_Name":m1,
        "personal_grade":m2,
    }
    data = older(param_str)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);//新建一个http连接
    xhr.onreadystatechange = function () {//声明回调函数
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            var response = xhr.responseText;//接受返回json
            cc.log(response)
            temp_response= response
        }
    };
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");  
    cc.log(data)
    xhr.send(data)
    return temp_response
}
