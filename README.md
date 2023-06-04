## Vuefinder File Manager

![GitHub](https://img.shields.io/github/license/n1crack/vuefinder)
![npm](https://img.shields.io/npm/v/vuefinder)

[//]: # (![npm]&#40;https://img.shields.io/npm/dw/vuefinder&#41;)

![ezgif-1-b902690b76](https://user-images.githubusercontent.com/712404/193141338-8d5f726f-da1a-4825-b652-28e4007493db.gif)

### About
Vuefinder is a file manager component for Vue.js version 3

### Demo
[Live Demo](https://vuefinder.ozdemir.be/) [ [Source](https://github.com/n1crack/vuefinder.ozdemir.be) ]

### Installation


```bash
npm i vuefinder
```

JS entry point (it can be index.js or main.js)
```js
import { createApp } from 'vue'
import App from './App.vue'

import 'vuefinder/dist/style.css'
import VueFinder from 'vuefinder/dist/vuefinder'

const app = createApp(App)

app.use(VueFinder)

app.mount('#app')
 
```
Html
```html
...
<div>
    <vue-finder id='my_vuefinder' url="http://vuefinder-php.test"></vue-finder>
</div>
...
```

### Props

| Prop          |  Value  | Default | Description                            |
|---------------|:-------:|---------|:---------------------------------------|
| id            | string  | _null_  | required                               |
| url           | string  | _null_  | required - backend url                 |
| locale        | string  | en      | optional - default language code       |
| dark          | boolean | false   | optional - makes theme dark as default |
| max-file-size | string  | 10mb    | optional - client side max file upload |

### Features 
- Multi adapter/storage (see https://github.com/thephpleague/flysystem)
- File and folder operations
  - Create a new file 
  - Create a new folder 
  - Rename 
  - Delete 
  - Archive (zip)
  - Unarchive (unzip)
  - Text editing
  - Image Crop Tool
  - Upload / Download files
  - Search (deep based on current folder) 
- Nice UI
  - Context Menu
  - Breadcrumb links
  - Toolbar
  - File explorer
  - Status bar
  - Image thumbnails
  - Toast notifications
- Appearance
  - Multi language
  - Full Screen
  - View Modes: list, grid
  - Dark Mode
- Accessibility
  - Drag & drop support
  - Move items (to a folder or up one folder) with drag and drop
  - Mouse selection

### Backend
- PHP: [VueFinder Php Library](https://github.com/n1crack/vuefinder-php)

### Roadmap
- [ ] code refactoring (cleanup the duplications, make reusable components)
- [ ] restyle the modals
- [ ] add more languages (only en/tr/ru at the moment. PRs are welcomed.)
- [ ] copy/move to a folder (modal, treeview)
- [ ] transfer items between filesystem adapters
- [ ] show/hide components (toolbar/statusbar etc.)
- [ ] emit select event, with @select get selected files for online editors like tinymce/ckeditor
- [ ] drag&drop on folders at address bar
- [ ] update DragSelect plugin for using its dropzone support

### Dependencies
 - [Vue3](https://vuejs.org/)
 - [Cropperjs](https://github.com/fengyuanchen/cropperjs)  : JavaScript image cropper
 - [DragSelect](https://github.com/ThibaultJanBeyer/DragSelect/) : Selection utility
 - [Plupload](https://github.com/moxiecode/plupload) : Upload library
 - [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload) : lazy loading for thumbnails

### License
Copyright (c) 2018 Yusuf ÖZDEMİR, released under [the MIT license](licenses/LICENSE)
