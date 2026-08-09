import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import { IconX, IconBluesky } from "../icons/Icons";

export const CafePraguePage: FC = () => {
  const pageUrl = "https://friendfeed.github.io/magazine/cafe-prague-tehran";
  const pageTitle = "کافه پراگ: پاتوق فرندفید";
  const shareText = encodeURIComponent(pageTitle + " " + pageUrl);
  const xShareUrl = `https://x.com/intent/tweet?text=${shareText}`;
  const bskyShareUrl = `https://bsky.app/intent/compose?text=${shareText}`;

  useSEO({
    path: "/magazine/cafe-prague-tehran",
    title: "کافه پراگ: پاتوق فرندفید | فرندفید فارسی",
    description:
      "روایتی از کافه‌ای در بلوار کشاورز تهران که خانهٔ جامعهٔ فرندفید ایران شد. جایی که فرندفیدی‌ها از سراسر دنیا برای نشستن کنار هم پیدایش می‌کردند.",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: pageTitle,
        inLanguage: "fa",
        image: "https://friendfeed.github.io/images/magazine/cafe-prague-last-night.webp",
        isPartOf: {
          "@type": "WebSite",
          name: "فرندفید فارسی | آرشیو",
          url: "https://friendfeed.github.io",
        },
      },
    ],
  });

  return (
    <article style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ marginBottom: 18 }}>
        <Link to="/magazine" className="ff-back-link">
          بازگشت به مجله
        </Link>
      </div>

      <h1 style={{ fontSize: 22, lineHeight: 1.5, margin: "0 0 6px" }}>{pageTitle}</h1>
      <p style={{ fontSize: 12.5, color: "var(--ff-muted-light)", margin: "0 0 22px" }}>
        روایتی از کافه‌ای در بلوار کشاورز که خانهٔ جامعهٔ فرندفید ایران شد
      </p>

      {/* Hero photo */}
      <figure style={{ margin: "0 0 28px" }}>
        <div
          style={{
            borderRadius: "var(--ff-radius)",
            overflow: "hidden",
            boxShadow: "var(--ff-card-shadow)",
          }}
        >
          <img
            src="/images/magazine/cafe-prague-last-night.webp"
            alt="آخرین شب کافه پراگ، دی‌ماه ۱۳۹۱ — عکس از امیر قره‌فشه"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <figcaption
          style={{
            marginTop: 8,
            fontSize: 11,
            color: "var(--ff-muted-light)",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          آخرین شب کافه پراگ، دی‌ماه ۱۳۹۱ — عکاسی: امیر قره‌فشه
        </figcaption>
      </figure>

      {/* Opening */}
      <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-text)" }}>
        آخرین شب، هیچ‌کس نمی‌خواست برود.
      </p>
      <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
        دی‌ماه ۱۳۹۱ بود، هوا سرد و کثیف با آن مه معمول زمستان تهران، و در طبقه‌ای از مجتمع تجاری
        سامان در بلوار کشاورز، آدم‌ها دور میزهای همیشگی‌شان نشسته بودند و از هم عکس می‌گرفتند؛ نه از
        قهوه، نه از کیک، از خودِ اتاق. انگار می‌خواستند جایی را که چند سال خانه‌شان بود در حافظه ذخیره
        کنند. آن شب، کافه پراگ برای آخرین‌بار درهایش را باز نگه داشت.
      </p>
      <p style={{ margin: "0 0 28px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
        چیزی که آن شب تمام شد، فقط یک کسب‌وکار کوچک نبود. برای خیلی‌ها، خانه‌ای بود که اتفاقاً آدرس
        داشت.
      </p>

      <hr style={{ border: "none", borderTop: "1px solid var(--ff-border)", margin: "0 0 28px" }} />

      {/* Section: Patogh */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>پاتوق، کلمه‌ای که ترجمه نمی‌شود</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          در فارسی کلمه‌ای هست که معادل دقیقش در زبان‌های دیگر پیدا نمی‌شود:{" "}
          <strong>پاتوق</strong>. نه صرفاً «جای موردعلاقه»، بلکه نقطه‌ای ثابت در نقشهٔ زندگی آدم؛
          جایی که برای رفتنش قرار نمی‌گذاری، چون می‌دانی رفقایت آنجا هستند. پاتوق در واقع همان چیزی
          است که در زبان‌های دیگر به آن «کامیونیتی» یا اجتماع می‌گویند، اما با بویی از صمیمیت و
          مکان: یک اجتماع که دور یک جای مشخص شکل گرفته باشد.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          <a
            href="https://fa.wikipedia.org/wiki/%DA%A9%D8%A7%D9%81%D9%87_%D9%BE%D8%B1%D8%A7%DA%AF_(%D8%AA%D9%87%D8%B1%D8%A7%D9%86)"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            ویکی‌پدیای فارسی
          </a>{" "}
          کافه پراگ را دقیقاً همین‌طور توصیف می‌کند: پاتوقی برای دانشجویان، فعالان و روشنفکران جوان
          تهران، که از تابستان ۱۳۸۸ تا دی‌ماه ۱۳۹۱ در مجتمع سامان، بلوار کشاورز، فعال بود. اما اگر از
          کسانی که آنجا بودند بپرسی، یک جواب تکرار می‌شود: پراگ پاتوق و کامیونیتی فرندفیدی‌ها بود.
        </p>
      </section>

      {/* Section: FriendFeed */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>فرندفید و یک کافه در بلوار کشاورز</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          فرندفید قبل از اینکه در ایران واقعاً جا بیفتد، جامعه‌ای ساخته بود از آدم‌هایی که همدیگر را
          فقط از پشت صفحه می‌شناختند. کافه پراگ جایی بود که این آدم‌ها برای اولین بار دور یک میز
          می‌نشستند، رو در رو.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          قرار قبلی هم نمی‌خواست. فرندفیدی بودی و می‌رفتی پراگ؟ تقریباً مطمئن بودی یکی آنجاست. گاهی
          یک نفر، گاهی یک میز پر، گاهی تمام طبقه. باریستاها فرندفیدی بودند. مشتری‌های ثابت فرندفیدی
          بودند. آدم‌هایی که برای اولین بار می‌آمدند هم اغلب از طریق فرندفید شنیده بودند. این دیگر یک
          شبکهٔ اجتماعی نبود که گاهی آفلاین شود. یک جامعه بود که یک آدرس فیزیکی پیدا کرده بود.
        </p>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          ایرانی‌هایی هم که خارج از کشور زندگی می‌کردند، وقتی به تهران برمی‌گشتند، پراگ در لیست اول
          کارهایشان بود. نه فقط برای قهوه‌اش، برای آدم‌هایی که مطمئن بودند آنجا پیدا می‌شوند. فرندفید
          این آدم‌ها را به هم وصل کرده بود. پراگ جایی بود که آن اتصال را می‌شد لمس کرد.
        </p>
      </section>

      {/* Section: Why Prague */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>چرا «پراگ»؟</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          انتخاب این اسم بی‌دلیل نبود. پراگ، برای نسلی از تهرانی‌ها، نماد قهوه‌خانه‌های ادبی قرن
          نوزدهم اروپای مرکزی بود؛ جایی که نویسنده‌ها ساعت‌ها پای یک فنجان قهوه می‌نشستند و حرف
          می‌زدند. کافه‌ای که این اسم را روی خودش گذاشت، آگاهانه داشت همان سنت را، هرچقدر هم شکننده،
          در تهران بازتولید می‌کرد. و فرندفیدی‌ها، بدون اینکه از قبل برنامه‌ریزی کرده باشند، آن سنت را
          زندگی کردند.
        </p>
        <p style={{ margin: "0 0 10px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          مشتری‌های قدیمی چند چیز را دربارهٔ این کافه بارها تعریف کرده‌اند:
        </p>
        <ul
          style={{
            margin: "0 0 12px",
            paddingRight: 20,
            fontSize: 13.5,
            lineHeight: 2.2,
            color: "var(--ff-muted)",
          }}
        >
          <li>
            یکی از اولین کافه‌های تهران بود که <strong>اینترنت رایگان</strong> داشت، در روزگاری که
            این هنوز استاندارد نبود.
          </li>
          <li>قهوه و کیک‌هایش را بسیاری از بهترین‌های شهر می‌دانستند.</li>
          <li>درآمد کافه میان کارکنان به شکلی عادلانه‌تر از اغلب جاهای دیگر تقسیم می‌شد.</li>
          <li>
            بچه‌های کار و خیابان اجازه داشتند بیایند تو و روی لپ‌تاپ مشتری‌ها کارتون تماشا کنند؛
            جزئیاتی که بارها به‌عنوان نشانهٔ شرافت کافه یاد شده.
          </li>
        </ul>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          جادی، وبلاگ‌نویس و برنامه‌نویس شناخته‌شدهٔ ایرانی، در سال ۱۳۹۰{" "}
          <a
            href="https://jadi.net/2011/10/%DA%A9%D8%A7%D9%81%D9%87-%D9%BE%D8%B1%D8%A7%DA%AF%D8%8C-%DA%A9%D8%A7%D9%81%D9%87-%D9%85%D8%AD%D8%A8%D9%88%D8%A8-%D9%85%D9%86/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            یادداشتی کوتاه
          </a>{" "}
          دربارهٔ جشن دومین سالگرد کافه پراگ نوشت: پرچم فلسطین که برای جشن آویزان کرده بودند، و بحث
          سیاسی کوچکی که دورش شکل گرفت. از همان جنس اتفاق‌های کوچکی که کافه را زنده نگه می‌داشت.
        </p>
      </section>

      {/* Section: Pressure */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>فشار روی کافه</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          در سال ۱۳۹۱، اداره اماکن رسماً از کافه‌ها خواست دوربین مداربسته نصب کنند؛ فیلم‌هایی که هر
          وقت نیروی انتظامی بخواهد باید در اختیارش قرار می‌گرفت. نه یک بازرسی، نه یک بازداشت، یک الزام
          اداری برای دسترسی تصویری دائمی به مشتری‌های یک کافه.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          مالکان کافه پراگ زیر بار این نرفتند.
        </p>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          یک مقالهٔ پژوهشی منتشرشده در{" "}
          <a
            href="https://www.researchgate.net/publication/333579007_Coffee_shop_Cafe_Public_Sphere_for_Further_Reflections_on_Social_Movements_Case_Study_Tehran_capital_of_Iran"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            ریسرچ‌گیت
          </a>{" "}
          کافه پراگ را دقیقاً در همین چارچوب قرار می‌دهد: کافه‌ای که از نصب دوربین سر باز زد و در نهایت
          خودش درهایش را بست.
        </p>
      </section>

      {/* Section: Last Day */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>روز آخر</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          کافه پراگ در <strong>دی‌ماه ۱۳۹۱</strong> درهایش را بست. اما بی‌صدا نرفت.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          مالکانش یادداشت خداحافظی‌ای در فیس‌بوک نوشتند که به‌سرعت دست‌به‌دست شد. نوشته بودند این
          روز را همیشه پیش‌بینی می‌کردند، و با آن‌که بستن کافه دردناک است، دلخوش‌اند به اینکه نگذاشتند
          چشم‌های شیشه‌ای برادر بزرگ هر لحظه از زندگی مشتری‌هایشان را ضبط کند.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          <a
            href="https://jadi.net/2013/01/rooze-akhare-prag/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            جادی در وبلاگش
          </a>{" "}
          خاطره‌ای از روزهای آخر نوشت: خانمی باردار از مشتری‌ها خواسته بود سیگار نکشند، و وقتی یکی
          گفته بود «حق همیشه با مشتری‌ست»، یکی از کارکنان جواب داده بود که حق چیزی مستقل است، نه
          چیزی که همیشه در اختیار کسی باشد که پول می‌دهد. جادی نوشت که به طرفداری‌اش از این کافه
          افتخار می‌کند، چون بچه‌های خیابان را راه می‌داد، چون درآمدش را عادلانه‌تر تقسیم می‌کرد، چون
          از اولین‌ها بود که اینترنت رایگان داشت، و چون شریف بود.
        </p>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          عکس‌های آن شب آخر، گرفته‌شده توسط عکاسی به‌نام امیر، در{" "}
          <a
            href="https://tribunezamaneh.com/archives/12350"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            تریبون زمانه
          </a>{" "}
          و{" "}
          <a
            href="https://www.flickr.com/photos/124494956@N04/15357797965"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            فلیکر
          </a>{" "}
          دست‌به‌دست شد. حجم غیرمعمولی از مستندسازی برای چیزی که روی کاغذ فقط تعطیلی یک کسب‌وکار
          کوچک بود. اما آدم‌هایی که آنجا بودند می‌دانستند چه چیزی دارد تمام می‌شود.
        </p>
      </section>

      {/* Section: Why so much written */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>چرا اینقدر دربارهٔ یک کافه نوشته شد؟</h2>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          داستان کافه پراگ از طریق تهران بیورو به مخاطب انگلیسی‌زبان رسید و بعد در{" "}
          <a
            href="https://slate.com/technology/2013/01/iran-faces-backlash-over-morality-police-spying-on-coffee-shops.html"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            اسلیت
          </a>{" "}
          و{" "}
          <a
            href="https://qz.com/1639063/nearly-550-restaurants-in-tehran-closed-for-breaking-islamic-principles"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            کوارتز
          </a>{" "}
          بازتاب پیدا کرد. یک وبلاگ‌نویس آمریکایی در خاطرهٔ سفرش به تهران{" "}
          <a
            href="https://www.heartmybackpack.com/blog/kafka-cigarettes-tehran/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            نوشت
          </a>{" "}
          که دوستِ محلی‌اش می‌خواست او را به بهترین کافهٔ شهر ببرد، اما نتوانست، چون یک سال پیش بسته
          شده بود. نوشت که همین از راه دوم شنیدنِ ماجرا هم دلش را شکسته بود.
        </p>
        <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          در{" "}
          <a
            href="http://shahrefarang.com/cafe-prague-tehran/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            شهرفرنگ
          </a>{" "}
          هم، گالری عکس‌های روز آخر کافه بحث راه انداخت: آدم‌هایی که هرگز پایشان به آنجا نرسیده بود
          نوشتند این عکس‌ها به‌تنهایی تکانشان داده. یک گزارش پژوهشی از{" "}
          <a
            href="https://www.bourseandbazaar.org/articles/2016/9/19/irans-cafe-culture-and-consumer-culture"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ff-link)" }}
          >
            بنیاد بورس اند بازار
          </a>{" "}
          تعطیلی پراگ را فقدانی واقعی برای زندگی فرهنگی و آکادمیک تهران توصیف کرد.
        </p>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          این حجم توجه تصادفی نیست. جامعه‌ای که آنجا جمع می‌شد واقعی بود و برای خیلی‌ها مهم. وقتی یک
          کافه این‌قدر آدم را به هم وصل کرده باشد، تعطیلی‌اش فقط بستن یک در نیست.
        </p>
      </section>

      {/* Section: After */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 15, margin: "0 0 10px" }}>بعد از پراگ: شیرینی‌فروشی پراگ</h2>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2, color: "var(--ff-muted)" }}>
          کافه پراگ رفت، اما همان فضا بعداً به شکل <strong>شیرینی‌فروشی پراگ</strong> دوباره باز شد.
          نه دیگر کافه، نه دیگر آن پاتوق و آن کامیونیتی. اما اسم ماند.
        </p>
      </section>

      {/* Closing */}
      <p
        style={{
          margin: "0 0 28px",
          fontSize: 13.5,
          lineHeight: 2,
          color: "var(--ff-text)",
          borderRight: "3px solid var(--ff-border)",
          paddingRight: 14,
        }}
      >
        آنچه در تمام این روایت‌ها مشترک است یک چیز است: کافه‌ای که فرندفیدی‌ها را از سراسر دنیا دور
        یک میز جمع می‌کرد، ترجیح داد خودش درهایش را ببندد، به‌جای اینکه اجازه بدهد یک دوربین تعیین
        کند چه چیزی داخلش اتفاق می‌افتد.
      </p>

      {/* Sources */}
      <details
        style={{
          marginBottom: 28,
          background: "var(--ff-panel)",
          border: "1px solid var(--ff-border)",
          borderRadius: "var(--ff-radius)",
          padding: "10px 14px",
        }}
      >
        <summary
          style={{
            cursor: "pointer",
            fontSize: 12.5,
            color: "var(--ff-muted)",
            userSelect: "none",
          }}
        >
          منابع
        </summary>
        <ul
          style={{
            margin: "10px 0 0",
            paddingRight: 18,
            fontSize: 12,
            lineHeight: 2.2,
            color: "var(--ff-muted)",
          }}
        >
          {[
            {
              href: "https://fa.wikipedia.org/wiki/%DA%A9%D8%A7%D9%81%D9%87_%D9%BE%D8%B1%D8%A7%DA%AF_(%D8%AA%D9%87%D8%B1%D8%A7%D9%86)",
              label: "ویکی‌پدیای فارسی: کافه پراگ (تهران)",
            },
            {
              href: "https://jadi.net/2011/10/%DA%A9%D8%A7%D9%81%D9%87-%D9%BE%D8%B1%D8%A7%DA%AF%D8%8C-%DA%A9%D8%A7%D9%81%D9%87-%D9%85%D8%AD%D8%A8%D9%88%D8%A8-%D9%85%D9%86/",
              label: "جادی: کافه پراگ، کافه محبوب من (۱۳۹۰)",
            },
            {
              href: "https://jadi.net/2013/01/rooze-akhare-prag/",
              label: "جادی: خداحافظی با کافه پراگ (۱۳۹۱)",
            },
            {
              href: "https://www.radiozamaneh.com/53017/",
              label: "امین بزرگیان: کافه‌ها و خنده‌ها؛ درسپاس از کافه پراگ، رادیو زمانه",
            },
            {
              href: "https://tribunezamaneh.com/archives/12350",
              label: "عکس‌های روز آخر کافه پراگ: تریبون زمانه",
            },
            {
              href: "http://shahrefarang.com/cafe-prague-tehran/",
              label: "شهرفرنگ: آخرین روز کافه پراگ تهران",
            },
            {
              href: "https://shahrefarang.com/en/last-day-of-cafe-prague-in-tehran/",
              label: "ShahreFarang (English): Last day of Café Prague in Tehran",
            },
            {
              href: "https://www.bartarinha.ir/fa/news/133703/",
              label: "برترین‌ها: عکس: آخرین روز کافه پراگ تهران",
            },
            {
              href: "https://www.flickr.com/photos/124494956@N04/15357797965",
              label: "فلیکر: The last day of Cafe Prague",
            },
            {
              href: "https://slate.com/technology/2013/01/iran-faces-backlash-over-morality-police-spying-on-coffee-shops.html",
              label: 'Slate: Iran Faces Backlash Over "Morality Police" Spying on Coffee Shops',
            },
            {
              href: "https://qz.com/1639063/nearly-550-restaurants-in-tehran-closed-for-breaking-islamic-principles",
              label: 'Quartz: Nearly 550 restaurants in Tehran closed for breaking "Islamic principles"',
            },
            {
              href: "https://www.heartmybackpack.com/blog/kafka-cigarettes-tehran/",
              label: "Heart My Backpack: Kafka and Cigarettes in Tehran",
            },
            {
              href: "https://www.bourseandbazaar.org/articles/2016/9/19/irans-cafe-culture-and-consumer-culture",
              label: "Bourse & Bazaar Foundation: What Iran's Café Culture Teaches Us About Its Consumer Culture",
            },
            {
              href: "https://www.aljazeera.com/news/2019/06/iran-shuts-547-restaurants-breaking-islamic-principles-190609061140096.html",
              label: "Al Jazeera: Iran shuts 547 restaurants for playing illegal music, debauchery",
            },
            {
              href: "https://www.globalsecurity.org/wmd/library/news/iran/2023/iran-230724-rferl01.htm",
              label: "GlobalSecurity.org / RFE-RL: Famed Tehran Cafe Closed Amid Reports of Hijab Infractions",
            },
            {
              href: "https://www.researchgate.net/publication/333579007_Coffee_shop_Cafe_Public_Sphere_for_Further_Reflections_on_Social_Movements_Case_Study_Tehran_capital_of_Iran",
              label: "ResearchGate: Coffee shop (Café), Public Sphere for Further Reflections on Social Movements: Case Study Tehran",
            },
          ].map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer" style={{ color: "var(--ff-link)" }}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Share row */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          padding: "18px 0",
          borderTop: "1px solid var(--ff-border)",
        }}
      >
        <a href={xShareUrl} target="_blank" rel="noreferrer" className="ff-btn ff-btn-sm ff-btn-ghost">
          <IconX width={13} height={13} />
          اشتراک در ایکس
        </a>
        <a
          href={bskyShareUrl}
          target="_blank"
          rel="noreferrer"
          className="ff-btn ff-btn-sm ff-btn-ghost"
        >
          <IconBluesky width={13} height={13} />
          اشتراک در بلواسکای
        </a>
        <Link to="/magazine" className="ff-btn ff-btn-sm ff-btn-ghost">
          سایر مطالب مجله
        </Link>
      </div>
    </article>
  );
};
