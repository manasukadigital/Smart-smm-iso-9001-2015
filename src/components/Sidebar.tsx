import { ModuleData, courseData } from "../data";

interface SidebarProps {
  onSelectModule: (mod: ModuleData) => void;
  selectedModuleId: number | null;
  isMobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({ onSelectModule, selectedModuleId, isMobileOpen, setMobileOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-[#E2E8F0] flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:pt-0`}
      >
        <div className="p-6 border-b border-[#E2E8F0] bg-[#1A365D] text-white flex-shrink-0 pt-20 lg:pt-6">
          <h1 className="text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-1">
            Masterclass Series
          </h1>
          <h2 className="text-lg font-serif italic leading-tight">
            SMART SMM ISO 9001:2015
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          <nav className="space-y-6">
            {courseData.map((section) => (
              <div key={section.id}>
                <h3 className="text-[10px] uppercase tracking-widest text-[#718096] font-bold mb-3 px-2">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.modules.map(mod => {
                    const isSelected = selectedModuleId === mod.id;
                    const truncatedTitle = mod.title.split(': ').pop() || mod.title;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => {
                          onSelectModule(mod);
                          setMobileOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-3 transition-colors ${
                          isSelected 
                            ? 'bg-[#E2E8F0] text-[#1A365D]' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded text-[10px] ${isSelected ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                          {String(mod.id).padStart(2, '0')}
                        </span>
                        <span className="leading-snug line-clamp-2">
                          {truncatedTitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-[#E2E8F0] bg-gray-50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white text-xs font-bold">
              DH
            </div>
            <div>
              <p className="text-[10px] text-gray-500 leading-none mb-1">Design & Developed By</p>
              <p className="text-xs font-bold text-[#1A1A1A] leading-none">Dede Hery Suryana</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
