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
          photo: 'assets/whole chicken.avif',
        },
        {
          id: 'fresh_02',
          name: 'وراك سوبر',
          price_per_kg: 105,
          description: 'وراك دجاج سوبر خاليه من الجلد و العظم والدهون الزائده.',
          photo: 'assets/super thighs.avif',
        },
        {
          id: 'fresh_03',
          name: 'أجنحة سوبر',
          price_per_kg: 95,
          description: 'أجنحة دجاج طازجة مقطعه مثالية للقلي والشوي.',
          photo: 'assets/super chicken wings.avif',
        },
        {
          id: 'fresh_04',
          name: 'دبابيس سوبر',
          price_per_kg: 110,
          description: 'دبابيس دجاج مفصلة وجاهزة للاستخدام.',
          photo: 'assets/super drumsticks.avif',
        },
        {
          id: 'fresh_05',
          name: 'صدور بالعظم',
          price_per_kg: 130,
          description: 'صدور دجاج بالعظم طازجة وغنية بالبروتين.',
          photo: 'assets/chicken breast.avif',
        },
        {
          id: 'fresh_06',
          name: 'وراك شعبي',
          price_per_kg: 90,
          description: 'وراك دجاج شعبي طازج بسعر اقتصادي.',
          photo: 'assets/regular chicken thighs.avif',
        },
        {
          id: 'fresh_07',
          name: 'أجنحة شعبي',
          price_per_kg: 85,
          description: 'أجنحة دجاج شعبي مناسبة للوجبات اليومية.',
          photo: 'assets/regular chicken wings.avif',
        },
        {
          id: 'fresh_08',
          name: 'دبابيس شعبي',
          price_per_kg: 100,
          description: 'دبابيس دجاج شعبي بسعر اقتصادي.',
          photo: 'assets/drumsticks.avif',
        },
        {
          id: 'fresh_09',
          name: 'حمام كداب',
          price_per_kg: 120,
          description: 'اوراك مخليه من العظم جاهزه للحشو',
          photo: 'assets/hmam kaddab.avif',
        },
        {
          id: 'fresh_10',
          name: 'بانيه',
          price_per_kg: 160,
          description: 'شرائح بانيه طازجة مناسبة للقلي السريع.',
          photo: 'assets/chicken panee.avif',
        },
        {
          id: 'fresh_11',
          name: 'شيش بانيه',
          price_per_kg: 165,
          description: 'صدور مخليه من العظم جاهزه للشوي',
          photo: 'assets/breast sheesh.avif',
        },
        {
          id: 'fresh_12',
          name: 'شيش وراك',
          price_per_kg: 145,
          description: 'شيش وراك دجاج طازج للشوي.',
          photo: 'assets/thigh sheesh.avif',
        },
        {
          id: 'fresh_13',
          name: 'كبدة وقوانص',
          price_per_kg: 90,
          description: 'كبدة وقوانص طازجة محضرة يوميًا.',
          photo: 'assets/liver and stomach.avif',
        },
        {
          id: 'fresh_14',
          name: 'كبدة صافي',
          price_per_kg: 110,
          description: 'كبدة دجاج صافي طازجة.',
          photo: 'assets/chicken liver.avif',
        },
        {
          id: 'fresh_15',
          name: 'قوانص',
          price_per_kg: 75,
          description: 'قوانص دجاج طازجة مناسبة للطهي.',
          photo: 'assets/chicken stomach.avif',
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
          photo: 'assets/kofta.avif',
        },
        {
          id: 'frozen_02',
          name: 'شاورما دجاج',
          price_per_kg: 150,
          description: 'شاورما دجاج متبلة ومجمدة.',
          photo: 'assets/shawarma.avif',
        },
        {
          id: 'frozen_03',
          name: 'برجر دجاج',
          price_per_kg: 135,
          description: 'برجر دجاج مجمد مناسب للسندوتشات.',
          photo: 'assets/regular burger.avif',
        },
        {
          id: 'frozen_04',
          name: 'سجق دجاج',
          price_per_kg: 140,
          description: 'سجق دجاج متبل وجاهز للطهي.',
          photo: 'assets/sausage.avif',
        },
        {
          id: 'frozen_05',
          name: 'برجر بريميوم',
          price_per_kg: 160,
          description: 'برجر دجاج بريميوم بجودة عالية محشو بالجبنه',
          photo: 'assets/premium burger.avif',
        },
        {
          id: 'frozen_06',
          name: 'شيش طاووق',
          price_per_kg: 155,
          description: 'شيش طاووق دجاج متبل وجاهز للشوي.',
          photo: 'assets/ready sheeesh.avif',
        },
        {
          id: 'frozen_07',
          name: 'ناجتس',
          price_per_kg: 130,
          description: 'ناجتس دجاج مقرمشة وسهلة التحضير.',
          photo: 'assets/nuggets.avif',
        },
        {
          id: 'frozen_08',
          name: 'مسحب',
          price_per_kg: 145,
          description: 'مسحب دجاج بدون عظم.',
          photo: 'assets/msa7ab.avif',
        },
        {
          id: 'frozen_09',
          name: 'كنتـاكي',
          price_per_kg: 150,
          description: 'قطع دجاج كنتاكي متبلة ومجمدة.',
          photo: 'assets/fried chicken.avif',
        },
        {
          id: 'frozen_10',
          name: 'تشكن وينجز',
          price_per_kg: 140,
          description: 'أجنحة دجاج متبلة مجمدة.',
          photo: 'assets/fried chicken wings.avif',
        },
        {
          id: 'frozen_11',
          name: 'إستربس دجاج',
          price_per_kg: 145,
          description: 'شرائح دجاج بانيه مجمدة.',
          photo: 'assets/chicken strips.avif',
        },
        {
          id: 'frozen_12',
          name: 'بوكس المختار',
          price_per_kg: 170,
          description: 'بوكس متنوع من أفضل منتجات الدجاج.',
          photo: 'assets/elmokhtar box.avif',
        },
      ],
    },
  ],
};
