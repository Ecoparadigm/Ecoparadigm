"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit2, X, MapPin } from "lucide-react";

type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  capacity: string;
};

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Eco Resort Wastewater Treatment",
    client: "Taj Hotels",
    location: "Kerala, India",
    capacity: "500 KLD",
  },
  {
    id: "2",
    title: "Urban Lake Restoration",
    client: "BBMP Bangalore",
    location: "Bangalore, India",
    capacity: "1.2 MLD",
  },
];

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", client: "", location: "", capacity: "" });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.client) return;
    
    const project: Project = {
      id: Date.now().toString(),
      ...newProject,
    };
    
    setProjects([project, ...projects]);
    setIsModalOpen(false);
    setNewProject({ title: "", client: "", location: "", capacity: "" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Projects</h2>
          <p className="text-gray-500 text-sm mt-1">Add or remove case studies and projects</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-32 bg-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-teal-50" />
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-white/90 text-blue-600 rounded-md hover:bg-white shadow-sm transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-1.5 bg-white/90 text-red-600 rounded-md hover:bg-white shadow-sm transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{project.title}</h3>
              <p className="text-sm text-green-600 font-medium mb-3">{project.client}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-50 pt-3 mt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <div className="font-medium bg-gray-50 px-2 py-0.5 rounded text-gray-700">
                  {project.capacity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {projects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500">No projects found. Add your first project.</p>
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
                <h3 className="text-lg font-bold text-gray-900">Add New Project</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. Zero-Liquid Discharge Plant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. ITC Limited"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      required
                      value={newProject.location}
                      onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. Mumbai, India"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                    <input
                      type="text"
                      value={newProject.capacity}
                      onChange={(e) => setNewProject({ ...newProject, capacity: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g. 500 KLD"
                    />
                  </div>
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
                    Save Project
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
