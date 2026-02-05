import * as yup from "yup";

// YUP şeması ile formdaki alanların geçerli olması için gerekli koşulları belirle
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("başlık alanı zorunludur")
    .min(3, "başlık en az 3 karakter olmalı")
    .max(40, "başlık en fazla 40 karakter olabilir"),
  location: yup
    .string()
    .required("konum alanı zorunludur")
    .min(3, "konum en az 3 karakter olmalıdır")
    .max(40, "konum en fazla 40 karakter olabilir"),
  address: yup
    .string()
    .required("adres alanı zorunludur")
    .min(3, "adres en az 3 karakter olmalıdır")
    .max(40, "adres en fazla 40 karakter olabilir"),
  description: yup
    .string()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalıdır")
    .max(200, "açıklama en fazla 200 karakter olabilir"),
  amenities: yup
    .string()
    .required("özellikler alanı zorunludur")
    .min(3, "özellikler en az 3 karakter olmalıdır")
    .max(80, "özellikler en fazla 40 karakter olabilir"),
  rating: yup
    .number()
    .required("rating alanı zorunludur")
    .min(1, "rating en az 1 olabilir")
    .max(5, "rating en fazla 5 olabilir"),
  price_per_night: yup
    .number()
    .required("fiyat alanı zorunludur")
    .positive("fiyat pozitif olmalıdır")
    .max(99999, "fiyat en fazla 99999 olabilir"),
  availability: yup.boolean(),
});
