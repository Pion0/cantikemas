let messages = [
    "Hallo cantik.e mas, klik tombol selanjutnya ya",
    "Selamat hari minggu Nafis Rahma Diyanti :v",
    "Ini kadonya yang mas bilang tadi siang",
    "Berisi tentang apa yang selalu buat mas kepikiran",
    "Sering Setiap hari",
    "Mas kepikiran tentang semua ini",
    "Iyaaa, tentang kita",
    "mas ajeng cerita lewat suara tapi selalu mboten saget",
    "Canda dan tawa yang selalu riang bercengkrama tak pantas untuk digeser dengan kesedihan",
    "Begitulah kenapa selalu susah untuk bercerita tentang rasa",
    "Meski mas merasa sekarang dunia adalah 0%, tapi kenyataanya tidak benar",
    "Segala sesuatu yang kujalani sehari-hari tak luput dengan pikiran",
    "Kekecewaan adalah datang dari harapan yang belum tersampaikan",
    "Mas sering merasa capek, merasa ada yang hilang, merasa sakit tapi tak mengerti dimana dan alasanya",
    "Sejauh ini, rasa sakit tapi tak mengerti alasanya masih ada",
    "Padahal mas sudah sebisa mungkin mencari dan mengatasi tentang rasa sakit itu",
    "Akhirnya mas menemukan jawabannya",
    "kalimat diawal yang mas ulangi, Kekecewaan adalah datang dari harapan yang belum tersampaikan",
    "Kenapa mas merasa sakit tapi tak tau dimana? iyaaa itu adalah karena harapan",
    "harapan dan niat baik yang belum tersampaikan dan terealisasikan",
    "mulut bisa salah ucap, tapi hati kecil tak bisa di bohongi",
    "dulu 1 tahun berlalu adek pernah sanjang 'lupakan aku dan jalani kehidupanmu seperti sediakala' ",
    "setelah hari itu dan sampai saat ini, anugrah dari Tuhan masih sama seperti dulu kala",
    "anugrah yang selalu menuntun kepada jalan yang menurut Tuhan baik bagi hidupku sampai mas dititik ini",
    "bohong jika mas tak memiliki rasa kaleh adek",
    "apakah adek merasakan sakit seperti itu juga?",
    "jika iyaa",
    "mas tak pantas memberi janji atau kepastian",
    "karena hidup segalanya kehendak Tuhan",
    "mas hanya bisa mengusahakan segala yang bisa mas kontrol sebaik mungkin",
    "mas cuma bisa mendoakan kepada Tuhan semoga adek selalu di kuatkan dan diberi yang terbaik atas segalanya",
    "begitulah cerita hari ini",
    "jangan nangis, jangan keluar air matane",
    "minimal nek nangis bengok banter wkwkwkwk",
    "udah lego cuma ajeng sanjang ngoten kok, tapi panjang hehehe"
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
