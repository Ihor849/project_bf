const { Notice } = require('../../models');

const { httpError } = require('../../helpers');

const { CATEGORY_FOR_PARAMS } = require('../../constants/noticeConstants');

const getNotices = async (req, res) => {
    //Внутри функции создается пустой объект `searchParams`, который будет использоваться для фильтрации результатов.
  const searchParams = {};
//Затем, используя деструктуризацию объекта `req.query`,
//  извлекаются значения `page`, `limit`, 
// `NoticesCategoriesNav` и `NoticesSearch`.
//  Если эти значения не указаны,
//  используются значения по умолчанию:
//  `page = 1`, `limit = 12`,
//  `NoticesCategoriesNav = 'sell'` и `NoticesSearch = ''`.

  const {
    page = 1,
    limit = 12,
    NoticesCategoriesNav = 'sell',
    NoticesSearch = '',
  } = req.query;
  //Далее, вычисляется значение переменной 
//`skip`, которое определяет, сколько записей нужно
//  пропустить перед получением результатов из базы данных.
  const skip = (page - 1) * limit;
//Затем, проверяется, присутствует ли значение
//  `NoticesCategoriesNav` в массиве `CATEGORY_FOR_PARAMS`.
//  Если нет, устанавливается значение `"sell"`
//  для `searchParams.NoticesCategoriesNav`.
//  В противном случае, значение `NoticesCategoriesNav`
//  преобразуется в соответствующий формат и устанавливается
//  в `searchParams.NoticesCategoriesNav`.
  if (!CATEGORY_FOR_PARAMS.includes(NoticesCategoriesNav)) {
    searchParams.NoticesCategoriesNav = "sell";
  } else {
    searchParams.NoticesCategoriesNav =
      NoticesCategoriesNav === "lost-found"
        ? NoticesCategoriesNav.split("-").join("/")
        : NoticesCategoriesNav.split("-").join(" ");
  }
  //Далее, используя метод `Notice.find()`,
//    выполняется поиск записей в базе данных,
//  соответствующих указанным фильтрам.
//  Фильтры включают значение `category`,
//  полученное из `searchParams.NoticesCategoriesNav`,
//  и значение `title`, которое соответствует регулярному
//  выражению `${NoticesSearch}` с флагом `$options: "i"`,
//  что означает регистронезависимый поиск.
  const notices = await Notice.find(
    {
      category: `${searchParams.NoticesCategoriesNav}`,
      title: {
        $regex: `${NoticesSearch}`,
        $options: "i",
      },
    },
    //`"-createdAt -updatedAt"` является параметром, 
    // переданным в метод `Notice.find()` для указания,
    //  какие поля необходимо исключить из результирующих 
    // записей.
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  );
  const totalNotices = await Notice.countDocuments({
    category: `${searchParams.NoticesCategoriesNav}`,
    title: {
      $regex: `${NoticesSearch}`,
      $options: "i",
    },
  });
  const totalPages = !totalNotices ? 1 : Math.ceil(totalNotices / limit);

  if (!notices) throw httpError(404, "Not Found");

  res.status(200).json({ notices, totalPages });

};

module.exports = getNotices;
