export const testData = {
  front: [
    {
      category: "HEMATOLOGY",
      subcategories: [
        {
          name: "Hematology - General",
          tests: [
            { id: "01", codeTube: "30", result: "2 HOURS", name: "FULL BLOOD COUNT", price: 200000, keterangan:"" },
            { id: "02", codeTube: "30", result: "2 HOURS", name: "COMPLETE BLOOD COUNT", price: 200000,keterangan:"" },
            { id: "03", codeTube: "30", result: "2 HOURS", name: "CHOLESTEROL", price: 200000, keterangan:"FASTING 10-12 HOURS" },
          ],
        },
      ],
    },
    {
      category: "BLOOD CHEMISTRY",
      subcategories: [
        {
          name: "HEART FUNCTION TEST",
          tests: [
            { id: "01", codeTube: "30", result: "2 HOURS", name: "FULL BLOOD COUNT", price: 200000, keterangan:"" },
            { id: "02", codeTube: "30", result: "2 HOURS", name: "COMPLETE BLOOD COUNT", price: 200000,keterangan:"" },
            { id: "03", codeTube: "30", result: "2 HOURS", name: "CHOLESTEROL", price: 200000, keterangan:"FASTING 10-12 HOURS" },
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
            { id: "04", codeTube: "10", result: "2 HOURS", name: "AFP", price: 200000, keterangan:"" },
            { id: "05", codeTube: "10", result: "2 HOURS", name: "HBSAG", price: 200000, keterangan:"" },
            { id: "06", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IGG", price: 200000, keterangan:"" },
          ],
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        },
        // ...Tambahkan subkategori lainnya sesuai kebutuhan
      ],
    },
    // ...Tambahkan category lainnya sesuai kebutuhan
  ],
};
