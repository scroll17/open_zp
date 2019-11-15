module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Deputies', [
      {
        id: 41,
        photo: "https://zp.gov.ua/upload/peron_image/rjWYDp2uPWAsHdWbw218.jpg",
        link: "https://zp.gov.ua/uk/persons/item/41",
        fio: "адаманов олег федорович",
        info: "народився 18 червня 1970 року в місті Маріуполь.",
        citizenship: "Україна",
        education: "вища",
        maritalStatus: "Одружений Виховує двох доньок",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {},
};
