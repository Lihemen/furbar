interface Product {
  name: string;
  id: string;
  image: string;
  slug: string;
  category: string;
  price: number;
  variants: Record<string, string[]>[];
}

type ToastTypes = 'error' | 'success' | 'warning';

interface AppearanceController {
  opened: boolean;
  close: Function;
}
