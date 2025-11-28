function doGet(e) {
  var sourceUrl = 'https://example.com/archive.zip';
  var fileName = 'archive.zip';
  
  var messages = [
    'Downloading started... (English)',
    'Скачивание началось... (Русский)',
    '下载已开始... (中文)',
    'La descarga ha comenzado... (Español)',
    'تم بدء التنزيل... (العربية)',
    'डाउनलोड शुरू हो गया... (हिन्दी)',
    'O download começou... (Português)',
    'ダウンロードが開始されました... (日本語)',
    'Le téléchargement a commencé... (Français)',
    'Der Download wurde gestartet... (Deutsch)',
    '다운로드가 시작되었습니다... (한국어)',
    'Download dimulai... (Bahasa Indonesia)',
    'İndirme başladı... (Türkçe)',
    'Tải xuống đã bắt đầu... (Tiếng Việt)',
    'การดาวน์โหลดเริ่มต้นแล้ว... (ไทย)',
    'Download avviato... (Italiano)',
    'Pobieranie rozpoczęte... (Polski)',
    'Завантаження розпочалось... (Українська)',
    'Download gestart... (Nederlands)',
    'Nedladdningen har startat... (Svenska)',
    'Lataus aloitettu... (Suomi)',
    'Stahování zahájeno... (Čeština)',
    'A letöltés elkezdődött... (Magyar)',
    'Λήψη ξεκίνησε... (Ελληνικά)',
    'ההורדה החלה... (עברית)',
    'Descărcarea a început... (Română)',
    'Preuzimanje je počelo... (Hrvatski)',
    'Preberanie sa začalo... (Slovenčina)',
    'Prenos se je začel... (Slovenščina)',
    'Muat turun dimulakan... (Bahasa Melayu)',
    'Ang pag-download ay nagsimula... (Filipino)',
    'ডাউনলোড শুরু হয়েছে... (বাংলা)',
    'ڈاؤن لوڈ شروع ہو گیا... (اردو)',
    'دانلود شروع شد... (فارسی)',
    'ดาวน์โหลดเริ่มต้นแล้ว... (ไทย)',
    'Tải về đã bắt đầu... (Tiếng Việt)',
    'ダウンロード開始... (日本語)',
    'Indlæsning startet... (Dansk)',
    'Nedlasting startet... (Norsk)',
    'Descarga iniciada... (Català)',
    'Deskarga hasi da... (Euskara)',
    'Започна изтеглянето... (Български)',
    'Завантажэнне пачалося... (Беларуская)',
    'Preuzimanje je započelo... (Srpski)',
    'Жүктеу басталды... (Қазақша)',
    'Yuklab olish boshlandi... (O\'zbek)',
    'გადმოწერა დაიწყო... (ქართული)',
    'Ներdelays- delays սdelays... (Հայերdelays)',
    'Unduh dimulai... (Jawa)',
    'பதிவிறக்கம் தொடங்கியது... (தமிழ்)'
  ];
  
  try {
    var response = UrlFetchApp.fetch(sourceUrl);
    var blob = response.getBlob();
    var base64 = Utilities.base64Encode(blob.getBytes());
    var mimeType = blob.getContentType() || 'application/zip';
    
    var messagesList = messages.map(function(msg) {
      return '<p>' + msg + '</p>';
    }).join('');
    
    var html = '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
      '<style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.8;}p{margin:5px 0;}</style>' +
      '</head><body>' +
      '<script>' +
      'var a = document.createElement("a");' +
      'a.href = "data:' + mimeType + ';base64,' + base64 + '";' +
      'a.download = "' + fileName + '";' +
      'document.body.appendChild(a);' +
      'a.click();' +
      '</script>' +
      messagesList +
      '</body></html>';
    
    return HtmlService.createHtmlOutput(html);
  } catch (error) {
    return HtmlService.createHtmlOutput('Ошибка: ' + error.message);
  }
}