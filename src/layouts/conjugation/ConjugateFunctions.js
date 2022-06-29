export const conjugatePresent = (root, binyan) => {

    switch(binyan) {
        case 'Pa`al':
            return [
                root[0] + 'וֹ' + root[1] + '\u05B5' + root[2], //e
                root[0] + 'וֹ' + root[1] + '\u05B5' + root[2] + '\u05B5' + 'ת',
                root[0] + 'וֹ' + root[1] + root[2] + '\u05B4' + 'י' + 'ם',
                root[0] + 'וֹ' + root[1] + root[2] + 'וֹ' + 'ת'
            ] // divide in 3, check root length maybe?
        case 'Pi`el':
            return [
                'מְ' + root[0] + '\u05B7' + root[1] + '\u05B5' + root[2], //ae
                'מְ' + root[0] + '\u05B7' + root[1] + '\u05B5' + root[2] + '\u05B5' + 'ת',
                'מְ' + root[0] + '\u05B7' + root[1] + root[2] + '\u05B4' + 'י' + 'ם',
                'מְ' + root[0] + '\u05B7' + root[1] + root[2] + 'וֹ' + 'ת'
            ]
        case 'Hiph`il':
            return [
                'מַ' + root[0] + root[1] + '\u05B4' + 'י' + root[2], // i
                'מַ' + root[0] + root[1] + '\u05B4' + 'י' + root[2] + '\u05B7' + 'ה',
                'מַ' + root[0] + root[1] + '\u05B4' + 'י' + root[2] + '\u05B4' + 'י' + 'ם',
                'מַ' + root[0] + root[1] + '\u05B4' + 'י' + root[2] + 'וֹ' + 'ת'
            ]
        case 'Hitpael': 
            return [
                'מ' + '\u05B4' + 'ת' + root[0] + '\u05B7' + root[1] + '\u05B5' + root[2], //ae
                'מ' + '\u05B4' + 'ת' + root[0] + '\u05B7' + root[1] + '\u05B5' + root[2]+ '\u05B5' + 'ת',
                'מ' + '\u05B4' + 'ת' + root[0] + '\u05B7' + root[1] + root[2] + '\u05B4' + 'י' + 'ם',
                'מ' + '\u05B4' + 'ת' + root[0] + '\u05B7' + root[1] + root[2] + 'וֹ' + 'ת'
            ]
        default:
          return [root];
      }
}

export const conjugatePast = (root, binyan) => {
    
    switch (binyan) {
        case 'Pa`al':
            return [
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'ת'+ '\u05B4' + 'י',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'ת',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B8',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2],
                root[0] + '\u05B8' + root[1] + root[2] + '\u05B8' + 'ה',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'נ' + 'וּ',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B5' + 'ם',
                root[0] + '\u05B8' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B5' + 'ן',
                root[0] + '\u05B8' + root[1] + root[2] + 'וּ'
            ]
        case 'Pi`el':
            return [
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B4' + 'י',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'ת',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B8',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B5' + root[2],
                root[0] + '\u05B4' + 'י' + root[1] + root[2] + '\u05B7' + 'ה',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'נ' + 'וּ',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B5' + 'ם',
                root[0] + '\u05B4' + 'י' + root[1] + '\u05B7' + root[2] + 'ת' + '\u05B5' + 'ן',
                root[0] + '\u05B4' + 'י' + root[1] + root[2] + 'וּ'
            ]
        default:
            return [root];
    }
}