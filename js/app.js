gunlist = document.getElementById('gunlist');
for(guntype in guns){
    gunlist.innerHTML += '<li data-role="list-divider">'+guns[guntype]['name']+'</li>';
    for(gun in guns[guntype]['guns']){
        gunlist.innerHTML += '<li><a href="#gun" data-transition="slide" onclick="changegun(' + "'" + gun + "', '" + guntype + "'" + ')">'+guns[guntype]['guns'][gun]['name']+'</a></li>';
    }
}

function changegun(gun, guntype){
    sgun = guns[guntype]['guns'][gun];
    for(index in document.getElementsByClassName('gunname')){
        document.getElementsByClassName('gunname')[index].innerHTML = sgun['name'];
    }
}