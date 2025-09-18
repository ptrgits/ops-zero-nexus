import emailjs from 'emailjs-com';
import { InvoiceData } from './stripe';

// EmailJS configuration for invoices
const EMAILJS_SERVICE_ID = 'service_bxqcf9f'; // Same as registration
const EMAILJS_CUSTOMER_INVOICE_TEMPLATE = 'template_customer_invoice';
const EMAILJS_ADMIN_INVOICE_TEMPLATE = 'template_admin_invoice';
const EMAILJS_PUBLIC_KEY = 'b8vAUvcPDduL4Mwxj';

export const sendCustomerInvoice = async (invoiceData: InvoiceData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: invoiceData.customer.email,
      to_name: invoiceData.customer.name,
      payment_id: invoiceData.paymentId,
      amount: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(invoiceData.amount),
      product_name: invoiceData.product,
      payment_date: new Date(invoiceData.paymentDate).toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customer_name: invoiceData.customer.name,
      customer_email: invoiceData.customer.email,
      customer_phone: invoiceData.customer.phone,
      status: invoiceData.status.toUpperCase()
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CUSTOMER_INVOICE_TEMPLATE,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Customer invoice sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send customer invoice:', error);
    return false;
  }
};

export const sendAdminInvoice = async (invoiceData: InvoiceData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'invoice@opzero.id',
      payment_id: invoiceData.paymentId,
      amount: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(invoiceData.amount),
      product_name: invoiceData.product,
      payment_date: new Date(invoiceData.paymentDate).toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customer_name: invoiceData.customer.name,
      customer_email: invoiceData.customer.email,
      customer_phone: invoiceData.customer.phone,
      status: invoiceData.status.toUpperCase(),
      admin_note: `New payment received from ${invoiceData.customer.name}. Customer has been enrolled in Zeroday101 Exclusive Bootcamp.`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_ADMIN_INVOICE_TEMPLATE,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Admin invoice sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send admin invoice:', error);
    return false;
  }
};

export const sendInvoiceEmails = async (invoiceData: InvoiceData): Promise<{
  customerInvoiceSent: boolean;
  adminInvoiceSent: boolean;
}> => {
  const [customerInvoiceSent, adminInvoiceSent] = await Promise.all([
    sendCustomerInvoice(invoiceData),
    sendAdminInvoice(invoiceData)
  ]);

  return {
    customerInvoiceSent,
    adminInvoiceSent
  };
};