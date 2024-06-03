document.getElementById('setForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const set1 = document.getElementById('set1').value.split(',').map(Number);
    const set2 = document.getElementById('set2').value.split(',').map(Number);
    const operation = document.getElementById('operation').value;

    const set1Set = new Set(set1);
    const set2Set = new Set(set2);

    let result;
    let explanation;

    switch(operation) {
        case 'union':
            result = new Set([...set1Set, ...set2Set]);
            explanation = `Union combines all elements from both sets without duplicates.`;
            break;
        case 'intersection':
            result = new Set([...set1Set].filter(x => set2Set.has(x)));
            explanation = `Intersection includes only elements that are present in both sets.`;
            break;
        case 'difference':
            result = new Set([...set1Set].filter(x => !set2Set.has(x)));
            explanation = `Difference includes elements from the first set that are not in the second set.`;
            break;
        case 'symmetric_difference':
            result = new Set([...set1Set].filter(x => !set2Set.has(x)).concat([...set2Set].filter(x => !set1Set.has(x))));
            explanation = `Symmetric difference includes elements that are in either of the sets but not in both.`;
            break;
        default:
            result = 'Invalid operation';
            explanation = '';
    }

    const resultElement = document.getElementById('result');
    const explanationElement = document.getElementById('explanation');
    resultElement.textContent = `Result: {${Array.from(result).join(', ')}}`;
    explanationElement.textContent = explanation;
    resultElement.style.opacity = 0;
    explanationElement.style.opacity = 0;
    setTimeout(() => {
        resultElement.style.opacity = 1;
        explanationElement.style.opacity = 1;
    }, 300);
});
