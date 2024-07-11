
        const ÉlfMonths = [
            "Eärendil (Měsíc hvězdného svitu)",
            "Nimrodel (Měsíc mlhy)",
            "Lothlórien (Měsíc květů)",
            "Nenya (Měsíc vody)",
            "Galdor (Letní měsíc)",
            "Lúthien (Měsíc bílých nocí)",
            "Mirrormere (Měsíc hudby)",
            "Mirkwood (Měsíc stínů)",
            "Calenardhon (Měsíc ohně)",
            "Ithilien (Měsíc stříbrného světla)",
            "Valinor (Měsíc padajících hvězd)",
            "Echad (Měsíc ozvěny)"
        ];

        const HobbitMonths = [
            "Thrimidge (Měsíc mrazu)",
            "Foreyule (Po svátku Yule)",
            "Solmath (Sluneční měsíc)",
            "Rethe (Měsíc výhonků)",
            "Astron (Měsíc výhonků)",
            "Thrimidge (Měsíc bohatství)",
            "Forelithe (Před letním měsícem)",
            "Afterlithe (Letní měsíc)",
            "Wedmath (Měsíc sklizně)",
            "Halimath (Měsíc hojnosti)",
            "Winterfilth (Podzimní měsíc)",
            "Blomath (Měsíc květů)"
        ];

        const DwarvishMonths = [
            "Zirakzigil (Kamenný měsíc)",
            "Barazinbar (Červený železný měsíc)",
            "Durinův den (Duha měsíc)",
            "Azanulbizar (Měsíc bitvy)",
            "Khazad-dûm (Trpasličí měsíc)",
            "Khazad-dûm (Horský měsíc)",
            "Orocarni (Ohnivý měsíc)",
            "Azanulbizar (Kopečný měsíc)",
            "Moria (Temný měsíc)",
            "Nogrod (Kladivový měsíc)",
            "Orocarni (Měsíc brzkého měsíce)",
            "Dar Aule (Strašidelný měsíc)"
        ];

        const RohirricMonths = [
            "Theodred (Měsíc sklizně)",
            "Thengel (Měsíc bohatství)",
            "Elfhelm (Slavnostní měsíc)",
            "Aldor (Měsíc ohnivého měsíce)",
            "Guthlaf (Měsíc výhonků)",
            "Aldor (Měsíc bohatství)",
            "Dunhere (Sluneční měsíc)",
            "Fastred (Měsíc granátového měsíce)",
            "Gárbeth (Letní měsíc)",
            "Garulf (Podzimní měsíc)",
            "Erkenbrand (Měsíc brzkého měsíce)",
            "Theoden (Měsíc padajícího měsíce)"
        ];

        const ValinoreanMonths = [
            "Blodrennin (Měsíc zmrzlého měsíce)",
            "Amroth (Po-měsíční měsíc)",
            "Estel (Sluneční měsíc)",
            "Aear (Probuzení měsíce)",
            "Rivendell (Měsíc výhonků)",
            "Thranduil (Letní měsíc)",
            "Feanor (Předběžný měsíc)",
            "Glorfindel (Měsíc středního léta)",
            "Vanyar (Měsíc úrody)",
            "Ulmo (Měsíc hojnosti)",
            "Mandos (Měsíc slunce)",
            "Elbereth (Měsíc květů)"
        ];
        const OrkMonths = [
            "Měsíc boje",
            "Měsíc válečných plánů",
            "Měsíc krvavých bitev",
            "Měsíc zkázy",
            "Měsíc ohnivých slavností",
            "Měsíc útrap",
            "Měsíc temné magie",
            "Měsíc železného útlaku",
            "Měsíc zkoušek",
            "Měsíc oslav porážky",
            "Měsíc nepřátel",
            "Měsíc pohřebů"
        ];

        const gregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const julianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const dwarvishDaysInMonth = [30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const rohirricDaysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const valinoreanDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const orcishDaysInMonth = [31, 38, 21, 20, 31, 34, 21, 31, 30, 31, 30, 31];

        let currentGregorianDate = new Date();
        let currentJulianDate = new Date(currentGregorianDate);
        let currentElfDate = new Date(currentGregorianDate);
        let currentHobbitDate = new Date(currentGregorianDate);
        let currentDwarvishDate = new Date(currentGregorianDate);
        let currentRohirricDate = new Date(currentGregorianDate);
        let currentValinoreanDate = new Date(currentGregorianDate);
        let currentOrcishDate = new Date(currentGregorianDate);

        // Function to retrieve stored dates from localStorage on page load
        function retrieveStoredDates() {
            const storedDates = JSON.parse(localStorage.getItem('calendarDates'));
            if (storedDates) {
               
                currentElfDate = new Date(storedDates.elfDate);
                currentHobbitDate = new Date(storedDates.hobbitDate);
                currentDwarvishDate = new Date(storedDates.dwarvishDate);
                currentRohirricDate = new Date(storedDates.rohirricDate);
                currentValinoreanDate = new Date(storedDates.valinoreanDate);
                currentOrcishDate  = new Date(storedDates.orcishDate);
            } else {
                // If no stored dates, set random initial day between 1 to 20
               
                currentElfDate.setDate(Math.floor(Math.random() * 20) + 1);
                currentHobbitDate.setDate(Math.floor(Math.random() * 20) + 1);
                currentDwarvishDate.setDate(Math.floor(Math.random() * 20) + 1);
                currentRohirricDate.setDate(Math.floor(Math.random() * 20) + 1);
                currentValinoreanDate.setDate(Math.floor(Math.random() * 20) + 1);
                currentOrcishDate.setDate(Math.floor(Math.random() * 20) + 1);
            }
        }

        // Function to update displayed dates and store them in localStorage
        function updateDates() {
           
            document.getElementById("elf-date").innerText = `Elfský kalendář: ${currentElfDate.getDate()} ${ÉlfMonths[currentElfDate.getMonth()]} ${currentElfDate.getFullYear()+2568}`;
            document.getElementById("hobbit-date").innerText = `Hobittí kalendář: ${currentHobbitDate.getDate()} ${HobbitMonths[currentHobbitDate.getMonth()]} ${currentHobbitDate.getFullYear()+245}`;
            document.getElementById("dwarvish-date").innerText = `Trpasličí kalendář: ${currentDwarvishDate.getDate()} ${DwarvishMonths[currentDwarvishDate.getMonth()]} ${currentDwarvishDate.getFullYear() + 1254}`;
            document.getElementById("rohirric-date").innerText = `Lidský kalendář: ${currentRohirricDate.getDate()} ${RohirricMonths[currentRohirricDate.getMonth()]} ${currentRohirricDate.getFullYear()+125}`;
            document.getElementById("valinorean-date").innerText = `Liliputi kalendář: ${currentValinoreanDate.getDate()} ${ValinoreanMonths[currentValinoreanDate.getMonth()]} ${currentValinoreanDate.getFullYear()-789}`;
            document.getElementById("orkish-date").innerText = `Orský kalendář: ${currentOrcishDate.getDate()} ${OrkMonths[currentOrcishDate.getMonth()]} ${currentValinoreanDate.getFullYear()-1457}`;

            // Store current dates in localStorage
            localStorage.setItem('calendarDates', JSON.stringify({
                gregorianDate: currentGregorianDate,
                julianDate: currentJulianDate,
                elfDate: currentElfDate,
                hobbitDate: currentHobbitDate,
                dwarvishDate: currentDwarvishDate,
                rohirricDate: currentRohirricDate,
                valinoreanDate: currentValinoreanDate,
                orcishDate: currentOrcishDate
            }));
        }

        function increaseDayForOrcDate() {
            const month = currentOrcishDate.getMonth();
            const year = currentOrcishDate.getFullYear();
            const maxDay = (month === 1 && isGregorianLeapYear(year)) ? 29 : OrkMonths[month];

            currentOrcishDate.setDate(currentOrcishDate.getDate() + 1);
            if (currentOrcishDate.getDate() > maxDay) {
                currentOrcishDate.setDate(1);
                currentOrcishDate.setMonth(month + 1);
                if (currentOrcishDate.getMonth() > 11) {
                    currentOrcishDate.setMonth(0);
                    currentOrcishDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDay() {
            increaseDayForGregorianDate();
            increaseDayForJulianDate();
            increaseDayForElfDate();
            increaseDayForHobbitDate();
            increaseDayForDwarvishDate();
            increaseDayForRohirricDate();
            increaseDayForValinoreanDate();
            increaseDayForOrcDate();
            updateDates();
        }
        function deleteLocalStorage() {
            localStorage.removeItem('calendarDates');
            window.location.reload();
        }
        function increaseDayForGregorianDate() {
            const month = currentGregorianDate.getMonth();
            const year = currentGregorianDate.getFullYear();
            const maxDay = (month === 1 && isGregorianLeapYear(year)) ? 29 : gregorianDaysInMonth[month];

            currentGregorianDate.setDate(currentGregorianDate.getDate() + 1);
            if (currentGregorianDate.getDate() > maxDay) {
                currentGregorianDate.setDate(1);
                currentGregorianDate.setMonth(month + 1);
                if (currentGregorianDate.getMonth() > 11) {
                    currentGregorianDate.setMonth(0);
                    currentGregorianDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForJulianDate() {
            const month = currentJulianDate.getMonth();
            const year = currentJulianDate.getFullYear();
            const maxDay = (month === 1 && isJulianLeapYear(year)) ? 29 : julianDaysInMonth[month];

            currentJulianDate.setDate(currentJulianDate.getDate() + 1);
            if (currentJulianDate.getDate() > maxDay) {
                currentJulianDate.setDate(1);
                currentJulianDate.setMonth(month + 1);
                if (currentJulianDate.getMonth() > 11) {
                    currentJulianDate.setMonth(0);
                    currentJulianDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForElfDate() {
            const month = currentElfDate.getMonth();
            const year = currentElfDate.getFullYear();
            const maxDay = (month === 1 && isGregorianLeapYear(year)) ? 29 : gregorianDaysInMonth[month];

            currentElfDate.setDate(currentElfDate.getDate() + 1);
            if (currentElfDate.getDate() > maxDay) {
                currentElfDate.setDate(1);
                currentElfDate.setMonth(month + 1);
                if (currentElfDate.getMonth() > 11) {
                    currentElfDate.setMonth(0);
                    currentElfDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForHobbitDate() {
            const month = currentHobbitDate.getMonth();
            const year = currentHobbitDate.getFullYear();
            const maxDay = (month === 1 && isJulianLeapYear(year)) ? 29 : julianDaysInMonth[month];

            currentHobbitDate.setDate(currentHobbitDate.getDate() + 1);
            if (currentHobbitDate.getDate() > maxDay) {
                currentHobbitDate.setDate(1);
                currentHobbitDate.setMonth(month + 1);
                if (currentHobbitDate.getMonth() > 11) {
                    currentHobbitDate.setMonth(0);
                    currentHobbitDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForDwarvishDate() {
            const month = currentDwarvishDate.getMonth();
            const year = currentDwarvishDate.getFullYear();
            const maxDay = (month === 1 && isGregorianLeapYear(year)) ? 29 : dwarvishDaysInMonth[month];

            currentDwarvishDate.setDate(currentDwarvishDate.getDate() + 1);
            if (currentDwarvishDate.getDate() > maxDay) {
                currentDwarvishDate.setDate(1);
                currentDwarvishDate.setMonth(month + 1);
                if (currentDwarvishDate.getMonth() > 11) {
                    currentDwarvishDate.setMonth(0);
                    currentDwarvishDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForRohirricDate() {
            const month = currentRohirricDate.getMonth();
            const year = currentRohirricDate.getFullYear();
            const maxDay = (month === 1 && isJulianLeapYear(year)) ? 29 : rohirricDaysInMonth[month];

            currentRohirricDate.setDate(currentRohirricDate.getDate() + 1);
            if (currentRohirricDate.getDate() > maxDay) {
                currentRohirricDate.setDate(1);
                currentRohirricDate.setMonth(month + 1);
                if (currentRohirricDate.getMonth() > 11) {
                    currentRohirricDate.setMonth(0);
                    currentRohirricDate.setFullYear(year + 1);
                }
            }
        }

        function increaseDayForValinoreanDate() {
            const month = currentValinoreanDate.getMonth();
            const year = currentValinoreanDate.getFullYear();
            const maxDay = (month === 1 && isGregorianLeapYear(year)) ? 29 : valinoreanDaysInMonth[month];

            currentValinoreanDate.setDate(currentValinoreanDate.getDate() + 1);
            if (currentValinoreanDate.getDate() > maxDay) {
                currentValinoreanDate.setDate(1);
                currentValinoreanDate.setMonth(month + 1);
                if (currentValinoreanDate.getMonth() > 11) {
                    currentValinoreanDate.setMonth(0);
                    currentValinoreanDate.setFullYear(year + 1);
                }
            }
        }
       


        // Call function to retrieve stored dates on page load
        retrieveStoredDates();

        // Initial update of dates on page load
        updateDates();
