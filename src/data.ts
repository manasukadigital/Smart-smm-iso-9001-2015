export interface ResourceLinks {
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

export const courseData: SectionData[] = [
  {
    id: 1,
    title: "1. Pendahuluan",
    modules: [
      { id: 1, title: "Modul 1: Fondasi Sistem Manajemen Mutu ISO 9001:2015", links: { ...emptyLinks } },
      { id: 2, title: "Modul 2: Transformasi ISO 9001 hingga Versi 2015", links: { ...emptyLinks } },
      { id: 3, title: "Modul 3: Perubahan Utama dalam ISO 9001:2015", links: { ...emptyLinks } },
      { id: 4, title: "Modul 4: Klausul dan Persyaratan ISO 9001:2015", links: { ...emptyLinks } },
      { id: 5, title: "Modul 5: Prinsip Sistem Manajemen Mutu", links: { ...emptyLinks } },
      { id: 6, title: "Modul 6: Konsep dan Struktur Annex SL", links: { ...emptyLinks } }
    ]
  },
  {
    id: 2,
    title: "2. Klausul 4 : Context of The Organization (Konteks Organisasi)",
    modules: [
      { id: 7, title: "Modul 7: Klausul 4.1 Memahami Konteks Organisasi", links: { ...emptyLinks } },
      { id: 8, title: "Modul 8: Klausul 4.2 Kebutuhan Harapan Pihak Berkepentingan", links: { ...emptyLinks } },
      { id: 9, title: "Modul 9: Klausul 4.3 Menetapkan Lingkup SMM", links: { ...emptyLinks } },
      { id: 10, title: "Modul 10: Klausul 4.4 Sistem Manajemen Mutu", links: { ...emptyLinks } }
    ]
  },
  {
    id: 3,
    title: "3. Klausul 5 : Leadership (Kepemimpinan)",
    modules: [
      { id: 11, title: "Modul 11: Klausul 5.1.1 Kepemimpinan dan Komitmen", links: { ...emptyLinks } },
      { id: 12, title: "Modul 12: Klausul 5.1.2 Fokus Pada Pelanggan", links: { ...emptyLinks } },
      { id: 13, title: "Modul 13: Klausul 5.2.1 Kebijakan Mutu", links: { ...emptyLinks } },
      { id: 14, title: "Modul 14: Klausul 5.2.2 Mengkomunikasikan Kebijakan Mutu", links: { ...emptyLinks } },
      { id: 15, title: "Modul 15: Klausul 5.3 Peran Tanggung Jawab Wewenang", links: { ...emptyLinks } }
    ]
  },
  {
    id: 4,
    title: "4. Klausul 6 : Planning (Perencanaan)",
    modules: [
      { id: 16, title: "Modul 16: Klausul 6.1 Pengelolaan Risiko dan Peluang", links: { ...emptyLinks } },
      { id: 17, title: "Modul 17: Klausul 6.2 Sasaran Mutu", links: { ...emptyLinks } },
      { id: 18, title: "Modul 18: Klausul 6.3 Perencanaan Perubahan", links: { ...emptyLinks } }
    ]
  },
  {
    id: 5,
    title: "5. Klausul 7 : Support (Pendukung)",
    modules: [
      { id: 19, title: "Modul 19: Klausul 7.1.1 Sumber Daya - Umum", links: { ...emptyLinks } },
      { id: 20, title: "Modul 20: Klausul 7.1.2 Sumber Daya – Personil", links: { ...emptyLinks } },
      { id: 21, title: "Modul 21: Klausul 7.1.3 Sumber Daya - Infrastruktur", links: { ...emptyLinks } },
      { id: 22, title: "Modul 22: Klausul 7.1.4 Sumber Daya - Lingkungan", links: { ...emptyLinks } },
      { id: 23, title: "Modul 23: Klausul 7.1.5 Sumber Daya - Pemantauan Pengukuran", links: { ...emptyLinks } },
      { id: 24, title: "Modul 24: Klausul 7.1.6 Pengetahuan Organisasi", links: { ...emptyLinks } },
      { id: 25, title: "Modul 25: Klausul 7.2 Kompetensi", links: { ...emptyLinks } },
      { id: 26, title: "Modul 26: Klausul 7.3 Kesadaran", links: { ...emptyLinks } },
      { id: 27, title: "Modul 27: Klausul 7.4 Komunikasi", links: { ...emptyLinks } },
      { id: 28, title: "Modul 28: Klausul 7.5.1 Informasi Terdokumentasi Umum", links: { ...emptyLinks } },
      { id: 29, title: "Modul 29: Klausul 7.5.2 Pembuatan Pembaharuan", links: { ...emptyLinks } },
      { id: 30, title: "Modul 30: Klausul 7.5.3 Pengendalian Informasi Terdokumentasi", links: { ...emptyLinks } }
    ]
  },
  {
    id: 6,
    title: "6. Klausul 8 : Operasional",
    modules: [
      { id: 31, title: "Modul 31: Klausul 7.1.1 Sumber Daya - Umum (Operasional)", links: { ...emptyLinks } },
      { id: 32, title: "Modul 32: Klausul 8.2.1 Komunikasi Pelanggan", links: { ...emptyLinks } },
      { id: 33, title: "Modul 33: Klausul 8.2.2 Menetapkan Persyaratan Produk dan Jasa", links: { ...emptyLinks } },
      { id: 34, title: "Modul 34: Klausul 8.2.3 Tinjauan Persyaratan Produk dan Jasa", links: { ...emptyLinks } },
      { id: 35, title: "Modul 35: Klausul 8.2.4 Perubahan Persyaratan Produk dan Jasa", links: { ...emptyLinks } },
      { id: 36, title: "Modul 36: Klausul 8.3.1 Desain dan Pengembangan - Umum", links: { ...emptyLinks } },
      { id: 37, title: "Modul 37: Klausul 8.3.2 Perencanaan Desain dan Pengembangan", links: { ...emptyLinks } },
      { id: 38, title: "Modul 38: Klausul 8.3.3 Masukan Desain dan Pengembangan", links: { ...emptyLinks } },
      { id: 39, title: "Modul 39: Klausul 8.3.4 Pengendalian Desain dan Pengembangan", links: { ...emptyLinks } },
      { id: 40, title: "Modul 40: Klausul 8.3.5 Keluaran Desain dan Pengembangan", links: { ...emptyLinks } },
      { id: 41, title: "Modul 41: Klausul 8.3.6 Perubahan Desain dan Pengembangan", links: { ...emptyLinks } },
      { id: 42, title: "Modul 42: Klausul 8.4.1 Pengendalian Penyedia Eksternal - Umum", links: { ...emptyLinks } },
      { id: 43, title: "Modul 43: Klausul 8.4.2 Jenis dan Tingkat Pengendalian", links: { ...emptyLinks } },
      { id: 44, title: "Modul 44: Klausul 8.4.3 Informasi Penyedia Eksternal", links: { ...emptyLinks } },
      { id: 45, title: "Modul 45: Klausul 8.5.1 Pengendalian Produksi dan Penyediaan Jasa", links: { ...emptyLinks } },
      { id: 46, title: "Modul 46: Klausul 8.5.2 Identifikasi dan Mampu Telusur", links: { ...emptyLinks } },
      { id: 47, title: "Modul 47: Klausul 8.5.3 Kepemilikan Pelanggan Penyedia Eksternal", links: { ...emptyLinks } },
      { id: 48, title: "Modul 48: Klausul 8.5.4 Perlindungan", links: { ...emptyLinks } },
      { id: 49, title: "Modul 49: Klausul 8.5.5 Kegiatan Pasca Pengiriman", links: { ...emptyLinks } },
      { id: 50, title: "Modul 50: Klausul 8.5.6 Pengendalian Perubahan", links: { ...emptyLinks } },
      { id: 51, title: "Modul 51: Klausul 8.6 Pelepasan Produk dan Jasa", links: { ...emptyLinks } },
      { id: 52, title: "Modul 52: Klausul 8.7 Pengendalian Keluaran Tidak Sesuai", links: { ...emptyLinks } }
    ]
  },
  {
    id: 7,
    title: "7. Klausul 9 : Performance Evaluation (Evaluasi Kinerja)",
    modules: [
      { id: 53, title: "Modul 53: Klausul 9.1.1 Pemantauan Pengukuran Analisis Evaluasi", links: { ...emptyLinks } },
      { id: 54, title: "Modul 54: Klausul 9.1.2 Kepuasan Pelanggan", links: { ...emptyLinks } },
      { id: 55, title: "Modul 55: Klausul 9.1.3 Analisis dan Evaluasi", links: { ...emptyLinks } },
      { id: 56, title: "Modul 56: Klausul 9.2 Audit Internal", links: { ...emptyLinks } },
      { id: 57, title: "Modul 57: Klausul 9.3.1 Tinjauan Manajemen - Umum", links: { ...emptyLinks } },
      { id: 58, title: "Modul 58: Klausul 9.3.2 Masukan Tinjauan Manajemen", links: { ...emptyLinks } },
      { id: 59, title: "Modul 59: Klausul 9.3.3 Keluaran Tinjauan Manajemen", links: { ...emptyLinks } }
    ]
  },
  {
    id: 8,
    title: "8. Klausul 10 : Improvement (Peningkatan)",
    modules: [
      { id: 60, title: "Modul 60: Klausul 10.1 Peningkatan Umum", links: { ...emptyLinks } },
      { id: 61, title: "Modul 61: Klausul 10.2 Ketidaksesuaian Tindakan Korektif", links: { ...emptyLinks } },
      { id: 62, title: "Modul 62: Klausul 10.3 Peningkatan Berkesinambungan", links: { ...emptyLinks } }
    ]
  }
];
