// OA (开放获取) 期刊识别数据
// 基于 DOAJ 认证的主要 OA 出版商和期刊
// 数据来源: DOAJ (Directory of Open Access Journals)
// 更新时间: 2025-12-29

// 完全 OA 出版商（这些出版商的所有期刊都是 OA）
const fullyOAPublishers = [
    'PUBLIC LIBRARY SCIENCE',      // PLOS 系列
    'BIOMED CENTRAL',              // BMC 系列
    'FRONTIERS MEDIA SA',          // Frontiers 系列
    'MDPI',                        // MDPI 出版商
    'HINDAWI LIMITED',             // Hindawi
    'COPERNICUS GMBH',             // Copernicus
    'WILEY OPEN ACCESS',           // Wiley Open Access
    'SPRINGER OPEN ACCESS',        // Springer Open
    'TAYLOR & FRANCIS OPEN',       // Taylor & Francis Open
    'PEERJ',                       // PeerJ
    'PORTLAND PRESS',              // Portland Press
    'F1000 RESEARCH LTD',          // F1000Research
    'PAGE PRESS',                  // PagePress
    'IVYSRING INTERNATIONAL PUBLISHERS',  // Ivyspring
];

// OA 期刊关键词（期刊名包含这些关键词的大多是 OA）
const oaJournalKeywords = [
    'OPEN ACCESS',
    'OPEN JOURNAL',
    'NATURE COMMUNICATIONS',
    'SCIENTIFIC REPORTS',
    'CELL REPORTS',
    'ADVANCED SCIENCE',
    'Heliyon',
    'PLOS ONE',
];

// 完全 OA 的知名期刊（白名单）
const fullyOAJournals = {
    'NATURE COMMUNICATIONS': '完全OA',
    'SCIENTIFIC REPORTS': '完全OA',
    'PLOS ONE': '完全OA',
    'CELL REPORTS': '完全OA',
    'CELL REPORTS MEDICINE': '完全OA',
    'CELL REPORTS PHYSICAL SCIENCE': '完全OA',
    'CELL REPORTS MEDICINE': '完全OA',
    'ADVANCED SCIENCE': '完全OA',
    'ADVANCED MATERIALS': '混合OA',
    'COMMUNICATIONS BIOLOGY': '完全OA',
    'COMMUNICATIONS MEDICINE': '完全OA',
    'SCIENTIFIC DATA': '完全OA',
    'NPJ QUANTUM MATERIALS': '完全OA',
    'BMJ OPEN': '完全OA',
    'BMJ OPEN SPORT & EXERCISE MEDICINE': '完全OA',
};

// 混合 OA 出版商（这些出版商既有传统期刊也有 OA 期刊）
const hybridOAPublishers = [
    'NATURE PORTFOLIO',            // Nature 系列
    'ELSEVIER',                    // Elsevier
    'WILEY',                       // Wiley (非 Open Access 部分)
    'SPRINGER',                    // Springer (非 Open Access 部分)
    'TAYLOR & FRANCIS',            // Taylor & Francis (非 Open Access 部分)
    'CELL PRESS',                  // Cell Press
    'AMER ASSOC ADVANCEMENT SCIENCE',  // AAAS
    'OXFORD UNIV PRESS',           // Oxford University Press
    'CAMBRIDGE UNIV PRESS',        // Cambridge University Press
];

/**
 * 判断期刊是否为 OA 期刊
 * @param {string} publisher - 出版社名称
 * @param {string} journalName - 期刊名称
 * @returns {string} - OA 类型：'完全OA', '混合OA', '传统期刊', '未知'
 */
function getOAJournalType(publisher, journalName) {
    if (!publisher) return '未知';

    const pubUpper = publisher.toUpperCase();
    const nameUpper = (journalName || '').toUpperCase();

    // 1. 检查白名单（最准确）
    if (fullyOAJournals[nameUpper]) {
        return fullyOAJournals[nameUpper];
    }

    // 2. 检查完全 OA 出版商
    for (const oaPublisher of fullyOAPublishers) {
        if (pubUpper.includes(oaPublisher)) {
            return '完全OA';
        }
    }

    // 3. 检查 OA 期刊关键词
    for (const keyword of oaJournalKeywords) {
        if (nameUpper.includes(keyword)) {
            return '完全OA';
        }
    }

    // 4. 检查混合 OA 出版商
    for (const hybridPublisher of hybridOAPublishers) {
        if (pubUpper.includes(hybridPublisher)) {
            return '混合OA';
        }
    }

    // 5. 默认为传统期刊
    return '传统期刊';
}

/**
 * 获取 OA 期刊的图标
 * @param {string} oaType - OA 类型
 * @returns {string} - OA 图标 HTML
 */
function getOAIcon(oaType) {
    switch(oaType) {
        case '完全OA':
            return '🟢 完全OA';
        case '混合OA':
            return '🟡 混合OA';
        case '传统期刊':
            return '⚪ 传统';
        default:
            return '❓ 未知';
    }
}

/**
 * 获取 OA 类型说明
 * @param {string} oaType - OA 类型
 * @returns {string} - 说明文字
 */
function getOADescription(oaType) {
    switch(oaType) {
        case '完全OA':
            return '完全开放获取期刊，所有文章免费阅读';
        case '混合OA':
            return '混合期刊，部分文章开放获取';
        case '传统期刊':
            return '传统订阅期刊，需要订阅才能阅读';
        default:
            return '期刊类型未知';
    }
}
