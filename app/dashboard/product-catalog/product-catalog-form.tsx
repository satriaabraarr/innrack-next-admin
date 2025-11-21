"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ThemeButton } from "@/components/theme-button";
import { ToggleSwitch } from "@/components/toggle-switch";

export default function ProductCatalogForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // State untuk form data
  const [formData, setFormData] = useState({
    item_id: "",
    nama: "",
    harga: "",
    is_bundle: false,
    is_active: true,
    image_path: ""
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      console.log('Form data:', formData);
      
      // Redirect back to product catalog after successful submission
      setTimeout(() => {
        router.push('/dashboard/product-catalog');
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 space-y-6">
        {/* Basic Information Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informasi Dasar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item ID */}
            <div>
              <label htmlFor="item_id" className="block text-sm font-medium text-gray-700 mb-2">
                Item ID *
              </label>
              <input
                type="text"
                id="item_id"
                name="item_id"
                value={formData.item_id}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: ITEM-001"
              />
            </div>

            {/* Product Name */}
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Produk *
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan nama produk"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="harga" className="block text-sm font-medium text-gray-700 mb-2">
                Harga *
              </label>
              <input
                type="number"
                id="harga"
                name="harga"
                value={formData.harga}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Gambar Produk
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs mt-1">Upload</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Format: JPG, PNG, GIF. Maksimal 2MB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pengaturan</h2>
          <div className="space-y-4">
            {/* Bundle Toggle */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <label htmlFor="is_bundle" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Produk Bundle
                </label>
                <p className="text-sm text-gray-500">
                  Aktifkan jika produk ini merupakan bundle dari beberapa item
                </p>
              </div>
              <ToggleSwitch
                id="is_bundle"
                name="is_bundle"
                checked={formData.is_bundle}
                onChange={handleInputChange}
                color="blue"
              />
            </div>

            {/* Active Status Toggle */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <label htmlFor="is_active" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Status Aktif
                </label>
                <p className="text-sm text-gray-500">
                  Nonaktifkan untuk menyembunyikan produk dari katalog
                </p>
              </div>
              <ToggleSwitch
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleInputChange}
                color="green"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <ThemeButton
          type="button"
          variant="outline"
          onClick={() => router.push('/dashboard/product-catalog')}
          className="px-6 py-2"
        >
          Batal
        </ThemeButton>
        
        <ThemeButton
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Menyimpan...
            </span>
          ) : (
            'Simpan Produk'
          )}
        </ThemeButton>
      </div>
    </form>
  );
}
