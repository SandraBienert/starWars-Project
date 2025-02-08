import { Router } from 'express';
import { getMembers, getMember, deleteMember, postMember, updateMember } from '../controllers/member';

const router = Router();

//ENDPOINTS
router.get('/', getMembers);
router.get('/:id', getMember);
router.delete('/:id', deleteMember);
router.post('/', postMember);
router.put('/:id', updateMember);


export default router;