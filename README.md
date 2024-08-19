# Happy Birthday Tara

[English](#english) | [فارسی](#persian)

## English

### Project Description

This project is a beautiful birthday celebration page featuring a cake, heartfelt messages, and a romantic birthday playlist (music player). It's designed to make someone's special day even more memorable.

### Technologies Used

1. HTML
2. CSS
3. Vanilla JavaScript

### How to Use

1. Fork this repository
2. Go to your forked repository's settings
3. Navigate to Pages under the Code and automation section
4. Under Build and deployment, select 'Deploy from a branch' as the Source
5. Choose 'main' as the branch and '/ (root)' as the folder
6. Click Save
7. Your site will be published at `https://<your-username>.github.io/happy-birthday-tara/`

### Customization

#### Changing the Text Content

To modify the greeting texts and name within the page:

1. Open the `index.html` file
2. Locate and edit the following elements:
   - `<h1>`: Header text
   - `<h2>`, `<h3>`, `<h5>`: Birthday greetings below the cake
   - `<div id="happyText">`: Letter content (each paragraph inside a `<p>` tag)

#### Customizing the Playlist

To change the music tracks:

1. Open the `scripts/musicPlayer.js` file
2. Edit the `musics` variable. Here's an example:

```javascript
let musics = [
  {
    title: "Music Title",
    artist: "Artist Name",
    cover: "Path/To/Cover.jpg",
    audio: new Audio("Path/To/Audio.mp3")
  }
];
```
Created with love for Tara

## Persian {#persian}

### توضیحات پروژه

این پروژه یک صفحه جشن تولد زیبا با نمایش کیک، پیام‌های صمیمانه و یک لیست پخش تولد عاشقانه (پخش کننده موسیقی) است. این صفحه برای خاص‌تر کردن روز ویژه یک نفر طراحی شده است.

### تکنولوژی‌های استفاده شده

1. HTML
2. CSS
3. جاوااسکریپت خالص (Vanilla JavaScript)

### نحوه استفاده

1. مخزن را فورک (Fork) کنید
2. به تنظیمات مخزن فورک شده خود بروید
3. به بخش Pages در قسمت Code and automation بروید
4. در قسمت Build and deployment، گزینه 'Deploy from a branch' را به عنوان Source انتخاب کنید
5. شاخه 'main' و پوشه '/ (root)' را انتخاب کنید
6. روی Save کلیک کنید
7. سایت شما در آدرس `https://<نام-کاربری-شما>.github.io/happy-birthday-tara/` منتشر خواهد شد

### شخصی‌سازی

#### تغییر متن‌های صفحه

برای تغییر متن‌های تبریک و نام داخل صفحه:

1. فایل `index.html` را باز کنید
2. عناصر زیر را پیدا و ویرایش کنید:
   - `<h1>`: متن سرصفحه
   - `<h2>`، `<h3>`، `<h5>`: متن‌های تبریک تولد زیر کیک
   - `<div id="happyText">`: متن قسمت نامه (هر پاراگراف داخل یک تگ `<p>`)

#### شخصی‌سازی لیست پخش

برای تغییر آهنگ‌ها:

1. فایل `scripts/musicPlayer.js` را باز کنید
2. متغیر `musics` را ویرایش کنید. نمونه:

```javascript
let musics = [
  {
    title: "عنوان موسیقی",
    artist: "نام هنرمند",
    cover: "مسیر/به/تصویر.jpg",
    audio: new Audio("مسیر/به/فایل‌صوتی.mp3")
  }
];
```

نوشته شده با عشق برای تارا
