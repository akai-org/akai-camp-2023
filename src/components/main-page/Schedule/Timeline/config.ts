import { Timeline } from "components/main-page/types";

export const timelineList: Timeline[] = [
  {
    title: "Rejestracja uczestiników",
    hour: "09:00",
    location: "Centrum wykładowe PP",
    description:
      "Rozpoczęcie działania punktu rejestracji znajdującego się przy szatniach w budynku Centrum Wykładowego PP. Odbierz tutaj przygotowany przez nas pakiet fantów! Jeżeli potrzebujesz, możesz również zostawić swoją kurtkę lub inne rzeczy.",
  },
  {
    title: "Rozpoczęcie wydarzenia",
    hour: "10:00",
    location: "Sala CW1",
    description: "Oficjalne otwarcie eventu wraz z pierwszą prelekcją.",
    topics: [
      {
        title: "Tak dobrzy, że nie mogą Was zignorować (ani zastąpić przez AI)",
        abstract: `Jeszcze niedawno dostanie się na Informatykę gwarantowało
        sukces finansowy i przyjemne życie. Te czasy gwałtownie odeszły wraz z
        eksplozją modeli językowych. Nagle okazało się, że chimerycznych,
        zawodnych, drogich i marudzących informatyków (i informatyczki) można
        błyskawicznie zamienić na model, który szybciej przekopiuje kawałek kodu
        ze Stack Overflow, a przy tym nie popełni pomyłki. Czy to oznacza, że
        zawód informatyczki/ka jest skazany na wymarcie?
        <br><br>
        Wystąpienie poświęcone będzie temu, jak świadomie budować swoją karierę
        w IT w dobie wszędobylskiej AI, zachowując zdrowy rozsądek i radość z
        życia.
        `,
        lecturer: [
          {
            avatar: "Mikolaj_Morzy.jpg",
            fullName: "dr hab. inż. Mikołaj Morzy",
            biography: `Od lat związany jest z
            Politechniką Poznańską, aktualnie pełni funkcję prodziekana ds nauki na
            Wydziale Informatyki i Telekomunikacji. Na kierunkach Informatyka i
            Sztuczna Inteligencja prowadzi zajęcia z uczenia maszynowego,
            eksploracji danych, analizy sieci społecznościowych i przetwarzania
            tekstu. Naukowo zajmuje się uczeniem maszynowym, szczególnie w
            odniesieniu do języka pisanego i mówionego. Aktualnie pracuje nad
            wykorzystaniem uczenia maszynowego do uodparniania Twittera na
            rozprzestrzenianie się dezinformacji i teorii spiskowych w ramach
            międzynarodowego projektu #Cyberodporność. Wcześniej pracował na
            uniwersytetach w Niemczech i Stanach Zjednoczonych. Trzykrotnie
            występował jako prelegent na konferencjach TEDx. W wolnych chwilach
            miłośnik książek, biegania i windsurfingu, a także piwowar-amator.
            `,
          },
        ],
        panel: "universal",
      },
    ],
  },
  {
    title: "Pierwsza sesja prelekcji",
    hour: "10:30",
    location: "Sale CW1 i CW2",
    description:
      "Pierwszy blok wykładów z podziałem na tematykę techniczną i soft-skills.",
    topics: [
      {
        title: "Czego nie robić na początku kariery w IT?",
        abstract:
          "Pierwsza praca w IT, to zawsze duże wyzwanie. Już sam proces zabiegania o nią potrafi nieźle zniechęcić. Z kolei, patrząc z perspektywy czasu, okazuje się, że nasza branża jest nieco inna niż początkującemu programiście mogłoby się wydawać. Oczywiście, łatwo oceniać retrospektywicznie, z bagażem doświadczeń. Co innego, jeśli jest się “w centrum wydarzeń” i trzeba sprawnie podejmować decyzje dotyczące własnej kariery w IT. Dlatego też chciałbym podzielić się z Tobą moim kilkuletnim doświadczeniem jako Backend Developer. Wskażę częste błędy popełniane przez młodych programistów. Część z nich opóźnia dobry start w karierze, inne zaś ograniczają rozwój. Postaram się przekazać Tobie kilka praktycznych porad: co robić, a czego unikać. Nie zabraknie też czasu na pytania. Do zobaczenia!",
        lecturer: [
          {
            avatar: "Lukasz_Pieta.jpg",
            fullName: "Łukasz Pięta",
            biography:
              "Absolwent Politechniki Poznańskiej, Senior Backend Developer, pasjonat języka programowania Kotlin. W wolnym czasie kontrybuuje do open-source’owej, wieloplatformowej biblioteki do pisania testów w Kotlinie - Kotest.",
            company: "Stepwise",
          },
        ],
        panel: "technical",
      },
      {
        title: "Projektowanie aplikacji serverless na AWS",
        abstract:
          "Zastanawiałeś się w jaki sposób zbudować aplikację najmniejszym kosztem i w najkrótszym czasie? Z pomocą w dzisiejszych czasach przychodzą chmury publiczne, wśród których niezmiennie od lat króluje AWS. Poznaj sposoby budowy rozwiązań w oparciu o usługi serverless i przekonaj się czy aby na pewno zawsze są one najlepszym i najbardziej efektywnym rozwiązaniem.",
        lecturer: [
          {
            avatar: "Oskar_Jerzyk.jpg",
            fullName: "Oskar Jerzyk",
            biography:
              "Senior Software Engineer w WTT, entuzjasta rozwiązań chmurowych, absolwent Informatyki oraz specjalności Systemy Rozproszone na Politechnice Poznańskiej. Po godzinach miłośnik Formuły 1, kibic Lecha Poznań oraz producent domowego piwa rzemieślniczego.",
            company: "WTT",
          },
        ],
        panel: "technical",
      },
      {
        title: "Jak się rozwijać i się nie wypalić?",
        abstract:
          "Prędkość rozwoju w branży, coraz wyższy próg wejścia, chęć wykazania się i zarabianie dużych pieniędzy. To wszystko powoduje narzucanie wielkiej presji od samego początku kariery. Coraz więcej słyszy się o wypaleniu w branży IT. W mojej prezentacji opowiem o mojej historii wypalenia po pierwszym roku pracy. Przedstawię również jak rozpoznać wypalenie i jak sobie z nim radzić. Podzielę się sposobami optymalnego rozwoju, które chciałbym znać zanim zacząłem swoją pierwszą pracę.",
        lecturer: [
          {
            avatar: "Tobiasz_Ciesielski.jpg",
            fullName: "Tobiasz Ciesielski",
            biography:
              "Cześć, jestem Tobiasz i pracuję jako Front-end Developer. Jestem absolwentem Informatyki na Politechnice Poznańskiej. Swoją karierę zacząłem w Prowly, gdzie nadal kontynuuję swoją przygodę rozwijając aplikację w Angularze. Po pracy dużo trenuję i prowadzę social media w tematyce rozwoju. Dzielę się również wiedzą techniczną na linkedin.",
            company: "Prowly",
          },
        ],
        panel: "technical",
      },
      {
        title:
          "Odczarujmy Scruma! Kilka porad na przyjemniejszą pracę i lepsze zarobki dzięki asynchroniczności",
        abstract:
          "Czy znasz to uczucie, kiedy Scrum przestaje być Twoim sprzymierzeńcem, a bardziej przypomina niekończące się zaklęcia? Procesy jako forma sztuki dla sztuki? Spotkania, które nic nie dają? Daily sprawiające, że czujesz się jak po stoczonej bitwie? Nie martw się! Jest na to sposób! W trakcie mojej programistycznej odysei, odczarowałem te procesy i mam kilka trików na poprawę humoru, efektywności i, potencjalnie, stanu konta bankowego! Przygotuj się na porcję praktycznych wskazówek z życia wziętych, które odmienią pracę Twojego zespołu. Gotowi na magiczną transformację? Zapraszam na prelekcję!",
        lecturer: [
          {
            avatar: "Grzegorz_Kotlarz.jpg",
            fullName: "Grzegorz Kotlarz",
            biography:
              "Senior Software Engineer @ 11Wizards. Emerytowany podcaster (lub w zawieszeniu, jeszcze nie zdecydował), współautor 58 odcinków podcastu AjTiTi. Zajawiony nie tylko samym programowaniem, ale też poprawą pracy zespołów. Po godzinach - piłkarz.",
            company: "11Wizards",
          },
        ],
        panel: "soft-skills",
      },
      {
        title: "Znajdź różnicę - CV a profil na linkedin",
        abstract:
          "Pierwszym i podstawowym krokiem przygotowawczym do poszukiwań pracy to skonstruowanie dobrego CV, które przykuje uwagę i otworzy drzwi do zaproszenia na rozmowę rekrutacyjną. Podczas wystąpienia Asia da Wam tips & tricks na co rekruterzy zwracają uwagę przy analizie cefałek.",
        lecturer: [
          {
            avatar: "Joanna_Mikolajewska.jpg",
            fullName: "Joanna Mikołajewska",
            biography:
              "Swoje doświadczenie zdobywała, współpracując z polskimi i zagranicznymi firmami IT, gdzie rekrutowała programistów oraz kandydatów na stanowiska związane ze światem IT. Po godzinach wspiera osoby poszukujące pracy w tworzeniu ich CV oraz przeprowadza ich przez tajniki rozmów rekrutacyjnych.",
            company: "MUG Software",
          },
        ],
        panel: "soft-skills",
      },
    ],
  },
  {
    title: "Przerwa na kawę + networking",
    hour: "12:00",
    location: "Sala L053 BT",
    description:
      "Godzinny przerywnik między prelekcjami. Przyjdź do L053 BT na kawę i słodycze! Skorzystaj też z okazji na odwiedzenie stanowisk firm i porozmawianie z ich przedstawicielami 😀",
  },
  {
    title: "Druga sesja prelekcji",
    hour: "13:00",
    location: "Sale CW1 i CW2",
    description:
      "Drugi blok wykładów z podziałem na tematykę techniczną i soft-skills.",
    topics: [
      {
        title: "O hackingu w 25 minut",
        abstract: "",
        lecturer: [
          {
            avatar: "Gynvael_Coldwind.svg",
            scaleDown: true,
            fullName: "Gynvael Coldwind",
            biography:
              "Programista pasjonat z zamiłowaniem do bezpieczeństwa komputerowego i niskopoziomowych aspektów informatyki. Autor bestsellerowej książki „Zrozumieć Programowanie”, redaktor naczelny i twórca eksperymentalnego magazynu Paged Out!, a także licznych artykułów, publikacji, podcastów oraz wystąpień poświęconych wspomnianym tematom. Współzałożyciel i były kapitan zespołu „Dragon Sector”, historycznie jednej z najlepszych drużyn Capture The Flag na świecie. W 2013 roku odebrał w Las Vegas (wspólnie z Mateuszem Jurczykiem) nagrodę Pwnie Award w kategorii „Najbardziej innowacyjne badanie naukowe” z dziedziny bezpieczeństwa komputerowego. Większość swojego ponad 17-letniego życia zawodowego spędził pracując w zespole bezpieczeństwa firmy Google. Obecnie jest dyrektorem zarządzającym w HexArcana Cybersecurity GmbH.",
            company: "HexArcana",
          },
        ],
        panel: "technical",
      },
      {
        title:
          // eslint-disable-next-line prettier/prettier
          "Od \"baby steps\" do sprintu - niezbędnik Juniora na drodze do samodzielnego wykonywania zadań",
        abstract:
          "Mimo, że teoretycznie czujesz gotowość do pracy, pracowałeś/aś nad projektami uczelnianymi, zderzenie z projektem komercyjnym może być bolesne i stresujące jeżeli nikt nie wyciągnie do Ciebie pomocnej dłoni. Podczas prelekcji dowiesz się, jakie zagadnienia opanować aby zrobić pozytywne wrażenie na rozmowie kwalifikacyjnej, a następnie sprawnie współpracować z zespołem developerskim w javascript software house. Opowiemy również dlaczego ważne jest code review, jak wygląda praca z Gitflow i na czym polega automatyczny deployment aplikacji.",
        lecturer: [
          {
            avatar: "Natalia_Stefaniak.jpg",
            fullName: "Natalia Stefaniak",
            biography:
              "CEO w MUG Software. Zarządza, słucha i adaptuje. Buduje relacje i dba o to, aby pierwszy realizowany projekt nie był ostatnim.",
            company: "MUG Software",
          },
          {
            avatar: "Pawel_Ruminkiewicz.jpg",
            fullName: "Paweł Ruminkiewicz",
            biography:
              "Tech Lead w MUG Software. Poszukuje najbardziej efektywnych i najbezpieczniejszych rozwiązań dla realizowanych projektów. Aktywny programista, który pomógł już wielu startującym w świecie developmentu aplikacji webowych.",
            company: "MUG Software",
          },
        ],
        panel: "technical",
      },
      {
        title: "Od Juniora do Lidera",
        abstract:
          "Czy początek kariery to dobry moment, żeby zacząć myśleć o byciu liderem? Jeśli tak, to na co należy zwrócić uwagę, jakie cechy w sobie rozwijać, jakich zadań należy się podejmować?",
        lecturer: [
          {
            avatar: "Anna_Boryla.jpg",
            fullName: "Anna Boryła",
            biography:
              "Liderka Zespołu Data Analysis Development w All For One Poland. Od 14 lat zdobywa doświadczenie jako programistka i liderka. Zarządzała pracą zespołów zarówno kilku- jak i kilkunasto-osobowych, stacjonarnie i w pełni zdalnie. Swoją wiedzę w zakresie zarządzania zdobywa m.in. na międzynarodowych szkoleniach organizowanych przez np. University of Chicago.",
            company: "All For One",
          },
        ],
        panel: "technical",
      },
      {
        title: "Personal Branding na LinkedIn",
        abstract:
          "Zacznij swoją przygodę z LinkedIn! Dowiedz się, jak uzupełnić swój profil, jak budować swoją markę osobistą i odkryj sposoby, aby wyróżnić się w tłumie zawodowych profili. Podkreśl swoje unikalne cechy i skutecznie komunikuj swoje osiągnięcia. Twoja osobista marka może stać się kluczem do sukcesu!",
        lecturer: [
          {
            avatar: "Danuta_Bialecka.jpg",
            fullName: "Danuta Białęcka",
            biography:
              "Od ponad 10 lat zajmująca się tematyką i różnymi wyzwaniami HR, w swoich działaniach stawią na aspekt międzynarodowy. Doświadczenie zdobywała w jednej z angielskich firm, by teraz od ponad dwóch lat, rozwijać się w firmie z branży IT, jako Specjalistka ds. Employer Brandingu w All for One Poland. Pasjonuje się tworzeniem autentycznych i inspirujących treści o marce, kreatywnie angażując pracowników w działania budowania silnego wizerunku pracodawcy",
            company: "All For One",
          },
          {
            avatar: "Gabriela_Grzeszcz.jpg",
            fullName: "Gabriela Grzeszcz",
            biography:
              "Z wykształcenia polonistka, dziennikarka, specjalistka od reklamy i promocji. Zawodowo od kilku lat związana z komunikacją wewnętrzną i Employer Brandingiem. Zdobywała doświadczenie w międzynarodowych firmach IT, takich jak Capgemini oraz All for One. Entuzjastka zaangażowania pracowników w działania w mediach społecznościowych i z zakresu Społecznej Odpowiedzialności Biznesu.",
            company: "All For One",
          },
        ],
        panel: "soft-skills",
      },
      {
        title: "Rozmowa rekrutacyjna - czego szuka Twój przyszły Manager?",
        abstract:
          " Informacje o tym czego poszukują managerowie wśród kandydatów, jakich cech&nbsp;/&nbsp;umiejętności i kogo tak naprawdę szukają na pozycjach juniorskich? Kilka przykładów pytań jakie można usłyszeć i wniosków jakie manager może na ich podstawie wyciągnąć? A na koniec lista Must have jeśli chodzi o przygotowanie się do rozmowy.",
        lecturer: [
          {
            avatar: "Krzysztof_Kedziorski.jpg",
            fullName: "Krzysztof Kędziorski",
            biography:
              "Pasjonat programowania, posiadający blisko 14-letnie doświadczenie w branży IT. Karierę zawodową rozpoczynał od programowania w C++, jednak to programowanie w Javie dostarcza mu najwięcej przyjemności i z tą technologią związał swoją zawodową przyszłość. Co kilka lat odkłada IDE na bok i wchodzi w rolę managera, by następnie po jakimś czasie ponownie wracać do programowania. Obecnie jako Engineering Manager w Egnyte współtworzy platformę, która pomaga zwiększać poziom bezpieczeństwa firmowych danych i budować świadomość użytkowników.",
            company: "Egnyte",
          },
        ],
        panel: "soft-skills",
      },
      {
        title: "Jak zarządzić swoim managerem",
        abstract: "",
        lecturer: [
          {
            avatar: "Jedrzej_Krysztofiak.jpg",
            fullName: "Jędrzej Krysztofiak",
            biography:
              "Od ponad 10 lat związany z Allegro, pełniąc role testera, programisty oraz team lidera. Na co dzień ze swoim zespołem zajmuje się rejestracją, logowaniem i odzyskiwaniem hasła na platformie.",
            company: "Allegro",
          },
        ],
        panel: "soft-skills",
      },
    ],
  },
  {
    title: "Przerwa obiadowa",
    hour: "14:30",
    location: "Sala L053 BT",
    description:
      "Druga i ostatnia przerwa podczas konferencji. Zawitaj znowu do L053 BT na lunch w postaci pizzy!",
  },
  {
    title: "Trzecia sesja prelekcji",
    hour: "15:30",
    location: "Sale CW1 i CW2",
    description: "Trzeci blok wykładowy w postaci panelu dyskusyjnego.",
    topics: [
      {
        title:
          "Produkt / Software House / Freelance / Korpo - z czym to się je i czy trzeba złapać je wszystkie?",
        abstract:
          "Subiektywny przegląd doświadczeń z różnymi rodzajami pracy w formie panelu dyskusyjnego z pytaniami od publiczności.",
        lecturer: [
          {
            avatar: "Marcin_Lawniczak.jpg",
            fullName: "Marcin Ławniczak",
            biography:
              "Absolwent automatyki i robotyki (inż.) i informatyki (mgr - Systemy Rozproszone). Swój pierwszy projekt programistyczny na zlecenie wykonał w wieku 16 lat. Uważa, że oprogramowanie powinno przynosić wymierne korzyści, a nie stawiać bariery, dlatego tworzy projekty dla Pyrkonu czy Sztabu WOŚP przy Politechnice Poznańskiej. Były przewodniczący AKAI. Na studiach prowadził własną firmę programistyczną, realizując projekty aplikacji internetowych dla małych i średnich firm (pełen cykl, od wymagań biznesowych, aż po utrzymanie). Obecnie Software Engineer w Nordcloud, firmie “natywnie chmurowej”, zajmuje się rozwojem produktu SaaS do wizualizacji i optymalizacji kosztów chmury.",
            company: "Nordcloud",
          },
          {
            avatar: "Robert_Banaszak.jpg",
            fullName: "Robert Banaszak",
            biography:
              "Swoją przygodę z programowaniem zaczął od tworzenia gier w podstawówce. Jest absolwentem studiów inżynierskich i magisterskich Politechniki Poznańskiej na kierunku informatyka. Poza samymi studiami, jest wieloletnim członkiem AKAI, gdzie uskuteczniał swoje zamiłowanie do dzielenia się wiedzą i jeżdżenia na hackathony. W ramach swojej kariery zawodowej współpracował m.in. z Pyrkonem, pracował nad aplikacja do przechowywania i zarządzania treściami w chmurze w Egnyte oraz zajmował się rozwojem produktów zintegrowanych z różnymi dostawcami chmurowymi w Nordcloud.Obecnie, jako full-stack developer, pracuje dla Talkie.ai nad rozwojem platformy do tworzenia voicebotów, skupiającej się głównie na branży medycznej.",
            company: "Talkie.ai",
          },
          {
            avatar: "Filip_Szostak.jpg",
            fullName: "Filip Szóstak",
            biography:
              "Absolwent informatyki na Politechnice Poznańskiej, zaangażowany działacz w Samorządzie Studentów Politechniki Poznańskiej oraz Akademickim Kole Aplikacji Internetowych. Ponadto, uczestniczył aktywnie w organizacji festiwalu muzycznego Polibuda Open Air, Sztabu Wielkiej Orkiestry Świątecznej Pomocy przy Politechnice Poznańskiej czy konferencji TEDx PUT. Jego pasja do informatyki i technologii zapoczątkowała się już w technikum, gdzie miał okazję zdobywać cenne doświadczenie w różnych obszarach zawodowych. Pracował zarówno w mniejszych, lokalnych firmach, jak i w mikroprzedsiębiorstwach. Miał również okazję zdobyć doświadczenie w dużej poznańskiej firmie z sektora bankowego, a także odbyć staż w oddziale Google w Monachium. Od niedawna pracuje jako Software Enginner w zespole pracującym nad Google Cloud.",
            company: "Google",
          },
          {
            avatar: "Tomasz_Gil.jpg",
            fullName: "Tomasz Gil",
            biography:
              "Pracuję jako Frontend Software Engineer, z ponad 7-letnim doświadczeniem w branży. Miałem możliwość współpracować bezpośrednio z markami takimi jak Revofund czy Masterhub, projektując i tworząc strony internetowe. W Egnyte, pracowałem nad aplikacją internetową wykorzystywaną przez ponad 17 000 firm na całym świecie, pozwalającą na przechowywanie, zarządzanie i współdzielenie plików. W Rvvup brałem udział w tworzeniu platformy do przetwarzania płatności dla sklepów internetowych, od jej powstania do pierwszych klientów. Jestem absolwentem studiów inżynierskich i magisterskich Politechniki Poznańskiej Wydziału Informatyki i wieloletnim członkiem AKAI.",
            company: "Rvvup",
          },
        ],
        panel: "soft-skills",
      },
    ],
  },
  {
    title: "Zakończenie wydarzenia",
    hour: "17:00",
    location: "Sala CW1",
  },
];
