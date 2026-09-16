document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('wva-read-tooltip');
    let audio = new Audio();

    // Hiển thị nút khi bôi đen văn bản
    document.addEventListener('mouseup', function(e) {
        const selectedText = window.getSelection().toString().trim();
        
        if (selectedText.length > 0) {
            // Đặt vị trí nút bấm nổi lên ngay trên con trỏ chuột
            tooltip.style.display = 'block';
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = (e.pageY - 40) + 'px';
        } else {
            tooltip.style.display = 'none';
        }
    });

    // Ẩn nút khi click ra chỗ khác
    document.addEventListener('mousedown', function(e) {
        if (e.target !== tooltip) {
            tooltip.style.display = 'none';
        }
    });

    // Bắt đầu đọc bằng giọng Google khi bấm nút
    tooltip.addEventListener('click', function() {
        const selectedText = window.getSelection().toString().trim();
        
        if (selectedText.length > 0) {
            audio.pause(); // Dừng nếu đang đọc đoạn cũ
            
            // Mã hóa văn bản để nối vào URL an toàn
            const encodedText = encodeURIComponent(selectedText);
            
            // Gọi URL API của Google Translate (tl=vi là giọng nữ Tiếng Việt mặc định)
            const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&q=${encodedText}`;
            
            audio.src = googleTtsUrl;
            audio.play();
            
            tooltip.style.display = 'none'; // Ẩn nút đi sau khi bấm đọc
        }
    });
});