import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then((res) => res.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then((res) => res.data.data);
}

export function completeProfileFunc(data) {
  return http.post("/user/complete-profile", data).then((res) => res.data.data);
}
