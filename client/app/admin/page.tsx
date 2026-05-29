"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, FolderGit2, Users, LayoutDashboard, LogOut, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import AdminBlogs from "@/components/admin/AdminBlogs";
import AdminProjects from "@/components/admin/AdminProjects";
import AdminClients from "@/components/admin/AdminClients";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("blogs");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const auth = localStorage.getItem("adminAuth");
    if (!auth) {
      router.push("/admin/login");
    }
  }, [router]);

  if (!isClient) return null; // Prevent hydration errors

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const navItems = [
    { id: "blogs", label: "Blogs", icon: BookOpen },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "clients", label: "Testimonials", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#062f2f] to-[#031c1c] text-white flex flex-col hidden md:flex border-r border-white/5 shadow-xl z-10">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight">EcoParadigm</h1>
            <p className="text-green-400 text-xs font-medium uppercase tracking-wider">Admin Portal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <div className="px-3 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            Content Management
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm
                  ${isActive 
                    ? "bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.05)]" 
                    : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-green-400" : "text-gray-400"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors font-medium text-sm"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-green-600" />
            <h1 className="font-bold text-gray-900">Admin</h1>
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-600">
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {activeTab === "blogs" && <AdminBlogs />}
            {activeTab === "projects" && <AdminProjects />}
            {activeTab === "clients" && <AdminClients />}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
