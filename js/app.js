gunlist = document.getElementById('gunlist');
for(guntype in guns){
    gunlist.innerHTML += '<li data-role="list-divider">'+guns[guntype]['name']+'</li>';
    for(gun in guns[guntype]['guns']){
        gunlist.innerHTML += '<li><a href="#gun">'+guns[guntype]['guns'][gun]['name']+'</a></li>';
    }
}