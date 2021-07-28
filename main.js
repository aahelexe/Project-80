var guests= [];
var sorts= [];
function submit(){
    var guests2= [];
    guests1=document.getElementById("guest_name").value;
    guests.push(guests1);
    console.log(guests1);
    console.log(guests)
    var length_name=guests.length;
    console.log(length_name);
    document.getElementById("names").innerHTML=guests.toString();
    document.getElementById("sort_button").style.display="inline-block";
    }
function sorting(){
    guests.sort();
    console.log(guests);
    var display_sort= [];
    var length_array=guests.length;
        console.log(length_array);
        for (var k=0; k < length_array; k++){
            display_sort.push("<h4>NAME- "+guests[k]+"</h4>")
            console.log(display_sort);
        }
        var commas=display_sort.join(" ");
        console.log(commas);
        document.getElementById("sorts").innerHTML=commas;
    }