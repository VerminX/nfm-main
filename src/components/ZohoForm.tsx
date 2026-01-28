import { useEffect, useRef, useState } from "react";

interface ZohoFormProps {
  formId: string;
  formUrl: string;
  ariaLabel: string;
  initialHeight: string;
  className?: string;
}

export const ZohoForm = ({
  formId,
  formUrl,
  ariaLabel,
  initialHeight,
  className = "",
}: ZohoFormProps) => {
  const [height, setHeight] = useState(initialHeight);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerId = `zf_div_${formId}`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";

          if (iframeRef.current) {
            const iframeSrc = iframeRef.current.src;
            if (
              iframeSrc.indexOf("formperma") > 0 &&
              iframeSrc.indexOf(zf_perma) > 0
            ) {
              const shouldScroll = zf_ifrm_data.length === 3;

              if (shouldScroll) {
                iframeRef.current.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  setHeight(zf_ifrm_ht_nw);
                }, 500);
              } else {
                setHeight(zf_ifrm_ht_nw);
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage, false);
    return () => {
      window.removeEventListener("message", handleMessage, false);
    };
  }, [formId]);

  // Add ?zf_rszfm=1 for auto-resize if not already present
  const srcUrl = formUrl.includes("zf_rszfm=1")
    ? formUrl
    : `${formUrl}${formUrl.includes("?") ? "&" : "?"}zf_rszfm=1`;

  return (
    <div id={containerId} className={className}>
      <iframe
        ref={iframeRef}
        src={srcUrl}
        aria-label={ariaLabel}
        style={{
          border: "none",
          height: height,
          width: "100%",
          display: "block",
          transition: "all 0.5s ease",
        }}
      />
    </div>
  );
};
