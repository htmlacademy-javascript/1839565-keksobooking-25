const getDate = (onSuccsess) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking/data'
  )
    .then((response) => response.json())
    .then((date) => {
      onSuccsess(date);
    });
};

export {getDate};
