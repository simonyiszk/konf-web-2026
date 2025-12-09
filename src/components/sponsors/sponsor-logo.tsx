import clsx from "clsx";

import { Company, SponsorCategory } from "@/models/models";
import {JSX} from "react";

function ConditionalWrapper({
  condition,
  renderWrapper: wrapper,
  children,
}: {
  condition: boolean;
  renderWrapper: (arg0: JSX.Element) => JSX.Element;
  children: JSX.Element;
}) {
  return condition ? wrapper(children) : children;
}

type Props = {
  company: Company;
};

export function SponsorLogo({
  company: { logoUrl, name, url, category },
}: Props) {
  if (!logoUrl) {
    return null;
  }
  return (
    <ConditionalWrapper
      condition={!!url}
      renderWrapper={(children) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    >
      <div className="relative p-2 h-full">
        <img
          loading="lazy"
          src={logoUrl}
          alt={`${name} logo`}
          height={category === SponsorCategory.MAIN_SPONSOR ? "auto" : "75"}
          className={clsx(
            category === SponsorCategory.MAIN_SPONSOR ? "" : "max-h-[75px]",
            "mx-auto my-auto h-full object-contain block"
          )}
        />
      </div>
    </ConditionalWrapper>
  );
}
