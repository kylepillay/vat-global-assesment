import _ from 'lodash';

const range = (current: number, total: number) => {
    
    let start, end
    
    if (current < 10) {
        start = 1
    } else {
        start = current - 9
    }

    if (current >= total) {
        end = total
    } else {
        end = current + 9
    }

    return _.range(start, end)
  };

export default range;