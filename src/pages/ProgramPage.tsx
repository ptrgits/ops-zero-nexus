import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Target, Code, Shield } from 'lucide-react';

const ProgramPage = () => {
  const programHighlights = [
    {
      icon: Clock,
      title: "10 Bulan Intensif",
      description: "5 hari per minggu, libur weekend untuk fokus maksimal"
    },
    {
      icon: Users,
      title: "Mentor Berpengalaman",
      description: "Praktisi aktif dunia internasional dengan track record terbukti"
    },
    {
      icon: Award,
      title: "Sertifikat Resmi",
      description: "Zeroday Operations verifiable dengan standar industri"
    },
    {
      icon: Target,
      title: "Real-World Focus",
      description: "100% hands-on dengan aplikasi nyata, bukan simulasi"
    }
  ];

  const targetAudience = [
    {
      title: "Siswa / Mahasiswa",
      description: "Yang ingin menjadi pentester profesional dan membangun karir di bidang cybersecurity",
      tag: "Fresh graduates welcome"
    },
    {
      title: "Profesional TI",
      description: "Yang ingin alih jalur ke bidang cybersecurity dengan skill yang marketable",
      tag: "Career transition"
    },
    {
      title: "Freelancer / Remote Worker",
      description: "Yang ingin mendapatkan penghasilan dari platform bug bounty global",
      tag: "Global opportunities"
    },
    {
      title: "Aspiring Bug Hunter",
      description: "Siapa pun yang serius ingin menjadi bughunter profesional dengan income yang stabil",
      tag: "Professional mindset"
    }
  ];

  const requirements = [
    "Serius ingin berkarir di cybersecurity",
    "Siap belajar intensif 5 hari/minggu",
    "Memiliki growth mindset yang kuat",
    "Tidak mudah menyerah dan gigih",
    "Tidak butuh gelar tinggi — yang dibutuhkan kemauan dan kerja keras"
  ];

  const outputs = [
    "Sertifikat Zeroday Operations Pvt (verifiable)",
    "Portofolio report bug valid (untuk melamar kerja)",
    "Penguasaan membuat exploitation tools dengan Python, Perl, dan lainnya",
    "Akses ke komunitas tertutup alumni",
    "Pembimbingan lanjutan setelah lulus",
    "Kolaborasi pada private program di semua platform (Bugcrowd, HackerOne, dll)",
    "Akses diskusi langsung ke opzero.ru (dengan prosedur ketat)"
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
                Program <span className="gradient-text">Zeroday101</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Program komprehensif yang mencakup semua aspek cybersecurity dan ethical hacking dengan pendekatan real-world
              </p>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlight Program</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {programHighlights.map((highlight, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Untuk Siapa Program Ini?</h2>
              <p className="text-lg text-muted-foreground">
                Dirancang untuk individu yang serius ingin berkarir di dunia cybersecurity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {targetAudience.map((audience, index) => (
                <Card key={index} className="luxury-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{audience.title}</CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {audience.tag}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Persyaratan Penting</h2>
                <p className="text-muted-foreground mb-6">
                  Program ini membutuhkan komitmen tinggi dan dedikasi penuh. Hanya untuk mereka yang:
                </p>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Output Setelah Lulus</h2>
                <div className="space-y-4">
                  {outputs.map((output, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{output}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="luxury-card bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Filosofi Kami
                  </h2>
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "Hacking adalah gaya hidup yang meliputi bagaimana cara kita berfikir, menganalisa dan bertindak atas suatu keadaan atau tantangan."
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">
                      Bagi kami, hacking bukan hanya soal sertifikat atau demo. Ini adalah mindset profesional yang akan mengubah cara Anda memandang teknologi dan keamanan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramPage;