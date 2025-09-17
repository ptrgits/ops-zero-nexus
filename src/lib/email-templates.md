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
- EMAILJS_PUBLIC_KEY: Public key dari dashboard EmailJS

## Testing

1. Buat akun EmailJS dan setup service
2. Buat kedua template di atas
3. Update konfigurasi di emailjs.ts
4. Test form pendaftaran
5. Cek email masuk di pendaftaran@opzero.id