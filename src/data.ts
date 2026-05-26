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
    "id": 1,
    "title": "1. Pendahuluan",
    "modules": [
      {
        "id": 1,
        "title": "Modul 1: Fondasi Sistem Manajemen Mutu ISO 9001:2015",
        "links": {
          "slide": "https://drive.google.com/file/d/1neED5Z90IWas7OmW_QPIT5jkxBjoNpTS/preview",
          "podcast": "https://drive.google.com/file/d/1OPVYstqAlmYsDv4PkwsEjOfWBQukNsSp/preview",
          "infografis": "https://drive.google.com/file/d/13kLth69ELJ3iOmhOMLrSvsUiQjHtz-bo/preview",
          "mindmap": "https://drive.google.com/file/d/17ZiBzahRtGPZvIqez22qyIBJrrP-5m4J/preview",
          "ai": ""
        }
      },
      {
        "id": 2,
        "title": "Modul 2: Transformasi ISO 9001 hingga Versi 2015",
        "links": {
          "slide": "https://drive.google.com/file/d/1Kux04Z5gT8QKacCzOw8OvCb1SjbJFx2_/preview",
          "podcast": "https://drive.google.com/file/d/1yxHYGDlfDeIXy_VQBWd_GTx0PXTM04ec/preview",
          "infografis": "https://drive.google.com/file/d/1TkIa8Te9ykxKudyNxeVC6X6crInIB0vu/preview",
          "mindmap": "https://drive.google.com/file/d/1Rl0cJPVZh6gEtbrJkbEj3vYZrMNSS0kC/preview",
          "ai": ""
        }
      },
      {
        "id": 3,
        "title": "Modul 3: Perubahan Utama dalam ISO 9001:2015",
        "links": {
          "slide": "https://drive.google.com/file/d/1nYi2QpL0BtRyMyz3kkvrDNDbAzCG5Ney/preview",
          "podcast": "https://drive.google.com/file/d/16rcVmJIU_X8S3_xS37EIPCqL3cdzOCTa/preview",
          "infografis": "https://drive.google.com/file/d/1jl8z4gZuvZh2FrrBhn-reRQmp9uxuQjz/preview",
          "mindmap": "https://drive.google.com/file/d/1HPod5pqxsIP41zKkWxxke-zpKPo9oV7c/preview",
          "ai": ""
        }
      },
      {
        "id": 4,
        "title": "Modul 4: Klausul dan Persyaratan ISO 9001:2015",
        "links": {
          "slide": "https://drive.google.com/file/d/1RBR031X0PCXFF06MK-M_mbmNM8kK4jDZ/preview",
          "podcast": "https://drive.google.com/file/d/1zqG9R9J04SYtaGQ0k6QZpmzSUVRwxFW3/preview",
          "infografis": "https://drive.google.com/file/d/1nwxFK-DlW57Lz2eGmcGO0uJbWE_WNWwr/preview",
          "mindmap": "https://drive.google.com/file/d/1Dh_Ievlj9t5XY2rRbLcy7wkZU-CkZqhH/preview",
          "ai": ""
        }
      },
      {
        "id": 5,
        "title": "Modul 5: Prinsip Sistem Manajemen Mutu",
        "links": {
          "slide": "https://drive.google.com/file/d/1HP9myE0oY7jiwdLdig7oPIhpVlPQUSsG/preview",
          "podcast": "https://drive.google.com/file/d/1AK32E1ShsncGuXOKmGjz7r9Cv1lYRfOj/preview",
          "infografis": "https://drive.google.com/file/d/1IzKpo7QKRUA55HiO3WqE6OJJ3as7Z_fj/preview",
          "mindmap": "https://drive.google.com/file/d/127sCXJop9zh6r4X3mk7vSSCQaIBY739i/preview",
          "ai": ""
        }
      },
      {
        "id": 6,
        "title": "Modul 6: Konsep dan Struktur Annex SL",
        "links": {
          "slide": "https://drive.google.com/file/d/1V8JJL8eU9YZR4YBPIcObXQqKKQ8gPl7u/preview",
          "podcast": "https://drive.google.com/file/d/1wSIOurC83_NnSM9THWwg6YYp_xoYoGMQ/preview",
          "infografis": "https://drive.google.com/file/d/1-nOzTzWOz9UuY_TLKaWVIcl0ebyBaU8N/preview",
          "mindmap": "https://drive.google.com/file/d/1uNJZsYQX1zfqCAAmFF7Ur56QtznXwyvF/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 2,
    "title": "2. Klausul 4 : Context of The Organization (Konteks Organisasi)",
    "modules": [
      {
        "id": 7,
        "title": "Modul 7: Klausul 4.1 Memahami Konteks Organisasi",
        "links": {
          "slide": "https://drive.google.com/file/d/1Tsvh1BU16wCG0omAWLQU8_3bD0Zwyw-Z/preview",
          "podcast": "https://drive.google.com/file/d/13zuzvCI3GMnHhAVgxZNbuIDg17z1Ii9I/preview",
          "infografis": "https://drive.google.com/file/d/144pKKP4Vtf7cK0Ny7HnoTht_gZBTfgIG/preview",
          "mindmap": "https://drive.google.com/file/d/1f_PKQwCq7ar5lgyjYl781jP_jc3RdpAc/preview",
          "ai": ""
        }
      },
      {
        "id": 8,
        "title": "Modul 8: Klausul 4.2 Kebutuhan Harapan Pihak Berkepentingan",
        "links": {
          "slide": "https://drive.google.com/file/d/1yR8goBftgvendfeTccMlYXWhNwhFm715/preview",
          "podcast": "https://drive.google.com/file/d/1z7XCqmDa6ewEIIdN6pd5JPQam0YiGXLA/preview",
          "infografis": "https://drive.google.com/file/d/1qbd4ndrz-Gx3r78bvXYZoYWa6yiEcTkF/preview",
          "mindmap": "https://drive.google.com/file/d/1as06xmNtTy89UmQLKYYxTOWy_9XRrBDk/preview",
          "ai": ""
        }
      },
      {
        "id": 9,
        "title": "Modul 9: Klausul 4.3 Menetapkan Lingkup SMM",
        "links": {
          "slide": "https://drive.google.com/file/d/1XEqKchYMQjHdQzU8G_ax_M4CBJqNLtT_/preview",
          "podcast": "https://drive.google.com/file/d/1fu_KR_h04Cb1B33gPplIh3gswrrK-hc4/preview",
          "infografis": "https://drive.google.com/file/d/1tHaRchT3_8WTvpR0bRkjVCUZd-3NaW3L/preview",
          "mindmap": "https://drive.google.com/file/d/1vTcqdAHWEb2E_lVnENmWlErbaqlZ7IqS/preview",
          "ai": ""
        }
      },
      {
        "id": 10,
        "title": "Modul 10: Klausul 4.4 Sistem Manajemen Mutu",
        "links": {
          "slide": "https://drive.google.com/file/d/1KozkmjQANemwf_C-V5RoW19IzlX5tOtE/preview",
          "podcast": "https://drive.google.com/file/d/1IXD6nNLcgXvuAD_kR4G7Rv78aoNGh4q7/preview",
          "infografis": "https://drive.google.com/file/d/1mkAPoIDRGfbEVD5AmVYVQqm00lBIpWjN/preview",
          "mindmap": "https://drive.google.com/file/d/1DaC6ZNCcz91Vl9gVyUqKrpddYbLoJ2T-/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 3,
    "title": "3. Klausul 5 : Leadership (Kepemimpinan)",
    "modules": [
      {
        "id": 11,
        "title": "Modul 11: Klausul 5.1.1 Kepemimpinan dan Komitmen",
        "links": {
          "slide": "https://drive.google.com/file/d/1Uz14vL3JKTwHooclpzsCxUIXcImdw7PP/preview",
          "podcast": "https://drive.google.com/file/d/1fQx5BVzim7PKz_TJX74vV2JtENrqTrTw/preview",
          "infografis": "https://drive.google.com/file/d/1w-SpQrRbt4IffyFkxkVtzbY9kCCsXWxd/preview",
          "mindmap": "https://drive.google.com/file/d/1rd3h3z7YIX5cljgfyUE1SAHQY27brGCs/preview",
          "ai": ""
        }
      },
      {
        "id": 12,
        "title": "Modul 12: Klausul 5.1.2 Fokus Pada Pelanggan",
        "links": {
          "slide": "https://drive.google.com/file/d/1pmMPg9592QaX3MLREbbRzPOXxl7Fv8Rb/preview",
          "podcast": "https://drive.google.com/file/d/1e5h24jw9GqQ9nK_dsoWxgNtUgxXBn43I/preview",
          "infografis": "https://drive.google.com/file/d/1-SxDAvllJyBsv2O32AOdYI7Z7cVyN2UB/preview",
          "mindmap": "https://drive.google.com/file/d/1AIRL5uFZ4xTDHqehjCsWdTHad_aWUFIY/preview",
          "ai": ""
        }
      },
      {
        "id": 13,
        "title": "Modul 13: Klausul 5.2.1 Kebijakan Mutu",
        "links": {
          "slide": "https://drive.google.com/file/d/1ANW1KIj6QPS2UMZQG9stKGImzJFmru_2/preview",
          "podcast": "https://drive.google.com/file/d/1vUS79ulp2LaFoW7n7G6qUtikbIpGJW_O/preview",
          "infografis": "https://drive.google.com/file/d/1vToIJ1emtBQqJC_H3BIYLanVQmuFHGKe/preview",
          "mindmap": "https://drive.google.com/file/d/1-yLzFmzYut7E6N3RXMP1ray3CdufTNs4/preview",
          "ai": ""
        }
      },
      {
        "id": 14,
        "title": "Modul 14: Klausul 5.2.2 Mengkomunikasikan Kebijakan Mutu",
        "links": {
          "slide": "https://drive.google.com/file/d/1T3-XZ_5NfpXub7Q4kQA947KQ0PdIlbZh/preview",
          "podcast": "https://drive.google.com/file/d/1YyUHQR1Z7NmUR_GCC8B9lrBumVz-DVoT/preview",
          "infografis": "https://drive.google.com/file/d/17nUn392k7260XabbglTq-piyqJHvqDMF/preview",
          "mindmap": "https://drive.google.com/file/d/1zDSj3j3b4l1izSLPrtf9u9tDKlSfbpLE/preview",
          "ai": ""
        }
      },
      {
        "id": 15,
        "title": "Modul 15: Klausul 5.3 Peran Tanggung Jawab Wewenang",
        "links": {
          "slide": "https://drive.google.com/file/d/1-B72NCRC4VWaaehNqA4Eot3vI3HsQIKE/preview",
          "podcast": "https://drive.google.com/file/d/1-veBmJw_sCcAtam-_ZDsmWXnO9WSVCci/preview",
          "infografis": "https://drive.google.com/file/d/1k6NAdz9-P1Djh9RM4CXD7bhH3JSz-E0Z/preview",
          "mindmap": "https://drive.google.com/file/d/19ogRsYs-TEPotgYoA9bZIYUuOmyeddvW/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 4,
    "title": "4. Klausul 6 :  Planning (Perencanaan)",
    "modules": [
      {
        "id": 16,
        "title": "Modul 16: Klausul 6.1 Pengelolaan Risiko dan Peluang",
        "links": {
          "slide": "https://drive.google.com/file/d/11kI6qc4IQfspZHiZxAn3DL5xwBD0k87p/preview",
          "podcast": "https://drive.google.com/file/d/1f32AHOPLxawfJpHctN37PCcrHrIAvR3w/preview",
          "infografis": "https://drive.google.com/file/d/1c4KYkFWRikMGMDQd1ri9dV_TWAp1ploK/preview",
          "mindmap": "https://drive.google.com/file/d/132o9S6-7tmDsZv8o3tfo0Lljf2UOg3Tf/preview",
          "ai": ""
        }
      },
      {
        "id": 17,
        "title": "Modul 17: Klausul 6.2 Sasaran Mutu",
        "links": {
          "slide": "https://drive.google.com/file/d/1agx21z-luY4QcWJCYgnq0NgCsIpq4C4Y/preview",
          "podcast": "https://drive.google.com/file/d/1L1_Hd0u9cmJUbZG_MXpcrFsK6HD2lvBw/preview",
          "infografis": "https://drive.google.com/file/d/14tD02JRjI-0ZEtCH0FNYAgXzTDIhUzUg/preview",
          "mindmap": "https://drive.google.com/file/d/1-yNo_Ierx2E4Mev7_-SiYigPlL9leVQe/preview",
          "ai": ""
        }
      },
      {
        "id": 18,
        "title": "Modul 18: Klausul 6.3 Perencanaan Perubahan",
        "links": {
          "slide": "https://drive.google.com/file/d/1_j0WAGmuco8eE3NSeI4IJynvsd4soONv/preview",
          "podcast": "https://drive.google.com/file/d/18BACRrqiBMBH7PoelXIw0usrEOSH1_vV/preview",
          "infografis": "https://drive.google.com/file/d/1R3effzv3PD3dWPRwhNOBkAvvmfzGBd8E/preview",
          "mindmap": "https://drive.google.com/file/d/1B0pVm-N27wrkqKXx11wx_2RCN0YBkZxF/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 5,
    "title": "5. Klausul 7 : Support (Pendukung)",
    "modules": [
      {
        "id": 19,
        "title": "Modul 19: Klausul 7.1.1 Sumber Daya - Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/1nYSDBPFDldkbhlM5e5-3kOMw8zXgzGaw/preview",
          "podcast": "https://drive.google.com/file/d/1zKz9H-HG9u39vLv53434z91NOhU9ZJGR/preview",
          "infografis": "https://drive.google.com/file/d/1h-jrI5spyDQpjgeSut9tUO8pPQXA57_o/preview",
          "mindmap": "https://drive.google.com/file/d/1xL_2y_7WmEZDjiXB7V5qo8wpVB9aGAIR/preview",
          "ai": ""
        }
      },
      {
        "id": 20,
        "title": "Modul 20: Klausul 7.1.2 Sumber Daya – Personil",
        "links": {
          "slide": "https://drive.google.com/file/d/1Jj8AY0lMC3y5_4oGvGCUHC7u5BHXIHJN/preview",
          "podcast": "https://drive.google.com/file/d/1YIdkI61aOK7QHpoWk7H46BUj1AJDYs1u/preview",
          "infografis": "https://drive.google.com/file/d/1xUHV7fcAvjMRYKbhh6rmoER8-eWmLUGD/preview",
          "mindmap": "https://drive.google.com/file/d/1KZ3ggNl_2Hmbw6gByf3DqiDswwqs2-aV/preview",
          "ai": ""
        }
      },
      {
        "id": 21,
        "title": "Modul 21: Klausul 7.1.3 Sumber Daya - Infrastruktur",
        "links": {
          "slide": "https://drive.google.com/file/d/1qOnhxw8phKsEd5jMYGdIZLOUTL2vn9wj/preview",
          "podcast": "https://drive.google.com/file/d/1dIziHG7I5NxhbYR-D7qqIWHPHPHewfBS/preview",
          "infografis": "https://drive.google.com/file/d/1jJn467IYoDd81CsTgtr-FDkCxlyzFeM0/preview",
          "mindmap": "https://drive.google.com/file/d/1Z_e9zsPkebOVZVaRsscONhpXbBe4s9cM/preview",
          "ai": ""
        }
      },
      {
        "id": 22,
        "title": "Modul 22: Klausul 7.1.4 Sumber Daya - Lingkungan",
        "links": {
          "slide": "https://drive.google.com/file/d/19r4l_UcTdUUlCGJH4zBKicJUurPPR9uX/preview",
          "podcast": "https://drive.google.com/file/d/1F-FVUiZiKQi382eFDhZEXiSEXbCuGzY-/preview",
          "infografis": "https://drive.google.com/file/d/1HmAju98EIO3yF5q0WUB7Q4Dk3w8cO2XJ/preview",
          "mindmap": "https://drive.google.com/file/d/1SSjjQiu7Uhp8-NxoMkBFhJ0bSKmODalB/preview",
          "ai": ""
        }
      },
      {
        "id": 23,
        "title": "Modul 23: Klausul 7.1.5 Sumber Daya - Pemantauan Pengukuran",
        "links": {
          "slide": "https://drive.google.com/file/d/1MoMWCZGxglp64SsjAvUNwmmKbgx2GC37/preview",
          "podcast": "https://drive.google.com/file/d/10X-xRbtCCQHT7jebDDYFGkkObIsguzi6/preview",
          "infografis": "https://drive.google.com/file/d/1O13T2NgbVUf6ygbjzbRX2U1NzLEc8Tmj/preview",
          "mindmap": "https://drive.google.com/file/d/1NceVIM8j3vBxMdGQ4cPGFnWX0yIKU9kj/preview",
          "ai": ""
        }
      },
      {
        "id": 24,
        "title": "Modul 24: Klausul 7.1.6 Pengetahuan Organisasi",
        "links": {
          "slide": "https://drive.google.com/file/d/19wO1rW97lsYRE-CQcx3Q2zptB2aNcl0m/preview",
          "podcast": "https://drive.google.com/file/d/1G97waPRWuiZ9CYFTCrXE_hYybLkGlBAv/preview",
          "infografis": "https://drive.google.com/file/d/10kAUIBCqzbmXrkYtqxwgjtK8coXNKb3D/preview",
          "mindmap": "https://drive.google.com/file/d/1tlJgQY2rvVCNpGYFG3O3YurbRZXpIxgs/preview",
          "ai": ""
        }
      },
      {
        "id": 25,
        "title": "Modul 25: Klausul 7.2 Kompetensi",
        "links": {
          "slide": "https://drive.google.com/file/d/1Jykf-ScnA5YFYB4ploxH5pn_FztCDQIK/preview",
          "podcast": "https://drive.google.com/file/d/1__ipPS1l8YwBoH6bBhc7TFATmAhydXbh/preview",
          "infografis": "https://drive.google.com/file/d/1xSE0ILY6TV2Ju44Wc8Gbi47slxKxazFA/preview",
          "mindmap": "https://drive.google.com/file/d/1Kcq02eIV1G5vh45C_Oist7L-TJbNitjU/preview",
          "ai": ""
        }
      },
      {
        "id": 26,
        "title": "Modul 26: Klausul 7.3 Kesadaran",
        "links": {
          "slide": "https://drive.google.com/file/d/1URQkT85ePVMuLsiqADljCvZ0fJHToKbL/preview",
          "podcast": "https://drive.google.com/file/d/10THd1amLQJlkWeVPsDaxd5GjsKoOTYCZ/preview",
          "infografis": "https://drive.google.com/file/d/119Fl2mvxIZw8hfjqQXOqKMFWBFzvtc3u/preview",
          "mindmap": "https://drive.google.com/file/d/1-Yp_wSmHn-wflahXuHJhMhbXfpzDWpH4/preview",
          "ai": ""
        }
      },
      {
        "id": 27,
        "title": "Modul 27: Klausul 7.4 Komunikasi",
        "links": {
          "slide": "https://drive.google.com/file/d/12E56lGc7ye9uKhcc5wSElFnEc9_YHt9j/preview",
          "podcast": "https://drive.google.com/file/d/1FjW3k5rsixcFfSqXQeoAbdb-08R8IGHA/preview",
          "infografis": "https://drive.google.com/file/d/14qqONekBRRZ-4JGf8KkSFpn3N55Tmoef/preview",
          "mindmap": "https://drive.google.com/file/d/14xgoEmdaCx3pEhN5tzP6_wf0AQ6vsg6w/preview",
          "ai": ""
        }
      },
      {
        "id": 28,
        "title": "Modul 28: Klausul 7.5.1 Informasi Terdokumentasi Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/1YYJ4piYXEbkjXtuSqPxI7rJzizp8G3wv/preview",
          "podcast": "https://drive.google.com/file/d/1H_iL9qN2zrV0vlVc2msvNQ_KFkTUo2JE/preview",
          "infografis": "https://drive.google.com/file/d/1HNhqRBrmhBfUNbLVG2h8AIge7IrJlyO_/preview",
          "mindmap": "https://drive.google.com/file/d/1rFrWwqZ71NgKi_NmviIJHv1HEkrO9w3b/preview",
          "ai": ""
        }
      },
      {
        "id": 29,
        "title": "Modul 29: Klausul 7.5.2 Pembuatan Pembaharuan",
        "links": {
          "slide": "https://drive.google.com/file/d/1mb89eNx_5Msc4nYVKqN3ed9iSxIWuTkI/preview",
          "podcast": "https://drive.google.com/file/d/1YFQmbtlpMeDKeR0w34hZgF1uyMZ_04z_/preview",
          "infografis": "https://drive.google.com/file/d/1D9im3b47micwh2Je2sRGpdf8q98rCKSm/preview",
          "mindmap": "https://drive.google.com/file/d/1jJnC-2zuvqvLCUVUHKL7eVv-N77CBOYl/preview",
          "ai": ""
        }
      },
      {
        "id": 30,
        "title": "Modul 30: Klausul 7.5.3 Pengendalian Informasi Terdokumentasi",
        "links": {
          "slide": "https://drive.google.com/file/d/1i_SOgctsPVbbFWOwUZRnaUN_ZOwQ96Ea/preview",
          "podcast": "https://drive.google.com/file/d/1RwlVbP4HQhKbDZ7prqbIDmrELNA_cUHV/preview",
          "infografis": "https://drive.google.com/file/d/1cn4kT3p3Uhpk7RxgECBKqRefu6EGiNtC/preview",
          "mindmap": "https://drive.google.com/file/d/1yTmoiW_sz7zMukpOkgO3_sNmJYqLKP1l/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 6,
    "title": "6. Klausul 8 : Operasional",
    "modules": [
      {
        "id": 31,
        "title": "Modul 31: Klausul 7.1.1 Sumber Daya - Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/1ilQVQtwDGd5H_V9ujSgZidwopYsWh1To/preview",
          "podcast": "https://drive.google.com/file/d/1OGgQ1SieVdFdScJgohtVbrV2dIcJBB8k/preview",
          "infografis": "https://drive.google.com/file/d/1U_zswdiAtCBV98_RGWReCg95GS4Ltiv6/preview",
          "mindmap": "https://drive.google.com/file/d/1f9V4JUFf3Vxh6eA72wUuHgZB7e8zeu0Q/preview",
          "ai": ""
        }
      },
      {
        "id": 32,
        "title": "Modul 32: Klausul 8.2.1 Komunikasi Pelanggan",
        "links": {
          "slide": "https://drive.google.com/file/d/1GJNnqoa0DDxR2mg31R93SIdVS_8UVP6h/preview",
          "podcast": "https://drive.google.com/file/d/1Fay52rheV33_cRbsexI5FAJbA2aelSZO/preview",
          "infografis": "https://drive.google.com/file/d/16OClhP30bZzVnNKDDiuI-5WEG9irgrJA/preview",
          "mindmap": "https://drive.google.com/file/d/1VwlOacbf7-5DKRgroJJhHF9dxJ-2h7kK/preview",
          "ai": ""
        }
      },
      {
        "id": 33,
        "title": "Modul 33: Klausul 8.2.2 Menetapkan Persyaratan Produk dan Jasa",
        "links": {
          "slide": "https://drive.google.com/file/d/1VI8nGJj7aEVFDZjZUeuY9HUEZWF3r_4w/preview",
          "podcast": "https://drive.google.com/file/d/16BLnVMVoKPZNXZXRNQWPe67LCp0iFuRW/preview",
          "infografis": "https://drive.google.com/file/d/12LT5K1ASiqek96__0xmZZqm5V5yl67jP/preview",
          "mindmap": "https://drive.google.com/file/d/1K2qvJx-9WN8h98Bskn-r4WJRUoRQI4SE/preview",
          "ai": ""
        }
      },
      {
        "id": 34,
        "title": "Modul 34: Klausul 8.2.3 Tinjauan Persyaratan Produk dan Jasa",
        "links": {
          "slide": "https://drive.google.com/file/d/1107dR8CgJvzpZ4O7RW4HD9UdA7uP2IFy/preview",
          "podcast": "https://drive.google.com/file/d/1BfEOF0QyB2O14d4jPA-dncc0UqcP4jVY/preview",
          "infografis": "https://drive.google.com/file/d/1HDYBm0XMQrZUdklFxXrJsfkvZwDWdrM7/preview",
          "mindmap": "https://drive.google.com/file/d/1ogsY3I3qrERN8QR9JfcAzeNhR1RYj-MD/preview",
          "ai": ""
        }
      },
      {
        "id": 35,
        "title": "Modul 35: Klausul 8.2.4 Perubahan Persyaratan Produk dan Jasa",
        "links": {
          "slide": "https://drive.google.com/file/d/12m4pAP13sTVKi5v2UoaX5jxkn7kmLfIj/preview",
          "podcast": "https://drive.google.com/file/d/13ZgyE0GZoJR5D93hQSCDwDfUB8rMD_7e/preview",
          "infografis": "https://drive.google.com/file/d/1UIkNIIGi7YyJXHAF-nCksXkBW9DDsNHa/preview",
          "mindmap": "https://drive.google.com/file/d/15joITdB90zoTyzK2V6sNMkVI053nSQ-F/preview",
          "ai": ""
        }
      },
      {
        "id": 36,
        "title": "Modul 36: Klausul 8.3.1 Desain dan Pengembangan - Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/16_GzOUwTcQmXsnThHXo-KIXGAaZvccIi/preview",
          "podcast": "https://drive.google.com/file/d/1ww8S4Itv1kBE1gWqY_zgiqnAa1O71yGI/preview",
          "infografis": "https://drive.google.com/file/d/1P3G9dttgCYL1cOlV1yrmOJn_i3XsXLlp/preview",
          "mindmap": "https://drive.google.com/file/d/1YKnztT5Na4C41SxBoKevRsJpT4JNXW1w/preview",
          "ai": ""
        }
      },
      {
        "id": 37,
        "title": "Modul 37: Klausul 8.3.2 Perencanaan Desain dan Pengembangan",
        "links": {
          "slide": "https://drive.google.com/file/d/18SkSrpgNRYr6rya2aDsVrsixcibcphXz/preview",
          "podcast": "https://drive.google.com/file/d/1WwxM8BboksnMlZ0A4O6Ive_4rSRDuXhQ/preview",
          "infografis": "https://drive.google.com/file/d/1iQn8MD4Hq36NV5PT5C_u404Kdb9_zg2b/preview",
          "mindmap": "https://drive.google.com/file/d/10GKcmnPxY5XVf4u11WhaUpTPcc4ynMcr/preview",
          "ai": ""
        }
      },
      {
        "id": 38,
        "title": "Modul 38: Klausul 8.3.3 Masukan Desain dan Pengembangan",
        "links": {
          "slide": "https://drive.google.com/file/d/1G89JUGt97yZAqTukGGb9E3KBy03Z1MuI/preview",
          "podcast": "https://drive.google.com/file/d/18-581K7oVDswx_ThiXLaNE0jEVRomnQu/preview",
          "infografis": "https://drive.google.com/file/d/1cqg8Wf-0oZZuV0a_ppllS2ScgzrS5O9o/preview",
          "mindmap": "https://drive.google.com/file/d/1NIAYm2Yul9zWE8ey3cUbHasZeKfXvc0X/preview",
          "ai": ""
        }
      },
      {
        "id": 39,
        "title": "Modul 39: Klausul 8.3.4 Pengendalian Desain dan Pengembangan",
        "links": {
          "slide": "https://drive.google.com/file/d/1M0-2953tYzOrqRYK61H74mtnGxLo8pxL/preview",
          "podcast": "https://drive.google.com/file/d/1kO666hXmMALataHNPh3X0bqLW3OaFFLz/preview",
          "infografis": "https://drive.google.com/file/d/1gOUCHrJw9UC-K-Ur680Od2IBlwBF5H8S/preview",
          "mindmap": "https://drive.google.com/file/d/147ov_KIVhO9iJpWpun6e6soDMEUYRiud/preview",
          "ai": ""
        }
      },
      {
        "id": 40,
        "title": "Modul 40: Klausul 8.3.5 Keluaran Desain dan Pengembangan",
        "links": {
          "slide": "https://drive.google.com/file/d/1SN17PLGmOMPbesFhbNYgwHueNiu-Kd4H/preview",
          "podcast": "https://drive.google.com/file/d/1oUdlShbyoXjS6Lt8EeTA3m7VEmbrq87U/preview",
          "infografis": "https://drive.google.com/file/d/1jDDbAosbBoS_lTB2bbQYuXhLgAqC-64a/preview",
          "mindmap": "https://drive.google.com/drive/folders/1yzTnVh9yFxkBzDC_UaDKKHG-QKQREjKn",
          "ai": ""
        }
      },
      {
        "id": 41,
        "title": "Modul 41: Klausul 8.3.6 Perubahan Desain dan Pengembangan",
        "links": {
          "slide": "https://drive.google.com/file/d/1-t-BIAcvKHf1XWdNQQYZuhnYTnKd1TMX/preview",
          "podcast": "https://drive.google.com/file/d/1iRa2OUmK9WTVr9ImihtO23HinULSAGvS/preview",
          "infografis": "https://drive.google.com/file/d/1kWL48cGl6ZnV1kfO3QivlNqAdxm2JldE/preview",
          "mindmap": "https://drive.google.com/file/d/1JWW7j3mfuvK_CkEmpWQABK56QTJFbvxK/preview",
          "ai": ""
        }
      },
      {
        "id": 42,
        "title": "Modul 42: Klausul 8.4.1 Pengendalian Penyedia Eksternal - Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/1mUYBenxkbuZ3JD0pWzaEZhiO4mKo72T8/preview",
          "podcast": "https://drive.google.com/file/d/1ImGvev8Vtl9i48XIQAYpw6MOGm-631XW/preview",
          "infografis": "https://drive.google.com/file/d/1Z4ITx4JzYeCXQRiFEkBNAEQjcxpglLvQ/preview",
          "mindmap": "https://drive.google.com/file/d/1qxAiO3MpgwL0JhO65M_nRp9uJdGBX27b/preview",
          "ai": ""
        }
      },
      {
        "id": 43,
        "title": "Modul 43: Klausul 8.4.2 Jenis dan Tingkat Pengendalian",
        "links": {
          "slide": "https://drive.google.com/file/d/1DMN8OiI84yWqJew_T_ZfS9co4oXSDAKM/preview",
          "podcast": "https://drive.google.com/file/d/13MCLP0vBHtDwbeSCXx1XQxdhtg-cLfUp/preview",
          "infografis": "https://drive.google.com/file/d/1gd5VWqhi8iJaVDVYbZ4VTQSfR9wKDQ2e/preview",
          "mindmap": "https://drive.google.com/file/d/1Cs8iNzda5NUAsUgq9hBiTNM29ylq0UVN/preview",
          "ai": ""
        }
      },
      {
        "id": 44,
        "title": "Modul 44: Klausul 8.4.3 Informasi Penyedia Eksternal",
        "links": {
          "slide": "https://drive.google.com/file/d/1zD40Uoqtz86eWdccfYozUg2Tla764jm2/preview",
          "podcast": "https://drive.google.com/file/d/1MXd_YE21BNCVHIPSjdQZYCd3AfuHq3Ze/preview",
          "infografis": "https://drive.google.com/file/d/1eDxKECUVdit5kxMN4bQRO3no_z1CwV_z/preview",
          "mindmap": "https://drive.google.com/file/d/1BIpGkSTd3TGHdVIRgR7uuJtAWNYE_jT2/preview",
          "ai": ""
        }
      },
      {
        "id": 45,
        "title": "Modul 45: Klausul 8.5.1 Pengendalian Produksi dan Penyediaan Jasa",
        "links": {
          "slide": "https://drive.google.com/file/d/1QcGl0F1LXvutmW0GRzqvpxJJjPktakgk/preview",
          "podcast": "https://drive.google.com/file/d/1o4SrP2IcbJz88NQ6-5wrOj3okg3pVjDT/preview",
          "infografis": "https://drive.google.com/file/d/1GqqFBrUtyCpbvpmzOjTPler0NOT9nZZL/preview",
          "mindmap": "https://drive.google.com/file/d/1HiU-Sb0YwijqnhjvlGT_3PwYjmmK2JwB/preview",
          "ai": ""
        }
      },
      {
        "id": 46,
        "title": "Modul 46: Klausul 8.5.2 Identifikasi dan Mampu Telusur",
        "links": {
          "slide": "https://drive.google.com/file/d/1-r6gXtunZoQ7Pq3ME1VnfaozNsBcSPQq/preview",
          "podcast": "https://drive.google.com/file/d/1WLIeCjHaYe5aNvsqwhgObfWso0yDOdqV/preview",
          "infografis": "https://drive.google.com/file/d/11ZY3sQRnmaVpRHENXgvHFdB98fYLte7r/preview",
          "mindmap": "https://drive.google.com/file/d/1J03C08kov3rftbtTzuwcfPlX479rgR7D/preview",
          "ai": ""
        }
      },
      {
        "id": 47,
        "title": "Modul 47: Klausul 8.5.3 Kepemilikan Pelanggan Penyedia Eksternal",
        "links": {
          "slide": "https://drive.google.com/file/d/18ckfkaaBGSmWLAjcgyhBjsWok2vn_1dR/preview",
          "podcast": "https://drive.google.com/file/d/11-Yj5_rqKH7Mbco7MG6KpTTKsp0wx98L/preview",
          "infografis": "https://drive.google.com/file/d/1pdyImMXSWOA_92z3rBCqodn8wPEg3EGf/preview",
          "mindmap": "https://drive.google.com/file/d/1yIgwC2RAQAc2c3np8u8TdoPWhsY_EYGb/preview",
          "ai": ""
        }
      },
      {
        "id": 48,
        "title": "Modul 48: Klausul 8.5.4 Perlindungan",
        "links": {
          "slide": "https://drive.google.com/file/d/102PsVeS5IV4F6fziLwjMb6WRtd2-lfep/preview",
          "podcast": "https://drive.google.com/file/d/1pFhRtmJHAJICuznbFGxzD83QOAAboBgX/preview",
          "infografis": "https://drive.google.com/file/d/1IOCagDhpRD5GyPIqtOKDLrPq-iGInqcq/preview",
          "mindmap": "https://drive.google.com/file/d/1vhzibiUpsMFSQBSox_jSZjhS8NPhFOmA/preview",
          "ai": ""
        }
      },
      {
        "id": 49,
        "title": "Modul 49: Klausul 8.5.5 Kegiatan Pasca Pengiriman",
        "links": {
          "slide": "https://drive.google.com/file/d/15bZwiFv9Xmr9obAG10h4RQ8v37mc3XRK/preview",
          "podcast": "https://drive.google.com/file/d/1nvHDrmw1e0wx0idHE2evj-Ix7KYFyBhL/preview",
          "infografis": "https://drive.google.com/file/d/1cxLcvFFYZcCDqnnNuVKbMClGbH7rPa_a/preview",
          "mindmap": "https://drive.google.com/file/d/1fDgfaNOZrmGT1WE37ONTUS9JWLkn0MQo/preview",
          "ai": ""
        }
      },
      {
        "id": 50,
        "title": "Modul 50: Klausul 8.5.6 Pengendalian Perubahan",
        "links": {
          "slide": "https://drive.google.com/file/d/1KtDWGgIbB0FVWSv2OW25ppYLslKb3BHX/preview",
          "podcast": "https://drive.google.com/file/d/1BaY7OGoDfGul7AD2H2Ob-ETiSmQUVYzt/preview",
          "infografis": "https://drive.google.com/file/d/1F5Km-w8FGV1t08z6jJZStwnxNYRvu-EG/preview",
          "mindmap": "https://drive.google.com/file/d/1dQUomssiN9G_MTOSW7uZqO7QNfB9XdIS/preview",
          "ai": ""
        }
      },
      {
        "id": 51,
        "title": "Modul 51: Klausul 8.6 Pelepasan Produk dan Jasa",
        "links": {
          "slide": "https://drive.google.com/file/d/1V4tbOyl3bWTCwB3p6zSiPdyrEuSA6z1d/preview",
          "podcast": "https://drive.google.com/file/d/1IRW4QAZemAvWAtqMxuyVolnJ2PQMdxG_/preview",
          "infografis": "https://drive.google.com/file/d/1LSvGfxQPo_tb1ggL4N--ydvVAb1K-dhl/preview",
          "mindmap": "https://drive.google.com/file/d/1RaLEhO_wbEmfnU1keRuABXp06CzdIrKP/preview",
          "ai": ""
        }
      },
      {
        "id": 52,
        "title": "Modul 52: Klausul 8.7 Pengendalian Keluaran Tidak Sesuai",
        "links": {
          "slide": "https://drive.google.com/file/d/153gdorDbq5n_EheAdCCXrTcSedZnZXfR/preview",
          "podcast": "https://drive.google.com/file/d/1o-Ny9X5TB98QnkSZojbMj5HFLljLTujd/preview",
          "infografis": "https://drive.google.com/file/d/1fji4utYS8i6QG_uIhoRQP7juOf3pzrhs/preview",
          "mindmap": "https://drive.google.com/file/d/1wSfcVwe1V6Qx7IQz9O0OziFBDomsW3MS/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 7,
    "title": "7. Klausul 9 : Performance Evaluation (Evaluasi Kinerja)",
    "modules": [
      {
        "id": 53,
        "title": "Modul 53: Klausul 9.1.1 Pemantauan Pengukuran Analisis Evaluasi",
        "links": {
          "slide": "https://drive.google.com/file/d/1peNLTHw--lwKGFDDR1yMoM81lr9yffsV/preview",
          "podcast": "https://drive.google.com/file/d/1zKSFUcFouEFqHJt_bnXTWKSetE4SOJct/preview",
          "infografis": "https://drive.google.com/file/d/1igh_V_5AEqq6Of0YFJdRP8kwsYNAk0Bh/preview",
          "mindmap": "https://drive.google.com/file/d/1mDxzWaXevDXqGLlM03PdQihS6RLdQUG_/preview",
          "ai": ""
        }
      },
      {
        "id": 54,
        "title": "Modul 54: Klausul 9.1.2 Kepuasan Pelanggan",
        "links": {
          "slide": "https://drive.google.com/file/d/1lkKnkbWSK8BYGUPM08223pJLdljaPwV_/preview",
          "podcast": "https://drive.google.com/file/d/1wlYy_2q2jnuxkNoCYmsq3ixF4FRz2Dqm/preview",
          "infografis": "https://drive.google.com/file/d/1MVhnjvfpeEpC3s784Zez3busVhpAOlVt/preview",
          "mindmap": "https://drive.google.com/file/d/1ilZZu8auQInLKxUXAcUPzbLMqiUzBFr-/preview",
          "ai": ""
        }
      },
      {
        "id": 55,
        "title": "Modul 55: Klausul 9.1.3 Analisis dan Evaluasi",
        "links": {
          "slide": "https://drive.google.com/file/d/1bR6vAfi_xyI7EqXglP2IJWipc8ovorUX/preview",
          "podcast": "https://drive.google.com/file/d/1W4GO5-RtPADlXfV-J2oGRcFqaQ90wDSP/preview",
          "infografis": "https://drive.google.com/file/d/1C5gX0rFunzmBUXqMONhHw_RjBkbfRJvn/preview",
          "mindmap": "https://drive.google.com/file/d/1nDzwEn8LhvQ-xN4S8uxoZw0vu5xLaPiq/preview",
          "ai": ""
        }
      },
      {
        "id": 56,
        "title": "Modul 56: Klausul 9.2 Audit Internal",
        "links": {
          "slide": "https://drive.google.com/file/d/1JHUyRw7uWfNTZlwsQBwgc4Gi_DQ2g78_/preview",
          "podcast": "https://drive.google.com/file/d/16kue5QeXrNWrRf_ghyOwHk15G_w0Ec6B/preview",
          "infografis": "https://drive.google.com/file/d/1z5IstJXprFmfiCNsbx-ZYOeTaDNmUD0Q/preview",
          "mindmap": "https://drive.google.com/file/d/1yo4A2M6AI57w8NG6zZXap_q1LOPyWWO-/preview",
          "ai": ""
        }
      },
      {
        "id": 57,
        "title": "Modul 57: Klausul 9.3.1 Tinjauan Manajemen - Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/1szXeQ2d0A4KkvbWKhoLpkgfcmYNmG9r4/preview",
          "podcast": "https://drive.google.com/file/d/1VLrOedOvM6CyDxTEtynVGJIspiCSDN5k/preview",
          "infografis": "https://drive.google.com/file/d/1-_PHy2ZKGOU5xmVEPruwutKapwCbeZ3R/preview",
          "mindmap": "https://drive.google.com/file/d/1p88vqYAM6T9oRMRZfer0WQkjxyrCFVms/preview",
          "ai": ""
        }
      },
      {
        "id": 58,
        "title": "Modul 58: Klausul 9.3.2 Masukan Tinjauan Manajemen",
        "links": {
          "slide": "https://drive.google.com/file/d/1iTRkPfQxYNYHQzsZ5Gf3L83d4ENC_hCe/preview",
          "podcast": "https://drive.google.com/file/d/12ohpRlbqF3UMEhnhJpN08tHtgsrC84A4/preview",
          "infografis": "https://drive.google.com/file/d/1WEv_Nt3HfxiSkT0yQ30L455dGJ1zk2TY/preview",
          "mindmap": "https://drive.google.com/file/d/1CCCd1mBn5ykBfvyIlJDC7XrFUmqe_I5B/preview",
          "ai": ""
        }
      },
      {
        "id": 59,
        "title": "Modul 59: Klausul 9.3.3 Keluaran Tinjauan Manajemen",
        "links": {
          "slide": "https://drive.google.com/file/d/1MMnR5hU8kmQtY5qF6Jkhl5LiL8erErsE/preview",
          "podcast": "https://drive.google.com/file/d/1ZBbJy7pNWa_nw8Hb_hVcoWMS6vgOLEia/preview",
          "infografis": "https://drive.google.com/file/d/1UyH_AjELdtV6oiCBYJFBGphuaJ9O2Azf/preview",
          "mindmap": "https://drive.google.com/file/d/1F8lgVwr-VSlhDzEsnk7PgYkYDGc4cO1l/preview",
          "ai": ""
        }
      }
    ]
  },
  {
    "id": 8,
    "title": "8. Klausul 10 : Improvement (Peningkatan)",
    "modules": [
      {
        "id": 60,
        "title": "Modul 60: Klausul 10.1 Peningkatan Umum",
        "links": {
          "slide": "https://drive.google.com/file/d/10hNK72Eqpy-uIKY5ixrdAyqePOehveUH/preview",
          "podcast": "https://drive.google.com/file/d/1cOIgey_KSqIwbOzGCuCj4tcd0zSDFvuW/preview",
          "infografis": "https://drive.google.com/file/d/1oMB0_ydOQfMaPjXkvVjc4-jHrf229Xzw/preview",
          "mindmap": "https://drive.google.com/file/d/1xXF9RPU7dsw-U8J3BjOZtfLYTizS6yBN/preview",
          "ai": ""
        }
      },
      {
        "id": 61,
        "title": "Modul 61: Klausul 10.2 Ketidaksesuaian Tindakan Korektif",
        "links": {
          "slide": "https://drive.google.com/file/d/1Ez0kYcNEohIMr52GMWnuZJ1VCI7XKd3C/preview",
          "podcast": "https://drive.google.com/file/d/1GChgXWXD9bQxntrmvRE87elAbh4j2mTg/preview",
          "infografis": "https://drive.google.com/file/d/15evQwyBflKXMO-qW5uaUGJRgTHzK-CK4/preview",
          "mindmap": "https://drive.google.com/file/d/11tFFDdO0XmI2FzEt80DQ_Z_o5k_b-yOg/preview",
          "ai": ""
        }
      },
      {
        "id": 62,
        "title": "Modul 62: Klausul 10.3 Peningkatan Berkesinambungan",
        "links": {
          "slide": "https://drive.google.com/file/d/1HBOaYI6Zt58c_O9nV2sjAimj4g1yjuzx/preview",
          "podcast": "https://drive.google.com/file/d/1Qcr79muFbytJnL6LFy5KmkXsldhsJa6H/preview",
          "infografis": "https://drive.google.com/file/d/1pBpm66p_XK0voopzwqlBUQb_xXN1coqa/preview",
          "mindmap": "https://drive.google.com/file/d/1i7WHinzDQtHTMzhXC2SExcpJLvBuOMdx/preview",
          "ai": ""
        }
      }
    ]
  }
];
