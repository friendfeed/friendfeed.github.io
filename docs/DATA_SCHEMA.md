# راهنمای افزودن داده کاربر

هر کاربر یک رکورد در `src/data/users.json` است. این فایل تنها منبع داده سایت
است؛ برای افزودن هر کاربر جدید، این ساختار را دنبال کنید.

## قوانین کلی

- هیچ فیلدی را حدس نزنید. اگر داده‌ای در آرشیو نبود، فیلد را کلاً حذف کنید
  (نه این‌که مقدار جعلی بگذارید).
- هر مچ با ایکس (X) باید یک `confidence` و یک `reasoning` داشته باشد.
  چهار سطح مجاز: `confirmed`, `probable`, `speculative`, `unverified`.
- اگر یک کاربر چند اسنپ‌شات آرشیوی دارد (مثلاً عکس پروفایل عوض شده یا از
  خصوصی به عمومی رفته)، همه را در آرایه `snapshots` قرار دهید، نه این‌که
  رکورد را بازنویسی کنید.

## نمونه کامل

```json
{
  "id": "yektaie",
  "username": "yektaie",
  "displayName": "نام نمایشی",
  "isHonoraryMember": false,
  "generalNotes": "یادداشت آزاد پژوهشی، اختیاری.",
  "snapshots": [
    {
      "capturedAt": "2008-11-03",
      "archiveUrl": "https://web.archive.org/web/2008.../http://friendfeed.com/yektaie",
      "isPrivate": false,
      "bio": "بیوگرافی دقیقاً همان‌طور که در صفحه آمده",
      "profileImageUrl": "https://web.archive.org/web/.../https://a.friendfeed.com/....jpg",
      "stats": {
        "commentsThisWeek": 10,
        "commentsAllTime": 50,
        "likesThisWeek": 5,
        "likesAllTime": 40
      },
      "followingCount": 20,
      "followersCount": 30,
      "links": [
        { "platform": "blog", "url": "http://example.blogspot.com" },
        { "platform": "twitter", "url": "http://twitter.com/yektaie" }
      ],
      "subscriptions": [
        { "displayName": "نیما نیلیان", "username": "nimanilian" }
      ],
      "subscribers": [
        { "displayName": "کسی دیگر" }
      ],
      "rooms": [
        { "name": "Iranian Bloggers", "url": "http://friendfeed.com/rooms/..." }
      ],
      "notes": "هر نکته خاص، مثلاً تغییر لوگو برای نوروز و باعث آن."
    }
  ],
  "xMatch": {
    "handle": "yektaie",
    "url": "https://x.com/yektaie",
    "confidence": "probable",
    "reasoning": "دلیل مشخص این‌که چرا این حساب همان فرد است.",
    "isLive": true,
    "snapshots": [
      {
        "capturedAt": "2009-09-01",
        "handle": "yektaie",
        "url": "https://x.com/yektaie",
        "bio": "بیو در آن تاریخ",
        "profileImageUrl": "..."
      }
    ]
  }
}
```

## فیلدهای `platform` مجاز برای لینک‌ها

`blog` | `twitter` | `facebook` | `lastfm` | `delicious` | `flickr` |
`youtube` | `vimeo` | `google-reader` | `picasa` | `digg` | `reddit` | `other`

## اعضای افتخاری غیرفارسی‌زبان

برای کاربرانی مثل Bill Mason که فارسی‌زبان نبودند ولی جامعه آن‌ها را عضو
می‌دانست، `isHonoraryMember: true` را تنظیم کنید و در `generalNotes` توضیح
دهید که چرا در این آرشیو جای گرفته‌اند.
