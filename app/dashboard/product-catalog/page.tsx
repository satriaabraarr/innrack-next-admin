import MasterLayout from "@/app/master-layout";
import ProductCatalogTable from "./product-catalog-table";
import { ThemeButton } from "@/components/theme-button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductCatalogPage() {
  return (
    <MasterLayout>
      <div className="ml-5 mt-3 mr-5 mb-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
              <p className="text-gray-600 mt-1">Kelola produk dan katalog Anda</p>
            </div>
            <Link href="/dashboard/product-catalog/create">
              <ThemeButton>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Tambah Produk</span>
              </ThemeButton>
            </Link>
          </div>

          {/* Stats Cards dengan shadcn/ui Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-sm py-3">
              <CardHeader className="pb-0 px-4"> 
                <CardTitle className="text-sm font-normal text-gray-600">Total Produk</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4">
                <div className="text-2xl font-bold text-gray-900 -mt-5">24</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm py-3">
              <CardHeader className="pb-0 px-4"> 
                <CardTitle className="text-sm font-normal text-gray-600">Produk Active</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4">
                <div className="text-2xl font-bold text-gray-900 -mt-5">18</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm py-3">
              <CardHeader className="pb-0 px-4"> 
                <CardTitle className="text-sm font-normal text-gray-600">Produk Bundle</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4">
                <div className="text-2xl font-bold text-gray-900 -mt-5">8</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm py-3">
              <CardHeader className="pb-0 px-4"> 
                <CardTitle className="text-sm font-normal text-gray-600">Produk Inactive</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4">
                <div className="text-2xl font-bold text-gray-900 -mt-5">6</div>
              </CardContent>
            </Card>
          </div>

          {/* Table */}
          <ProductCatalogTable />
        </div>
      </div>
    </MasterLayout>
  );
}
