L.mapbox.accessToken = 'pk.eyJ1IjoiZnJpY2tlZnJlc2giLCJhIjoiNmY0NDEwMDc3ZjFiYzQxNTE2Y2VjYjVkMDUzNzA1NGYifQ.eOqaLiUDHBzDwe0TcpMIIQ';
var map = L.mapbox.map('map', 'frickefresh.5e6bd9aa')
    .setView([30,0], 2);

var Miroslav = L.marker([48.6974148,21.2391925] ).addTo(map);
Miroslav.bindPopup("<div style='text-align:center'>Miroslav Hazy<br><img src='images/Miroslav.jpg' alt='Miroslav Picture' style='width:50px;height:69px;'> <br> Kosice, Slovakia</div>")

var Frank = L.marker([36.6429214, 117.0291138] ).addTo(map);
Frank.bindPopup("<div style='text-align:center'>Hongyi Bian<br><img src='images/Frank.jpg' alt='Hongyi Bian Picture' style='width:50px;height:69px;'> <br> Jinan, China</div>")

var Vincent = L.marker([30.568116, 114.3003845] ).addTo(map);
Vincent.bindPopup("<div style='text-align:center'>Linjiabei He<br><img src='images/Vincent.jpg' alt='Linjiabei He Picture' style='width:50px;height:69px;'> <br> Wu Han, China</div>")

var Alma = L.marker([38.4555566,106.2453461] ).addTo(map);
Alma.bindPopup("<div style='text-align:center'>Ziqing Kang<br><img src='images/Alma.jpg' alt='Ziqing Kang Picture' style='width:50px;height:69px;'> <br> Ningxia, Yinchuan, China</div>")

var Francesco = L.marker([43.5255016,13.245574] ).addTo(map);
Francesco.bindPopup("<div style='text-align:center'>Francesco Mariani<br><img src='images/Francesco.jpg' alt='Francesco Mariani Picture' style='width:50px;height:69px;'> <br> Jesi, Italy</div>")