var sgun;
var sgunid;
gunlist = document.getElementById('gunlist');
for(guntype in guns){
    gunlist.innerHTML += '<li data-role="list-divider">'+guns[guntype]['name']+'</li>';
    for(gun in guns[guntype]['guns']){
        gunlist.innerHTML += '<li><a href="#gun" data-transition="slide" onclick="changegun(' + "'" + gun + "', '" + guntype + "'" + ')">'+guns[guntype]['guns'][gun]['name']+'</a></li>';
    }
}

function changegun(gun, guntype){
    sgun = guns[guntype]['guns'][gun];
    sgunid = gun;
    for(index in document.getElementsByClassName('gunname')){
        document.getElementsByClassName('gunname')[index].innerHTML = sgun['name'];
    }
    for(index in document.getElementsByClassName('gunpng')){
        document.getElementsByClassName('gunpng')[index].src = 'img/' + sgunid + '.png'
    }
    for(stat in sgun['stats']){
        if(document.getElementById(stat)){
            document.getElementById(stat).innerHTML = "";
            for(i = 0 ; i < sgun['stats'][stat]; i++){
                document.getElementById(stat).innerHTML += "<img class='square' src='img/white.png'>";
            }
            for(i = 0; i < 20 - sgun['stats'][stat]; i++){
                document.getElementById(stat).innerHTML += "<img class='square' src='img/black.png'>";
            }
        }
    }
    useammo();
}

function useammo(){
    if(!localStorage[sgunid]){
        reload();
    }
    else{
        localStorage[sgunid]--;
    }
    document.getElementById('ammo').innerHTML = localStorage[sgunid] + '/' + sgun['stats']['ammo'];
}

function shoot(){
    if(localStorage[sgunid] > 0){
        useammo();
        document.getElementById('gunimage').style.webkitTransform = 'rotate(10deg)';
        gunsound();
        document.getElementById('gunimage').style.webkitTransform = 'rotate(0)';

    }
}

function reload(){
    localStorage[sgunid] = sgun['stats']['ammo'];
    document.getElementById('ammo').innerHTML = localStorage[sgunid] + '/' + sgun['stats']['ammo'];
}

function gunsound(){

}