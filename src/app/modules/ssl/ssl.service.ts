import axios from "axios";
import config from "../../../config";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";

const initPayment = async (payload: any) => {
  try {
    const data = {
      store_id: config.ssl.storeId,
      store_passwd: config.ssl.storePass,
      total_amount: payload.total_amount,
      currency: "BDT",
      tran_id: payload.tran_id, // use unique tran_id for each api call
      success_url: "http://localhost:3030/success",
      fail_url: "http://localhost:3030/fail",
      cancel_url: "http://localhost:3030/cancel",
      ipn_url: "http://localhost:3030/ipn",
      product_name: "Semester payment.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: payload.cus_name,
      cus_email: payload.cus_email,
      cus_add1: payload.cus_add1,
      cus_country: "Bangladesh",
      cus_phone: payload.cus_phone,
    };

    const response = await axios({
      method: "POST",
      url: config.ssl.sslPaymentUrl,
      data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    console.log(response);

    return response.data;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "payment error");
  }
};

export const sslService = {
  initPayment,
};
