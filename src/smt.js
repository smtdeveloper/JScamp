console.log("smtcoder")

  // Sayacı sıfırla
  let count = 0;

  // Sayaç döngüsünü sakla
  let intervalId;

  // Başlatma butonuna tıklandığında
  document.getElementById("startButton").addEventListener("click", function() {
    // Eğer sayaç döngüsü çalışıyorsa, hiçbir şey yapma
    if (intervalId) return;

    // Sayaç döngüsünü başlat
    intervalId = setInterval(function() {
      count++;
      document.getElementById("counter").innerHTML = count + " SN";
    }, 1000);
  });

  // Durdurma butonuna tıklandığında
  document.getElementById("stopButton").addEventListener("click", function() {
    // Eğer sayaç döngüsü çalışmıyorsa, hiçbir şey yapma
    if (!intervalId) return;

    // Sayaç döngüsünü durdur
    clearInterval(intervalId);
    intervalId = null;
  });

  // Sıfırlama butonuna tıklandığında
  document.getElementById("resetButton").addEventListener("click", function() {
    // Sayaç döngüsünü durdur
    clearInterval(intervalId);

    // Sayacı sıfırla
    count = 0;
    document.getElementById("counter").innerHTML =  count + "SN";
  });