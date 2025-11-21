"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ThemeBadge } from "@/components/theme-badge";
import Image from "next/image";

// Sample data sesuai dengan struktur database
const products = [
  {
    id: "1",
    item_id: "ITEM-001",
    image_path: "/images/product.png",
    nama: "Laptop Gaming High Performance",
    harga: 15000000,
    is_bundle: true,
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    update_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    item_id: "ITEM-002",
    image_path: "/images/product.png",
    nama: "Smartphone Flagship",
    harga: 5000000,
    is_bundle: false,
    is_active: true,
    created_at: "2024-01-16T14:20:00Z",
    update_at: "2024-01-16T14:20:00Z",
  },
  {
    id: "3",
    item_id: "ITEM-003",
    image_path: "/images/product.png",
    nama: "Wireless Headphone Premium",
    harga: 1200000,
    is_bundle: true,
    is_active: false,
    created_at: "2024-01-17T09:15:00Z",
    update_at: "2024-01-18T11:45:00Z",
  },
  {
    id: "4",
    item_id: "ITEM-004",
    image_path: "/images/product.png",
    nama: "Mechanical Keyboard RGB",
    harga: 800000,
    is_bundle: false,
    is_active: true,
    created_at: "2024-01-18T16:40:00Z",
    update_at: "2024-01-18T16:40:00Z",
  },
  {
    id: "5",
    item_id: "ITEM-005",
    image_path: "/images/product.png",
    nama: "Gaming Mouse Wireless",
    harga: 450000,
    is_bundle: true,
    is_active: true,
    created_at: "2024-01-19T13:25:00Z",
    update_at: "2024-01-19T13:25:00Z",
  },
];

export default function ProductCatalogTable() {
  
  // Format currency untuk Indonesia
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Fallback image jika image_path tidak ada
  const getImageSrc = (imagePath: string) => {
    if (imagePath && imagePath !== "/images/placeholder.jpg") {
      return imagePath;
    }
    return "/images/placeholder-product.jpg";
  };

  return (
    <div className="border rounded-lg bg-white p-2 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Gambar</TableHead>
            <TableHead>Nama Produk</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Bundle</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-gray-50">
              {/* Kolom Gambar */}
              <TableCell>
                <div className="w-12 h-12 relative rounded-md overflow-hidden border">
                  <Image
                    src={getImageSrc(product.image_path)}
                    alt={product.nama}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-product.jpg';
                    }}
                  />
                </div>
              </TableCell>
              
              {/* Kolom Nama */}
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium text-sm">{product.nama}</div>
                  <div className="text-xs text-gray-500">ID: {product.item_id}</div>
                </div>
              </TableCell>
              
              {/* Kolom Harga */}
              <TableCell>
                <div className="font-semibold text-sm">
                  {formatCurrency(product.harga)}
                </div>
              </TableCell>
              
              {/* Kolom Bundle - Pakai ThemeBadge */}
              <TableCell>
                <ThemeBadge 
                  variant="bundle"
                  status={product.is_bundle}
                >
                  {product.is_bundle ? "Bundle" : "Single"}
                </ThemeBadge>
              </TableCell>
              
              {/* Kolom Status Active - Pakai ThemeBadge */}
              <TableCell>
                <ThemeBadge 
                  variant="active"
                  status={product.is_active}
                >
                  {product.is_active ? "Active" : "Inactive"}
                </ThemeBadge>
              </TableCell>
              
              {/* Kolom Actions (tetap sama) */}
              <TableCell>
                <div className="flex space-x-1">
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-sm p-1 hover:bg-blue-50 rounded transition-colors"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button 
                    className="text-green-600 hover:text-green-800 text-sm p-1 hover:bg-green-50 rounded transition-colors"
                    title="View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-800 text-sm p-1 hover:bg-red-50 rounded transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}