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
  { id: 9, name: "A4 Paper", slug: "a4-paper", description: "A4 paper maps", count: 20 },
  { id: 10, name: "A4 Book", slug: "a4-book", description: "A4 book format maps", count: 8 },
];
import bookImage from '@/assets/book.png'
import yangonImage from '@/assets/yangon.jpg'
import myanmarImage from '@/assets/myanmar.jpg'
import shweImage from '@/assets/shwe.jpg'

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
    categories: [{ id: 10, name: "A4 Book", slug: "a4-book" }],
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
    slug: "yangon-downtown-wall-map-vinyl",
    permalink: "/product/yangon-downtown-wall-map-vinyl",
    date_created: "2024-02-10",
    type: "variable",
    status: "publish",
    featured: true,
    description: "Large format wall map of Yangon's downtown area printed on premium weatherproof vinyl. Perfect for offices, businesses, and educational institutions.",
    short_description: "Premium vinyl wall map of downtown Yangon with detailed street names and landmarks.",
    sku: "YGN-DT-VINYL-001",
    price: "25000",
    regular_price: "50000",
    sale_price: "50000",
    on_sale: true,
    stock_status: "instock",
    categories: [{ id: 1, name: "Vinyl", slug: "vinyl" }],
    images: [{ id: 4, src: shweImage, alt: "Shwe Map - Premium Vinyl Print - Yangon Downtown Area with Landmarks and Street Names - High Quality Map for Office or Home" }],
    attributes: [
      { id: 1, name: "Size", options: ["A1 (594×841mm)", "A0 (841×1189mm)", "Custom (1500×2000mm)"] },
      { id: 2, name: "Finish", options: ["Matte", "Glossy", "Satin"] },
    ],
    average_rating: "4.9",
    rating_count: 89,
  },
  {
    id: 3,
    name: "Myanmar Administrative Regions Map",
    slug: "myanmar-administrative-regions",
    permalink: "/product/myanmar-administrative-regions",
    date_created: "2024-01-20",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Comprehensive map showing all states and regions of Myanmar with capital cities, major towns, and transportation networks.",
    short_description: "Complete administrative map of Myanmar's states and regions.",
    sku: "MM-ADMIN-001",
    price: "25000",
    regular_price: "25000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 2, name: "Paper", slug: "paper" }],
    images: [{ id: 5, src: "/placeholder.svg", alt: "Myanmar Administrative Map" }],
    attributes: [{ id: 1, name: "Size", options: ["A3", "A2", "A1"] }],
    average_rating: "4.7",
    rating_count: 56,
  },
  {
    id: 4,
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
    id: 5,
    name: "Yangon Transport Network Map",
    slug: "yangon-transport-network",
    permalink: "/product/yangon-transport-network",
    date_created: "2024-02-28",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Detailed public transportation map of Yangon including bus routes, circular train lines, ferry routes, and major taxi stands.",
    short_description: "Complete public transport map of Yangon city.",
    sku: "YGN-TRANS-001",
    price: "15000",
    regular_price: "15000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 9, name: "A4 Paper", slug: "a4-paper" }],
    images: [{ id: 7, src: "/placeholder.svg", alt: "Yangon Transport Map" }],
    attributes: [],
    average_rating: "4.6",
    rating_count: 78,
  },
  {
    id: 6,
    name: "Bagan Archaeological Zone Map Sticker",
    slug: "bagan-map-sticker",
    permalink: "/product/bagan-map-sticker",
    date_created: "2024-03-10",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Waterproof sticker featuring the Bagan archaeological zone with all major temples and pagodas marked. Perfect for travel journals and luggage.",
    short_description: "Collectible Bagan map sticker, waterproof and durable.",
    sku: "BGN-STICKER-001",
    price: "3500",
    regular_price: "3500",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 5, name: "Sticker", slug: "sticker" }],
    images: [{ id: 8, src: "/placeholder.svg", alt: "Bagan Sticker" }],
    attributes: [],
    average_rating: "4.8",
    rating_count: 145,
  },
  {
    id: 7,
    name: "Inle Lake Region Photopaper Print",
    slug: "inle-lake-photopaper",
    permalink: "/product/inle-lake-photopaper",
    date_created: "2024-02-15",
    type: "variable",
    status: "publish",
    featured: false,
    description: "High-resolution photopaper print of the Inle Lake region showing floating gardens, stilt villages, and surrounding mountains.",
    short_description: "Premium photopaper print of Inle Lake region.",
    sku: "INLE-PHOTO-001",
    price: "35000",
    regular_price: "35000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 3, name: "Photopaper", slug: "photopaper" }],
    images: [{ id: 9, src: "/placeholder.svg", alt: "Inle Lake Map" }],
    attributes: [{ id: 1, name: "Size", options: ["A4", "A3", "A2"] }],
    average_rating: "4.7",
    rating_count: 34,
  },
  {
    id: 8,
    name: "Myanmar Historical Trade Routes Map",
    slug: "myanmar-trade-routes",
    permalink: "/product/myanmar-trade-routes",
    date_created: "2024-01-25",
    type: "simple",
    status: "publish",
    featured: false,
    description: "Antique-style map showing historical trade routes through Myanmar including the Burma Road and ancient merchant paths.",
    short_description: "Historical trade routes map with vintage styling.",
    sku: "MM-HIST-001",
    price: "28000",
    regular_price: "28000",
    sale_price: "",
    on_sale: false,
    stock_status: "instock",
    categories: [{ id: 2, name: "Paper", slug: "paper" }],
    images: [{ id: 10, src: "/placeholder.svg", alt: "Trade Routes Map" }],
    attributes: [],
    average_rating: "4.9",
    rating_count: 67,
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

export const formatPrice = (price: string | number): string => {
  const numPrice = typeof price === 'string' ? parseInt(price) : price;
  return new Intl.NumberFormat('en-MM', {
    style: 'currency',
    currency: 'MMK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice).replace('MMK', 'K');
};
