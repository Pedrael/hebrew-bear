const vowels = {e: '\u05B5', a: '\u05B7', i: '\u05B4', A: '\u05B8'}

export const conjugatePresent = (root, binyan) => {

    switch(binyan) {
        case 'Paal':
            return {
                'S M': root[0] + 'וֹ' + root[1] + vowels.e + root[2], //e
                'S F': root[0] + 'וֹ' + root[1] + vowels.e + root[2] + vowels.e + 'ת',
                'P M': root[0] + 'וֹ' + root[1] + root[2] + vowels.i + 'י' + 'ם',
                'P F': root[0] + 'וֹ' + root[1] + root[2] + 'וֹ' + 'ת'
            } // divide in 3, check root length maybe?
        case 'Piel':
            return {
                'S M': 'מְ' + root[0] + vowels.a + root[1] + vowels.e + root[2], //ae
                'S F': 'מְ' + root[0] + vowels.a + root[1] + vowels.e + root[2] + vowels.e + 'ת',
                'P M': 'מְ' + root[0] + vowels.a + root[1] + root[2] + '\u05B4' + 'י' + 'ם',
                'P F': 'מְ' + root[0] + vowels.a + root[1] + root[2] + 'וֹ' + 'ת'
            }
        case 'Hiphil':
            return {
                'S M': 'מַ' + root[0] + root[1] + vowels.i + 'י' + root[2], // i
                'S F': 'מַ' + root[0] + root[1] + vowels.i + 'י' + root[2] + vowels.a + 'ה',
                'P M': 'מַ' + root[0] + root[1] + vowels.i + 'י' + root[2] + vowels.i + 'י' + 'ם',
                'P F': 'מַ' + root[0] + root[1] + vowels.i + 'י' + root[2] + 'וֹ' + 'ת'
            }
        case 'Hitpael': 
            return {
                'S M': 'מ' + vowels.i + 'ת' + root[0] + vowels.a + root[1] + vowels.e + root[2], //ae
                'S F': 'מ' + vowels.i + 'ת' + root[0] + vowels.a + root[1] + vowels.e + root[2]+ vowels.e + 'ת',
                'P M': 'מ' + vowels.i + 'ת' + root[0] + vowels.a + root[1] + root[2] + vowels.i + 'י' + 'ם',
                'P F': 'מ' + vowels.i + 'ת' + root[0] + vowels.a + root[1] + root[2] + 'וֹ' + 'ת'
            }
        default:
          return [root];
      }
}

export const conjugatePast = (root, binyan) => {
    
    switch (binyan) {
        case 'Paal':
            return {
                'I': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'ת'+ vowels.i + 'י',
                'You F': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'ת',
                'You M': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'ת' + vowels.A,
                'He': root[0] + vowels.A + root[1] + vowels.a + root[2],
                'She': root[0] + vowels.A + root[1] + root[2] + vowels.A + 'ה',
                'We': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'נ' + 'וּ',
                'You M P': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ם',
                'You F P': root[0] + vowels.A + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ן',
                'They': root[0] + vowels.A + root[1] + root[2] + 'וּ'
            }
        case 'Piel':
            return {
                'I': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'ת' + vowels.i + 'י',
                'You F': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'ת',
                'You M': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'ת' + '\u05B8',
                'He': root[0] + vowels.i + 'י' + root[1] + vowels.e + root[2],
                'She': root[0] + vowels.i + 'י' + root[1] + root[2] + vowels.a + 'ה',
                'We': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'נ' + 'וּ',
                'You M P': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ם',
                'You F P': root[0] + vowels.i + 'י' + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ן',
                'They': root[0] + vowels.i + 'י' + root[1] + root[2] + 'וּ'
            }
        default:
            return [root];
    }
}