import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, DollarSign, Calendar, Award } from 'lucide-react';
import RegistrationDialog from '@/components/RegistrationDialog';

const HargaPage = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const includedFeatures = [
    "10 bulan pelatihan intensif (5 hari/minggu)",
    "Akses ke lab internal dan target aplikasi real", 
    "Mentoring personal dari praktisi internasional",
    "Tools premium (Burp Suite Pro, IDA Pro Powerful Disassembler)",
    "Materi pembelajaran terbaru (diupdate annually)",
    "Live simulation dengan platform HackerOne/Bugcrowd",
    "Workshop exploit development dan payload crafting",
    "Pentest simulation dan report writing",
    "CVE writing dan vulnerability documentation",
    "Komunitas alumni dan networking"
  ];

  const outputBenefits = [
    "Sertifikat Zeroday Operations Pvt (verifiable)",
    "Portofolio report bug valid (untuk melamar kerja)",
    "Penguasaan membuat exploitation tools dengan Python, Perl, dan lainnya",
    "Akses ke komunitas tertutup alumni",
    "Pembimbingan lanjutan setelah lulus",
    "Kolaborasi pada private program di semua platform (Bugcrowd, HackerOne, dll)",
    "Akses diskusi langsung ke opzero.ru (dengan prosedur ketat)"
  ];

  const paymentOptions = [
    {
      title: "Konsultasi Gratis",
      description: "Diskusi program dan investasi dengan tim kami",
      price: "FREE",
      features: ["30 menit konsultasi", "Program overview", "Career guidance", "Q&A session"]
    },
    {
      title: "Early Bird Special",
      description: "Promo terbatas untuk pendaftar awal",
      price: "DISCOUNT",
      features: ["Special early bird pricing", "Premium tools akses", "Bonus mentoring session", "Priority support"]
    }
  ];

  const investmentComparison = [
    {
      aspect: "Durasi Program",
      zeroday: "10 bulan intensif",
      competitor: "3-6 bulan singkat"
    },
    {
      aspect: "Mentor Quality", 
      zeroday: "Top ranker HackerOne + CVE contributor",
      competitor: "Instructor biasa"
    },
    {
      aspect: "Learning Approach",
      zeroday: "100% real-world applications",
      competitor: "Simulasi dan teori"
    },
    {
      aspect: "Tools Included",
      zeroday: "Burp Suite Pro + IDA Pro + Custom Tools",
      competitor: "Basic tools saja"
    },
    {
      aspect: "Post-graduation Support",
      zeroday: "Alumni community + ongoing mentorship",
      competitor: "Sertifikat saja"
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
                <span className="gradient-text">Investasi</span> untuk Masa Depan
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Program komprehensif dengan nilai yang sebanding dengan bootcamp cybersecurity internasional
              </p>
            </div>
          </div>
        </section>

        {/* Main Pricing Card */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <Card className="luxury-card border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Early Bird
                </div>
                <CardHeader className="text-center pb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary w-fit mx-auto mb-4">
                    Zeroday101 Bootcamp
                  </Badge>
                  <CardTitle className="text-2xl mb-2">Comprehensive Cybersecurity Training Program</CardTitle>
                  
                  <div className="flex items-center justify-center space-x-4 mt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">Rp 60.000.000</div>
                      <div className="text-muted-foreground text-sm">IDR</div>
                    </div>
                    <div className="text-muted-foreground">atau</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent">$3,600 USD</div>
                      <div className="text-muted-foreground text-sm">International</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Discount khusus untuk early bird registration
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-primary">Yang Termasuk dalam Program:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {includedFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-accent">Output Setelah Lulus:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {outputBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-4"
                      onClick={() => setIsRegistrationOpen(true)}
                    >
                      Hubungi Kami untuk Informasi Harga
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-3">
                      Konsultasi gratis untuk membahas program dan investasi
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Opsi Konsultasi</h2>
              <p className="text-lg text-muted-foreground">
                Pilih cara terbaik untuk memulai journey Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {paymentOptions.map((option, index) => (
                <Card key={index} className="luxury-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {option.title}
                      <Badge variant={index === 1 ? "default" : "secondary"} className={index === 1 ? "bg-primary text-primary-foreground" : ""}>
                        {option.price}
                      </Badge>
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant={index === 1 ? "default" : "outline"} 
                      className="w-full"
                      onClick={() => setIsRegistrationOpen(true)}
                    >
                      {index === 1 ? "Daftar Early Bird" : "Konsultasi Gratis"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Comparison */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Zeroday101?</h2>
              <p className="text-lg text-muted-foreground">
                Bandingkan value yang Anda dapatkan dengan program lain
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-center">Perbandingan Value Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investmentComparison.map((comparison, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-border last:border-b-0">
                        <div className="font-medium">{comparison.aspect}</div>
                        <div className="text-primary text-sm">{comparison.zeroday}</div>
                        <div className="text-muted-foreground text-sm">{comparison.competitor}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Promo Terbatas
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Daftar sekarang dan dapatkan akses ke tools premium serta bonus mentoring session!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setIsRegistrationOpen(true)}
                    >
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => setIsRegistrationOpen(true)}
                    >
                      Konsultasi Terlebih Dahulu
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Promo early bird terbatas untuk pendaftar bulan ini
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <RegistrationDialog 
        open={isRegistrationOpen} 
        onOpenChange={setIsRegistrationOpen} 
      />
    </div>
  );
};

export default HargaPage;