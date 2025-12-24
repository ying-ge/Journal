// 测试缩写片段匹配功能

const stopWords = new Set(['of', 'the', 'in', 'and', 'for', 'with', 'on', 'at', 'from', 'to', 'an', 'a', 'by']);

function extractAcronym(journalName) {
    const words = journalName
        .toLowerCase()
        .replace(/[-–—]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 0 && !stopWords.has(word));
    return words.map(word => word.charAt(0)).join('');
}

function matchesAcronymFragment(searchTerm, acronym, journalName) {
    // 如果搜索词包含空格，说明是多个首字母片段（如 "mol can"）
    if (searchTerm.includes(' ')) {
        const searchFragments = searchTerm.toLowerCase().split(/\s+/).filter(f => f.length > 0);

        // 检查每个片段是否对应期刊名中的单词
        const words = journalName
            .toLowerCase()
            .replace(/[-–—]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 0);

        // 为每个搜索片段找到匹配的单词
        let matchedIndices = new Set();
        for (const fragment of searchFragments) {
            let found = false;
            for (let i = 0; i < words.length; i++) {
                if (matchedIndices.has(i)) continue; // 跳过已匹配的单词

                // 检查单词是否以该片段开头
                if (words[i].startsWith(fragment)) {
                    matchedIndices.add(i);
                    found = true;
                    break;
                }
            }
            if (!found) return false; // 没找到匹配
        }
        return true;
    }

    // 单个搜索词：检查是否是完整缩写的子串
    return acronym.includes(searchTerm);
}

// 测试用例
const testCases = [
    // 基本缩写匹配
    { search: 'jacs', journal: 'JOURNAL OF THE AMERICAN CHEMICAL SOCIETY', expected: true },
    { search: 'nat', journal: 'NATURE', expected: true },

    // 新增：缩写片段匹配
    { search: 'mol can', journal: 'MOLECULAR CANCER', expected: true },
    { search: 'j am chem', journal: 'JOURNAL OF THE AMERICAN CHEMICAL SOCIETY', expected: true },
    { search: 'adv mat', journal: 'ADVANCED MATERIALS', expected: true },
    { search: 'ann oncol', journal: 'ANNALS OF ONCOLOGY', expected: true },

    // 应该不匹配的情况
    { search: 'xyz', journal: 'MOLECULAR CANCER', expected: false },
    { search: 'mol xyz', journal: 'MOLECULAR CANCER', expected: false },
];

console.log('缩写片段匹配测试结果：\n');
let passed = 0;
let failed = 0;

testCases.forEach(test => {
    const acronym = extractAcronym(test.journal);
    const result = matchesAcronymFragment(test.search, acronym, test.journal);
    const success = result === test.expected;

    if (success) {
        passed++;
        console.log(`✓ "${test.search}" → "${test.journal}"`);
        console.log(`  缩写: ${acronym} | 匹配: ${result}`);
    } else {
        failed++;
        console.log(`✗ "${test.search}" → "${test.journal}"`);
        console.log(`  缩写: ${acronym} | 期望: ${test.expected}, 实际: ${result}`);
    }
    console.log('');
});

console.log(`总计: ${testCases.length} 个测试`);
console.log(`通过: ${passed} 个`);
console.log(`失败: ${failed} 个`);
