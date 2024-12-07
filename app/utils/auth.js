export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  

 export function getStatusMessage(status) {
    switch (status) {
      case 200:
        return "So'rov muvaffaqiyatli bajarildi. ✅";
      case 201:
        return "Ma'lumot muvaffaqiyatli yaratildi. 🎉";
      case 400:
        return "So'rov noto'g'ri yuborilgan. Iltimos, ma'lumotlarni tekshiring. ⚠️";
      case 401:
        return "Autentifikatsiya talab qilinadi. Tizimga kiring. 🔒";
      case 403:
        return "Sizda ushbu resursga ruxsat yo'q. ❌";
      case 404:
        return "So'ralgan resurs topilmadi. 🔍";
      case 409:
        return "Ma'lumotlar ziddiyatda. Yana urinib ko'ring. 🔄";
      case 500:
        return "Serverda xatolik yuz berdi. Keyinroq urinib ko'ring. 🛠️";
      case 502:
        return "Server noto‘g‘ri javob qaytardi. 🔄";
      case 503:
        return "Server hozirda mavjud emas. Keyinroq urinib ko‘ring. ⏳";
      case 504:
        return "Server javobiga vaqt tugadi. ⌛";
      default:
        return "Noma'lum holat. Kod: " + status + ". ❓";
    }
  }