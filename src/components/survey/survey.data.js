const surveyTestData = {
  categories: [
    {
      name: 'Měřící systémy, včetně MSA (Analýza systému měření)',
      codeName: 'MSA',
      description: '',
      questions: [
        {
          question: 'Úloha dat ve společnosti',
          answers: [
            {
              text:
                'Rozhodování je realizováno na základě dat, stejně jako řízení procesů, anebo zlepšování. Data pokrývají všechny procesy.',
              number: 3,
            },
            {
              text:
                'Měřeny jsou nejdůležitější procesy. Rozhodování o nich se opírá o data. ',
              number: 2,
            },
            {
              text:
                'Měřeny nejsou ani nejdůležitější procesy. Když jsou, tak se při řízení moc nepoužívají.',
              number: 1,
            },
          ],
        },
        {
          question: 'Úroveň používaných dat',
          answers: [
            {
              text:
                'Když je to možné a dává to smysl, jsou získavány spojitá data.',
              number: 3,
            },
            {
              text: 'Převládají data atributivní, občas se najdou i spojité.',
              number: 2,
            },
            {
              text:
                'Data jsou maximálně kvalitativního charakteru, anebo nejsou žádné.',
              number: 1,
            },
          ],
        },
        {
          question: 'Způsobilost dat',
          answers: [
            {
              text:
                'Měřící systméy jsou způsobilé a jejich způsobilost je ověřena (například metodou MSA).',
              number: 3,
            },
            {
              text:
                'Nejdůležitější měřící systémy jsou verifikovány, jinak způsobilost měřícího systému řešena není.',
              number: 2,
            },
            { text: 'Měřící systémy jsou nezpůsobilé.', number: 1 },
          ],
        },
        {
          question: 'Zpracování dat',
          answers: [
            {
              text:
                'Data jsou zpracovávany online a jsou vyhodnocovány na základě relevantních statistických metod (např. podle ISO 8258)',
              number: 3,
            },
            {
              text:
                'Data jsou vyhodnocovány pravidelně, alespoň základními deskriptivními statistickými nástroji.',
              number: 2,
            },
            {
              text:
                'Data jsou zaznamenávany, ale nepracuje sa  s nimi dál, pokud si to jen konkrétní situace nevyžaduje.',
              number: 1,
            },
          ],
        },
        {
          question: 'Způsob záznamu dat',
          answers: [
            {
              text: 'Automaticky, digitálně, transparentně -i  s metadaty.',
              number: 3,
            },
            {
              text: 'Data jsou přepisovány do digitální podoby s opožděním.',
              number: 2,
            },
            {
              text:
                'Data jsou jenom v analogovém (zejména papírovém formátu), anebo se nezaznamenávají.',
              number: 1,
            },
          ],
        },
        {
          question: 'Řešení v případě nestandardních hodnot',
          answers: [
            {
              text:
                'Existuje jasný a efektivní způsob zásahu do procesu v případě nestandardních hodnot: například řešení pomocí 8D anebo PDCA. Možné zásahy a řešení jsou hierarchicky jasně uspořádany(eskalační pravidla)',
              number: 3,
            },
            {
              text:
                'V případě nestandardních hodnot je realizován zásah do procesu dle uvážení pracovníka, anebo příkazu manažera.',
              number: 2,
            },
            {
              text:
                'Zasahujeme jenom při výrazném nebo několikanásobném překročení stanovených hranic.',
              number: 1,
            },
          ],
        },
        {
          question: 'Kompatibilita dat',
          answers: [
            {
              text:
                'Data získavané z různých procesů jsou navzájem jednoduše přepojitelné na základě metadat - a vytvářejí spolu jeden obraz.',
              number: 3,
            },
            {
              text:
                'Data jsou ukládány při každém měřícím systému zvlášť, ale je možné je propojit za pomoci různých převodních mechanizmů (makro, PLC, nadřazené databázové systémy)',
              number: 2,
            },
            {
              text:
                'Nekompatibilní datové záznamy  neumožňují data reálně porovnávat, slučovat, nebo smysluplne třídit.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'Metody, eliminace plýtvání a úroveň lean implementace',
      codeName: 'lean',
      description: '',
      questions: [
        {
          question: 'Kdo řídí zlepšování?',
          answers: [
            {
              text:
                'Každý zaměstnanec ví, jak eliminovat plýtvání a většina zaměstnanců přispívá ke změnám nápady na zlepšení.',
              number: 3,
            },
            {
              text:
                'Zlepšování a implementaci lean filosofie má na starosti určená skupina lidí. ',
              number: 2,
            },
            {
              text:
                'Není stanoven ani čas, ani způsoby motivace, ani zdroje pro implementaci a realizaci lean. ',
              number: 1,
            },
          ],
        },
        {
          question: 'Struktura zlepšování',
          answers: [
            {
              text:
                'Zlepšování je realizováno na vícero úrovních: od jednoduchých kaizenů, přes organizované workshopy (PDCA DMAIC), ke strategickému zlepšování. Je organizováno systematicky.',
              number: 3,
            },
            {
              text:
                'Používá se vícero způsobů řešení problémů a zlepšování, ale nesjou systematicky strukturované.',
              number: 2,
            },
            {
              text:
                'Chybí jakákoliv metoda, struktura nebo systém podporující generování nápadů a zlepšování. ',
              number: 1,
            },
          ],
        },
        {
          question: 'Když se vyskytnou problémy',
          answers: [
            {
              text:
                'Většina kořenových příčín je determinována a jejich eliminace je dobrým základem pro kontinuální zlepšování. (Odstraňování symptomů a projevů je realizováno jenom v případě, že eliminace kořenových příčin není efektivní)',
              number: 3,
            },
            {
              text:
                'Odstraňování symptomů, vyjímečně se hledají a řeší i kořenové příčiny. Ale je možno zaznamenat i zlepšování výsledků.',
              number: 2,
            },
            {
              text:
                'Problémy se opakují. Společnost se snaží fungovat i s nima.',
              number: 1,
            },
          ],
        },
        {
          question: 'Přístup k odstraňování plýtvání',
          answers: [
            {
              text:
                'Každodenně - je to část firemní kultury: SFM, každodenní řízení, steering committee.',
              number: 3,
            },
            { text: 'Cílené zlepšovací aktivity', number: 2 },
            { text: 'Řešíme, když to ušetří peníze', number: 1 },
          ],
        },
        {
          question: 'Oblasti odstraňování plýtvání',
          answers: [
            {
              text:
                'Základní procesy, řídicí a stearingové procesy, podpůrné procesy ',
              number: 3,
            },
            {
              text: 'Jenom vybrané oblasti, ale přes celé oddělení.',
              number: 2,
            },
            {
              text:
                'Nerovnomerně rozloženo, soustředěno jenom na několik oblastí.',
              number: 1,
            },
          ],
        },
        {
          question: 'Povědomí o lean',
          answers: [
            {
              text:
                'Zaměstnanci vědí, že lean jim pomůže zjednodušit jejich práci a zároveň přispívat k úspechu společnosti.',
              number: 3,
            },
            {
              text:
                'Zaměstnanci vědí, že lena může pomoct - ale zejména společnosti, ne jim.',
              number: 2,
            },
            {
              text:
                'Pro zaměstnance je lean jenom dalším způsobem, jak je firma může přinutit k vyššímu výkonu.',
              number: 1,
            },
          ],
        },
        {
          question: 'Lean a investice',
          answers: [
            {
              text:
                'Společnost se zaměřuje na lean (kobetsu kaizen = cílené zlepšování) předtím, jak se rozhoduje o investicích. Investice nejsou závislé od zeštíhlování.',
              number: 3,
            },
            {
              text:
                'Společnost realizuje lean až potom,když se rozhodne ohledně investic',
              number: 2,
            },
            {
              text:
                'Investuje se do zlepšení vybraných procesů. Štíhlé aktivity se ale zaměřují na jiné procesy, kterých se investice nedotknou.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'Úroveň procesní standardizace a bezpečnosti',
      codeName: 'standardy-bezpecnost',
      description: '',
      questions: [
        {
          question: 'Jak máte nastavený systém BOZP ve Vaší společnosti?',
          answers: [
            {
              text:
                'Máme pravidelné audity BOZP s dobrými vysledky, jasně stanovené odpovědnosti a funkční systém nápravních opatření.',
              number: 3,
            },
            {
              text:
                'Audity BOZP jsou nepravidelné. Systém BOZP existuje, i když je více-méně jenom formální.',
              number: 2,
            },
            {
              text:
                'Systém BOZP máme jenom na papíře, audity jsou vyvolány jen externí potřebou (zákazník, státní orgány).',
              number: 1,
            },
          ],
        },
        {
          question:
            'Jaké jsou Vaše výsledky  v TRIR? (na milión pracovních hodin)',
          answers: [
            { text: 'pod 5', number: 3 },
            { text: '5 az 30', number: 2 },
            { text: 'nad 30', number: 1 },
          ],
        },
        {
          question: 'Oblast procesního řízení',
          answers: [
            {
              text:
                'Společnost má detailně rozpracovanou procesní strukturu (mapu), rozdělenou na: řídící, hlavní a podpůrné procesy.  Procesy jsou dekomponované až na jednotlivé operace.',
              number: 3,
            },
            {
              text:
                'Spolčnost má rozpracovaný strom procesů (procesy jsou dekomponované, ale vzájemné souvislosti nesjou definovány) a základní procesní standardy alespoň pro hlavné procesy.',
              number: 2,
            },
            {
              text: 'Společnost nemá systematicky popsané procesy.',
              number: 1,
            },
          ],
        },
        {
          question: 'Pracovní postupy',
          answers: [
            {
              text:
                'Pracovní postupy, postupy pro údržbu a kontrolu jsou  kompletně zpracované, vizualizované a aktuální. Využívají logiku OPL.',
              number: 3,
            },
            {
              text:
                'Společnost má popsanou většinu pracovních postupů, většina z nich je aktuální. ',
              number: 2,
            },
            {
              text:
                'Pracovní standardy jsou formálně zpracované, anebo neexistují. ',
              number: 1,
            },
          ],
        },
        {
          question: 'Vizuální management',
          answers: [
            {
              text:
                'Vizuální  management je jednoznačný, podporuje orientaci na pracovišti, bezpečnost při práci a vzájemný přenos informací.',
              number: 3,
            },
            {
              text:
                'Existují základy vizuálního managementu, ale standardy nejsou úplně jednoznačné a všeobecně dodržované. ',
              number: 2,
            },
            {
              text:
                'Vizuální management plní více-méně dekorační funkci. Není úplně zaměřen na podporu a fungování procesů.',
              number: 1,
            },
          ],
        },
        {
          question: 'Organizační struktura',
          answers: [
            {
              text:
                'Kopíruje strukturu procesů společnosti.  Měni se v případě změny v procesní struktuře.',
              number: 3,
            },
            {
              text:
                'Je alespon na 80% v souladu s procesní strukturou společnosti. Mění se častěji, jako procesní struktura.',
              number: 2,
            },
            {
              text:
                'Organizační struktura nevychází z procesní struktury. (Korelace pozicí a procesů je menší než 80%)',
              number: 1,
            },
          ],
        },
        {
          question: 'Znalosti (kvalifikace) v procesech',
          answers: [
            {
              text:
                'Existují přesné požadavky na kvalifikaci zamestnanců v jednotlivých procesech a na jejich zaškolování. Firma má zpracovaný plán školení a kvalifikační matice.',
              number: 3,
            },
            {
              text:
                'Pracovník je přijatý většinou na základě schopností, požadavky na pracovní pozici jsou tedy nově definované, zaškolování je jenom univerzální.',
              number: 2,
            },
            {
              text:
                'Popis kvalifikace potřebné pro jednotlivé  procesy neexistuje. Není stanoven ani postup zaškolení.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'schopnost řídit hodnotový tok',
      codeName: 'VSM',
      description: '',
      questions: [
        {
          question: 'Efektivita procesního cyklu (VAT), poměr přidané hodnoty',
          answers: [
            { text: 'víc jak 5%', number: 3 },
            { text: '1-5%', number: 2 },
            { text: 'méně jak 1%', number: 1 },
          ],
        },
        {
          question: 'Zkracování Lead Time',
          answers: [
            {
              text:
                'V první řadě na základě odstranění plýtvánía obzvláště redukce zásob a čekání v procesu.',
              number: 3,
            },
            { text: 'Odstaňování/ rozšiřování úzkých míst.', number: 2 },
            {
              text: 'Zkracování nebo zrychlování pracovních aktivit.',
              number: 1,
            },
          ],
        },
        {
          question: 'Cyklení v procesu',
          answers: [
            {
              text: 'Neexistuje, materiálový tok je jenom jedním směrem.',
              number: 3,
            },
            {
              text:
                'Někdy je cyklení v pořádku, pomáha nám vybalancovat výtěžnost zaměstnanců.',
              number: 2,
            },
            {
              text: 'Cyklení se běžně vyskytuj v provozu. Není zmapováno.',
              number: 1,
            },
          ],
        },
        {
          question: 'Rozhraní v procesu',
          answers: [
            {
              text:
                'Rozhraní jsou hlavním zdrojem problémů a proto se jich snažíme z toku odstranit.',
              number: 3,
            },
            {
              text:
                'Rozhraní máme standardizované a zodpovědnost na obou stranách rozhraní, aby nevznikla šedá zóna.',
              number: 2,
            },
            {
              text:
                'Rozhraní nejsou podstatné, lidi jich musí zvládnout, neřešíme je.',
              number: 1,
            },
          ],
        },
        {
          question: 'Jaké jsou přístupy vůči rodinám produktů?',
          answers: [
            {
              text:
                'V pravidelných intervalech přehodnocujeme důležitost produktových rodin na základě vícero parametrů (např. cena, předpovědetelnost, variabilita, množství, …)',
              number: 3,
            },
            {
              text:
                'Produkty delíme na runners, repeaters a strangers dle jejich objemu (jeden faktor).',
              number: 2,
            },
            {
              text: 'Všechny produktové rodiny mají rovnaký přístup.',
              number: 1,
            },
          ],
        },
        {
          question: 'Za value stream sa považuje',
          answers: [
            {
              text:
                'Celý proces od první komunikace se zákazníkem, přes přijetí objednávky, vytváření hodnoty, dodání až po zaplacení zákazníkem',
              number: 3,
            },
            {
              text:
                'Jenom hlavní proces, ale ten poctivě gate-to-gate. Ostatní oddělení nevědí ovlivnit.',
              number: 2,
            },
            {
              text:
                'Samotní výroba (v případě nevýroby jenom zprocesování), za kterou nám zákazník platí.',
              number: 1,
            },
          ],
        },
        {
          question: 'Řízení na základě VSM',
          answers: [
            {
              text:
                'Update na denní bázi, zaměstnanci znají úzké místa, rozumějí KPI a problémům, které vyplývají z VSM. Mng rozhoduje na základě aktuálních dat z VSM.',
              number: 3,
            },
            {
              text:
                'VSM je o řízení hodnotového toku, nejenom o jeho zmapování. Proto výsledky z mapování využíváme při řízení. Mapy vsak nejsou pravidelně updatovány a rozhodování se opírá o jiná data než ty z aktuálního VSM.',
              number: 2,
            },
            {
              text:
                'Údaje získané při mapování hodnotových toků se využívají jenom při cíleném zlepšení.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'Interakce a komunikační tok',
      codeName: 'komunikace',
      description: '',
      questions: [
        {
          question: 'Existuje komunikační plán? (člověk-člověk)?',
          answers: [
            {
              text:
                'Komunikační plán je součásti procesních standardů, je popsán jako jedna z části flowchartů a obsahuje i detailní parametry komunikace (kanály, odpovědnosti, moment komunikace, standardizovaný rozsah, ...)',
              number: 3,
            },
            {
              text:
                'Komunikační plán existuje, ale není dostatečný (chybí napřiklad kanály, odpovědnosti, anebo popis momentu komunikace)',
              number: 2,
            },
            { text: 'Jenom pro projekty a change managemnt', number: 1 },
          ],
        },
        {
          question: 'Jsou zaznamenány mapy interakcí člověk-stroj?',
          answers: [
            {
              text:
                'Komunikační plán je součásti pracovních, údržbářských a kvalitářských postupů. Je možné z nich vyextrahovat - a popisuje ne jenom formu, ale i účel komunikace člověk-stroj.',
              number: 3,
            },
            {
              text:
                'U nejdůležitějších zařízení a bodů jsou standardizovány komunikační prostředky, napřiklad andonové tabule, nebo přes wi-fi odesílané data o přestojích.',
              number: 2,
            },
            {
              text:
                'Komunikace člověk-stroj není standardizována, každé zařízení generuje jiný typ informací.',
              number: 1,
            },
          ],
        },
        {
          question: 'Jak přesná je mapa interakcí stroj-stroj?',
          answers: [
            {
              text:
                'Mapa zachytáva všechny zařízení naší společnosti, komunikační kanály, frekvencii a momenty komunikace, účely komunikace, používané protokoly, komunikační uzly, jakoij potenciál další komunikace s ohledem na přidanou hodnotu.',
              number: 3,
            },
            {
              text:
                'Mapa zachycuje komunikační infrastrukturu a zařízení v ní (minimálně 50% všech zařízení společnosti)',
              number: 2,
            },
            {
              text:
                'Interakce stroj-stroj jsou naprogramovány tam, kde je jich potřeba. Mimo ně spolu stroje i tak nevědí  komunikovat.',
              number: 1,
            },
          ],
        },
        {
          question: 'Je společnost schopna zvládat i komplexní interakce?',
          answers: [
            {
              text:
                'Ano, díky standardizaci interakcí je bez problémů možné zvládnout i zložité interakční  momenty / období. Každý má potřebné informace.',
              number: 3,
            },
            {
              text:
                'Jednorazově je možné zvládnout i komplexnější interakční momenty,následkem bává zvýšená míra chaosu a časté přestoje. ',
              number: 2,
            },
            {
              text:
                'Jenom na poradách, workshopech a při přestavování technologií. Jinak ale komunikace firmy působí úplně komplexně za každý okolností, i když běží v každodenním  módu.',
              number: 1,
            },
          ],
        },
        {
          question: 'Jak je zvládnuta externí komunikace',
          answers: [
            {
              text:
                'V rámci externí komunikace jsou optimalizovány rozhraní, s cílem plynulého informačního a hodnotového toku.',
              number: 3,
            },
            {
              text:
                'Externí komunikace je částečně standardizována, ale externím partnerům (zákazníci, dodavatelé…) není možné nařídit způsob komunikace.',
              number: 2,
            },
            {
              text:
                'Na externí komunikaci existují single points of kontakt, které mají vše na starosti.',
              number: 1,
            },
          ],
        },
        {
          question: 'Ukládání informací',
          answers: [
            {
              text:
                'Informace jsou ukládany v pravidelných (krátkých) intervalech, s jasní strukturou a metadaty. Informace z různých zdrojů je možné zesuladit. Jsou ukládany centrálně na dostupném místě. Jsou zabezpečeny proti zneužití.',
              number: 3,
            },
            {
              text:
                'Informace jsou ukládany centrálně, ale je těžké zesouladit informace ukládané z různých zdrojů.(například nedostatečné metadata)',
              number: 2,
            },
            {
              text:
                'Převládá lokální ukládání informací nebo dokonce archivace v papírové formě.',
              number: 1,
            },
          ],
        },
        {
          question: 'Transparentnost informací',
          answers: [
            {
              text:
                'Informace jsou dostupné na základě popisů pracovního místa a pozice v komunikačním plánu. Všechny informace, které nejsou důležité pro bezpečnost jsou přůstupné zaměstnancům. Směrem venku jsou přístupy kódovány.',
              number: 3,
            },
            {
              text:
                'Informace se můžou spřístupnit, je ale potřeba oprávněne, o kterých rozhodují nadřízeni a ještě další oddělení.',
              number: 2,
            },
            {
              text:
                'Informace jsou často fyzicky nedostupné kvůli způsobu jejich ukládání.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'Plánování a supply chain management',
      codeName: 'SCM',
      description: '',
      questions: [
        {
          question: 'Způsob plánování',
          answers: [
            {
              text:
                'Záleží od typu produktu, využívají se různé principy (tah, na zakázku, dle předpovědi).',
              number: 3,
            },
            {
              text:
                'Existuje zavedený princip tahu, nebo alespoň nějaký jiný odpovídající princip plánování.',
              number: 2,
            },
            { text: 'Reaktivní plánování.', number: 1 },
          ],
        },
        {
          question: 'Pozice v SCM vůči zákazníkům',
          answers: [
            {
              text:
                'Pro velkou část zákazníků je společnost strategickým partnerem. Pro jiné zákazníky alespoň partnerem, se kterým se dá plánovat.',
              number: 3,
            },
            {
              text:
                'Pro část zákazníků je společnost partnerem zahrnutým v plánování, pro ostatní alespoň preferovaným partnerem',
              number: 2,
            },
            { text: 'Společnost je jenom transakčním partnerem', number: 1 },
          ],
        },
        {
          question: 'Pozice dodavatelů v rámci SCM',
          answers: [
            {
              text:
                'Společnost má strategické partnery na straně dodavatelů, u jiných dodavatelů využívá minimálně dual sourcing a drží si je na úrovni plánovacích partnerů.',
              number: 3,
            },
            {
              text:
                'Společnost má alespoň polovinu stávajících dodavatelů na úrovni plánovacích partnerů, transakční partneři nepřesahují 30% všech dodavatelů.',
              number: 2,
            },
            {
              text:
                'Společnost nemá strategického partnera na straně dodavatelů. Většina dodavatelů (90%) jsou jenom transakční  partneři.',
              number: 1,
            },
          ],
        },
        {
          question: 'Transparentnost SCM',
          answers: [
            {
              text:
                'Všechny společnosti v SCM vidí (v nějaké formě) objednávky anebo i plány konečných zákazníků přímo online, bez zdržování.',
              number: 3,
            },
            {
              text:
                'Dodavatelé mají možnost online vidět (v nějaké formě) objednávky zákazníků, ale jejich plány neznají',
              number: 2,
            },
            {
              text: 'Dodavatelé nevidí vůbec požadavky zákazníků společnosti.',
              number: 1,
            },
          ],
        },
        {
          question: 'Jaké jsou vstupní data pro plánování?',
          answers: [
            {
              text:
                'Plánování je postaveno na kombinaci aktuálních dat z VSM, dat od zákazníků a dodavatelů',
              number: 3,
            },
            {
              text:
                'Plánování zohledňuje zákaznická data, nezohledňuje dodavatelé anebo VSM.',
              number: 2,
            },
            { text: 'Plánování reaguje na aktuální problémy.', number: 1 },
          ],
        },
        {
          question: 'Fragmentace plánování',
          answers: [
            {
              text:
                'Plánování je vnímané jako celek nejen za společnost, ale za celý dodavatelsko-odberatelský řetězec.',
              number: 3,
            },
            {
              text: 'Plánování je vnímáno jako celek za společnost.',
              number: 2,
            },
            {
              text:
                'Plánování je záležitostí jednotlivých oddělení, celek je plánovaný jenom cca 1-2x rocne.',
              number: 1,
            },
          ],
        },
        {
          question: 'Standardizace plánování',
          answers: [
            {
              text:
                'Plánovací rozhodnutí jsou postaveny na datech. Existují přesná pravidla pro rozhodování a plánování a jsou dodržována. V případě nevhodnosti se volí nouzová strategie.',
              number: 3,
            },
            {
              text:
                'Při plánování jsou zohledňované konkrétní data. Toto je standardem. Neplatí však, že rozhodnutí jsou přijímáná na základě dat.',
              number: 2,
            },
            {
              text:
                'Plánují zaměstnanci - na základě svých zkušeností a odhadů.',
              number: 1,
            },
          ],
        },
      ],
    },
    {
      name: 'Platformy and flexibilita současných technologií',
      codeName: 'platformy',
      description: '',
      questions: [
        {
          question: 'Flexibilita zařízení a systémů',
          answers: [
            {
              text:
                'Zařízení a systémy se dokáži přizpůsobit novým požadavkům - jsou na to stavěné (bez zbytečného programování a testování), běžně jsou využivány na vícero produktů.',
              number: 3,
            },
            {
              text:
                'Zařízení a systémy je možné přeprogramovat, ale trvá to príliš dlouho, nebo je to finančně nákladné.',
              number: 2,
            },
            { text: 'Jednoúčelové zařízení a systémy.', number: 1 },
          ],
        },
        {
          question: 'Flexibilita technických rozhraní',
          answers: [
            {
              text:
                'Rozhraní disponují otevřenými (open source) protokoly, které umožňují výměnu informací s okolitým světem.',
              number: 3,
            },
            {
              text:
                'Rozhraní jsou standardizované, ale limitované na konktrétní protokoly.',
              number: 2,
            },
            {
              text:
                'Na rozhraních je potřebný člověk nebo PLC, kdy má fungovat komunikace s jiným systémom.',
              number: 1,
            },
          ],
        },
        {
          question: 'Flexibilita pracovníků',
          answers: [
            {
              text:
                'Všechny týmové pozice mají zastupitelnost a pracovníci jsou standardně rozvíjeni na základě skills matrix, která slouží i jako matice flexibility. Management ji zohledňuje při strategii rozvoje a motivaci.',
              number: 3,
            },
            {
              text:
                'Klíčové pozice mají vždy zastupitelnost. Existují ale i pozicie, kde zastupitelnost není vyřešena. Je ale ošetřena různými ochranními opatřeními. ',
              number: 2,
            },
            {
              text:
                'Pracovníci nejsou motivováni k flexibilitě, vykonávají jenom omezené počty úkonů.',
              number: 1,
            },
          ],
        },
        {
          question: 'Flexibilita procesů',
          answers: [
            {
              text:
                'Procesy jsou standardizovány a jednoduše přizpůsobitelné změnám na trhu.',
              number: 3,
            },
            {
              text:
                'Při jakékoliv změně na trhu musí být změněny významné části procesů.',
              number: 2,
            },
            {
              text: 'Změny jsou vždy novm projektem (change management).',
              number: 1,
            },
          ],
        },
        {
          question: 'Jednotné platformy',
          answers: [
            {
              text:
                'Všechny systémy jsou napojeny  na jednu flexibilní  platformu.',
              number: 3,
            },
            {
              text:
                'Existuje několik platforem, které nejsou vzájemně přepojeny jednou centralní.',
              number: 2,
            },
            {
              text:
                'Služby či zařízení mají svoje vlastní platformy a jejich integrace je komplikovaná.',
              number: 1,
            },
          ],
        },
        {
          question: 'Objemová škálovatelnost produktů',
          answers: [
            {
              text:
                'Výkyvy na trhu +/- 30% jsou zvládnutelné bez zásahů, u vyššího rastu je potřebná multiplikace systémových prvků, ale ne procesů.',
              number: 3,
            },
            {
              text:
                'Společnost je schopna bez problémů absorbovat +/- 10%, pak už je potřeba realizovat zásahy, které nejsou přesně zadefinované.',
              number: 2,
            },
            {
              text:
                'Růst není možný, už teď je společnost za limitem přetížení.',
              number: 1,
            },
          ],
        },
        {
          question: 'Škálovatelnost a flexibilita platforem (zejména IT)',
          answers: [
            {
              text:
                'Škálovatelnost je základní vlastností používaných platforem a technologií. Není potřeba žádných externích odborníků na škálovatelnost',
              number: 3,
            },
            {
              text:
                'ŠKálovatelnost platforem a technologií je možná, ale je nutná pomoc externích odborníků.',
              number: 2,
            },
            {
              text:
                'Škálovatelnost je spojena s nákupem jiných služeb, nebo technologií.',
              number: 1,
            },
          ],
        },
      ],
    },
  ],
};

export default surveyTestData;
