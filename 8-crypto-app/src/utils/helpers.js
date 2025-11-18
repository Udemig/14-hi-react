// fiyatı formatla
export const formatPrice = (price) => {
  if (!price) return "N/A";

  if (price < 0.01) {
    return "$" + price.toFixed(6);
  } else if (price < 1) {
    return "$" + price.toFixed(4);
  } else if (price < 100) {
    return "$" + price.toFixed(2);
  }

  return "$" + price.toLocaleString();
};

// % değeri formatla
export const formatPercentage = (percentage) => {
  if (!percentage) return "N/A";

  // sayının mutlak değerini
  const formatted = Math.abs(percentage).toFixed(2);

  // işaratini belirle
  const sign = percentage >= 0 ? "+" : "-";

  // işaretini ekle ve return et
  return `${sign}${formatted}%`;
};

// Büyük sayıları formatla
export const formatBigNumber = (number) => {
  if (!number) return "N/A";

  if (number > 1e12) {
    return "$" + (number / 1e12).toFixed(2) + "T";
  } else if (number > 1e9) {
    return "$" + (number / 1e9).toFixed(2) + "Mr";
  } else if (number > 1e6) {
    return "$" + (number / 1e6).toFixed(2) + "Mn";
  } else {
    return "$" + number.toLocaleString();
  }
};

// tarihi formatla
export const formatDate = (timestamp, days) => {
  const date = new Date(timestamp);

  if (days === 1) {
    // 24s seçiliyse saat ve dakikayı döndür
    return date.toLocaleTimeString("tr", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (days === 7) {
    // 1 hafta seçiliyse gün / ay / gün_ismi döndür
    return date.toLocaleDateString("tr", {
      day: "2-digit",
      month: "2-digit",
      weekday: "short",
    });
  } else {
    // 1 haftadan büyükse gün / ay döndür
    return date.toLocaleDateString("tr", {
      day: "2-digit",
      month: "2-digit",
    });
  }
};
