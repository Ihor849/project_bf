const express = require('express');

const ctrl = require('../../controllers/notices');

const {
  validateBody,
  authenticate,
  isValidId,
  upload,
} = require('../../middlewares');

const router = express.Router();

const { noticeSchemas } = require('../../models');

router.get('/', ctrl.getNotices);

router.post(
  '/',
  authenticate,
  upload.single('petAvatar'),
  validateBody(noticeSchemas.addNoticeSchema),
  ctrl.addNotice
);

router.get('/:id', isValidId, ctrl.getNoticeById);

router.patch(
    '/:id/addFavorite',
    isValidId,
    authenticate,
    ctrl.addFavoriteNotice
  );

router.get('/favorite', authenticate, ctrl.getFavoriteNotices);

router.get('/userNotices', authenticate, ctrl.getOwnerNotices);

router.patch(
  '/:id/removeFavorite',
  isValidId,
  authenticate,
  ctrl.removeFavoriteNotice
);

router.delete('/:id', isValidId, authenticate, ctrl.removeOwnerNotice);

module.exports = router;
