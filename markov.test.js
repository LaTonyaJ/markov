const markov = require('./markov')

test('test Markov', function(){
    let m = new markov.MarkovMachine('test text')
    expect(m).toBeTruthy;
    expect(m.words).toContain('test');
    expect(m.words.length).toEqual(2);
})