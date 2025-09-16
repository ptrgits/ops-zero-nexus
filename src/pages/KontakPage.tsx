import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Globe, Mail, MessageCircle, Phone, ArrowRight, MapPin } from 'lucide-react';

const KontakPage = () => {
  const contactMethods = [
    {
      icon: Globe,
      title: "Website",
      value: "www.opzero.id",
      description: "Portal resmi Zeroday Operations",
      action: "Kunjungi Website",
      link: "https://www.opzero.id"
    },
    {
      icon: Mail,
      title: "Email",
      value: "pendaftaran@opzero.id", 
      description: "Email resmi untuk pendaftaran dan informasi",
      action: "Kirim Email",
      link: "mailto:pendaftaran@opzero.id"
    },
    {
      icon: MessageCircle,
      title: "Instagram",
      value: "@opzeroid",
      description: "Follow untuk update terbaru dan konten eksklusif", 
      action: "Follow Instagram",
      link: "https://instagram.com/opzeroid"
    },
    {
      icon: Phone,
      title: "WhatsApp/Telegram",
      value: "Via Instagram DM",
      description: "Hubungi melalui DM Instagram untuk info lebih lanjut",
      action: "Kirim DM",
      link: "https://instagram.com/opzeroid"
    }
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Konsultasi Awal",
      description: "Hubungi kami melalui salah satu channel untuk konsultasi gratis"
    },
    {
      step: "2", 
      title: "Program Assessment",
      description: "Diskusi kebutuhan, background, dan tujuan karir Anda"
    },
    {
      step: "3",
      title: "Registration Process",
      description: "Proses pendaftaran dan pembayaran dengan tim kami"
    },
    {
      step: "4",
      title: "Kickoff Program", 
      description: "Mulai journey intensive training bersama mentor"
    }
  ];

  const faqItems = [
    {
      question: "Apakah ada syarat khusus untuk mendaftar?",
      answer: "Tidak ada syarat gelar khusus. Yang terpenting adalah komitmen tinggi, kemauan belajar intensif 5 hari/minggu, dan mindset yang gigih."
    },
    {
      question: "Bagaimana metode pembayaran?",
      answer: "Silakan konsultasi langsung dengan tim kami untuk informasi detail mengenai metode pembayaran dan kemungkinan cicilan."
    },
    {
      question: "Apakah ada jaminan kerja setelah lulus?",
      answer: "Kami tidak menjanjikan pekerjaan, tapi program dirancang agar lulusan siap kerja dengan portofolio nyata dan skill yang dibutuhkan industri."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mahir?",
      answer: "Program 10 bulan dirancang untuk membangun foundation yang solid. Keahlian akan terus berkembang dengan praktik berkelanjutan setelah lulus."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 surveillance-grid">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Hubungi</span> Kami
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Siap memulai transformasi karir Anda? Konsultasi dengan tim kami dan mulai journey menjadi cybersecurity professional
              </p>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-4 py-2">
                Konsultasi Gratis Available
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Menghubungi Kami</h2>
              <p className="text-lg text-muted-foreground">
                Pilih channel komunikasi yang paling nyaman untuk Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-primary font-medium mb-2">{method.value}</p>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {method.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          {method.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Kirim Pesan</h2>
                <p className="text-lg text-muted-foreground">
                  Atau kirim pesan langsung melalui form di bawah ini
                </p>
              </div>

              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle>Form Konsultasi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nama Lengkap</label>
                      <Input placeholder="Masukkan nama lengkap Anda" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">No. WhatsApp</label>
                    <Input placeholder="Nomor WhatsApp aktif" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Background</label>
                    <Input placeholder="Student/Professional/Freelancer/etc" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Pesan</label>
                    <Textarea 
                      placeholder="Ceritakan tentang goals Anda, pengalaman sebelumnya, atau pertanyaan yang ingin ditanyakan..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Kirim Pesan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Tim kami akan merespons dalam 1x24 jam
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Steps */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Mendaftar</h2>
              <p className="text-lg text-muted-foreground">
                Langkah mudah untuk memulai program Zeroday101
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {registrationSteps.map((step, index) => (
                <Card key={index} className="luxury-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {index < registrationSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Pertanyaan yang sering diajukan calon peserta
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((faq, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Memulai Perjalanan Anda?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Jangan sia-siakan kesempatan untuk menjadi cybersecurity professional. 
                Konsultasi dengan tim kami dan mulai transformasi karir Anda hari ini!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
                  Konsultasi Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  Follow Instagram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KontakPage;