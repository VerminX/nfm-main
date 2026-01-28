import { TrustBadge } from "@/components/TrustBadge";
import { TestimonialSnippet } from "@/components/TestimonialSnippet";
import { ZohoForm } from "@/components/ZohoForm";

interface ConsultationFormProps {
  className?: string;
  variant?: "default" | "compact";
  showTrustSignals?: boolean;
}

export const ConsultationForm = ({ 
  className = "", 
  variant = "default",
  showTrustSignals = true 
}: ConsultationFormProps) => {
  const initialHeight = variant === "compact" ? "1700px" : "1867px";

  return (
    <div className={className}>
      {/* Trust Signals Above Form */}
      {showTrustSignals && (
        <div className="space-y-4 mb-6">
          <TrustBadge variant="compact" className="justify-center w-full" />
          <TestimonialSnippet
            quote="They actually picked up the phone! That alone sold me."
            name="Sarah M."
            title="Fall Bride"
            variant="compact"
          />
        </div>
      )}

      {/* Zoho Consultation Form */}
      <div className="rounded-lg overflow-hidden border border-border bg-background">
        <ZohoForm
          formId="zUtUnZwhUggkl_4BdkwoIz4CPvRkSCXeOsWkVLQeuVM"
          formUrl="https://forms.zohopublic.com/nashvilleflowermarket1/form/NashvilleFlowerMarketConsultationInquiry/formperma/zUtUnZwhUggkl_4BdkwoIz4CPvRkSCXeOsWkVLQeuVM"
          ariaLabel="Nashville Flower Market Consultation Inquiry"
          initialHeight={initialHeight}
        />
      </div>
    </div>
  );
};
