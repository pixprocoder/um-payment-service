import { sslService } from "../ssl/ssl.service";

const initPayment = async (data: any) => {
  const paymentSession = await sslService.initPayment({
    total_amount: data.amount,
    tran_id: data.transactionId,
    cus_name: data.studentName,
    cus_email: data.studentEmail,
    cus_add1: data.customerAddress,
    cus_phone: data.customerPhone,
  });
  return paymentSession;
};

export const PaymentService = {
  initPayment,
};
