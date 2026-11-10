document.getElementById('year').textContent = new Date().getFullYear();

const formLink = document.getElementById('open-form-link');
if (formLink) {
  formLink.addEventListener('click', (event) => {
    const href = formLink.getAttribute('href');
    if (href.includes('your-google-form-link')) {
      event.preventDefault();
      alert('Please replace the placeholder Google Form URL with your real Google Form link before publishing.');
    }
  });
}
