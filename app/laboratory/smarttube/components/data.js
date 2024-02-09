export const testData = {
    front: [
      {
        category: "HEMATOLOGY",
        subcategories: [
          {
            name: "HEMATOLOGY - GENERAL",
            tests: [
              { id: "01", codeTube: "30", result: "2 HOURS", name: "COMPLETE BLOOD COUNT", price: 200000, keterangan:"" },
              { id: "02", codeTube: "30", result: "2 HOURS", name: "FULL BLOOD COUNT", price: 200000, keterangan:"" },
              { id: "03", codeTube: "30", result: "2 HOURS", name: "RETICULOCYTE COUNT", price: 200000, keterangan:"FASTING 10-12 HOURS" },
              { id: "04", codeTube: "30", result: "2 HOURS", name: "EOSINOPHIL COUNT", price: 200000, keterangan:"" },
              { id: "05", codeTube: "30", result: "2 HOURS", name: "BLOOD SMEAR MORPHOLOGY", price: 200000, keterangan:"" },
              { id: "06", codeTube: "30", result: "2 HOURS", name: "LED- ERYTHROCYTE SEDIMENTATION RATE (ESR)", price: 200000, keterangan:"" },
            ],
          },
          // New subcategory added here
          {
            name: "HEMATOLOGY - COAGULATION",
            tests: [
              // Add tests for this subcategory here
              { id: "07", codeTube: "40", result: "2 HOURS", name: "AT III", price: 250000, keterangan: "Some details" },
              { id: "08", codeTube: "40", result: "2 HOURS", name: "ANTI XA", price: 250000, keterangan: "Some details" },
              { id: "09", codeTube: "40", result: "2 HOURS", name: "PROTEIN C", price: 250000, keterangan: "Some details" },
              { id: "010", codeTube: "40", result: "2 HOURS", name: "PROTEIN S", price: 250000, keterangan: "Some details" },
              { id: "011", codeTube: "40", result: "2 HOURS", name: "VON WILLBRAND FACTOR", price: 250000, keterangan: "Some details" },
              { id: "012", codeTube: "40", result: "2 HOURS", name: "FACTOR VII ASSAY", price: 250000, keterangan: "Some details" },
              { id: "013", codeTube: "40", result: "2 HOURS", name: "FACTOR IX ASSAY", price: 250000, keterangan: "Some details" },
              { id: "014", codeTube: "40", result: "2 HOURS", name: "BLEEDING TIME (BT)", price: 250000, keterangan: "Some details" },
              // More tests can be added here
            ],
          },
          // You can add more subcategories here
          {
            name: "HEMATOLOGY - COAGULATION",
            tests: [
              // Add tests for this subcategory here
              { id: "015", codeTube: "40", result: "2 HOURS", name: "PROTHOMBIN TIME (PT)-INR", price: 250000, keterangan: "" },
              { id: "016", codeTube: "40", result: "2 HOURS", name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME (APTT)", price: 250000, keterangan: "" },
              { id: "017", codeTube: "40", result: "2 HOURS", name: "THROMBIN TIME (TT)", price: 250000, keterangan: "" },
              { id: "018", codeTube: "40", result: "2 HOURS", name: "SERIAL THROMBINE TIME (STT)", price: 250000, keterangan: "" },
              { id: "019", codeTube: "40", result: "2 HOURS", name: "FIBRINOGEN", price: 250000, keterangan: "" },
              { id: "020", codeTube: "40", result: "2 HOURS", name: "D-DIMER", price: 250000, keterangan: "" },
              { id: "021", codeTube: "45", result: "2 HOURS", name: "TAT-PLATELET AGGREGATION TEST", price: 250000, keterangan: "" },
              // More tests can be added here
            ],
          },
          {
            name: "HEMATOLOGY - SPECIFIC",
            tests: [
              // Add tests for this subcategory here
              { id: "022", codeTube: "40", result: "2 HOURS", name: "MALARIA", price: 250000, keterangan: "" },
              { id: "023", codeTube: "40", result: "2 HOURS", name: "MALARIA RAPID (ICT)", price: 250000, keterangan: "" },
              { id: "024", codeTube: "40", result: "2 HOURS", name: "BLOOD TYPE & RHESUS", price: 250000, keterangan: "" },
              { id: "025", codeTube: "40", result: "2 HOURS", name: "G6PD SCREENING (NEONATES )", price: 250000, keterangan: "" },
              { id: "026", codeTube: "40", result: "2 HOURS", name: "G6PD (ERYTHROCYTE) KUANTITATIVE", price: 250000, keterangan: "" },
              { id: "027", codeTube: "40", result: "2 HOURS", name: "COOMB TEST", price: 250000, keterangan: "" },
              { id: "028", codeTube: "40", result: "2 HOURS", name: "LE CELL", price: 250000, keterangan: "" },
              { id: "029", codeTube: "40", result: "2 HOURS", name: "OSMOTIC RESISTANCE", price: 250000, keterangan: "" },
              { id: "030", codeTube: "40", result: "2 HOURS", name: "LYMPHOCYTE T HELPER (CD4)", price: 250000, keterangan: "" },
              { id: "031", codeTube: "40", result: "2 HOURS", name: "LYMPHOCYTE T HELPER (CD8)", price: 250000, keterangan: "" },
              { id: "032", codeTube: "40", result: "2 HOURS", name: "LYMPHOCYTE SUBSET", price: 250000, keterangan: "" },
              // More tests can be added here
            ],
          },
          {
            name: "HEMATOLOGY - SPECIFIC",
            tests: [
              // Add tests for this subcategory here
              { id: "033", codeTube: "40", result: "2 HOURS", name: "BMP MORPHOLOGY", price: 250000, keterangan: "" },
              { id: "034", codeTube: "40", result: "2 HOURS", name: "HB ELECTROPHORESIS/ HB ANALYSIS", price: 250000, keterangan: "" },
              { id: "035", codeTube: "40", result: "2 HOURS", name: "I/T RATIO", price: 250000, keterangan: "" },
              { id: "036", codeTube: "40", result: "2 HOURS", name: "LEUKEMIA PHENOTYPING", price: 250000, keterangan: "" },
              { id: "037", codeTube: "40", result: "2 HOURS", name: "CHROMOSOME ANALYSIS(AMNIOTIC FLUID)", price: 250000, keterangan: "" },
              { id: "038", codeTube: "40", result: "2 HOURS", name: "", price: 250000, keterangan: "" },
              { id: "039", codeTube: "40", result: "2 HOURS", name: "", price: 250000, keterangan: "" },
              { id: "040", codeTube: "40", result: "2 HOURS", name: "", price: 250000, keterangan: "" },
              { id: "041", codeTube: "40", result: "2 HOURS", name: "", price: 250000, keterangan: "" },
              { id: "042", codeTube: "40", result: "2 HOURS", name: "", price: 250000, keterangan: "" },
              
            ],
          },
          {
            name: "HEMATOLOGY - SPECIFIC",
            tests: [
              // Add tests for this subcategory here
              { id: "043", codeTube: "40", result: "2 HOURS", name: "THROMBOCYTE ANTIBODY (PLATELET ANTIBODY)", price: 250000, keterangan: "" },
              { id: "044", codeTube: "10", result: "2 HOURS", name: "SI-TIBC", price: 250000, keterangan: "" },
              { id: "045", codeTube: "10", result: "2 HOURS", name: "FERRITIN", price: 250000, keterangan: "" },
              { id: "046", codeTube: "10", result: "2 HOURS", name: "TRANSFERIN", price: 250000, keterangan: "" },
              { id: "047", codeTube: "10", result: "2 HOURS", name: "VITAMIN B12", price: 250000, keterangan: "" },
              { id: "048", codeTube: "10", result: "2 HOURS", name: "FOLIC ACID", price: 250000, keterangan: "" },
              { id: "049", codeTube: "40", result: "2 HOURS", name: "P2Y12 TEST", price: 250000, keterangan: "" },
              { id: "050", codeTube: "40", result: "2 HOURS", name: "ASPIRIN TEST", price: 250000, keterangan: "" },
              
            ],
          },
        ],
      },
      // You can add more categories in front array here
      {
        category: "BLOOD CHEMISTRY",
        subcategories: [
          {
            name: "HEART FUNCTION TEST",
            tests: [
              { id: "0", codeTube: "10", result: "2 HOURS", name: "CK", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "CK-MB", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TROPONIN T HS", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TROPONIN I QUANTITATIVE", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "HOMOCYSTEINE", price: 200000, keterangan:"" },
              { id: "0", codeTube: "30", result: "2 HOURS", name: "NT-PROBNP", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "MYOGLOBIN", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "CRP HIGH SENSITIVE", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "GLUCOSE",
            tests: [
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLUCOSE AD RANDOM", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLUCOSE FASTING", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLUCOSE 2 HOURS POST PRANDIAL", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLUCOSE DAILY CURVE (GDC)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLUCOSE TOLERANCE TEST (GTT)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "30", result: "2 HOURS", name: "GLYCO Hb (HbA1C)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "FRUCTOSAMINE", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GLYCATED ALBUMIN", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "BLOOD KETON", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "LIPID TEST",
            tests: [
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TOTAL CHOLESTEROL", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "LDL-CHOLESTROL DIRECT", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "HDL-CHOLESTROL DIRECT", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TRIGLISERIDA", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "RATIO CHOLESTROL TOTAL/HDL", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TOTAL LIPID", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "APO-A", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "APO-B", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "LP (a)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "SMALL-DENSE LDL", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "ADIPONECTIN", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "LIVER FUNCTION TEST",
            tests: [
              { id: "0", codeTube: "10", result: "2 HOURS", name: "BILIRUBIN TOTAL / DIRECT / INDIRECT", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "BILIRUBIN NEONATUS", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "SGOT / AST ", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "SGPT / ALT ", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "ALKALINE PHOSPHATASE", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "GAMMA GT (GGT)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "ALBUMIN", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "TOTAL PROTEIN/ ALB / GLOB", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "CHOLINESTERASE (CHE)", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "BILE ACID", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "PROTEIN ELECTROPHORESIS", price: 200000, keterangan:"" },
              { id: "0", codeTube: "10", result: "2 HOURS", name: "PROTEIN IMMUNOFIXATION", price: 200000, keterangan:"" },
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
              { id: "333", codeTube: "10", result: "2 HOURS", name: "AFP", price: 200000, keterangan:"" },
              { id: "111", codeTube: "10", result: "2 HOURS", name: "HBSAG", price: 200000, keterangan:"" },
              { id: "222", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IGG", price: 200000, keterangan:"" },
            ],
          },
          // More subcategories can be added here
        ],
      },
      // More categories can be added to the back array here
    ],
  };
  