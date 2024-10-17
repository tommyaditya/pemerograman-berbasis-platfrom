// Fungsi untuk menghitung jumlah petak yang subur dan yang akan ditanami
function kelolaPerkebunan(lahan, cuaca) {
    const SUHU_MIN = 20;
    const SUHU_MAX = 30;
    const KELEMBABAN_MIN = 50;
    const KECEPATAN_ANGIN_MAX = 15;

    let jumlahSubur = 0;
    let jumlahTanam = 0;

    // Memeriksa setiap baris di lahan
    for (let i = 0; i < lahan.length; i++) {
        let suburCount = 0;
        
        // Hitung jumlah petak subur dalam baris
        for (let j = 0; j < lahan[i].length; j++) {
            if (lahan[i][j] === 'subur') {
                suburCount++;
            }
        }
        
        // Jika kurang dari 50% petak dalam baris subur, tandai semua petak sebagai kering
        if (suburCount < lahan[i].length / 2) {
            for (let j = 0; j < lahan[i].length; j++) {
                lahan[i][j] = 'kering';
            }
        } else {
            // Jika baris sesuai, tambahkan jumlah subur
            jumlahSubur += suburCount;
        }
    }

    // Periksa kondisi cuaca untuk penanaman
    const cuacaCocok = cuaca.suhu >= SUHU_MIN && cuaca.suhu <= SUHU_MAX &&
                        cuaca.kelembaban > KELEMBABAN_MIN &&
                        cuaca.kecepatanAngin < KECEPATAN_ANGIN_MAX;

    if (cuacaCocok) {
        // Jika cuaca cocok, hitung jumlah petak yang akan ditanami (hanya petak subur)
        for (let i = 0; i < lahan.length; i++) {
            for (let j = 0; j < lahan[i].length; j++) {
                if (lahan[i][j] === 'subur') {
                    jumlahTanam++;
                }
            }
        }
    } else {
        console.log('Peringatan: Cuaca tidak sesuai untuk penanaman.');
    }

    // Output hasil
    console.log(`Jumlah petak yang subur: ${jumlahSubur}`);
    console.log(`Total petak yang akan ditanami: ${jumlahTanam}`);
}

// Contoh data lahan (2D array)
const lahan = [
    ['subur', 'kering', 'subur', 'tandus'],
    ['subur', 'subur', 'kering', 'kering'],
    ['kering', 'subur', 'subur', 'tandus'],
    ['subur', 'subur', 'subur', 'subur']
];

// Contoh data cuaca (object literal)
const cuaca = {
    suhu: 50,
    kelembaban: 55,
    kecepatanAngin: 10
};

// Jalankan fungsi
kelolaPerkebunan(lahan, cuaca);
