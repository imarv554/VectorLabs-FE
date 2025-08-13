"use client";
import AiPmsUI from "@/components/ui/aipmsUI";
import { cn } from "@/lib/util";

export const PricingHoverEffect = () => {
  return (
    <div>
      <Card>
        <AiPmsUI />
      </Card>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full xl:p-4 p-1 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-gray-200 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <h4 className={cn("text-gray-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardIcon = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-100 font-bold tracking-wide mt-4 lg:text-3xl text-lg",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
