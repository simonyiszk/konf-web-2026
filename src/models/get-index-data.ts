import {IndexPageData, SponsorCategory} from "./models";

/*export async function getIndexData(): Promise<IndexPageData | undefined> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/conference/index`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    console.error(res);
    return;
  }
  return res.json();
}*/

export function getIndexData(): IndexPageData {
  return {
    previousConferences: {
      sectionTitle: "Korábbi Konferenciák",
      conferences: [
        {
          title: "XV. Simonyi Konferencia",
          priority: 2018,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/180_QRTARUSKTU37.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/181_17NNUY2V1QP7F.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/182_2931OY5MMBNO.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/183_1JB4KAXX3LH1E.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/184_19P83ZYMJDS8X.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/185_1QKYBZR7PB940.jpg"]
        },
        {
          title: "XVI. Simonyi Konferencia",
          priority: 2019,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/190_1UKE9N1P2K963.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/191_11S8ZU1UIHUJD.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/192_139BQB5Y9VKM6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/193_67ZH80JPEPO.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/194_9TV9TU26CAGF.jpg"]
        },
        {
          title: "XVIII. Simonyi Konferencia",
          priority: 2021,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/210_UQJ6WF1L0SO.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/211_U4450XYESONA.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/212_SW0KQO7I2NP7.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/213_1B44YG5OZ05FV.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/214_1IZ186UW8XPR2.jpg"]
        },
        {
          title: "XIX. Simonyi Konferencia",
          priority: 2022,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/220_1EN0JC3ZSRQK8.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/221_U8S77F8QNP84.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/222_RUQOVD7869AR.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/223_1TLQKZLJBXDRD.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/224_58TEHQH86288.jpg"]
        },
        {
          title: "XX. Simonyi Konferencia",
          priority: 2023,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/235_1UNKZC3F5PB08.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/230_J8G9OHBVDSZR.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/231_R9VQ794OWMTF.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/232_MIERGYRMO6QZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/233_TMJOXF2EYRWP.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/234_9RWWEOXRNHH1.jpg"]
        },
        {
          title: "XXI. Simonyi Konferencia",
          priority: 2024,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/240_1AO8HWXTJ8BUL.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/241_LRC1MUCWM215.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/242_MNIL5YK9ND5O.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/243_1GAC2SB8OTW3Z.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/244_3KNO88KJFKCZ.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/245_GDPEULGD012R.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/246_1VZKNM0B4IPF6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/247_B4NP0HWJGP3P.jpg"]
        },
        {
          title: "XXII. Simonyi Konferencia",
          priority: 2025,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/251_1M1IRHO9IXTQ6.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/252_128A8W50FY4U8.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/253_2249X43089ZR.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/254_1294TWN81Z7TV.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/255_I08CPF3EWZ5L.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/256_RDQ4NM2F5KKK.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/257_1AECRSBCY9YA2.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/258_GSD5ZV8P7TT0.jpg"]
        },
        {
          title: "XI. Simonyi Konferencia",
          priority: 2014,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/142_1GM10PHHD4Y41.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/140_171UD5WML53RD.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/143_1RO7AL24ASMZT.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/144_18XDYL7LFUHF6.jpg"]
        },
        {
          title: "XII. Simonyi Konferencia",
          priority: 2015,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/151_1UPVAKW3S6NM.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/152_1HM2BAREEQVZT.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/153_168LR4ZI4DJNZ.jpg"]
        },
        {
          title: "XIII. Simonyi Konferencia",
          priority: 2016,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/160_1EQLXM03VHL0H.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/161_11F2SCL336O33.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/162_1RJA3U1SO8VJO.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/163_WUPSLFQ7V4GK.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/164_69H1O1X497UQ.jpg"]
        },
        {
          title: "XIV. Simonyi Konferencia",
          priority: 2017,
          imageUrls: ["https://xxiii.konferencia.simonyi.bme.hu/img/public/170_42LQYSACAPWS.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/171_GIYXXWXUVTD3.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/172_YQJLOFVLZS32.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/173_PHBK25AM6ZC1.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/174_BLZQLN9HHHB.jpg", "https://xxiii.konferencia.simonyi.bme.hu/img/public/175_1CA718OCWSOCU.jpg"]
        }
      ]
    },
    registration: {buttonText: "Regisztráció", cooltixEventId: "https://konferencia.simonyi.bme.hu/register"},
    mobilApp: {
      description: "Maradj naprakész a KonferenciApp segítségével!            Légy mindig képben a programtervvel, kapj valós idejű híreket,             navigálj könnyedén interaktív térképek segítségével, és fedezd fel             az egyéb izgalmas funkciókat, hogy még jobb legyen a konferencia             élményed.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.kirdev.konferenciapp&hl=hu",
      iosUrl: "https://apps.apple.com/hu/app/konferenciapp/id6478986330?platform=iphone"
    },
    giveaway: {
      sectionTitle: "Nyereményjáték",
      description: "A résztvevők között értékes nyereményeket sorsolunk ki!",
      pictureUrl: "",
      rules: "# Nyereményjáték-szabályzat\r\n\r\nA **Nyereményjáték-szabályzat** (a továbbiakban: **Szabályzat**) vonatkozik a **Simonyi Károly Szakkollégium** (továbbiakban: **Szakkollégium**) által szervezett **XXIII. Simonyi Konferencia** (továbbiakban: **Esemény**) során folyó nyereményjátékokra (továbbiakban: **Játék**).\r\n\r\n## A Szakkollégium elérhetőségei:\r\n\r\n- **Cím:** 1117 Budapest, Irinyi József utca 42. Schönherz Kollégium 1320-as szoba  \r\n- **E-mail:** [info@simonyi.bme.hu](mailto:info@simonyi.bme.hu)\r\n\r\n## Az Esemény helyszíne:\r\n\r\n- **Budapesti Műszaki és Gazdaságtudományi Egyetem** Villamosmérnöki és Informatikai Karának **I épülete**  \r\n- **Cím:** 1117 Budapest, Magyar Tudósok Körútja 2. (továbbiakban: **Egyetem**)\r\n\r\n## 1. A Játékban részt vevő személyek\r\n\r\nA Játékban részt vehet minden természetes személy, aki regisztrált az Eseményre a konferencia oldalán.\r\n\r\n**A Játékban NEM vehetnek részt az alábbi személyek:**\r\n\r\n- A Szakkollégium tagjai.\r\n- A rendezvény alatt munkát végző technikai stáb tagjai, vagy lebonyolításban segédkező személyek.\r\n- Az Esemény szervezői, meghívott előadói és standolói; egyéb, a lebonyolításban közvetlenül közreműködő cégek tulajdonosai, vezető tisztségviselői, munkavállalói, megbízottjai, valamint azok közeli hozzátartozói.\r\n\r\n## 2. A Játék leírása\r\n\r\nAz Eseményhez köthető általános nyereményjáték során a Játékos érvényes regisztrációval rendelkezik és leadta jelentkezését az Esemény regisztrációs pultjánál.\r\n\r\nAz Esemény során a Játékos előadásblokkonként egy (1) darab matricát gyűjthet, összesen legfeljebb négy (4) darabot. A matricákat a Játékos az adott előadásblokk — azaz két szünet közötti előadások — végén, az előadások helyszínén veheti át.\r\n\r\nA Játékos a sorsolásban alapesetben egy (1) sorsolási eséllyel vesz részt. Amennyiben a Játékos legalább három (3) matricát gyűjtött, sorsolási esélyeinek száma kettőre (2) emelkedik. Amennyiben a Játékos mind a négy (4) matricát összegyűjtötte, sorsolási esélyeinek száma háromra (3) emelkedik. Ez a gyakorlatban azt jelenti, hogy a Játékos neve a sorsolási esélyeinek megfelelő számban kerül be a sorsolás alapjául szolgáló nyilvántartásba.\r\nA matricák érvényesítése a regisztrációs pultnál történik. A Játékos köteles az összegyűjtött matricákat legkésőbb 2026. március 24. 17:00-ig bemutatni a regisztrációs pultnál. A határidő után bemutatott matricák nem vehetők figyelembe.\r\n\r\n## 3. A Játék időtartama\r\n\r\nA Játék 2026. március 24. 09:30 és 2026. március 24. 17:00 között tart.\r\n\r\n## 4. Jelentkezés a Játékra\r\n\r\nA Játékra jelentkezni 2026. március 24. 09:30 és 17:00 között van lehetőség a Konferencia regisztrációs pultjánál.\r\n\r\nEgy Játékos mind az összes nyereményjátékban csak egyszer vehet részt.\r\n\r\n*A nyeremények átvételéhez szükséges lehet a pontos név, személyi igazolvány szám és lakcím megadása.*\r\n\r\nA Játékos a nyereményjátékban való részvételével elfogadja a Nyereményjáték-szabályzatot és a szabályzatban foglaltak szerint hozzájárult személyes adatai kezeléséhez.\r\n\r\n## 5. Nyeremény\r\n\r\nAmennyiben a nyeremény átvételének időpontjában nem áll rendelkezésre a megjelölt termék, akkor ahhoz értékben hasonló ajándéktárgy kerül átadásra.\r\n\r\n**A nyeremények más részére át nem ruházhatók és pénzre át nem válthatók.**\r\n\r\nA Szakkollégium vállalja, hogy kifizeti a nyereményre esetlegesen közvetlenül alkalmazandó személyi jövedelemadót, illetve vállalja a nyereményekkel kapcsolatban közvetlenül felmerülő további adó vagy egyéb esetleges járulék megfizetését.\r\n\r\n## 6. Sorsolás\r\n\r\nA videó felvétellel rögzített sorsolásra 2026. év március hó 24. napján 18:10-kor kerül sor az Egyetem IB028-as előadótermében.\r\n\r\nAz Esemény során történő nyereményjáték sorsolását az Esemény szervezőiből álló sorsolási bizottság végzi.\r\n\r\n## 7. A sorsolás lebonyolítása\r\n\r\nA sorsolás kamera előtt, videofelvétel rögzítésével történik.\r\n\r\nMinden nyereményt kizárólag különböző játékos nyerhet meg, ezért a sorsolások folyamán a már kisorsolt játékosok a sorsolás további részében nem sorsolhatók ki újra.\r\n\r\nAmennyiben a nyertes nem tartózkodik a helyszínen (IB028-as előadó) a neve kihúzásakor, úgy új nyertes kerül kisorsolásra.\r\n\r\nA sorsolás addig tart, amíg a nyeremények nyertesei kisorsolásra kerülnek, és ennek megfelelően a sorsolás egyfordulós.\r\n\r\n## 8. A nyeremények átvétele\r\n\r\nA nyerteseket minden esetben telefonon keresztül értesítjük 2026. 03. 24. 18:10 és 19:00 között az Egyetem IB028-as előadójában.\r\n\r\nA nyereménytárgyak átvételére kizárólag az Eseményen van lehetőség 2026. 03. 24. 18:10 és 19:00 között.\r\n\r\nAz átvétellel kapcsolatos reklamáció kizárólag a Szakkollégiumnál tehető meg.\r\n\r\nA Játékosok kötelesek együttműködni a nyeremények átvétele/igénybevétele érdekében. Amennyiben ennek nem tesznek eleget, és a nyeremény átvétele meghiúsul, a nyeremény a továbbiakban nem vehető át, illetve nem vehető igénybe. A Szakkollégiumot semmilyen felelősség nem terheli.\r\n\r\n## 9. Adatkezelés\r\n\r\nA Játékosok a Játékban való részvétellel automatikusan hozzájárulnak ahhoz, hogy:\r\n\r\n- A megadott adataik (név, lakcím, személyi igazolvány szám, telefonszám) a Szakkollégium adatbázisába kerüljenek.\r\n- Az adatokat a Szakkollégium a nyeremények kisorsolása, értesítés és reklamációkezelés céljából **legfeljebb 6 hónapig** kezelje.\r\n\r\nA Játékosokat megilleti a személyes adatok védelméről szóló törvényben meghatározott valamennyi jogosultság.\r\n\r\n## 10. Felelősségkizárás\r\n\r\n- A pályázatok hiányosságaiért (pl. névelírás) és értesítési vagy átvételi késedelemért a Szakkollégium nem vállal felelősséget.\r\n- A Játékosok saját felelősségükre adják meg adataikat.\r\n- A Szakkollégium nem ellenőrzi a megadott adatok helyességét.\r\n\r\n## 11. Egyéb\r\n\r\n- A Játékos a részvétellel automatikusan elfogadja a **Szabályzatot**.\r\n- Nyertesség esetén a Játékos neve és fényképe a Konferencia weboldalán, Facebook- és Instagram-oldalán **6 hónapig** nyilvánosságra kerülhet.\r\n- A Játékos szavatolja, hogy a fényképen szereplő harmadik személyek hozzájárultak a közzétételhez.\r\n- A Játékos kijelenti, hogy a regisztrációs adatai megfelelnek a valóságnak."
    },
    promoVideo: {
      sectionTitle: "Mi is az a Simonyi Konferencia?",
      youtubeUrl: "https://www.youtube.com/embed/lrLbijl4pqY",
      description: "A Simonyi Károly Szakkollégium évente megrendezésre kerülő nagyrendezvénye. A konferencia izgalmas pillanatokat kínál mindazoknak, akik érdeklődnek a mérnöki és informatikai területek legfrissebb fejlesztései iránt. Szánj egy pillantást korábbi rendezvényeink hangulatára, és tekintsd át az előző konferenciák életképeit és tarts velünk 2026-ban is!"
    },
    sponsors: {
      sectionTitle: "Támogatók",
      companies: [
        {
          name: "One",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019cd8c1-4ee0-7d87-b890-92fd9f6f3c21.jpg",
          url: "",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Nemzetbiztonsági Szakszolgálat Nemzeti Kiberbiztonsági Intézet",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019ce164-4c25-7147-826b-61d29e8f6329.png",
          url: "https://nki.gov.hu/",
          category: SponsorCategory.NO_ASSOCIATION
        },
        {
          name: "thyssenkrupp",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019cd2bd-8b8d-7d26-87df-754dde33850a.jpg",
          url: "https://www.thyssenkrupp.hu/hu/",
          category: SponsorCategory.NO_ASSOCIATION
        },
        {
          name: "One Broadcast",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019cfd5d-b1d0-72a1-bb23-ac5bd635c48c.png",
          url: "",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "PTC",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47b3-967e-75fb-900d-35962d6b68a4.png",
          url: "https://www.ptc.com/en/careers/hungary-careers",
          category: SponsorCategory.MAIN_SPONSOR
        },
        {
          name: "ICF Tech Hungary Kft.",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47b5-44b4-7c64-a3f6-40e4fd9e3373.png",
          url: "https://careers.icftech.hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Sicontact Kft.",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c4816-4c99-7bc8-b1c7-07460628b366.png",
          url: "https://www.eset.com/hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Barré Technologies Zrt.",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47ae-cf17-75cc-8310-c2a4560f1786.jpg",
          url: "https://www.barre.hu/karrier/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Silicon Labs",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c5cde-2499-7144-bad5-f62ec5fd6462.jpg",
          url: "https://www.silabs.com/about-us/careers",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Nova Services",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c7017-9a28-7329-94ef-aa5fecf876a0.png",
          url: "https://www.novaservices.hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "WorldQuant",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c4815-283d-72cc-bff6-fc685e7a797b.jpg",
          url: "https://www.worldquant.com/",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "OTP Bank",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47b4-7ef9-7a34-8b12-3a24492d5ac4.jpg",
          url: "https://www.otpbank.hu/",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "BME VIK",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/VIK_6N6XAL1M4XBO.png",
          url: "https://vik.bme.hu",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "Schönherz Iskolaszövetkezet",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/SCH_IS_16TX2JCJ3RAD9.png",
          url: "https://schonherz.hu/",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "Nokia",
          logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/NOKIA_LOGO_69USCU8941J6.png",
          url: "https://www.facebook.com/nokiahungary/",
          category: SponsorCategory.FEATURED_SPONSOR
        }
      ]
    },
    organisers: [
      {
        name: "Szabó Benedek",
        rank: "Webfelelős",
        emailAddress: "szabo.benedek2@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/BENI_17VWP4L0JCM0R.png",
        priority: 3
      },
      {
        name: "Harsányi Levente",
        rank: "Arculati felelős",
        emailAddress: "harsanyi.levente@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/LEVI_181TF9UXWXUAW.png",
        priority: 1
      },
      {
        name: "Csányi Balázs",
        rank: "Főrendező",
        emailAddress: "csanyi.balazs@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/CSEBI_1QOOQY6K5KW9A.png",
        priority: 0
      },
      {
        name: "Bihari Bence",
        rank: "Expo felelős",
        emailAddress: "bihari.bence@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/BENCE_II2A5D8S8IFZ.png",
        priority: 1
      },
      {
        name: "Sali Nóra",
        rank: "Előadás felelős",
        emailAddress: "sali.nora@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/NORI_BCNVOIO37CXH.png",
        priority: 1
      },
      {
        name: "Sinkó Dániel",
        rank: "Gazdasági felelős",
        emailAddress: "sinko.daniel@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/DANI_KNZSA7ILC2H5.png",
        priority: 1
      },
      {
        name: "Domján Zorka",
        rank: "PR- és sajtófelelős",
        emailAddress: "domjan.zorka@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/ZORKA_1FGH8WA3YMAMZ.png",
        priority: 1
      },
      {
        name: "Vaska Barnabás",
        rank: "Vezető vállalati kapcsolattartó",
        emailAddress: "vaska.barnabas@svk.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/BARNI_EIIAM597NHG7.png",
        priority: 1
      },
      {
        name: "Németh Marcell",
        rank: "Szakkollégium elnöke",
        emailAddress: "nemeth.marcell@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/MARCI_15OQCR8I06LMV.png",
        priority: 0
      },
      {
        name: "Dombora Melinda",
        rank: "Helyszínfelelős",
        emailAddress: "dombora.melinda@simonyi.bme.hu",
        pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/public/MELCSI_I0OB72Q3EJC5.png",
        priority: 2
      }
    ],
    featuredPresentations: {
      sectionTitle: "Kiemelt Előadások",
      description: "Promóciós Videó leírása ide jön",
      presentations: [
        {
          isBreak: false,
          slug: "hartlein-karoly",
          title: "AC-DC, avagy 2026-ban hogyan zajlana Nikola Tesla és Thomas Alva Edison harca",
          room: "IB028",
          language: "hu",
          startTime: "10:30",
          endTime: "11:30",
          description: "Az 1880-as évek elején kezdődött az áramok harca az Amerikai Egyesült Államokban. Edison az egyenáramú, míg Tesla a váltóáramú hálózatok segítségével képzelte el a gyárak és az emberek villamos energiával történő ellátását. A harc végeredményét ismerjük – a villamosenergia szállíthatósága döntött – az egész világon nagyfeszültségű távvezetékeken szállítják a felhasználás helyére az elektromos energiát, amely Tesla ritmusában „lüktet”. A háború kíméletlen és agresszív volt. Ennek köszönhetjük például azt, hogy a villamosszékekben váltóáramot használnak.\r\nMég az áramok háborúja kitörése előtt, Európában egy német középiskolai tanár az elektromos vezetés tanulmányozása közben érdekes felfedezést tett, amely a félvezető dióda felfedezéséhez vezetett. Megszületett a félvezető technika, amely elképesztő mértékben alakította át világunkat.\r\nHa ma törne ki az áramok háborúja, akkor nem egyértelmű kiütéssel végződne, köszönhető ez a félvezető technikának, amely napjainkban is szédítő ütemben fejlődik.\r\nElőadásom egyfajta haditudósítás, amely bemutatja a kezdetektől, napjainkig a háború fegyvereit!",
          questionsUrl: "",
          presenter: {
            name: "Härtlein Károly",
            rank: "mesteroktató",
            pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47a5-f406-7689-ae77-482e7734d878.jpg",
            company: undefined
          }
        }
      ]
    },
    presentations: [
      {
        isBreak: false,
        slug: "vago-peter",
        title: "Mérnöki kihívások az űripari fejlesztésekben",
        room: "IB025",
        language: "hu",
        startTime: "11:00",
        endTime: "11:30",
        description: "A rádiófrekvenciás kommunikáció az a láthatatlan híd, amelyen keresztül a mérnökök összekapcsolják az embereket, eszközöket és kontinenseket, megteremtve a globális információáramlás alapját.\r\nKétségtelen, hogy ezek a rendszerek az űripar felé mutatnak; a műholdas kommunikáció alapja a szolgáltatásoknak. A kihívások egy jelentős részét a megfelelő spektrum- és energiahatékonyság, valamint a ehhez kapcsolódó kulcs technológiák fejlesztése jelenti, mint például az ultra-stabil oszcillátorok vagy a szélessávú, sokcsatornás, akár teljesen digitális RF rendszerek. Valamint tudjuk, hogy a megoldandó feladatok csak részben ismertek és az azokra adható válaszok új megközelítést kívánnak.",
        questionsUrl: "",
        presenter: {
          name: "Vágó Péter",
          rank: "Termékmenedzser",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c5e4a-115b-71ec-8ff9-9c0a25aad23d.jpeg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "haragos-gergo",
        title: "Egy pálya kezdete: Utam a 3D grafika tudományos világába",
        room: "IB025",
        language: "hu",
        startTime: "10:30",
        endTime: "11:00",
        description: "Már gyerekkoromban beleszerettem a 3D világába. Korán szembe kellett néznem egy döntéssel: művészi vagy mérnöki oldalról közelítsem meg a grafikát. Végül a mérnöki utat választottam, mert érdekelt, mi történik a látvány mögött.\r\n\r\nAz egyetemen hamar világossá vált számomra, mivel szeretnék foglalkozni, így tudatosan el tudtam mélyülni az animációk, deformációk és a számítógépes grafika technikai hátterében. Ez a fókusz nemcsak szakmailag formált, hanem lehetőséget adott arra is, hogy nemzetközi konferenciákon vegyek részt a Student Volunteer program segítségével.\r\n\r\nEnnek köszönhetően a 3D grafika nemcsak egy tudományterület, hanem egy utazás is lett számomra - Tokiótól Hongkongon át Los Angelesig  Denver és Vancouverig.",
        questionsUrl: "",
        presenter: {
          name: "Haragos Gergő Viktor",
          rank: "computer graphic enthusiastic",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47a2-ffde-7ef9-8e2c-a7596a995b2f.png",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "hartlein-karoly",
        title: "AC-DC, avagy 2026-ban hogyan zajlana Nikola Tesla és Thomas Alva Edison harca",
        room: "IB028",
        language: "hu",
        startTime: "10:30",
        endTime: "11:30",
        description: "Az 1880-as évek elején kezdődött az áramok harca az Amerikai Egyesült Államokban. Edison az egyenáramú, míg Tesla a váltóáramú hálózatok segítségével képzelte el a gyárak és az emberek villamos energiával történő ellátását. A harc végeredményét ismerjük – a villamosenergia szállíthatósága döntött – az egész világon nagyfeszültségű távvezetékeken szállítják a felhasználás helyére az elektromos energiát, amely Tesla ritmusában „lüktet”. A háború kíméletlen és agresszív volt. Ennek köszönhetjük például azt, hogy a villamosszékekben váltóáramot használnak.\r\nMég az áramok háborúja kitörése előtt, Európában egy német középiskolai tanár az elektromos vezetés tanulmányozása közben érdekes felfedezést tett, amely a félvezető dióda felfedezéséhez vezetett. Megszületett a félvezető technika, amely elképesztő mértékben alakította át világunkat.\r\nHa ma törne ki az áramok háborúja, akkor nem egyértelmű kiütéssel végződne, köszönhető ez a félvezető technikának, amely napjainkban is szédítő ütemben fejlődik.\r\nElőadásom egyfajta haditudósítás, amely bemutatja a kezdetektől, napjainkig a háború fegyvereit!",
        questionsUrl: "",
        presenter: {
          name: "Härtlein Károly",
          rank: "mesteroktató",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47a5-f406-7689-ae77-482e7734d878.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "bacsardi-laszlo",
        title: "Titkos kulcsoktól a kvantuminternetig - öt jóslat a kvantumkommunikáció jövőjéről",
        room: "IB028",
        language: "hu",
        startTime: "11:30",
        endTime: "12:00",
        description: "A második kvantumtechnológiai forradalom korában élünk, amely számos, korábban nem ismert lehetőséget kínál számunkra. Ezen belül a kvantumkommunikáció az egyik legérettebb és leggyorsabban fejlődő irány, amely már ma is kézzelfogható hatással van az információbiztonságra és a hálózati technológiák jövőjére.\r\nAz előadás öt, tudományos és technológiai trendekre épülő jóslaton keresztül tekinti át a kvantumkommunikáció jelenét és várható fejlődését. Szó esik a kvantumszámítógép által jelentett fenyegetésről, a kvantumkulcsszétosztás (QKD) szerepéről, a kvantuminternet kihívásairól, valamint arról, hogy mikor és milyen formában válhat mindez szélesebb körben elérhetővé. Külön hangsúlyt kapnak a Budapesti Műszaki és Gazdaságtudományi Egyetemen zajló kvantumkommunikációs kutatások, valamint azok a lehetőségek, amelyekbe a műegyetemi hallgatók már ma is bekapcsolódhatnak.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Bacsárdi László",
          rank: "tanszékvezető, egyetemi docens",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72d1-9225-7918-bfdb-b1b1f167fe5c.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "bergmann-gabor-ptc",
        title: "Segíthet az AI a jövő mérnökeinek? Tapasztalatok az ipari mesterséges intelligenciával a PTC-nél",
        room: "IB028",
        language: "hu",
        startTime: "12:20",
        endTime: "13:20",
        description: "A mesterséges intelligenciáról ma legtöbben chatbotok, fordítóprogramok vagy kreatív szöveg- és képgenerátorok kapcsán hallunk. De mi történik akkor, amikor az AI-nak biztonságkritikus, szabályozott ipari környezetben kell segítenie a mérnöki munkát, ahol a hibák és pontatlanságok ára nagyon magas lehet? \r\nAz előadás betekintést ad a PTC világába, amely több mint 40 éve formálja a digitális termékfejlesztést a CAD-tól a PLM-en át egészen az ipari IoT-ig a világ vezető autóipari, orvostechnikai, repülőgépipari és ipari automatizálási cégeinél.\r\nAz előadás fókuszában az áll, hogyan jelennek meg a modern mesterséges intelligencia és NLP-alapú megoldások a PTC ipari szoftverportfóliójában. Konkrét példákon keresztül kerül bemutatásra, miként támogatják nagy nyelvi modellek a követelménykezelést, a tesztesetek generálását és a mérnöki hatékonyság növelését, miközben megmarad az emberi kontroll és a minőségbiztosítás. \r\nAz előadás gyakorlati tanulságokat fogalmaz meg a kontextuskezelés, a nyelvi lokalizáció és az AI-rendszerek értékelése kapcsán, rámutatva arra, hogy az ipari AI sikeres bevezetésének kulcsa nem csupán a modellek teljesítménye, hanem azok mérnöki integrációja és validációja.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Bergmann Gábor",
          rank: "Vezető kutató (Fellow Researcher)",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47b6-6922-7269-8775-2dc984a2360e.jpg",
          company: {
            name: "PTC",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47b3-967e-75fb-900d-35962d6b68a4.png",
            url: "https://www.ptc.com/en/careers/hungary-careers",
            category: SponsorCategory.MAIN_SPONSOR
          }
        }
      },
      {
        isBreak: false,
        slug: "duda-erno",
        title: "A longevity iparág ígérete",
        room: "IB028",
        language: "hu",
        startTime: "13:20",
        endTime: "13:50",
        description: "Duda Ernő előadásában a longevity kérdését helyezi a középpontba: hogyan értelmezzük újra az öregedést, és miként válik egyre inkább alakíthatóvá az emberi élet hossza és minősége.\r\nAz előadás bemutatja, hogyan formálódik a longevity szemlélet a kutatás, az egészségmegőrzés és a prevenció területén.",
        questionsUrl: "",
        presenter: {
          name: "Duda Ernő",
          rank: "Medipredict-CEO, Magyar Biotechnológiai Szövetség- elnök",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47c4-7dd1-77ea-b348-b27344c4eae0.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "toth-adam-icf",
        title: "Spartan Up! Hogyan kerüld el a kiégést és tedd magadat törhetetlenné a nehéz mentális és fizikai kihívások meghódításával",
        room: "IB025",
        language: "hu",
        startTime: "12:50",
        endTime: "13:20",
        description: "Az ICF Tech Hungary ügyvezetőjeként megdöbbenve tapasztalom, hogy a kiégés már nem csak a 40-\r\n50 éves korosztály sajátja: 30 év alatti kollégák esetében is egyre gyakoribb jelenség a megfáradás, a\r\nvállalkozási kedv hiánya, a depresszió. Mi lehet az ok és mi lehet a kiút? Több kényelemre és\r\nnyugalomra van szükségünk – vagy arra, hogy időnként kifeszített szögesdrót alatt másszunk át,\r\nmiután több száz métert futottunk az erdőben egy kövekkel megrakott hordóval a hátunkon?\r\nSzerintem utóbbira. Előadásomból megtudhatod, miért működik a spártai megközelítés, és hogyan\r\nválhatsz általa erősebbé, teljesebbé – törhetetlenné.",
        questionsUrl: "",
        presenter: {
          name: "Tóth Ádám",
          rank: "Ügyvezető",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c5cc7-ba9b-77ba-bcf1-173e88ca467f.jpg",
          company: {
            name: "ICF Tech Hungary Kft.",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47b5-44b4-7c64-a3f6-40e4fd9e3373.png",
            url: "https://careers.icftech.hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: true,
        slug: "megnyito",
        title: "Megnyitó & Főtámogatói köszöntő & Főrendezői köszöntő",
        room: "IB028",
        language: "hu",
        startTime: "10:00",
        endTime: "10:30",
        description: "A 23. Simonyi Konferencia \r\nmegnyitója: Imre Sándor\r\nfőrendezői köszöntő: Csányi Balázs",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: false,
        slug: "cserenyi-gyula",
        title: "Villamosmérnöktől űrhajósig",
        room: "IB028",
        language: "hu",
        startTime: "14:20",
        endTime: "15:20",
        description: "A HUNOR – Magyar Űrhajós Program kiválasztott űrhajósjelöltjeként egy egészen különleges nézőpontból mesél majd az űrkutatásról, a felkészülésről és az űrprogramok világáról. \r\nHamarosan további részletekkel is érkezünk az előadásról!",
        questionsUrl: "",
        presenter: {
          name: "Cserényi Gyula",
          rank: "HUNOR-program kiképzett kutatóűrhajósa",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019d02f2-afda-7f2f-8af8-f87044dc70ea.jpg",
          company: {
            name: "HUNOR",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019d0656-e4ea-701d-941c-551b4ee02294.png",
            url: "https://hunor.gov.hu/",
            category: SponsorCategory.NO_ASSOCIATION
          }
        }
      },
      {
        isBreak: true,
        slug: "szunet-1200",
        title: "Szünet",
        room: "IB028",
        language: "hu",
        startTime: "12:00",
        endTime: "12:20",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: true,
        slug: "szunet-1550",
        title: "Szünet",
        room: "IB028",
        language: "hu",
        startTime: "15:50",
        endTime: "16:10",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: true,
        slug: "szunet-1350",
        title: "Szünet",
        room: "IB028",
        language: "hu",
        startTime: "13:50",
        endTime: "14:20",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: false,
        slug: "beres-peter-sicontact",
        title: "Nyugi, MI baj lehet a kibertérben?",
        room: "IB025",
        language: "hu",
        startTime: "15:20",
        endTime: "15:50",
        description: "Az utóbbi időben egyre többet olvashatunk, hallhatunk kiberbiztonsági incidensekről és az\r\náltaluk okozott károkról. A mesterséges intelligencia olajat öntött a tűzre, vagy a védelmi\r\noldal kerekedik felül? Az előadás célja, hogy bemutassak egy megtörtént incidenst, és választ\r\nkeressünk arra, hogy milyen támadásokkal találkozhatunk a következő hónapokban.",
        questionsUrl: "",
        presenter: {
          name: "Béres Péter",
          rank: "IT vezető",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c4817-4202-745e-ac8d-c8a528183271.png",
          company: {
            name: "Sicontact Kft.",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c4816-4c99-7bc8-b1c7-07460628b366.png",
            url: "https://www.eset.com/hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: true,
        slug: "szunet-1200a",
        title: "Szünet",
        room: "IB025",
        language: "hu",
        startTime: "12:00",
        endTime: "12:20",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: true,
        slug: "szunet-1350a",
        title: "Szünet",
        room: "IB025",
        language: "hu",
        startTime: "13:50",
        endTime: "14:20",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: true,
        slug: "szunet-1550a",
        title: "Szünet",
        room: "IB025",
        language: "hu",
        startTime: "15:50",
        endTime: "16:10",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: false,
        slug: "rimmel-botond-barre",
        title: "Promptolás az ötlettől a Production-ig: AI a delivery folyamatban",
        room: "IB025",
        language: "hu",
        startTime: "11:30",
        endTime: "12:00",
        description: "Még sok vállalat keresi, hogy milyen módon hasznosíthatja az AI-t az üzleti folyamatai támogatására, úgy tűnik azonban - és saját tapasztalataink is azt támasztják alá - hogy a szoftverfejlesztő cégek a piac átlagánál gyorsabban és bátrabban adoptálják a technológiát a saját hatékonyságuk növelése céljából.\r\nBár a tömeges elbocsájtásokról szóló hírek szélsőségesnek tűnhetnek, tény, hogy alig van olyan fejlesztő cég, ami gátolná a kollégái AI használatát; épp ellenkezőleg, a legtöbben elkezdték azt szervesen beépíteni a napi folyamatokba, egyensúlyozva a kockázatok és az előnyök között.\r\nAz előadás során a saját példánkon mutatjuk be, hogy mi hogyan tettük meg az első lépéseket, mi járult hozzá a szélesebb körű adopcióhoz, a fejlesztési folyamat mely részeit milyen AI\r\neszközökkel támogatjuk, és milyen módon kezeljük a kockázatokat.\r\nVégezetül az eddigi tapasztalataink alapján mérleget is vonunk, hogy meglátásunk szerint az AI milyen fejlesztői feladatokat képes hatékonyan támogatni vagy helyettesíteni, és hol marad\r\nnélkülözhetetlen az emberi szakértelem.",
        questionsUrl: "",
        presenter: {
          name: "Rimmel Botond",
          rank: "Business Analyst",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72c9-4c50-7cca-a7b7-fce2b4c435a8.jpg",
          company: {
            name: "Barré Technologies Zrt.",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c47ae-cf17-75cc-8310-c2a4560f1786.jpg",
            url: "https://www.barre.hu/karrier/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: false,
        slug: "eged-bertalan",
        title: "A mérnöki bátorság képlete: Tesla–Edison–Ford–Jobs és a magyar szál, ami átvisz a falon",
        room: "IB028",
        language: "hu",
        startTime: "17:10",
        endTime: "17:40",
        description: "A mérnöki pálya nem csak képletek és specifikációk sorozata: döntéseké, kockázatoké, és annak a képességéé, hogy bizonytalanságban is építsünk valami működőt. Ebben az előadásban négy ikonikus történeten keresztül – Nikola Tesla, Thomas Edison, Henry Ford és Steve Jobs világformáló pillanatain – azt mutatom meg, hogyan születnek a technológiai áttörések valójában: prototípusokból, kudarcokból, vitákból, és egy-egy jól időzített „még egyszer nekifutok” hozzáállásból. A történeteket magyar kapcsolódási pontokkal kötöm a hallgatósághoz: Tesla Budapesten dolgozott a telefonközpont fejlesztéseken Puskás Tivadarral, Fodor István meghívására Edison Budapestre látogatott az egyik szabadalma az izzólámpa gyártását megtekinteni, a Ford T-modell sikeréhez pedig kulcsfontosságú magyar mérnöki munka kapcsolódik Galamb József révén. Végül a személyi számítógépek korszakában megmutatom, hogyan vált egy budapesti csapat – Bojár Gábor Graphisoftja – a korai Apple-ökoszisztéma egyik figyelt fejlesztőjévé, és mit jelent ez a mai mérnökhallgatók számára. Az üzenet egyszerű: a világszintű mérnöki teljesítmény nem „valahol máshol” történik – hanem ott, ahol valaki elég következetes ahhoz, hogy a problémából terméket, a termékből rendszert, a rendszerből pedig hatást építsen.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Eged Bertalan",
          rank: "",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72ce-291d-7c9e-9d60-8db1c7328f6a.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "szaniszlo-zsolt",
        title: "A STEM és az ejtőernyős tudományterület kapcsolata",
        room: "IB028",
        language: "hu",
        startTime: "16:40",
        endTime: "17:10",
        description: "Választott élethivatásomat a különböző ejtőernyős feladatokra alkalmazott személyi, valamint teherdeszant ejtőernyők alapvetően meghatározták. Kezdetben, mint egy a felhasználók közül: növendékként személyi kiképző- és gyakorló ejtőernyőkkel, majd repülő-hajózóként pilóta mentőejtőernyőkkel, továbbá ezzel egyidejűleg katona-sportolóként célbaugró ejtőernyőkkel kerültem kapcsolatba több, mint tizenöt éven keresztül. Végül, mint a teljes magyar katonai ejtőernyős tevékenységet felügyelő egyetlen egy(!) személy: a katonai légügyi hatóság ejtőernyős tisztjeként, majd főtisztjeként ez a viszony lassan kiterjedt a Magyar Honvédség valamennyi(!) ejtőernyő típusára...\r\nBár utolsó beosztásom „hivatalosan” a közigazgatáshoz tartozott, de az abban eltöltött több, mint egy évtized(!) megmutatta, hogy az ún. állami repüléssel kapcsolatos – nemcsak ejtőernyős – feladatok lelkiismeretes teljesítése olyan speciális és összetett tevékenységet jelent, amelyeket nem lehet kizárólagosan az íróasztal mellett, illetve a számítógép képernyője előtt ülve és/vagy csak a formanyomtatványok kitöltésével elvégezni… Az egyik legnagyobb kihívást ezek közül számomra a magyar katonai repülés területén addig ismeretlen ejtőernyő típusok biztonságos rendszerbe állítása jelentette. \r\nEz az érdekes és felelősségteljes feladat az adott típusú ejtőernyő-technikába vetett bizalom tudatos megteremtésével kezdődik, amely az ejtőernyőkkel kapcsolatos magasabb szintű elméleti – több esetben mérnöki szintű – tudás mellett a gyakorlati kipróbáláshoz nélkülözhetetlen, ún. ejtőernyő-beugrói szintű jártasság meglétét is szükségessé teszi. Mivel azonban az ejtőernyő technika önmagában „még nem fogja megoldani” egy-egy ugrási feladat biztonságos végrehajtását, ahhoz még – az adott típusú ejtőernyő vonatkozásában – szükség van egyrészt az ejtőernyős dobást biztosító, adott típusú repülőeszközre (ez gondoskodik az ejtőernyő biztonságos működésének első fázisáról: a kupola-belobbanás alapvető körülményeinek meglétéről), másrészt jól felkészített (szak)emberekre (akik előkészítik az ejtőernyőt az ugráshoz és/vagy végrehajtják vele az adott ejtőernyős ugrási feladatot: a gépelhagyástól az ún. ejtőernyős ereszkedésen keresztül egészen a földetérésig). Ezek együttes megléte garantálhatja csak az ugrási feladat biztonságos végrehajthatóságát az adott típusú ejtőernyővel. \r\nLátható, hogy ez egy olyan komplex –, az adott ejtőernyő-technika előkészítéséből, illetve műszaki felülvizsgálataiból, valamint adott személyek annak készségszintű használatára történő elméleti, illetve gyakorlati felkészítéséből álló – tevékenység-rendszert jelent, amely gyakorlatilag a STEM teljes spektrumát átfogja. Előadásomban a STEM-et alkotó különböző tudományterületek érdekes kapcsolatrendszerét fogom röviden bemutatni, egy számomra nagy fontosságú ejtőernyő típushoz kapcsolódó, egymással párhuzamosan futó, több évig tartó(!), összetett munkafolyamat alapján.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Szaniszló Zsolt",
          rank: "",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72cd-3562-7424-acdb-43bbc66e06f1.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "kocsi-tamas",
        title: "Technológia, üzlet és skálázódó komplexitás: A presales mérnöki munka a mindennapokban",
        room: "IB025",
        language: "hu",
        startTime: "14:50",
        endTime: "15:20",
        description: "Az elmúlt két évben a mesterséges intelligencia fejlődése olyan tempóra kapcsolt, amely\r\negyre inkább túlmutat a technológiai szektor határain. Számos elemzés foglalkozik azzal,\r\nhogy az AI milyen hatással van a gazdaságra és a munka világára. Egyes becslések szerint\r\na mesterséges intelligencia a következő évtizedben akár több tíz százalékkal is növelheti a\r\ntudásalapú munkakörök termelékenységét, miközben számos iparág működését is\r\nátalakíthatja. Körbejárjuk, hogy az aktuális globális és technológiai hatások (komplexitás, AI,\r\nautomatizáció, stb.) hogyan alakították és alakíthatják a mérnöki, illetve presales mérnöki\r\nmunkát t az IT, hálózati és kiberbiztonsági területen.",
        questionsUrl: "",
        presenter: {
          name: "Kocsi Tamás",
          rank: "IT üzleti megoldások - Szakértékesítési osztályvezető",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019ce7c9-80b1-731b-adee-83a7023fbfd3.jpg",
          company: {
            name: "One",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019cd8c1-4ee0-7d87-b890-92fd9f6f3c21.jpg",
            url: "",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: false,
        slug: "siki-gergely",
        title: "Hogyan irányítjuk a jövő autóit?",
        room: "IB025",
        language: "hu",
        startTime: "12:20",
        endTime: "12:50",
        description: "Az autózás világa nagy átalakulások előtt áll, megatrendek, mint az elektrifikáció, formálják. Az előadás rövid áttekintést nyújt az autók architekturális változásairól a múltban és arról, hogy mi várható a közeli és a távoli jövőben. Ismerteti a változások nyitotta új lehetőségeket és ezek kihasználását a biztonság, a kényelem és a személyreszabhatóság területén, bemutatja a felmerülő szabályozástechnikai problémákat és megoldási lehetőségeiket.",
        questionsUrl: "",
        presenter: {
          name: "Siki Gergely",
          rank: "SW Product Owner",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019cd2b8-7bc9-7346-a59e-4773143fa336.jpg",
          company: {
            name: "thyssenkrupp",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019cd2bd-8b8d-7d26-87df-754dde33850a.jpg",
            url: "https://www.thyssenkrupp.hu/hu/",
            category: SponsorCategory.NO_ASSOCIATION
          }
        }
      },
      {
        isBreak: false,
        slug: "toth-ervin",
        title: "Így neveld az idegrendszered",
        room: "IB028",
        language: "hu",
        startTime: "17:40",
        endTime: "18:10",
        description: "2026-ban kőkorszaki idegrendszerünk úgy összezavarodik középkori intézményeinkben, mint vasorrú bába a mágneses viharban.\r\nAz evolúció során olyan reflexeket és viselkedési mintákat örököltünk, melyek modern körülmények között (finoman szólva) nem szalonképesek.\r\nHonnan jöhet - ilyen környezetben - az önbizalom és a magabiztosság?\r\nIsmerjük meg szuperszámítógépünk, az agyunk jelzéseit, és állítsuk a stresszfaktorokat produktív munkába - ride the lightning!",
        questionsUrl: "",
        presenter: {
          name: "Tóth Ervin",
          rank: "Mérnök, óraadó tanár",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019cadc2-4159-7199-9eda-f798561f6077.png",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "kormoczi-peter-nova",
        title: "AI stratégia a gyakorlatban: policy, oktatás, AI Lab és közösségépítés",
        room: "IB025",
        language: "hu",
        startTime: "13:20",
        endTime: "13:50",
        description: "Az AI ma már nem jövőbeli ígéret, hanem a szoftverfejlesztés mindennapi eszköze. De hogyan lesz a hype-ból valódi stratégia? Hogyan lehet úgy bevezetni mesterséges intelligenciát egy fejlesztőcégnél, hogy az ne káoszt, hanem fejlődést hozzon?\r\nEbben az előadásban CTO szemszögből mutatom be, hogyan építettünk fel fél év alatt egy működő AI ökoszisztémát:\r\nvállalati AI policy-t, belső képzéseket, egy AI Lab kezdeményezést, valamint egy aktív szakmai közösséget meetupokkal és kísérletezési lehetőségekkel.\r\nSzó lesz sikerekről, hibákról, szervezeti kihívásokról és arról is, milyen készségekre lesz szüksége a következő generáció mérnökeinek az AI-val együttműködő világban.\r\nAz előadás gyakorlati betekintést ad abba, hogyan dolgozik ma egy modern szoftverfejlesztő szervezet AI-val — és talán inspirációt is azoknak, akik szeretnének aktív alakítói lenni\r\nennek az átalakulásnak.",
        questionsUrl: "",
        presenter: {
          name: "Körmöczi Péter",
          rank: "CTO",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c47c1-bc38-7921-a20c-9eda17399bd6.png",
          company: {
            name: "Nova Services",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c7017-9a28-7329-94ef-aa5fecf876a0.png",
            url: "https://www.novaservices.hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: true,
        slug: "nyeremenyjatek",
        title: "Nyereményjáték",
        room: "IB028",
        language: "hu",
        startTime: "18:10",
        endTime: "18:40",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: false,
        slug: "preinsperger-mate-siliconlabs",
        title: "Lokális AI IoT eszközökön avagy TinyEdge a Silicon Labs eszközein",
        room: "IB028",
        language: "hu",
        startTime: "15:20",
        endTime: "15:50",
        description: "Az AI nem csak felhőben futó óriásmodellekről szól. Az előadás közérthetően tisztázza az alapfogalmakat, majd megmutatja, mit jelent a mesterséges intelligencia a TinyML ,Tiny Edge beágyazott világában.\r\nRöviden bemutatja a Silicon Labs AI/ML-re optimalizált, hardveres gyorsítással ellátott eszközeit, és rávilágít arra, miben más ez a szemlélet a hagyományos programozáshoz képest.\r\nVégigkövetjük a fejlesztési folyamatot az adatgyűjtéstől a modellalkotáson át a beágyazott megvalósításig, majd konkrét példákon keresztül láthatóvá válik, hogyan fér bele az intelligencia egy mikrokontrollerbe.",
        questionsUrl: "",
        presenter: {
          name: "Preinsperger Máté",
          rank: "Applications Engineer",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019cb0bd-0bfd-766c-aaa4-ae5b168b0365.jpg",
          company: {
            name: "Silicon Labs",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c5cde-2499-7144-bad5-f62ec5fd6462.jpg",
            url: "https://www.silabs.com/about-us/careers",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: false,
        slug: "adam-zsofia",
        title: "Nem tisztán elmélet, nem tisztán gyakorlat: tapasztalatok a formális módszerekből",
        room: "IB028",
        language: "hu",
        startTime: "16:10",
        endTime: "16:40",
        description: "Hallgatóként, majd doktoranduszként 2019 óta foglalkozom formális módszerekkel, a Kritikus Rendszerek Kutatócsoportnál (ftsrg). Többek között kutatok, cikkeket írok, hallgatói munkákat konzultálok, nemzetközi kollaborációkban veszek részt, és nyílt forráskódú eszközöket fejlesztek.\r\n\r\n\r\nSokszor hallom azt, hogy valami nagyon elméleti vagy nagyon gyakorlati: hallgatóként mindkettőt tudjuk kifogásolni tárgyakban, kutatóként cikkek értékét vitatjuk, hogy nem elég mély az elmélet, vagy nem elég kiforrott a gyakorlat.\r\n\r\n\r\nAmi a legnehezebb, hogy egyénként talán túl könnyen tesszük az identitásunk részévé ezt: \"én csak az elméletből vagyok jó\", vagy épp \"nekem csak a gyakorlatias feladatok mennek\". De biztos, hogy van kontextustól független, \"abszolút\" értelme ezeknek a szavaknak?\r\n\r\n\r\nAzt szoktam mondani magamról, hogy számítástudomány (computer science) és a szoftvermérnökség (software engineering) határán kutatok - bizonyos szempontból elmélet és gyakorlat határán. Ugyan a formális verifikáció nagyon elméleti terület hírében áll, valójában egyre több mérnöki alkalmazásban jelenik meg és a kutatási témák is gyakran fordulnak mérnöki feladatok felé.\r\n\r\n\r\nElőadásomban a saját munkámból hozott példákkal szeretnék arra rávilágítani, hogy az elmélet / gyakorlat kettősség relatív, illetve hogy pont emiatt nem érdemes magunkat csak az egyik oldalra \"beszorítani\".",
        questionsUrl: "",
        presenter: {
          name: "Ádám Zsófia",
          rank: "PhD Student, Critical Systems Research Group BME-MIT",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72cb-3ebc-7cfe-9ef8-4e48afb03eb7.jpg",
          company: undefined
        }
      },
      {
        isBreak: false,
        slug: "jozsa-csaba",
        title: "Megbízható lokalizáció vizuális és RF adatokkal nagyméretű környezetekben",
        room: "IB025",
        language: "hu",
        startTime: "16:40",
        endTime: "17:10",
        description: "A lokalizációs rendszerek gyakran kizárólag vizuális adatokra építenek, amelyek megbízhatatlanná válnak gyenge fényviszonyok, mozgó tárgyak vagy ismétlődő mintázatok mellett. Mi multimodális megközelítést alkalmazunk: rádiófrekvenciás (RF) mérésekkel dúsított pontfelhőket regisztrálunk egy globális referencia térkép és egy valós idejű lokális térkép között, kihasználva az RF-adatok kiegészítő előnyeit vizuálisan nehezen értelmezhető területeken. Az RF-Loc nevű keretrendszerünk hierarchikus felépítésű: strukturális pontfelhő-alapmodellt egészít ki RF-alapú tanulással és megbízhatósági értékeléssel. Kulcselemei egy kompakt RF- jellegzetesség-képző modul, pozícióbecsléshez finomhangolt strukturális jellemzők, valamint hatékony jelösszeolvasztás – mindezt gyorsítótárazással és durva-finom keresési stratégiával kiegészítve a nagy léptékű alkalmazásokhoz.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Józsa Csaba Máté",
          rank: "Senior AI Research Scientist",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019cbcdd-5836-7c44-a848-441aed6a6363.jpeg",
          company: {
            name: "Nokia",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019c481d-159c-7570-a32f-e16a31aac60e.png",
            url: "https://www.facebook.com/nokiahungary/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        isBreak: true,
        slug: "nincs-eloadas",
        title: "Nincs előadás",
        room: "IB025",
        language: "hu",
        startTime: "14:20",
        endTime: "14:50",
        description: "",
        questionsUrl: "",
        presenter: null
      },
      {
        isBreak: false,
        slug: "schlegi-adam",
        title: "A HUNOR-program kísérletei az Axiom-4 küldetés során",
        room: "IB025",
        language: "hu",
        startTime: "17:40",
        endTime: "18:10",
        description: "Az Axiom–4 küldetés során egy amerikai, indiai, lengyel és magyar űrhajós összesen 20 napot és 3 órát töltött a világűrben, ebből 18 napot a Nemzetközi Űrállomáson (ISS), ami 4 nappal haladta meg az eredetileg tervezett 14 napos tartózkodást. Az előadás célja, hogy bemutassa az ISS, mint laboratórium különleges körülményeit, az űrben kutatás néhány kihívását és röviden a HUNOR-program tudományos portfólióját, különlegességként kiemelve az élettudományos kísérleteket. Például: END‑SANS: Nanoszál-alapú szemészeti betéteket vizsgál mikrogravitációs környezetben, azok stabilitása és a személyzet általi használhatósága szempontjából; ezek a jövőben hatóanyag‑tartalmú készítmények hordozására is alkalmasak lehetnek. CINCINNATI: A program mikrogravitációs környezetben, terheléses vizsgálatok során validálja a ruházat hőátadását modellező szimulációt, amelynek eredményei űrruhák és földi, szélsőséges környezetre szánt védőruházat tervezését támogatják; RANDAM: Személyi monitorrendszer, amely a sugárzás-, hőmérséklet-, páratartalom-, CO₂‑szint, fényviszonyok és mágneses tér alakulását követi nyomon;  M4D: A mikrofluidikai rendszerekben zajló folyadékviselkedést, valamint a paracetamol (Tylenol) stabilitását vizsgálja, „lab‑on‑a‑chip” jellegű, gyógyszerszint‑monitorozásra alkalmas eszközök fejlesztésének céljával; ESEL3D: A 3D‑nyomtatott polimerekre gyakorolt űrrepülési hatásokat (sugárzás, gyorsulások) elemzi fedélzeti gyártás szempontjából, elsősorban olyan anyagokra fókuszálva, amelyek orvosi alkalmazásokhoz is megfelelőek. Valamennyi kísérlet esetében sikeres adatgyűjtés történt, és minden előre definiált alapvető sikerességi kritérium teljesült.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Schlégl Ádám",
          rank: "PhD, HUN-REN TKI HUNOR-program, Élettudományos koordinátor",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019cddb3-509a-75c8-8ca8-27535e130d73.jpg",
          company: {
            name: "HUNOR",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019d0656-e4ea-701d-941c-551b4ee02294.png",
            url: "https://hunor.gov.hu/",
            category: SponsorCategory.NO_ASSOCIATION
          }
        }
      },
      {
        isBreak: false,
        slug: "kiss-tamas-laszlo",
        title: "AI által készített weboldalak kockázata",
        room: "IB025",
        language: "hu",
        startTime: "16:10",
        endTime: "16:40",
        description: "A generatív mesterséges intelligencia egyre nagyobb szerepet kap a szoftverfejlesztésben,\r\njelentősen felgyorsítva a kódírást és a problémamegoldást. Az AI által generált kód azonban\r\ngyakran tartalmazhat rejtett sérülékenységeket, hibás mintákat vagy elavult megoldásokat. Az\r\nelőadás bemutatja, milyen biztonsági problémák jelenhetnek meg az AI-asszisztált fejlesztés\r\nsorán, és miért nem elegendő vakon megbízni a generált kódban. Gyakorlati példákon keresztül\r\nlátható, hogyan vezethetnek ezek a hibák valós sérülékenységekhez. Rávilágítunk arra is, hogy a\r\nkockázatok jelentős része valójában emberi tényezőből ered: rossz promptokból, túlzott\r\nbizalomból és hiányzó ellenőrzésekből.",
        questionsUrl: "",
        presenter: {
          name: "Kiss Tamás László",
          rank: "Főosztályvezető​",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019ce165-b44f-7142-8a5c-58e8b7c99020.png",
          company: {
            name: "Nemzetbiztonsági Szakszolgálat Nemzeti Kiberbiztonsági Intézet",
            logoUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-company/019ce164-4c25-7147-826b-61d29e8f6329.png",
            url: "https://nki.gov.hu/",
            category: SponsorCategory.NO_ASSOCIATION
          }
        }
      },
      {
        isBreak: false,
        slug: "dudas-levente",
        title: "A Hunity 3 PocketQube osztályú műegyetemi diákműhold és küldetése",
        room: "IB025",
        language: "hu",
        startTime: "17:10",
        endTime: "17:40",
        description: "A Budapesti Műszaki és Gazdaságtudományi Egyetemen, a Villamosmérnöki és Informatikai Karon, a Szélessávú Hírközlés és Villamosságtan Tanszéken, a Mikrohullámú Távérzékelés Laboratóriumban, együttműködésben a Műegyetemi Rádió Club Egyesülettel, egyetemi oktatói irányítással, egyetemi hallgatók és középiskolás diák csoportok aktív közreműködésével, a Nemzeti Média és Hírközlési Hatóság szakmai partnerségével és támogatásával készült a 6. magyar oktatási célú 3-PocketQube osztályú, 5 x 5 x 15 cm-es névleges méretű, 868 g össztömegű zsebműhold: a HUNITY. Erről fog szólni a mese.",
        questionsUrl: "",
        presenter: {
          name: "Dudás Levente",
          rank: "docens, BME-HVT",
          pictureUrl: "https://xxiii.konferencia.simonyi.bme.hu/img/conference-presenter/019c72cf-624d-73f5-9770-74f40c97adca.jpg",
          company: undefined
        }
      }]
  }
}
