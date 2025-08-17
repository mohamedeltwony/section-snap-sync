import { Users, Smartphone, Package, Clock, Link, Headphones } from "lucide-react";
import FeatureCard from "./FeatureCard";
import phoneMockup from "@/assets/phone-mockup.png";

const BeatAppSection = () => {
  const features = [
    {
      icon: Users,
      title: "CRM سهل وبالعربية",
      description: "نظام CRM سهل وبالعربية لتبسيط عملك وزيادة إنتاجية فريقك.",
      position: "top-left"
    },
    {
      icon: Smartphone,
      title: "واجهة واحدة لكل شيء",
      description: "كل أدواتك في مكان واحد ومع التنقل بين البرامج.",
      position: "top-right"
    },
    {
      icon: Package,
      title: "باقات مرنة حسب احتياجك",
      description: "اختر الباقة المناسبة لك وعدلها بسهولة لاحقاً.",
      position: "middle-left"
    },
    {
      icon: Clock,
      title: "إعداد سريع خلال 48 ساعة",
      description: "جاهز للعمل خلال يومين فقط - بدون تعقيد.",
      position: "middle-right"
    },
    {
      icon: Link,
      title: "اربط BeatApp بسهولة مع واتساب، الإيميل، ومنصاتك التسويقية المفضلة",
      description: "",
      position: "bottom-left"
    },
    {
      icon: Headphones,
      title: "دعم فني سعودي تواصل مباشر مع فريق يفهم السوق المحلي",
      description: "",
      position: "bottom-right"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" dir="rtl">
            لماذا يختار عملاؤنا{" "}
            <span className="text-primary">BeatApp</span>؟
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" dir="rtl">
            مميزات تجعل BeatApp الخيار الأول لأصحاب الأعمال
          </p>
        </div>

        {/* Features Grid with Phone */}
        <div className="relative grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column Features */}
          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="text-right"
              />
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="flex justify-center lg:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-2xl opacity-20 scale-105"></div>
              <img 
                src={phoneMockup} 
                alt="BeatApp Interface" 
                className="relative z-10 w-80 h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column Features */}
          <div className="space-y-6">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="text-right"
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Features Below Phone */}
        <div className="lg:hidden mt-12 grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="text-right"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeatAppSection;