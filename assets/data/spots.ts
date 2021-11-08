import Spot from '../../src/models/Spot';

const spots: Spot[] = [
  {
    id: '0',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    sport: 'Tenis',
    spotDesc: 'Spot génial pour faire du ténis',
    spotLongDesc: 'Qu\'est-ce que le Lorem Ipsum?\n' +
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
        '\n' +
        'Pourquoi l\'utiliser?\n' +
        'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).\n' +
        '\n',
    spotPostalCode: 43000,
    spotCityName: 'Le Puy-en-Velay',
    author: 'Thibaud',
    createAt: '02/04/2020',
    coordinates: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: '1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
    sport: 'Handball',
    spotDesc: 'Super coin bien équipe pour faire du hand',
    spotLongDesc: 'Qu\'est-ce que le Lorem Ipsum?\n' +
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
        '\n' +
        'Pourquoi l\'utiliser?\n' +
        'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).\n' +
        '\n',
    spotPostalCode: 43000,
    spotCityName: 'Le Puy-en-Velay',
    author: 'Thibaud',
    createAt: '02/04/2020',
    coordinates: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: '2',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
    sport: 'Badminton',
    spotDesc: 'Envie de faire voler un volant, cest lendroit rêver',
    spotLongDesc: 'Qu\'est-ce que le Lorem Ipsum?\n' +
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
        '\n' +
        'Pourquoi l\'utiliser?\n' +
        'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).\n' +
        '\n',
    spotPostalCode: 43000,
    spotCityName: 'Le Puy-en-Velay',
    author: 'Thibaud',
    createAt: '02/04/2020',
    coordinates: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: '3',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg',
    sport: 'Foot',
    spotDesc: 'Stade synthétique très accessible, super terrain',
    spotLongDesc: 'Qu\'est-ce que le Lorem Ipsum?\n' +
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
        '\n' +
        'Pourquoi l\'utiliser?\n' +
        'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).\n' +
        '\n',
    spotPostalCode: 43000,
    spotCityName: 'Le Puy-en-Velay',
    author: 'Thibaud',
    createAt: '02/04/2020',
    coordinates: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
];

export default spots;
