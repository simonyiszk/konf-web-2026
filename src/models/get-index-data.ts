import {IndexPageData, SponsorCategory} from "./models";

export async function getIndexData(): Promise<IndexPageData | undefined> {
  const res = await fetch(
    "https://konf-api.kir-dev.hu/api/conference/index",
    // `${process.env.NEXT_PUBLIC_BACKEND_URL}/conference/index`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    console.error(res);
    return;
  }
  return res.json();
}

/*
export function getIndexData(): IndexPageData {
  return {
    previousConferences: {
      sectionTitle: "Korábbi Konferenciák",
      conferences: [
        {
          title: "XI. Simonyi Konferencia",
          priority: 2014,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/142_1T3L11CK7LF47.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/140_S915Y02SOPM6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/143_DNBSIBRMP9DZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/144_BJ3HBV3GOWMH.jpg"]
        },
        {
          title: "XII. Simonyi Konferencia",
          priority: 2015,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/151_SQ9A8QWTXWQN.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/152_1Q7KK5KX4YBIV.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/153_9FU519W7TH8F.jpg"]
        },
        {
          title: "XIII. Simonyi Konferencia",
          priority: 2016,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/160_1JX0198DV07MH.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/161_SYM47ZLR8GGE.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/162_11XWZ4FNQ9DBP.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/163_1QL08QI599C1J.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/164_3O8JG2TPMLDL.jpg"]
        },
        {
          title: "XIV. Simonyi Konferencia",
          priority: 2017,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/170_17YZN0T8W8O6Y.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/171_1F1O03S5T9593.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/172_1BCALSLXIVAKY.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/173_1F03OAFE8YUR1.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/174_L4E25F0S1QI9.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/175_EUBMAK7ALI9I.jpg"]
        },
        {
          title: "XV. Simonyi Konferencia",
          priority: 2018,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/180_MA647JLAC951.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/181_1QSSOBJO45RGH.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/182_N7NXOKGLTUQP.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/183_KVB2CSBG8JXZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/184_17JE7AX35XQ2S.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/185_TC20N8JWJTZ5.jpg"]
        },
        {
          title: "XVI. Simonyi Konferencia",
          priority: 2019,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/190_1RP1NSFPRPPSZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/191_1JLGE6D4YFUUU.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/192_9GZX87PZLSZM.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/193_MR97TO016PRC.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/194_ND4453NJ74JE.jpg"]
        },
        {
          title: "XVIII. Simonyi Konferencia",
          priority: 2021,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/210_1XZ7VBT5IX86F.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/211_1OSAHMCXDUJSV.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/212_2IAQW3MBBHJD.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/213_7XBGP1T8NDY1.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/214_1NSR45D6BGO14.jpg"]
        },
        {
          title: "XIX. Simonyi Konferencia",
          priority: 2022,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/220_M07533I9BQ1O.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/221_1BA52QSCQYU5L.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/222_DGBBP06MYQWH.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/223_13DNNGFCAYSHN.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/224_12RHWT9ZH5XOE.jpg"]
        },
        {
          title: "XX. Simonyi Konferencia",
          priority: 2023,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/235_18Z1VYJ0CXVS6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/230_X3MJ12QB10GZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/231_6ZIWQ82Z1F53.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/232_RSQC4L4K073C.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/233_4INJ96IS3FN0.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/234_YNHGOQTAPU06.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/235_18Z1VYJ0CXVS6.jpg"]
        },
        {
          title: "XXI. Simonyi Konferencia",
          priority: 2024,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/240_1EQ2KN5MOKWY6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/241_6C4W0WB0USPI.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/242_PKP2IMBT97O5.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/243_1BQABVYNDF2E.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/244_1U1EU9RVSRCCH.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/245_1903MXIPSAJ5U.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/246_Z23469O5J61R.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/247_GA0P2ROIWQY4.jpg"]
        },
        {
          title: "xxiii. Simonyi Konferencia",
          priority: 2025,
          imageUrls: [],
        }
      ]
    },
    //registration: {buttonText: "Regisztráció", cooltixEventId: "https://url.com/"},
    // mobilApp: {
    //   description: "Maradj naprakész a KonferenciApp segítségével!            Légy mindig képben a programtervvel, kapj valós idejű híreket,             navigálj könnyedén interaktív térképek segítségével, és fedezd fel             az egyéb izgalmas funkciókat, hogy még jobb legyen a konferencia             élményed.",
    //   androidUrl: "https://play.google.com/store/apps/details?id=com.kirdev.konferenciapp&hl=hu",
    //   iosUrl: "https://apps.apple.com/hu/app/konferenciapp/id6478986330?platform=iphone"
    // },
    // giveaway: {
    //   sectionTitle: "Nyereményjáték",
    //   description: "",
    //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/SWITCH_XZ82DGVEXP42.png",
    //   rules: "# Nyereményjáték-\r\n# szabályzat\r\n\r\nA **Nyereményjáték-szabályzat** (a továbbiakban: **Szabályzat**) vonatkozik a **Simonyi Károly Szakkollégium** (továbbiakban: **Szakkollégium**) által szervezett **xxiii. Simonyi Konferencia** (továbbiakban: **Esemény**) során folyó nyereményjátékokra (továbbiakban: **Játék**).\r\n\r\n## A Szakkollégium elérhetőségei:\r\n\r\n- **Cím:** 1117 Budapest, Irinyi József utca 42. Schönherz Kollégium 1320-as szoba  \r\n- **E-mail:** [info@simonyi.bme.hu](mailto:info@simonyi.bme.hu)\r\n\r\n## Az Esemény helyszíne:\r\n\r\n- **Budapesti Műszaki és Gazdaságtudományi Egyetem** Villamosmérnöki és Informatikai Karának **I épülete**  \r\n- **Cím:** 1117 Budapest, Magyar Tudósok Körútja 2. (továbbiakban: **Egyetem**)\r\n\r\n## 1. A Játékban részt vevő személyek\r\n\r\nA Játékban részt vehet minden természetes személy, aki regisztrált az Eseményre a konferencia Cooltix oldalán.\r\n\r\n**A Játékban NEM vehetnek részt az alábbi személyek:**\r\n\r\n- A Szakkollégium Elnökségének, Szervezeti Bizottságának és Felügyelő Bizottságának tagjai.\r\n- A rendezvény alatt munkát végző technikai stáb tagjai, vagy lebonyolításban segédkező személyek.\r\n- Az Esemény szervezői, meghívott előadói és standolói; egyéb, a lebonyolításban közvetlenül közreműködő cégek tulajdonosai, vezető tisztségviselői, munkavállalói, megbízottjai, valamint azok közeli hozzátartozói.\r\n\r\n## 2. A Játék leírása\r\n\r\nAz Eseményhez köthető általános nyereményjáték során a Játékos érvényes regisztrációval rendelkezik és leadta jelentkezését az Esemény regisztrációs pultjánál.\r\n\r\n## 3. A Játék időtartama\r\n\r\nA Játék 2025. március 18. 09:30 és 2025. március 18. 17:00 között tart.\r\n\r\n## 4. Jelentkezés a Játékra\r\n\r\nA Játékra jelentkezni 2025. március 18. 09:30 és 17:00 között van lehetőség a Konferencia regisztrációs pultjánál.\r\n\r\nEgy Játékos mind az összes nyereményjátékban csak egyszer vehet részt.\r\n\r\n*A nyeremények átvételéhez szükséges lehet a pontos név, személyi igazolvány szám és lakcím megadása.*\r\n\r\nA Játékos a nyereményjátékban való részvételével elfogadja a Nyereményjáték-szabályzatot és a szabályzatban foglaltak szerint hozzájárult személyes adatai kezeléséhez.\r\n\r\n## 5. Nyeremény\r\n\r\nAmennyiben a nyeremény átvételének időpontjában nem áll rendelkezésre a megjelölt termék, akkor ahhoz értékben hasonló ajándéktárgy kerül átadásra.\r\n\r\n**A nyeremények más részére át nem ruházhatók és pénzre át nem válthatók.**\r\n\r\nA Szakkollégium vállalja, hogy kifizeti a nyereményre esetlegesen közvetlenül alkalmazandó személyi jövedelemadót, illetve vállalja a nyereményekkel kapcsolatban közvetlenül felmerülő további adó vagy egyéb esetleges járulék megfizetését.\r\n\r\n## 6. Sorsolás\r\n\r\nA videó felvétellel rögzített sorsolásra 2025. év március hó 18. napján 18:45-kor kerül sor az Egyetem IB028-as előadótermében.\r\n\r\nAz Esemény során történő nyereményjáték sorsolását az Esemény szervezőiből álló sorsolási bizottság végzi.\r\n\r\n## 7. A sorsolás lebonyolítása\r\n\r\nA sorsolás kamera előtt, videofelvétel rögzítésével történik.\r\n\r\nMinden nyereményt kizárólag különböző játékos nyerhet meg, ezért a sorsolások folyamán a már kisorsolt játékosok a sorsolás további részében nem sorsolhatók ki újra.\r\n\r\nAmennyiben a nyertes nem tartózkodik a helyszínen (IB028-as előadó) a neve kihúzásakor, úgy új nyertes kerül kisorsolásra.\r\n\r\nA sorsolás addig tart, amíg a nyeremények nyertesei kisorsolásra kerülnek, és ennek megfelelően a sorsolás egyfordulós.\r\n\r\n## 8. A nyeremények átvétele\r\n\r\nA nyerteseket minden esetben személyesen értesítjük 2025. 03. 18. 18:45 és 19:00 között az Egyetem IB028-as előadójában.\r\n\r\nA nyereménytárgyak átvételére kizárólag az Eseményen van lehetőség 2025. 03. 18. 18:45 és 19:00 között.\r\n\r\nAz átvétellel kapcsolatos reklamáció kizárólag a Szakkollégiumnál tehető meg.\r\n\r\nA Játékosok kötelesek együttműködni a nyeremények átvétele/igénybevétele érdekében. Amennyiben ennek nem tesznek eleget, és a nyeremény átvétele meghiúsul, a nyeremény a továbbiakban nem vehető át, illetve nem vehető igénybe. A Szakkollégiumot semmilyen felelősség nem terheli.\r\n\r\n## 9. Adatkezelés\r\n\r\nA Játékosok a Játékban való részvétellel automatikusan hozzájárulnak ahhoz, hogy:\r\n\r\n- A megadott adataik (név, lakcím, személyi igazolvány szám) a Szakkollégium adatbázisába kerüljenek.\r\n- Az adatokat a Szakkollégium a nyeremények kisorsolása, értesítés és reklamációkezelés céljából **legfeljebb 6 hónapig** kezelje.\r\n\r\nA Játékosokat megilleti a személyes adatok védelméről szóló törvényben meghatározott valamennyi jogosultság.\r\n\r\n## 10. Felelősségkizárás\r\n\r\n- A pályázatok hiányosságaiért (pl. névelírás) és értesítési vagy átvételi késedelemért a Szakkollégium nem vállal felelősséget.\r\n- A Játékosok saját felelősségükre adják meg adataikat.\r\n- A Szakkollégium nem ellenőrzi a megadott adatok helyességét.\r\n\r\n## 11. Egyéb\r\n\r\n- A Játékos a részvétellel automatikusan elfogadja a **Szabályzatot**.\r\n- Nyertesség esetén a Játékos neve és fényképe a Konferencia weboldalán, Facebook- és Instagram-oldalán **6 hónapig** nyilvánosságra kerülhet.\r\n- A Játékos szavatolja, hogy a fényképen szereplő harmadik személyek hozzájárultak a közzétételhez.\r\n- A Játékos kijelenti, hogy a regisztrációs adatai megfelelnek a valóságnak.\r\n"
    // },
    promoVideo: {
      sectionTitle: "Mi is az a Simonyi Konferencia?",
      youtubeUrl: "https://www.youtube.com/embed/lrLbijl4pqY",
      description: "A Simonyi Károly Szakkollégium évente megrendezésre kerülő nagyrendezvénye. A konferencia izgalmas pillanatokat kínál mindazoknak, akik érdeklődnek a mérnöki és informatikai területek legfrissebb fejlesztései iránt. Szánj egy pillantást korábbi rendezvényeink hangulatára, és tekintsd át az előző konferenciák életképeit és tarts velünk 2025-ben is!"
    },
    sponsors: {
      sectionTitle: "Támogatóink",
      companies: [
        // {
        //   name: "Sicontact",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/_1XXESIXIBAZJ3.svg",
        //   url: "https://www.eset.com/hu/",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "One Broadcasr",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/ONE_BROADCAST_MSH5EAUYXJS.png",
        //   url: "",
        //   category: SponsorCategory.SPONSOR
        // },
        // {
        //   name: "4iG Group",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/4IG_GHDVXETF14HC.svg",
        //   url: "https://www.4ig.hu/nyito",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "Nokia",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/NOKIA_1F7BT6NWYMO2T.svg",
        //   url: "https://www.facebook.com/nokiahungary/",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "WorldQuant",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/WORLDQUANT_B0932L7EI83J.jpg",
        //   url: "https://www.worldquant.com/",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "KUKA",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/KUKA_1F0QYBHBUGU46.svg",
        //   url: "https://www.kuka.com/hu-hu",
        //   category: SponsorCategory.SPONSOR
        // },
        // {
        //   name: "Schönherz",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/SCHONHERZ_JRA3EBF8UA0V.png",
        //   url: "",
        //   category: SponsorCategory.SPONSOR
        // },
        // {
        //   name: "SVK",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/SVK_1JOQGL6V8CL4I.png",
        //   url: "https://www.linkedin.com/company/sch%C3%B6nherz-corporate-relations/",
        //   category: SponsorCategory.SPONSOR
        // },
        // {
        //   name: "VIK",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/VIK_CCWO10RA2DAC.png",
        //   url: "https://vik.bme.hu/",
        //   category: SponsorCategory.SPONSOR
        // },
        // {
        //   name: "Robert Bosch",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/BOSCHNEW_19N8HKQY5K9I6.png",
        //   url: "https://www.bosch.hu/karrier/",
        //   category: SponsorCategory.MAIN_SPONSOR
        // },
        // {
        //   name: "Barré Technologies",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/BARRE_DRZHJKJF52MI.svg",
        //   url: "https://barre.hu/",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "Nova Services ",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/NOVA_1B8G5PM07QTMF.png",
        //   url: "https://www.novaservices.hu/karrier",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "Silicon Labs",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/SL_8H1UDZ14S65C.svg",
        //   url: "https://www.silabs.com/about-us/careers",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: " OTP Bank",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/OTP_GKXUXSIXPPLW.svg",
        //   url: "https://karrier.otpbank.hu/",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "ICF Tech",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/ICF_JB92WG6ZHHQF.png",
        //   url: "https://careers.icftech.hu",
        //   category: SponsorCategory.FEATURED_SPONSOR
        // },
        // {
        //   name: "Schönherz Iskolaszövetkezet",
        //   logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/SCHIS_XB6VK534KMB8.png",
        //   url: "",
        //   category: SponsorCategory.SPONSOR
        // }
      ]
    },
    organisers: [
      // {
      //   name: "Arbel Dániel",
      //   rank: "főrendező",
      //   emailAddress: "arbel.daniel@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810daniel_arbel.jpeg",
      //   priority: 20
      // },
      // {
      //   name: "Sulc Dominika",
      //   rank: "PR- és sajtófelelős",
      //   emailAddress: "sulc.dominika@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810dominika_sulc.jpeg",
      //   priority: 19
      // },
      // {
      //   name: "Mester Gyöngyvér",
      //   rank: "Szakkollégium elnöke",
      //   emailAddress: "mester.gyongyver@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810gyongyver_mester.jpeg",
      //   priority: 18
      // },
      // {
      //   name: "Serban Andrada Alexia",
      //   rank: "előadói csapatvezető",
      //   emailAddress: "serban.andrada.alexia@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810andrada-serban.jpeg",
      //   priority: 17
      // },
      // {
      //   name: "Déri Gergely",
      //   rank: "arculati felelős",
      //   emailAddress: "deri.gergely@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810gergely_deri.jpeg",
      //   priority: 16
      // },
      // {
      //   name: "Bujdosó Gergő",
      //   rank: "webfelelős",
      //   emailAddress: "bujdoso.gergo@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810gergo_bujdoso.jpeg",
      //   priority: 15
      // },
      // {
      //   name: "Iván András",
      //   rank: "helyszínfelelős",
      //   emailAddress: "ivan.andras @simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250213082356avatar.png",
      //   priority: 13
      // },
      // {
      //   name: "Vizi Kristóf Levente",
      //   rank: "technikusok összefogója",
      //   emailAddress: "vizi.kristof.levente@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810kristof_vizi.jpeg",
      //   priority: 11
      // },
      // {
      //   name: "Hübler Henrik",
      //   rank: "közvetítés összefogója",
      //   emailAddress: "hubler.henrik@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810henrik_hubler.jpeg",
      //   priority: 10
      // },
      // {
      //   name: "Jász Kende András",
      //   rank: "rendezvényfotózás összefogója",
      //   emailAddress: "jasz.kende.andras@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810andras_jasz.jpeg",
      //   priority: 9
      // },
      // {
      //   name: "Mozsár Máté",
      //   rank: "logisztika felelős",
      //   emailAddress: "mozsar.mate@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810mate_mozsar.jpeg",
      //   priority: 8
      // },
      // {
      //   name: "Tóth Gergő",
      //   rank: "vezető vállalati kapcsolattartó",
      //   emailAddress: "toth.gergo@sch.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810gergo_toth.jpeg",
      //   priority: 12
      // },
      // {
      //   name: "Danka Marcell",
      //   rank: "expo felelős",
      //   emailAddress: "danka.marcell@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810marcell_danka.jpeg",
      //   priority: 7
      // },
      // {
      //   name: "Lipták Péter",
      //   rank: "expo felelős",
      //   emailAddress: "liptak.peter@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810peter_liptak.jpeg",
      //   priority: 6
      // },
      // {
      //   name: "Zombori Péter",
      //   rank: "gazdasági felelős",
      //   emailAddress: "zombori.peter@simonyi.bme.hu",
      //   pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/20250218154810peter_zombori.jpeg",
      //   priority: 14
      // }
    ],
    featuredPresentation: {sectionTitle: "Promóciós Videó", description: "Promóciós Videó leírása ide jön"},
    presentations: [

    ]
  }
}
*/
