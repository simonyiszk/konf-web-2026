import { FaWaze } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const mapLinks = {
  google: "https://goo.gl/maps/dkXw1AjgX351WY4J6",
  waze: "https://ul.waze.com/ul?preview_venue_id=12517851.124916363.422156&navigate=yes",
};

export function LocationTile() {
  return (
    <div className="col-span-2 rounded-[30px] overflow-hidden bg-background text-text flex flex-row min-h-[300px]">
      <div className="flex flex-col justify-center gap-4 px-10 py-10 w-[40%] shrink-0">
        <h1 className="text-text">Helyszín</h1>
        <address className="block text-xl not-italic leading-relaxed">
          <span className="block font-bold text-2xl">BME I épület</span>
          <span className="block">Budapest 1117</span>
          <span className="block">Magyar Tudósok Körútja 2.</span>
          <span className="block">Budapest, Magyarország</span>
        </address>
        <div className="flex flex-row gap-4">
          <a
            className="transition duration-200 hover:text-secondary"
            href={mapLinks.waze}
            target="_blank"
            rel="noreferrer"
          >
            <FaWaze className="text-4xl" />
          </a>
          <a
            href={mapLinks.google}
            target="_blank"
            rel="noreferrer"
            className="transition duration-200 hover:text-secondary"
          >
            <SiGooglemaps className="text-4xl" />
          </a>
        </div>
      </div>
      <div className="flex-1 min-h-[300px]">
        <iframe
          title="Térkép"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1348.437074543208!2d19.060099308679057!3d47.47288184641483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2zQk1FIEkgw6lww7xsZXQ!5e0!3m2!1shu!2shu!4v1650888578884!5m2!1shu!2shu"
          className="h-full w-full focus:outline-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
