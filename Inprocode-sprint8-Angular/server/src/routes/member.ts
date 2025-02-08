import { Router } from 'express';
import { getMembers, getMember, deleteMember, postMember } from '../controllers/member';



const router = Router();

//ENDPOINTS
router.get('/', getMembers);
router.get('/:id', getMember);
router.delete('/:id', deleteMember);
router.post('/', postMember);


export default router;