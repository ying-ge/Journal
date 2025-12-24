// 测试缩写提取功能

// 停用词列表
const stopWords = new Set(['of', 'the', 'in', 'and', 'for', 'with', 'on', 'at', 'from', 'to', 'an', 'a', 'by']);

function extractAcronym(journalName) {
    // 分割期刊名称为单词，处理连字符和空格
    const words = journalName
        .toLowerCase()
        .replace(/[-–—]/g, ' ')  // 将各种连字符替换为空格
        .split(/\s+/)
        .filter(word => word.length > 0 && !stopWords.has(word));

    // 提取每个单词的首字母
    const acronym = words.map(word => word.charAt(0)).join('');

    return acronym;
}

// 测试用例
const testCases = [
    { name: 'JOURNAL OF THE AMERICAN CHEMICAL SOCIETY', expected: 'jacs' },
    { name: 'NATURE', expected: 'n' },
    { name: 'ADVANCED MATERIALS', expected: 'am' },
    { name: 'Annual Review of Biochemistry', expected: 'arb' },
    { name: 'ACM COMPUTING SURVEYS', expected: 'acs' },
    { name: 'JOURNAL OF CLINICAL ONCOLOGY', expected: 'jco' },
    { name: 'LANCET', expected: 'l' },
];

console.log('缩写提取测试结果：\n');
testCases.forEach(test => {
    const result = extractAcronym(test.name);
    const passed = result === test.expected;
    console.log(`${passed ? '✓' : '✗'} ${test.name}`);
    console.log(`  期望: ${test.expected}, 实际: ${result}`);
    console.log('');
});
