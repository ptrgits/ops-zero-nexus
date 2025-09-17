import emailjs from 'emailjs-com';

// Konfigurasi EmailJS
const EMAILJS_SERVICE_ID = 'service_bxqcf9f'; // Ganti dengan Service ID Anda
const EMAILJS_TEMPLATE_ID = 'template_yitys0f'; // Ganti dengan Template ID Anda
const EMAILJS_PUBLIC_KEY = 'b8vAUvcPDduL4Mwxj'; // Ganti dengan Public Key Anda

export interface RegistrationData {
  fullName: string;
  email: string;
  whatsapp: string;
  background: string;
  motivation: string;
  experience?: string;
  commitment: boolean;
}

export const sendRegistrationEmail = async (data: RegistrationData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'pendaftaran@opzero.id',
      from_name: data.fullName,
      from_email: data.email,
      whatsapp: data.whatsapp,
      background: data.background,
      motivation: data.motivation,
      experience: data.experience || 'Tidak ada pengalaman sebelumnya',
      commitment: data.commitment ? 'Ya, berkomitmen penuh' : 'Tidak',
      submission_date: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Fungsi untuk mengirim email konfirmasi ke pendaftar
export const sendConfirmationEmail = async (data: RegistrationData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: data.email,
      to_name: data.fullName,
      submission_date: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_confirmation', // Template ID untuk email konfirmasi
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return false;
  }
};