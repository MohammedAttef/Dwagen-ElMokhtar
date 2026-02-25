export interface Product {
  id: string;
  name: string;
  price_per_kg: number;
  description: string;
  photo: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const PRODUCTS_DATA = {
  categories: [
    {
      id: 'fresh',
      name: 'قسم الفريش',
      products: [
        {
          id: 'fresh_01',
          name: 'فراخ حية',
          price_per_kg: 95,
          description: 'فراخ حية طازجة يتم تجهيزها يوميًا بأعلى معايير النظافة.',
          photo: 'assets/فراخ حية.webp',
        },
        {
          id: 'fresh_02',
          name: 'وراك سوبر',
          price_per_kg: 105,
          description: 'وراك دجاج سوبر خاليه من الجلد و العظم والدهون الزائده.',
          photo: 'assets/وراك سوبر.webp',
        },
        {
          id: 'fresh_03',
          name: 'اجنحه سوبر',
          price_per_kg: 95,
          description: 'أجنحة دجاج طازجة مقطعه مثالية للقلي والشوي.',
          photo: 'assets/اجنحه سوبر.webp',
        },
        {
          id: 'fresh_04',
          name: 'دبابيس سوبر',
          price_per_kg: 110,
          description: 'دبابيس دجاج مفصلة وجاهزة للاستخدام.',
          photo: 'assets/دبابيس سوبر.webp',
        },
        {
          id: 'fresh_05',
          name: 'صدور بالعظم',
          price_per_kg: 130,
          description: 'صدور دجاج بالعظم طازجة وغنية بالبروتين.',
          photo: 'assets/صدور بالعظم.webp',
        },
        {
          id: 'fresh_06',
          name: 'وراك شعبي',
          price_per_kg: 90,
          description: 'وراك دجاج شعبي طازج بسعر اقتصادي.',
          photo: 'assets/وراك شعبي.webp',
        },
        {
          id: 'fresh_07',
          name: 'اجنحه شعبي',
          price_per_kg: 85,
          description: 'أجنحة دجاج شعبي مناسبة للوجبات اليومية.',
          photo: 'assets/اجنحه شعبي.webp',
        },
        {
          id: 'fresh_08',
          name: 'دبابيس شعبي',
          price_per_kg: 100,
          description: 'دبابيس دجاج شعبي بسعر اقتصادي.',
          photo: 'assets/دبابيس شعبي.webp',
        },
        {
          id: 'fresh_09',
          name: 'حمام كداب',
          price_per_kg: 120,
          description: 'اوراك مخليه من العظم جاهزه للحشو',
          photo: 'assets/حمام كداب .webp',
        },
        {
          id: 'fresh_10',
          name: 'بانيه',
          price_per_kg: 160,
          description: 'شرائح بانيه طازجة مناسبة للقلي السريع.',
          photo: 'assets/بانيه.webp',
        },
        {
          id: 'fresh_11',
          name: 'شيش بانيه',
          price_per_kg: 165,
          description: 'صدور مخليه من العظم جاهزه للشوي',
          photo: 'assets/شيش بانيه.webp',
        },
        {
          id: 'fresh_12',
          name: 'شيش وراك',
          price_per_kg: 145,
          description: 'شيش وراك دجاج طازج للشوي.',
          photo: 'assets/شيش وراك.webp',
        },
        {
          id: 'fresh_13',
          name: 'كبدة وقوانص',
          price_per_kg: 90,
          description: 'كبدة وقوانص طازجة محضرة يوميًا.',
          photo: 'assets/كبدة وقوانص.webp',
        },
        {
          id: 'fresh_14',
          name: 'كبدة صافي',
          price_per_kg: 110,
          description: 'كبدة دجاج صافي طازجة.',
          photo: 'assets/كبدة صافي.webp',
        },
        {
          id: 'fresh_15',
          name: 'قوانص',
          price_per_kg: 75,
          description: 'قوانص دجاج طازجة مناسبة للطهي.',
          photo: 'assets/قوانص.webp',
        },
        {
          id: 'fresh_16',
          name: 'قلوب و كلاوي',
          price_per_kg: 75,
          description: 'قلوب و كلاوي طازجة مناسبة للطهي.',
          photo: 'assets/قلوب و كلاوي.png'  ,
        },
      ],
    },
    {
      id: 'frozen',
      name: 'قسم المجمدات والمصنعات',
      products: [
        {
          id: 'frozen_01',
          name: 'كفته دجاج',
          price_per_kg: 140,
          description: 'كفتة دجاج مجمدة جاهزة للطهي.',
          photo: 'assets/كفته دجاج.webp',
        },
        {
          id: 'frozen_02',
          name: 'شاورما دجاج',
          price_per_kg: 150,
          description: 'شاورما دجاج متبلة ومجمدة.',
          photo: 'assets/شاورما دجاج.webp',
        },
        {
          id: 'frozen_03',
          name: 'برجر دجاج',
          price_per_kg: 135,
          description: 'برجر دجاج مجمد مناسب للسندوتشات.',
          photo: 'assets/برجر دجاج.webp',
        },
        {
          id: 'frozen_04',
          name: 'سجق دجاج',
          price_per_kg: 140,
          description: 'سجق دجاج متبل وجاهز للطهي.',
          photo: 'assets/سجق دجاج.webp',
        },
        {
          id: 'frozen_05',
          name: 'برجر بريميوم',
          price_per_kg: 160,
          description: 'برجر دجاج بريميوم بجودة عالية محشو بالجبنه',
          photo: 'assets/برجر بريميوم.webp',
        },
        {
          id: 'frozen_06',
          name: 'شيش طاووق',
          price_per_kg: 155,
          description: 'شيش طاووق دجاج متبل وجاهز للشوي.',
          photo: 'assets/شيش طاووق.webp',
        },
        {
          id: 'frozen_07',
          name: 'ناجتس',
          price_per_kg: 130,
          description: 'ناجتس دجاج مقرمشة وسهلة التحضير.',
          photo: 'assets/ناجتس.webp',
        },
        {
          id: 'frozen_08',
          name: 'مسحب',
          price_per_kg: 145,
          description: 'مسحب دجاج بدون عظم.',
          photo: 'assets/مسحب.webp',
        },
        {
          id: 'frozen_09',
          name: 'كنتاكي',
          price_per_kg: 150,
          description: 'قطع دجاج كنتاكي متبلة ومجمدة.',
          photo: 'assets/كنتاكي.webp',
        },
        {
          id: 'frozen_10',
          name: 'تشكن وينجز',
          price_per_kg: 140,
          description: 'أجنحة دجاج متبلة مجمدة.',
          photo: 'assets/تشكن وينجز.webp',
        },
        {
          id: 'frozen_11',
          name: 'إستربس دجاج',
          price_per_kg: 145,
          description: 'شرائح دجاج بانيه مجمدة.',
          photo: 'assets/إستربس دجاج.webp',
        },
        {
          id: 'frozen_12',
          name: 'بوكس المختار',
          price_per_kg: 170,
          description: 'بوكس متنوع من أفضل منتجات الدجاج.',
          photo: 'assets/بوكس المختار.webp',
        },
      ],
    },
  ],
};
