"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit2, X, Loader2 } from "lucide-react";
import { supabase } from "@/utils/supabase";

type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image_url: string;
  content: string;
};

import RichTextEditor from "./RichTextEditor";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", slug: "", category: "", date: "", image_url: "", content: "" });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setBlogs(data);
    if (error) console.error("Error fetching blogs:", error);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (!error) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } else {
        alert("Failed to delete blog");
      }
    }
  };

  const openEditModal = (blog: Blog) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      date: blog.date,
      image_url: blog.image_url || "",
      content: blog.content || "",
    });
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({ title: "", slug: "", category: "", date: "", image_url: "", content: "" });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) return;
    
    setIsSaving(true);
    const blogData = {
      title: formData.title,
      slug: formData.slug,
      category: formData.category || "General",
      date: formData.date || new Date().toISOString().split("T")[0],
      image_url: formData.image_url || "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      content: formData.content || "",
    };
    
    if (editingId) {
      const { data, error } = await supabase.from("blogs").update(blogData).eq("id", editingId).select();
      if (data && data.length > 0) {
        setBlogs(blogs.map(b => b.id === editingId ? data[0] : b));
        setIsModalOpen(false);
      } else {
        console.error(error);
        alert("Failed to update blog");
      }
    } else {
      const { data, error } = await supabase.from("blogs").insert([blogData]).select();
      if (data && data.length > 0) {
        setBlogs([data[0], ...blogs]);
        setIsModalOpen(false);
      } else {
        console.error(error);
        alert("Failed to save blog");
      }
    }
    setIsSaving(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Blogs</h2>
          <p className="text-gray-500 text-sm mt-1">Add, edit, or remove blog posts</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Blog
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-900 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Slug</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Loader2 className="w-6 h-6 text-green-500 animate-spin mx-auto" />
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No blogs found. Add your first blog post.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                      {blog.image_url ? (
                        <img src={blog.image_url} alt="" className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 rounded-md bg-gray-100 flex-shrink-0"></div>
                      )}
                      <span className="line-clamp-1">{blog.title}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{blog.slug}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{blog.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => openEditModal(blog)}
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h3 className="text-lg font-bold text-gray-900">{editingId ? "Edit Blog" : "Add New Blog"}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isSaving}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. The Future of Natural Water Treatment"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => {
                      const formattedSlug = e.target.value
                        .toLowerCase()
                        .trimStart()
                        .replace(/[^a-z0-9-]/g, '-')
                        .replace(/-+/g, '-');
                      setFormData({ ...formData, slug: formattedSlug });
                    }}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. natural-water-treatment"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. Technology"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blog Image</label>
                  <div className="flex items-center gap-4">
                    {formData.image_url && (
                      <img src={formData.image_url} alt="Preview" className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          try {
                            const { compressImageToBase64 } = await import("@/utils/imageHelper");
                            const base64 = await compressImageToBase64(file);
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
                </div>

                <div className="flex-1 mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <RichTextEditor 
                    value={formData.content} 
                    onChange={(val) => setFormData({ ...formData, content: val })} 
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3 sticky bottom-0 bg-white py-2 z-10 border-t border-gray-100">
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
                    {editingId ? "Save Changes" : "Save Blog"}
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
