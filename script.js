// Menampilkan preview foto yang diupload
document.getElementById('photo').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Formulir submit handler
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulir telah dikirim!');
});
