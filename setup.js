const fs = require('fs');
const path = require('path');

// 定义项目文件结构和内容
const projectFiles = {
  // 1. package.json - 定义依赖
  'package.json': JSON.stringify({
    "name": "la-worldcup-guide",
    "type": "module",
    "version": "0.0.1",
    "scripts": {
      "dev": "astro dev",
      "start": "astro dev",
      "build": "astro build",
      "preview": "astro preview",
      "astro": "astro"
    },
    "dependencies": {
      "@astrojs/react": "^3.0.0",
      "@astrojs/tailwind": "^5.0.0",
      "astro": "^4.0.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "tailwindcss": "^3.3.0"
    }
  }, null, 2),

  // 2. astro.config.mjs - 配置文件
  'astro.config.mjs': `
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()]
});
  `,

  // 3. tailwind.config.mjs - 样式配置
  'tailwind.config.mjs': `
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
  `,

  // 4. public/robots.txt - SEO配置
  'public/robots.txt': `
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap-index.xml
  `,

  // 5. src/layouts/Layout.astro - 全局布局
  'src/layouts/Layout.astro': `
---
interface Props {
	title: string;
	description?: string;
}

const { title, description = "洛杉矶旅游指南 & 2026世界杯攻略 - 酒店、景点、安全建议" } = Astro.props;
---

<!doctype html>
<html lang="zh-CN" class="scroll-smooth">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content={description} />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title} | LA 2026 Guide</title>
        <!-- 谷歌广告 AdSense 代码位 (请替换 data-ad-client) -->
        <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
	</head>
	<body class="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <nav class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-blue-600 tracking-tight">🌴 LA Guide <span class="text-orange-500">2026</span></a>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/" class="hover:text-blue-500 font-medium text-slate-600">首页</a>
                        <a href="/hotels" class="hover:text-blue-500 font-medium text-slate-600">酒店住宿</a>
                        <a href="/worldcup" class="text-orange-600 font-bold hover:text-orange-500 bg-orange-50 px-3 py-1 rounded-full">⚽ 世界杯攻略</a>
                        <a href="/safety" class="hover:text-blue-500 font-medium text-slate-600">安全指南</a>
                    </div>
                </div>
            </div>
        </nav>

		<main class="flex-grow">
		    <slot />
        </main>

        <footer class="bg-slate-900 text-slate-300 mt-auto pt-12 pb-8">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">关于本站</h3>
                    <p class="text-sm text-slate-400">专注洛杉矶旅游攻略与2026美加墨世界杯观赛指南。为全球华人提供最实用的本地信息、酒店比价与安全建议。</p>
                </div>
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">快速导航</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/worldcup" class="hover:text-orange-400 transition">SoFi 体育场攻略</a></li>
                        <li><a href="/hotels" class="hover:text-blue-400 transition">特价酒店预订</a></li>
                        <li><a href="/safety" class="hover:text-red-400 transition">紧急求助电话</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">商务合作</h3>
                    <p class="text-sm text-slate-400 mb-2">广告投放与内容合作请联系：</p>
                    <a href="mailto:contact@example.com" class="text-blue-400 hover:underline">contact@example.com</a>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>本站包含联盟营销链接。通过本站链接预订，我们可能会获得佣金支持网站运营。</p>
                <p class="mt-2">&copy; 2024-2026 LA Travel Guide. All rights reserved.</p>
            </div>
        </footer>
	</body>
</html>
  `,

  // 6. src/pages/index.astro - 首页
  'src/pages/index.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="首页 - 洛杉矶旅游与世界杯指南">
    <!-- Hero Banner -->
    <div class="relative bg-gradient-to-r from-blue-900 to-indigo-900 h-[500px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span class="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400 text-orange-300 text-sm font-semibold mb-4 backdrop-blur-sm">🏆 备战 2026 美加墨世界杯</span>
            <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
                探索天使之城 <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">洛杉矶深度游指南</span>
            </h1>
            <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">无论是寻找 SoFi 体育场周边的最佳酒店，还是好莱坞环球影城的特惠门票，我们为您提供最本地化的建议。</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/worldcup" class="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                    <span>⚽</span> 世界杯观赛攻略
                </a>
                <a href="/hotels" class="px-8 py-4 bg-white hover:bg-gray-50 text-blue-900 font-bold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                    <span>🏨</span> 酒店比价预订
                </a>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
        <!-- 广告位 -->
        <div class="w-full h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-12 text-gray-400">
            Google AdSense 横幅广告位
        </div>

        <h2 class="text-3xl font-bold text-center mb-12 text-slate-800">热门旅游板块</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 住宿 -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">住宿推荐</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">从比佛利山庄的奢华酒店到性价比极高的汽车旅馆，找到最适合你的落脚点。</p>
                    <a href="/hotels" class="text-blue-600 font-semibold hover:underline flex items-center">查看推荐 <span class="ml-1">→</span></a>
                </div>
            </div>

            <!-- 景点 -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">景点门票</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">迪士尼、环球影城、格里菲斯天文台。提前预订官方折扣票，省钱免排队。</p>
                    <a href="https://www.klook.com" target="_blank" class="text-blue-600 font-semibold hover:underline flex items-center">购买门票 (Affiliate) <span class="ml-1">→</span></a>
                </div>
            </div>

            <!-- 安全 -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">安全指南</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">洛杉矶旅游安全吗？避开哪些危险区域？租车要注意什么？这里有防坑指南。</p>
                    <a href="/safety" class="text-blue-600 font-semibold hover:underline flex items-center">阅读指南 <span class="ml-1">→</span></a>
                </div>
            </div>
        </div>
    </div>
</Layout>
  `,

  // 7. src/pages/worldcup.astro - 世界杯页面
  'src/pages/worldcup.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="2026 世界杯洛杉矶观赛指南">
    <div class="bg-slate-900 text-white py-12 md:py-20">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">2026 美加墨世界杯 · 洛杉矶站</h1>
            <p class="text-xl text-slate-300">SoFi Stadium 观赛、住宿与交通终极指南</p>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- 左侧主要内容 -->
            <div class="lg:col-span-8 space-y-12">
                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">🏟️</span>
                        <h2 class="text-2xl font-bold text-slate-800">场馆介绍：SoFi Stadium</h2>
                    </div>
                    <img src="https://images.unsplash.com/photo-1626244421444-436f9cc9c426?auto=format&fit=crop&w=1000&q=80" class="w-full h-64 object-cover rounded-xl shadow-md mb-6" alt="SoFi Stadium">
                    <div class="prose prose-slate max-w-none text-gray-600">
                        <p>SoFi 体育场位于英格尔伍德（Inglewood），是世界上造价最昂贵的体育场之一。2026年世界杯期间，这里将承办多场小组赛及重要淘汰赛。</p>
                        <h3 class="text-lg font-bold text-slate-800 mt-4">交通攻略</h3>
                        <ul class="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>自驾：</strong> 停车费极贵且车位紧张，必须提前官网预约。</li>
                            <li><strong>Rideshare (Uber/Lyft)：</strong> 场馆设有专门的上下客区，但比赛结束后等待时间可能超过1小时。</li>
                            <li><strong>Shuttle Bus：</strong> 推荐方式。从 Hawthorne/Lennox 地铁站有免费穿梭巴士。</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">🛏️</span>
                        <h2 class="text-2xl font-bold text-slate-800">观赛住哪里？</h2>
                    </div>
                    
                    <div class="grid gap-6">
                        <!-- 酒店卡片 1 -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition shadow-sm">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-bold text-lg text-blue-900">LAX 机场区 (推荐)</h3>
                                    <p class="text-sm text-gray-500 mt-1">性价比最高，交通便利</p>
                                </div>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">高性价比</span>
                            </div>
                            <p class="text-gray-600 text-sm mt-3">距离球场仅15分钟车程，酒店选择多，且大部分提供机场接送。是普通球迷的首选。</p>
                            <a href="#" class="inline-block mt-4 text-orange-600 font-bold text-sm hover:underline">查看该区域酒店报价 &rarr;</a>
                        </div>

                         <!-- 酒店卡片 2 -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition shadow-sm">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-bold text-lg text-blue-900">Santa Monica 海滩区</h3>
                                    <p class="text-sm text-gray-500 mt-1">度假观赛两不误</p>
                                </div>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">体验好</span>
                            </div>
                            <p class="text-gray-600 text-sm mt-3">虽然距离球场较远（车程约40分钟），但环境优美，适合顺便旅游的朋友。房价较高。</p>
                            <a href="#" class="inline-block mt-4 text-orange-600 font-bold text-sm hover:underline">查看该区域酒店报价 &rarr;</a>
                        </div>
                    </div>
                </section>
            </div>

            <!-- 右侧侧边栏 -->
            <div class="lg:col-span-4 space-y-8">
                <!-- 广告位 -->
                <div class="bg-gray-100 h-[250px] flex items-center justify-center text-gray-400 rounded-lg border">
                    Square Ad (300x250)
                </div>

                <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 class="font-bold text-lg mb-3 text-orange-800">⚠️ 治安特别提醒</h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                        SoFi 体育场所在的 Inglewood 区域夜间治安一般。比赛结束后，建议：
                    </p>
                    <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
                        <li>不要独自步行离开主干道</li>
                        <li>尽量结伴而行</li>
                        <li>财不外露</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</Layout>
  `,

  // 8. src/pages/hotels.astro - 酒店推荐页
  'src/pages/hotels.astro': `
---
import Layout from '../layouts/Layout.astro';

// 模拟酒店数据 - 实际使用时替换为你的联盟链接
const hotels = [
    {
        name: "Sheraton Gateway Los Angeles",
        area: "LAX 机场区",
        price: "$180+",
        rating: "4.5",
        features: ["免费班车", "室外泳池", "隔音好"],
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-booking"
    },
    {
        name: "The Hollywood Roosevelt",
        area: "好莱坞",
        price: "$280+",
        rating: "4.7",
        features: ["历史地标", "星光大道旁", "复古风"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-expedia"
    },
    {
        name: "Freehand Los Angeles",
        area: "市中心 DTLA",
        price: "$120+",
        rating: "4.3",
        features: ["屋顶酒吧", "网红风格", "交通便利"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-booking"
    }
];
---

<Layout title="洛杉矶酒店推荐 - 安全与性价比指南">
    <div class="max-w-7xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-4">洛杉矶住宿指南 & 酒店推荐</h1>
        <p class="text-gray-600 mb-8 max-w-3xl">洛杉矶很大，选错区域可能会让你的假期都在堵车中度过。为了安全和便利，我们精选了以下高评分酒店（含2026世界杯推荐住宿）。</p>
        
        <!-- 过滤器 (UI展示) -->
        <div class="flex gap-4 mb-8 overflow-x-auto pb-2">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap">全部推荐</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">世界杯赛场周边</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">好莱坞/环球影城</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">圣塔莫尼卡海滩</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map(hotel => (
                <div class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                    <div class="relative h-48">
                        <img src={hotel.image} class="w-full h-full object-cover" alt={hotel.name}>
                        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold flex items-center">
                            ⭐ {hotel.rating}
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="mb-2">
                            <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">{hotel.area}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-slate-800">{hotel.name}</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            {hotel.features.map(f => (
                                <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{f}</span>
                            ))}
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="text-lg font-bold text-slate-800">{hotel.price}<span class="text-xs font-normal text-gray-500">/晚</span></span>
                            <a href={hotel.link} target="_blank" rel="nofollow sponsored" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition">
                                查看房价
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div class="mt-12 p-8 bg-blue-50 rounded-xl text-center">
            <h3 class="text-xl font-bold text-blue-900 mb-2">没找到喜欢的？</h3>
            <p class="text-blue-700 mb-4">搜索全网更多优惠酒店，支持 Booking.com 实时比价</p>
            <a href="#" class="inline-block px-8 py-3 bg-white border border-blue-200 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition">
                搜索更多洛杉矶酒店
            </a>
        </div>
    </div>
</Layout>
  `,
  
  // 9. src/pages/safety.astro - 安全建议页
  'src/pages/safety.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="洛杉矶旅游安全建议 - 避坑指南">
    <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8 text-red-600">洛杉矶旅游安全指南</h1>
        
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="lead">洛杉矶总体是一个安全的旅游城市，但由于城市规划和流浪汉问题，区域之间的治安差异巨大。这就是为什么这篇指南对你至关重要。</p>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h3 class="text-red-800 font-bold mt-0">🚫 绝对需要避开的区域 (Skid Row)</h3>
                <p class="mb-0">
                    请务必在地图上标记 <strong>Skid Row</strong>。这是位于市中心（DTLA）的一片区域，聚集了大量无家可归者帐篷。
                    <br>
                    <strong>范围：</strong> 大致在 E 3rd St 到 E 7th St，San Pedro St 到 Central Ave 之间。即使是白天也不建议步行前往。
                </p>
            </div>

            <h3>🚗 租车与停车安全</h3>
            <ul>
                <li><strong>砸窗盗窃：</strong> 这是洛杉矶最常见的针对游客的犯罪。</li>
                <li><strong>黄金法则：</strong> 离开车时，车内不要留下任何东西！连硬币、充电线、墨镜都不要留。</li>
                <li><strong>停车选择：</strong> 尽量停在有人管理的停车场或光线明亮的区域。</li>
            </ul>

            <h3>🌃 夜间出行建议</h3>
            <p>好莱坞星光大道（Hollywood Blvd）白天很热闹，但晚上相对杂乱。市中心（DTLA）入夜后人流稀少，建议使用 Uber/Lyft 点对点移动，不要为了省钱走夜路。</p>

            <h3>🚑 紧急求助电话</h3>
            <ul>
                <li><strong>紧急情况 (警察/救护车/火警)：</strong> 911</li>
                <li><strong>非紧急报警 (洛杉矶 LAPD)：</strong> 1-877-275-5273</li>
                <li><strong>中国驻洛杉矶总领馆：</strong> +1-213-807-8052</li>
            </ul>
        </div>
    </div>
</Layout>
  `
};

// 辅助函数：确保目录存在
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// 主逻辑：写入文件
console.log('🚀 开始生成洛杉矶旅游网站项目...');

for (const [filePath, content] of Object.entries(projectFiles)) {
  const fullPath = path.join(__dirname, filePath);
  
  // 确保目录存在
  ensureDirectoryExistence(fullPath);
  
  // 写入文件
  fs.writeFileSync(fullPath, content.trim());
  console.log(`✅ 已创建: ${filePath}`);
}

console.log('\n🎉 项目生成成功！接下来请执行以下命令：\n');
console.log('1. npm install    (安装依赖)');
console.log('2. npm run dev    (启动本地预览)');
console.log('3. npm run build  (构建发布版本)');
console.log('\n祝你的网站赚大钱！💰');