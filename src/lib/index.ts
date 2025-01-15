// place files you want to import through the `$lib` alias in this folder.

export function copyText(text: string) {
    // Tạo một element tạm thời để giữ văn bản
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
  
    // Đặt element ngoài màn hình để không ảnh hưởng giao diện
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
  
    // Thêm vào DOM
    document.body.appendChild(tempInput);
  
    // Chọn nội dung trong element
    tempInput.select();
    tempInput.setSelectionRange(0, text.length);
  
    try {
      // Sao chép nội dung vào clipboard
      document.execCommand("copy");
      console.log("Text copied successfully!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  
    // Loại bỏ element tạm thời
    document.body.removeChild(tempInput);
  }
  