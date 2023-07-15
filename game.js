


btnBasmaOyuncu(".red");
btnBasmaOyuncu(".green");
btnBasmaOyuncu(".yellow");
btnBasmaOyuncu(".blue");

var oyunaBaslandiMi= false;
var rekorSayisi = 0;
var ilerlemeSayisi;
var pcDegerleri = [];
var oyuncuDegerleri = [];
var oyuncununDegeri;

$(document).on("keypress", function() {
  if(oyunaBaslandiMi === false) {
  ilerlemeSayisi = 0;
  pcDegerleri.length = 0;
  oyuncuDegerleri.length = 0;

  oyunuBaslat();
  oyunaBaslandiMi = true;

}
});





function oyunuBaslat() {



  $("h1").text("İlerleme: " + (ilerlemeSayisi));
  setTimeout(function(){pcCalistir()}, 250);









  // var pcSayisi = siraBelirle();
  // pcDegerleri.push(pcSayisi);

/*
  $(".btn").on("click", function() {
    oyuncuDegerleri.push(oyuncununDegeri);
    console.log(oyuncuDegerleri);
    if(oyuncuDegerleri[i] === pcDegerleri[i]) {
      pcDegerleri.push(siraBelirle());
      i++;
      btnBasmaPC(pcDegerleri[i]);

      $("h1").text("Seviye " + (i+1));
    }
    else {
      alert("Oyun bitti.");
    }
  });
*/




}





function siraBelirle() {

  var sayi = Math.floor((Math.random() * 4));

  return sayi;

}

function btnBasmaOyuncu(renkSinifi) {








  $(renkSinifi).on("click", function() {

    switch(renkSinifi) {
      case ".green":
      oyuncununDegeri = 0;
      break;

      case ".red":
      oyuncununDegeri = 1;
      break;

      case ".yellow":
      oyuncununDegeri = 2;
      break;

      case ".blue":
      oyuncununDegeri = 3;
      break;

      default:

    }
    $(renkSinifi).addClass("pressed");
      sesCal(renkSinifi);
    oyuncuDegerleri.push(oyuncununDegeri);
    console.log(oyuncuDegerleri);
    setTimeout(function() {
      $(renkSinifi).removeClass("pressed");
    }, 250);





    if (oyuncuDegerleri.length === pcDegerleri.length) {

    if((JSON.stringify(oyuncuDegerleri) === JSON.stringify(pcDegerleri)) ) {
      console.log(JSON.stringify(oyuncuDegerleri) === JSON.stringify(pcDegerleri));
      $("h1").text("İlerleme: " + (ilerlemeSayisi));
      oyuncuDegerleri.length = 0;
      $("body").addClass("great");
      setTimeout(function(){
        $("body").removeClass("great");
      }, 130);
      if(ilerlemeSayisi > rekorSayisi) {
        rekorSayisi = ilerlemeSayisi;
      $("#record-number").text("Rekorunuz: " + rekorSayisi);
    }
      setTimeout(function(){
        pcCalistir();
      },1500);
    }
    else {
    oyunBitimiUyarısı();
    }
  }

  else if(esitlikKontrolu() === false) {
    oyunBitimiUyarısı();
  }

});


}


function esitlikKontrolu() {


  for(var i = 0; i<oyuncuDegerleri.length; i++) {
    if(oyuncuDegerleri[i] !== pcDegerleri[i]) {
      return false;
    }

  }
  return true;
}


function oyunBitimiUyarısı() {
  console.log(JSON.stringify(oyuncuDegerleri) === JSON.stringify(pcDegerleri));
  oyunaBaslandiMi = false;
  $("h1").text("Oyun Bitti. Başlamak İçin Herhangi Bir Tuşa Basınız.");
  $("body").addClass("game-over");
  sesCal(".wrong");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
}

function pcCalistir(){
  //

  pcDegerleri.push(siraBelirle());





  btnBasmaPC(pcDegerleri[ilerlemeSayisi]);

  // bekle(1000).then(() => {console.log("test");});



  console.log(pcDegerleri);
  ilerlemeSayisi++;
}


function btnBasmaPC(sira) {

  var renk;


  switch(sira) {
    case 0:
    renk = ".green";
    break;
    case 1:
    renk = ".red";
    break;
    case 2:
    renk = ".yellow";
    break;
    case 3:
    renk = ".blue";
    break;
    default:

  }



    $(renk).addClass("pressed");
    sesCal(renk);



  setTimeout(function(){
    $(renk).removeClass("pressed");
  }, 250);





  // setTimeout(function() {$(renk).click(); },250);
}


function sesCal(renkSinifi) {
  var audio = new Audio('sounds/' + renkSinifi.slice(1) + '.mp3');
  audio.play();
}


function bekle(milliseconds) {
  return new Promise(resolve => setTimeout(resolve,milliseconds));
}
