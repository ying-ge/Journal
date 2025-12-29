// 研究领域分类映射
// 基于期刊分类创建研究领域筛选
// 更新时间: 2025-12-29

// 主要研究领域分类
const researchFields = {
    '医学与健康': {
        icon: '🏥',
        color: '#e74c3c',
        keywords: ['MEDICINE', 'HEALTH', 'CLINICAL', 'PHARMACY', 'NURSING', 'DENTISTRY', 'VETERINARY'],
        categories: ['医学', '药学', '护理学', '兽医学', '口腔医学']
    },
    '生物学与生命科学': {
        icon: '🧬',
        color: '#27ae60',
        keywords: ['BIOLOGY', 'LIFE', 'GENETICS', 'MOLECULAR', 'CELL', 'BIOTECHNOLOGY', 'BIOMEDICAL'],
        categories: ['生物学', '生态学', '生物技术', '遗传学']
    },
    '化学与材料科学': {
        icon: '⚗️',
        color: '#9b59b6',
        keywords: ['CHEMISTRY', 'MATERIAL', 'POLYMER', 'NANOTECHNOLOGY', 'CATALYSIS', 'CRYSTAL'],
        categories: ['化学', '材料科学', '纳米技术']
    },
    '物理学与天文学': {
        icon: '🔭',
        color: '#3498db',
        keywords: ['PHYSICS', 'ASTRONOMY', 'OPTICS', 'QUANTUM', 'THERMODYNAMICS', 'PLASMA'],
        categories: ['物理学', '天文学', '光学']
    },
    '数学与计算机科学': {
        icon: '💻',
        color: '#2c3e50',
        keywords: ['MATHEMATICS', 'COMPUTER', 'SOFTWARE', 'ARTIFICIAL INTELLIGENCE', 'DATA', 'ALGORITHM'],
        categories: ['数学', '计算机科学', '人工智能', '软件工程']
    },
    '地球科学与环境': {
        icon: '🌍',
        color: '#16a085',
        keywords: ['EARTH', 'ENVIRONMENT', 'GEOLOGY', 'OCEANOGRAPHY', 'CLIMATE', 'ATMOSPHERE', 'ECOLOGY'],
        categories: ['地球科学', '环境科学', '海洋学', '气象学']
    },
    '工程与技术': {
        icon: '⚙️',
        color: '#e67e22',
        keywords: ['ENGINEERING', 'TECHNOLOGY', 'ELECTRICAL', 'MECHANICAL', 'CIVIL', 'INDUSTRIAL', 'ROBOTICS'],
        categories: ['工程技术', '电气工程', '机械工程', '土木工程']
    },
    '农业与食品科学': {
        icon: '🌾',
        color: '#f39c12',
        keywords: ['AGRICULTURE', 'FOOD', 'FORESTRY', 'FISHERIES', 'HORTICULTURE', 'VETERINARY'],
        categories: ['农业', '食品科学', '林业', '渔业']
    },
    '人文社科': {
        icon: '📚',
        color: '#8e44ad',
        keywords: ['SOCIAL', 'HUMANITIES', 'PSYCHOLOGY', 'EDUCATION', 'ECONOMICS', 'POLITICAL', 'LAW'],
        categories: ['社会科学', '人文', '心理学', '教育学', '经济学', '法学']
    },
    '艺术与设计': {
        icon: '🎨',
        color: '#d35400',
        keywords: ['ART', 'DESIGN', 'MUSIC', 'ARCHITECTURE', 'FILM', 'LITERATURE'],
        categories: ['艺术', '设计', '音乐', '建筑']
    }
};

/**
 * 根据期刊名称推断研究领域
 * @param {string} journalName - 期刊名称
 * @returns {string} 研究领域
 */
function guessResearchField(journalName) {
    if (!journalName) return '未分类';

    const nameUpper = journalName.toUpperCase();

    // 检查每个研究领域的关键词
    for (const [fieldName, fieldData] of Object.entries(researchFields)) {
        for (const keyword of fieldData.keywords) {
            if (nameUpper.includes(keyword)) {
                return fieldName;
            }
        }
    }

    // 检查缩写
    const abbreviations = {
        'JAM': '医学与健康',
        'JBC': '生物学与生命科学',
        'JACS': '化学与材料科学',
        'PRL': '物理学与天文学',
        'IEEE': '工程与技术'
    };

    for (const [abbr, field] of Object.entries(abbreviations)) {
        if (nameUpper.includes(abbr)) {
            return field;
        }
    }

    return '其他';
}

/**
 * 获取研究领域的显示信息
 * @param {string} fieldName - 研究领域名称
 * @returns {object} 包含图标、颜色等信息
 */
function getResearchFieldInfo(fieldName) {
    return researchFields[fieldName] || {
        icon: '📁',
        color: '#95a5a6',
        keywords: [],
        categories: []
    };
}

/**
 * 获取所有研究领域列表
 * @returns {array} 研究领域数组
 */
function getAllResearchFields() {
    return Object.keys(researchFields).map(name => ({
        name: name,
        icon: researchFields[name].icon,
        color: researchFields[name].color
    }));
}

/**
 * 根据期刊的 JIF/SJR 分类推断研究领域
 * @param {string} journalName - 期刊名称
 * @param {object} jifMetrics - JIF 指标
 * @param {object} sjrMetrics - SJR 指标
 * @returns {string} 研究领域
 */
function getJournalResearchField(journalName, jifMetrics, sjrMetrics) {
    // 首先尝试从期刊名称推断
    const fromName = guessResearchField(journalName);

    if (fromName !== '其他') {
        return fromName;
    }

    // 如果从名称无法判断，使用默认分类
    // 可以根据 Publisher 的特点来推断
    if (jifMetrics && jifMetrics.publisher) {
        const publisher = jifMetrics.publisher.toUpperCase();

        // 医学类出版商
        if (publisher.includes('MEDICAL') || publisher.includes('CLINICAL') ||
            publisher.includes('HEALTH') || publisher.includes('PHARMA')) {
            return '医学与健康';
        }

        // 工程技术类出版商
        if (publisher.includes('ENGINEERING') || publisher.includes('IEEE') ||
            publisher.includes('TECHNOLOGICAL')) {
            return '工程与技术';
        }
    }

    return '其他';
}

/**
 * 检查期刊是否属于指定研究领域
 * @param {string} journalName - 期刊名称
 * @param {string} field - 研究领域
 * @returns {boolean}
 */
function isJournalInField(journalName, field) {
    const journalField = guessResearchField(journalName);
    return journalField === field;
}
