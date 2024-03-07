import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otpq", data).then((res) => res.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then((res) => res.data);
}
