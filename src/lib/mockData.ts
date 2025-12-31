// Mock WooCommerce-style product data for the Map Shop

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProductAttribute {
  id: number;
  name: string;
  options: string[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  type: string;
  status: string;
  featured: boolean;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: string;
  categories: ProductCategory[];
  images: ProductImage[];
  attributes: ProductAttribute[];
  average_rating: string;
  rating_count: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  { id: 1, name: "Vinyl", slug: "vinyl", description: "Durable vinyl map prints", count: 12 },
  { id: 2, name: "Paper", slug: "paper", description: "High-quality paper maps", count: 24 },
  { id: 3, name: "Photopaper", slug: "photopaper", description: "Premium photo paper prints", count: 8 },
  { id: 4, name: "Clear Sticker", slug: "clear-sticker", description: "Transparent sticker maps", count: 6 },
  { id: 5, name: "Sticker", slug: "sticker", description: "Adhesive map stickers", count: 10 },
  { id: 6, name: "Canvas", slug: "canvas", description: "Gallery-quality canvas maps", count: 5 },
  { id: 7, name: "A3 Prints", slug: "a3-prints", description: "A3 size map prints", count: 15 },
  { id: 8, name: "A3 Booklet", slug: "a3-booklet", description: "A3 booklet format maps", count: 4 },
  { id: 9, name: "Paper", slug: "a4-paper", description: "A4 paper maps", count: 20 },
  { id: 10, name: "Book", slug: "a4-book", description: "A4 book format maps", count: 8 },
];
import bookImage from '@/assets/book.png'
import yangonImage from '@/assets/yangon.jpg'
import myanmarImage from '@/assets/myanmar.jpg'
import shweImage from '@/assets/shwe.jpg'
import mandalayImage from '@/assets/mandalay.jpg'
import shanImage from '@/assets/shan.jpg'

export const products: Product[] = [
  {
    id: 1,
    name: "Township Map Book of Yangon City Development Committee",
    slug: "township-map-book-ycdc",
    permalink: "/product/township-map-book-ycdc",
    date_created: "2024-01-15",
    type: "variable",
    status: "publish",
    featured: true,
    description: `<p>The definitive Township Map Book covering all areas under the Yangon City Development Committee jurisdiction. This comprehensive atlas features:</p>
    <ul>
      <li>Detailed street-level maps of all 33 townships</li>
      <li>Updated ward boundaries and administrative divisions</li>
      <li>Key landmarks, government buildings, and public facilities</li>
      <li>Transportation routes and major infrastructure</li>
      <li>Index with over 5,000 searchable locations</li>
    </ul>
    <p>Ideal for urban planners, real estate professionals, delivery services, and anyone navigating Yangon with precision.</p>`,
    short_description: "Complete township-level mapping of Yangon's 34 administrative divisions with verified data and precision cartography.",
    sku: "YCDC-TMB-001",
    price: "27000",
    regular_price: "35000",
    sale_price: "27000",
    on_sale: true,
    stock_status: "instock",
    categories: [{ id: 10, name: "Book", slug: "a4-book" }],
    images: [
      { id: 1, src: bookImage, alt: "Township Map Book Cover" },
      { id: 2, src: "/placeholder.svg", alt: "Inside pages" },
      { id: 3, src: "/placeholder.svg", alt: "Index section" },
    ],
    attributes: [
      { id: 1, name: "Binding", options: ["Spiral Bound", "Perfect Bound", "Hardcover"] },
      { id: 2, name: "Language", options: ["Myanmar", "English", "Bilingual"] },
    ],
    average_rating: "4.8",
    rating_count: 127,
  },
  {
    id: 2,
    name: "ရွှေပြည်သာ စက်မှုဇုန် Soft Copy JPG",
    slug: "shwe-taung-soft-copy",
    permalink: "/product/shwe-taung-soft-copy",
    date_created: "2024-02-10",
    type: "variable",
    status: "publish",
    featured: true,
    description: "Large format wall map of Yangon's downtown area printed on premium weatherproof vinyl. Perfect for offices, businesses, and educational institutions.",
    short_description: "Premium vinyl wall map of downtown Yangon with detailed street names and landmarks.",
    sku: "YGN-DT-VINYL-001",
    price: "25000",
    regular_price: "50000",
    sale_price: "25000",
    on_sale: true,
    stock_status: "instock",
    categories: [{ id: 1, name: "Vinyl,PhotoPaper", slug: "vinyl" }],
    images: [{ id: 4, src: shweImage, alt: "Shwe Map - Premium Vinyl Print - Yangon Downtown Area with Landmarks and Street Names - High Quality Map for Office or Home" }],
    attributes: [
      { id: 1, name: "Size", options: ["A1 (594×841mm)", "A0 (841×1189mm)", "Custom (1500×2000mm)"] },
      { id: 2, name: "Finish", options: ["Matte", "Glossy", "Satin"] },
    ],
    average_rating: "4.9",
    rating_count: 89,
  },
 
  {
    id: 4,
    name: "မန္တလေးတိုင်းဒေသကြီး ဗီနိုင်း ၂ပေ ၃ပေ",
    slug: "mandalay-region-vinyl-map",
    permalink: "/product/mandalay-region-vinyl-map",
    date_created: "2024-01-20",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Comprehensive map showing all states and regions of Myanmar with capital cities, major towns, and transportation networks.",
    short_description: "Complete administrative map of Myanmar's states and regions.",
    sku: "MM-ADMIN-001",
    price: "78000",
    regular_price: "85000",
    sale_price: "78000",
    on_sale: true,
    stock_status: "instock",
    categories: [{ id: 2, name: "Vinyl,PhotoPaper", slug: "paper" }],
    images: [{ id: 5, src: mandalayImage, alt: "Myanmar Administrative Map" }],
    attributes: [{ id: 1, name: "Size", options: ["A3", "A2", "A1"] }],
    average_rating: "4.7",
    rating_count: 56,
  },
  {
    id: 5,
    name: "Myanmar Map (Myanmar Map Soft Copy PDF Print)",
    slug: "myanmar-soft-copy-pdf",
    permalink: "/product/myanmar-soft-copy-pdf",
    date_created: "2024-03-01",
    type: "simple",
    status: "publish",
    featured: true,
    description: "Digital PDF version of the complete Myanmar map. Perfect for printing or digital use.",
    short_description: "Digital PDF map of Myanmar for printing or digital use.",
    sku: "MM-PDF-001",
    price: "250000",
    regular_price: "300000",
    sale_price: "250000",
    on_sale: true,
    stock_status: "instock",
    categories: [{ id: 6, name: "Digital", slug: "digital" }],
    images: [{ id: 6, src: myanmarImage, alt: "Myanmar PDF Map" }],
    attributes: [
      { id: 1, name: "Format", options: ["PDF", "High Res PNG", "JPEG"] },
    ],
    average_rating: "5.0",
    rating_count: 23,
  },
  {
    id: 6,
    name: "ရှမ်းပြည်နယ်မြောက်ပိုင်း ဗီနိုင်း 3ပေ 4ပေ",
    slug: "shan-state-north-map",
    permalink: "/product/shan-state-north-map",
    date_created: "2024-02-28",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Detailed public transportation map of Yangon including bus routes, circular train lines, ferry routes, and major taxi stands.",
    short_description: "Complete public transport map of Yangon city.",
    sku: "YGN-TRANS-001",
    price: "156000",
    regular_price: "156000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 9, name: "Vinyl,PhotoPaper", slug: "a4-paper" }],
    images: [{ id: 7, src: shanImage, alt: "Shan State Map" }],
    attributes: [],
    average_rating: "4.6",
    rating_count: 78,
  },
  {
    id: 7,
    name: "Yangon Downtown Map vinyl 3' 4'",
    slug: "yangon-downtown-map-vinyl",
    permalink: "/product/yangon-downtown-map-vinyl",
    date_created: "2024-03-10",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Large format wall map of Yangon's downtown area printed on premium weatherproof vinyl. Perfect for offices, businesses, and educational institutions.",
    short_description: "Premium vinyl wall map of downtown Yangon with detailed street names and landmarks.",
    sku: "YGN-DT-VINYL-002",
    price: "156000",
    regular_price: "156000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 5, name: "Vinyl,PhotoPaper", slug: "vinyl" }],
    images: [{ id: 8, src: yangonImage, alt: "Yangon Downtown Map" }],
    attributes: [],
    average_rating: "4.8",
    rating_count: 145,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Khin Maung Oo",
    role: "Urban Planning Director",
    content: "The Township Map Book has become an indispensable tool in our office. The accuracy and detail are unmatched by any other publication.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "NGO Program Manager",
    content: "We use DPS maps for all our field operations. The custom map prints help our teams navigate remote areas with confidence.",
    rating: 5,
  },
  {
    id: 3,
    name: "U Than Htay",
    role: "Logistics Company Owner",
    content: "Fast shipping and exceptional quality. Our delivery drivers rely on these maps daily. Best investment for our business.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Travel Blogger",
    content: "The Bagan stickers are perfect for my travel journal! Beautiful quality and the details are incredible for such a small print.",
    rating: 5,
  },
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What types of maps do you offer?",
    answer: "We offer a wide variety of maps including vinyl wall maps, paper prints, photopaper prints, canvas maps, stickers, and digital PDF formats. Our collection covers Yangon city, Myanmar administrative regions, transportation networks, and specialized areas like industrial zones.",
    category: "Products"
  },
  {
    id: 2,
    question: "How accurate are your maps?",
    answer: "Our maps are created using the latest survey data and are regularly updated. We work with official sources including the Yangon City Development Committee and government survey departments to ensure accuracy. Most of our maps are updated annually.",
    category: "Quality"
  },
  {
    id: 3,
    question: "Do you offer custom map printing?",
    answer: "Yes, we offer custom map printing services. You can request specific areas, custom sizes, different materials, and even add your business information or branding. Contact us with your requirements for a quote.",
    category: "Customization"
  },
  {
    id: 4,
    question: "What materials are your maps printed on?",
    answer: "We use various materials depending on your needs: weatherproof vinyl for outdoor use, high-quality paper for indoor display, premium photopaper for detailed prints, canvas for gallery-quality presentation, and durable stickers for portable use.",
    category: "Materials"
  },
  {
    id: 5,
    question: "How long does shipping take?",
    answer: "Standard shipping within Yangon typically takes 2-3 business days. For other cities in Myanmar, delivery takes 5-7 business days. Express shipping options are available for urgent orders. International shipping is also available upon request.",
    category: "Shipping"
  },
  {
    id: 6,
    question: "Do you provide digital versions of your maps?",
    answer: "Yes, we offer digital versions in PDF, high-resolution PNG, and JPEG formats. Digital maps are perfect for presentations, websites, or printing on demand. Digital products are delivered instantly via email after purchase.",
    category: "Digital Products"
  },
];

export const formatPrice = (price: string | number): string => {
  const numPrice = typeof price === 'string' ? parseInt(price) : price;
  return new Intl.NumberFormat('en-MM', {
    style: 'currency',
    currency: 'MMK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice).replace('MMK', 'K');
};
