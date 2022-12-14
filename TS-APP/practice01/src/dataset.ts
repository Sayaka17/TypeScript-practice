import black from './assets/img/black_signal.png'
import blue from './assets/img/blue_signal.png';
import yellow from './assets/img/yellow_signal.png';
import red from './assets/img/red_signal.png';

type datasetType = {
    // インデックスをstring型に
    [key: string]: any
};

const defaultDataset: datasetType = {
    init: {
        colorSet: [blue, yellow, red]
    },
    blue_light: {
        colorSet: [blue, black, black]
    },
    yellow_light: {
        colorSet: [black, yellow, black]
    },
    red_light: {
        colorSet: [black, black, red]
    }
}


export default defaultDataset