const vowels = {e: '\u05B5', a: '\u05B7', i: '\u05B4', A: '\u05B8', _e: '\u05B0'}

export const createInfinitive = (root, binyan) => {

    switch(binyan) {
        case 'Paal': 
            return {
                'inf': 'ל' + vowels.i + root[0] + root[1] + 'וֹ' + root[2]
            }
        case 'Piel':
            return {
                'inf': 'ל' + vowels.e + root[0] + vowels.a + root[1] + vowels.e + root[2]
            }
        case 'Hiphil':
            return {
                'inf': 'לה' + vowels.a + root[0] + vowels.a + root[1] + vowels.i + 'י' + root[2]
            }
        case 'Hitpael': 
            return {
                'inf': 'לה' + vowels.i + 'ת' + root[0] + vowels.a + root[1] + vowels.e + root[2]
            }
        default:
            return {
                'inf': root
            }
    }
}

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
          return {'root': root};
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
        case 'Hiphil':
            return {
                'I': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'ת' + vowels.i + 'י',
                'You F': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'ת',
                'You M': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'ת' + vowels.A + 'ה',
                'He': 'הִ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'She': 'הִ' + root[0] + root[1] + vowels.i + 'י' + root[2] + vowels.A + 'ה',
                'We': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'נ' + 'וּ',
                'You M P': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ם',
                'You F P': 'הִ' + root[0] + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ן',
                'They': 'הִ' + root[0] + root[1] + vowels.i + 'י' + root[2] + 'וּ' 

            }
        case 'Hitpael':
            return {
                'I': 'הִת' + root[0] + vowels.a + root[1] + vowels.a + root[2] + 'ת' + vowels.i + 'י',
                'You F': 'הִת' + root[0] + vowels.a +root[1] + vowels.a + root[2] + 'ת',
                'You M': 'הִת' + root[0] + vowels.a + root[1] + vowels.a + root[2] + 'ת' + vowels.A + 'ה',
                'He': 'הִת' + root[0] + vowels.a +  root[1] + vowels.e + 'י' + root[2],
                'She': 'הִת' + root[0] + root[1] + vowels.a + root[2] + vowels.A + 'ה',
                'We': 'הִת' + root[0] + vowels.a + root[1] + vowels.a + root[2] + 'נ' + 'וּ',
                'You M P': 'הִת' + root[0] + vowels.a + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ם',
                'You F P': 'הִת' + root[0] + vowels.a + root[1] + vowels.a + root[2] + 'ת' + vowels.e + 'ן',
                'They': 'הִת' + root[0] + vowels.a + root[1] + root[2] + 'וּ'
            }
        default:
            return {'root': root};
    }
}

export const conjugateFuture = (root, binyan) => {

    switch(binyan) {
        case 'Paal':
            return {
                'I': 'אֶ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2],
                'We': 'נִ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2],
                'You M': 'תִּ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2],
                'You F': 'תִּ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2] + 'י',
                'You': 'תִּ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2] + 'וּ',
                'He': 'י' + vowels.i + root[0] + vowels._e + root[1] + 'וֹ' + root[2],
                'She': 'תִּ' + root[0] + vowels._e + root[1] + 'וֹ' + root[2],
                'They': 'י' + vowels.i + root[0] + vowels._e + root[1] + vowels._e + root[2] + 'וּ'
            }
        case 'Piel':
            return {
                'I': 'אֲ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'We': 'נְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'You M': 'תְּ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'You F': 'תְּ' + root[0] + vowels.a + root[1] + root[2] + 'י',
                'You': 'תְּ' + root[0] + vowels.a + root[1] + root[2] + 'וּ',
                'He': 'יְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'She': 'תְּ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'They': 'יְ' + root[0] + vowels.a + root[1] + root[2] + 'וּ'
            }
        case 'Hiphil':
            return {
                'I': 'אַ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'We': 'נַ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'You M': 'תַּ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'You F': 'תַּ' + root[0] + root[1] + vowels.i + 'י' + root[2] + vowels.i + 'י',
                'You': 'תַּ' + root[0] + root[1] + vowels.i + 'י' + root[2] + 'וּ',
                'He': 'יַ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'She': 'תַּ' + root[0] + root[1] + vowels.i + 'י' + root[2],
                'They': 'יַ' + root[0] + root[1] + vowels.i + 'י' + root[2] + 'וּ'
            }
        case 'Hitpael':
            return {
                'I': 'אֶתְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'We': 'נִתְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'You M': 'תִּתְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'You F': 'תִּתְ' + root[0] + vowels.a + root[1] + root[2] + vowels.i + 'י',
                'You': 'תִּתְ' + root[0] + vowels.a + root[1] + root[2] + 'וּ',
                'He': 'יִתְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'She': 'תִּתְ' + root[0] + vowels.a + root[1] + vowels.e + root[2],
                'They': 'יִתְ' + root[0] + vowels.a + root[1] + root[2] + 'וּ'
            }
        default:
            return {'root': root};
    }
}