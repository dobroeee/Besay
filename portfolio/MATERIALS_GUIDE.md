# Где хранить материалы

В каждом направлении есть папка `materials`:

```text
sections/
  about/materials/
  sites/materials/
  brandbooks/materials/
  custom/materials/
  mailings/materials/
  social/materials/
```

Внутри каждого направления:

```text
materials/
  images/      основные изображения
  previews/    превью для карточек
  source/      исходники, макеты, выгрузки
  documents/   PDF, документы, презентации
```

Пример ссылки на картинку из `index.html`:

```html
<img src="./sections/sites/materials/previews/project-name.webp" alt="">
```

Для общих файлов, которые относятся ко всему портфолио, использовать:

```text
assets/media/common/
assets/media/icons/
assets/media/backgrounds/
```
