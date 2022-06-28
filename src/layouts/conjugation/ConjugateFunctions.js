export const conjugatePresent = (root, binyan) => {

    switch(binyan) {
        case 'Pa`al':
            return [
                root[0] + 'וֹ' + root[1] + '\u05B5' + root[2], 
                root[0] + 'וֹ' + root[1] + '\u05B5' + root[2] + 'ת',
                root[0] + 'וֹ' + root[1] + root[2] + 'י' + 'ם',
                root[0] + 'וֹ' + root[1] + root[2] + 'וֹ' + 'ת'
            ] // divide in 3, check root length maybe?
      
        case 'Hiph`il': 
          break;
        default:
          return [root, root];
      }
}