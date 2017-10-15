function chAtt(id, Att,value) {
    var Id = document.getElementById(id);
    Id.setAttribute(Att,value);
}


chAtt("edit-keys", "placeholder", "搜索");
