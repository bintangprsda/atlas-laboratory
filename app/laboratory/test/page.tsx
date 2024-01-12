// app/laboratory/test/page.tsx
"use client"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ChevronLeft,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface TubeData {
  [code: number]: string[];
}

const tubeData: TubeData = {
  10: ["FBC", "HBAIC", "MALARIA"],
  11: ["HBSAG", "ANTI HIV", "ANTI HCV"],
  12: ["SGOT", "SGPT", "UREUM", "CREATIN"],
  13: ["PT", "APTT", "TT"],
  14: ["KETON", "HCO3"]
};

const LabPage: React.FC = () => {
  const [selectedTubes, setSelectedTubes] = useState<number[]>([]);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);

  useEffect(() => {
    const labCheckboxes = document.querySelectorAll<HTMLInputElement>(".labCheckbox");

    const updateSelectedTubes = () => {
      const selectedTestsArray = Array.from(
        document.querySelectorAll<HTMLInputElement>(".labCheckbox:checked")
      ).map((checkbox) => checkbox.value);

      const selectedTubeTypes: number[] = [];

      selectedTestsArray.forEach((test) => {
        for (const [code, tubes] of Object.entries(tubeData)) {
          if (tubes.includes(test) && !selectedTubeTypes.includes(Number(code))) {
            selectedTubeTypes.push(Number(code));
          }
        }
      });

      setSelectedTubes(selectedTubeTypes);
      setSelectedTests(selectedTestsArray);
    };

    labCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateSelectedTubes);
    });

    return () => {
      labCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", updateSelectedTubes);
      });
    };
  }, []);

  const getTubeName = (code: number): string => {
    return {
      10: "EDTA",
      11: "MERAH S",
      12: "MERAH K",
      13: "SITRAT",
      14: "HEPARIN"
    }[code];
  };

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
          Work List
        </h1>
        <div className="flex text-xs font-extrabold flex-grow justify-end">
          <Link
            href="/laboratory"
            className={buttonVariants({ variant: "ghost" })}
          >
            <ChevronLeft />
            Back
          </Link>
        </div>

      </div>
              <p className="max-w text-sm text-muted-foreground">
        Laboratory Sample Processing Workflow
      </p>
    </div>
    <div>
      <h1>Pilih Pemeriksaan Lab:</h1>
      
      <label><input type="checkbox" className="labCheckbox" value="FBC"/>FBC</label>
      <label><input type="checkbox" className="labCheckbox" value="SGOT"/>SGOT</label>
      <label><input type="checkbox" className="labCheckbox" value="PT"/>PT</label>
      <label><input type="checkbox" className="labCheckbox" value="APTT"/>APTT</label>
      <label><input type="checkbox" className="labCheckbox" value="KETON"/>KETON</label>
      <label><input type="checkbox" className="labCheckbox" value="HBSAG"/>HBSAG</label>
      <label><input type="checkbox" className="labCheckbox" value="AnotherTest"/>Another Test</label>
      
      <div id="selectedTests">
        <h2>Pemeriksaan yang Dipilih:</h2>
        {selectedTests.map((test, index) => (
          <p key={index}>{test}</p>
        ))}
      </div>

      <div id="selectedTubes">
        <h2>Jenis Tabung yang Diperlukan:</h2>
        {selectedTubes.map((code, index) => (
          <p key={index}>1 {getTubeName(code)} (Kode {code})</p>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default LabPage;
