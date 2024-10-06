// TOGGLE MENU

var navLinks = document.getElementById("navLinks");

    function showMenu (){
      navLinks.style.right = "0";
    }
    function hideMenu (){
      navLinks.style.right = "-200";
    }

// GALERIA

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg(){
  fullImgBox.style.display = "none";
}

// TEST

let currentPage = 1;
const postsPerPage = 5;
let postCounter = 5; // Początkowa liczba postów
let posts = Array.from(document.querySelectorAll('.post'));

// Funkcja do wyświetlania odpowiednich postów na danej stronie
function showPage(page) {
    posts.forEach((post, index) => {
        post.classList.remove('active');
        if (index >= (page - 1) * postsPerPage && index < page * postsPerPage) {
            post.classList.add('active');
        }
    });

    // Zaktualizuj aktywną stronę
    currentPage = page;
    updatePagination();
}

// Funkcja do przechodzenia na następną stronę
function nextPage() {
    if (currentPage * postsPerPage < posts.length) {
        currentPage++;
        showPage(currentPage);
    }
}

// Funkcja do przechodzenia na poprzednią stronę
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Funkcja dodawania nowego postu
function addPost() {
    postCounter++;
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.textContent = `Post ${postCounter}`;

    // Dodajemy nowy post na początek
    document.getElementById('posts').insertBefore(newPost, document.getElementById('posts').firstChild);

    // Aktualizujemy kolekcję postów
    posts = Array.from(document.querySelectorAll('.post'));

    // Sprawdzamy czy liczba postów przekroczyła liczbę na stronie
    if (posts.length > postsPerPage) {
        currentPage = 1; // Wracamy na pierwszą stronę po dodaniu nowego posta
    }

    showPage(currentPage); // Wyświetlamy aktualną stronę
    updatePagination(); // Aktualizujemy numerację stron
}

// Funkcja do aktualizacji przycisków numerów stron
function updatePagination() {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    paginationContainer.innerHTML = ''; // Wyczyść poprzednie przyciski

    // Tworzymy dynamiczne przyciski dla każdej strony
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => showPage(i);

        // Podświetl aktualną stronę
        if (i === currentPage) {
            button.style.fontWeight = 'bold';
        }

        paginationContainer.appendChild(button);
    }
}

// Wyświetlamy pierwszą stronę na początku
showPage(currentPage);
updatePagination();