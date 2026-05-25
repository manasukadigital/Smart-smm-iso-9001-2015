import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentViewer from "./components/ContentViewer";
import { ModuleData } from "./data";

export default function App() {
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4F4F7] overflow-hidden font-sans text-[#1A1A1A]">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-[#E2E8F0] z-40 flex items-center justify-between px-4">
        <div className="flex flex-col">
          <span className="text-[#1A365D] text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Masterclass</span>
          <span className="text-[#1A365D] font-serif font-bold text-sm italic">ISO 9001:2015</span>
        </div>
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 -mr-2 text-[#1A365D] hover:bg-gray-50 rounded"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <Sidebar 
        selectedModuleId={selectedModule?.id || null} 
        onSelectModule={setSelectedModule}
        isMobileOpen={isMobileOpen}
        setMobileOpen={setIsMobileOpen}
      />
      <ContentViewer module={selectedModule} />
    </div>
  );
}
