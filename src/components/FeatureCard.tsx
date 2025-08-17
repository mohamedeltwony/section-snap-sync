import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <Card className={`p-6 text-center hover:shadow-feature transition-all duration-300 border-border/50 ${className}`}>
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-xl bg-accent">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;