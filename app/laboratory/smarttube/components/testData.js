export const testData = {
  front: [
    {
      category: "CATEGORY 1",
      subcategories: [
        {
          name: "Hematology - General",
          tests: [
            { id: "01", codeTube: "30", result: "2 HOURS", name: "FULL BLOOD COUNT", price: 200000, keterangan: "" },
            { id: "02", codeTube: "30", result: "2 HOURS", name: "COMPLETE BLOOD COUNT", price: 200000, keterangan: "" },
            { id: "03", codeTube: "30", result: "2 HOURS", name: "CHOLESTEROL", price: 200000, keterangan: "FASTING 10-12 HOURS" },
          ],
        },
      ],
    },
    {
      category: "CATEGORY 2",
      subcategories: [
        {
          name: "HEART FUNCTION TEST",
          tests: [
            { id: "011", codeTube: "40", result: "2 HOURS", name: "VON WILLBRAND FACTOR", price: 250000, keterangan: "Some details" },
            { id: "012", codeTube: "40", result: "2 HOURS", name: "FACTOR VII ASSAY", price: 250000, keterangan: "Some details" },
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
            { id: "04", codeTube: "10", result: "2 HOURS", name: "AFP", price: 200000, keterangan: "" },
            { id: "05", codeTube: "10", result: "2 HOURS", name: "HBSAG", price: 200000, keterangan: "" },
            { id: "06", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IGG", price: 200000, keterangan: "" },
          ],
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        },
        // ...Tambahkan subkategori lainnya sesuai kebutuhan
      ],
    },
    // ...Tambahkan category lainnya sesuai kebutuhan
  ],
};
