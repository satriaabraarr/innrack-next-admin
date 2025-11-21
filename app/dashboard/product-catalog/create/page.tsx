import MasterLayout from "@/app/master-layout";
import ProductCatalogForm from "../product-catalog-form";

export default function CreateProductPage() {
  return (
    <MasterLayout>
      <div className="ml-5 mt-3 mr-5 mb-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tambah Produk Baru</h1>
              <p className="text-gray-600 mt-1">Isi form berikut untuk menambahkan produk baru ke katalog</p>
            </div>
          </div>

          {/* Form */}
          <ProductCatalogForm />
        </div>
      </div>
    </MasterLayout>
  );
}
