const FilterData = {
  species: [
    { id: 1, name: '천남성과' },
    { id: 2, name: '덩굴식물' },
    { id: 3, name: '양치식물' },
    { id: 4, name: '소철, 허브' },
    { id: 5, name: '선인장' },
    { id: 6, name: '목본류' },
  ],
  categoryInfo: [
    {
      id: 1,
      name: '사이즈',
      category: [
        { id: 1, title: 'Mini' },
        { id: 2, title: '20-40' },
        { id: 3, title: '40-100' },
        { id: 4, title: '100-150' },
      ],
    },
    {
      id: 2,
      name: '위치',
      category: [
        { id: 1, title: 'Houseplant' },
        { id: 2, title: 'Hanging' },
        { id: 3, title: 'Table' },
        { id: 4, title: 'Window' },
        { id: 5, title: 'Outdoor' },
      ],
    },
    {
      id: 3,
      name: '난이도',
      category: [
        { id: 1, title: 'Easy' },
        { id: 2, title: 'Normal' },
        { id: 3, title: 'Hard' },
      ],
    },
    {
      id: 4,
      name: '분위기',
      category: [
        { id: 1, title: 'Adorable' },
        { id: 2, title: 'Warm' },
        { id: 3, title: 'Modern' },
        { id: 4, title: 'Cozy' },
      ],
    },
  ],
};
export default FilterData;
