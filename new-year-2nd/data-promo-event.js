// 每次顯示三品
// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：誘因

var dataCustomTimeArrays = [
  [
    // 左上
    new Date("2023/01/18 00:00"),
    new Date("2023/01/20 00:00"),
    new Date("2023/01/22 00:00"),
    new Date("2023/01/25 00:00"),
  ],
  [
    // 左中
    new Date("2023/01/18 00:00"),
    new Date("2023/01/20 09:00"),
    new Date("2023/01/24 00:00"),
    new Date("2023/01/30 00:00"),
    new Date("2023/02/01 00:00"),
  ],
  [
    // 右上
    new Date("2023/01/18 00:00"),
  ],
  [
    // 左下
    new Date("2023/01/18 00:00"),
    new Date("2023/01/21 00:00"),
    new Date("2023/01/25 00:00"),
  ],
  [
    // 右下
    new Date("2023/01/18 00:00"),
    new Date("2023/01/20 00:00"),
    new Date("2023/01/25 00:00"),
  ],
];

// 重覆輪播資料
var dataStaticPromoBox3 = [
  {
    dateStart: "2023/01/18 00:00:00",
    dateEnd: "2023/02/01 10:00:00",
    alt: "左下 4-2 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-2.png",
  },
  {
    dateStart: "2023/01/18 00:00:00",
    dateEnd: "2023/02/01 10:00:00",
    alt: "左下 4-3 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-3.png",
  },
  {
    dateStart: "2023/01/18 00:00:00",
    dateEnd: "2023/02/01 10:00:00",
    alt: "左下 4-4 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-4.png",
  },
];

var dataStaticItemBox1 = [
  {
    status: 'none',
    alt: "左下 4-1 1/21 ~ 1/24",
    link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
    imgSrc:
      "item-p-event-4-1.png",
  },
  {
    alt: "左下 4-2 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-2.png",
  },
  {
    alt: "左下 4-3 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-3.png",
  },
  {
    alt: "左下 4-4 1/18 ~ 2/1",
    link: "https://media.etmall.com.tw/sp/21184/m/index.html",
    imgSrc:
      "item-p-event-4-4.png",
  },
];

var dataStaticItemBox2 = [
  {
    alt: "右下 5-2 1/18 ~ 2/1",
    link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
    imgSrc:
      "item-p-event-5-2.png",
  },
  {
    alt: "右下 5-3 1/18 ~ 2/1",
    link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
    imgSrc:
      "item-p-event-5-3.png",
  },
];

// 主要是 li.swiper-slide.promo__item 這個元素要塞進去
// 左上：全家取件
var dataPromoBox1 = [
  // 1/18 ~ 1/19
  [
    {
      alt: "左上 1-1-1 1/18 ~ 1/19",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-1-1-1.png",
    },
  ],
  // 1/20 ~ 1/21
  [
    {
      alt: "左上 1-1-2 1/20 ~ 1/21",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-1-1-2.png",
    },
  ],
  // 1/22 ~ 1/24
  [
    {
      alt: "左上 1-1-3 1/22 ~ 1/24",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-1-1-3.png",
    },
  ],
  // 1/25 ~ 2/1
  [
    {
      alt: "左上 1-1-4 1/25 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-1-1-4.png",
    },
  ],
];

// 左中：不限金額
var dataPromoBox2 = [
  // 1/18 ~ 1/19
  [
    {
      alt: "左上 2-1-1 1/18 ~ 1/19",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-2-1-1.png",
    },
  ],
  // 1/20 ~ 1/23
  [
    {
      alt: "左上 2-1-2 1/20 ~ 1/23",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-2-1-2.png",
    },
  ],
  // 1/24 ~ 1/29
  [
    {
      alt: "左上 2-1-3 1/24 ~ 1/29",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-2-1-3.png",
    },
  ],
  // 1/30 ~ 1/31
  [
    {
      alt: "左上 2-1-4 1/30 ~ 1/31",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-2-1-4.png",
    },
  ],
  // 1/31 ~ 2/1
  [
    {
      alt: "左上 2-1-5 1/31 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-2-1-5.png",
    },
  ],
];

// 右上：會員專屬
var dataPromoBox3 = [
  // 1/18 ~ 2/1
  [
    {
      alt: "右上 3-1 1/18 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-3-1.png",
    },
    {
      alt: "右上 3-2 1/18 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-3-2.png",
    },
    {
      alt: "右上 3-3 1/18 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-3-3.png",
    },
    {
      alt: "右上 3-4 1/18 ~ 2/1",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-3-4.png",
    },
  ],
];

// 左下：訂單遊戲
var dataItemBox1 = [
  // 1/18 ~ 1/20
  [
    {
      alt: "左下 4-2 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-2.png",
    },
    {
      alt: "左下 4-3 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-3.png",
    },
    {
      alt: "左下 4-4 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-4.png",
    },
  ],

  // 1/21 ~ 1/24
  [
    {
      alt: "左下 4-1 1/21 ~ 1/24",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-4-1.png",
    },
    {
      alt: "左下 4-2 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-2.png",
    },
    {
      alt: "左下 4-3 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-3.png",
    },
    {
      alt: "左下 4-4 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-4.png",
    },
  ],

  // 1/25 ~ 2/1
  [
    {
      alt: "左下 4-2 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-2.png",
    },
    {
      alt: "左下 4-3 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-3.png",
    },
    {
      alt: "左下 4-4 1/18 ~ 2/1",
      link: "https://media.etmall.com.tw/sp/21184/m/index.html",
      imgSrc:
        "item-p-event-4-4.png",
    },
  ],
];

// 右下：指定商品
var dataItemBox2 = [
  // 1/18 ~ 1/20
  [...dataStaticItemBox2],

  // 1/21 ~ 1/24
  [
    {
      alt: "右下 5-1 1/21 ~ 1/24",
      link: "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      imgSrc:
        "item-p-event-5-1.png",
    },
    dataStaticItemBox2[0],
    dataStaticItemBox2[1],
  ],

  // 1/25 ~ 2/1
  [...dataStaticItemBox2],
];
