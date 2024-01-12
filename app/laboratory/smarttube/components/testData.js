// testData.js
export const testData = {
    front: [
      {
        category: "HEMATOLOGY",
        subcategories: [
          {
            name: "Hematology - General",
            tests: [
              { id: "fbc", name: "Full Blood Count" },
              { id: "cbc", name: "Protein C" },
              { id: "bloodSmear", name: "Prothrombin Time ( PT ) INR" },
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
              { id: "antiToxoplasmaIgg", name: "Anti Toxoplasma IGG" },
            ],
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
      {
        category: "urine",
        subcategories: [
          {
            name: "Tumor Marker",
            tests: [
              { id: "afp", name: "AFP" },
              { id: "hbsag", name: "HBSAG" },
              { id: "antiToxoplasmaIgg", name: "Anti Toxoplasma IGG" },
            ],
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
    ],
  };
  