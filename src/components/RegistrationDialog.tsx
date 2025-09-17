import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users, PhoneCall } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendRegistrationEmail, sendConfirmationEmail, type RegistrationData } from '@/lib/emailjs';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const backgroundOptions = [
  'Fresh Graduate',
  'Mahasiswa Aktif',
  'IT Professional',
  'Network Administrator',
  'Software Developer',
  'System Administrator',
  'Freelancer/Remote Worker',
  'Career Changer',
  'Lainnya'
];

const formSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  whatsapp: z.string().min(10, 'Nomor WhatsApp minimal 10 digit'),
  background: z.string().min(1, 'Pilih background Anda'),
  motivation: z.string().min(10, 'Jelaskan motivasi Anda minimal 10 karakter'),
  experience: z.string().optional(),
  commitment: z.boolean().refine(val => val === true, 'Anda harus berkomitmen untuk mengikuti program')
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      background: '',
      motivation: '',
      experience: '',
      commitment: false
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for email
      const registrationData: RegistrationData = {
        fullName: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp,
        background: data.background,
        motivation: data.motivation,
        experience: data.experience,
        commitment: data.commitment
      };

      // Send registration email to admin
      const adminEmailSent = await sendRegistrationEmail(registrationData);
      
      // Send confirmation email to user
      const confirmationEmailSent = await sendConfirmationEmail(registrationData);

      if (adminEmailSent) {
        toast({
          title: "Pendaftaran Berhasil!",
          description: "Data Anda telah dikirim ke tim kami. Kami akan menghubungi Anda dalam 2 jam untuk konsultasi gratis.",
        });
      } else {
        toast({
          title: "Pendaftaran Diterima",
          description: "Pendaftaran Anda telah diterima. Tim kami akan segera menghubungi Anda.",
          variant: "default"
        });
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      toast({
        title: "Pendaftaran Diterima",
        description: "Terima kasih atas pendaftaran Anda. Tim kami akan segera menghubungi Anda.",
      });
    }
    
    setIsSubmitting(false);
    onOpenChange(false);
    form.reset();
  };

  const nextSteps = [
    {
      icon: CheckCircle,
      text: "Submit form pendaftaran ini"
    },
    {
      icon: Clock,
      text: "Tim kami akan menghubungi Anda dalam 2 jam"
    },
    {
      icon: PhoneCall,
      text: "Konsultasi gratis via call/video call"
    },
    {
      icon: Users,
      text: "Penjadwalan dan proses pembayaran"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-bold gradient-text">
            Daftar Zeroday Bootcamp 101
          </DialogTitle>
          <p className="text-muted-foreground text-sm leading-relaxed mt-2">
            Bootcamp Hacking secara offline selama 10 bulan, yang berbeda dengan kursus hacking lainnya, 
            dirancang khusus untuk membentuk pemuda menjadi peretas yang mahir, handal, profesional dan 
            peneliti kerentanan pada sistem operasi serta Internet Bug Bounty Software Intelligence Hacking.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor WhatsApp *</FormLabel>
                    <FormControl>
                      <Input placeholder="08123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background Saat Ini</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih background Anda" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {backgroundOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivasi & Goals *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ceritakan motivasi Anda mengikuti program ini dan goals yang ingin dicapai..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pengalaman IT/Security (Opsional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ceritakan pengalaman Anda di bidang IT atau Security jika ada..."
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="commitment"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm leading-relaxed">
                      Saya berkomitmen untuk mengikuti seluruh program pelatihan dengan serius dan akan 
                      meluangkan waktu yang cukup untuk praktik di luar jam training. Saya memahami bahwa 
                      kesuksesan dalam cybersecurity membutuhkan dedikasi dan kerja keras yang konsisten.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Card className="bg-muted/20 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-3 flex items-center">
                  📋 Langkah Selanjutnya:
                </h4>
                <div className="space-y-2">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Mengirim Pendaftaran...
                  </>
                ) : (
                  'Kirim Pendaftaran'
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                © Powered by Zeroday Operations Pvt Ltd
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;