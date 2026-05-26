const fs = require('fs');

const raw = fs.readFileSync('raw_data.txt', 'utf-8');

const parseData = (text) => {
  const sections = [];
  let currentSection = null;
  let currentModule = null;
  
  const lines = text.split('\n');
  
  const extractLink = (line) => {
    const match = line.match(/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)(?:\/view|\/preview|\/edit)/);
    if (match) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    
    const altMatch = line.match(/https:\/\/drive\.google\.com\/drive\/folders\/([a-zA-Z0-9_-]+)/);
    if(altMatch) {
       return `https://drive.google.com/drive/folders/${altMatch[1]}`;
    }
    return '';
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check for Section: e.g., "1. Pendahuluan" or "2. Klausul 4 : Context..."
    if (/^\d+\.\s+[A-Za-z]/.test(line)) {
      currentSection = {
        id: sections.length + 1,
        title: line.replace(/^\d+\.\s*/, `${sections.length + 1}. `),
        modules: []
      };
      sections.push(currentSection);
      continue;
    }

    // Check for Module header: e.g., "1.1. Modul 1"
    if (/^\d+\.\d+\.?\s+Modul\s+\d+/.test(line)) {
      const modIdMatch = line.match(/Modul\s+(\d+)/i);
      const modId = modIdMatch ? parseInt(modIdMatch[1]) : 0;
      
      let nextLine = lines[i+1]?.trim() || '';
      i++; // consume the title line
      
      currentModule = {
        id: modId,
        title: `Modul ${modId}: ${nextLine}`,
        links: {
          slide: '',
          podcast: '',
          infografis: '',
          mindmap: '',
          ai: ''
        }
      };
      if (currentSection) {
        currentSection.modules.push(currentModule);
      } else {
        // Fallback if no section
        currentSection = { id: 1, title: "Materi", modules: [currentModule] };
        sections.push(currentSection);
      }
      continue;
    }

    if (currentModule) {
      const lowerLine = line.toLowerCase();
      let link = extractLink(line);
      
      // If the link is on the next line
      if (!link && i + 1 < lines.length && /^https/.test(lines[i+1].trim())) {
         link = extractLink(lines[i+1].trim());
         if(link) {
            i++; // skip next line since we consumed it
         }
      }

      if (lowerLine.includes('link slide') && link) {
        currentModule.links.slide = link;
      } else if ((lowerLine.includes('link audio') || lowerLine.includes('link podcast')) && link) {
        currentModule.links.podcast = link;
      } else if (lowerLine.includes('link infografis') && link) {
        currentModule.links.infografis = link;
      } else if (lowerLine.includes('link mindmap') && link) {
        currentModule.links.mindmap = link;
      }
    }
  }

  return sections;
};

const dt = parseData(raw);

const codeStr = `export interface ResourceLinks {
  slide: string;
  podcast: string;
  infografis: string;
  mindmap: string;
  ai: string;
}

export interface ModuleData {
  id: number;
  title: string;
  links: ResourceLinks;
}

export interface SectionData {
  id: number;
  title: string;
  modules: ModuleData[];
}

const emptyLinks: ResourceLinks = {
  slide: "",
  podcast: "",
  infografis: "",
  mindmap: "",
  ai: ""
};

export const courseData: SectionData[] = ${JSON.stringify(dt, null, 2)};
`;

fs.writeFileSync('src/data.ts', codeStr);
console.log('done writing src/data.ts');
