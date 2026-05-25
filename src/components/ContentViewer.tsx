import { BarChart, Bot, Headphones, MonitorPlay, Network } from "lucide-react";
import { useState, useEffect, ElementType } from "react";
import { ModuleData } from "../data";

interface ContentViewerProps {
  module: ModuleData | null;
}

type TabType = "slide" | "podcast" | "infografis" | "mindmap" | "ai";

const tabs: { id: TabType; label: string; icon: ElementType }[] = [
  { id: "slide", label: "Slide", icon: MonitorPlay },
  { id: "podcast", label: "Podcast", icon: Headphones },
  { id: "infografis", label: "Infografis", icon: BarChart },
  { id: "mindmap", label: "Mind Map", icon: Network },
  { id: "ai", label: "AI Assistant", icon: Bot },
];

export default function ContentViewer({ module }: ContentViewerProps) {
  const [activeTab, setActiveTab] = useState<TabType>("slide");

  // Reset tab to slide when a new module is selected
  useEffect(() => {
    setActiveTab("slide");
  }, [module?.id]);

  if (!module) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#F4F4F7]">
        <div className="w-20 h-20 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl flex items-center justify-center mb-6">
          <MonitorPlay className="w-8 h-8 text-[#C5A059]" />
        </div>
        <h2 className="text-2xl font-serif italic font-bold text-[#1A365D] mb-2">Pilih Modul Pembelajaran</h2>
        <p className="text-[#718096] max-w-md text-sm">
          Pilih modul dari menu di samping untuk memulai materi masterclass ISO 9001:2015 Anda.
        </p>
      </div>
    );
  }

  const currentLink = module.links[activeTab];

  return (
    <div className="flex-1 flex flex-col bg-[#F4F4F7] overflow-hidden pt-16 lg:pt-0">
      {/* Header Area */}
      <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
        <div className="flex items-center gap-6 overflow-hidden">
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 whitespace-nowrap">
              Module {String(module.id).padStart(2, '0')} Active
            </span>
          </div>
          <h2 className="text-sm font-bold text-[#1A365D] truncate">
            {module.title.split(': ').pop()}
          </h2>
        </div>
        
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <button className="px-4 py-1.5 border border-[#1A365D] text-[#1A365D] rounded text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A365D] hover:text-white transition-colors">
            AI Assistant
          </button>
          <button className="px-4 py-1.5 bg-[#C5A059] text-white rounded text-[10px] font-bold uppercase tracking-widest hover:bg-[#b08e4f] transition-colors">
            Download Certificate
          </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="p-4 lg:p-6 flex-1 flex flex-col gap-6 overflow-hidden">
        
        {/* Tabs */}
        <div className="flex justify-center flex-shrink-0">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-[#E2E8F0] flex gap-1 overflow-x-auto w-full lg:w-auto custom-scrollbar">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap outline-none flex-shrink-0 ${
                    isActive 
                      ? 'bg-[#1A365D] text-white' 
                      : 'hover:bg-gray-50 text-[#718096]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Media Block */}
        <div className="flex-1 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden relative group flex flex-col">
          {currentLink ? (
            <iframe 
              src={currentLink} 
              className="absolute inset-0 w-full h-full border-0"
              title={`${activeTab} - ${module.title}`}
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                <p className="text-white font-serif italic text-lg opacity-80">Loading Secured Media Module...</p>
                <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mt-2 px-4 text-center">
                  Data Not Available - Encrypted Internal Viewer
                </p>
              </div>
            </div>
          )}
          
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-4 py-2 rounded text-white text-[10px] font-mono tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            ISO:9001:2015_M{module.id}_{activeTab.toUpperCase()}_v2.0
          </div>
        </div>
        
        {/* Footer info */}
        <footer className="hidden lg:flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold px-2 flex-shrink-0">
          <span>62 Modul Praktis & Interaktif</span>
          <span>© 2026 ISO Management Academy</span>
          <span>Modul {String(module.id).padStart(2, '0')} / 62</span>
        </footer>
      </div>
    </div>
  );
}
