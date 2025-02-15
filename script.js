let messages = [
    "Hallo cantik.e mas, klik tombol selanjutnya ya",
    "Selamat hari minggu Nafis Rahma Diyanti :v",
    "Senyum dulu atuh",
    "Kok ngga senyum, ulang dong senyum yang bagus :v",
    "Sekarang udah senyum kan?, hehehe",
    "Udah cukup itu aja, lihat sampean senyum mas sampun seneng",
    "Bilang makasihe disini ya, klik gambar wa hehehe",
    "Love you, gpp lopyu walaupun sampean gak suka nek mas bilang lop yu wkwkwk"
];

let currentMessageIndex = 0;

function updateMessage() {
    document.getElementById("message").textContent = messages[currentMessageIndex];
}

function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        updateMessage();
    }
}

function prevMessage() {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        updateMessage();
    }
}

updateMessage();