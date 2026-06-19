# Portfolio for GitHub Pages

Готовая структура для загрузки в репозиторий `besay`.

## Структура

```text
portfolio/
  index.html
  tilda-iframe-code.html
  assets/
    css/
      style.css
    js/
      script.js
  sections/
    about/
    sites/
    brandbooks/
    custom/
    mailings/
    social/
```

## Как подключить в Tilda

После загрузки папки `portfolio` в репозиторий и включения GitHub Pages вставить в Tilda T123 код из файла `portfolio/tilda-iframe-code.html`.

Если GitHub Pages отдаёт репозиторий с большой буквой в URL, замени `besay` на `Besay` в iframe.

Для обновления кэша меняй `?v=1` на `?v=2`, `?v=3` и так далее.


## Структура материалов

В каждом направлении есть своя папка `materials`:

```text
portfolio/sections/about/materials/
portfolio/sections/sites/materials/
portfolio/sections/brandbooks/materials/
portfolio/sections/custom/materials/
portfolio/sections/mailings/materials/
portfolio/sections/social/materials/
```

Внутри каждого направления:

```text
materials/
  images/      основные изображения
  previews/    превью карточек
  source/      исходники и дополнительные файлы
  documents/   PDF, презентации, документы
```

Папка `portfolio/assets/media/` оставлена для общих файлов: иконки, фоны, повторяющиеся изображения.
