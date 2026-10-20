
/**
 * Menghasilkan warna acak dalam format hexadecimal.
 */
function generateRandomColor() {
    var randomColor = '#' + Math.floor(
        Math.random() * 16777216
    ).toString(16).padStart(6, '0');

    return randomColor;
}

/**
 * Mengubah warna latar belakang halaman.
 */
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

/**
 * Menampilkan pesan sambutan.
 */
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web.");
}

/**
 * Menjalankan seluruh fungsi saat halaman selesai dimuat.
 */
window.onload = function () {
    // Mengubah warna latar belakang terlebih dahulu.
    changeBackgroundColor();

    // Menampilkan pesan sambutan.
    showWelcomeMessage();

    // Menampilkan proyek jika fungsinya tersedia.
    if (typeof displayProjects === 'function') {
        displayProjects();
    }

    // Menampilkan pengalaman kerja jika fungsinya tersedia.
    if (typeof displayExperience === 'function') {
        displayExperience();
    }
};
