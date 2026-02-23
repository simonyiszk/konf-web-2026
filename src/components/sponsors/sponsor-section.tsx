import { Company, SponsorCategory } from "@/models/models";
import { SponsorLogo } from "./sponsor-logo";

type Props = {
  sectionTitle: string;
  companies: Company[];
};

export function SponsorSection({ sectionTitle, companies }: Props) {
  const mainSponsor = companies.find(
    (c) => c.category === SponsorCategory.MAIN_SPONSOR
  );
  const featuredSponsors = companies.filter(
    (c) => c.category === SponsorCategory.FEATURED_SPONSOR
  );
  const regularSponsors = companies.filter(
    (c) => c.category === SponsorCategory.SPONSOR
  );

  return (
    <div id="sponsor-container" className="w-full py-12">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-wide">{sectionTitle}</h2>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl">Főtámogatónk</h3>
          {mainSponsor?.logoUrl && (
            <div className="mx-auto w-full max-w-sm rounded-3xl bg-white px-10 py-8 shadow-md">
              <SponsorLogo company={mainSponsor} />
            </div>
          )}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl md:text-3xl">Kiemelt támogatóink</h3>
            <div className="grid grid-cols-2 gap-4">
              {featuredSponsors.map(
                (c) =>
                  c.logoUrl && (
                    <div
                      key={c.name}
                      className="mx-auto flex h-[150px] w-full max-w-[300px] items-center justify-center rounded-2xl bg-white px-4 py-2 shadow-sm"
                    >
                      <SponsorLogo company={c} />
                    </div>
                  )
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl md:text-3xl">További támogatóink</h3>
            <div className="grid grid-cols-2 gap-4">
              {regularSponsors.map(
                (c) =>
                  c.logoUrl && (
                    <div
                      key={c.name}
                      className="mx-auto flex h-[150px] w-full max-w-[300px] items-center justify-center rounded-2xl bg-white px-4 py-2 shadow-sm"
                    >
                      <SponsorLogo company={c} />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
