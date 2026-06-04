"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, FolderGit2, Users, LayoutDashboard, LogOut, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import AdminBlogs from "@/components/admin/AdminBlogs";
import AdminProjects from "@/components/admin/AdminProjects";
import AdminClients from "@/components/admin/AdminClients";
import { supabase } from "@/utils/supabase";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("blogs");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    };
    checkAuth();
  }, [router]);

  if (!isClient) return null; // Prevent hydration errors

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
        <div className="p-6 border-b border-white/10 flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center">
            <img src="/logoWhite.png" alt="EcoParadigm Logo" className="h-9 w-auto object-contain object-left mb-1" />
            <p className="text-green-400 text-[11px] font-bold uppercase tracking-widest">Admin Portal</p>
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
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10 sticky top-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-green-600" />
            <h1 className="font-bold text-gray-900">EcoAdmin</h1>
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto mb-16 md:mb-0">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full pb-8"
          >
            {activeTab === "blogs" && <AdminBlogs />}
            {activeTab === "projects" && <AdminProjects />}
            {activeTab === "clients" && <AdminClients />}
          </motion.div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-around p-2 pb-safe">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 p-2 flex-1 rounded-lg transition-colors ${
                  isActive ? "text-green-600" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </main>
    </div>
  );
}
