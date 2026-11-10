(() => {
    const isRedFruit = ( fruit: string ): boolean => ['manzana', 'cereza', 'ciruela'].includes(fruit);

    function getFruitsByColor( color: string ): string[] {
        const fruitsByColor: Record<string, string[]> = { red: ['manzana','fresa'], yellow: ['piña','banana'], purple: ['moras','uvas'] };
        if ( !fruitsByColor[color] ) throw Error('the color must be: red, yellow, purple');
        return fruitsByColor[color];
    }

    let isFirstStepWorking = true, isSecondStepWorking = true, isThirdStepWorking = true, isFourthStepWorking = true;

    function workingSteps() {
        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }
})();