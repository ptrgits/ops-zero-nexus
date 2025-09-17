import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Award, Users, Target } from 'lucide-react';
import RegistrationDialog from '@/components/RegistrationDialog';

const HomePage = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const features = [
    {
      icon: Shield,
      title: "Pembelajaran Berbasis Praktik",
      description: "100% hands-on training dengan aplikasi nyata dan skenario real-world, memberikan pengalaman langsung yang relevan dengan industri"
    },
    {
      icon: Award,
      title: "Mentor Berpengalaman", 
      description: "Dibimbing langsung oleh praktisi aktif dengan rekam jejak internasional di platform bug bounty dan penelitian keamanan"
    },
    {
      icon: Users,
      title: "Komunitas Profesional",
      description: "Bergabung dengan jaringan eksklusif alumni dan akses ke program kolaborasi dengan mentor berpengalaman"
    },
    {
      icon: Target,
      title: "Siap Berkarir",
      description: "Program dirancang khusus untuk menghasilkan profesional cybersecurity yang siap bekerja dengan portofolio yang solid"
    }
  ];

  const stats = [
    { number: "10", label: "Bulan Intensif" },
    { number: "5", label: "Hari per Minggu" },
    { number: "100%", label: "Hands-on Training" },
    { number: "24/7", label: "Lab Access" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main>
        <section className="pt-24 pb-16 px-6 surveillance-grid">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                  Part of Zeroday Operations
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">Zeroday101</span><br />
                  Bootcamp
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Program cybersecurity intensif selama <strong className="text-primary">10 bulan</strong> yang dirancang khusus untuk membentuk profesional keamanan siber yang berkualitas tinggi dan ahli penelitian kerentanan sistem
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto"
                  onClick={() => window.location.href = '/kurikulum'}
                >
                  Lihat Kurikulum
                </Button>
              </div>

              {/* Important Notice */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-primary font-semibold text-sm mb-2">
                  Program Serius untuk Profesional Masa Depan
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Program ini dirancang khusus untuk individu yang memiliki komitmen serius dalam mengembangkan karir di bidang cybersecurity. 
                  Kami mengutamakan kualitas pembelajaran dan keseriusan peserta dalam mencapai tujuan profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Belajar dengan Benar Caranya Menjadi Hacker
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bagi kami, ethical hacking bukan sekadar mendapatkan sertifikat atau demonstrasi teknis semata. 
                <strong className="text-primary"> Cybersecurity adalah filosofi hidup</strong> yang mencakup cara berpikir analitis, 
                pendekatan metodis dalam pemecahan masalah, dan tindakan yang bertanggung jawab dalam menghadapi tantangan keamanan digital.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Metodologi Pembelajaran Profesional
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Program yang dirancang untuk menghasilkan ethical hacker profesional dengan pendekatan pembelajaran berbasis praktik nyata
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Topics */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Spesialisasi Pembelajaran
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Bug Bounty Profesional</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Memahami konsep bug bounty dan dunia bughunting profesional</li>
                    <li>Membedakan antara CTF-style dan real application bughunting</li>
                    <li>Teknik hacking terhadap aplikasi berbasis Web, API, dan Mobile</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Web Vulnerability Discovery</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>IDOR, XSS (Stored, Reflected, DOM-Based)</li>
                    <li>CSRF, Open Redirect, SSRF, Command Injection</li>
                    <li>RCE, SQLi, Broken Access Control, JWT Abuse</li>
                    <li>Business Logic Vulnerabilities (BOLA, BFLA)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Advanced Exploitation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Zero-day vulnerability discovery dan exploitation</li>
                    <li>Custom exploit development menggunakan Python, Perl</li>
                    <li>Reverse engineering untuk vulnerability analysis</li>
                    <li>Binary exploitation dan memory corruption attacks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan program transformasi karir yang komprehensif. Konsultasikan tujuan profesional Anda dengan tim ahli kami dan mulai perjalanan menuju keahlian cybersecurity tingkat internasional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto"
                onClick={() => setIsRegistrationOpen(true)}
              >
                Konsultasi Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
                onClick={() => window.location.href = '/program'}
              >
                Lihat Program Lengkap
              </Button>
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

export default HomePage;