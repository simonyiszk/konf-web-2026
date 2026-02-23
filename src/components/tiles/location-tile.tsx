import { FaWaze } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import { Tile } from "./tile";

const mapLinks = {
  google: "https://goo.gl/maps/dkXw1AjgX351WY4J6",
  waze: "https://ul.waze.com/ul?preview_venue_id=12517851.124916363.422156&navigate=yes",
};

export function LocationTile() {
  return (
    <Tile className="sm:col-span-2 lg:col-span-3 min-h-[500px] h-[800px] lg:h-auto md:h-auto text-background">
      <Tile.Body className="max-w-6xl w-full md:px-12 flex lg:flex-row md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col justify-center gap-4 min-w-[300px] flex-1 lg:max-w-[400px]">
          <h1 className="text-center">Helyszín</h1>
          <address className="block text-center text-xl not-italic lg:text-2xl">
            <span className="block">I épület</span>
            <span className="block">Budapest 1117</span>
            <span className="block">Magyar Tudósok Körútja 2.</span>
            <span className="block">Budapest, Magyarország</span>
          </address>
          <div className="flex flex-row justify-center gap-4">
            <a
              className="transition duration-200 hover:text-secondary"
              href={mapLinks.waze}
              target="_blank"
              rel="noreferrer"
            >
              <FaWaze className="text-5xl" />
            </a>
            <a
              href={mapLinks.google}
              target="_blank"
              rel="noreferrer"
              className="transition duration-200 hover:text-secondary"
            >
              <SiGooglemaps className="text-5xl" />
            </a>
          </div>
        </div>
        <div className="order-1 h-full lg:min-h-[300px] md:order-2 md:col-span-2 md:min-h-0 lg:aspect-2 focus:outline-none flex-1 lg:max-w-[600px]">
          <iframe
            title="Térkép"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1348.437074543208!2d19.060099308679057!3d47.47288184641483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddabb29bd997%3A0x4b453205e2d0f96b!2zQk1FIEkgw6lww7xsZXQ!5e0!3m2!1shu!2shu!4v1650888578884!5m2!1shu!2shu"
            className="h-full w-full rounded focus:outline-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Tile.Body>
    </Tile>
  );
}
