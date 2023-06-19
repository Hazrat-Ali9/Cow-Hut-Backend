import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CowController } from './cow.controller';
import { CowValidation } from './cow.validation';
const router = express.Router();

router.get('/', CowController.getAllCows);
router.post(
  '/',
  validateRequest(CowValidation.addCowZodSchema),
  CowController.addCow
);
router.get('/:id', CowController.getSingleCow);

router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZodSchema),
  CowController.updateCow
);
router.delete('/:id', CowController.deleteCow);

export const CowRoutes = router;
