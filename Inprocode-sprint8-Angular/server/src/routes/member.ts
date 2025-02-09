import { Router } from 'express';
import { getMembers, getMember, deleteMember, postMember, updateMember } from '../controllers/member';

const router = Router();

//ENDPOINTS
router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', postMember);
router.put('/:id', updateMember);
router.delete('/:id', (req, res, next) => {
  deleteMember(req, res, next).catch(next); // 👈 Manejo explícito de errores
});

export default router;  