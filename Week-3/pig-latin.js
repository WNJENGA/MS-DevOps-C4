// Program
const vowelAnalyzer = (sentence) => {
    // The program recognizes vowels in a multiple-word sentence, regardless of capitalization
    const lowerCaseSentence = String(sentence.toLowerCase());
    // List of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Check if multiple word
    let vowelCount = 0;
    if (lowerCaseSentence.includes(' ')) {
        const splitWords = lowerCaseSentence.split(' ');
        for (let index = 0; index < splitWords.length; index++) {
            const singleWord = splitWords[index];
            for (let index = 0; index < singleWord.length; index++) {
                const element = singleWord[index];
                if (vowels.includes(element)) {
                    vowelCount = vowelCount + 1;
                }
            }
        }
    } else {
        for (let index = 0; index < lowerCaseSentence.length; index++) {
            const element = lowerCaseSentence[index];
            if (vowels.includes(element)) {
                vowelCount = vowelCount + 1;
            }
        }
    }
    console.log('Number of Vowels', vowelCount)
}

vowelAnalyzer('CATS CATERED THE EVENT')