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
            name: "HEMATOLOGY - COAGULATION ",
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
            name: "HEMATOLOGY - SPECIFIC ",
            tests: [
              // Add tests for this subcategory here
              { id: "033", codeTube: "40", result: "2 HOURS", name: "BMP MORPHOLOGY", price: 250000, keterangan: "" },
              { id: "034", codeTube: "40", result: "2 HOURS", name: "HB ELECTROPHORESIS/ HB ANALYSIS", price: 250000, keterangan: "" },
              { id: "035", codeTube: "40", result: "2 HOURS", name: "I/T RATIO", price: 250000, keterangan: "" },
              { id: "036", codeTube: "40", result: "2 HOURS", name: "LEUKEMIA PHENOTYPING", price: 250000, keterangan: "" },
              { id: "037", codeTube: "40", result: "2 HOURS", name: "CHROMOSOME ANALYSIS(AMNIOTIC FLUID)", price: 250000, keterangan: "" },
              { id: "038", codeTube: "40", result: "2 HOURS", name: "CHROMOSOME ANALYSIS (BLOOD)", price: 250000, keterangan: "" },
              { id: "039", codeTube: "40", result: "2 HOURS", name: "PATERNITY TEST ANALYSIS (AMNIOTIC FLUID)", price: 250000, keterangan: "" },
              { id: "040", codeTube: "40", result: "2 HOURS", name: "PATERNITY TEST ANALYSIS (BLOOD)", price: 250000, keterangan: "" },
              { id: "041", codeTube: "40", result: "2 HOURS", name: "DNA ANALYSIS FOR THALASSEMIA", price: 250000, keterangan: "" },
              { id: "042", codeTube: "40", result: "2 HOURS", name: "PANEL SCREENING THALASSEMIA (FBC, GDT, HB, EF, SI-TIBC, FERRITIN)", price: 250000, keterangan: "" },
              
            ],
          },
          {
            name: "HEMATOLOGY - SPECIFIC  ",
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
              { id: "051", codeTube: "10", result: "2 HOURS", name: "CK", price: 200000, keterangan:"" },
              { id: "052", codeTube: "10", result: "2 HOURS", name: "CK-MB", price: 200000, keterangan:"" },
              { id: "053", codeTube: "10", result: "2 HOURS", name: "TROPONIN T HS", price: 200000, keterangan:"" },
              { id: "054", codeTube: "10", result: "2 HOURS", name: "TROPONIN I QUANTITATIVE", price: 200000, keterangan:"" },
              { id: "055", codeTube: "10", result: "2 HOURS", name: "HOMOCYSTEINE", price: 200000, keterangan:"" },
              { id: "056", codeTube: "30", result: "2 HOURS", name: "NT-PROBNP", price: 200000, keterangan:"" },
              { id: "057", codeTube: "10", result: "2 HOURS", name: "MYOGLOBIN", price: 200000, keterangan:"" },
              { id: "058", codeTube: "10", result: "2 HOURS", name: "CRP HIGH SENSITIVE", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "GLUCOSE",
            tests: [
              { id: "059", codeTube: "10", result: "2 HOURS", name: "GLUCOSE AD RANDOM", price: 200000, keterangan:"" },
              { id: "060", codeTube: "10", result: "2 HOURS", name: "GLUCOSE FASTING", price: 200000, keterangan:"" },
              { id: "061", codeTube: "10", result: "2 HOURS", name: "GLUCOSE 2 HOURS POST PRANDIAL", price: 200000, keterangan:"" },
              { id: "062", codeTube: "10", result: "2 HOURS", name: "GLUCOSE DAILY CURVE (GDC)", price: 200000, keterangan:"" },
              { id: "063", codeTube: "10", result: "2 HOURS", name: "GLUCOSE TOLERANCE TEST (GTT)", price: 200000, keterangan:"" },
              { id: "064", codeTube: "30", result: "2 HOURS", name: "GLYCO Hb (HbA1C)", price: 200000, keterangan:"" },
              { id: "065", codeTube: "10", result: "2 HOURS", name: "FRUCTOSAMINE", price: 200000, keterangan:"" },
              { id: "066", codeTube: "10", result: "2 HOURS", name: "GLYCATED ALBUMIN", price: 200000, keterangan:"" },
              { id: "067", codeTube: "10", result: "2 HOURS", name: "BLOOD KETON", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "LIPID TEST",
            tests: [
              { id: "068", codeTube: "10", result: "2 HOURS", name: "TOTAL CHOLESTEROL", price: 200000, keterangan:"" },
              { id: "069", codeTube: "10", result: "2 HOURS", name: "LDL-CHOLESTROL DIRECT", price: 200000, keterangan:"" },
              { id: "070", codeTube: "10", result: "2 HOURS", name: "HDL-CHOLESTROL DIRECT", price: 200000, keterangan:"" },
              { id: "071", codeTube: "10", result: "2 HOURS", name: "TRIGLISERIDA", price: 200000, keterangan:"" },
              { id: "072", codeTube: "10", result: "2 HOURS", name: "RATIO CHOLESTROL TOTAL/HDL", price: 200000, keterangan:"" },
              { id: "073", codeTube: "10", result: "2 HOURS", name: "TOTAL LIPID", price: 200000, keterangan:"" },
              { id: "074", codeTube: "10", result: "2 HOURS", name: "APO-A", price: 200000, keterangan:"" },
              { id: "075", codeTube: "10", result: "2 HOURS", name: "APO-B", price: 200000, keterangan:"" },
              { id: "076", codeTube: "10", result: "2 HOURS", name: "LP (a)", price: 200000, keterangan:"" },
              { id: "077", codeTube: "10", result: "2 HOURS", name: "SMALL-DENSE LDL", price: 200000, keterangan:"" },
              { id: "078", codeTube: "10", result: "2 HOURS", name: "ADIPONECTIN", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "LIVER FUNCTION TEST",
            tests: [
              { id: "079", codeTube: "10", result: "2 HOURS", name: "BILIRUBIN TOTAL / DIRECT / INDIRECT", price: 200000, keterangan:"" },
              { id: "080", codeTube: "10", result: "2 HOURS", name: "BILIRUBIN NEONATUS", price: 200000, keterangan:"" },
              { id: "081", codeTube: "10", result: "2 HOURS", name: "SGOT / AST ", price: 200000, keterangan:"" },
              { id: "082", codeTube: "10", result: "2 HOURS", name: "SGPT / ALT ", price: 200000, keterangan:"" },
              { id: "083", codeTube: "10", result: "2 HOURS", name: "ALKALINE PHOSPHATASE", price: 200000, keterangan:"" },
              { id: "084", codeTube: "10", result: "2 HOURS", name: "GAMMA GT (GGT)", price: 200000, keterangan:"" },
              { id: "085", codeTube: "10", result: "2 HOURS", name: "ALBUMIN", price: 200000, keterangan:"" },
              { id: "086", codeTube: "10", result: "2 HOURS", name: "TOTAL PROTEIN/ ALB / GLOB", price: 200000, keterangan:"" },
              { id: "087", codeTube: "10", result: "2 HOURS", name: "CHOLINESTERASE (CHE)", price: 200000, keterangan:"" },
              { id: "088", codeTube: "10", result: "2 HOURS", name: "BILE ACID", price: 200000, keterangan:"" },
              { id: "089", codeTube: "10", result: "2 HOURS", name: "PROTEIN ELECTROPHORESIS", price: 200000, keterangan:"" },
              { id: "090", codeTube: "10", result: "2 HOURS", name: "PROTEIN IMMUNOFIXATION", price: 200000, keterangan:"" },
            ],
            
          },
          {
            name: "PANCREAS FUNCTION TEST",
            tests: [
              { id: "091", codeTube: "10", result: "2 HOURS", name: "AMILASE PANCREATIC", price: 200000, keterangan:"" },
              { id: "092", codeTube: "10", result: "2 HOURS", name: "LIPASE", price: 200000, keterangan:"" },
              { id: "093", codeTube: "10", result: "2 HOURS", name: "INSULIN", price: 200000, keterangan:"" },
              { id: "094", codeTube: "10", result: "2 HOURS", name: "C-PEPTIDE", price: 200000, keterangan:"" },
            ],
            
          },
          {
            name: "DRUG MONITORING",
            tests: [
              { id: "095", codeTube: "10", result: "2 HOURS", name: "AMIKACIN", price: 200000, keterangan:"" },
              { id: "096", codeTube: "10", result: "2 HOURS", name: "AMINOPHYLLIN / THEOPHYLLIN", price: 200000, keterangan:"" },
              { id: "097", codeTube: "10", result: "2 HOURS", name: "CARBAMAZEPINE", price: 200000, keterangan:"" },
              { id: "098", codeTube: "10", result: "2 HOURS", name: "CYCLOSPORINE", price: 200000, keterangan:"" },
              { id: "099", codeTube: "10", result: "2 HOURS", name: "DIGOXIN", price: 200000, keterangan:"" },
              { id: "100", codeTube: "10", result: "2 HOURS", name: "PHENYTOIN", price: 200000, keterangan:"" },
              { id: "101", codeTube: "10", result: "2 HOURS", name: "PHENOBARBITAL", price: 200000, keterangan:"" },
              { id: "102", codeTube: "10", result: "2 HOURS", name: "VALPROIC ACID", price: 200000, keterangan:"" },
              { id: "103", codeTube: "10", result: "2 HOURS", name: "TACROLIMUS", price: 200000, keterangan:"" },
              { id: "104", codeTube: "10", result: "2 HOURS", name: "LACTIC ACID", price: 200000, keterangan:"" },
              { id: "105", codeTube: "10", result: "2 HOURS", name: "AMMONIA", price: 200000, keterangan:"" },
            ],
            
          },
          {
            name: "RENAL FUNCTION TEST",
            tests: [
              { id: "106", codeTube: "10", result: "2 HOURS", name: "UREUM", price: 200000, keterangan:"" },
              { id: "107", codeTube: "10", result: "2 HOURS", name: "CREATININ", price: 200000, keterangan:"" },
              { id: "108", codeTube: "10", result: "2 HOURS", name: "URIC ACID", price: 200000, keterangan:"" },
              { id: "109", codeTube: "10", result: "2 HOURS", name: "CYSTATIN C", price: 200000, keterangan:"" },
            ],
            
          },
          {
            name: "ELECTROLYTE & BLOOD GAS",
            tests: [
              { id: "110", codeTube: "10", result: "2 HOURS", name: "BLOOD GAS ANALYSIS", price: 200000, keterangan:"" },
              { id: "111", codeTube: "10", result: "2 HOURS", name: "ELECTROLYTE PACKAGE (Na, K, Cl)", price: 200000, keterangan:"" },
              { id: "112", codeTube: "10", result: "2 HOURS", name: "CALCIUM TOTAL", price: 200000, keterangan:"" },
              { id: "113", codeTube: "10", result: "2 HOURS", name: "CALCIUM ION", price: 200000, keterangan:"" },
              { id: "114", codeTube: "10", result: "2 HOURS", name: "PHOSPHOR ANORGANIC", price: 200000, keterangan:"" },
              { id: "115", codeTube: "10", result: "2 HOURS", name: "MAGNESIUM", price: 200000, keterangan:"" },
              { id: "116", codeTube: "10", result: "2 HOURS", name: "OSMOLARITY PLASMA", price: 200000, keterangan:"" },
            ],
            
          },
          {
            name: "OTHERS",
            tests: [
              { id: "117", codeTube: "10", result: "2 HOURS", name: "LACTIC ACID", price: 200000, keterangan:"" },
              { id: "118", codeTube: "10", result: "2 HOURS", name: "AMMONIA", price: 200000, keterangan:"" },
            ],
            
          },
        ],
      },
      {
        category: "IMMUNOLOGY",
        subcategories: [
          {
            name: "",
            tests: [
              { id: "119", codeTube: "10", result: "2 HOURS", name: "PANEL ALLERGY RI (54 PARAMATER)", price: 200000, keterangan:"" },
              { id: "120", codeTube: "10", result: "2 HOURS", name: "PANEL ALLERGY PEDIATRIC", price: 200000, keterangan:"" },
              { id: "121", codeTube: "10", result: "2 HOURS", name: "PANEL ALLERGY GENERAL I (INDONESIA)", price: 200000, keterangan:"" },
              { id: "122", codeTube: "10", result: "2 HOURS", name: "PANEL ALLERGY GENERAL II (FOOD)", price: 200000, keterangan:"" },
              { id: "123", codeTube: "10", result: "2 HOURS", name: "PANEL ALLERGY ATOPI CHINA", price: 200000, keterangan:"" },
            ],
          },
          // More subcategories can be added here
          {
            name: "",
            tests: [
              { id: "124", codeTube: "10", result: "2 HOURS", name: "IGA", price: 200000, keterangan:"" },
              { id: "125", codeTube: "10", result: "2 HOURS", name: "IGG", price: 200000, keterangan:"" },
              { id: "126", codeTube: "10", result: "2 HOURS", name: "IGM", price: 200000, keterangan:"" },
              { id: "127", codeTube: "10", result: "2 HOURS", name: "IGE TOTAL", price: 200000, keterangan:"" },
              { id: "128", codeTube: "10", result: "2 HOURS", name: "COMPLEMENT C3", price: 200000, keterangan:"" },
              { id: "129", codeTube: "10", result: "2 HOURS", name: "COMPLEMENT C4", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "",
            tests: [
              { id: "130", codeTube: "10", result: "2 HOURS", name: "ALPHA 2-MACROGLOBULIN", price: 200000, keterangan:"" },
              { id: "131", codeTube: "10", result: "2 HOURS", name: "HAPTOGLOBIN", price: 200000, keterangan:"" },
              { id: "132", codeTube: "10", result: "2 HOURS", name: "ANTI LEPTOSPIRA IgM", price: 200000, keterangan:"" },
              { id: "133", codeTube: "10", result: "2 HOURS", name: "IGRA - T.SPOT TB", price: 200000, keterangan:"" },
              { id: "134", codeTube: "10", result: "2 HOURS", name: "IGRA - QUANTIFERON", price: 200000, keterangan:"" },
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
            name: "TUMOR MARKER",
            tests: [
              { id: "135", codeTube: "10", result: "2 HOURS", name: "AFP (LEVER)", price: 200000, keterangan:"" },
              { id: "136", codeTube: "10", result: "2 HOURS", name: "CEA (COLON)", price: 200000, keterangan:"" },
              { id: "137", codeTube: "10", result: "2 HOURS", name: "CA-125(OVARIUM)", price: 200000, keterangan:"" },
              { id: "138", codeTube: "10", result: "2 HOURS", name: "CA 19-9 (PRANCREAS)", price: 200000, keterangan:"" },
              { id: "139", codeTube: "10", result: "2 HOURS", name: "CA 15-3 (BREAST)", price: 200000, keterangan:"" },
              { id: "140", codeTube: "10", result: "2 HOURS", name: "CA 72-4 (GASTER)", price: 200000, keterangan:"" },
              { id: "141", codeTube: "10", result: "2 HOURS", name: "ACID PHOSPHATASE (ACP)", price: 200000, keterangan:"" },
              { id: "142", codeTube: "10", result: "2 HOURS", name: "CYFRA 21-1 (LUNG)", price: 200000, keterangan:"" },
              { id: "143", codeTube: "10", result: "2 HOURS", name: "NSE (LUNG)", price: 200000, keterangan:"" },
              { id: "144", codeTube: "10", result: "2 HOURS", name: "SCC (CERVIX)", price: 200000, keterangan:"" },
              { id: "145", codeTube: "10", result: "2 HOURS", name: "PROSTATIC ACID PHOSPHATASE (PAP)", price: 200000, keterangan:"" },
              { id: "146", codeTube: "10", result: "2 HOURS", name: "PSA (PROSTATE)", price: 200000, keterangan:"" },
              { id: "147", codeTube: "10", result: "2 HOURS", name: "FREE PSA", price: 200000, keterangan:"" },
              { id: "148", codeTube: "10", result: "2 HOURS", name: "ANTI EBV-EA IgA", price: 200000, keterangan:"" },
              { id: "149", codeTube: "10", result: "2 HOURS", name: "ANTI EBV-VCA IgA", price: 200000, keterangan:"" },
              { id: "150", codeTube: "10", result: "2 HOURS", name: "ANTI EBV-EBNA IgA", price: 200000, keterangan:"" },
            ],
          },
          // More subcategories can be added here
          {
            name: "HEPATITIS MAKER",
            tests: [
              { id: "151", codeTube: "10", result: "2 HOURS", name: "HBsAg QUALITATIVE", price: 200000, keterangan:"" },
              { id: "152", codeTube: "10", result: "2 HOURS", name: "HBsAg QUANTITATIVE", price: 200000, keterangan:"" },
              { id: "153", codeTube: "10", result: "2 HOURS", name: "HBsAg CONFIRMATORY", price: 200000, keterangan:"" },
              { id: "154", codeTube: "10", result: "2 HOURS", name: "ANTI HBs", price: 200000, keterangan:"" },
              { id: "155", codeTube: "10", result: "2 HOURS", name: "ANTI HBc TOTAL", price: 200000, keterangan:"" },
              { id: "156", codeTube: "10", result: "2 HOURS", name: "ANTI HBc IgM", price: 200000, keterangan:"" },
              { id: "157", codeTube: "10", result: "2 HOURS", name: "ANTI HAV IgG", price: 200000, keterangan:"" },
              { id: "158", codeTube: "10", result: "2 HOURS", name: "ANTI HAV IgM", price: 200000, keterangan:"" },
              { id: "159", codeTube: "10", result: "2 HOURS", name: "ANTI HIV SCREENING", price: 200000, keterangan:"" },
              { id: "160", codeTube: "10", result: "2 HOURS", name: "ANTI HIV CONFIRMATORY (WESTERN BOT)", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "TORCH",
            tests: [
              { id: "161", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IgG", price: 200000, keterangan:"" },
              { id: "162", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IgM", price: 200000, keterangan:"" },
              { id: "163", codeTube: "10", result: "2 HOURS", name: "ANTI TOXOPLASMA IgG - AVIDITY", price: 200000, keterangan:"" },
              { id: "164", codeTube: "10", result: "2 HOURS", name: "ANTI RUBELLA IgG", price: 200000, keterangan:"" },
              { id: "165", codeTube: "10", result: "2 HOURS", name: "ANTI RUBELLA IgM", price: 200000, keterangan:"" },
              { id: "166", codeTube: "10", result: "2 HOURS", name: "ANTI CMV IgG", price: 200000, keterangan:"" },
              { id: "167", codeTube: "10", result: "2 HOURS", name: "ANTI CMV IgM", price: 200000, keterangan:"" },
              { id: "168", codeTube: "10", result: "2 HOURS", name: "ANTI CMV IgG - AVIDITY", price: 200000, keterangan:"" },
              { id: "169", codeTube: "10", result: "2 HOURS", name: "ANTI HSV I IgM", price: 200000, keterangan:"" },
              { id: "170", codeTube: "10", result: "2 HOURS", name: "ANTI HSV I IgG", price: 200000, keterangan:"" },
              { id: "171", codeTube: "10", result: "2 HOURS", name: "ANTI HSV II IgM", price: 200000, keterangan:"" },
              { id: "172", codeTube: "10", result: "2 HOURS", name: "ANTI HSV II IgG", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "SEROLOGY - GENERAL",
            tests: [
              { id: "173", codeTube: "10", result: "2 HOURS", name: "ANTI DENGUE IgG-M", price: 200000, keterangan:"" },
              { id: "174", codeTube: "10", result: "2 HOURS", name: "ANTI DENGUE IgA", price: 200000, keterangan:"" },
              { id: "175", codeTube: "10", result: "2 HOURS", name: "DENGUE ANTIGEN NS1", price: 200000, keterangan:"" },
              { id: "176", codeTube: "10", result: "2 HOURS", name: "WIDAL", price: 200000, keterangan:"" },
              { id: "177", codeTube: "10", result: "2 HOURS", name: "ANTI S. TYPHY IgM", price: 200000, keterangan:"" },
              { id: "178", codeTube: "10", result: "2 HOURS", name: "ANTI SALMONELLA (TUBEX)", price: 200000, keterangan:"" },
              { id: "179", codeTube: "10", result: "2 HOURS", name: "SERAMOEBA", price: 200000, keterangan:"" },
              { id: "180", codeTube: "10", result: "2 HOURS", name: "TPHA", price: 200000, keterangan:"" },
              { id: "181", codeTube: "10", result: "2 HOURS", name: "VDRL /RPR", price: 200000, keterangan:"" },
              { id: "182", codeTube: "10", result: "2 HOURS", name: "DENGUE DUO (ANTIGEN & ANTIBODY)", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "SEROLOGY - GENERAL",
            tests: [
              { id: "183", codeTube: "10", result: "2 HOURS", name: "ANTI MYCOPLASMA IgG", price: 200000, keterangan:"" },
              { id: "184", codeTube: "10", result: "2 HOURS", name: "ANTI MYCOPLASMA IgM", price: 200000, keterangan:"" },
              { id: "185", codeTube: "10", result: "2 HOURS", name: "ANTI CHLAMYDIA IgG", price: 200000, keterangan:"" },
              { id: "186", codeTube: "10", result: "2 HOURS", name: "ANTI CHLAMYDIA IgM", price: 200000, keterangan:"" },
              { id: "187", codeTube: "10", result: "2 HOURS", name: "UREA BREATH TEST (UBT)", price: 200000, keterangan:"" },
              { id: "188", codeTube: "10", result: "2 HOURS", name: "ACA IgG", price: 200000, keterangan:"" },
              { id: "189", codeTube: "10", result: "2 HOURS", name: "ACA IgM", price: 200000, keterangan:"" },
              { id: "190", codeTube: "10", result: "2 HOURS", name: "ANTI BETA2 GP1 IgM", price: 200000, keterangan:"" },
              { id: "191", codeTube: "10", result: "2 HOURS", name: "ANTI BETA2 GP1 IgG", price: 200000, keterangan:"" },
              { id: "192", codeTube: "10", result: "2 HOURS", name: "LUPUS ANTICOAGULANT", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "SEROLOGY - GENERAL",
            tests: [
              { id: "193", codeTube: "10", result: "2 HOURS", name: "ANA IgG (ELISA)", price: 200000, keterangan:"" },
              { id: "194", codeTube: "10", result: "2 HOURS", name: "ANA IF", price: 200000, keterangan:"" },
              { id: "195", codeTube: "10", result: "2 HOURS", name: "ANA PROFILE", price: 200000, keterangan:"" },
              { id: "196", codeTube: "10", result: "2 HOURS", name: "ANTI ds-DNA NCx", price: 200000, keterangan:"" },
              { id: "197", codeTube: "10", result: "2 HOURS", name: "ANTI SMOOTH MUSCLE (SMA)", price: 200000, keterangan:"" },
              { id: "198", codeTube: "10", result: "2 HOURS", name: "ASTO", price: 200000, keterangan:"" },
              { id: "199", codeTube: "10", result: "2 HOURS", name: "RHEMATOID FACTOR (RF)", price: 200000, keterangan:"" },
              { id: "200", codeTube: "10", result: "2 HOURS", name: "ANTI CCP", price: 200000, keterangan:"" },
              { id: "201", codeTube: "10", result: "2 HOURS", name: "CRP", price: 200000, keterangan:"" },
              { id: "202", codeTube: "10", result: "2 HOURS", name: "PROCALCITONIN", price: 200000, keterangan:"" },
              { id: "203", codeTube: "10", result: "2 HOURS", name: "SCREENING INFLUENZA", price: 200000, keterangan:"" },
            ],
          },
        ],
      },
      // More categories can be added to the back array here
      {
        category: "HORMONE",
        subcategories: [
          {
            name: "REPRODUCTIVE HORMONE",
            tests: [
              { id: "204", codeTube: "10", result: "2 HOURS", name: "LH", price: 200000, keterangan:"" },
              { id: "205", codeTube: "10", result: "2 HOURS", name: "FSH", price: 200000, keterangan:"" },
              { id: "206", codeTube: "10", result: "2 HOURS", name: "PROGESTERONE", price: 200000, keterangan:"" },
              { id: "207", codeTube: "10", result: "2 HOURS", name: "PROLACTIN", price: 200000, keterangan:"" },
              { id: "208", codeTube: "10", result: "2 HOURS", name: "ESTRADIOL", price: 200000, keterangan:"" },
              { id: "209", codeTube: "10", result: "2 HOURS", name: "BETA HCG KUANTITATIF", price: 200000, keterangan:"" },
              { id: "210", codeTube: "10", result: "2 HOURS", name: "ANTI MULLERIAN HORMON (AHM)", price: 200000, keterangan:"" },
              { id: "211", codeTube: "10", result: "2 HOURS", name: "TESTOSTERONE", price: 200000, keterangan:"" },
              { id: "212", codeTube: "10", result: "2 HOURS", name: "FREE TESTOSTERONE", price: 200000, keterangan:"" },
            ],
          },
          // More subcategories can be added here
          {
            name: "THYROID HORMONE",
            tests: [
              { id: "213", codeTube: "10", result: "2 HOURS", name: "T3 TOTAL", price: 200000, keterangan:"" },
              { id: "214", codeTube: "10", result: "2 HOURS", name: "T3 UPTAKE", price: 200000, keterangan:"" },
              { id: "215", codeTube: "10", result: "2 HOURS", name: "T4 TOTAL", price: 200000, keterangan:"" },
              { id: "216", codeTube: "10", result: "2 HOURS", name: "FREE THYROXINE (FTI)", price: 200000, keterangan:"" },
              { id: "217", codeTube: "10", result: "2 HOURS", name: "TSHS SENSITIVE", price: 200000, keterangan:"" },
              { id: "218", codeTube: "10", result: "2 HOURS", name: "TSHS SENSITIVE (NEONATUS)", price: 200000, keterangan:"" },
              { id: "219", codeTube: "10", result: "2 HOURS", name: "FREE T3", price: 200000, keterangan:"" },
              { id: "220", codeTube: "10", result: "2 HOURS", name: "FREE T4", price: 200000, keterangan:"" },
              { id: "221", codeTube: "10", result: "2 HOURS", name: "THYROGLOBULIN ANTIGEN", price: 200000, keterangan:"" },
              { id: "222", codeTube: "10", result: "2 HOURS", name: "THYROGLOBULIN ANTIBODY", price: 200000, keterangan:"" },
              { id: "223", codeTube: "10", result: "2 HOURS", name: "ANTI THYROID PEROXIDASE (ANTI TPO)", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "OTHERS",
            tests: [
              { id: "224", codeTube: "10", result: "2 HOURS", name: "CORTISOL MORNING", price: 200000, keterangan:"" },
              { id: "225", codeTube: "10", result: "2 HOURS", name: "CORTISOL AFTERNOON", price: 200000, keterangan:"" },
              { id: "226", codeTube: "10", result: "2 HOURS", name: "ACTH", price: 200000, keterangan:"" },
              { id: "227", codeTube: "10", result: "2 HOURS", name: "GROWTH HORMONE", price: 200000, keterangan:"" },
              { id: "228", codeTube: "10", result: "2 HOURS", name: "gF-1", price: 200000, keterangan:"" },
              { id: "229", codeTube: "10", result: "2 HOURS", name: "5 HIAA", price: 200000, keterangan:"" },
              { id: "230", codeTube: "10", result: "2 HOURS", name: "PTH INTACT", price: 200000, keterangan:"" },
              { id: "231", codeTube: "10", result: "2 HOURS", name: "ALDOSTERON SERUM", price: 200000, keterangan:"" },
              { id: "232", codeTube: "10", result: "2 HOURS", name: "PLASMA RENIN ACTIVITY (PRA)", price: 200000, keterangan:"" },
            ],
          },
        ],
      },
      {
        category: "URINE",
        subcategories: [
          {
            name: "GENERAL",
            tests: [
              { id: "233", codeTube: "10", result: "2 HOURS", name: "URINE LENGKAP / COMPLETE URINALYSIS (CHEM&SED)", price: 200000, keterangan:"" },
              { id: "234", codeTube: "10", result: "2 HOURS", name: "URINE RUTIN / ROUTINE TEST (PROT, GLUCOSE, SED)", price: 200000, keterangan:"" },
              { id: "235", codeTube: "10", result: "2 HOURS", name: "PROTEIN BENCE JONES", price: 200000, keterangan:"" },
              { id: "236", codeTube: "10", result: "2 HOURS", name: "PROTEIN ESBACH", price: 200000, keterangan:"" },
              { id: "237", codeTube: "10", result: "2 HOURS", name: "OSMOLARITAS URINE ", price: 200000, keterangan:"" },
              { id: "238", codeTube: "10", result: "2 HOURS", name: "PROTEIN URINE AD RANDOM", price: 200000, keterangan:"" },
              { id: "239", codeTube: "10", result: "2 HOURS", name: "PROTEIN CREATININE RATIO", price: 200000, keterangan:"" },
              { id: "240", codeTube: "10", result: "2 HOURS", name: "ALBUMIN CREATININ RATIO", price: 200000, keterangan:"" },
              { id: "241", codeTube: "10", result: "2 HOURS", name: "AMILASE URINE", price: 200000, keterangan:"" },
              { id: "242", codeTube: "10", result: "2 HOURS", name: "ERITHROCYTE DISMORPIC ", price: 200000, keterangan:"" },
            ],
          },
          // More subcategories can be added here
          {
            name: "QUANTITATIVE URINE (24 HOURS)",
            tests: [
              { id: "243", codeTube: "10", result: "2 HOURS", name: "UREUM URINE", price: 200000, keterangan:"" },
              { id: "244", codeTube: "10", result: "2 HOURS", name: "CREATINE URINE", price: 200000, keterangan:"" },
              { id: "245", codeTube: "10", result: "2 HOURS", name: "URIC ACID URINE", price: 200000, keterangan:"" },
              { id: "246", codeTube: "10", result: "2 HOURS", name: "SODIUM URINE", price: 200000, keterangan:"" },
              { id: "247", codeTube: "10", result: "2 HOURS", name: "POTASSIUM URINE", price: 200000, keterangan:"" },
              { id: "248", codeTube: "10", result: "2 HOURS", name: "PHOSPOR ANORGANIC URINE", price: 200000, keterangan:"" },
              { id: "249", codeTube: "10", result: "2 HOURS", name: "VMA URINE", price: 200000, keterangan:"" },
              { id: "250", codeTube: "10", result: "2 HOURS", name: "PROTEIN URINE QUANTITATIVE", price: 200000, keterangan:"" },
              { id: "251", codeTube: "10", result: "2 HOURS", name: "MICRO-ALBUMIN URINE", price: 200000, keterangan:"" },
              { id: "252", codeTube: "10", result: "2 HOURS", name: "CREATININ CLEARANCE", price: 200000, keterangan:"" },
              { id: "253", codeTube: "10", result: "2 HOURS", name: "UREA CLEARANCE", price: 200000, keterangan:"" },
            ],
          },
          {
            name: "PREGNANCY",
            tests: [
              { id: "254", codeTube: "10", result: "2 HOURS", name: "PREGNANCY (B-HCG) STRIP TEST", price: 200000, keterangan:"" },
              { id: "255", codeTube: "10", result: "2 HOURS", name: "PREGNANCY (B-HCG) TEST 2S mlU", price: 200000, keterangan:"" },
              { id: "256", codeTube: "10", result: "2 HOURS", name: "AMPHETAMINE", price: 200000, keterangan:"" },
              { id: "257", codeTube: "10", result: "2 HOURS", name: "BENZODIAZEPINE", price: 200000, keterangan:"" },
              { id: "258", codeTube: "10", result: "2 HOURS", name: "COCAINE", price: 200000, keterangan:"" },
              { id: "259", codeTube: "10", result: "2 HOURS", name: "MORPHINE", price: 200000, keterangan:"" },
              { id: "260", codeTube: "10", result: "2 HOURS", name: "CANABIS/THC", price: 200000, keterangan:"" },
              { id: "261", codeTube: "10", result: "2 HOURS", name: "METAMPHETAMINE", price: 200000, keterangan:"" },
              { id: "262", codeTube: "10", result: "2 HOURS", name: "DRUG ABUSE 3 PARAMETERS", price: 200000, keterangan:"" },
              { id: "263", codeTube: "10", result: "2 HOURS", name: "DRUG ABUSE 6 PARAMETERS", price: 200000, keterangan:"" },
            ],
          },
        ],
      },
      {
        category: "FAECES",
        subcategories: [
          {
            name: "",
            tests: [
              { id: "264", codeTube: "10", result: "2 HOURS", name: "FAECES LENGKAP (FEME FAECES)", price: 200000, keterangan: "" },
              { id: "265", codeTube: "10", result: "2 HOURS", name: "FAECES RUTIN (ROUTINE FAECES)", price: 200000, keterangan: "" },
              { id: "266", codeTube: "10", result: "2 HOURS", name: "FAECES GASTRO", price: 200000, keterangan: "" },
              
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: " ",
            tests: [
              { id: "267", codeTube: "10", result: "2 HOURS", name: "OCCULT BLOOD (FAECES)", price: 200000, keterangan: "" },
              { id: "268", codeTube: "10", result: "2 HOURS", name: "M2PK", price: 200000, keterangan: "" },
              { id: "269", codeTube: "10", result: "2 HOURS", name: "H. PYLORI STOOL ANTIGEN(HpSA)", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: "  ",
            tests: [
              { id: "270", codeTube: "10", result: "2 HOURS", name: "ROTAVIRUS ANTIGEN", price: 200000, keterangan: "" },
              { id: "271", codeTube: "10", result: "2 HOURS", name: "CLOSTRIDIUM DIFFICILE ANTIGEN", price: 200000, keterangan: "" },
              { id: "272", codeTube: "10", result: "2 HOURS", name: "CALPROTECTIN", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
      {
        category: "BODY FLUID ANALYSIS",
        subcategories: [
          {
            name: "",
            tests: [
              { id: "273", codeTube: "10", result: "2 HOURS", name: "CSF - ROUTINE (TOTAL CELL COUNT, DIFF COUNT, NONNE-PANDY)", price: 200000, keterangan: "" },
              { id: "274", codeTube: "10", result: "2 HOURS", name: "GASTRIC FLUID ANALYSIS / ANALISI CAIRAN LAMBUNG", price: 200000, keterangan: "" },
              { id: "275", codeTube: "10", result: "2 HOURS", name: "ABDOMINAL FLUID ANALYSIS / ANALISIS CAIRAN ASCITES", price: 200000, keterangan: "" },
              { id: "276", codeTube: "10", result: "2 HOURS", name: "JOINT FLUID ANALYSIS / ANALISIS CAIRAN SENDI", price: 200000, keterangan: "" },
              
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: "",
            tests: [
              { id: "277", codeTube: "10", result: "2 HOURS", name: "PLEURAL FLUID ANALYSIS / ANALISIS CAIRAN PLEURA", price: 200000, keterangan: "" },
              { id: "278", codeTube: "10", result: "2 HOURS", name: "SPERM ANALYSIS / ANALISIS SPERMA", price: 200000, keterangan: "" },
              { id: "279", codeTube: "10", result: "2 HOURS", name: "RENAL STONE ANALYSIS / ANALISIS BATU GINJAL", price: 200000, keterangan: "" },
              { id: "280", codeTube: "10", result: "2 HOURS", name: "URETHER STONE ANALYSIS / ANALISA BATU URETER", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: "",
            tests: [
              { id: "281", codeTube: "10", result: "2 HOURS", name: "VESICAL STONE ANALYSYS / ANALISI BATU KANDUNG KEMIH", price: 200000, keterangan: "" },
              { id: "282", codeTube: "10", result: "2 HOURS", name: "ADENOSINE DEAMINASE (ADA)", price: 200000, keterangan: "" },
              { id: "283", codeTube: "10", result: "2 HOURS", name: "AMNOTIC QUIK TEST (LAKMUS)", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
      {
        category: "MOLECULAR DIAGNOSTIC",
        subcategories: [
          {
            name: "",
            tests: [
              { id: "284", codeTube: "10", result: "2 HOURS", name: "REAL TIME PCR - HBV DNA QAUNTITATIVE", price: 200000, keterangan: "" },
              { id: "285", codeTube: "10", result: "2 HOURS", name: "HBV DNA QUALITATIVE", price: 200000, keterangan: "" },
              { id: "286", codeTube: "10", result: "2 HOURS", name: "REAL TIME PCR - HCV RNA QUANTITATIVE", price: 200000, keterangan: "" },
              { id: "287", codeTube: "10", result: "2 HOURS", name: "HCV RNA QUANTITATIVE", price: 200000, keterangan: "" },
              { id: "288", codeTube: "10", result: "2 HOURS", name: "HCV RNA GENOTYPING", price: 200000, keterangan: "" },
              
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: "",
            tests: [
              { id: "289", codeTube: "10", result: "2 HOURS", name: "PCR MYCOBACTERIUM TB", price: 200000, keterangan: "" },
              { id: "290", codeTube: "10", result: "2 HOURS", name: "PCR SALMONELLA", price: 200000, keterangan: "" },
              { id: "291", codeTube: "10", result: "2 HOURS", name: "PCR DENGUE", price: 200000, keterangan: "" },
              { id: "292", codeTube: "10", result: "2 HOURS", name: "PCR MALARIA", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          {
            name: "",
            tests: [
              { id: "293", codeTube: "10", result: "2 HOURS", name: "PCR BCR - ABL", price: 200000, keterangan: "" },
              { id: "294", codeTube: "10", result: "2 HOURS", name: "PCR JAK2 MUTATION", price: 200000, keterangan: "" },
              { id: "295", codeTube: "10", result: "2 HOURS", name: "PCR HIV - VIRAL LOAD", price: 200000, keterangan: "" },
            ],
            // ...Tambahkan subkategori lainnya sesuai kebutuhan
          },
          // ...Tambahkan subkategori lainnya sesuai kebutuhan
        ],
      },
    ],
  };
  