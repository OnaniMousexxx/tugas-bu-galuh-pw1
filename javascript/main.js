// Filter functionality
document.getElementById('filter').addEventListener('change', function () {
  const category = this.value;
  filterBooks(category);
});

function filterBooks(category) {
  const books = document.querySelectorAll('.col');
  books.forEach(book => {
    const bookCategory = book.getAttribute('data-category');
    if (!category || bookCategory === category) {
      book.style.display = '';
    } else {
      book.style.display = 'none';
    }
  });
}

// Search functionality
document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  searchBooks(query);
});

function searchBooks(query) {
  const books = document.querySelectorAll('.card-title');
  books.forEach(bookTitle => {
    const bookCard = bookTitle.closest('.col');
    bookCard.style.display = bookTitle.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
}

// Display modal with book details
document.querySelectorAll('.btnDetail').forEach(button => {
  button.addEventListener('click', function () {
    const title = this.getAttribute('data-title');
    const price = this.getAttribute('data-price');
    const description = this.getAttribute('data-description');
    const imageSrc = this.closest('.card').querySelector('.card-img-top').src;

    showModal(title, price, description, imageSrc);
  });
});

function showModal(title, price, description, imageSrc) {
  const modal = document.getElementById('bookModal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <div class="text-center">
      <img src="${imageSrc}" class="img-fluid mb-3" style="max-width: 100%;">
      <h4>${title}</h4>
      <p>${description}</p>
      <p class="text-danger fw-bold">${price}</p>
      <a href="https://api.whatsapp.com/send?phone=62895710049500&text=Saya ingin membeli produk ini: ${encodeURIComponent(title)}" target="_blank" class="btn btn-warning">Beli Produk Ini</a>
    </div>
  `;
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}
