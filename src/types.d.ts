interface Product {
  name: string;
  id: string;
  slug: string;
  categ: string;
  variants: Record<string, string[]>[];
}

type ToastTypes = 'error' | 'success' | 'warning';
