(function () {
  "use strict";

  const FALLBACK_CONTACTS = {
    phone: "+79672702110",
    phoneHref: "tel:+79672702110",
    whatsapp: "https://wa.me/79672702110",
    telegram: "https://t.me/dobro_eee",
    max: "https://max.ru/",
    behance: "https://www.behance.net/Dobro_eee",
    hh: "https://hh.ru/resume/72587d9fff1089df6c0039ed1f4456324e6a6a",
    requestPopup: "#popup:myformbesay",
    requestText: "Оставить заявку"
  };

  const FALLBACK_SETTINGS = {
    version: "1.0.0",
    defaultTheme: "dark",
    defaultMobileView: "about",
    defaultSection: "sites",
    showCertificates: true,
    sortSocialByFollowers: true
  };

  const FALLBACK_PORTFOLIO = {"filters":{"sections":[{"id":"sites","number":"01","title":"Сайты","subtitle":"Лендинги и веб"},{"id":"brandbooks","number":"02","title":"Брендбуки","subtitle":"Айдентика и системы"},{"id":"custom","number":"03","title":"Кастом","subtitle":"Блоки и логика"},{"id":"mailings","number":"04","title":"Рассылки","subtitle":"Email и digital"},{"id":"social","number":"05","title":"Социальные сети","subtitle":"VK"}],"types":{"sites":[{"id":"all","label":"Все"},{"id":"multi","label":"Многостраничный сайт"},{"id":"landing","label":"Лендинг"},{"id":"dashboard","label":"Дашборд"}],"brandbooks":[{"id":"all","label":"Все"},{"id":"brandbook","label":"Брендбук"}],"custom":[{"id":"all","label":"Все"},{"id":"calculator","label":"Калькуляторы"},{"id":"game","label":"Игровые интерфейсы"}],"mailings":[{"id":"all","label":"Все"},{"id":"email","label":"Email"}],"social":[{"id":"all","label":"Все"},{"id":"vk","label":"VK"}]},"areas":[{"id":"all","label":"Все"},{"id":"education","label":"Образование"},{"id":"event","label":"Событие"},{"id":"sport","label":"Спорт"},{"id":"it","label":"IT"},{"id":"igaming","label":"iGaming"},{"id":"music","label":"Музыка"},{"id":"beauty","label":"Косметология"}]},"items":[{"id":"patriot-gym","section":"sites","title":"Академия единоборств Patriot GYM в Москве","type":"landing","area":"sport","meta":["Лендинг","Спорт"],"image":"https://optim.tildacdn.com/tild3836-6134-4665-a466-633936353231/-/format/webp/photo.jpg.webp","url":"https://patriotgym.ru","target":"_blank","action":"Открыть сайт"},{"id":"sites-2","section":"sites","title":"Учебно-методический центр в области косметологии и эстетической медицины","type":"landing","area":"beauty","meta":["Лендинг","Косметология"],"image":"https://optim.tildacdn.com/tild3162-6261-4435-a166-626436353735/-/format/webp/photo.jpg.webp","url":"https://besay.ru/mesoreal","target":"_blank","action":"Открыть сайт"},{"id":"digital","section":"sites","title":"Конференция по digital-продуктам в сфере зообизнеса","type":"landing","area":"event,it","meta":["Лендинг","Событие","IT"],"image":"https://optim.tildacdn.com/tild6432-3135-4566-a561-623563383539/-/format/webp/_.jpg.webp","url":"https://besay.ru/animal-conference","target":"_blank","action":"Открыть сайт"},{"id":"sites-4","section":"sites","title":"Всероссийская олимпиада по педагогике для школьников","type":"multi","area":"education","meta":["Многостраничный сайт","Образование"],"image":"https://optim.tildacdn.com/tild3862-3066-4563-a534-643363303266/-/format/webp/photo.jpg.webp","url":"https://besay.ru/website-dev","target":"_blank","action":"Открыть сайт"},{"id":"sites-5","section":"sites","title":"Школа граффити при ЧПОУ МГОК","type":"landing","area":"education","meta":["Лендинг","Образование"],"image":"https://optim.tildacdn.com/tild3762-6565-4161-b035-616434363066/-/format/webp/_.jpg.webp","url":"https://dpo.open-college.ru/graffiti-school","target":"_blank","action":"Открыть сайт"},{"id":"sites-6","section":"sites","title":"Московский городской открытый колледж: календарь событий","type":"dashboard","area":"education,event","meta":["Дашборд","Образование","Событие"],"image":"https://optim.tildacdn.com/tild6630-3433-4437-b630-316535316163/-/format/webp/photo.jpg.webp","url":"https://dod.open-college.ru/events","target":"_blank","action":"Открыть сайт"},{"id":"sites-7","section":"sites","title":"Художественная академия — школа при МИП","type":"landing","area":"education","meta":["Лендинг","Образование"],"image":"https://optim.tildacdn.com/tild3934-3835-4630-b261-333436346330/-/format/webp/photo.jpg.webp","url":"https://dpo.open-college.ru/art-academy","target":"_blank","action":"Открыть сайт"},{"id":"sites-8","section":"sites","title":"Разработка компьютерных игр, дополненной и виртуальной реальности","type":"landing","area":"education,it","meta":["Лендинг","Образование","IT"],"image":"https://optim.tildacdn.com/tild6562-3531-4265-b436-636261333733/-/format/webp/photo.jpg.webp","url":"https://dpo.open-college.ru/developmentvr","target":"_blank","action":"Открыть сайт"},{"id":"sites-9","section":"sites","title":"Курс по авиамоделированию в Москве","type":"landing","area":"education","meta":["Лендинг","Образование"],"image":"https://optim.tildacdn.com/tild3237-3861-4234-b766-646132343730/-/format/webp/photo.jpg.webp","url":"https://dpo.open-college.ru/aircraft-modeling","target":"_blank","action":"Открыть сайт"},{"id":"sites-10","section":"sites","title":"Эксплуатация беспилотных авиационных систем","type":"landing","area":"education,it","meta":["Лендинг","Образование","IT"],"image":"https://optim.tildacdn.com/tild3466-3631-4135-a266-353832313537/-/format/webp/_.jpg.webp","url":"https://ocp.open-college.ru/ebas","target":"_blank","action":"Открыть сайт"},{"id":"brandbooks-1","section":"brandbooks","title":"Московский городской открытый колледж","type":"brandbook","area":"education","meta":["Среднее специальное образование"],"image":"https://optim.tildacdn.com/tild3765-3263-4532-a634-623931643138/-/format/webp/6_1.jpg.webp","url":"https://besay.ru/bb-mgok","target":"_blank","action":"Открыть брендбук"},{"id":"open-it-it","section":"brandbooks","title":"Open.IT — IT-сообщество и образовательная платформа","type":"brandbook","area":"it","meta":["IT"],"image":"https://static.tildacdn.com/tild3065-3732-4131-a262-383039363834/1.jpg","url":"https://besay.ru/bb-openit","target":"_blank","action":"Открыть брендбук"},{"id":"brandbooks-3","section":"brandbooks","title":"Центр профориентации — пространство выбора профессии и карьерного развития","type":"brandbook","area":"education","meta":["Дополнительное образование"],"image":"https://static.tildacdn.com/tild3961-6162-4336-b666-326162623435/d95e41cd-8f1d-435d-9.jpg","url":"https://besay.ru/bb-berufsberatung","target":"_blank","action":"Открыть брендбук"},{"id":"rusffx-bbxschool","section":"brandbooks","title":"Школа битбокса RUSFFX BBXSCHOOL — пространство развития навыков, самовыражения и творчества","type":"brandbook","area":"music,education","meta":["Музыка"],"image":"https://static.tildacdn.com/tild3063-6361-4030-a339-316366326336/641de086-7229-438b-b.png","url":"https://besay.ru/bb-bbxschool","target":"_blank","action":"Открыть брендбук"},{"id":"brandbooks-5","section":"brandbooks","title":"Кейс-чемпионат — пространство развития аналитического мышления, командной работы и практических навыков","type":"brandbook","area":"event","meta":["Хакатон"],"image":"https://static.tildacdn.com/tild3638-6233-4638-b566-376434333136/photo_2026-01-26_18-.jpg","url":"https://besay.ru/bb-case-championship","target":"_blank","action":"Открыть брендбук"},{"id":"custom-1","section":"custom","title":"Реферальная программа таксопарков","type":"calculator","area":"it","meta":["Калькулятор"],"image":"https://optim.tildacdn.com/tild6665-3535-4538-b633-356337393064/-/format/webp/photo.jpg.webp","url":"https://besay.ru/calculator-taxi","target":"_blank","action":"Открыть проект"},{"id":"custom-2","section":"custom","title":"Посчитай стоимость ремонта","type":"calculator","area":"it","meta":["Калькулятор"],"image":"https://optim.tildacdn.com/tild3731-3237-4138-b733-366630366235/-/format/webp/photo.jpg.webp","url":"https://besay.ru/calculator-repair","target":"_blank","action":"Открыть проект"},{"id":"counter-strike-2","section":"custom","title":"Турнирная сетка по Counter Strike 2","type":"game","area":"igaming","meta":["Турнирная сетка","Game"],"image":"https://optim.tildacdn.com/tild3064-6333-4136-b138-393663656366/-/format/webp/photo.jpg.webp","url":"https://besay.ru/tournament-grid-cs2","target":"_blank","action":"Открыть проект"},{"id":"mailings-1","section":"mailings","title":"Компания: Эстетик шоп","type":"email","area":"beauty","meta":["Косметология"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/estetik-shop.jpg?v=2","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/estetik-shop.jpg?v=2","popupTitle":"Компания: Эстетик шоп","action":"Смотреть"},{"id":"ardemi","section":"mailings","title":"Ardemi","type":"email","area":"beauty","meta":["Косметология"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/ardemi.jpg","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/ardemi.jpg","popupTitle":"Ardemi","action":"Смотреть"},{"id":"1-densol","section":"mailings","title":"1С:ТОИР Densol","type":"email","area":"education,it","meta":["Образование","CRM"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/desnol.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/desnol.jpg?v=1","popupTitle":"1С:ТОИР Densol","action":"Смотреть"},{"id":"mailings-4","section":"mailings","title":"АНО Судебно-экспертного центра «Специалист»","type":"email","area":"education","meta":["Образование"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/spesialist.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/spesialist.jpg?v=1","popupTitle":"АНО Судебно-экспертного центра «Специалист»","action":"Смотреть"},{"id":"mailings-5","section":"mailings","title":"Мгок: Приглашение","type":"email","area":"education","meta":["Образование"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/Levina-mgok.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/Levina-mgok.jpg?v=1","popupTitle":"Мгок: Приглашение","action":"Смотреть"},{"id":"mailings-6","section":"mailings","title":"МГОК: курс – \"Код будущего\"","type":"email","area":"education,it","meta":["Образование"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/curs-mgok.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/curs-mgok.jpg?v=1","popupTitle":"МГОК: курс – \"Код будущего\"","action":"Смотреть"},{"id":"rusffx","section":"mailings","title":"Школа битбокса Rusffx","type":"email","area":"music,education","meta":["Музыка","Образование"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/bbxschool-email.jpg?v=2","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/email-photos/bbxschool-email.jpg?v=2","popupTitle":"Школа битбокса Rusffx","action":"Смотреть"},{"id":"social-1","section":"social","title":"Приколы | Смеяка","type":"vk","area":"all","meta":["8,1M","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/smeyaka/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/smeyaka/banner.png?v=1","popupTitle":"Приколы | Смеяка","action":"Смотреть","socialType":"vk","followers":8100000,"socialLink":"https://vk.com/smeyaka"},{"id":"social-2","section":"social","title":"Грани юмора","type":"vk","area":"all","meta":["3,3 млн","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/grani-umora/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/grani-umora/banner.png?v=1","popupTitle":"Грани юмора","action":"Смотреть","socialType":"vk","followers":3300000,"socialLink":"https://vk.com/tophumor"},{"id":"social-3","section":"social","title":"Темная материя","type":"vk","area":"all","meta":["3,2M","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/temnaya-materia/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/temnaya-materia/banner.png?v=1","popupTitle":"Темная материя","action":"Смотреть","socialType":"vk","followers":3200000,"socialLink":"https://vk.com/da_side"},{"id":"social-4","section":"social","title":"МДК","type":"vk","area":"all","meta":["2,8M","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/mdk/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/mdk/banner.png?v=1","popupTitle":"МДК","action":"Смотреть","socialType":"vk","followers":2800000,"socialLink":"https://vk.com/mudachyo"},{"id":"social-5","section":"social","title":"Одри","type":"vk","area":"beauty","meta":["61 подписчик","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/odri/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/odri/banner.png?v=1","popupTitle":"Одри","action":"Смотреть","socialType":"vk","followers":61,"socialLink":"https://vk.com/odri_beauty_space"},{"id":"social-6","section":"social","title":"Маркетинг таксопарков","type":"vk","area":"it","meta":["ВК","ВК"],"image":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/taxopark-my/ava.jpg?v=1","popupImage":"https://raw.githubusercontent.com/dobroeee/Besay/main/social/taxopark-my/banner.png?v=1","popupTitle":"Маркетинг таксопарков","action":"Смотреть","socialType":"vk","followers":0,"socialLink":""}],"certificates":[{"title":"Супер Figma","description":"Онлайн-школа дизайна, компьютерной графики и современных технологий.","url":"https://cloudlessons.ru/v/500/","tags":["Figma","Videosmile"]},{"title":"Супер After Effects","description":"Онлайн-школа дизайна, компьютерной графики и современных технологий.","url":"https://cloudlessons.ru/v/410/","tags":["After Effects","Videosmile"]},{"title":"Курс по Adobe Photoshop — продвинутый уровень","description":"Практический курс по работе с графикой, обработке изображений и продвинутым инструментам Photoshop.","url":"https://stepik.org/course/106836/promo","tags":["Photoshop","Дмитрий Фокеев"]},{"title":"Веб дизайн в Figma — продвинутый уровень","description":"Продвинутый курс по веб-дизайну, интерфейсам, структуре макетов и работе в Figma.","url":"https://stepik.org/course/261291/promo","tags":["Figma","Дмитрий Фокеев"]},{"title":"Курс по Adobe Illustrator","description":"Курс по векторной графике, иллюстрациям, работе с формами, цветом и инструментами Illustrator.","url":"https://stepik.org/course/106825/promo","tags":["Illustrator","Дмитрий Фокеев"]},{"title":"Курс по Adobe After Effects","description":"Курс по моушен-дизайну, анимации, композиции и базовой работе с After Effects.","url":"https://stepik.org/course/177850/promo","tags":["After Effects","Дмитрий Фокеев"]},{"title":"Курс по созданию сайтов в Tilda","description":"Курс по сборке сайтов на Tilda, структуре страниц, блокам и подготовке проекта к запуску.","url":"https://stepik.org/course/183709/promo","tags":["Tilda","Дмитрий Фокеев"]}]};

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function splitValues(value) {
    return String(value || "").split(",").map(function (item) { return item.trim(); }).filter(Boolean);
  }

  function fetchJson(url, fallback) {
    if (!url) return Promise.resolve(fallback);
    return fetch(url, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("JSON load error: " + url);
        return response.json();
      })
      .catch(function () { return fallback; });
  }

  function contactClass(key) {
    return {
      phone: "rdbx-menu-social-phone",
      whatsapp: "rdbx-menu-social-whatsapp",
      telegram: "rdbx-menu-social-telegram",
      max: "rdbx-menu-social-max",
      behance: "rdbx-menu-social-behance",
      hh: "rdbx-menu-social-hh"
    }[key] || "";
  }

  function contactLabel(key) {
    return {
      phone: "Позвонить",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      max: "MAX",
      behance: "Behance",
      hh: "hh.ru"
    }[key] || key;
  }

  function renderContacts(root, contacts) {
    const wrap = root.querySelector("#rdbx-contacts-app");
    if (!wrap) return;

    const items = [
      ["phone", contacts.phoneHref || contacts.phone],
      ["whatsapp", contacts.whatsapp],
      ["telegram", contacts.telegram],
      ["max", contacts.max],
      ["behance", contacts.behance],
      ["hh", contacts.hh]
    ];

    wrap.innerHTML = items.filter(function (item) { return item[1]; }).map(function (item) {
      const key = item[0];
      const href = item[1];
      const content = key === "max" || key === "hh" ? "<strong aria-hidden=\"true\">" + key + "</strong>" : "<span aria-hidden=\"true\"></span>";
      return "<a class=\"rdbx-menu-social " + contactClass(key) + "\" href=\"" + esc(href) + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + esc(contactLabel(key)) + "\">" + content + "</a>";
    }).join("");

    const request = root.querySelector("#rdbx-request-app .rdbx-request-button");
    if (request) {
      request.setAttribute("href", contacts.requestPopup || "#popup:myformbesay");
      request.textContent = contacts.requestText || "Оставить заявку";
    }
  }

  function renderCertificates(root, portfolio) {
    const mount = root.querySelector("#rdbx-certificates-app");
    if (!mount) return;
    const certificates = portfolio.certificates || [];
    if (!certificates.length) return;

    function card(cert) {
      return "<a class=\"rdbx-cert-card-clean\" href=\"" + esc(cert.url) + "\" target=\"_blank\" rel=\"noopener\">" +
        "<div class=\"rdbx-cert-clean-tags\">" + (cert.tags || []).map(function (tag) { return "<span>" + esc(tag) + "</span>"; }).join("") + "</div>" +
        "<div class=\"rdbx-cert-clean-copy\"><h3>" + esc(cert.title) + "</h3><p>" + esc(cert.description) + "</p></div>" +
        "<div class=\"rdbx-cert-clean-link\">Открыть курс</div></a>";
    }

    const cards = certificates.map(card).join("");
    mount.innerHTML = "<div class=\"rdbx-cert-clean-marquee\" aria-label=\"Курсы и сертификаты\"><div class=\"rdbx-cert-clean-track\"><div class=\"rdbx-cert-clean-group\">" + cards + "</div><div class=\"rdbx-cert-clean-group\" aria-hidden=\"true\">" + cards + "</div></div></div>";
  }

  function cardClass(section) {
    return {
      sites: "rdbx-site-card",
      brandbooks: "rdbx-brandbook-card",
      custom: "rdbx-custom-card",
      mailings: "rdbx-mailing-card",
      social: "rdbx-social-card"
    }[section] || "rdbx-site-card";
  }

  function prefixClass(section) {
    return {
      sites: "rdbx-site",
      brandbooks: "rdbx-brandbook",
      custom: "rdbx-custom",
      mailings: "rdbx-mailing",
      social: "rdbx-social"
    }[section] || "rdbx-site";
  }

  function renderItem(item) {
    const section = item.section || "sites";
    const cls = cardClass(section);
    const p = prefixClass(section);
    const meta = (item.meta || []).map(function (tag) { return "<span>" + esc(tag) + "</span>"; }).join("");
    const image = item.image ? "<img src=\"" + esc(item.image) + "\" alt=\"" + esc(item.title) + "\">" : "";
    const inner = "<div class=\"" + p + "-info\"><div class=\"" + p + "-meta\">" + meta + "</div><h3>" + esc(item.title) + "</h3><div class=\"" + p + "-action\">" + esc(item.action || "Открыть") + "</div></div><div class=\"" + p + "-image\">" + image + "</div>";
    const data = " data-type=\"" + esc(item.type || "all") + "\" data-area=\"" + esc(item.area || "all") + "\"";

    if (section === "mailings" || section === "social") {
      const socialAttrs = section === "social" ? " data-social-type=\"" + esc(item.socialType || "vk") + "\" data-social-followers=\"" + esc(item.followers || 0) + "\" data-social-link=\"" + esc(item.socialLink || "") + "\"" : "";
      return "<button class=\"" + cls + "\" type=\"button\"" + data + socialAttrs + " data-popup-image=\"" + esc(item.popupImage || item.image || "") + "\" data-popup-title=\"" + esc(item.popupTitle || item.title) + "\">" + inner + "</button>";
    }

    return "<a class=\"" + cls + "\" href=\"" + esc(item.url || "#") + "\" target=\"_blank\" rel=\"noopener\"" + data + ">" + inner + "</a>";
  }

  function renderPortfolio(root, portfolio, settings) {
    const tabsMount = root.querySelector("#rdbx-section-tabs-app");
    const typeMount = root.querySelector("#rdbx-type-filters-app");
    const areaMount = root.querySelector("#rdbx-area-filter-app");
    const panelsMount = root.querySelector("#rdbx-portfolio-panels-app");
    if (!tabsMount || !typeMount || !areaMount || !panelsMount) return;

    const filters = portfolio.filters || {};
    const sections = (filters.sections || []).length ? filters.sections : [{ id: "sites", number: "01", title: "Сайты", subtitle: "Лендинги и веб" }];
    const defaultSection = settings.defaultSection || sections[0].id;

    tabsMount.innerHTML = sections.map(function (section) {
      const active = section.id === defaultSection ? " is-active" : "";
      return "<button class=\"rdbx-tab" + active + "\" type=\"button\" data-tab=\"" + esc(section.id) + "\"><span class=\"rdbx-tab-number\">" + esc(section.number) + "</span><span class=\"rdbx-tab-copy\"><span class=\"rdbx-tab-title\">" + esc(section.title) + "</span><span class=\"rdbx-tab-subtitle\">" + esc(section.subtitle) + "</span></span></button>";
    }).join("");

    typeMount.innerHTML = sections.map(function (section) {
      const active = section.id === defaultSection ? " is-active" : "";
      const hidden = section.id === defaultSection ? "" : " aria-hidden=\"true\"";
      const types = (filters.types && filters.types[section.id]) || [{ id: "all", label: "Все" }];
      return "<div class=\"rdbx-page-filter-extra" + active + "\" data-filter-owner=\"" + esc(section.id) + "\"" + hidden + "><div class=\"rdbx-filter-group\" data-filter-group=\"type\"><div class=\"rdbx-filter-title\">Тип проекта</div><div class=\"rdbx-filter-list\">" + types.map(function (type, index) { return "<button class=\"rdbx-filter" + (index === 0 ? " is-active" : "") + "\" type=\"button\" data-filter=\"" + esc(type.id) + "\">" + esc(type.label) + "</button>"; }).join("") + "</div></div></div>";
    }).join("");

    const areas = filters.areas || [{ id: "all", label: "Все" }];
    areaMount.innerHTML = "<div class=\"rdbx-filter-group rdbx-area-filter-group\" data-filter-group=\"area\"><div class=\"rdbx-filter-title\">Направление</div><div class=\"rdbx-filter-list\">" + areas.map(function (area, index) { return "<button class=\"rdbx-filter" + (index === 0 ? " is-active" : "") + "\" type=\"button\" data-filter=\"" + esc(area.id) + "\">" + esc(area.label) + "</button>"; }).join("") + "</div></div>";

    const items = (portfolio.items || []).slice();
    if (settings.sortSocialByFollowers) {
      items.sort(function (a, b) {
        if (a.section === "social" && b.section === "social") return Number(b.followers || 0) - Number(a.followers || 0);
        return 0;
      });
    }

    panelsMount.innerHTML = sections.map(function (section) {
      const gridClass = {
        sites: "rdbx-sites-grid",
        brandbooks: "rdbx-brandbooks-grid",
        custom: "rdbx-custom-grid",
        mailings: "rdbx-mailings-grid",
        social: "rdbx-socials-grid"
      }[section.id] || "rdbx-sites-grid";
      const active = section.id === defaultSection ? " is-active" : "";
      const cards = items.filter(function (item) { return item.section === section.id; }).map(renderItem).join("");
      return "<section class=\"rdbx-panel" + active + "\" data-panel=\"" + esc(section.id) + "\"><div class=\"" + gridClass.replace('-grid','') + "\"><div class=\"" + gridClass + "\">" + cards + "</div></div></section>";
    }).join("");
  }

  function initInteractions(root, settings) {
    const contactsToggle = root.querySelector(".rdbx-contacts-toggle");
    if (contactsToggle) {
      contactsToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = root.classList.toggle("is-contacts-open");
        contactsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      document.addEventListener("click", function (event) {
        if (!root.contains(event.target)) return;
        if (event.target.closest(".rdbx-menu-socials") || event.target.closest(".rdbx-contacts-toggle")) return;
        root.classList.remove("is-contacts-open");
        contactsToggle.setAttribute("aria-expanded", "false");
      });
    }

    const themeSwitches = root.querySelectorAll(".rdbx-theme-switch");
    function setTheme(theme) {
      const isLight = theme === "light";
      root.setAttribute("data-theme", isLight ? "light" : "dark");
      themeSwitches.forEach(function (switcher) { switcher.setAttribute("aria-checked", isLight ? "true" : "false"); });
    }
    themeSwitches.forEach(function (switcher) {
      switcher.addEventListener("click", function () {
        setTheme((root.getAttribute("data-theme") || "dark") === "dark" ? "light" : "dark");
      });
    });
    setTheme(settings.defaultTheme || root.getAttribute("data-theme") || "dark");

    const mobileMainTabs = root.querySelectorAll(".rdbx-mobile-main-tab");
    function setMobileView(viewName) {
      const nextView = viewName === "portfolio" ? "portfolio" : "about";
      root.setAttribute("data-mobile-view", nextView);
      mobileMainTabs.forEach(function (button) {
        const isActive = button.getAttribute("data-mobile-view") === nextView;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }
    mobileMainTabs.forEach(function (button) { button.addEventListener("click", function () { setMobileView(button.getAttribute("data-mobile-view")); }); });
    setMobileView(settings.defaultMobileView || root.getAttribute("data-mobile-view") || "about");

    const activeSiteFilters = { type: "all", area: "all" };

    function updatePanelFilters(tabName) {
      root.querySelectorAll(".rdbx-page-filter-extra").forEach(function (block) {
        const isActive = block.getAttribute("data-filter-owner") === tabName;
        block.classList.toggle("is-active", isActive);
        block.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    }

    function applySiteFilters() {
      const activePanel = root.querySelector(".rdbx-panel.is-active");
      const cards = root.querySelectorAll(".rdbx-site-card, .rdbx-brandbook-card, .rdbx-custom-card, .rdbx-mailing-card, .rdbx-social-card");
      cards.forEach(function (card) {
        const isInActivePanel = !activePanel || activePanel.contains(card);
        if (!isInActivePanel) { card.classList.remove("is-hidden"); return; }
        const cardTypes = splitValues(card.getAttribute("data-type"));
        const cardAreas = splitValues(card.getAttribute("data-area"));
        const typeMatch = activeSiteFilters.type === "all" || cardTypes.indexOf(activeSiteFilters.type) !== -1;
        const areaMatch = activeSiteFilters.area === "all" || cardAreas.indexOf(activeSiteFilters.area) !== -1 || cardAreas.indexOf("all") !== -1;
        card.classList.toggle("is-hidden", !(typeMatch && areaMatch));
      });
    }

    function setTab(tabName) {
      updatePanelFilters(tabName);
      const activeTypeGroup = root.querySelector('.rdbx-page-filter-extra.is-active .rdbx-filter-group[data-filter-group="type"]');
      if (activeTypeGroup) {
        const activeTypeButton = activeTypeGroup.querySelector(".rdbx-filter.is-active") || activeTypeGroup.querySelector(".rdbx-filter");
        activeSiteFilters.type = activeTypeButton ? activeTypeButton.getAttribute("data-filter") : "all";
      }
      root.querySelectorAll(".rdbx-tab").forEach(function (tab) {
        const isActive = tab.getAttribute("data-tab") === tabName;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      root.querySelectorAll(".rdbx-panel").forEach(function (panel) {
        panel.classList.toggle("is-active", panel.getAttribute("data-panel") === tabName);
      });
      applySiteFilters();
    }

    root.querySelectorAll(".rdbx-tab").forEach(function (tab) {
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", function () { setTab(tab.getAttribute("data-tab")); });
    });

    root.querySelectorAll(".rdbx-filter").forEach(function (filter) {
      filter.addEventListener("click", function () {
        const group = filter.closest(".rdbx-filter-group");
        if (!group) return;
        const groupName = group.getAttribute("data-filter-group");
        activeSiteFilters[groupName] = filter.getAttribute("data-filter");
        group.querySelectorAll(".rdbx-filter").forEach(function (button) { button.classList.toggle("is-active", button === filter); });
        applySiteFilters();
      });
    });

    const activeTab = root.querySelector(".rdbx-tab.is-active");
    if (activeTab) setTab(activeTab.getAttribute("data-tab"));

    setupDashboardPopupZoom(root, {
      popup: ".rdbx-popup", image: ".rdbx-popup-image", wrap: ".rdbx-popup-image-wrap", close: ".rdbx-popup-close", backdrop: ".rdbx-popup-backdrop", zoomIn: ".rdbx-popup-zoom-in", zoomOut: ".rdbx-popup-zoom-out", zoomReset: ".rdbx-popup-zoom-reset", card: ".rdbx-mailing-card"
    });

    const socialPopupLink = root.querySelector(".rdbx-social-popup-link");
    setupDashboardPopupZoom(root, {
      popup: ".rdbx-social-popup", image: ".rdbx-social-popup-image", wrap: ".rdbx-social-popup-image-wrap", close: ".rdbx-social-popup-close", backdrop: ".rdbx-social-popup-backdrop", zoomIn: ".rdbx-social-zoom-in", zoomOut: ".rdbx-social-zoom-out", zoomReset: ".rdbx-social-zoom-reset", card: ".rdbx-social-card",
      beforeOpen: function (card) {
        if (!socialPopupLink || !card) return;
        const link = card.getAttribute("data-social-link");
        socialPopupLink.textContent = "Смотреть сообщество";
        if (link) { socialPopupLink.setAttribute("href", link); socialPopupLink.classList.remove("is-hidden"); }
        else { socialPopupLink.removeAttribute("href"); socialPopupLink.classList.add("is-hidden"); }
      }
    });
  }

  function setupDashboardPopupZoom(root, config) {
    const popupElement = root.querySelector(config.popup);
    const popupImage = root.querySelector(config.image);
    const popupImageWrap = root.querySelector(config.wrap);
    const popupClose = root.querySelector(config.close);
    const popupBackdrop = root.querySelector(config.backdrop);
    const zoomInButton = root.querySelector(config.zoomIn);
    const zoomOutButton = root.querySelector(config.zoomOut);
    const zoomResetButton = root.querySelector(config.zoomReset);
    let zoom = 1, panX = 0, panY = 0, dragging = false, dragStartX = 0, dragStartY = 0, startPanX = 0, startPanY = 0;
    const minZoom = 1, maxZoom = 2.4, zoomStep = 0.2;

    function clampPan() {
      if (!popupImageWrap || zoom <= 1) { panX = 0; panY = 0; return; }
      const rect = popupImageWrap.getBoundingClientRect();
      const maxPanX = (rect.width * (zoom - 1)) / 2;
      const maxPanY = (rect.height * (zoom - 1)) / 2;
      panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
      panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
    }
    function updateZoom() {
      if (!popupImage) return;
      clampPan();
      popupImage.style.transform = "translate3d(" + panX + "px, " + panY + "px, 0) scale(" + zoom + ")";
      if (popupImageWrap) popupImageWrap.classList.toggle("is-zoomed", zoom > 1);
      if (zoomResetButton) zoomResetButton.textContent = Math.round(zoom * 100) + "%";
    }
    function setZoom(nextZoom) { zoom = Math.max(minZoom, Math.min(maxZoom, nextZoom)); if (zoom === 1) { panX = 0; panY = 0; } updateZoom(); }
    function resetZoom() { zoom = 1; panX = 0; panY = 0; dragging = false; if (popupImageWrap) popupImageWrap.classList.remove("is-dragging"); updateZoom(); }
    function openPopup(imageSrc, title, card) {
      if (!popupElement) return;
      if (popupImage) { popupImage.setAttribute("src", imageSrc || ""); popupImage.setAttribute("alt", title || ""); }
      if (typeof config.beforeOpen === "function") config.beforeOpen(card);
      resetZoom(); popupElement.classList.add("is-open"); popupElement.setAttribute("aria-hidden", "false");
    }
    function closePopup() { if (!popupElement) return; popupElement.classList.remove("is-open"); popupElement.setAttribute("aria-hidden", "true"); resetZoom(); }
    root.querySelectorAll(config.card).forEach(function (card) { card.addEventListener("click", function () { openPopup(card.getAttribute("data-popup-image"), card.getAttribute("data-popup-title"), card); }); });
    if (zoomInButton) zoomInButton.addEventListener("click", function () { setZoom(zoom + zoomStep); });
    if (zoomOutButton) zoomOutButton.addEventListener("click", function () { setZoom(zoom - zoomStep); });
    if (zoomResetButton) zoomResetButton.addEventListener("click", resetZoom);
    if (popupImageWrap) {
      popupImageWrap.addEventListener("wheel", function (event) { if (!popupElement || !popupElement.classList.contains("is-open")) return; event.preventDefault(); setZoom(zoom + (event.deltaY < 0 ? zoomStep : -zoomStep)); }, { passive: false });
      popupImageWrap.addEventListener("pointerdown", function (event) { if (zoom <= 1) return; dragging = true; dragStartX = event.clientX; dragStartY = event.clientY; startPanX = panX; startPanY = panY; popupImageWrap.classList.add("is-dragging"); try { popupImageWrap.setPointerCapture(event.pointerId); } catch (error) {} });
      popupImageWrap.addEventListener("pointermove", function (event) { if (!dragging) return; panX = startPanX + (event.clientX - dragStartX); panY = startPanY + (event.clientY - dragStartY); updateZoom(); });
      function endDrag(event) { dragging = false; popupImageWrap.classList.remove("is-dragging"); try { popupImageWrap.releasePointerCapture(event.pointerId); } catch (error) {} }
      popupImageWrap.addEventListener("pointerup", endDrag);
      popupImageWrap.addEventListener("pointercancel", endDrag);
      popupImageWrap.addEventListener("dblclick", function () { setZoom(zoom > 1 ? 1 : 1.8); });
    }
    if (popupClose) popupClose.addEventListener("click", closePopup);
    if (popupBackdrop) popupBackdrop.addEventListener("click", closePopup);
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closePopup(); if (!popupElement || !popupElement.classList.contains("is-open")) return; if (event.key === "+" || event.key === "=") setZoom(zoom + zoomStep); if (event.key === "-") setZoom(zoom - zoomStep); if (event.key === "0") resetZoom(); });
  }

  ready(function () {
    const root = document.querySelector(".rdbx-scope");
    if (!root) return;
    Promise.all([
      fetchJson(root.getAttribute("data-contacts-json"), FALLBACK_CONTACTS),
      fetchJson(root.getAttribute("data-portfolio-json"), FALLBACK_PORTFOLIO),
      fetchJson(root.getAttribute("data-settings-json"), FALLBACK_SETTINGS)
    ]).then(function (result) {
      const contacts = result[0] || FALLBACK_CONTACTS;
      const portfolio = result[1] || FALLBACK_PORTFOLIO;
      const settings = result[2] || FALLBACK_SETTINGS;
      renderContacts(root, contacts);
      renderCertificates(root, portfolio);
      renderPortfolio(root, portfolio, settings);
      initInteractions(root, settings);
    });
  });
})();
