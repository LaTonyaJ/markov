const markov = require('./markov')

test('test Markov', function(){
    let m = new markov.MarkovMachine('test text')
    expect(m).toBeTruthy;
    expect(m.words).toContain('test');
    expect(m.words.length).toEqual(2);
})

test('make chains', function(){
    let mm = new markov.MarkovMachine("the cat in the hat");
    expect(mm.chain).toBeInstanceOf(Map);
    expect(mm.chain).toEqual(new Map([
        ["the", ["cat", "hat"]],
        ["cat", ["in"]],
        ["in", ["the"]],
        ["hat", [null]]
    ]));
})

test('make text', () => {
    let mm = new markov.MarkovMachine("a b c");
    text = mm.makeText();
    expect(["a b c", "b c", "c"]).toContain(text)

})

test('make a choice', () => {
    expect([1, 2, 3]).toContain(markov.MarkovMachine.choice([1, 2, 3]));
    expect(markov.MarkovMachine.choice([1, 1, 1])).toEqual(1);
})