const druglist=[
  "Paracetamol",
  "Acetaminophen",
  "Ibuprofen",
  "Aspirin",
  "Diclofenac",
  "Naproxen",
  "Celecoxib",
  "Amoxicillin",
  "Coamoxiclav",
  "Augmentin",
  "Ampicillin",
  "Cloxacillin",
  "Flucloxacillin",
  "Penicillin",
  "Benzathine Penicillin",
  "Erythromycin",
  "Azithromycin",
  "Clarithromycin",
  "Metronidazole",
  "Ciprofloxacin",
  "Levofloxacin",
  "Ofloxacin",
  "Moxifloxacin",
  "Gentamicin",
  "Amikacin",
  "Streptomycin",
  "Doxycycline",
  "Tetracycline",
  "Chloramphenicol",
  "Vancomycin",
  "Linezolid",
  "Rifampicin",
  "Isoniazid",
  "Ethambutol",
  "Pyrazinamide",
  "Artemether",
  "Lumefantrine",
  "Artesunate",
  "Amodiaquine",
  "Quinine",
  "Sulfadoxine",
  "Pyrimethamine",
  "ACT",
  "Coartem",
  "Lonart",
  "P-Alaxin",
  "Amatem",
  "Mefloquine",
  "Atovaquone",
  "Proguanil",
  "Zithromax",
  "Zinnat",
  "Keflex",
  "Cefuroxime",
  "Cefixime",
  "Ceftriaxone",
  "Cefotaxime",
  "Ceftazidime",
  "Cefepime",
  "Meropenem",
  "Imipenem",
  "Ertapenem",
  "Piperacillin",
  "Tazobactam",
  "Timentin",
  "Tazocin",
  "Flagyl",
  "Omeprazole",
  "Lansoprazole",
  "Pantoprazole",
  "Esomeprazole",
  "Ranitidine",
  "Cimetidine",
  "Sucralfate",
  "Magnesium Trisilicate",
  "Aluminium Hydroxide",
  "Simvastatin",
  "Atorvastatin",
  "Rosuvastatin",
  "Pravastatin",
  "Amlodipine",
  "Lisinopril",
  "Enalapril",
  "Ramipril",
  "Losartan",
  "Valsartan",
  "Irbesartan",
  "Telmisartan",
  "Hydrochlorothiazide",
  "Furosemide",
  "Spironolactone",
  "Metoprolol",
  "Propranolol",
  "Atenolol",
  "Bisoprolol",
  "Carvedilol",
  "Digoxin",
  "Nitroglycerin",
  "Isosorbide",
  "Warfarin",
  "Clopidogrel",
  "Aspirin",
  "Heparin",
  "Enoxaparin",
  "Dabigatran",
  "Rivaroxaban",
  "Apixaban",
  "Insulin",
  "Metformin",
  "Glibenclamide",
  "Gliclazide",
  "Glimepiride",
  "Pioglitazone",
  "Sitagliptin",
  "Linagliptin",
  "Empagliflozin",
  "Dapagliflozin",
  "Hydrocortisone",
  "Prednisolone",
  "Dexamethasone",
  "Betamethasone",
  "Methylprednisolone",
  "Triamcinolone",
  "Beclomethasone",
  "Fluticasone",
  "Budesonide",
  "Salbutamol",
  "Ventolin",
  "Ipratropium",
  "Tiotropium",
  "Montelukast",
  "Cetirizine",
  "Loratadine",
  "Fexofenadine",
  "Diphenhydramine",
  "Chlorpheniramine",
  "Promethazine",
  "Codeine",
  "Morphine",
  "Tramadol",
  "Pethidine",
  "Fentanyl",
  "Methadone",
  "Diazepam",
  "Lorazepam",
  "Alprazolam",
  "Clonazepam",
  "Midazolam",
  "Haloperidol",
  "Olanzapine",
  "Risperidone",
  "Quetiapine",
  "Aripiprazole",
  "Fluoxetine",
  "Sertraline",
  "Paroxetine",
  "Citalopram",
  "Escitalopram",
  "Venlafaxine",
  "Duloxetine",
  "Amitriptyline",
  "Nortriptyline",
  "Mirtazapine",
  "Lithium",
  "Valproic Acid",
  "Carbamazepine",
  "Lamotrigine",
  "Phenytoin",
  "Phenobarbital",
  "Levetiracetam",
  "Gabapentin",
  "Pregabalin",
  "Topiramate",
  "Zinc",
  "Chemiron",
  "Tothema",
  "Ferrous Sulphate",
  "Folic Acid",
  "Vitamin B Complex",
  "Vitamin C",
  "Vitamin D",
  "Vitamin E",
  "Calcium Carbonate",
  "Magnesium Sulphate",
  "Potassium Chloride",
  "ORS",
  "ORS Sachet",
  "Albendazole",
  "Mebendazole",
  "Ivermectin",
  "Praziquantel",
  "Niclosamide",
  "Chloroquine",
  "Hydroxychloroquine",
  "Oseltamivir",
  "Acyclovir",
  "Valacyclovir",
  "Famciclovir",
  "Lamivudine",
  "Zidovudine",
  "Efavirenz",
  "Nevirapine",
  "Tenofovir",
  "Emtricitabine",
  "Dolutegravir",
  "Lopinavir",
  "Ritonavir",
  "Saquinavir",
  "Indinavir",
  "Darunavir",
  "Remdesivir",
  "Sofosbuvir",
  "Daclatasvir",
  "Ledipasvir",
  "Ribavirin",
  "Interferon",
  "Methotrexate",
  "Cyclophosphamide",
  "Doxorubicin",
  "Cisplatin",
  "Vincristine",
  "Vinblastine",
  "Paclitaxel",
  "Docetaxel",
  "Tamoxifen",
  "Letrozole",
  "Anastrozole",
  "Trastuzumab",
  "Bevacizumab",
  "Pembrolizumab",
  "Nivolumab",
  "Adalimumab",
  "Etanercept",
  "Infliximab",
  "Tocilizumab",
  "Methyldopa",
  "Clonidine",
  "Prazosin",
  "Terazosin",
  "Finasteride",
  "Dutasteride",
  "Tamsulosin",
  "Alfuzosin",
  "Sildenafil",
  "Tadalafil",
  "Vardenafil",
  "Levothyroxine",
  "Methimazole",
  "Propylthiouracil",
  "Desmopressin",
  "Oxytocin",
  "Misoprostol",
  "Mifepristone",
  "Clomiphene",
  "Letrozole",
  "HCG",
  "Progesterone",
  "Estradiol",
  "Ethinylestradiol",
  "Norethisterone",
  "Medroxyprogesterone",
  "Depot",
  "Depo-Provera",
  "Noristerat",
  "Microgynon",
  "Postinor",
  "Plan B",
  "Mirena",
  "IUD",
  "Copper T",
  "Norlevo",
  "Cerazette",
  "Zoladex",
  "Lupron",
  "Suprefact",
  "Synarel",
  "Decapeptyl"
]
export default druglist;