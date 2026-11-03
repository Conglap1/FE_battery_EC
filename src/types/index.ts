/**
 * Core Domain & DTO Types matching Battery-EC Backend
 */

export interface ProductVariantDto {
  variantId: number;
  productId: number;
  productName: string;
  sku: string;
  barcode?: string;
  price: number;
  costPrice: number;
  warrantyMonths: number;
  isBundle: boolean;
  isActive: boolean;
}

export interface InventoryItemDto {
  variantId: number;
  sku: string;
  productName: string;
  quantityOnHand: number;
  quantityReserved: number;
  quantityAvailable: number;
  reorderLevel: number;
}

export interface WarrantyLookupDto {
  channel: 'Online' | 'POS' | 'Repair';
  referenceCode: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  warrantyMonths: number;
  activationDate?: string;
  expiryDate?: string;
  status: 'Còn bảo hành' | 'Hết hạn bảo hành' | 'Chờ giao hàng để kích hoạt' | 'Không bảo hành';
}

export interface PosCheckoutRequest {
  customerId?: number;
  customerPhone?: string;
  customerName?: string;
  items: Array<{
    variantId: number;
    quantity: number;
    unitPrice: number;
  }>;
  discountAmount: number;
  paymentMethod: 'Cash' | 'BankTransfer' | 'Card';
}
