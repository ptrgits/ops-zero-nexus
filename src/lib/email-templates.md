# Email Templates untuk EmailJS

## Setup EmailJS

1. Daftar di https://www.emailjs.com/
2. Buat service baru (pilih Gmail, Outlook, atau SMTP)
3. Buat 2 template email:

### Template 1: Pendaftaran Baru (template_registration)
**Subject:** [Zeroday101] Pendaftaran Baru - {{from_name}}

**Body:**
```
Pendaftaran Baru Zeroday101 Bootcamp

=== INFORMASI PENDAFTAR ===
Nama Lengkap: {{from_name}}
Email: {{from_email}}
WhatsApp: {{whatsapp}}
Background: {{background}}

=== MOTIVASI & GOALS ===
{{motivation}}

=== PENGALAMAN IT/SECURITY ===
{{experience}}

=== KOMITMEN ===
{{commitment}}

=== INFORMASI TAMBAHAN ===
Tanggal Pendaftaran: {{submission_date}}

---
Email ini dikirim otomatis dari website Zeroday101
```

### Template 3: Customer Invoice (template_customer_invoice)
**Subject:** Invoice Pembayaran Zeroday101 - {{payment_id}}

**Body:**
```
Terima kasih atas pembayaran Anda!

=== INVOICE DETAILS ===
Invoice ID: {{payment_id}}
Tanggal Pembayaran: {{payment_date}}
Status: {{status}}

=== CUSTOMER INFORMATION ===
Nama: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

=== PRODUCT DETAILS ===
Product: {{product_name}}
Amount: {{amount}}

=== NEXT STEPS ===
✅ Pembayaran Anda telah berhasil diproses
✅ Tim kami akan menghubungi Anda dalam 24 jam
✅ Akses ke program akan diberikan setelah onboarding

Jika ada pertanyaan, hubungi:
📧 Email: support@opzero.id
📱 Instagram: @opzeroid

Terima kasih telah bergabung dengan Zeroday101!

---
Zeroday Operations Pvt Ltd
www.opzero.id
```

### Template 4: Admin Invoice (template_admin_invoice)
**Subject:** [PAYMENT] New Payment Received - {{customer_name}}

**Body:**
```
New Payment Notification

=== PAYMENT DETAILS ===
Payment ID: {{payment_id}}
Amount: {{amount}}
Product: {{product_name}}
Date: {{payment_date}}
Status: {{status}}

=== CUSTOMER DETAILS ===
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

=== ADMIN NOTE ===
{{admin_note}}

=== ACTION REQUIRED ===
1. Contact customer within 24 hours
2. Schedule onboarding session
3. Provide program access
4. Add to exclusive community

---
Internal notification from Zeroday101 Payment System
```

### Template 2: Konfirmasi ke Pendaftar (template_confirmation)
**Subject:** Konfirmasi Pendaftaran Zeroday101 - Selamat Datang!

**Body:**
```
Halo {{to_name}},

Terima kasih telah mendaftar di Zeroday101 Bootcamp!

Pendaftaran Anda telah kami terima pada {{submission_date}}.

LANGKAH SELANJUTNYA:
✅ Tim kami akan menghubungi Anda dalam 2 jam
✅ Konsultasi gratis via call/video call
✅ Diskusi program dan proses selanjutnya

Jika ada pertanyaan mendesak, silakan hubungi:
📧 Email: pendaftaran@opzero.id
📱 Instagram: @opzeroid

Salam,
Tim Zeroday Operations

---
Part of Zeroday Operations Pvt Ltd
Website: www.opzero.id
```

## Konfigurasi di src/lib/emailjs.ts

Ganti nilai berikut dengan data dari dashboard EmailJS Anda:
- EMAILJS_SERVICE_ID: ID service yang Anda buat
- EMAILJS_TEMPLATE_ID: 'template_registration'
- EMAILJS_CUSTOMER_INVOICE_TEMPLATE: 'template_customer_invoice'
- EMAILJS_ADMIN_INVOICE_TEMPLATE: 'template_admin_invoice'
- EMAILJS_PUBLIC_KEY: Public key dari dashboard EmailJS

## Testing

1. Buat akun EmailJS dan setup service
2. Buat kedua template di atas
3. Update konfigurasi di emailjs.ts
4. Test form pendaftaran
5. Cek email masuk di pendaftaran@opzero.id
6. Test payment flow dan cek invoice emails