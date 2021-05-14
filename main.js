var array_name = [];
function submit() {
    var display_array_name = [];
    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("stud" + i).value;
         console.log(name);
         array_name.push(name);
    }
    console.log(array_name);
    var len=array_name.length;
    console.log(len);
    for (var h=0; h<len; h++){
        display_array_name.push("<h4> Name - "+array_name[h]+"</h4>");
    }
    console.log(display_array_name);
    document.getElementById("display_name_with_commas").innerHTML = display_array_name;
    var remove_commas=display_array_name.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit").style.display = "none";
    document.getElementById("Sort").style.display = "inline-block";
}
function sorting() {
    array_name.sort();
    console.log(array_name);
    var display_array_name_sort=[];
    var len=array_name.length;
    console.log(len);
    for (var h=0; h<len; h++){
        display_array_name_sort.push("<h4> Name - "+array_name[h]+"</h4>");
    }
    var remove_commas=display_array_name_sort.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
function update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + array_name.sort() + "</h1>";
}
