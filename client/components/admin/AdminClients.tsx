"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit2, X, Quote } from "lucide-react";

type Client = {
  id: string;
  name: string;
  company: string;
  testimonial: string;
};

const initialClients: Client[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    company: "GreenTech Industries",
    testimonial: "Ecoparadigm's NaturalSTP completely transformed our approach to wastewater. It operates with zero maintenance and has saved us significantly on electricity costs.",
  },
  {
    id: "2",
    name: "Anita Desai",
    company: "Prestige Developers",
    testimonial: "Their environmental auditing services are top-notch. They helped us achieve our sustainability goals well ahead of schedule with actionable insights.",
  },
];

export default function AdminClients() {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: "", company: "", testimonial: "" });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name || !newClient.testimonial) return;
    
    const client: Client = {
      id: Date.now().toString(),
      ...newClient,
    };
    
    setClients([client, ...clients]);
    setIsModalOpen(false);
    setNewClient({ name: "", company: "", testimonial: "" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Testimonials</h2>
          <p className="text-gray-500 text-sm mt-1">Add or remove client reviews and testimonials</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl border border-gray-100 p-6 relative group shadow-sm hover:shadow-md transition-shadow">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-green-500/10 rotate-180" />
            
            <p className="text-gray-600 italic text-sm mb-6 relative z-10 leading-relaxed">
              "{client.testimonial}"
            </p>
            
            <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{client.name}</h4>
                <p className="text-xs text-green-600 font-medium">{client.company}</p>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
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
      
      {clients.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500">No testimonials found. Add your first client review.</p>
        </div>
      )}

      {/* Add Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Add Testimonial</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                    <input
                      type="text"
                      required
                      value={newClient.name}
                      onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. Rajesh Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      required
                      value={newClient.company}
                      onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. GreenTech Industries"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Testimonial Quote</label>
                  <textarea
                    required
                    rows={4}
                    value={newClient.testimonial}
                    onChange={(e) => setNewClient({ ...newClient, testimonial: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Enter the client's review here..."
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                  >
                    Save Testimonial
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
