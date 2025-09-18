import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Calendar, Users } from 'lucide-react';

const PaymentSuccessPage = () => {
  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "Invoice dan welcome kit telah dikirim ke email Anda"
    },
    {
      icon: Calendar,
      title: "Schedule Onboarding",
      description: "Tim kami akan menghubungi Anda dalam 24 jam untuk penjadwalan"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Akses ke komunitas eksklusif alumni dan mentor"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Payment Successful!
              </h1>
              <p className="text-xl text-muted-foreground">
                Selamat datang di Zeroday101 Exclusive Bootcamp! 
                Perjalanan Anda menuju menjadi cybersecurity expert dimulai sekarang.
              </p>
            </div>

            {/* Payment Details */}
            <Card className="luxury-card mb-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Rp 60.000.000
                  </div>
                  <div className="text-muted-foreground">
                    Zeroday101 Exclusive Bootcamp - 10 Months Program
                  </div>
                </div>
                
                <div className="bg-muted/20 rounded-lg p-4 text-sm">
                  <div className="flex justify-between mb-2">
                    <span>Payment ID:</span>
                    <span className="font-mono">pi_1234567890</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Date:</span>
                    <span>{new Date().toLocaleDateString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-primary font-semibold">Paid</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold">What's Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nextSteps.map((step, index) => (
                  <Card key={index} className="luxury-card">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/kontak'}
              >
                Contact Support
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              Need help? Contact us at{' '}
              <a href="mailto:support@opzero.id" className="text-primary hover:underline">
                support@opzero.id
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;