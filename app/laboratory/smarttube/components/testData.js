// testData.js
export const testData = {
    front: [
      {
        category: "HEMATOLOGY",
        subcategories: [
          {
            name: "Hematology - General",
            tests: [
              { id: "10", name: "FULL BLOOD COUNT" },
              { id: "cbc", name: "COMPLETE BLOOD COUNT" },
              { id: "bloodSmear", name: "RETICULOCYTE COUNT" },
            ],
          },
        ],
      },
    ],
    back: [
      {
        category: "SEROLOGY",
        subcategories: [
          {
            name: "Tumor Marker",
            tests: [
              { id: "afp", name: "AFP" },
              { id: "hbsag", name: "HBSAG" },
              { id: "antiToxoplasmaIgg", name: "ANTI TOXOPLASMA IGG" },
            ],
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
      // ...Tambahkan category lainnya sesuai kebutuhan
    ],
  };
  