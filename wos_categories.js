// Web of Science 学科分类映射
// 基于Clarivate Analytics Web of Science的官方学科分类
// 更新时间: 2025-12-29
// 数据来源: https://www.webofscience.com/wos/woscc/categories/

// Web of Science 学科类别映射到我们的研究领域
const WOSCategories = {
    // ==================== 医学与健康 ====================
    '医学与健康': {
        // 临床医学
        categories: [
            'ALLERGY',
            'ANESTHESIOLOGY',
            'CARDIAC & CARDIOVASCULAR SYSTEMS',
            'CARDIOLOGY',
            'CLINICAL NEUROLOGY',
            'DENTISTRY, ORAL SURGERY & MEDICINE',
            'DERMATOLOGY',
            'EMERGENCY MEDICINE',
            'ENDOCRINOLOGY & METABOLISM',
            'GASTROENTEROLOGY & HEPATOLOGY',
            'GERIATRICS & GERONTOLOGY',
            'HEMATOLOGY',
            'INFECTIOUS DISEASES',
            'INTENSIVE CARE MEDICINE',
            'MEDICAL LABORATORY TECHNOLOGY',
            'MEDICINE, GENERAL & INTERNAL',
            'NEUROIMAGING & CLINICAL NEUROLOGY',
            'NURSING',
            'OBSTETRICS & GYNECOLOGY',
            'ONCOLOGY',
            'OPHTHALMOLOGY',
            'ORTHOPEDICS',
            'OTOLARYNGOLOGY',
            'PEDIATRICS',
            'PERIPHERAL VASCULAR DISEASE',
            'PHARMACOLOGY & PHARMACY',
            'PHYSIATRY',
            'PSYCHIATRY',
            'PSYCHOLOGY, CLINICAL',
            'PUBLIC, ENVIRONMENTAL & OCCUPATIONAL HEALTH',
            'RADILOGY, NUCLEAR MEDICINE & MEDICAL IMAGING',
            'REHABILITATION',
            'RESPIRATORY SYSTEM',
            'RHEUMATOLOGY',
            'SPORT SCIENCES',
            'SURGERY',
            'TRANSPLANTATION',
            'TRAUMATOLOGY',
            'UROLOGY & NEPHROLOGY',
            'VETERINARY SCIENCES'
        ],
        keywords: [
            'MEDICINE', 'HEALTH', 'CLINICAL', 'HOSPITAL', 'PATIENT',
            'CARDIO', 'HEART', 'VASCULAR', 'STROKE',
            'ONCOLOGY', 'CANCER', 'TUMOR', 'TUMOUR', 'LEUKEMIA',
            'NEUROLOGY', 'BRAIN', 'NEURAL',
            'PULMONARY', 'LUNG', 'RESPIRATORY',
            'GASTRO', 'LIVER', 'HEPATIC', 'DIGESTIVE',
            'RENAL', 'KIDNEY', 'NEPHRO', 'UROLOGY',
            'HEMATOLOGY', 'BLOOD',
            'DERMATOLOGY', 'SKIN',
            'OPHTHALMOLOGY', 'EYE', 'VISION',
            'OTOLARYNGOLOGY', 'EAR', 'NOSE', 'THROAT',
            'ORTHOPEDIC', 'BONE', 'JOINT',
            'ENDOCRINOLOGY', 'DIABETES', 'HORMONE',
            'INFECTIOUS', 'VIRUS', 'VIRAL', 'BACTERIA',
            'IMMUNOLOGY', 'IMMUNE',
            'PATHOLOGY', 'RADIOLOGY',
            'SURGERY', 'SURGICAL',
            'PEDIATRICS', 'CHILD', 'INFANT',
            'OBSTETRICS', 'GYNECOLOGY', 'PREGNANCY',
            'GERIATRICS', 'AGING', 'ELDERLY',
            'PSYCHIATRY', 'PSYCHOLOGY', 'MENTAL',
            'ANESTHESIA', 'PAIN',
            'EMERGENCY', 'CRITICAL', 'INTENSIVE',
            'NURSING', 'CARE',
            'PUBLIC HEALTH', 'EPIDEMIOLOGY',
            'PHARMACY', 'PHARMA', 'DRUG', 'THERANOSTICS',
            'REHABILITATION', 'THERAPY', 'TREATMENT',
            'DENTIST', 'DENTAL', 'TOOTH',
            'VETERINARY', 'VET', 'ANIMAL'
        ]
    },

    // ==================== 生物学与生命科学 ====================
    '生物学与生命科学': {
        categories: [
            'AGRICULTURAL ENGINEERING',
            'AGRICULTURE, DAIRY & ANIMAL SCIENCE',
            'AGRICULTURE, MULTIDISCIPLINARY',
            'AGRONOMY',
            'ANATOMY & MORPHOLOGY',
            'BIOCHEMISTRY & MOLECULAR BIOLOGY',
            'BIOCHEMICAL RESEARCH METHODS',
            'BIODIVERSITY CONSERVATION',
            'BIOLOGY',
            'BIOPHYSICS',
            'BIOTECHNOLOGY & APPLIED MICROBIOLOGY',
            'BOTANY',
            'CELL BIOLOGY',
            'DEVELOPMENTAL BIOLOGY',
            'ECOLOGY',
            'EVOLUTIONARY BIOLOGY',
            'FISHERIES',
            'FORESTRY',
            'GENETICS & HEREDITY',
            'HORTICULTURE',
            'LIMNOLOGY',
            'MARINE & FRESHWATER BIOLOGY',
            'MICROBIOLOGY',
            'MYCOLOGY',
            'PLANT SCIENCES',
            'REPRODUCTION BIOLOGY',
            'VIROLOGY',
            'ZOOLOGY'
        ],
        keywords: [
            'BIOLOGY', 'BIOL', 'LIFE',
            'MOLECULAR', 'CELL', 'CELLULAR',
            'GENETICS', 'GENE', 'GENOME', 'DNA', 'RNA',
            'BIOCHEM', 'BIOCHEMISTRY', 'PROTEIN',
            'BIOPHYSICS',
            'BIOTECHNOLOGY', 'BIOTECH',
            'MICROBIOLOGY', 'MICROBE', 'BACTERIA',
            'VIROLOGY', 'VIRUS',
            'IMMUNOLOGY', 'IMMUNE',
            'ECOLOGY', 'ECOSYSTEM', 'ENVIRONMENTAL',
            'EVOLUTION', 'PHYLOGENY',
            'PLANT', 'BOTANY', 'FLORA',
            'ANIMAL', 'ZOLOGY', 'FAUNA',
            'AGRICULTURE', 'AGRI', 'FARM', 'CROP',
            'FORESTRY', 'FOREST', 'TREE',
            'FISHERIES', 'FISH', 'AQUATIC',
            'MARINE', 'OCEAN',
            'DEVELOPMENTAL', 'EMBRYO',
            'REPRODUCTION', 'FERTILITY'
        ]
    },

    // ==================== 化学与材料科学 ====================
    '化学与材料科学': {
        categories: [
            'CATALYSIS',
            'CHEMISTRY, ANALYTICAL',
            'CHEMISTRY, APPLIED',
            'CHEMISTRY, INORGANIC & NUCLEAR',
            'CHEMISTRY, MEDICINAL',
            'CHEMISTRY, MULTIDISCIPLINARY',
            'CHEMISTRY, ORGANIC',
            'CHEMISTRY, PHYSICAL',
            'CONSTRUCTION & BUILDING TECHNOLOGY',
            'ENERGY & FUELS',
            'ENGINEERING, CHEMICAL',
            'MATERIALS SCIENCE, BIOMATERIALS',
            'MATERIALS SCIENCE, CERAMICS',
            'MATERIALS SCIENCE, CHARACTERIZATION & TESTING',
            'MATERIALS SCIENCE, COATINGS & FILMS',
            'MATERIALS SCIENCE, COMPOSITES',
            'MATERIALS SCIENCE, MULTIDISCIPLINARY',
            'MATERIALS SCIENCE, PAPER & WOOD',
            'MATERIALS SCIENCE, TEXTILES',
            'METALLURGY & METALLURGICAL ENGINEERING',
            'MINING & MINERAL PROCESSING',
            'NANOSCIENCE & NANOTECHNOLOGY',
            'POLYMER SCIENCE',
            'SPECTROSCOPY',
            'THERMODYNAMICS',
            'WATER RESOURCES'
        ],
        keywords: [
            'CHEMISTRY', 'CHEM', 'CHEMICAL',
            'CATALYSIS', 'CATALYST',
            'POLYMER', 'PLASTIC',
            'MATERIAL', 'MATERIALS',
            'NANOTECHNOLOGY', 'NANO', 'NANOSCIENCE',
            'METAL', 'METALLURGY', 'ALLOY',
            'CERAMIC',
            'COMPOSITE',
            'COATING', 'FILM', 'THIN FILM',
            'SPECTROSCOPY',
            'THERMODYNAMICS', 'HEAT', 'THERMAL',
            'CRYSTAL', 'CRYSTALLINE'
        ]
    },

    // ==================== 物理学与天文学 ====================
    '物理学与天文学': {
        categories: [
            'ACOUSTICS',
            'ASTRONOMY & ASTROPHYSICS',
            'ATOMS & MOLECULES',
            'CRYSTALLOGRAPHY',
            'ELECTROCHEMISTRY',
            'FLUIDS & PLASMA PHYSICS',
            'INSTRUMENTS & INSTRUMENTATION',
            'MATERIALS PHYSICS',
            'MECHANICS',
            'OPTICS',
            'PHYSICS, APPLIED',
            'PHYSICS, ATOMIC, MOLECULAR & CHEMICAL',
            'PHYSICS, CONDENSED MATTER',
            'PHYSICS, FLUIDS & PLASMAS',
            'PHYSICS, MATHEMATICAL',
            'PHYSICS, MULTIDISCIPLINARY',
            'PHYSICS, NUCLEAR',
            'PHYSICS, PARTICLES & FIELDS',
            'PLASMA PHYSICS',
            'REMOTE SENSING',
            'ROBOTICS',
            'SPECTROSCOPY',
            'STATISTICAL MECHANICS',
            'THERMODYNAMICS'
        ],
        keywords: [
            'PHYSICS', 'PHYS',
            'ASTRONOMY', 'ASTRO', 'ASTROPHYSICS', 'COSMOLOGY',
            'OPTICS', 'OPTICAL', 'LENS', 'PHOTON',
            'PLASMA',
            'QUANTUM',
            'NUCLEAR',
            'ATOM', 'ATOMIC', 'MOLECULE',
            'ACOUSTICS', 'SOUND', 'VIBRATION',
            'MECHANICS', 'MECHANICAL',
            'FLUID', 'DYNAMICS',
            'THERMODYNAMICS', 'HEAT', 'TEMPERATURE',
            'CRYSTAL', 'CRYSTALLOGRAPHY',
            'REMOTE SENSING'
        ]
    },

    // ==================== 数学与计算机科学 ====================
    '数学与计算机科学': {
        categories: [
            'AUTOMATION & CONTROL SYSTEMS',
            'COMPUTER SCIENCE, ARTIFICIAL INTELLIGENCE',
            'COMPUTER SCIENCE, CYBERNETICS',
            'COMPUTER SCIENCE, HARDWARE & ARCHITECTURE',
            'COMPUTER SCIENCE, INFORMATION SYSTEMS',
            'COMPUTER SCIENCE, INTERDISCIPLINARY APPLICATIONS',
            'COMPUTER SCIENCE, SOFTWARE ENGINEERING',
            'COMPUTER SCIENCE, THEORY & METHODS',
            'COMPUTING SCIENCES',
            'CYBERNETICS',
            'HARDWARE & ARCHITECTURE',
            'INFORMATION SCIENCE & LIBRARY SCIENCE',
            'MATHEMATICS',
            'MATHEMATICS, APPLIED',
            'OPERATIONS RESEARCH & MANAGEMENT SCIENCE',
            'ROBOTICS',
            'STATISTICS & PROBABILITY',
            'THEORETICAL COMPUTER SCIENCE'
        ],
        keywords: [
            'MATHEMATICS', 'MATH', 'MATHEMATICAL',
            'STATISTICS', 'STATISTICAL', 'STATS',
            'COMPUTER', 'COMPUTING',
            'SOFTWARE', 'ALGORITHM', 'PROGRAMMING',
            'ARTIFICIAL INTELLIGENCE', 'AI', 'MACHINE LEARNING',
            'DATA', 'DATABASE',
            'NETWORK', 'INTERNET', 'WEB',
            'INFORMATION', 'INFO',
            'ROBOTICS', 'ROBOT',
            'AUTOMATION', 'CONTROL',
            'OPERATIONS RESEARCH', 'OPTIMIZATION'
        ]
    },

    // ==================== 地球科学与环境 ====================
    '地球科学与环境': {
        categories: [
            'ASTRONOMY & ASTROPHYSICS',
            'ENVIRONMENTAL SCIENCES',
            'ENVIRONMENTAL STUDIES',
            'GEOCHEMISTRY & GEOPHYSICS',
            'GEOGRAPHY',
            'GEOLOGY',
            'GEOSCIENCES, MULTIDISCIPLINARY',
            'IMAGING SCIENCE & PHOTOGRAPHIC TECHNOLOGY',
            'METEOROLOGY & ATMOSPHERIC SCIENCES',
            'MINERALOGY',
            'OCEANOGRAPHY',
            'PALEONTOLOGY',
            'REMOTE SENSING',
            'SOIL SCIENCE',
            'WATER RESOURCES'
        ],
        keywords: [
            'EARTH', 'GEO', 'GEOSCIENCE',
            'GEOLOGY', 'GEOLOGICAL',
            'OCEANOGRAPHY', 'OCEAN', 'MARINE',
            'ATMOSPHERE', 'ATMOSPHERIC', 'METEOROLOGY', 'CLIMATE', 'WEATHER',
            'ENVIRONMENT', 'ENVIRONMENTAL', 'ECOLOGY',
            'GEOGRAPHY', 'GEOGRAPHICAL',
            'PALEONTOLOGY', 'FOSSIL',
            'MINERALOGY', 'MINERAL',
            'REMOTE SENSING', 'SATELLITE'
        ]
    },

    // ==================== 工程与技术 ====================
    '工程与技术': {
        categories: [
            'AUTOMATION & CONTROL SYSTEMS',
            'CHEMICAL ENGINEERING',
            'CIVIL ENGINEERING',
            'COMPUTER SCIENCE, HARDWARE & ARCHITECTURE',
            'CONSTRUCTION & BUILDING TECHNOLOGY',
            'ELECTRICAL & ELECTRONIC ENGINEERING',
            'ELECTROCHEMISTRY',
            'ENERGY & FUELS',
            'ENGINEERING, AEROSPACE',
            'ENGINEERING, BIOMEDICAL',
            'ENGINEERING, CHEMICAL',
            'ENGINEERING, CIVIL',
            'ENGINEERING, ELECTRICAL & ELECTRONIC',
            'ENGINEERING, ENVIRONMENTAL',
            'ENGINEERING, GEOLOGICAL',
            'ENGINEERING, INDUSTRIAL',
            'ENGINEERING, MANUFACTURING',
            'ENGINEERING, MARINE',
            'ENGINEERING, MECHANICAL',
            'ENGINEERING, MINERAL & MINING',
            'ENGINEERING, MULTIDISCIPLINARY',
            'ENGINEERING, OCEAN',
            'ENGINEERING, PETROLEUM',
            'ENGINEERING, THERMAL',
            'FOOD SCIENCE & TECHNOLOGY',
            'IMAGING SCIENCE & PHOTOGRAPHIC TECHNOLOGY',
            'INSTRUMENTS & INSTRUMENTATION',
            'MATERIALS SCIENCE',
            'MECHANICS',
            'METALLURGY & METALLURGICAL ENGINEERING',
            'NANOSCIENCE & NANOTECHNOLOGY',
            'NUCLEAR SCIENCE & TECHNOLOGY',
            'OCEANOGRAPHY',
            'PHOTOGRAPHIC TECHNOLOGY',
            'REMOTE SENSING',
            'ROBOTICS',
            'TELECOMMUNICATIONS',
            'TEXTILES',
            'THERMODYNAMICS',
            'TRANSPORTATION',
            'TRANSPORTATION SCIENCE & TECHNOLOGY',
            'WATER RESOURCES'
        ],
        keywords: [
            'ENGINEERING', 'ENGINEER', 'ENG',
            'ELECTRICAL', 'ELECTRONIC', 'ELECTRO',
            'MECHANICAL', 'MECH',
            'CIVIL',
            'CHEMICAL ENGINEERING',
            'AEROSPACE', 'AVIATION', 'SPACE',
            'MANUFACTURING', 'PRODUCTION',
            'INDUSTRIAL',
            'AUTOMOTIVE', 'VEHICLE', 'CAR',
            'ROBOTICS', 'ROBOT',
            'TELECOMMUNICATION', 'TELECOM', 'COMMUNICATION',
            'INSTRUMENT', 'SENSOR',
            'TRANSPORT', 'TRANSPORTATION',
            'NUCLEAR', 'ATOMIC ENERGY',
            'ENERGY', 'FUEL', 'POWER'
        ]
    },

    // ==================== 农业与食品科学 ====================
    '农业与食品科学': {
        categories: [
            'AGRICULTURAL ENGINEERING',
            'AGRICULTURE, DAIRY & ANIMAL SCIENCE',
            'AGRICULTURE, MULTIDISCIPLINARY',
            'AGRONOMY',
            'FOOD SCIENCE & TECHNOLOGY',
            'FORESTRY',
            'FISHERIES',
            'HORTICULTURE',
            'PLANT SCIENCES',
            'SOIL SCIENCE',
            'VETERINARY SCIENCES'
        ],
        keywords: [
            'AGRICULTURE', 'AGRI', 'FARM', 'FARMING',
            'FOOD', 'NUTRITION',
            'FORESTRY', 'FOREST', 'TREE',
            'FISHERIES', 'FISH', 'AQUACULTURE',
            'HORTICULTURE', 'GARDEN',
            'PLANT', 'CROP',
            'SOIL',
            'VETERINARY', 'VET', 'ANIMAL'
        ]
    }
};

/**
 * 根据期刊名称判断研究领域（基于Web of Science学科分类）
 * @param {string} journalName - 期刊名称
 * @param {string} type - 期刊类型：'natural' 或 'social'
 * @returns {string} 研究领域
 */
function guessResearchFieldByWoS(journalName, type = 'natural') {
    if (!journalName) return '未分类';

    const nameUpper = journalName.toUpperCase();

    // 根据类型选择对应的研究领域
    const fields = type === 'social' ? socialScienceFields : naturalScienceFields;

    // 著名期刊优先（最高优先级）
    const topJournals = {
        'NATURE': '生物学与生命科学',
        'SCIENCE': '生物学与生命科学',
        'CELL': '生物学与生命科学',
        'LANCET': '医学与健康',
        'NEW ENGLAND JOURNAL': '医学与健康',
        'JAMA': '医学与健康',
        'BMJ': '医学与健康',
        'PRL': '物理学与天文学',
        'JACS': '化学与材料科学',
        'IEEE': '工程与技术'
    };

    for (const [journal, field] of Object.entries(topJournals)) {
        if (nameUpper.includes(journal)) {
            return field;
        }
    }

    // 收集所有匹配的关键词及其优先级
    const matches = [];

    for (const [fieldName, fieldData] of Object.entries(fields)) {
        // 检查WoS类别关键词
        if (fieldData.keywords) {
            for (const keyword of fieldData.keywords) {
                if (nameUpper.includes(keyword)) {
                    matches.push({
                        field: fieldName,
                        keyword: keyword,
                        length: keyword.length,
                        priority: getKeywordPriority(keyword)
                    });
                }
            }
        }
    }

    if (matches.length > 0) {
        // 先按优先级排序，优先级相同时按长度排序
        matches.sort((a, b) => {
            if (b.priority !== a.priority) {
                return b.priority - a.priority;
            }
            return b.length - a.length;
        });
        return matches[0].field;
    }

    return '其他';
}

/**
 * 获取关键词优先级
 * 数字越大，优先级越高
 */
function getKeywordPriority(keyword) {
    // 高优先级：疾病和器官（医学核心词汇）
    if (['CANCER', 'ONCOLOGY', 'LEUKEMIA', 'TUMOR', 'TUMOUR',
         'HEART', 'CARDIO', 'CARDIOVASCULAR',
         'KIDNEY', 'RENAL', 'NEPHROLOGY',
         'LIVER', 'HEPATIC', 'HEPATOLOGY',
         'LUNG', 'PULMONARY', 'PULMONOLOGY', 'RESPIRATORY',
         'BRAIN', 'NEUROLOGY', 'NEUROSURGERY',
         'BLOOD', 'HEMATOLOGY',
         'BONE', 'ORTHOPEDIC', 'ORTHOPAEDIC',
         'DIABETES', 'ARTHRITIS',
         'DRUG', 'THERANOSTICS'].includes(keyword)) {
        return 100;
    }

    // 中高优先级：医学科
    if (['MEDICINE', 'CLINICAL', 'MEDICAL', 'SURGERY', 'SURGICAL',
         'PATHOLOGY', 'RADIOLOGY', 'THERAPY', 'TREATMENT',
         'PEDIATRICS', 'PSYCHIATRY', 'EMERGENCY', 'HOSPITAL', 'PATIENT'].includes(keyword)) {
        return 90;
    }

    // 中等优先级：核心学科词汇
    if (['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'MATHEMATICS',
         'COMPUTER', 'ENGINEERING', 'MOLECULAR', 'CELL', 'GENETICS'].includes(keyword)) {
        return 80;
    }

    // 普通优先级
    return 50;
}

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WOSCategories,
        guessResearchFieldByWoS,
        getKeywordPriority
    };
}
