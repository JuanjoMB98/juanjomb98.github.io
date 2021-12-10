// Pure Javascript
document.getElementById("diseñoweb").onmouseover = function(){
    document.getElementById('diseñoWEB').style.display = 'flex';
    document.getElementById('placeHOLDER').style.display = 'none';
}

document.getElementById('diseñoweb').onmouseout = function(){
    document.getElementById('diseñoWEB').style.display = 'none';
    document.getElementById('placeHOLDER').style.display = 'flex';
}

document.getElementById("desarrolloweb").onmouseover = function(){
    document.getElementById('desarrolloWEB').style.display = 'flex';
    document.getElementById('placeHOLDER').style.display = 'none';
}

document.getElementById('desarrolloweb').onmouseout = function(){
    document.getElementById('desarrolloWEB').style.display = 'none';
    document.getElementById('placeHOLDER').style.display = 'flex';
}

document.getElementById("diseñouiux").onmouseover = function(){
    document.getElementById('diseñoUIUX').style.display = 'flex';
    document.getElementById('placeHOLDER').style.display = 'none';
}

document.getElementById('diseñouiux').onmouseout = function(){
    document.getElementById('diseñoUIUX').style.display = 'none';
    document.getElementById('placeHOLDER').style.display = 'flex';
}

$(function () {
    count = 0;
    wordsArray = ["GitHub", "GitLab", "Photshop", "Illustrator","Figma","Adobe XD", "Affinity"];
    setInterval(function () {
      count++;
      $("#listaProgramas").fadeOut(1000, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000);
      });
    }, 2000);
  });