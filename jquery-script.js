let listem = [];

let filmler = [
  { id: 0, name: "SPIDER-MAN", img: "./img/f1.jpg",desc: "spiderman" },
  { id: 1, name: "HULK", img: "./img/f2.jpg" },
  { id: 2, name: "G.O.R.A", img: "./img/f3.jpg" },
  { id: 3, name: "DARE DEVIL", img: "./img/f4.jpg" },
  { id: 4, name: "HOBBIT", img: "./img/f5.jpg" },
  { id: 5, name: "A.R.O.G", img: "./img/f6.jpg" },
  { id: 6, name: "DARK", img: "./img/f7.jpg" },
];

function addToListem(index) {
  console.log(listem.indexOf(index));
  if (listem.indexOf(index) === -1) {
    listem.push(filmler[index]);
    console.log(JSON.stringify(listem));
    localStorage.setItem("listem", JSON.stringify(listem));
    console.log(listem);
    console.log(localStorage.getItem("listem"));
  }
  if (listem.some(item => item.id === filmler[index].id)) {
    return;
  }
  
  listem.push(filmler[index]);
  localStorage.setItem("listem", JSON.stringify(listem));

  // Eklendi pop-up'ını görüntüle
  showPopup("Film listeye eklendi!");
}

function showPopup(message) {
  // Popup divini oluştur
  let popup = `<div class="popup">${message}</div>`;

  // HTML'e ekle
  $("body").append(popup);

  // 2 saniye sonra popup'ı kaldır
  setTimeout(function() {
    $(".popup").remove();
  }, 2000);
}

$(document).ready(function () {
  let listedekiler = updateListem();
  let innerhtml = '';
  
  listedekiler.forEach(elm => {
    innerhtml += `<div class="film-item">
      <div>${elm.name}</div>
      <img src='${elm.img}'>
    </div>`;
  });

  $('.listem-items').html(innerhtml);
});

function updateListem() {
  return JSON.parse(localStorage.getItem("listem")) || [];
}

filmler.map((elm) => {
  $("#film-" + elm.id).on("click", function () {
    addToListem(elm.id);
  });
});

$(document).ready(function () {
  // "delete all" butonuna tıklanınca
  $("#deleteAllButton").on("click", function () {
    // listeyi boşalt
    listem = [];
    // localStorage'deki "listem" anahtarını boş bir listeyle güncelle
    localStorage.setItem("listem", JSON.stringify(listem));
    // listedeki gösterimi güncelle
    $('.listem-items').html('');
  });
});

function addToListem(index) {
  // Eğer listede bu film zaten varsa, ekleme işlemi yapma
  if (listem.some(item => item.id === filmler[index].id)) {
    return;
  }
  
  // Yoksa, listeye ekle ve localStorage'i güncelle
  listem.push(filmler[index]);
  localStorage.setItem("listem", JSON.stringify(listem));
}

$(document).ready(function () {
  let listedekiler = updateListem();
  let innerhtml = '';
  
  listedekiler.forEach(elm => {
    innerhtml += `<div class="film-item">
      <div>${elm.name}</div>
      <img src='${elm.img}'>
    </div>`;
  });

  $('.listem-items').html(innerhtml);
});

function updateListem() {
  return JSON.parse(localStorage.getItem("listem")) || [];
}

filmler.map((elm) => {
  $("#film-" + elm.id).on("click", function () {
    addToListem(elm.id);
  });
});

$(document).ready(function () {
  // "delete all" butonuna tıklanınca
  $("#deleteAllButton").on("click", function () {
    // listeyi boşalt
    listem = [];
    // localStorage'deki "listem" anahtarını boş bir listeyle güncelle
    localStorage.setItem("listem", JSON.stringify(listem));
    // listedeki gösterimi güncelle
    $('.listem-items').html('');

    // Tümü Silindi pop-up'ını görüntüle
    showPopup("Tümü Silindi!");
  });
});

function addToListem(index) {
  if (listem.some(item => item.id === filmler[index].id)) {
    return;
  }
  
  listem.push(filmler[index]);
  localStorage.setItem("listem", JSON.stringify(listem));

  // Eklendi pop-up'ını görüntüle
  showPopup("Film listeye eklendi!");
}

function showPopup(message) {
  let popup = `<div class="popup">${message}</div>`;

  $("body").append(popup);

  setTimeout(function() {
    $(".popup").remove();
  }, 2000);
}

