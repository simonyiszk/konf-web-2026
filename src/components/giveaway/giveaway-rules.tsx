

export default function GiveawayRules() {
  return (
    <div className="w-full px-4 sm:px-6 mt-16 md:mt-24 text-primary-800 pb-20">
      <h2 className="text-3xl md:text-5xl font-aboreto mb-8 md:mb-12 text-center uppercase tracking-wider">
        NYEREMÉNYJÁTÉK-SZABÁLYZAT
      </h2>
      
      <div className="flex flex-col gap-8 md:gap-12 text-base md:text-[1.1rem] lg:text-lg font-medium leading-relaxed">
        <p>
          A Nyereményjáték-szabályzat (a továbbiakban: Szabályzat) vonatkozik a Simonyi Károly Szakkollégium (továbbiakban: Szakkollégium) által szervezett XXII. Simonyi Konferencia (továbbiakban: Esemény) során folyó nyereményjátékokra (továbbiakban: Játék).
        </p>

        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-aboreto mb-2 md:mb-4">
            A Szakkollégium elérhetőségei:
          </h3>
          <p>
            Cím: 1117 Budapest, Irinyi József utca 42. Schönherz Kollégium 1320-as szoba<br />
            E-mail: <a href="mailto:info@simonyi.bme.hu" className="underline hover:text-primary-600 transition-colors underline-offset-4">info@simonyi.bme.hu</a>
          </p>
        </div>

        <div>
           <h3 className="text-2xl md:text-3xl lg:text-4xl font-aboreto mb-2 md:mb-4">
            Az Esemény helyszíne:
          </h3>
          <p>
            Budapesti Műszaki és Gazdaságtudományi Egyetem Villamosmérnöki és Informatikai Karának I épülete<br />
            Cím: 1117 Budapest, Magyar Tudósok Körútja 2. (továbbiakban: Egyetem)
          </p>
        </div>

        <div>
           <h3 className="text-2xl md:text-3xl lg:text-4xl font-aboreto mb-2 md:mb-4">
            1. A Játékban részt vevő személyek
          </h3>
          <p className="mb-2 md:mb-3">
            A Játékban részt vehet minden természetes személy, aki regisztrált az Eseményre a konferencia Cooltix oldalán.<br />
            A Játékban NEM vehetnek részt az alábbi személyek:
          </p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="mr-3 font-bold text-xl leading-none">·</span>
              <span>A Szakkollégium Elnökségének, Szervezeti Bizottságának és Felügyelő Bizottságának tagjai.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-xl leading-none">·</span>
              <span>A rendezvény alatt munkát végző technikai stáb tagjai, vagy lebonyolításban segédkező személyek.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-xl leading-none">·</span>
              <span>Az Esemény szervezői, meghívott előadói és standolói; egyéb, a lebonyolításban közvetlenül közreműködő cégek tulajdonosai, vezető tisztségviselői, munkavállalói, megbízottjai, valamint azok közeli hozzátartozói.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
