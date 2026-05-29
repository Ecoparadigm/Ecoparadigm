"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit2, X, Quote, Loader2 } from "lucide-react";
import { supabase } from "@/utils/supabase";

type Client = {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  image_url?: string;
};

export default function AdminClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", testimonial: "", image_url: "" });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setClients(data);
    if (error) console.error("Error fetching testimonials:", error);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (!error) {
        setClients(clients.filter((c) => c.id !== id));
      } else {
        alert("Failed to delete testimonial");
      }
    }
  };

  const openEditModal = (client: Client) => {
    setEditingId(client.id);
    setFormData({
      name: client.name,
      company: client.company,
      testimonial: client.testimonial,
      image_url: client.image_url || "",
    });
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({ name: "", company: "", testimonial: "", image_url: "" });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.testimonial) return;
    
    setIsSaving(true);
    const clientData = {
      name: formData.name,
      company: formData.company || "Unknown Company",
      testimonial: formData.testimonial,
      image_url: formData.image_url || null,
    };
    
    if (editingId) {
      const { data, error } = await supabase.from("testimonials").update(clientData).eq("id", editingId).select();
      if (data && data.length > 0) {
        setClients(clients.map(c => c.id === editingId ? data[0] : c));
        setIsModalOpen(false);
      } else {
        console.error(error);
        alert("Failed to update testimonial");
      }
    } else {
      const { data, error } = await supabase.from("testimonials").insert([clientData]).select();
      if (data && data.length > 0) {
        setClients([data[0], ...clients]);
        setIsModalOpen(false);
      } else {
        console.error(error);
        alert("Failed to save testimonial");
      }
    }
    setIsSaving(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Testimonials</h2>
          <p className="text-gray-500 text-sm mt-1">Add or remove client reviews and testimonials</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
        </div>
      ) : clients.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500">No testimonials found. Add your first client review.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="bg-white rounded-xl border border-gray-100 p-6 relative group shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-green-500/10 rotate-180" />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <img 
                  src={client.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=16a34a&color=fff`} 
                  alt={client.name} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{client.name}</h4>
                  <p className="text-xs text-green-600 font-medium">{client.company}</p>
                </div>
              </div>

              <p className="text-gray-600 italic text-sm mb-6 relative z-10 leading-relaxed flex-1">
                "{client.testimonial}"
              </p>
              
              <div className="flex items-center justify-end border-t border-gray-50 pt-4 mt-auto">
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openEditModal(client)}
                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h3 className="text-lg font-bold text-gray-900">{editingId ? "Edit Testimonial" : "Add Testimonial"}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSaving}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. Rajesh Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. GreenTech Industries"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Image (Optional)</label>
                  <div className="flex items-center gap-4">
                    {formData.image_url ? (
                      <img src={formData.image_url} alt="Preview" className="w-16 h-16 object-cover rounded-full border border-gray-200" />
                    ) : (
                      <div className="w-16 h-16 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-xs text-gray-400 text-center">No image</div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          try {
                            const { compressImageToBase64 } = await import("@/utils/imageHelper");
                            // Compress smaller for avatars
                            const base64 = await compressImageToBase64(file, 200); 
                            setFormData({ ...formData, image_url: base64 });
                          } catch (err) {
                            console.error("Image compression failed", err);
                            alert("Failed to process image");
                          }
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Leave blank to automatically use initials.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Testimonial Quote</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.testimonial}
                    onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Enter the client's review here..."
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3 sticky bottom-0 bg-white py-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isSaving}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                    {editingId ? "Save Changes" : "Save Testimonial"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
