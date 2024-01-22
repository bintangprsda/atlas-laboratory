export const testData = {
  front: [
    {
      category: "HEMATOLOGY",
      subcategories: [
        {
          name: "Hematology - General",
          tests: [
            { id: "01", codeTube: "30", name: "FULL BLOOD COUNT", price: 200000 },
            { id: "02", codeTube: "30", name: "COMPLETE BLOOD COUNT", price: 200000 },
            { id: "03", codeTube: "30", name: "RETICULOCYTE COUNT", price: 200000 },
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
            { id: "04", codeTube: "10", name: "AFP", price: 200000 },
            { id: "05", codeTube: "10", name: "HBSAG", price: 200000 },
            { id: "06", codeTube: "10", name: "ANTI TOXOPLASMA IGG", price: 200000 },
          ],
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        },
        // ...Tambahkan subkategori lainnya sesuai kebutuhan
      ],
    },
    // ...Tambahkan category lainnya sesuai kebutuhan
  ],
};
