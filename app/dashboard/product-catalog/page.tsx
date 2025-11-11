import MasterLayout from "@/app/master-layout";
import ProductCatalogTable from "./product-catalog-table";
import { ThemeButton } from "@/components/theme-button"; // Import component baru

export default function ProductCatalogPage() {
  return (
    <MasterLayout>
      <div className="ml-5 mt-3 mr-5">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
              <p className="text-gray-600 mt-1">Kelola produk dan katalog Anda</p>
            </div>
            <ThemeButton>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Tambah Produk</span>
            </ThemeButton>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-sm text-gray-600">Total Produk</div>
              <div className="text-2xl font-bold text-gray-900">24</div>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-sm text-gray-600">Produk Active</div>
              <div className="text-2xl font-bold text-gray-900">18</div>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-sm text-gray-600">Produk Bundle</div>
              <div className="text-2xl font-bold text-gray-900">8</div>
            </div>
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-sm text-gray-600">Produk Inactive</div>
              <div className="text-2xl font-bold text-gray-900">6</div>
            </div>
          </div>

          {/* Table */}
          <ProductCatalogTable />
        </div>
      </div>
    </MasterLayout>
  );
}
