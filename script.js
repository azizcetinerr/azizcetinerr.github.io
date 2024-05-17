document.addEventListener('DOMContentLoaded', function() {
  // Arrow ve movieList öğelerini seç
  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");

  // Film listesini kaydırmak için okların işlevselliği
  arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
      clickCounter++;
      if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });
  });


  // Koyu mod geçişi
  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(
    ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title,.menu-list.active"
  );
  ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
    return document.querySelector(".menu-list.active");
  });
  
  
  // Index.html'den filme ekle
  const plusIcons = document.querySelectorAll('.bi-plus-circle-fill');

  plusIcons.forEach(function(plusIcon) {
    plusIcon.addEventListener('click', function(event) {
      event.stopPropagation();
      const movieItem = this.closest('.movie-item');
      const movieTitle = movieItem.querySelector('.movie-item-title').textContent;

      const storedMovies = JSON.parse(localStorage.getItem('storedMovies')) || [];
      if (!storedMovies.some(movie => movie.title === movieTitle)) {
        storedMovies.push({ title: movieTitle });
        localStorage.setItem('storedMovies', JSON.stringify(storedMovies));
        alert(movieTitle + ' listeye eklendi!');
      } else {
        alert(movieTitle + ' zaten listede var!');
      }
    });
  });

  // Tüm filmleri sil butonu işlevi
  const listemItemsContainer = document.querySelector('.listem-items');
  const deleteAllButton = document.getElementById('deleteAllButton');

  deleteAllButton.addEventListener('click', function() {
    const confirmation = confirm("Tüm filmleri silmek istediğinizden emin misiniz?");
    if (confirmation) {
      localStorage.removeItem('storedMovies');
      listemItemsContainer.innerHTML = '';
      alert("Tüm filmler başarıyla silindi!");
    }
  });

  // localStorage'dan filmleri listeleme işlevi
  function displayStoredMovies() {
    const storedMovies = JSON.parse(localStorage.getItem('storedMovies')) || [];

    storedMovies.forEach(function(movie) {
      const listItem = createMovieItem(movie);
      listemItemsContainer.appendChild(listItem);
    });
  }

  // Yeni bir film öğesi oluşturma işlevi
  function createMovieItem(movie) {
    const listItem = document.createElement('div');
    listItem.classList.add('listem-movie');

    const movieTitle = document.createElement('span');
    movieTitle.textContent = movie.title;
    listItem.appendChild(movieTitle);

    return listItem;
  }

  // localStorage'daki filmleri listeleme
  displayStoredMovies();
});


plusIcons.forEach(function(plusIcon) {
  plusIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    const movieItem = this.closest('.movie-item');
    const movieTitle = movieItem.querySelector('.movie-item-title').textContent;
    const movieImgSrc = movieItem.querySelector('.movie-item-img').src;

    const storedMovies = JSON.parse(localStorage.getItem('storedMovies')) || [];
    if (!storedMovies.some(movie => movie.title === movieTitle)) {
      storedMovies.push({ title: movieTitle, imgSrc: movieImgSrc });
      localStorage.setItem('storedMovies', JSON.stringify(storedMovies));
      alert(movieTitle + ' listeye eklendi!');
    } else {
      alert(movieTitle + ' zaten listede var!');
    }
  });
});

function submitForm() {
  var formData = new FormData(document.getElementById("myForm"));
  
  for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
  }
  alert("Mesaj başarıyla gönderildi!");
}

function redirectToLink(url) {
  window.location.href = url;
}



document.addEventListener('DOMContentLoaded', function() {
  const movieList = document.querySelector('.listem-items');

  // Film listesini gizle
  movieList.style.display = 'none';

  // Artı ikonuna tıklandığında film listesini göster
  const toggleButton = document.querySelector('.toggle');
  toggleButton.addEventListener('click', function() {
    if (movieList.style.display === 'none') {
      movieList.style.display = 'block';
    } else {
      movieList.style.display = 'none';
    }
  });
});

document.getElementById("nextpage").addEventListener("click", function() {
  window.location.href = "contact2.html"; // Bu kısmı açmak istediğiniz sayfanın yoluna göre değiştirin
});

// Get the parent element of the buttons
const featuredButtons = document.querySelector('.featured-buttons');

// Add a click event listener to the parent element
featuredButtons.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        // Get the URL from the button's data-url attribute
        const url = event.target.getAttribute('data-url');
        // Call the redirectToLink function with the URL
        redirectToLink(url);
    }
});

// Function to redirect to a URL
function redirectToLink(url) {
  window.location.href = url;
}

